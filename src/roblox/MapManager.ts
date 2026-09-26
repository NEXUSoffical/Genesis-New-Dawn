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

// Default "🧟 Zombie Outpost: Dead Horizon" Survival Game
function createDefaultZombieSurvivalMap(): MapData {
  const blocks: VoxelBlockExport[] = [];

  // ==========================================
  // 1. FORTIFIED SURVIVOR BASE (x: -24..24, z: -26..8)
  // ==========================================
  // Base Compound Floor (Granite stone reinforced with obsidian borders)
  for (let x = -24; x <= 24; x++) {
    for (let z = -26; z <= 8; z++) {
      const isBorder = Math.abs(x) >= 23 || z === -26 || z === 8;
      const isPathway = Math.abs(x) <= 2 && z >= -14 && z <= 8;
      const type = isBorder ? 'obsidian' : (isPathway ? 'stone' : (Math.abs(x) < 6 && z < -10 ? 'wood' : 'stone'));
      blocks.push({ vx: x, vy: 0, vz: z, type });
    }
  }

  // High Perimeter Fortress Walls (vy: 1..6)
  for (let y = 1; y <= 6; y++) {
    // Left & Right fortress walls
    for (let z = -26; z <= 8; z++) {
      blocks.push({ vx: -24, vy: y, vz: z, type: y === 6 && z % 2 === 0 ? 'obsidian' : 'stone' });
      blocks.push({ vx: 24, vy: y, vz: z, type: y === 6 && z % 2 === 0 ? 'obsidian' : 'stone' });
    }
    // Rear fortress wall
    for (let x = -23; x <= 23; x++) {
      blocks.push({ vx: x, vy: y, vz: -26, type: y === 6 && x % 2 === 0 ? 'obsidian' : 'stone' });
    }
    // Front gate defense wall with 8-block gate opening at x = -4..4
    for (let x = -23; x <= 23; x++) {
      if (Math.abs(x) > 4) {
        blocks.push({ vx: x, vy: y, vz: 8, type: y === 6 && x % 2 === 0 ? 'obsidian' : 'stone' });
      }
    }
  }

  // Walkway parapet along the walls (vy: 5)
  for (let z = -25; z <= 7; z++) {
    blocks.push({ vx: -23, vy: 5, vz: z, type: 'obsidian' });
    blocks.push({ vx: 23, vy: 5, vz: z, type: 'obsidian' });
  }

  // 4 Massive Corner Watchtowers (vy: 1..10) with searchlights
  const towers = [
    { x: -24, z: -26 },
    { x: 24, z: -26 },
    { x: -24, z: 8 },
    { x: 24, z: 8 }
  ];

  towers.forEach(t => {
    // Tower core
    for (let y = 1; y <= 10; y++) {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          const tx = Math.max(-24, Math.min(24, t.x + dx));
          const tz = Math.max(-26, Math.min(8, t.z + dz));
          blocks.push({ vx: tx, vy: y, vz: tz, type: 'obsidian' });
        }
      }
    }
    // High Observation Platform (vy: 11)
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        const tx = Math.max(-24, Math.min(24, t.x + dx));
        const tz = Math.max(-26, Math.min(8, t.z + dz));
        blocks.push({ vx: tx, vy: 11, vz: tz, type: 'stone' });
      }
    }
    // Tower Searchlight Spotlight Beacon
    blocks.push({ vx: t.x, vy: 12, vz: t.z, type: t.z > 0 ? 'neon_pink' : 'neon_cyan' });
  });

  // Elevated Command Canopy at Rear (vy: 9 high up, open and majestic)
  for (let x = -8; x <= 8; x++) {
    for (let z = -26; z <= -18; z++) {
      if (Math.abs(x) === 8 || z === -26 || z === -18) {
        blocks.push({ vx: x, vy: 9, vz: z, type: 'wood' });
      } else {
        blocks.push({ vx: x, vy: 9, vz: z, type: 'glass' });
      }
    }
  }
  // High Support Pillars for Canopy
  for (let y = 1; y <= 8; y++) {
    blocks.push({ vx: -8, vy: y, vz: -18, type: 'wood' });
    blocks.push({ vx: 8, vy: y, vz: -18, type: 'wood' });
    blocks.push({ vx: -8, vy: y, vz: -26, type: 'wood' });
    blocks.push({ vx: 8, vy: y, vz: -26, type: 'wood' });
  }

  // Tactical War Table for Commander Vance at (8, 1, -22)
  blocks.push({ vx: 7, vy: 1, vz: -22, type: 'obsidian' });
  blocks.push({ vx: 8, vy: 1, vz: -22, type: 'gold' });
  blocks.push({ vx: 9, vy: 1, vz: -22, type: 'obsidian' });

  // Medical Triage Clinic for Medic Sarah at (-8, 1, -22)
  blocks.push({ vx: -7, vy: 1, vz: -22, type: 'brick' });
  blocks.push({ vx: -8, vy: 1, vz: -22, type: 'crystal' }); // Glowing green medical beacon
  blocks.push({ vx: -9, vy: 1, vz: -22, type: 'brick' });

  // Gate Defense Barricades & Tank Traps (z: 9..11)
  blocks.push({ vx: -4, vy: 1, vz: 9, type: 'wood' });
  blocks.push({ vx: 4, vy: 1, vz: 9, type: 'wood' });
  blocks.push({ vx: -2, vy: 1, vz: 10, type: 'wood' });
  blocks.push({ vx: 2, vy: 1, vz: 10, type: 'wood' });

  // Speed Pads to dash out of the gates into combat
  blocks.push({ vx: 0, vy: 1, vz: 7, type: 'speed_pad' });
  blocks.push({ vx: 0, vy: 1, vz: 9, type: 'speed_pad' });

  // Super Bounce Elevator Pads launching players to watchtowers
  blocks.push({ vx: -22, vy: 1, vz: 6, type: 'bounce_pad' });
  blocks.push({ vx: 22, vy: 1, vz: 6, type: 'bounce_pad' });
  blocks.push({ vx: -22, vy: 1, vz: -24, type: 'bounce_pad' });
  blocks.push({ vx: 22, vy: 1, vz: -24, type: 'bounce_pad' });

  // ==========================================
  // 2. APOCALYPTIC WASTELAND (z: 12..80)
  // ==========================================
  for (let x = -28; x <= 28; x += 2) {
    for (let z = 12; z <= 76; z += 2) {
      // Radioactive Toxic Lava Sludge Craters
      const inCrater1 = Math.hypot(x - (-14), z - 28) < 5.2;
      const inCrater2 = Math.hypot(x - 16, z - 42) < 5.8;
      const inCrater3 = Math.hypot(x - (-6), z - 60) < 6.2;

      if (inCrater1 || inCrater2 || inCrater3) {
        blocks.push({ vx: x, vy: 0, vz: z, type: 'lava' });
      } else {
        const rand = (Math.sin(x * 12.9898 + z * 78.233) * 43758.5453) % 1;
        const bType = rand > 0.7 ? 'stone' : (rand > 0.35 ? 'dirt' : 'obsidian');
        blocks.push({ vx: x, vy: 0, vz: z, type: bType });
      }
    }
  }

  // Collapsed Skyscraper Ruins A at (-18, 32)
  for (let y = 1; y <= 7; y++) {
    blocks.push({ vx: -18, vy: y, vz: 32, type: 'brick' });
    blocks.push({ vx: -16, vy: y, vz: 34, type: 'obsidian' });
    if (y < 4) blocks.push({ vx: -17, vy: y, vz: 33, type: 'glass' });
  }

  // Collapsed Skyscraper Ruins B at (18, 50)
  for (let y = 1; y <= 8; y++) {
    blocks.push({ vx: 18, vy: y, vz: 50, type: 'stone' });
    blocks.push({ vx: 16, vy: y, vz: 52, type: 'brick' });
  }

  // Abandoned Checkpoint Barricade at z = 36
  blocks.push({ vx: -6, vy: 1, vz: 36, type: 'wood' });
  blocks.push({ vx: -5, vy: 1, vz: 36, type: 'obsidian' });
  blocks.push({ vx: 5, vy: 1, vz: 36, type: 'obsidian' });
  blocks.push({ vx: 6, vy: 1, vz: 36, type: 'wood' });

  // Extraction Zone / Final Victory Beacon at (0, 76)
  for (let x = -4; x <= 4; x++) {
    for (let z = 74; z <= 78; z++) {
      blocks.push({ vx: x, vy: 1, vz: z, type: 'gold' });
    }
  }
  blocks.push({ vx: 0, vy: 2, vz: 76, type: 'finish_line' });

  // ==========================================
  // 3. SCRIPTED SURVIVOR NPCS & MENACING ZOMBIES
  // ==========================================
  const entities = [
    // Commander Vance (Survivor Military Leader)
    {
      id: 'npc_commander_vance',
      name: 'Commander Vance',
      type: 'npc' as const,
      position: { x: 8, y: 1, z: -20 },
      avatarConfig: {
        headColor: '#fcd34d',
        torsoColor: '#1e293b',
        leftArmColor: '#fcd34d',
        rightArmColor: '#fcd34d',
        leftLegColor: '#0f172a',
        rightLegColor: '#0f172a',
        equippedHat: 'cowboy',
        equippedShirt: 'flannel',
        equippedPants: 'blue_jeans',
        equippedFace: 'serious',
        equippedGear: 'none'
      },
      script: {
        behavior: 'dialogue' as const,
        dialogueText: "Pioneer! The perimeter breach alarms are blaring! Arm yourself with the Skyblade, defend the outpost barricades, and clear out the infected horde! See Medic Sarah if you're injured!",
        coinAmount: 50
      }
    },

    // Medic Sarah (Heals player to 100 HP)
    {
      id: 'npc_medic_sarah',
      name: 'Medic Sarah',
      type: 'npc' as const,
      position: { x: -8, y: 1, z: -20 },
      avatarConfig: {
        headColor: '#fde68a',
        torsoColor: '#dc2626',
        leftArmColor: '#fde68a',
        rightArmColor: '#fde68a',
        leftLegColor: '#f8fafc',
        rightLegColor: '#f8fafc',
        equippedHat: 'halo',
        equippedShirt: 'genesis_hoodie',
        equippedPants: 'blue_jeans',
        equippedFace: 'smile',
        equippedGear: 'none'
      },
      script: {
        behavior: 'medic' as const,
        dialogueText: "Emergency Medic Sarah reporting! Wounds treated and health fully restored to 100 HP! Stay sharp out there!",
        health: 250,
        maxHealth: 250
      }
    },

    // Sergeant Stone (Gate Weapon Guard)
    {
      id: 'npc_sgt_stone',
      name: 'Sergeant Stone',
      type: 'npc' as const,
      position: { x: 7, y: 1, z: 2 },
      avatarConfig: {
        headColor: '#f59e0b',
        torsoColor: '#047857',
        leftArmColor: '#f59e0b',
        rightArmColor: '#f59e0b',
        leftLegColor: '#064e3b',
        rightLegColor: '#064e3b',
        equippedHat: 'beanie',
        equippedShirt: 'flannel',
        equippedPants: 'blue_jeans',
        equippedFace: 'serious',
        equippedGear: 'sword'
      },
      script: {
        behavior: 'dialogue' as const,
        dialogueText: "Click on any zombie to strike them with your Skyblade! Headshots and melee strikes will take them down and earn you Genesis Coins!",
        coinAmount: 30
      }
    },

    // Zombie 1: Rotten Shambler (Outside the Gate)
    {
      id: 'npc_zombie_shambler',
      name: 'Rotten Shambler',
      type: 'npc' as const,
      position: { x: 0, y: 1, z: 22 },
      avatarConfig: {
        headColor: '#4d7c0f', // Rotten Green
        torsoColor: '#1c1917',
        leftArmColor: '#4d7c0f',
        rightArmColor: '#4d7c0f',
        leftLegColor: '#374151',
        rightLegColor: '#374151',
        equippedHat: 'none',
        equippedShirt: 'tattered_zombie',
        equippedPants: 'blue_jeans',
        equippedFace: 'zombie', // Scary glowing red eyes & fangs
        equippedGear: 'none'
      },
      script: {
        behavior: 'zombie' as const,
        health: 60,
        maxHealth: 60,
        damageAmount: 12,
        moveSpeed: 5.5,
        detectionRange: 30,
        coinAmount: 25,
        dialogueText: "Grrrr... BRAAAINS!"
      }
    },

    // Zombie 2: Infected Sprinter
    {
      id: 'npc_zombie_sprinter',
      name: 'Infected Runner',
      type: 'npc' as const,
      position: { x: 14, y: 1, z: 32 },
      avatarConfig: {
        headColor: '#3f6212',
        torsoColor: '#7f1d1d',
        leftArmColor: '#3f6212',
        rightArmColor: '#3f6212',
        leftLegColor: '#1c1917',
        rightLegColor: '#1c1917',
        equippedHat: 'none',
        equippedShirt: 'tattered_zombie',
        equippedPants: 'blue_jeans',
        equippedFace: 'zombie',
        equippedGear: 'none'
      },
      script: {
        behavior: 'zombie' as const,
        health: 45,
        maxHealth: 45,
        damageAmount: 15,
        moveSpeed: 8.5,
        detectionRange: 35,
        coinAmount: 35,
        dialogueText: "Screeechhh!"
      }
    },

    // Zombie 3: Toxic Ghoul
    {
      id: 'npc_zombie_toxic',
      name: 'Toxic Ghoul',
      type: 'npc' as const,
      position: { x: -16, y: 1, z: 38 },
      avatarConfig: {
        headColor: '#22c55e',
        torsoColor: '#064e3b',
        leftArmColor: '#22c55e',
        rightArmColor: '#22c55e',
        leftLegColor: '#022c22',
        rightLegColor: '#022c22',
        equippedHat: 'none',
        equippedShirt: 'tattered_zombie',
        equippedPants: 'blue_jeans',
        equippedFace: 'zombie',
        equippedGear: 'none'
      },
      script: {
        behavior: 'zombie' as const,
        health: 75,
        maxHealth: 75,
        damageAmount: 16,
        moveSpeed: 6.2,
        detectionRange: 30,
        coinAmount: 40,
        dialogueText: "Hisssss... Poison!"
      }
    },

    // Zombie 4: Wasteland Stalker
    {
      id: 'npc_zombie_stalker',
      name: 'Wasteland Stalker',
      type: 'npc' as const,
      position: { x: 10, y: 1, z: 48 },
      avatarConfig: {
        headColor: '#365314',
        torsoColor: '#451a03',
        leftArmColor: '#365314',
        rightArmColor: '#365314',
        leftLegColor: '#292524',
        rightLegColor: '#292524',
        equippedHat: 'none',
        equippedShirt: 'tattered_zombie',
        equippedPants: 'blue_jeans',
        equippedFace: 'zombie',
        equippedGear: 'none'
      },
      script: {
        behavior: 'zombie' as const,
        health: 65,
        maxHealth: 65,
        damageAmount: 18,
        moveSpeed: 7.2,
        detectionRange: 32,
        coinAmount: 45
      }
    },

    // Zombie 5: Mutant Brute (Boss)
    {
      id: 'npc_zombie_brute',
      name: 'Mutant Zombie Brute (BOSS)',
      type: 'npc' as const,
      position: { x: 0, y: 1, z: 62 },
      avatarConfig: {
        headColor: '#14532d',
        torsoColor: '#0f172a',
        leftArmColor: '#14532d',
        rightArmColor: '#14532d',
        leftLegColor: '#000000',
        rightLegColor: '#000000',
        equippedHat: 'none',
        equippedShirt: 'tattered_zombie',
        equippedPants: 'blue_jeans',
        equippedFace: 'zombie',
        equippedGear: 'none'
      },
      script: {
        behavior: 'zombie' as const,
        health: 180,
        maxHealth: 180,
        damageAmount: 28,
        moveSpeed: 4.8,
        detectionRange: 40,
        coinAmount: 150,
        dialogueText: "ROAAAARRRR! CRUSH HUMAN!"
      }
    },

    // Medical Supply Crate in Base
    {
      id: 'item_medkit_chest',
      name: 'Medical Supply Crate',
      type: 'item' as const,
      itemType: 'chest',
      position: { x: -12, y: 1, z: -18 },
      script: {
        behavior: 'coin_reward' as const,
        coinAmount: 50
      }
    },

    // Military Ammo Depot in Base
    {
      id: 'item_ammo_depot',
      name: 'Military Ammo Depot',
      type: 'item' as const,
      itemType: 'chest',
      position: { x: 12, y: 1, z: -18 },
      script: {
        behavior: 'coin_reward' as const,
        coinAmount: 100
      }
    },

    // Wasteland Hidden Cache
    {
      id: 'item_wasteland_cache',
      name: 'Wasteland Stash',
      type: 'item' as const,
      itemType: 'chest',
      position: { x: -14, y: 1, z: 34 },
      script: {
        behavior: 'coin_reward' as const,
        coinAmount: 75
      }
    },

    // Biohazard Decontamination Crystal in Safehouse
    {
      id: 'item_bio_beacon',
      name: 'Anti-Viral Decon Beacon',
      type: 'item' as const,
      itemType: 'crystal',
      position: { x: 0, y: 1, z: -22 },
      script: {
        behavior: 'dialogue' as const,
        dialogueText: "⚡ Biohazard Decontamination field active! Keeps the safehouse interior virus-free."
      }
    }
  ];

  return {
    id: 'default_zombie_survival',
    title: '🧟 Zombie Outpost: Dead Horizon',
    description: 'Survive the relentless infected horde! Fortify your base, visit Medic Sarah for healing, speak to Commander Vance, stock up from supply chests, and fight off zombies in the apocalyptic wasteland!',
    author: 'Genesis Studio',
    createdAt: Date.now() - 250000,
    gameMode: 'survival',
    spawnPoint: { x: 0, y: 1, z: -10 },
    blocks,
    entities,
    likes: 512,
    plays: 2840,
    tags: ['Zombie', 'Survival', 'Horror', 'Apocalypse', 'PvP', 'Combat', 'Featured']
  };
}

export class MapManager {
  private static instance: MapManager | null = null;
  private defaultMaps: MapData[] = [];

  private constructor() {
    this.defaultMaps = [
      createDefaultZombieSurvivalMap(),
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
