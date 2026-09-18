interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  hue: number;
  pulsePhase: number;
}

interface PulseWave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export class HeroCanvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private nodes: Node[] = [];
  private pulseWaves: PulseWave[] = [];
  private mouseX: number = -1000;
  private mouseY: number = -1000;
  private isHovered: boolean = false;
  private animId: number = 0;
  private dpr: number = 1;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Failed to get 2d context for hero canvas');
    this.ctx = ctx;

    this.resize();
    this.initNodes();
    this.bindEvents();
    this.start();
  }

  public resize(): void {
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = this.canvas.parentElement?.getBoundingClientRect() || this.canvas.getBoundingClientRect();
    const w = rect.width || window.innerWidth;
    const h = rect.height || 600;

    this.canvas.width = w * this.dpr;
    this.canvas.height = h * this.dpr;
    this.canvas.style.width = `${w}px`;
    this.canvas.style.height = `${h}px`;
  }

  private initNodes(): void {
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;
    const count = Math.min(80, Math.max(35, Math.floor((width * height) / 14000)));

    this.nodes = [];
    for (let i = 0; i < count; i++) {
      const isCyan = Math.random() > 0.45;
      const hue = isCyan ? 185 + Math.random() * 25 : 270 + Math.random() * 30; // Cyan or Purple
      const radius = Math.random() * 2.5 + 1.5;

      this.nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius,
        baseRadius: radius,
        hue,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }

  private bindEvents(): void {
    window.addEventListener('resize', () => {
      this.resize();
      this.initNodes();
    });

    const parent = this.canvas.parentElement || this.canvas;

    parent.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      this.isHovered = true;
    });

    parent.addEventListener('mouseleave', () => {
      this.isHovered = false;
      this.mouseX = -1000;
      this.mouseY = -1000;
    });

    parent.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.triggerPulse(x, y);
    });

    // Touch support
    parent.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = e.touches[0].clientX - rect.left;
        this.mouseY = e.touches[0].clientY - rect.top;
        this.isHovered = true;
      }
    }, { passive: true });

    parent.addEventListener('touchend', () => {
      this.isHovered = false;
    });
  }

  public triggerPulse(x: number, y: number): void {
    this.pulseWaves.push({
      x,
      y,
      radius: 5,
      maxRadius: 280,
      alpha: 1.0
    });
  }

  public start(): void {
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      this.update(dt);
      this.render();

      this.animId = requestAnimationFrame(loop);
    };

    this.animId = requestAnimationFrame(loop);
  }

  public stop(): void {
    if (this.animId) {
      cancelAnimationFrame(this.animId);
    }
  }

  private update(dt: number): void {
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;

    // Update pulse waves
    for (let i = this.pulseWaves.length - 1; i >= 0; i--) {
      const wave = this.pulseWaves[i];
      wave.radius += 320 * dt;
      wave.alpha = Math.max(0, 1 - wave.radius / wave.maxRadius);

      if (wave.radius >= wave.maxRadius) {
        this.pulseWaves.splice(i, 1);
      }
    }

    // Update nodes
    for (const node of this.nodes) {
      node.pulsePhase += dt * 3;

      // Mouse gravity repulsion/attraction
      if (this.isHovered) {
        const dx = this.mouseX - node.x;
        const dy = this.mouseY - node.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 180 && dist > 1) {
          const force = (1 - dist / 180) * 45;
          node.vx -= (dx / dist) * force * dt;
          node.vy -= (dy / dist) * force * dt;
          node.radius = node.baseRadius * 1.8;
        } else {
          node.radius = node.baseRadius;
        }
      } else {
        node.radius = node.baseRadius;
      }

      // Pulse waves push nodes
      for (const wave of this.pulseWaves) {
        const dx = node.x - wave.x;
        const dy = node.y - wave.y;
        const dist = Math.hypot(dx, dy);
        if (Math.abs(dist - wave.radius) < 30) {
          node.vx += (dx / (dist || 1)) * 60 * dt;
          node.vy += (dy / (dist || 1)) * 60 * dt;
        }
      }

      // Friction
      node.vx *= 0.985;
      node.vy *= 0.985;

      node.x += node.vx;
      node.y += node.vy;

      // Wrap / bounce boundaries
      if (node.x < 0) { node.x = 0; node.vx *= -1; }
      if (node.x > width) { node.x = width; node.vx *= -1; }
      if (node.y < 0) { node.y = 0; node.vy *= -1; }
      if (node.y > height) { node.y = height; node.vy *= -1; }
    }
  }

  private render(): void {
    const ctx = this.ctx;
    const width = this.canvas.width / this.dpr;
    const height = this.canvas.height / this.dpr;

    ctx.save();
    ctx.scale(this.dpr, this.dpr);
    ctx.clearRect(0, 0, width, height);

    // 1. Draw connecting synaptic energy lines
    const maxDist = 135;
    for (let i = 0; i < this.nodes.length; i++) {
      const a = this.nodes[i];
      for (let j = i + 1; j < this.nodes.length; j++) {
        const b = this.nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.38;
          ctx.strokeStyle = `hsla(${a.hue}, 95%, 65%, ${alpha})`;
          ctx.lineWidth = Math.max(0.6, (1 - dist / maxDist) * 1.5);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // 2. Draw Pulse Waves
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const wave of this.pulseWaves) {
      const grad = ctx.createRadialGradient(wave.x, wave.y, wave.radius * 0.85, wave.x, wave.y, wave.radius);
      grad.addColorStop(0, 'rgba(0, 240, 255, 0)');
      grad.addColorStop(1, `rgba(56, 189, 248, ${wave.alpha * 0.5})`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    // 3. Draw Nodes
    ctx.save();
    ctx.globalCompositeOperation = 'lighter';
    for (const node of this.nodes) {
      const pulse = Math.sin(node.pulsePhase) * 0.25 + 0.75;
      const r = node.radius * pulse;

      // Outer glow halo
      const grad = ctx.createRadialGradient(node.x, node.y, 1, node.x, node.y, r * 4);
      grad.addColorStop(0, `hsla(${node.hue}, 100%, 75%, 0.75)`);
      grad.addColorStop(1, `hsla(${node.hue}, 100%, 50%, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
      ctx.fill();

      // Bright Core
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 4. Mouse Interactive Beacon Glow
    if (this.isHovered && this.mouseX > 0 && this.mouseY > 0) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const mouseGrad = ctx.createRadialGradient(this.mouseX, this.mouseY, 10, this.mouseX, this.mouseY, 160);
      mouseGrad.addColorStop(0, 'rgba(0, 240, 255, 0.15)');
      mouseGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = mouseGrad;
      ctx.beginPath();
      ctx.arc(this.mouseX, this.mouseY, 160, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();
  }
}
