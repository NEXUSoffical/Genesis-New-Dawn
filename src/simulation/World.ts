import { Chunk, Tile, TileType, Building, BuildingType, ItemType } from './types';
import { SimplexNoise } from './Noise';
import { BUILDING_SPECS } from './Inventions';

export const CHUNK_SIZE = 16;
export const TILE_SIZE = 32; // In pixels for rendering

export class WorldManager {
  public chunks: Map<string, Chunk> = new Map();
  public buildings: Map<string, Building> = new Map();
  private noiseGen: SimplexNoise;
  private resourceNoise: SimplexNoise;
  private oreNoise: SimplexNoise;

  public seed: number;
  public day: number = 1;
  public timeOfDay: number = 7.0; // 0.0 to 24.0 (starts at 7:00 AM Dawn)
  public season: 'Spring' | 'Summer' | 'Autumn' | 'Winter' = 'Spring';
  public weather: 'Clear' | 'Rain' | 'Overcast' = 'Clear';
  public weatherTimer: number = 180;
  public settlementName?: string = 'Haven of Eden';
  public readonly width: number = 120;
  public readonly height: number = 80;
  public temperatureCelsius: number = 18;
  public seasonProgress: number = 0.0;
  public isSolsticeActive: boolean = false;

  constructor(seed = 42) {
    this.seed = seed;
    this.noiseGen = new SimplexNoise(seed);
    this.resourceNoise = new SimplexNoise(seed + 101);
    this.oreNoise = new SimplexNoise(seed + 202);

    // Pre-generate starting 3x3 chunks around origin
    for (let cx = -1; cx <= 1; cx++) {
      for (let cy = -1; cy <= 1; cy++) {
        this.getOrCreateChunk(cx, cy);
      }
    }

    // Ensure spawn clearing around (0, 0)
    this.carveSpawnClearing();
  }

  private chunkKey(cx: number, cy: number): string {
    return `${cx},${cy}`;
  }

  public getOrCreateChunk(cx: number, cy: number): Chunk {
    const key = this.chunkKey(cx, cy);
    let chunk = this.chunks.get(key);
    if (!chunk) {
      chunk = this.generateChunk(cx, cy);
      this.chunks.set(key, chunk);
    }
    return chunk;
  }

  private generateChunk(cx: number, cy: number): Chunk {
    const tiles: Tile[][] = [];

    for (let lx = 0; lx < CHUNK_SIZE; lx++) {
      tiles[lx] = [];
      for (let ly = 0; ly < CHUNK_SIZE; ly++) {
        const wx = cx * CHUNK_SIZE + lx;
        const wy = cy * CHUNK_SIZE + ly;

        // Procedural elevation & moisture using fBm
        const elev = this.noiseGen.fbm(wx * 0.035, wy * 0.035, 4, 0.5);
        const moist = this.noiseGen.fbm((wx + 500) * 0.03, (wy + 500) * 0.03, 3, 0.5);
        const resDensity = this.resourceNoise.noise2D(wx * 0.12, wy * 0.12);
        const oreVal = this.oreNoise.noise2D(wx * 0.15, wy * 0.15);

        let type: TileType = 'grass';
        let resourceAmount = 0;
        let maxResource = 0;
        let regrowthRate = 0.05;

        // Biome categorization
        if (elev < 0.28) {
          type = 'deep_water';
        } else if (elev < 0.35) {
          type = 'water';
        } else if (elev < 0.39) {
          // Riverbanks / Clay deposits
          if (moist > 0.55 && resDensity > 0.6) {
            type = 'clay_pit';
            resourceAmount = 15;
            maxResource = 25;
            regrowthRate = 0.08;
          } else {
            type = 'grass';
          }
        } else if (elev > 0.72) {
          // Mountain / Stone hills
          if (oreVal > 0.85) {
            type = 'gold_vein';
            resourceAmount = 8;
            maxResource = 8;
            regrowthRate = 0.0;
          } else if (oreVal > 0.72) {
            type = 'iron_vein';
            resourceAmount = 14;
            maxResource = 14;
            regrowthRate = 0.0;
          } else if (oreVal > 0.6) {
            type = 'copper_vein';
            resourceAmount = 16;
            maxResource = 16;
            regrowthRate = 0.0;
          } else {
            type = 'stone_hill';
            resourceAmount = 30;
            maxResource = 40;
            regrowthRate = 0.02;
          }
        } else {
          // Lowland / Plains / Forest
          if (moist > 0.65) {
            type = 'dense_forest';
            resourceAmount = 25;
            maxResource = 30;
            regrowthRate = 0.1;
          } else if (moist > 0.45) {
            if (resDensity > 0.5) {
              type = 'sparse_trees';
              resourceAmount = 12;
              maxResource = 16;
              regrowthRate = 0.12;
            } else if (resDensity < 0.25) {
              type = 'fertile_soil'; // Wild berries / seeds
              resourceAmount = 10;
              maxResource = 15;
              regrowthRate = 0.2;
            } else {
              type = 'grass';
            }
          } else {
            type = 'grass';
            if (resDensity > 0.68) {
              type = 'fertile_soil';
              resourceAmount = 8;
              maxResource = 12;
              regrowthRate = 0.2;
            }
          }
        }

        tiles[lx][ly] = {
          x: wx,
          y: wy,
          type,
          resourceAmount,
          maxResource,
          regrowthRate,
          elevation: elev,
          moisture: moist,
          isRevealed: false,
          isInSight: false,
        };
      }
    }

    return { cx, cy, tiles };
  }

  private carveSpawnClearing(): void {
    // Ensure pleasant grassland with nearby berries, water, and trees at (0, 0)
    for (let x = -3; x <= 3; x++) {
      for (let y = -3; y <= 3; y++) {
        const tile = this.getTile(x, y);
        if (tile) {
          if (Math.abs(x) <= 1 && Math.abs(y) <= 1) {
            tile.type = 'grass';
            tile.resourceAmount = 0;
          } else if (x === 2 && y === 0) {
            tile.type = 'fertile_soil';
            tile.resourceAmount = 12;
            tile.maxResource = 15;
          } else if (x === -2 && y === 1) {
            tile.type = 'sparse_trees';
            tile.resourceAmount = 10;
            tile.maxResource = 15;
          } else if (x === 0 && y === 3) {
            tile.type = 'water';
          }
        }
      }
    }
  }

  public getTile(worldX: number, worldY: number): Tile | undefined {
    const cx = Math.floor(worldX / CHUNK_SIZE);
    const cy = Math.floor(worldY / CHUNK_SIZE);
    const chunk = this.chunks.get(this.chunkKey(cx, cy));
    if (!chunk) return undefined;

    const lx = ((worldX % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    const ly = ((worldY % CHUNK_SIZE) + CHUNK_SIZE) % CHUNK_SIZE;
    return chunk.tiles[lx]?.[ly];
  }

  public setTileType(worldX: number, worldY: number, type: TileType): void {
    const tile = this.getTile(worldX, worldY);
    if (tile) {
      tile.type = type;
    }
  }

  public isWalkable(worldX: number, worldY: number, isInBoat = false): boolean {
    const tile = this.getTile(worldX, worldY);
    if (!tile) return false;

    // Boats allow sailing on water and deep water!
    if (isInBoat && (tile.type === 'water' || tile.type === 'deep_water')) {
      return true;
    }

    // A completed wooden bridge or dock pier makes water walkable
    if (tile.building && (tile.building.type === 'wooden_bridge' || tile.building.type === 'dock_pier') && tile.building.isCompleted) {
      return true;
    }

    // Deep winter freezing: when temperature drops below -2°C, shallow rivers freeze into walkable ice!
    if (tile.type === 'water' && this.season === 'Winter' && this.temperatureCelsius < -2) {
      return true;
    }

    if (tile.type === 'deep_water' || tile.type === 'water') return false;
    if (tile.building && tile.building.isCompleted) {
      // Walkthrough allowed for campfire, roads, farm plot, fountain, ancestral_cairn, settlement_totem, bridge, dock, watch_gate, aqueduct
      if (['campfire', 'farm_plot', 'fountain', 'ancestral_cairn', 'settlement_totem', 'wooden_bridge', 'dock_pier', 'watch_gate', 'stone_aqueduct'].includes(tile.building.type)) {
        return true;
      }
      return false; // Solid building
    }
    return true;
  }

  public placeBuilding(
    type: BuildingType,
    worldX: number,
    worldY: number,
    builderId?: string
  ): Building | null {
    const tile = this.getTile(worldX, worldY);
    if (!tile || tile.building) return null;

    if (type === 'wooden_bridge') {
      // Wooden footbridge MUST be placed on shallow water to span the river!
      if (tile.type !== 'water') return null;
    } else if (type === 'dock_pier') {
      // Shoreline dock pier placed on water edge or shoreline
      const neighbors = [
        this.getTile(worldX + 1, worldY),
        this.getTile(worldX - 1, worldY),
        this.getTile(worldX, worldY + 1),
        this.getTile(worldX, worldY - 1),
      ];
      const hasAdjacentWater = neighbors.some((n) => n && (n.type === 'water' || n.type === 'deep_water'));
      if (!hasAdjacentWater && tile.type !== 'water') return null;
    } else if (type === 'waterwheel') {
      // Waterwheels must be placed on riverbanks (adjacent to water) or on water edge
      const neighbors = [
        this.getTile(worldX + 1, worldY),
        this.getTile(worldX - 1, worldY),
        this.getTile(worldX, worldY + 1),
        this.getTile(worldX, worldY - 1),
      ];
      const hasAdjacentWater = neighbors.some((n) => n && (n.type === 'water' || n.type === 'deep_water'));
      if (!hasAdjacentWater) return null;
      if (tile.type === 'deep_water') return null;
    } else {
      if (tile.type === 'water' || tile.type === 'deep_water') return null;
    }

    const spec = BUILDING_SPECS[type];
    const building: Building = {
      id: `bld_${Date.now()}_${Math.floor(Math.random() * 1000)}`,
      type,
      x: worldX,
      y: worldY,
      level: 1,
      hp: 100,
      maxHp: 100,
      builderId,
      assignedWorkers: [],
      storage: {},
      maxStorage: spec.maxStorage,
      progress: 0,
      isCompleted: false,
    };

    tile.building = building;
    this.buildings.set(building.id, building);
    return building;
  }

  public updateTimeAndWeather(deltaMinutes: number): void {
    this.timeOfDay += deltaMinutes / 60;
    if (this.timeOfDay >= 24) {
      this.timeOfDay -= 24;
      this.day++;

      // Daily resource regrowth (dormant in winter)
      this.regrowResources();
    }

    // Dynamic Seasonal Progression (each season is 7 simulation days, 28-day solar year)
    const seasons: ('Spring' | 'Summer' | 'Autumn' | 'Winter')[] = ['Spring', 'Summer', 'Autumn', 'Winter'];
    const daysPerSeason = 7;
    const yearDay = (this.day - 1) % (daysPerSeason * 4);
    const seasonIndex = Math.floor(yearDay / daysPerSeason);
    this.season = seasons[seasonIndex];
    this.seasonProgress = ((yearDay % daysPerSeason) + (this.timeOfDay / 24)) / daysPerSeason;

    // Solstice tracking: Summer Solstice (day 10-11) and Winter Solstice (day 24-25)
    const isSolsticeDay = yearDay === 10 || yearDay === 24;
    this.isSolsticeActive = isSolsticeDay && this.timeOfDay >= 17.5 && this.timeOfDay <= 22.5;

    // Dynamic Temperature Modeling (°C)
    const baseTemps: Record<string, number> = {
      Spring: 17,
      Summer: 27,
      Autumn: 10,
      Winter: -5,
    };
    const nextSeasons: Record<string, 'Spring' | 'Summer' | 'Autumn' | 'Winter'> = {
      Spring: 'Summer',
      Summer: 'Autumn',
      Autumn: 'Winter',
      Winter: 'Spring',
    };
    const currBase = baseTemps[this.season];
    const nextBase = baseTemps[nextSeasons[this.season]];
    const seasonalTemp = currBase + (nextBase - currBase) * this.seasonProgress;

    // Diurnal variation: peak afternoon heat at 14:00, cold night low at 04:00
    const diurnalFactor = Math.sin(((this.timeOfDay - 8) / 24) * Math.PI * 2);
    const diurnalTemp = diurnalFactor * 5.0;

    // Weather impact
    let weatherImpact = 0;
    if (this.weather === 'Rain') weatherImpact = -3.5;
    else if (this.weather === 'Overcast') weatherImpact = -1.5;

    this.temperatureCelsius = Math.round((seasonalTemp + diurnalTemp + weatherImpact) * 10) / 10;

    // Weather variation
    this.weatherTimer -= deltaMinutes;
    if (this.weatherTimer <= 0) {
      this.weatherTimer = 180 + Math.random() * 300;
      const rand = Math.random();
      if (rand < 0.6) this.weather = 'Clear';
      else if (rand < 0.85) this.weather = 'Overcast';
      else this.weather = 'Rain';
    }

    // Building automated productions (farms, windmills, waterwheels, bakeries)
    this.updateBuildingProductions();
  }

  private regrowResources(): void {
    // In Winter, freezing cold prevents berry and wild plant regrowth!
    if (this.season === 'Winter') return;

    for (const chunk of this.chunks.values()) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let y = 0; y < CHUNK_SIZE; y++) {
          const tile = chunk.tiles[x][y];
          if (tile.resourceAmount < tile.maxResource) {
            tile.resourceAmount = Math.min(
              tile.maxResource,
              tile.resourceAmount + Math.ceil(tile.regrowthRate * (this.weather === 'Rain' ? 2 : 1))
            );
          }
        }
      }
    }
  }

  private updateBuildingProductions(): void {
    const isRain = this.weather === 'Rain';

    for (const building of this.buildings.values()) {
      if (!building.isCompleted) continue;
      building.meta = building.meta || {};

      // Dynamic 4-Stage Crop Growth for Farms (Tilled -> Seedling -> Growing -> Ripe Wheat)
      if (building.type === 'farm_plot') {
        // In Winter, crops are frozen dormant unless a lit campfire is within 3.5 tiles!
        let isDormant = this.season === 'Winter';
        if (isDormant) {
          for (const other of this.buildings.values()) {
            if (other.type === 'campfire' && other.isCompleted) {
              const dist = Math.hypot(other.x - building.x, other.y - building.y);
              if (dist <= 3.5) {
                isDormant = false;
                break;
              }
            }
          }
        }

        if (!isDormant) {
          // Check if irrigated by stone aqueduct within 4 tiles!
          let isIrrigated = false;
          for (const other of this.buildings.values()) {
            if (other.type === 'stone_aqueduct' && other.isCompleted) {
              if (Math.hypot(other.x - building.x, other.y - building.y) <= 4.5) {
                isIrrigated = true;
                break;
              }
            }
          }

          const growthRate = (isRain || isIrrigated) ? 4.2 : 2.2;
          building.meta.isIrrigated = isIrrigated;
          building.meta.cropProgress = (building.meta.cropProgress || 0) + growthRate;

          if (building.meta.cropProgress < 25) {
            building.meta.cropStage = 'tilled';
          } else if (building.meta.cropProgress < 60) {
            building.meta.cropStage = 'seedling';
          } else if (building.meta.cropProgress < 100) {
            building.meta.cropStage = 'growing';
          } else {
            building.meta.cropStage = 'ripe';
            if ((building.storage.harvested_wheat || 0) < 6) {
              building.storage.harvested_wheat = (building.storage.harvested_wheat || 0) + 2;
              building.storage.wild_seeds = (building.storage.wild_seeds || 0) + 1;
            }
          }
        }
      }

      // Automated River Waterwheel Mill (Harnesses river flow to grind wheat)
      if (building.type === 'waterwheel') {
        building.meta.wheelRotation = ((building.meta.wheelRotation || 0) + 0.08) % (Math.PI * 2);
        building.meta.prodTimer = (building.meta.prodTimer || 0) + 1;
        if (building.meta.prodTimer >= 25) {
          building.meta.prodTimer = 0;
          if ((building.storage.harvested_wheat || 0) > 0) {
            building.storage.harvested_wheat = (building.storage.harvested_wheat || 0) - 1;
            building.storage.flour = (building.storage.flour || 0) + 2;
          }
        }
      }

      const spec = BUILDING_SPECS[building.type];
      if (!spec.production) continue;

      building.meta.prodTimer = (building.meta.prodTimer || 0) + 1;

      if (building.meta.prodTimer >= spec.production.interval) {
        building.meta.prodTimer = 0;

        // Produce outputs into building storage
        for (const [item, count] of Object.entries(spec.production.outputs)) {
          const it = item as ItemType;
          building.storage[it] = (building.storage[it] || 0) + (count || 1);
        }
      }
    }
  }

  public revealRadius(centerX: number, centerY: number, radius: number): void {
    const rSq = radius * radius;
    const minX = Math.floor(centerX - radius);
    const maxX = Math.ceil(centerX + radius);
    const minY = Math.floor(centerY - radius);
    const maxY = Math.ceil(centerY + radius);

    // Make sure surrounding chunks exist
    const minCx = Math.floor(minX / CHUNK_SIZE);
    const maxCx = Math.floor(maxX / CHUNK_SIZE);
    const minCy = Math.floor(minY / CHUNK_SIZE);
    const maxCy = Math.floor(maxY / CHUNK_SIZE);

    for (let cx = minCx; cx <= maxCx; cx++) {
      for (let cy = minCy; cy <= maxCy; cy++) {
        this.getOrCreateChunk(cx, cy);
      }
    }

    // Set visibility
    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        const distSq = (x - centerX) * (x - centerX) + (y - centerY) * (y - centerY);
        if (distSq <= rSq) {
          const tile = this.getTile(x, y);
          if (tile) {
            tile.isRevealed = true;
            tile.isInSight = true;
          }
        }
      }
    }
  }

  public resetSight(): void {
    for (const chunk of this.chunks.values()) {
      for (let x = 0; x < CHUNK_SIZE; x++) {
        for (let y = 0; y < CHUNK_SIZE; y++) {
          chunk.tiles[x][y].isInSight = false;
        }
      }
    }
  }
}
