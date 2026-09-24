import * as THREE from 'three';
import { ScriptedEntity } from './MapTypes';
import { BlockyAvatar } from './BlockyAvatar';
import { VoxelAudio } from './VoxelAudio';

export interface ScriptPlayerAPI {
  name: string;
  position: THREE.Vector3;
  giveCoins: (amount: number) => void;
  teleport: (x: number, y: number, z: number) => void;
  launch: (forceY: number) => void;
  damage: (amount: number) => void;
  boostSpeed: (durationSec: number) => void;
}

export interface ScriptWorldAPI {
  playSound: (sound: 'coin' | 'swing' | 'bounce' | 'victory' | 'lava' | 'mine' | 'place') => void;
  showToast: (msg: string) => void;
  getTime: () => string;
}

export class ScriptingEngine {
  private audio: VoxelAudio;
  private activeSpeechBubbles: Map<string, { sprite: THREE.Sprite; expireTime: number }> = new Map();

  constructor(_scene: THREE.Scene, audio: VoxelAudio) {
    this.audio = audio;
  }

  /**
   * Display a 3D comic speech bubble above an entity or avatar
   */
  public showSpeechBubble(targetMesh: THREE.Object3D, text: string, durationSec: number = 4.0): void {
    const entityId = targetMesh.uuid;
    const existing = this.activeSpeechBubbles.get(entityId);
    if (existing) {
      targetMesh.remove(existing.sprite);
      this.activeSpeechBubbles.delete(entityId);
    }

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 160;
    const ctx = canvas.getContext('2d')!;

    // Speech bubble background
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 6;

    // Bubble box
    ctx.beginPath();
    ctx.roundRect(16, 16, 480, 100, 24);
    ctx.fill();
    ctx.stroke();

    // Triangle pointer pointing down
    ctx.beginPath();
    ctx.moveTo(236, 116);
    ctx.lineTo(256, 148);
    ctx.lineTo(276, 116);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Text formatting
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 28px Outfit, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Truncate text if needed
    const displayText = text.length > 50 ? text.substring(0, 47) + '...' : text;
    ctx.fillText(displayText, 256, 66);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      depthTest: false,
      transparent: true
    });

    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(4, 1.25, 1);
    sprite.position.set(0, 5.2, 0); // Above avatar head
    targetMesh.add(sprite);

    this.activeSpeechBubbles.set(entityId, {
      sprite,
      expireTime: performance.now() + durationSec * 1000
    });
  }

  /**
   * Run entity logic every frame (called from main loop)
   */
  public updateEntity(
    entity: ScriptedEntity,
    mesh: THREE.Object3D,
    avatar: BlockyAvatar | null,
    deltaSec: number,
    player: ScriptPlayerAPI,
    world: ScriptWorldAPI
  ): void {
    const distToPlayer = mesh.position.distanceTo(player.position);
    const script = entity.script;

    // Clean up expired speech bubbles
    const bubble = this.activeSpeechBubbles.get(mesh.uuid);
    if (bubble && performance.now() > bubble.expireTime) {
      mesh.remove(bubble.sprite);
      this.activeSpeechBubbles.delete(mesh.uuid);
    }

    switch (script.behavior) {
      case 'dialogue': {
        // Look at player when nearby
        if (distToPlayer < 8) {
          const dx = player.position.x - mesh.position.x;
          const dz = player.position.z - mesh.position.z;
          mesh.rotation.y = Math.atan2(dx, dz);

          // Say dialogue once when player steps close
          if (distToPlayer < 4 && !this.activeSpeechBubbles.has(mesh.uuid)) {
            const lines = script.dialogueText || `Hello ${player.name}! Nice to meet you in Genesis!`;
            this.showSpeechBubble(mesh, lines, 5.0);
            this.audio.playSwing();
          }
        }
        if (avatar) avatar.updateAnimation(deltaSec, false, false, 0);
        break;
      }

      case 'follow': {
        // Follow player companion behavior
        if (distToPlayer > 2.8 && distToPlayer < 24) {
          const dir = player.position.clone().sub(mesh.position).normalize();
          mesh.rotation.y = Math.atan2(dir.x, dir.z);

          const speed = 7.5;
          mesh.position.x += dir.x * speed * deltaSec;
          mesh.position.z += dir.z * speed * deltaSec;

          if (avatar) avatar.updateAnimation(deltaSec, true, false, 0);
        } else {
          if (avatar) avatar.updateAnimation(deltaSec, false, false, 0);
        }
        break;
      }

      case 'patrol': {
        // Gentle patrol around spawn point
        const patrolRadius = 6;
        const time = performance.now() * 0.001;
        const targetX = entity.position.x + Math.sin(time * 0.8) * patrolRadius;
        const targetZ = entity.position.z + Math.cos(time * 0.8) * patrolRadius;

        const dir = new THREE.Vector3(targetX - mesh.position.x, 0, targetZ - mesh.position.z);
        if (dir.lengthSq() > 0.1) {
          dir.normalize();
          mesh.rotation.y = Math.atan2(dir.x, dir.z);
          mesh.position.x += dir.x * 4 * deltaSec;
          mesh.position.z += dir.z * 4 * deltaSec;
          if (avatar) avatar.updateAnimation(deltaSec, true, false, 0);
        } else {
          if (avatar) avatar.updateAnimation(deltaSec, false, false, 0);
        }
        break;
      }

      case 'guard': {
        // Guards territory, chases player if trespassing
        if (distToPlayer < 8) {
          const dir = player.position.clone().sub(mesh.position).normalize();
          mesh.rotation.y = Math.atan2(dir.x, dir.z);

          const guardSpeed = 9.0;
          mesh.position.x += dir.x * guardSpeed * deltaSec;
          mesh.position.z += dir.z * guardSpeed * deltaSec;

          if (avatar) avatar.updateAnimation(deltaSec, true, false, 0);

          if (distToPlayer < 2.0) {
            player.damage(10);
            this.audio.playLavaSizzle();
            world.showToast(`⚔️ ${entity.name} struck you for 10 damage!`);
            if (avatar) avatar.triggerToolSwing();
          }
        } else {
          // Return to home position
          const home = new THREE.Vector3(entity.position.x, entity.position.y, entity.position.z);
          if (mesh.position.distanceTo(home) > 1) {
            const dir = home.clone().sub(mesh.position).normalize();
            mesh.rotation.y = Math.atan2(dir.x, dir.z);
            mesh.position.x += dir.x * 4 * deltaSec;
            mesh.position.z += dir.z * 4 * deltaSec;
            if (avatar) avatar.updateAnimation(deltaSec, true, false, 0);
          } else {
            if (avatar) avatar.updateAnimation(deltaSec, false, false, 0);
          }
        }
        break;
      }

      case 'custom_code': {
        if (script.customCode) {
          this.executeCustomSandbox(script.customCode, entity, mesh, avatar, deltaSec, player, world);
        }
        break;
      }
    }
  }

  /**
   * Handle user interacting (clicking) on a scripted entity
   */
  public handleInteraction(
    entity: ScriptedEntity,
    mesh: THREE.Object3D,
    player: ScriptPlayerAPI,
    world: ScriptWorldAPI
  ): void {
    const script = entity.script;

    if (script.behavior === 'dialogue') {
      const msg = script.dialogueText || `Hey ${player.name}! Welcome to my world!`;
      this.showSpeechBubble(mesh, msg, 5.0);
      world.showToast(`💬 ${entity.name}: "${msg}"`);
      this.audio.playSwing();
    } else if (script.behavior === 'coin_reward') {
      const amount = script.coinAmount || 20;
      player.giveCoins(amount);
      world.showToast(`🪙 ${entity.name} gave you ${amount} Coins!`);
      this.showSpeechBubble(mesh, `Here's +${amount} Coins! Enjoy!`, 3.5);
      this.audio.playCoin();
    } else if (script.behavior === 'teleport') {
      if (script.teleportTarget) {
        player.teleport(script.teleportTarget.x, script.teleportTarget.y, script.teleportTarget.z);
        world.showToast(`🌀 Teleported by ${entity.name}!`);
        this.audio.playBounce();
      }
    } else if (script.behavior === 'bounce') {
      player.launch(26);
      world.showToast(`🚀 Launched high into the sky!`);
      this.audio.playBounce();
    } else if (script.behavior === 'custom_code' && script.customCode) {
      try {
        const sandboxSelf = {
          name: entity.name,
          say: (text: string) => {
            this.showSpeechBubble(mesh, text, 4.0);
            world.showToast(`💬 ${entity.name}: "${text}"`);
          },
          teleport: (x: number, y: number, z: number) => mesh.position.set(x, y, z)
        };

        const fn = new Function('self', 'player', 'world', `
          try {
            ${script.customCode}
            if (typeof onInteract === 'function') {
              onInteract(player);
            }
          } catch(err) {
            world.showToast("Script error: " + err.message);
          }
        `);
        fn(sandboxSelf, player, world);
      } catch (err: any) {
        world.showToast(`⚠️ Script compile error: ${err.message}`);
      }
    }
  }

  /**
   * Execute custom live JavaScript code inside a guarded sandbox
   */
  private executeCustomSandbox(
    code: string,
    entity: ScriptedEntity,
    mesh: THREE.Object3D,
    avatar: BlockyAvatar | null,
    deltaSec: number,
    player: ScriptPlayerAPI,
    world: ScriptWorldAPI
  ): void {
    try {
      const sandboxSelf = {
        name: entity.name,
        position: mesh.position,
        rotation: mesh.rotation,
        say: (text: string) => this.showSpeechBubble(mesh, text, 4.0),
        moveToward: (x: number, z: number, speed: number = 4) => {
          const dir = new THREE.Vector3(x - mesh.position.x, 0, z - mesh.position.z);
          if (dir.lengthSq() > 0.05) {
            dir.normalize();
            mesh.rotation.y = Math.atan2(dir.x, dir.z);
            mesh.position.x += dir.x * speed * deltaSec;
            mesh.position.z += dir.z * speed * deltaSec;
            if (avatar) avatar.updateAnimation(deltaSec, true, false, 0);
          }
        }
      };

      const fn = new Function('self', 'player', 'world', 'dt', `
        ${code}
        if (typeof onTick === 'function') {
          onTick(dt);
        }
      `);
      fn(sandboxSelf, player, world, deltaSec);
    } catch (e: any) {
      // Suppress spamming on continuous frame errors
    }
  }

  public destroy(): void {
    this.activeSpeechBubbles.forEach(({ sprite }) => {
      if (sprite.parent) sprite.parent.remove(sprite);
    });
    this.activeSpeechBubbles.clear();
  }
}
