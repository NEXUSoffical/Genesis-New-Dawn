import { VoxelType } from './VoxelWorld';

export type GameModeType = 'obby' | 'hangout' | 'sandbox' | 'survival';

export interface VoxelBlockExport {
  vx: number;
  vy: number;
  vz: number;
  type: VoxelType;
}

export type ScriptBehavior = 
  | 'none' 
  | 'dialogue' 
  | 'follow' 
  | 'patrol' 
  | 'guard' 
  | 'zombie'
  | 'medic'
  | 'coin_reward' 
  | 'teleport' 
  | 'bounce' 
  | 'speed_pad' 
  | 'custom_code';

export interface EntityScript {
  behavior: ScriptBehavior;
  dialogueText?: string;
  coinAmount?: number;
  teleportTarget?: { x: number; y: number; z: number };
  health?: number;
  maxHealth?: number;
  damageAmount?: number;
  moveSpeed?: number;
  detectionRange?: number;
  customCode?: string; // JavaScript executed in sandbox
}

export interface ScriptedEntity {
  id: string;
  name: string;
  type: 'npc' | 'item';
  position: { x: number; y: number; z: number };
  rotationY?: number;
  avatarConfig?: any; // AvatarCustomization
  itemType?: string; // 'coin' | 'chest' | 'portal' | 'bounce_pad' | 'crystal' | 'speed_pad' | 'campfire' | 'spinner'
  script: EntityScript;
}

export interface MapData {
  id: string;
  title: string;
  description: string;
  author: string;
  authorId?: string;
  createdAt: number;
  gameMode: GameModeType;
  spawnPoint: { x: number; y: number; z: number };
  blocks: VoxelBlockExport[];
  entities?: ScriptedEntity[];
  likes: number;
  plays: number;
  tags: string[];
  thumbnail?: string; // base64 or image url
}

export interface MapSummary {
  id: string;
  title: string;
  author: string;
  gameMode: GameModeType;
  likes: number;
  plays: number;
  blockCount: number;
  tags: string[];
  thumbnail?: string;
}
