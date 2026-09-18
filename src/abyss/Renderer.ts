import { Creature } from './Creature';
import { Simulation } from './Simulation';
import { Vector2D } from './types';

export interface Camera {
  x: number;
  y: number;
  zoom: number;
  targetCreatureId: string | null;
}

export class Renderer {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public camera: Camera;

  private dpr: number = 1;
  private time: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) throw new Error('Could not obtain 2D rendering context');
    this.ctx = ctx;

    this.camera = {
      x: 0,
      y: 0,
      zoom: 1.0,
      targetCreatureId: null
    };

    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  public resize(): void {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = window.innerWidth * this.dpr;
    this.canvas.height = window.innerHeight * this.dpr;
    this.canvas.style.width = `${window.innerWidth}px`;
    this.canvas.style.height = `${window.innerHeight}px`;
  }

  public render(sim: Simulation, dt: number, selectedCreature: Creature | null): void {
    this.time += dt;

    // Follow tracked creature
    if (this.camera.targetCreatureId) {
      const tracked = sim.creatures.find(c => c.id === this.camera.targetCreatureId);
      if (tracked) {
        const targetCamX = tracked.pos.x - (this.canvas.width / this.dpr / (2 * this.camera.zoom));
        const targetCamY = tracked.pos.y - (this.canvas.height / this.dpr / (2 * this.camera.zoom));
        this.camera.x += (targetCamX - this.camera.x) * Math.min(1.0, dt * 5.0);
        this.camera.y += (targetCamY - this.camera.y) * Math.min(1.0, dt * 5.0);
      }
    }

    const ctx = this.ctx;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;

    ctx.save();
    ctx.scale(this.dpr, this.dpr);

    // 1. Draw Deep Abyss Gradient Background
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, height);
    oceanGrad.addColorStop(0.0, '#030c1e'); // Twilight blue
    oceanGrad.addColorStop(0.35, '#020815'); // Midnight ocean
    oceanGrad.addColorStop(0.7, '#01040a'); // Abyssal zone
    oceanGrad.addColorStop(1.0, '#000205'); // Hadal trench floor
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Light Rays / Sunbeams from surface (top 30%)
    this.drawLightRays(ctx, width, height);

    // Mutagen Aura if active
    if (sim.mutagenTimer > 0) {
      ctx.save();
      ctx.globalAlpha = Math.min(0.25, sim.mutagenTimer * 0.05);
      const radGrad = ctx.createRadialGradient(width * 0.5, height * 0.5, 50, width * 0.5, height * 0.5, width * 0.8);
      radGrad.addColorStop(0, '#9900ff');
      radGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, width, height);
      ctx.restore();
    }

    // Apply World Camera Transform
    ctx.save();
    ctx.scale(this.camera.zoom, this.camera.zoom);
    ctx.translate(-this.camera.x, -this.camera.y);

    // 3. Draw Seabed & Hydrothermal Vents
    this.drawSeabedAndVents(ctx, sim);

    // 4. Draw Marine Snow
    this.drawMarineSnow(ctx, sim);

    // 5. Draw Food & Nutrients
    this.drawFood(ctx, sim);

    // 6. Draw Creatures with Procedural Bioluminescence
    this.drawCreatures(ctx, sim, selectedCreature);

    ctx.restore(); // Restore camera transform
    ctx.restore(); // Restore dpr
  }

  private drawLightRays(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    for (let i = 0; i < 4; i++) {
      const rayX = (width * 0.25) * i + Math.sin(this.time * 0.4 + i) * 60;
      const rayWidth = 80 + Math.sin(this.time * 0.3 + i * 2) * 30;
      const grad = ctx.createLinearGradient(rayX, 0, rayX + 60, height * 0.45);
      grad.addColorStop(0, 'rgba(0, 180, 255, 0.08)');
      grad.addColorStop(1, 'rgba(0, 50, 120, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.moveTo(rayX, 0);
      ctx.lineTo(rayX + rayWidth, 0);
      ctx.lineTo(rayX + rayWidth * 2.5, height * 0.45);
      ctx.lineTo(rayX - rayWidth * 0.5, height * 0.45);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }

  private drawSeabedAndVents(ctx: CanvasRenderingContext2D, sim: Simulation): void {
    // Rocky seabed line
    ctx.save();
    const bedY = sim.height - 30;
    ctx.fillStyle = '#030811';
    ctx.beginPath();
    ctx.moveTo(0, sim.height);
    ctx.lineTo(0, bedY);
    for (let x = 0; x <= sim.width; x += 60) {
      const bump = Math.sin(x * 0.015) * 15 + Math.cos(x * 0.04) * 8;
      ctx.lineTo(x, bedY + bump);
    }
    ctx.lineTo(sim.width, sim.height);
    ctx.closePath();
    ctx.fill();

    // Hydrothermal Vents
    for (const vent of sim.vents) {
      // Chimney cone
      ctx.fillStyle = '#111827';
      ctx.beginPath();
      ctx.moveTo(vent.pos.x - vent.radius, sim.height);
      ctx.lineTo(vent.pos.x - vent.radius * 0.45, vent.pos.y);
      ctx.lineTo(vent.pos.x + vent.radius * 0.45, vent.pos.y);
      ctx.lineTo(vent.pos.x + vent.radius, sim.height);
      ctx.closePath();
      ctx.fill();

      // Geothermal glowing rim
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const glow = ctx.createRadialGradient(vent.pos.x, vent.pos.y, 4, vent.pos.x, vent.pos.y, 45);
      glow.addColorStop(0, 'rgba(255, 120, 20, 0.9)');
      glow.addColorStop(0.5, 'rgba(255, 60, 0, 0.4)');
      glow.addColorStop(1, 'rgba(255, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(vent.pos.x, vent.pos.y, 45, 0, Math.PI * 2);
      ctx.fill();

      // Heat shimmer plume
      for (let p = 0; p < 4; p++) {
        const offset = Math.sin(this.time * 3 + p) * 12;
        const py = vent.pos.y - 20 - (p * 20);
        ctx.fillStyle = `rgba(255, 160, 50, ${0.4 - p * 0.08})`;
        ctx.beginPath();
        ctx.arc(vent.pos.x + offset, py, 6 + p * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    ctx.restore();
  }

  private drawMarineSnow(ctx: CanvasRenderingContext2D, sim: Simulation): void {
    ctx.save();
    ctx.fillStyle = '#e2f1ff';
    for (const snow of sim.marineSnow) {
      ctx.globalAlpha = snow.opacity;
      ctx.beginPath();
      ctx.arc(snow.x, snow.y, snow.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  private drawFood(ctx: CanvasRenderingContext2D, sim: Simulation): void {
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    for (const food of sim.foodParticles) {
      const pulse = Math.sin(this.time * 4 + food.pos.x) * 0.3 + 0.7;
      const alpha = Math.min(1.0, (1 - food.age / food.lifespan) * 0.9) * pulse;

      // Glow halo
      const grad = ctx.createRadialGradient(food.pos.x, food.pos.y, 1, food.pos.x, food.pos.y, food.radius * 3.5);
      grad.addColorStop(0, `hsla(${food.hue}, 100%, 75%, ${alpha})`);
      grad.addColorStop(1, `hsla(${food.hue}, 100%, 50%, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(food.pos.x, food.pos.y, food.radius * 3.5, 0, Math.PI * 2);
      ctx.fill();

      // Bright center
      ctx.fillStyle = `hsla(${food.hue}, 100%, 90%, ${alpha})`;
      ctx.beginPath();
      ctx.arc(food.pos.x, food.pos.y, food.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  private drawCreatures(ctx: CanvasRenderingContext2D, sim: Simulation, selected: Creature | null): void {
    for (const c of sim.creatures) {
      this.drawSingleCreature(ctx, c, c === selected);
    }
  }

  private drawSingleCreature(ctx: CanvasRenderingContext2D, c: Creature, isSelected: boolean): void {
    ctx.save();
    const dna = c.dna;
    const pulse = (Math.sin(c.pulsePhase) * 0.3 + 0.7) * dna.glowIntensity;
    const baseColor = `hsl(${dna.hue}, 95%, 60%)`;
    const glowColor = `hsla(${dna.hue}, 100%, 65%, ${pulse * 0.8})`;

    // Defensive Flash Effect
    if (c.flashTimer > 0) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const flashGrad = ctx.createRadialGradient(c.pos.x, c.pos.y, 10, c.pos.x, c.pos.y, 140);
      flashGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      flashGrad.addColorStop(0.4, `hsla(${dna.hue}, 100%, 70%, 0.6)`);
      flashGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = flashGrad;
      ctx.beginPath();
      ctx.arc(c.pos.x, c.pos.y, 140, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 1. Draw Trailing Tentacles
    if (dna.tentacleCount > 0 && c.segments.length > 0) {
      ctx.save();
      ctx.strokeStyle = `hsla(${dna.hue}, 90%, 55%, ${pulse * 0.6})`;
      ctx.lineWidth = Math.max(1.2, dna.size * 0.12);
      const lastSeg = c.segments[c.segments.length - 1];

      for (let t = 0; t < dna.tentacleCount; t++) {
        const spreadAngle = (t - (dna.tentacleCount - 1) / 2) * 0.35;
        const tenLen = dna.size * (2.2 + t * 0.4);
        const wave = Math.sin(this.time * 5 + t * 1.2) * (dna.size * 0.5);

        ctx.beginPath();
        ctx.moveTo(lastSeg.x, lastSeg.y);
        const ctrlX = lastSeg.x - Math.cos(c.angle + spreadAngle) * (tenLen * 0.5) + wave;
        const ctrlY = lastSeg.y - Math.sin(c.angle + spreadAngle) * (tenLen * 0.5) + wave;
        const endX = lastSeg.x - Math.cos(c.angle + spreadAngle) * tenLen;
        const endY = lastSeg.y - Math.sin(c.angle + spreadAngle) * tenLen;
        ctx.quadraticCurveTo(ctrlX, ctrlY, endX, endY);
        ctx.stroke();

        // Glowing tentacle tip
        ctx.fillStyle = `hsl(${dna.hue}, 100%, 80%)`;
        ctx.beginPath();
        ctx.arc(endX, endY, 2.0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // 2. Draw Spine Segments (Tapered from head to tail)
    for (let i = c.segments.length - 1; i >= 0; i--) {
      const seg = c.segments[i];
      const taper = 1.0 - (i / c.segments.length) * 0.65;
      const radius = dna.size * taper * 0.85;

      // Segment Glow
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const segGlow = ctx.createRadialGradient(seg.x, seg.y, 1, seg.x, seg.y, radius * 2.2);
      segGlow.addColorStop(0, glowColor);
      segGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = segGlow;
      ctx.beginPath();
      ctx.arc(seg.x, seg.y, radius * 2.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Segment Body Node
      ctx.fillStyle = `hsl(${dna.hue}, 80%, ${25 + taper * 20}%)`;
      ctx.beginPath();
      ctx.arc(seg.x, seg.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Bioluminescent Photophore Dot
      ctx.fillStyle = `hsl(${dna.hue}, 100%, 85%)`;
      ctx.beginPath();
      ctx.arc(seg.x, seg.y, Math.max(1.5, radius * 0.35), 0, Math.PI * 2);
      ctx.fill();

      // Lateral fins on middle segments
      if (i === Math.floor(c.segments.length * 0.4)) {
        ctx.save();
        ctx.translate(seg.x, seg.y);
        ctx.rotate(c.angle);
        const finLen = dna.size * dna.finSpan * 1.1;
        const finWave = Math.sin(c.pulsePhase * 3) * 0.25;

        ctx.fillStyle = `hsla(${dna.hue}, 90%, 55%, ${pulse * 0.7})`;
        // Left fin
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-finLen * 0.4, -finLen - finWave * 10);
        ctx.lineTo(finLen * 0.3, -radius);
        ctx.closePath();
        ctx.fill();

        // Right fin
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-finLen * 0.4, finLen + finWave * 10);
        ctx.lineTo(finLen * 0.3, radius);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }

    // 3. Draw Head & Face
    ctx.save();
    ctx.translate(c.pos.x, c.pos.y);
    ctx.rotate(c.angle);

    // Head outer glow
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    const headGlow = ctx.createRadialGradient(0, 0, 2, 0, 0, dna.size * 2.8);
    headGlow.addColorStop(0, glowColor);
    headGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = headGlow;
    ctx.beginPath();
    ctx.arc(0, 0, dna.size * 2.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Head Solid Body
    ctx.fillStyle = baseColor;
    ctx.beginPath();
    ctx.ellipse(0, 0, dna.size * 1.2, dna.size * 0.85, 0, 0, Math.PI * 2);
    ctx.fill();

    // Eyes
    const eyeDist = dna.size * 0.45;
    const eyeX = dna.size * 0.45;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(eyeX, -eyeDist, Math.max(1.8, dna.size * 0.2), 0, Math.PI * 2);
    ctx.arc(eyeX, eyeDist, Math.max(1.8, dna.size * 0.2), 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(eyeX + 1, -eyeDist, Math.max(1.0, dna.size * 0.12), 0, Math.PI * 2);
    ctx.arc(eyeX + 1, eyeDist, Math.max(1.0, dna.size * 0.12), 0, Math.PI * 2);
    ctx.fill();

    // 4. Angler Lure Stalk & Glowing Esca (Lure Orb)
    if (dna.lure === 'angler_light') {
      const stalkLen = dna.size * 2.2;
      const lureWave = Math.sin(this.time * 6 + c.pulsePhase) * 6;
      const escaX = dna.size + stalkLen * 0.8;
      const escaY = -stalkLen * 0.5 + lureWave;

      // Stalk
      ctx.strokeStyle = `hsl(${dna.hue}, 80%, 40%)`;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(dna.size * 0.7, -dna.size * 0.2);
      ctx.quadraticCurveTo(dna.size * 1.1, -stalkLen * 0.7, escaX, escaY);
      ctx.stroke();

      // Glowing Esca Lure
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const escaGlow = ctx.createRadialGradient(escaX, escaY, 1, escaX, escaY, 28);
      escaGlow.addColorStop(0, '#ffffff');
      escaGlow.addColorStop(0.3, `hsl(${dna.hue}, 100%, 75%)`);
      escaGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = escaGlow;
      ctx.beginPath();
      ctx.arc(escaX, escaY, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(escaX, escaY, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore(); // Restore head transform

    // 5. Selection Beacon / Reticle
    if (isSelected) {
      ctx.save();
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 2.0;
      ctx.setLineDash([6, 4]);
      const radius = dna.size * 2.8 + Math.sin(this.time * 6) * 4;
      ctx.beginPath();
      ctx.arc(c.pos.x, c.pos.y, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Name & Gen indicator tag
      ctx.fillStyle = '#ffffff';
      ctx.font = '11px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${c.name} (Gen ${c.generation})`, c.pos.x, c.pos.y - radius - 8);
      ctx.restore();
    }

    ctx.restore();
  }

  public screenToWorld(screenX: number, screenY: number): Vector2D {
    return {
      x: screenX / this.camera.zoom + this.camera.x,
      y: screenY / this.camera.zoom + this.camera.y
    };
  }

  public worldToScreen(worldX: number, worldY: number): Vector2D {
    return {
      x: (worldX - this.camera.x) * this.camera.zoom,
      y: (worldY - this.camera.y) * this.camera.zoom
    };
  }
}
