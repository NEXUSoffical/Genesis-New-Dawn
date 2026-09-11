import { Agent, Building, ChronicleEvent, ItemType, MarketItem, TileType, Animal } from './types';
import { WorldManager } from './World';
import { EconomyEngine } from './Economy';
import { AIEngine } from './AIEngine';
import { TECHNOLOGIES } from './Inventions';
import { AuthManager } from '../auth/AuthManager';

export interface SerializedAgent extends Omit<Agent, 'knowledge'> {
  knowledge: string[];
}

export interface GenesisSaveState {
  version: number;
  timestamp: number;
  world: {
    seed: number;
    day: number;
    timeOfDay: number;
    season: 'Spring' | 'Summer' | 'Autumn' | 'Winter';
    weather: 'Clear' | 'Rain' | 'Overcast';
    buildings: Building[];
    revealedCoords: [number, number][];
    modifiedTiles?: { x: number; y: number; type: TileType; resourceAmount: number }[];
  };
  agents: SerializedAgent[];
  animals?: Animal[];
  technologies: {
    id: string;
    discovered: boolean;
    researchProgress: number;
    discoveredBy?: string;
    discoveredAtDay?: number;
  }[];
  economy: {
    items: [ItemType, MarketItem][];
    treasuryCoins: number;
    totalGdp: number;
    transactionCount: number;
    isCurrencyUnlocked: boolean;
  };
  chronicles: ChronicleEvent[];
  hasSpawnedCustomCharacter?: boolean;
}

export class PersistenceManager {
  private static getStorageKey(): string {
    const user = AuthManager.getCachedUser() || 'guest';
    return `genesis_world_save_${user}_v1`;
  }
  private autoSaveTimer: number = 0;
  private readonly AUTO_SAVE_INTERVAL = 15; // Save every 15 seconds

  public static hasSaveData(): boolean {
    try {
      return localStorage.getItem(PersistenceManager.getStorageKey()) !== null;
    } catch {
      return false;
    }
  }

  public static saveState(
    world: WorldManager,
    economy: EconomyEngine,
    aiEngine: AIEngine,
    agents: Agent[],
    animals: Animal[] = [],
    hasSpawnedCustomCharacter: boolean = false
  ): boolean {
    try {
      // 1. Gather buildings
      const buildings = Array.from(world.buildings.values());

      // 2. Gather revealed tiles
      const revealedCoords: [number, number][] = [];
      const modifiedTiles: { x: number; y: number; type: TileType; resourceAmount: number }[] = [];

      for (const chunk of world.chunks.values()) {
        for (let lx = 0; lx < 16; lx++) {
          for (let ly = 0; ly < 16; ly++) {
            const tile = chunk.tiles[lx][ly];
            if (tile.isRevealed) {
              revealedCoords.push([tile.x, tile.y]);
            }
            // Save modified resources/tiles
            if (tile.resourceAmount !== tile.maxResource || tile.building) {
              modifiedTiles.push({
                x: tile.x,
                y: tile.y,
                type: tile.type,
                resourceAmount: tile.resourceAmount
              });
            }
          }
        }
      }

      // 3. Serialize agents (convert Set to Array)
      const serializedAgents: SerializedAgent[] = agents.map((a) => ({
        ...a,
        knowledge: Array.from(a.knowledge),
      }));

      // 4. Serialize Tech progress
      const serializedTechs = TECHNOLOGIES.map((t) => ({
        id: t.id,
        discovered: t.discovered,
        researchProgress: t.researchProgress || 0,
        discoveredBy: t.discoveredBy,
        discoveredAtDay: t.discoveredAtDay,
      }));

      // 5. Serialize Economy
      const serializedEconomy = {
        items: Array.from(economy.items.entries()),
        treasuryCoins: economy.treasuryCoins,
        totalGdp: economy.totalGdp,
        transactionCount: economy.transactionCount,
        isCurrencyUnlocked: economy.isCurrencyUnlocked,
      };

      const payload: GenesisSaveState = {
        version: 1,
        timestamp: Date.now(),
        world: {
          seed: world.seed,
          day: world.day,
          timeOfDay: world.timeOfDay,
          season: world.season,
          weather: world.weather,
          buildings,
          revealedCoords,
          modifiedTiles,
        },
        agents: serializedAgents,
        animals,
        technologies: serializedTechs,
        economy: serializedEconomy,
        chronicles: aiEngine.chronicles.slice(0, 80),
        hasSpawnedCustomCharacter,
      };

      localStorage.setItem(PersistenceManager.getStorageKey(), JSON.stringify(payload));
      return true;
    } catch (err) {
      console.warn('Failed to save game state to localStorage:', err);
      return false;
    }
  }

  public static loadState(
    world: WorldManager,
    economy: EconomyEngine,
    aiEngine: AIEngine
  ): { agents: Agent[]; animals?: Animal[]; elapsedSeconds: number; hasSpawnedCustomCharacter: boolean } | null {
    try {
      const raw = localStorage.getItem(PersistenceManager.getStorageKey());
      if (!raw) return null;

      const data: GenesisSaveState = JSON.parse(raw);
      if (!data || !data.world || !data.agents) return null;

      // 1. Restore World Environment
      world.seed = data.world.seed || world.seed;
      world.day = data.world.day || 1;
      world.timeOfDay = data.world.timeOfDay || 7.0;
      world.season = data.world.season || 'Spring';
      world.weather = data.world.weather || 'Clear';

      // Restore Buildings
      world.buildings.clear();
      if (data.world.buildings) {
        for (const b of data.world.buildings) {
          world.buildings.set(b.id, b);
          const tile = world.getTile(b.x, b.y);
          if (tile) {
            tile.building = b;
          }
        }
      }

      // Restore Revealed Coords
      if (data.world.revealedCoords) {
        for (const [x, y] of data.world.revealedCoords) {
          const tile = world.getTile(x, y);
          if (tile) {
            tile.isRevealed = true;
          }
        }
      }

      // Restore Modified Tiles
      if (data.world.modifiedTiles) {
        for (const mt of data.world.modifiedTiles) {
          const tile = world.getTile(mt.x, mt.y);
          if (tile) {
            tile.type = mt.type;
            tile.resourceAmount = mt.resourceAmount;
          }
        }
      }

      // 2. Restore Technologies
      if (data.technologies) {
        for (const st of data.technologies) {
          const tech = TECHNOLOGIES.find((t) => t.id === st.id);
          if (tech) {
            tech.discovered = st.discovered;
            tech.researchProgress = st.researchProgress;
            tech.discoveredBy = st.discoveredBy;
            tech.discoveredAtDay = st.discoveredAtDay;
          }
        }
      }

      // 3. Restore Economy
      if (data.economy) {
        if (data.economy.items) {
          economy.items = new Map(data.economy.items);
        }
        economy.treasuryCoins = data.economy.treasuryCoins || 0;
        economy.totalGdp = data.economy.totalGdp || 0;
        economy.transactionCount = data.economy.transactionCount || 0;
        economy.isCurrencyUnlocked = !!data.economy.isCurrencyUnlocked;
      }

      // 4. Restore Chronicles
      if (data.chronicles && Array.isArray(data.chronicles)) {
        aiEngine.chronicles = data.chronicles;
      }

      // 5. Restore Agents
      const restoredAgents: Agent[] = data.agents.map((sa) => {
        const baseWeight = sa.maxCarryWeight || 30;
        return {
          ...sa,
          knowledge: new Set(sa.knowledge || []),
          maxCarryWeight: Math.max(baseWeight, 45 + Math.floor(Math.random() * 20)),
        };
      });

      // 6. Restore Animals
      const restoredAnimals: Animal[] = data.animals || [];

      // 7. Calculate offline elapsed real-time
      const now = Date.now();
      const elapsedMs = Math.max(0, now - (data.timestamp || now));
      const elapsedSeconds = Math.floor(elapsedMs / 1000);

      const hasSpawnedCustomCharacter = !!data.hasSpawnedCustomCharacter || localStorage.getItem('genesis_custom_pioneer_spawned') === 'true';

      return { agents: restoredAgents, animals: restoredAnimals, elapsedSeconds, hasSpawnedCustomCharacter };
    } catch (err) {
      console.error('Failed to parse and load Genesis save data:', err);
      return null;
    }
  }

  public static exportSaveFile(
    world: WorldManager,
    economy: EconomyEngine,
    aiEngine: AIEngine,
    agents: Agent[],
    animals: Animal[] = [],
    hasSpawnedCustomCharacter: boolean = false
  ): void {
    this.saveState(world, economy, aiEngine, agents, animals, hasSpawnedCustomCharacter);
    const raw = localStorage.getItem(PersistenceManager.getStorageKey());
    if (!raw) return;

    const blob = new Blob([raw], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `genesis_civilization_day_${world.day}_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  public static importSaveFile(
    file: File,
    onSuccess: () => void,
    onError: (msg: string) => void
  ): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text);
        if (!parsed.world || !parsed.agents) {
          onError('Invalid Genesis world file format.');
          return;
        }
        localStorage.setItem(PersistenceManager.getStorageKey(), text);
        onSuccess();
      } catch (err: any) {
        onError(`Corrupted save file: ${err?.message || 'unknown error'}`);
      }
    };
    reader.readAsText(file);
  }

  public update(
    deltaSec: number,
    world: WorldManager,
    economy: EconomyEngine,
    aiEngine: AIEngine,
    agents: Agent[],
    animals: Animal[] = [],
    hasSpawnedCustomCharacter: boolean = false
  ): void {
    this.autoSaveTimer += deltaSec;
    if (this.autoSaveTimer >= this.AUTO_SAVE_INTERVAL) {
      this.autoSaveTimer = 0;
      PersistenceManager.saveState(world, economy, aiEngine, agents, animals, hasSpawnedCustomCharacter);
    }
  }
}
