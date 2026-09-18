import { IslandEntity, EntityAction, Particle } from '../types';
import { lexiconSound } from '../audio/LexiconAudio';

export class IslandSimulation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private entities: IslandEntity[] = [];
  private bgImage: HTMLImageElement | null = null;
  private bgLoaded: boolean = false;
  private animFrameId: number | null = null;
  private lastTime: number = 0;
  private weatherParticles: Particle[] = [];
  private ambientWisps: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string; alpha: number }> = [];
  private clouds: Array<{ x: number; y: number; speed: number; scale: number; opacity: number }> = [];
  private summoningRings: Array<{ x: number; y: number; radius: number; maxRadius: number; color: string; alpha: number }> = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2D canvas context');
    this.ctx = context;

    this.loadBackground();
    this.initAtmosphere();
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    this.startLoop();
  }

  private loadBackground(): void {
    this.bgImage = new Image();
    // Use import.meta.env.BASE_URL compatible path
    const basePath = (window as any).__VITE_BASE__ || '/Genesis-New-Dawn/';
    this.bgImage.src = `${basePath.endsWith('/') ? basePath : basePath + '/'}lexicon_island_bg.jpg`;

    this.bgImage.onload = () => {
      this.bgLoaded = true;
    };
    this.bgImage.onerror = () => {
      // Fallback path
      if (this.bgImage) {
        this.bgImage.src = 'lexicon_island_bg.jpg';
        this.bgImage.onload = () => { this.bgLoaded = true; };
      }
    };
  }

  private resizeCanvas(): void {
    const rect = this.canvas.parentElement?.getBoundingClientRect();
    if (rect && rect.width > 0 && rect.height > 0) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.canvas.width = rect.width * dpr;
      this.canvas.height = rect.height * dpr;
      this.ctx.resetTransform?.();
      this.ctx.scale(dpr, dpr);
    }
  }

  private initAtmosphere(): void {
    // 1. Wisps around ancient tree
    for (let i = 0; i < 20; i++) {
      this.ambientWisps.push({
        x: 0.25 + (Math.random() - 0.5) * 0.2,
        y: 0.35 + (Math.random() - 0.5) * 0.2,
        vx: (Math.random() - 0.5) * 0.0003,
        vy: (Math.random() - 0.5) * 0.0003,
        radius: 1.5 + Math.random() * 2.5,
        color: Math.random() > 0.5 ? '#fde047' : '#67e8f9',
        alpha: 0.3 + Math.random() * 0.6
      });
    }

    // 2. Drifting soft clouds
    for (let i = 0; i < 5; i++) {
      this.clouds.push({
        x: Math.random() * 1.5 - 0.2,
        y: 0.05 + Math.random() * 0.25,
        speed: 0.00008 + Math.random() * 0.00008,
        scale: 0.7 + Math.random() * 0.6,
        opacity: 0.35 + Math.random() * 0.3
      });
    }
  }

  public getEntities(): IslandEntity[] {
    return this.entities;
  }

  public getPrimaryEntity(): IslandEntity | null {
    return this.entities.length > 0 ? this.entities[this.entities.length - 1] : null;
  }

  /** Spawn or retrieve an interactive creature */
  public spawnCreature(
    nounId: string,
    nounText: string,
    icon: string,
    location: 'meadow' | 'bridge' | 'castle' | 'river' | 'tree' = 'meadow'
  ): IslandEntity {
    const w = this.canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
    const h = this.canvas.height / (Math.min(window.devicePixelRatio || 1, 2));

    let posX = w * 0.35;
    let posY = h * 0.72;

    if (location === 'bridge') {
      posX = w * 0.52;
      posY = h * 0.52;
    } else if (location === 'castle') {
      posX = w * 0.72;
      posY = h * 0.35;
    } else if (location === 'river') {
      posX = w * 0.58;
      posY = h * 0.68;
    } else if (location === 'tree') {
      posX = w * 0.28;
      posY = h * 0.55;
    } else {
      // Meadow: gentle random position near foreground path
      posX = w * (0.2 + Math.random() * 0.25);
      posY = h * (0.7 + Math.random() * 0.12);
    }

    // Check if creature of this type already exists, if so reuse it
    let existing = this.entities.find(e => e.nounId === nounId);
    if (!existing) {
      existing = {
        id: 'ent_' + Math.random().toString(36).substr(2, 9),
        name: nounText,
        icon,
        nounId,
        x: posX,
        y: posY,
        baseY: posY,
        targetX: posX,
        targetY: posY,
        vx: 0,
        vy: 0,
        scale: 0.2,
        targetScale: 1.0,
        squashX: 1,
        squashY: 1,
        rotation: 0,
        action: 'idle',
        actionTimer: 0,
        particles: [],
        speechBubble: { text: `Hello! I'm ${nounText}!`, timer: 3 },
        createdTime: Date.now()
      };
      this.entities.push(existing);
    } else {
      existing.x = posX;
      existing.y = posY;
      existing.baseY = posY;
      existing.targetX = posX;
      existing.targetY = posY;
      existing.targetScale = 1.0;
    }

    // Summoning ring effect
    this.summoningRings.push({
      x: posX,
      y: posY,
      radius: 5,
      maxRadius: 65,
      color: '#fbbf24',
      alpha: 1.0
    });

    // Stardust burst
    this.emitStardust(posX, posY, '#facc15', 25);
    lexiconSound.playSuccess();

    return existing;
  }

  /** Trigger an action on a specific entity or all */
  public triggerAction(action: EntityAction, entityId?: string): void {
    const targetEntities = entityId 
      ? this.entities.filter(e => e.id === entityId)
      : this.entities;

    if (targetEntities.length === 0) {
      // Auto-spawn a friendly bunny if island is empty
      this.spawnCreature('rabbit', 'Bunny', '🐰', 'meadow');
      this.triggerAction(action);
      return;
    }

    targetEntities.forEach(e => {
      e.action = action;
      e.actionTimer = 0;

      switch (action) {
        case 'hopping':
          lexiconSound.playHop();
          e.speechBubble = { text: 'Boing! Boing!', timer: 2.5 };
          this.emitStardust(e.x, e.baseY, '#67e8f9', 15);
          break;
        case 'dancing':
          lexiconSound.playDance();
          e.speechBubble = { text: 'Dancing time! 🎵', timer: 3 };
          break;
        case 'eating':
          lexiconSound.playMunch();
          e.speechBubble = { text: 'Nom nom nom! 🥕', timer: 2.5 };
          this.emitHearts(e.x, e.y - 30);
          break;
        case 'sleeping':
          lexiconSound.playSleep();
          e.speechBubble = { text: 'Zzz... 😴', timer: 3 };
          break;
        case 'flying':
          lexiconSound.speak('Whoosh! Flying high!');
          e.speechBubble = { text: 'I can fly! ✨', timer: 3 };
          break;
        case 'fire':
          lexiconSound.speak('Roar! Dragon power!');
          e.speechBubble = { text: 'Roaaar! 🔥', timer: 2.5 };
          this.emitFire(e.x + 30, e.y);
          break;
        case 'idle':
          e.speechBubble = undefined;
          break;
      }
    });
  }

  /** Apply an adjective visual effect (Size, Aura, Element) */
  public applyAdjective(adjId: string, adjText: string, entityId?: string): void {
    const targets = entityId
      ? this.entities.filter(e => e.id === entityId)
      : this.entities;

    if (targets.length === 0) {
      this.spawnCreature('rabbit', 'Bunny', '🐰', 'meadow');
      this.applyAdjective(adjId, adjText);
      return;
    }

    lexiconSound.playMagicTransform();

    targets.forEach(e => {
      e.name = `${adjText} ${e.nounId}`;
      e.speechBubble = { text: `I am ${adjText}! ✨`, timer: 2.5 };

      switch (adjId) {
        case 'gigantic':
        case 'huge':
          e.targetScale = 1.9;
          this.emitStardust(e.x, e.y, '#f59e0b', 20);
          break;
        case 'tiny':
        case 'small':
          e.targetScale = 0.6;
          this.emitStardust(e.x, e.y, '#ec4899', 15);
          break;
        case 'radiant':
        case 'glowing':
          e.glowColor = '#facc15';
          e.glowRadius = 35;
          e.colorFilter = 'gold';
          this.emitStardust(e.x, e.y, '#fde047', 25);
          break;
        case 'frozen':
        case 'icy':
          e.glowColor = '#38bdf8';
          e.glowRadius = 30;
          e.colorFilter = 'ice';
          this.emitStardust(e.x, e.y, '#67e8f9', 20);
          break;
        case 'rainbow':
        case 'colorful':
          e.colorFilter = 'rainbow';
          this.emitStardust(e.x, e.y, '#c084fc', 30);
          break;
        case 'fluffy':
        case 'happy':
          e.targetScale = 1.15;
          e.glowColor = '#fb7185';
          e.glowRadius = 20;
          this.emitHearts(e.x, e.y - 25);
          break;
        default:
          e.targetScale = 1.0;
          break;
      }
    });
  }

  public clearIsland(): void {
    this.entities = [];
    this.weatherParticles = [];
  }

  private emitStardust(x: number, y: number, color: string, count: number): void {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 4.5;
      this.weatherParticles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2,
        radius: 2 + Math.random() * 3,
        color,
        alpha: 1,
        life: 0,
        maxLife: 35 + Math.random() * 20
      });
    }
  }

  private emitHearts(x: number, y: number): void {
    for (let i = 0; i < 6; i++) {
      this.weatherParticles.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -1.8 - Math.random() * 1.5,
        radius: 4,
        color: '#f43f5e',
        alpha: 1,
        life: 0,
        maxLife: 45
      });
    }
  }

  private emitFire(x: number, y: number): void {
    for (let i = 0; i < 20; i++) {
      this.weatherParticles.push({
        x,
        y,
        vx: 2 + Math.random() * 5,
        vy: (Math.random() - 0.5) * 2,
        radius: 3 + Math.random() * 4,
        color: Math.random() > 0.5 ? '#f97316' : '#ef4444',
        alpha: 1,
        life: 0,
        maxLife: 25
      });
    }
  }

  /** Find entity clicked by mouse/touch coordinates */
  public getEntityAt(clickX: number, clickY: number): IslandEntity | null {
    for (let i = this.entities.length - 1; i >= 0; i--) {
      const e = this.entities[i];
      const dist = Math.hypot(clickX - e.x, clickY - e.y);
      if (dist < 40 * e.scale) {
        return e;
      }
    }
    return null;
  }

  private startLoop(): void {
    const loop = (time: number) => {
      const dt = this.lastTime ? Math.min((time - this.lastTime) / 1000, 0.1) : 0.016;
      this.lastTime = time;

      this.update(dt);
      this.render();

      this.animFrameId = requestAnimationFrame(loop);
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  private update(dt: number): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = this.canvas.width / dpr;
    const h = this.canvas.height / dpr;

    // 1. Update Clouds
    this.clouds.forEach(c => {
      c.x += c.speed;
      if (c.x > 1.3) c.x = -0.3;
    });

    // 2. Update Summoning Rings
    this.summoningRings.forEach(r => {
      r.radius += (r.maxRadius - r.radius) * 0.1;
      r.alpha -= 0.03;
    });
    this.summoningRings = this.summoningRings.filter(r => r.alpha > 0);

    // 3. Update Particles
    this.weatherParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.life++;
      p.alpha = Math.max(0, 1 - (p.life / p.maxLife));
    });
    this.weatherParticles = this.weatherParticles.filter(p => p.life < p.maxLife);

    // 4. Update Entities (Physics & Animations)
    this.entities.forEach(e => {
      // Scale pop interpolation
      if (Math.abs(e.scale - e.targetScale) > 0.02) {
        e.scale += (e.targetScale - e.scale) * 0.15;
      }

      e.actionTimer += dt;

      // Decrement speech bubble
      if (e.speechBubble) {
        e.speechBubble.timer -= dt;
        if (e.speechBubble.timer <= 0) {
          e.speechBubble = undefined;
        }
      }

      // Action behaviors
      switch (e.action) {
        case 'hopping': {
          // REAL PARABOLIC HOPPING with Squash & Stretch
          const hopFreq = 3.5; // hops per second
          const cycle = (e.actionTimer * hopFreq * Math.PI) % Math.PI;
          const jumpHeight = 35 * e.scale;

          const hopProgress = Math.sin(cycle);
          e.y = e.baseY - hopProgress * jumpHeight;

          // Forward wander
          e.x += Math.sin(e.actionTimer * 0.8) * 0.8;

          // Squash & stretch physics
          if (hopProgress > 0.2) {
            // Stretching mid-air
            e.squashX = 0.85;
            e.squashY = 1.2;
          } else {
            // Squashing on ground impact
            e.squashX = 1.25;
            e.squashY = 0.8;
            if (Math.random() < 0.2) {
              this.emitStardust(e.x, e.baseY + 10, '#fef08a', 2);
            }
          }
          e.rotation = Math.sin(e.actionTimer * 2) * 0.08;
          break;
        }

        case 'dancing': {
          // Energetic wiggle & spin
          e.y = e.baseY - Math.abs(Math.sin(e.actionTimer * 6)) * 12;
          e.rotation = Math.sin(e.actionTimer * 10) * 0.22;
          e.squashX = 1 + Math.sin(e.actionTimer * 12) * 0.15;
          e.squashY = 1 - Math.sin(e.actionTimer * 12) * 0.15;

          if (Math.random() < 0.15) {
            this.weatherParticles.push({
              x: e.x + (Math.random() - 0.5) * 30,
              y: e.y - 20,
              vx: (Math.random() - 0.5) * 0.8,
              vy: -1.2,
              radius: 3,
              color: '#c084fc',
              alpha: 1,
              life: 0,
              maxLife: 30
            });
          }
          break;
        }

        case 'sleeping': {
          // Sits peacefully, gentle breathing
          e.y = e.baseY + 4;
          e.rotation = 0.05;
          e.squashX = 1.15;
          e.squashY = 0.85 + Math.sin(e.actionTimer * 2) * 0.06;

          // Floating Zzz
          if (Math.random() < 0.04) {
            this.weatherParticles.push({
              x: e.x + 15,
              y: e.y - 20,
              vx: 0.4 + Math.random() * 0.3,
              vy: -0.8 - Math.random() * 0.4,
              radius: 4,
              color: '#93c5fd',
              alpha: 1,
              life: 0,
              maxLife: 50
            });
          }
          break;
        }

        case 'eating': {
          // Rapid munching squash
          e.y = e.baseY;
          e.rotation = 0;
          e.squashX = 1 + Math.sin(e.actionTimer * 14) * 0.12;
          e.squashY = 1 - Math.sin(e.actionTimer * 14) * 0.12;
          break;
        }

        case 'flying': {
          // Swooping figure-eight flight
          e.x = e.targetX + Math.sin(e.actionTimer * 1.5) * (w * 0.25);
          e.y = (h * 0.35) + Math.cos(e.actionTimer * 2.2) * (h * 0.12);
          e.rotation = Math.cos(e.actionTimer * 1.5) * 0.15;
          e.squashX = 1.1;
          e.squashY = 0.95;

          // Fairy trail
          if (Math.random() < 0.3) {
            this.emitStardust(e.x, e.y, '#38bdf8', 2);
          }
          break;
        }

        case 'fire': {
          e.rotation = -0.08;
          e.squashX = 1.2;
          e.squashY = 1.0;
          if (Math.random() < 0.4) {
            this.emitFire(e.x + 25 * e.scale, e.y);
          }
          break;
        }

        case 'idle':
        default: {
          // Subtle natural breathing float
          e.y = e.baseY + Math.sin(e.actionTimer * 2.5) * 4;
          e.rotation = Math.sin(e.actionTimer * 1.2) * 0.03;
          e.squashX = 1;
          e.squashY = 1;
          break;
        }
      }
    });
  }

  private render(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = this.canvas.width / dpr;
    const h = this.canvas.height / dpr;

    this.ctx.clearRect(0, 0, w, h);

    // 1. Draw Hand-Painted Floating Island Background
    if (this.bgLoaded && this.bgImage) {
      // Cover canvas while preserving aspect ratio
      const imgW = this.bgImage.naturalWidth || 1920;
      const imgH = this.bgImage.naturalHeight || 1080;
      const imgAspect = imgW / imgH;
      const canvasAspect = w / h;

      let drawW = w;
      let drawH = h;
      let offX = 0;
      let offY = 0;

      if (canvasAspect > imgAspect) {
        drawW = w;
        drawH = w / imgAspect;
        offY = (h - drawH) / 2;
      } else {
        drawH = h;
        drawW = h * imgAspect;
        offX = (w - drawW) / 2;
      }

      this.ctx.drawImage(this.bgImage, offX, offY, drawW, drawH);
    } else {
      // Fallback sky gradient
      const skyGrad = this.ctx.createLinearGradient(0, 0, 0, h);
      skyGrad.addColorStop(0, '#7dd3fc');
      skyGrad.addColorStop(0.6, '#bae6fd');
      skyGrad.addColorStop(1, '#fed7aa');
      this.ctx.fillStyle = skyGrad;
      this.ctx.fillRect(0, 0, w, h);
    }

    // 2. Animated Sunbeams & God Rays (top-right behind castle)
    this.drawSunbeams(w, h);

    // 3. Floating Clouds (Pastel & Fluffy)
    this.drawClouds(w, h);

    // 4. Waterfall Mist & Splashes (bottom right)
    this.drawWaterfallSpray(w, h);

    // 5. Willow Tree Fairy Wisps
    this.drawWisps(w, h);

    // 6. Summoning Arcane Rings
    this.drawSummoningRings();

    // 7. Render All Living Entities with Real Squash & Stretch
    this.renderEntities();

    // 8. Render Particles & Effects
    this.renderParticles();
  }

  private drawSunbeams(w: number, h: number): void {
    this.ctx.save();
    const originX = w * 0.78;
    const originY = h * 0.22;
    const now = Date.now() / 1000;

    this.ctx.globalAlpha = 0.12 + Math.sin(now * 0.8) * 0.04;
    const beamGrad = this.ctx.createRadialGradient(originX, originY, 20, originX, originY, w * 0.65);
    beamGrad.addColorStop(0, 'rgba(254, 240, 138, 0.8)');
    beamGrad.addColorStop(0.4, 'rgba(253, 224, 71, 0.3)');
    beamGrad.addColorStop(1, 'transparent');

    this.ctx.fillStyle = beamGrad;
    this.ctx.fillRect(0, 0, w, h);
    this.ctx.restore();
  }

  private drawClouds(w: number, h: number): void {
    this.clouds.forEach(c => {
      this.ctx.save();
      this.ctx.globalAlpha = c.opacity;
      this.ctx.font = `${Math.round(48 * c.scale)}px sans-serif`;
      this.ctx.fillText('☁️', c.x * w, c.y * h);
      this.ctx.restore();
    });
  }

  private drawWaterfallSpray(w: number, h: number): void {
    this.ctx.save();
    const waterX = w * 0.62;
    const waterY = h * 0.82;
    const now = Date.now() / 1000;

    // Foaming mist particles
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for (let i = 0; i < 8; i++) {
      const sx = waterX + Math.sin(now * 4 + i) * 35;
      const sy = waterY + (i * 4) + Math.cos(now * 3 + i) * 6;
      const r = 3 + Math.sin(now * 5 + i) * 2;
      this.ctx.beginPath();
      this.ctx.arc(sx, sy, Math.max(1, r), 0, Math.PI * 2);
      this.ctx.fill();
    }
    this.ctx.restore();
  }

  private drawWisps(w: number, h: number): void {
    this.ambientWisps.forEach(p => {
      const wx = p.x * w;
      const wy = p.y * h;
      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 10;
      this.ctx.beginPath();
      this.ctx.arc(wx, wy, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  private drawSummoningRings(): void {
    this.summoningRings.forEach(r => {
      this.ctx.save();
      this.ctx.strokeStyle = r.color;
      this.ctx.lineWidth = 3;
      this.ctx.globalAlpha = r.alpha;
      this.ctx.shadowColor = r.color;
      this.ctx.shadowBlur = 15;

      this.ctx.beginPath();
      this.ctx.ellipse(r.x, r.y, r.radius, r.radius * 0.45, 0, 0, Math.PI * 2);
      this.ctx.stroke();
      this.ctx.restore();
    });
  }

  private renderEntities(): void {
    this.entities.forEach(e => {
      this.ctx.save();
      this.ctx.translate(e.x, e.y);
      this.ctx.rotate(e.rotation);
      this.ctx.scale(e.scale * e.squashX, e.scale * e.squashY);

      // 1. Shadow beneath character
      this.ctx.save();
      this.ctx.scale(1 / e.squashX, 1 / e.squashY);
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
      this.ctx.beginPath();
      this.ctx.ellipse(0, 26, 22 * e.scale, 8 * e.scale, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      // 2. Glowing aura if enhanced by adjective
      if (e.glowColor) {
        const rad = e.glowRadius || 25;
        const glow = this.ctx.createRadialGradient(0, 0, 5, 0, 0, rad);
        glow.addColorStop(0, e.glowColor);
        glow.addColorStop(1, 'transparent');
        this.ctx.fillStyle = glow;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, rad, 0, Math.PI * 2);
        this.ctx.fill();
      }

      // 3. Rainbow filter
      if (e.colorFilter === 'rainbow') {
        const hue = (Date.now() / 20) % 360;
        this.ctx.shadowColor = `hsl(${hue}, 90%, 60%)`;
        this.ctx.shadowBlur = 20;
      } else if (e.colorFilter === 'ice') {
        this.ctx.shadowColor = '#67e8f9';
        this.ctx.shadowBlur = 20;
      }

      // 4. Draw character sprite
      this.ctx.font = '54px "Apple Color Emoji", "Segoe UI Emoji", sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(e.icon, 0, 0);

      this.ctx.restore();

      // 5. Draw Name Badge
      this.ctx.save();
      this.ctx.font = 'bold 13px Fredoka, sans-serif';
      const nameMetrics = this.ctx.measureText(e.name);
      const badgeW = nameMetrics.width + 18;
      const badgeH = 22;
      const badgeX = e.x - badgeW / 2;
      const badgeY = e.y + 32 * e.scale;

      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      this.ctx.strokeStyle = '#fbbf24';
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 11);
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.fillStyle = '#ffffff';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(e.name, e.x, badgeY + 11);
      this.ctx.restore();

      // 6. Draw Speech Bubble if active
      if (e.speechBubble) {
        this.drawSpeechBubble(e.x, e.y - 45 * e.scale, e.speechBubble.text);
      }
    });
  }

  private drawSpeechBubble(x: number, y: number, text: string): void {
    this.ctx.save();
    this.ctx.font = 'bold 14px Fredoka, sans-serif';
    const metrics = this.ctx.measureText(text);
    const bubbleW = metrics.width + 24;
    const bubbleH = 32;
    const bubbleX = x - bubbleW / 2;
    const bubbleY = y - bubbleH;

    // Bubble background
    this.ctx.fillStyle = '#ffffff';
    this.ctx.strokeStyle = '#1e293b';
    this.ctx.lineWidth = 2;
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    this.ctx.shadowBlur = 8;

    this.ctx.beginPath();
    this.ctx.roundRect(bubbleX, bubbleY, bubbleW, bubbleH, 12);
    this.ctx.fill();
    this.ctx.stroke();

    // Little triangle pointer
    this.ctx.beginPath();
    this.ctx.moveTo(x - 6, bubbleY + bubbleH);
    this.ctx.lineTo(x, bubbleY + bubbleH + 7);
    this.ctx.lineTo(x + 6, bubbleY + bubbleH);
    this.ctx.closePath();
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fill();
    this.ctx.stroke();

    // Text
    this.ctx.fillStyle = '#0f172a';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(text, x, bubbleY + bubbleH / 2);

    this.ctx.restore();
  }

  private renderParticles(): void {
    this.weatherParticles.forEach(p => {
      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });
  }

  public destroy(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }
}
