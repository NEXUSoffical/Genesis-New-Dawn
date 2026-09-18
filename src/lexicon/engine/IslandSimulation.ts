import { IslandEntity, ParsedSentence } from '../types';

export class IslandSimulation {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private entities: IslandEntity[] = [];
  private animFrameId: number | null = null;
  private lastTime: number = 0;
  private ambientParticles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string; alpha: number }> = [];
  private rainActive: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Could not get 2D canvas context');
    this.ctx = context;

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    this.initAmbientParticles();
    this.startLoop();
  }

  private resizeCanvas(): void {
    const rect = this.canvas.parentElement?.getBoundingClientRect();
    if (rect) {
      this.canvas.width = rect.width * window.devicePixelRatio;
      this.canvas.height = rect.height * window.devicePixelRatio;
      this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
  }

  private initAmbientParticles(): void {
    const count = 35;
    for (let i = 0; i < count; i++) {
      this.ambientParticles.push({
        x: Math.random() * (this.canvas.width / window.devicePixelRatio),
        y: Math.random() * (this.canvas.height / window.devicePixelRatio),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.3 - 0.1,
        radius: 1.5 + Math.random() * 2,
        color: Math.random() > 0.5 ? '#67e8f9' : '#fde047',
        alpha: 0.2 + Math.random() * 0.6
      });
    }
  }

  public spawnFromSentence(parsed: ParsedSentence): IslandEntity | null {
    if (!parsed.subjectNoun) return null;

    const noun = parsed.subjectNoun.id;
    const adj = parsed.adjective?.id;
    const verb = parsed.verb?.id;
    const prep = parsed.prepositionPhrase?.id;

    const w = this.canvas.width / window.devicePixelRatio;
    const h = this.canvas.height / window.devicePixelRatio;

    // Determine location from preposition
    let targetX = w * 0.5;
    let targetY = h * 0.65;

    if (prep === 'across_chasm') {
      targetX = w * 0.22;
      targetY = h * 0.62;
    } else if (prep === 'into_meadow') {
      targetX = w * (0.4 + Math.random() * 0.2);
      targetY = h * (0.65 + Math.random() * 0.12);
    } else if (prep === 'under_tree') {
      targetX = w * 0.38;
      targetY = h * 0.68;
    } else if (prep === 'above_lake') {
      targetX = w * 0.78;
      targetY = h * 0.42;
    } else if (prep === 'around_fire') {
      targetX = w * 0.55;
      targetY = h * 0.72;
    } else if (prep === 'through_forest') {
      targetX = w * 0.35;
      targetY = h * 0.60;
    }

    // Determine scale from adjective
    let scale = 1.0;
    if (adj === 'gigantic') scale = 2.1;
    if (adj === 'tiny') scale = 0.65;

    // Determine visual effects
    let glowColor: string | undefined;
    if (adj === 'luminous') glowColor = '#38bdf8';
    if (adj === 'radiant') glowColor = '#facc15';
    if (adj === 'frozen') glowColor = '#a5f3fc';

    // Rain effect if raincloud
    if (noun === 'raincloud') {
      this.rainActive = true;
      targetY = h * 0.28;
    }

    const entity: IslandEntity = {
      id: 'ent_' + Math.random().toString(36).substr(2, 9),
      name: `${adj ? adj + ' ' : ''}${parsed.subjectNoun.text}`,
      icon: parsed.subjectNoun.icon,
      x: targetX,
      y: targetY - 40,
      baseY: targetY,
      targetX,
      targetY,
      vx: 0,
      vy: 0,
      scale: 0.1, // Start small for pop-in animation
      targetScale: scale,
      state: verb === 'sleeps' ? 'sleeping' : verb === 'glides' ? 'flying' : 'idle',
      glowColor,
      glowRadius: glowColor ? 25 : 0,
      frozen: adj === 'frozen',
      particles: [],
      creationSentence: parsed.rawText,
      createdTime: Date.now()
    };

    this.entities.push(entity);
    return entity;
  }

  public clearEntities(): void {
    this.entities = [];
    this.rainActive = false;
  }

  private startLoop(): void {
    const loop = (time: number) => {
      const dt = this.lastTime ? (time - this.lastTime) / 1000 : 0.016;
      this.lastTime = time;

      this.update(dt);
      this.render();

      this.animFrameId = requestAnimationFrame(loop);
    };
    this.animFrameId = requestAnimationFrame(loop);
  }

  private update(_dt: number): void {
    const w = this.canvas.width / window.devicePixelRatio;
    const h = this.canvas.height / window.devicePixelRatio;

    // Ambient floating particles
    this.ambientParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < 0) p.y = h;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
    });

    // Update entities
    this.entities.forEach(e => {
      // Pop-in scale interpolation
      if (e.scale < e.targetScale) {
        e.scale += (e.targetScale - e.scale) * 0.15;
      }

      // Physics based on behaviors
      const timeSec = (Date.now() - e.createdTime) / 1000;

      if (e.state === 'flying') {
        // Glides smoothly in sine wave
        e.x = e.targetX + Math.sin(timeSec * 1.5) * 60;
        e.y = e.baseY + Math.cos(timeSec * 2) * 15;
      } else if (e.name.includes('hops')) {
        // Hop arcs
        const hopPhase = (timeSec * 3) % (Math.PI);
        e.y = e.baseY - Math.abs(Math.sin(hopPhase)) * 25;
      } else if (e.name.includes('dances')) {
        // Wiggle dance
        e.y = e.baseY + Math.sin(timeSec * 6) * 6;
      } else {
        // Subtle breathing float
        e.y = e.baseY + Math.sin(timeSec * 2) * 3;
      }

      // Emit trail particles if glowing
      if (e.glowColor && Math.random() < 0.3) {
        e.particles.push({
          x: e.x + (Math.random() - 0.5) * 20,
          y: e.y + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -0.6 - Math.random() * 0.5,
          radius: 2 + Math.random() * 2,
          color: e.glowColor,
          alpha: 0.8,
          life: 0,
          maxLife: 40
        });
      }

      // Update entity particles
      e.particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
        p.alpha = 1 - (p.life / p.maxLife);
      });
      e.particles = e.particles.filter(p => p.life < p.maxLife);
    });
  }

  private render(): void {
    const w = this.canvas.width / window.devicePixelRatio;
    const h = this.canvas.height / window.devicePixelRatio;

    this.ctx.clearRect(0, 0, w, h);

    // 1. Sky & Atmosphere
    const skyGrad = this.ctx.createLinearGradient(0, 0, 0, h);
    skyGrad.addColorStop(0, '#0f172a');
    skyGrad.addColorStop(0.4, '#1e293b');
    skyGrad.addColorStop(0.7, '#1e3a8a');
    skyGrad.addColorStop(1, '#0c4a6e');
    this.ctx.fillStyle = skyGrad;
    this.ctx.fillRect(0, 0, w, h);

    // Stars / celestial lights
    this.ctx.fillStyle = '#ffffff';
    this.ambientParticles.forEach(p => {
      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();
    });

    // 2. The Fantasy Floating Island Landscape
    this.drawIslandLandforms(w, h);

    // 3. Rain shower if active
    if (this.rainActive) {
      this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      this.ctx.lineWidth = 1.5;
      for (let i = 0; i < 25; i++) {
        const rx = (w * 0.35) + Math.random() * (w * 0.4);
        const ry = (h * 0.3) + Math.random() * (h * 0.4);
        this.ctx.beginPath();
        this.ctx.moveTo(rx, ry);
        this.ctx.lineTo(rx - 4, ry + 12);
        this.ctx.stroke();
      }
    }

    // 4. Render Living Entities
    this.entities.forEach(e => {
      this.ctx.save();

      // Entity glow aura
      if (e.glowColor) {
        const glow = this.ctx.createRadialGradient(e.x, e.y, 5, e.x, e.y, 45 * e.scale);
        glow.addColorStop(0, e.glowColor);
        glow.addColorStop(1, 'transparent');
        this.ctx.fillStyle = glow;
        this.ctx.beginPath();
        this.ctx.arc(e.x, e.y, 45 * e.scale, 0, Math.PI * 2);
        this.ctx.fill();
      }

      // Trail particles
      e.particles.forEach(p => {
        this.ctx.save();
        this.ctx.globalAlpha = Math.max(0, p.alpha);
        this.ctx.fillStyle = p.color;
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.restore();
      });

      // Sprite Icon
      this.ctx.font = `${Math.round(44 * e.scale)}px sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';

      if (e.frozen) {
        // Frost overlay filter
        this.ctx.shadowColor = '#67e8f9';
        this.ctx.shadowBlur = 15;
      }

      this.ctx.fillText(e.icon, e.x, e.y);

      // Name Label Pill
      this.ctx.font = 'bold 12px Fredoka, sans-serif';
      const textMetrics = this.ctx.measureText(e.name);
      const pillW = textMetrics.width + 16;
      const pillH = 20;

      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      this.ctx.lineWidth = 1;

      const pillX = e.x - pillW / 2;
      const pillY = e.y + 25 * e.scale;

      this.ctx.beginPath();
      this.ctx.roundRect(pillX, pillY, pillW, pillH, 10);
      this.ctx.fill();
      this.ctx.stroke();

      this.ctx.fillStyle = '#f8fafc';
      this.ctx.fillText(e.name, e.x, pillY + 14);

      this.ctx.restore();
    });
  }

  private drawIslandLandforms(w: number, h: number): void {
    // Rocky Chasm (Left)
    this.ctx.fillStyle = '#1e1b18';
    this.ctx.beginPath();
    this.ctx.moveTo(0, h * 0.6);
    this.ctx.lineTo(w * 0.28, h * 0.63);
    this.ctx.lineTo(w * 0.22, h);
    this.ctx.lineTo(0, h);
    this.ctx.closePath();
    this.ctx.fill();

    // Chasm Void
    const chasmGrad = this.ctx.createLinearGradient(w * 0.2, h * 0.6, w * 0.35, h * 0.7);
    chasmGrad.addColorStop(0, '#09090b');
    chasmGrad.addColorStop(1, '#18181b');
    this.ctx.fillStyle = chasmGrad;
    this.ctx.fillRect(w * 0.22, h * 0.62, w * 0.14, h * 0.38);

    // Central Green Meadow
    const meadowGrad = this.ctx.createLinearGradient(0, h * 0.55, 0, h);
    meadowGrad.addColorStop(0, '#15803d');
    meadowGrad.addColorStop(0.5, '#166534');
    meadowGrad.addColorStop(1, '#14532d');
    this.ctx.fillStyle = meadowGrad;

    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.34, h * 0.62);
    this.ctx.quadraticCurveTo(w * 0.55, h * 0.54, w * 0.75, h * 0.64);
    this.ctx.lineTo(w * 0.75, h);
    this.ctx.lineTo(w * 0.34, h);
    this.ctx.closePath();
    this.ctx.fill();

    // Shimmering Crystal Lake (Right)
    const lakeGrad = this.ctx.createLinearGradient(w * 0.74, h * 0.63, w, h);
    lakeGrad.addColorStop(0, '#0284c7');
    lakeGrad.addColorStop(0.5, '#0369a1');
    lakeGrad.addColorStop(1, '#075985');
    this.ctx.fillStyle = lakeGrad;

    this.ctx.beginPath();
    this.ctx.moveTo(w * 0.74, h * 0.63);
    this.ctx.quadraticCurveTo(w * 0.88, h * 0.61, w, h * 0.65);
    this.ctx.lineTo(w, h);
    this.ctx.lineTo(w * 0.74, h);
    this.ctx.closePath();
    this.ctx.fill();

    // Static Landmarks
    // 1. The Chasm Sign
    this.ctx.font = '22px sans-serif';
    this.ctx.fillText('🪨', w * 0.12, h * 0.64);

    // 2. The Willow Tree
    this.ctx.font = '52px sans-serif';
    this.ctx.fillText('🌳', w * 0.38, h * 0.66);

    // 3. The Campfire Hearth
    this.ctx.font = '30px sans-serif';
    this.ctx.fillText('🔥', w * 0.56, h * 0.75);

    // 4. Ancient Lake Castle Ruins
    this.ctx.font = '48px sans-serif';
    this.ctx.fillText('🏰', w * 0.88, h * 0.66);
  }

  public destroy(): void {
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }
  }
}
