import { MapData, VoxelBlockExport } from './MapTypes';
import { supabase } from '../backend/supabase';

const STORAGE_KEY_MAPS = 'genesis_user_created_maps';

// Procedural generator for the default "Rainbow Lava Tower Obby"
function createDefaultRainbowObby(): MapData {
  const blocks: VoxelBlockExport[] = [];

  // Stage 0: Starting platform (grass & wood)
  for (let x = -3; x <= 3; x++) {
    for (let z = -3; z <= 3; z++) {
      blocks.push({ vx: x, vy: 0, vz: z, type: 'grass' });
    }
  }

  // Lava floor surrounding the entire course below
  for (let x = -15; x <= 45; x += 2) {
    for (let z = -15; z <= 25; z += 2) {
      if (Math.abs(x) > 3 || Math.abs(z) > 3) {
        blocks.push({ vx: x, vy: -3, vz: z, type: 'lava' });
      }
    }
  }

  // Stage 1: Stepping stones over lava
  blocks.push({ vx: 0, vy: 1, vz: 6, type: 'stone' });
  blocks.push({ vx: 2, vy: 1, vz: 9, type: 'stone' });
  blocks.push({ vx: 0, vy: 2, vz: 12, type: 'brick' });
  blocks.push({ vx: -2, vy: 2, vz: 15, type: 'brick' });

  // Stage 2: Checkpoint 1 Island
  for (let x = -2; x <= 2; x++) {
    for (let z = 17; z <= 20; z++) {
      blocks.push({ vx: x, vy: 2, vz: z, type: 'gold' });
    }
  }
  blocks.push({ vx: 0, vy: 3, vz: 18, type: 'checkpoint' });

  // Stage 3: Super Bounce Pad Section
  blocks.push({ vx: 0, vy: 2, vz: 23, type: 'bounce_pad' });

  // High floating neon platforms reached by the bounce pad
  blocks.push({ vx: 6, vy: 8, vz: 23, type: 'neon_pink' });
  blocks.push({ vx: 10, vy: 9, vz: 21, type: 'neon_pink' });
  blocks.push({ vx: 14, vy: 10, vz: 18, type: 'neon_cyan' });
  blocks.push({ vx: 17, vy: 11, vz: 15, type: 'neon_cyan' });

  // Stage 4: Speed Boost Runway
  for (let z = 12; z >= 2; z -= 2) {
    blocks.push({ vx: 20, vy: 11, vz: z, type: 'speed_pad' });
  }

  // Stage 5: Checkpoint 2 Island
  for (let x = 18; x <= 22; x++) {
    for (let z = -2; z <= 1; z++) {
      blocks.push({ vx: x, vy: 11, vz: z, type: 'gold' });
    }
  }
  blocks.push({ vx: 20, vy: 12, vz: 0, type: 'checkpoint' });

  // Stage 6: The Lava Wall tightrope
  for (let x = 23; x <= 32; x++) {
    blocks.push({ vx: x, vy: 11, vz: 0, type: 'crystal' });
    if (x % 3 === 0) {
      blocks.push({ vx: x, vy: 12, vz: 0, type: 'lava' }); // Jump over!
    }
  }

  // Stage 7: Grand Victory Podium & Finish Line
  for (let x = 34; x <= 40; x++) {
    for (let z = -3; z <= 3; z++) {
      blocks.push({ vx: x, vy: 12, vz: z, type: 'obsidian' });
      blocks.push({ vx: x, vy: 13, vz: z, type: 'gold' });
    }
  }

  // Victory beacon & Finish pad
  blocks.push({ vx: 37, vy: 14, vz: 0, type: 'finish_line' });

  return {
    id: 'default_rainbow_obby',
    title: '🌈 Rainbow Lava Tower Obby',
    description: 'Jump across stepping stones, launch off Super Bounce Pads, run down speed strips, and conquer the lava tightrope to reach the summit!',
    author: 'Genesis Studio',
    createdAt: Date.now() - 1000000,
    gameMode: 'obby',
    spawnPoint: { x: 0, y: 3, z: 0 },
    blocks,
    likes: 342,
    plays: 1850,
    tags: ['Obby', 'Parkour', 'Hardcore', 'Featured']
  };
}

// Default "Cyberpunk Sky Hangout"
function createDefaultCyberHangout(): MapData {
  const blocks: VoxelBlockExport[] = [];

  // Central plaza
  for (let x = -6; x <= 6; x++) {
    for (let z = -6; z <= 6; z++) {
      const type = (x === -6 || x === 6 || z === -6 || z === 6) ? 'neon_cyan' : 'obsidian';
      blocks.push({ vx: x, vy: 0, vz: z, type });
    }
  }

  // Tower 1 (Pink)
  for (let y = 1; y <= 8; y++) {
    blocks.push({ vx: -5, vy: y, vz: -5, type: 'neon_pink' });
    blocks.push({ vx: -5, vy: y, vz: 5, type: 'neon_pink' });
  }

  // Tower 2 (Cyan)
  for (let y = 1; y <= 8; y++) {
    blocks.push({ vx: 5, vy: y, vz: -5, type: 'neon_cyan' });
    blocks.push({ vx: 5, vy: y, vz: 5, type: 'neon_cyan' });
  }

  // Bounce pads to launch to roof
  blocks.push({ vx: 0, vy: 1, vz: -4, type: 'bounce_pad' });
  blocks.push({ vx: 0, vy: 1, vz: 4, type: 'bounce_pad' });

  // Floating Sky Deck
  for (let x = -4; x <= 4; x++) {
    for (let z = -4; z <= 4; z++) {
      blocks.push({ vx: x, vy: 8, vz: z, type: 'glass' });
    }
  }
  blocks.push({ vx: 0, vy: 9, vz: 0, type: 'crystal' });

  return {
    id: 'default_cyber_hangout',
    title: '🏙️ Cyber Neon Sky Hangout',
    description: 'A vibrant cyberpunk skyline social lounge with rooftop bounce pads, glass sky bridges, and glowing crystal lounge lights.',
    author: 'Nova (AI Mascot)',
    createdAt: Date.now() - 500000,
    gameMode: 'hangout',
    spawnPoint: { x: 0, y: 3, z: 0 },
    blocks,
    likes: 289,
    plays: 1220,
    tags: ['Hangout', 'Cyberpunk', 'Social', 'Chill']
  };
}

export class MapManager {
  private static instance: MapManager | null = null;
  private defaultMaps: MapData[] = [];

  private constructor() {
    this.defaultMaps = [
      createDefaultRainbowObby(),
      createDefaultCyberHangout()
    ];
  }

  public static getInstance(): MapManager {
    if (!MapManager.instance) {
      MapManager.instance = new MapManager();
    }
    return MapManager.instance;
  }

  /**
   * Get all available community and user maps
   */
  public getAllMaps(): MapData[] {
    const userMaps = this.getUserMaps();
    return [...this.defaultMaps, ...userMaps];
  }

  /**
   * Get maps created by the local player
   */
  public getUserMaps(): MapData[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_MAPS);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch (e) {
      console.warn('Failed to parse user maps from storage:', e);
    }
    return [];
  }

  /**
   * Get map by ID
   */
  public getMapById(id: string): MapData | undefined {
    return this.getAllMaps().find(m => m.id === id);
  }

  /**
   * Save a newly created or edited map locally
   */
  public saveUserMap(map: MapData): void {
    const maps = this.getUserMaps();
    const existingIndex = maps.findIndex(m => m.id === map.id);

    if (existingIndex >= 0) {
      maps[existingIndex] = map;
    } else {
      maps.unshift(map);
    }

    localStorage.setItem(STORAGE_KEY_MAPS, JSON.stringify(maps));
  }

  /**
   * Delete a locally saved map
   */
  public deleteUserMap(id: string): boolean {
    const maps = this.getUserMaps().filter(m => m.id !== id);
    localStorage.setItem(STORAGE_KEY_MAPS, JSON.stringify(maps));
    return true;
  }

  /**
   * Export map as downloadable JSON file
   */
  public exportMapFile(map: MapData): void {
    const jsonStr = JSON.stringify(map, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${map.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_map.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  /**
   * Import map from JSON string
   */
  public importMapFromJson(jsonStr: string): MapData {
    const data = JSON.parse(jsonStr) as MapData;
    if (!data.id || !data.title || !Array.isArray(data.blocks)) {
      throw new Error('Invalid Map format');
    }
    data.id = 'imported_' + Date.now();
    this.saveUserMap(data);
    return data;
  }

  /**
   * Publish map to Supabase community cloud table
   */
  public async publishToCloud(map: MapData): Promise<boolean> {
    try {
      const { error } = await supabase.from('community_maps').insert([{
        id: map.id,
        title: map.title,
        description: map.description,
        author: map.author,
        game_mode: map.gameMode,
        spawn_point: map.spawnPoint,
        blocks: map.blocks,
        tags: map.tags,
        likes: map.likes,
        plays: map.plays
      }]);

      if (error) {
        console.warn('Supabase community_maps insert notice (falling back to local):', error.message);
      }
      return true;
    } catch {
      return true;
    }
  }
}
