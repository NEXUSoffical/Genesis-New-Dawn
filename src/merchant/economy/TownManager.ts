import { TownState, VillageBuilding, DifficultyLevel } from '../types';

const STORAGE_KEY = 'genesis_number_merchant_save_v1';

export const INITIAL_BUILDINGS: Record<string, VillageBuilding> = {
  bakery: {
    id: 'bakery',
    name: 'Village Bakery',
    level: 1,
    maxLevel: 3,
    cost: 30,
    unlocked: true,
    icon: '🥖',
    description: 'Bakes sweet tarts and crusty loaves. Unlocks fraction pastry challenges.',
    benefit: '+2 coins bonus tip on pastry orders'
  },
  blacksmith: {
    id: 'blacksmith',
    name: 'Iron Forge',
    level: 0,
    maxLevel: 3,
    cost: 50,
    unlocked: false,
    icon: '⚒️',
    description: 'Forges shields, arrows, and swords. Unlocks bundle multiplication orders.',
    benefit: 'Unlocks Sir Gideon’s high-value garrison orders'
  },
  alchemist: {
    id: 'alchemist',
    name: 'Arcane Laboratory',
    level: 0,
    maxLevel: 3,
    cost: 80,
    unlocked: false,
    icon: '🧪',
    description: 'Distills star elixirs and glowing potions. Unlocks ratio and flask problems.',
    benefit: 'Unlocks Master Zephyr’s magic potion rewards'
  },
  farm: {
    id: 'farm',
    name: 'Windmill & Orchards',
    level: 0,
    maxLevel: 3,
    cost: 120,
    unlocked: false,
    icon: '🌾',
    description: 'Grows crisp apples, carrots, and clover. Generates passive harvest coins.',
    benefit: 'Harvests 8 bonus coins every 3 customers served'
  },
  town_square: {
    id: 'town_square',
    name: 'Festival Town Square',
    level: 0,
    maxLevel: 3,
    cost: 200,
    unlocked: false,
    icon: '🎪',
    description: 'A bustling square with banners and flutes. Hosts festival discount sales.',
    benefit: 'Celebrates festival days with 25% extra prosperity'
  }
};

export class TownManager {
  private state: TownState;
  private listeners: Array<(state: TownState) => void> = [];

  constructor() {
    this.state = this.loadState();
  }

  public getState(): TownState {
    return this.state;
  }

  public subscribe(fn: (state: TownState) => void): () => void {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter(l => l !== fn);
    };
  }

  private notify(): void {
    this.saveState();
    this.listeners.forEach(fn => fn(this.state));
  }

  public setDifficulty(level: DifficultyLevel): void {
    this.state.difficulty = level;
    this.notify();
  }

  public toggleSound(): boolean {
    this.state.soundEnabled = !this.state.soundEnabled;
    this.notify();
    return this.state.soundEnabled;
  }

  public addEarnings(coinsEarned: number, prosperityGain: number): void {
    this.state.coins += coinsEarned;
    this.state.prosperity += prosperityGain;
    this.state.customersServed += 1;

    // Farm perk: every 3 customers, grant farm bonus if unlocked
    if (this.state.buildings.farm.unlocked && this.state.customersServed % 3 === 0) {
      const bonus = 8 * this.state.buildings.farm.level;
      this.state.coins += bonus;
    }

    // Advance day every 5 customers
    if (this.state.customersServed % 5 === 0) {
      this.state.day += 1;
    }

    this.notify();
  }

  public canUpgrade(buildingId: string): boolean {
    const b = this.state.buildings[buildingId];
    if (!b) return false;
    if (b.level >= b.maxLevel) return false;
    const cost = b.unlocked ? b.cost * (b.level + 1) : b.cost;
    return this.state.coins >= cost;
  }

  public getUpgradeCost(buildingId: string): number {
    const b = this.state.buildings[buildingId];
    if (!b) return 0;
    return b.unlocked ? b.cost * (b.level + 1) : b.cost;
  }

  public upgradeBuilding(buildingId: string): boolean {
    const b = this.state.buildings[buildingId];
    if (!b) return false;
    const cost = this.getUpgradeCost(buildingId);
    if (this.state.coins < cost) return false;

    this.state.coins -= cost;
    if (!b.unlocked) {
      b.unlocked = true;
      b.level = 1;
    } else {
      b.level += 1;
    }

    this.state.prosperity += 50 * b.level;
    this.notify();
    return true;
  }

  public resetProgress(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.state = this.getInitialState();
    this.notify();
  }

  private getInitialState(): TownState {
    return {
      coins: 20, // Starter funds
      prosperity: 50,
      customersServed: 0,
      day: 1,
      difficulty: 'apprentice',
      buildings: JSON.parse(JSON.stringify(INITIAL_BUILDINGS)),
      soundEnabled: true
    };
  }

  private loadState(): TownState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        // Merge with defaults in case new buildings were added
        const initial = this.getInitialState();
        return {
          ...initial,
          ...parsed,
          buildings: {
            ...initial.buildings,
            ...(parsed.buildings || {})
          }
        };
      }
    } catch (e) {
      console.warn('Failed to load save from localStorage:', e);
    }
    return this.getInitialState();
  }

  private saveState(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }
}
