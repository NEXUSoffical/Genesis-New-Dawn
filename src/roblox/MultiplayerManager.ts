import * as THREE from 'three';
import { RealtimeChannel } from '@supabase/supabase-js';
import { supabase } from '../backend/supabase';
import { BlockyAvatar } from './BlockyAvatar';
import { AvatarCustomization } from './types';

export interface RemotePlayer {
  id: string;
  username: string;
  avatar: BlockyAvatar;
  targetPos: THREE.Vector3;
  targetRotY: number;
  isMoving: boolean;
  isJumping: boolean;
  velocityY: number;
  lastUpdate: number;
}

export interface TransformPayload {
  id: string;
  x: number;
  y: number;
  z: number;
  rotY: number;
  isMoving: boolean;
  isJumping: boolean;
  velocityY: number;
  equippedGear: string;
}

export interface BlockPayload {
  vx: number;
  vy: number;
  vz: number;
  type: string;
  color?: number;
}

export interface BlockBrokenPayload {
  vx: number;
  vy: number;
  vz: number;
  color: number;
}

export interface ChatPayload {
  id: string;
  username: string;
  text: string;
}

export class MultiplayerManager {
  private scene: THREE.Scene;
  private channel: RealtimeChannel | null = null;
  private localId: string;
  private localUsername: string;
  private localCustomization: AvatarCustomization;

  private remotePlayers: Map<string, RemotePlayer> = new Map();
  private lastBroadcastTime: number = 0;
  private broadcastIntervalMs: number = 45; // ~22 updates/sec

  public onPlayerCountChange?: (count: number) => void;
  public onRemoteBlockPlaced?: (payload: BlockPayload) => void;
  public onRemoteBlockBroken?: (payload: BlockBrokenPayload) => void;
  public onRemoteChat?: (payload: ChatPayload) => void;

  constructor(
    scene: THREE.Scene,
    username: string,
    customization: AvatarCustomization
  ) {
    this.scene = scene;
    this.localUsername = username;
    this.localCustomization = customization;
    this.localId = this.generateClientId();

    this.initRealtime();
  }

  private generateClientId(): string {
    return 'pioneer_' + Math.random().toString(36).substring(2, 9);
  }

  private initRealtime(): void {
    this.channel = supabase.channel('genesis_world_3d', {
      config: {
        presence: { key: this.localId },
        broadcast: { self: false }
      }
    });

    // 1. PRESENCE (Tracking who joins and leaves)
    this.channel
      .on('presence', { event: 'sync' }, () => {
        this.handlePresenceSync();
      })
      .on('presence', { event: 'join' }, ({ newPresences }: { newPresences: any[] }) => {
        newPresences.forEach((presence: any) => {
          if (presence.id !== this.localId) {
            this.spawnOrUpdateRemotePlayer(presence);
          }
        });
        this.emitPlayerCount();
      })
      .on('presence', { event: 'leave' }, ({ leftPresences }: { leftPresences: any[] }) => {
        leftPresences.forEach((presence: any) => {
          this.removeRemotePlayer(presence.id);
        });
        this.emitPlayerCount();
      });

    // 2. BROADCAST: Transform sync (movement, rotation, animations)
    this.channel.on('broadcast', { event: 'player_transform' }, ({ payload }: { payload: TransformPayload }) => {
      if (payload.id === this.localId) return;

      const remote = this.remotePlayers.get(payload.id);
      if (remote) {
        remote.targetPos.set(payload.x, payload.y, payload.z);
        remote.targetRotY = payload.rotY;
        remote.isMoving = payload.isMoving;
        remote.isJumping = payload.isJumping;
        remote.velocityY = payload.velocityY;
        remote.lastUpdate = performance.now();

        if (payload.equippedGear) {
          remote.avatar.applyGear(payload.equippedGear);
        }
      }
    });

    // 3. BROADCAST: Real-time collaborative block placement & breaking
    this.channel.on('broadcast', { event: 'block_placed' }, ({ payload }: { payload: BlockPayload }) => {
      if (this.onRemoteBlockPlaced) {
        this.onRemoteBlockPlaced(payload);
      }
    });

    this.channel.on('broadcast', { event: 'block_broken' }, ({ payload }: { payload: BlockBrokenPayload }) => {
      if (this.onRemoteBlockBroken) {
        this.onRemoteBlockBroken(payload);
      }
    });

    // 4. BROADCAST: Real-time chat messages
    this.channel.on('broadcast', { event: 'player_chat' }, ({ payload }: { payload: ChatPayload }) => {
      if (payload.id === this.localId) return;
      if (this.onRemoteChat) {
        this.onRemoteChat(payload);
      }
    });

    // Subscribe and announce presence
    this.channel.subscribe(async (status: string) => {
      if (status === 'SUBSCRIBED' && this.channel) {
        await this.channel.track({
          id: this.localId,
          username: this.localUsername,
          avatarConfig: this.localCustomization,
          onlineAt: new Date().toISOString()
        });
      }
    });
  }

  private handlePresenceSync(): void {
    if (!this.channel) return;
    const presenceState = this.channel.presenceState();
    const activeIds = new Set<string>();

    for (const key in presenceState) {
      const presences = presenceState[key] as any[];
      presences.forEach((p) => {
        if (p.id !== this.localId) {
          activeIds.add(p.id);
          this.spawnOrUpdateRemotePlayer(p);
        }
      });
    }

    // Clean up players who are no longer in presence state
    this.remotePlayers.forEach((_, id) => {
      if (!activeIds.has(id)) {
        this.removeRemotePlayer(id);
      }
    });

    this.emitPlayerCount();
  }

  private spawnOrUpdateRemotePlayer(presence: any): void {
    if (this.remotePlayers.has(presence.id)) return;

    const avatarConfig: AvatarCustomization = presence.avatarConfig || {
      headColor: '#fdba74',
      torsoColor: '#1e293b',
      leftArmColor: '#fdba74',
      rightArmColor: '#fdba74',
      leftLegColor: '#0f172a',
      rightLegColor: '#0f172a',
      equippedHat: 'none',
      equippedShirt: 'synthetic_skin',
      equippedPants: 'combat_pants',
      equippedFace: 'smile',
      equippedGear: 'none'
    };

    const username = presence.username || 'Pioneer';
    const remoteAvatar = new BlockyAvatar(avatarConfig, username);

    // Initial spawn pos
    const initialPos = new THREE.Vector3(0, 0, 0);
    remoteAvatar.root.position.copy(initialPos);
    this.scene.add(remoteAvatar.root);

    this.remotePlayers.set(presence.id, {
      id: presence.id,
      username,
      avatar: remoteAvatar,
      targetPos: initialPos.clone(),
      targetRotY: 0,
      isMoving: false,
      isJumping: false,
      velocityY: 0,
      lastUpdate: performance.now()
    });
  }

  private removeRemotePlayer(id: string): void {
    const remote = this.remotePlayers.get(id);
    if (remote) {
      this.scene.remove(remote.avatar.root);
      this.remotePlayers.delete(id);
    }
  }

  private emitPlayerCount(): void {
    const totalCount = this.remotePlayers.size + 1; // Remote + Local
    if (this.onPlayerCountChange) {
      this.onPlayerCountChange(totalCount);
    }
  }

  public broadcastTransform(
    x: number,
    y: number,
    z: number,
    rotY: number,
    isMoving: boolean,
    isJumping: boolean,
    velocityY: number,
    equippedGear: string = 'none'
  ): void {
    const now = performance.now();
    if (now - this.lastBroadcastTime < this.broadcastIntervalMs) return;
    this.lastBroadcastTime = now;

    if (!this.channel) return;

    this.channel.send({
      type: 'broadcast',
      event: 'player_transform',
      payload: {
        id: this.localId,
        x: Math.round(x * 100) / 100,
        y: Math.round(y * 100) / 100,
        z: Math.round(z * 100) / 100,
        rotY: Math.round(rotY * 100) / 100,
        isMoving,
        isJumping,
        velocityY: Math.round(velocityY * 10) / 10,
        equippedGear
      }
    });
  }

  public broadcastBlockPlaced(vx: number, vy: number, vz: number, type: string, color: number): void {
    if (!this.channel) return;
    this.channel.send({
      type: 'broadcast',
      event: 'block_placed',
      payload: { vx, vy, vz, type, color }
    });
  }

  public broadcastBlockBroken(vx: number, vy: number, vz: number, color: number): void {
    if (!this.channel) return;
    this.channel.send({
      type: 'broadcast',
      event: 'block_broken',
      payload: { vx, vy, vz, color }
    });
  }

  public broadcastChat(text: string): void {
    if (!this.channel) return;
    this.channel.send({
      type: 'broadcast',
      event: 'player_chat',
      payload: {
        id: this.localId,
        username: this.localUsername,
        text
      }
    });
  }

  public update(deltaSec: number): void {
    // Smooth interpolation (lerp) of all remote players towards target transforms
    this.remotePlayers.forEach((player) => {
      // Lerp position (smooth 12x damping)
      player.avatar.root.position.lerp(player.targetPos, Math.min(1, deltaSec * 12));

      // Slerp rotation
      const currentRot = player.avatar.root.rotation.y;
      let diff = player.targetRotY - currentRot;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      player.avatar.root.rotation.y += diff * Math.min(1, deltaSec * 12);

      // Animate limbs
      player.avatar.updateAnimation(
        deltaSec,
        player.isMoving,
        player.isJumping,
        player.velocityY
      );
    });
  }

  public getPlayerCount(): number {
    return this.remotePlayers.size + 1;
  }

  public getRemotePlayerAvatar(id: string): BlockyAvatar | undefined {
    return this.remotePlayers.get(id)?.avatar;
  }

  public destroy(): void {
    if (this.channel) {
      this.channel.untrack();
      this.channel.unsubscribe();
      this.channel = null;
    }

    this.remotePlayers.forEach((player) => {
      this.scene.remove(player.avatar.root);
    });
    this.remotePlayers.clear();
  }
}
