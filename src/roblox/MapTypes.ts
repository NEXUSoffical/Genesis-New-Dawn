import { VoxelType } from './VoxelWorld';

export type GameModeType = 'obby' | 'hangout' | 'sandbox' | 'survival';

export interface VoxelBlockExport {
  vx: number;
  vy: number;
  vz: number;
  type: VoxelType;
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
