import { Camera } from './Camera';
import { WorldManager, TILE_SIZE } from '../simulation/World';
import { Agent, Building, Tile, Animal } from '../simulation/types';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export class CanvasRenderer {
  private ctx: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animTimer: number = 0;

  constructor(
    private canvas: HTMLCanvasElement,
    private camera: Camera,
    private world: WorldManager
  ) {
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) throw new Error('Could not obtain 2D canvas context');
    this.ctx = context;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public addParticle(x: number, y: number, color: string, count = 1, speed = 0.5): void {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const spd = (0.2 + Math.random() * 0.8) * speed;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * spd,
        vy: Math.sin(angle) * spd - 0.35,
        life: 1.0,
        maxLife: 0.8 + Math.random() * 1.2,
        color,
        size: 1.5 + Math.random() * 2.5,
      });
    }
  }

  public render(agents: Agent[], selectedAgentId?: string, deltaSec = 0.016, animals: Animal[] = []): void {
    this.animTimer += deltaSec;
    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const zoom = this.camera.zoom;
    const renderTileSize = TILE_SIZE * zoom;

    // 1. Clear Screen with deep atmospheric ground base
    ctx.fillStyle = '#101712';
    ctx.fillRect(0, 0, width, height);

    // Visible tile boundaries
    const halfW = width / 2;
    const halfH = height / 2;
    const minTileX = Math.floor(this.camera.x - halfW / renderTileSize) - 2;
    const maxTileX = Math.ceil(this.camera.x + halfW / renderTileSize) + 2;
    const minTileY = Math.floor(this.camera.y - halfH / renderTileSize) - 2;
    const maxTileY = Math.ceil(this.camera.y + halfH / renderTileSize) + 2;

    // 2. Render Ground & Terrain Layers
    for (let tx = minTileX; tx <= maxTileX; tx++) {
      for (let ty = minTileY; ty <= maxTileY; ty++) {
        const tile = this.world.getTile(tx, ty);
        if (!tile || !tile.isRevealed) continue;

        const screenPos = this.camera.worldToScreen(tx, ty, TILE_SIZE);
        this.renderTerrainBase(ctx, tile, screenPos.x, screenPos.y, renderTileSize);
      }
    }

    // 3. Render Terrain Features (Trees, Boulders, Resource Nodes)
    for (let tx = minTileX; tx <= maxTileX; tx++) {
      for (let ty = minTileY; ty <= maxTileY; ty++) {
        const tile = this.world.getTile(tx, ty);
        if (!tile || !tile.isRevealed) continue;

        const screenPos = this.camera.worldToScreen(tx, ty, TILE_SIZE);
        this.renderTerrainFeature(ctx, tile, screenPos.x, screenPos.y, renderTileSize);
      }
    }

    // 4. Render Roads & Buildings with realistic structures
    for (const building of this.world.buildings.values()) {
      if (building.x < minTileX || building.x > maxTileX || building.y < minTileY || building.y > maxTileY) {
        continue;
      }
      const tile = this.world.getTile(building.x, building.y);
      if (!tile || !tile.isRevealed) continue;

      const screenPos = this.camera.worldToScreen(building.x, building.y, TILE_SIZE);
      this.renderBuildingRealistic(ctx, building, screenPos.x, screenPos.y, renderTileSize);
    }

    // 5. Living Fauna (Wild Rabbits, Grazing Deer, Wolves, Sheep & Domestic Dogs)
    for (const animal of animals) {
      const tile = this.world.getTile(Math.round(animal.x), Math.round(animal.y));
      if (!tile || !tile.isRevealed) continue;
      const screenPos = this.camera.worldToScreen(animal.x, animal.y, TILE_SIZE);
      this.renderFauna(ctx, animal, screenPos.x, screenPos.y, renderTileSize);
    }

    // 6. Render Settlers (Adam, Eve & Descendants)
    for (const agent of agents) {
      const tile = this.world.getTile(Math.round(agent.x), Math.round(agent.y));
      if (!tile || !tile.isRevealed) continue;

      const screenPos = this.camera.worldToScreen(agent.x, agent.y, TILE_SIZE);
      const isSelected = agent.id === selectedAgentId;
      this.renderAgentRealistic(ctx, agent, screenPos.x, screenPos.y, renderTileSize, isSelected);
    }

    // 6. Particle Systems (Sparks, Chimney Smoke, Ripples)
    this.updateAndRenderParticles(ctx, deltaSec);

    // 7. Dynamic Atmospheric Day/Night Lighting & Shadows
    this.renderAtmosphericLighting(ctx, width, height);

    // 8. Soft Cloud Fog of War
    this.renderSoftFogOfWar(ctx, minTileX, maxTileX, minTileY, maxTileY, renderTileSize);

    // 9. Floating Speech & Thought Bubbles (Rendered on top with multi-line wrap)
    for (const agent of agents) {
      const screenPos = this.camera.worldToScreen(agent.x, agent.y, TILE_SIZE);
      if (agent.speechBubble) {
        this.renderMultiLineSpeechBubble(
          ctx,
          agent.speechBubble.text,
          screenPos.x + renderTileSize * 0.5,
          screenPos.y - renderTileSize * 0.4,
          agent.speechBubble.isSpeech,
          agent.color
        );
      }
    }
  }

  // --- REALISTIC TERRAIN BASE ---
  private renderTerrainBase(
    ctx: CanvasRenderingContext2D,
    tile: Tile,
    sx: number,
    sy: number,
    size: number
  ): void {
    const season = this.world.season;
    const isWinter = season === 'Winter';
    const isAutumn = season === 'Autumn';
    const isSummer = season === 'Summer';
    const isFrozen = isWinter && this.world.temperatureCelsius < -1;

    // Ground texture gradients based on biome and moisture
    if (tile.type === 'water' || tile.type === 'deep_water') {
      const isDeep = tile.type === 'deep_water';

      if (isFrozen && !isDeep) {
        // Glistening frozen river ice sheet!
        const iceGrad = ctx.createLinearGradient(sx, sy, sx + size, sy + size);
        iceGrad.addColorStop(0, '#cce7f5');
        iceGrad.addColorStop(0.5, '#a5d4e8');
        iceGrad.addColorStop(1, '#8fc8df');
        ctx.fillStyle = iceGrad;
        ctx.fillRect(sx, sy, size + 0.5, size + 0.5);

        // Intricate white frost crack fissures
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(sx + size * 0.2, sy);
        ctx.lineTo(sx + size * 0.45, sy + size * 0.5);
        ctx.lineTo(sx + size * 0.8, sy + size * 0.85);
        ctx.stroke();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.beginPath();
        ctx.arc(sx + size * 0.45, sy + size * 0.5, size * 0.08, 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      const grad = ctx.createLinearGradient(sx, sy, sx + size, sy + size);
      if (isDeep) {
        grad.addColorStop(0, isWinter ? '#0c2233' : '#0f2b3e');
        grad.addColorStop(1, isWinter ? '#081724' : '#0b2030');
      } else {
        grad.addColorStop(0, isWinter ? '#153f54' : '#1d5169');
        grad.addColorStop(1, isWinter ? '#0f3243' : '#164357');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(sx, sy, size + 0.5, size + 0.5);

      // Organic animated water wave caustics
      const wave1 = Math.sin(this.animTimer * 1.5 + tile.x * 0.8 + tile.y * 0.4) * 0.08;
      const wave2 = Math.cos(this.animTimer * 1.2 - tile.x * 0.5 + tile.y * 0.7) * 0.06;
      ctx.fillStyle = `rgba(164, 235, 255, ${0.12 + wave1 + wave2})`;
      ctx.beginPath();
      ctx.ellipse(
        sx + size * (0.3 + wave1),
        sy + size * (0.4 + wave2),
        size * 0.35,
        size * 0.12,
        0.3,
        0,
        Math.PI * 2
      );
      ctx.fill();
      return;
    }

    if (tile.type === 'fertile_soil') {
      if (isWinter) {
        // Frosted loamy earth covered in snow drifts
        ctx.fillStyle = '#e2e8f0';
        ctx.fillRect(sx, sy, size + 0.5, size + 0.5);
        ctx.fillStyle = '#301f14';
        ctx.fillRect(sx + size * 0.15, sy + size * 0.3, size * 0.7, size * 0.12);
        return;
      }
      // Rich dark loamy earth with soil furrows
      ctx.fillStyle = '#301f14';
      ctx.fillRect(sx, sy, size + 0.5, size + 0.5);

      ctx.fillStyle = 'rgba(26, 16, 10, 0.45)';
      for (let i = 0; i < 3; i++) {
        ctx.fillRect(sx + size * 0.1, sy + size * (0.2 + i * 0.28), size * 0.8, size * 0.1);
      }
      return;
    }

    if (tile.type === 'clay_pit') {
      // Terracotta moist clay with sheen
      ctx.fillStyle = isWinter ? '#804229' : '#6e341b';
      ctx.fillRect(sx, sy, size + 0.5, size + 0.5);

      if (isWinter) {
        ctx.fillStyle = 'rgba(240, 248, 255, 0.6)';
        ctx.fillRect(sx + size * 0.1, sy + size * 0.1, size * 0.3, size * 0.2);
        return;
      }

      // Moist glossy spot
      ctx.fillStyle = 'rgba(154, 82, 49, 0.5)';
      ctx.beginPath();
      ctx.arc(sx + size * 0.4, sy + size * 0.45, size * 0.25, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    if (tile.type === 'stone_hill' || tile.type === 'copper_vein' || tile.type === 'iron_vein' || tile.type === 'gold_vein') {
      // Rocky bedrock foundation
      ctx.fillStyle = isWinter ? '#5a656e' : '#40494f';
      ctx.fillRect(sx, sy, size + 0.5, size + 0.5);
      if (isWinter) {
        // Snow accumulation in rock crevices
        ctx.fillStyle = '#f1f5f9';
        ctx.fillRect(sx + size * 0.1, sy + size * 0.08, size * 0.4, size * 0.15);
      }
      return;
    }

    // Default: Natural organic ground with Seasonal Metamorphosis
    const noiseSeed = Math.sin(tile.x * 12.9898 + tile.y * 78.233) * 43758.5453;
    const variation = (noiseSeed - Math.floor(noiseSeed));

    if (isWinter) {
      // Crisp blanket of pristine winter snow!
      if (variation > 0.65) {
        ctx.fillStyle = '#f8fafc'; // Sparkling fresh snow
      } else if (variation > 0.35) {
        ctx.fillStyle = '#f1f5f9'; // Soft white snow
      } else {
        ctx.fillStyle = '#e2e8f0'; // Subtle blue frost shadow
      }
      ctx.fillRect(sx, sy, size + 0.5, size + 0.5);

      // Subtle icy sparkle dots
      if (variation > 0.75 && size > 16) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(sx + size * 0.3, sy + size * 0.3, size * 0.05, 0, Math.PI * 2);
        ctx.arc(sx + size * 0.7, sy + size * 0.65, size * 0.04, 0, Math.PI * 2);
        ctx.fill();
      }
      return;
    }

    if (isAutumn) {
      // Dry golden-amber autumn grass
      if (variation > 0.65) {
        ctx.fillStyle = '#5c5328';
      } else if (variation > 0.35) {
        ctx.fillStyle = '#6b5d2c';
      } else {
        ctx.fillStyle = '#4f4722';
      }
      ctx.fillRect(sx, sy, size + 0.5, size + 0.5);

      // Scattered fallen autumn leaves on the ground
      if (variation > 0.5 && size > 16) {
        ctx.fillStyle = variation > 0.75 ? '#c2410c' : '#b45309';
        ctx.beginPath();
        ctx.arc(sx + size * 0.35, sy + size * 0.4, size * 0.06, 0, Math.PI * 2);
        ctx.fill();
      }
      return;
    }

    if (isSummer) {
      // Warm vibrant golden-green summer meadows
      if (variation > 0.65) {
        ctx.fillStyle = '#3a692e';
      } else if (variation > 0.35) {
        ctx.fillStyle = '#487d39';
      } else {
        ctx.fillStyle = '#3f7331';
      }
    } else {
      // Lush spring green
      if (variation > 0.65) {
        ctx.fillStyle = '#2f5b2b';
      } else if (variation > 0.35) {
        ctx.fillStyle = '#396b34';
      } else {
        ctx.fillStyle = '#346130';
      }
    }
    ctx.fillRect(sx, sy, size + 0.5, size + 0.5);

    // Subtle individual blade tufts & wildflowers
    if (variation > 0.55 && size > 16) {
      ctx.fillStyle = isSummer ? 'rgba(90, 160, 70, 0.45)' : 'rgba(76, 140, 70, 0.5)';
      ctx.fillRect(sx + size * 0.25, sy + size * 0.3, size * 0.08, size * 0.2);
      ctx.fillRect(sx + size * 0.65, sy + size * 0.6, size * 0.08, size * 0.2);

      // Spring & Summer wildflowers!
      if (variation > 0.85) {
        ctx.fillStyle = variation > 0.94 ? '#fef08a' : variation > 0.89 ? '#f472b6' : '#a855f7';
        ctx.beginPath();
        ctx.arc(sx + size * 0.3, sy + size * 0.3, size * 0.06, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // --- REALISTIC TERRAIN FEATURES (TREES, BOULDERS, PLANTS) ---
  private renderTerrainFeature(
    ctx: CanvasRenderingContext2D,
    tile: Tile,
    sx: number,
    sy: number,
    size: number
  ): void {
    const cx = sx + size * 0.5;
    const cy = sy + size * 0.5;

    if (tile.type === 'dense_forest' || tile.type === 'sparse_trees') {
      const isDense = tile.type === 'dense_forest';
      const treeScale = isDense ? 1.05 : 0.85;

      // 1. Soft cast drop-shadow to ground (southeast angle)
      ctx.fillStyle = 'rgba(10, 18, 12, 0.45)';
      ctx.beginPath();
      ctx.ellipse(cx + size * 0.15, cy + size * 0.25, size * 0.35 * treeScale, size * 0.2 * treeScale, 0.3, 0, Math.PI * 2);
      ctx.fill();

      // 2. Trunk
      ctx.fillStyle = '#452b1b';
      ctx.fillRect(cx - size * 0.08 * treeScale, cy, size * 0.16 * treeScale, size * 0.35 * treeScale);

      // 3. Layered foliage canopies with 3D directional lighting & Seasonal Shifts
      const season = this.world.season;
      const isWinter = season === 'Winter';
      const isAutumn = season === 'Autumn';
      const isSummer = season === 'Summer';

      if (isWinter) {
        // Bare frosty branches dusted with white snow!
        ctx.strokeStyle = '#3e2718';
        ctx.lineWidth = Math.max(1.5, size * 0.05 * treeScale);
        ctx.beginPath();
        // Main branch forks
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx - size * 0.18 * treeScale, cy - size * 0.22 * treeScale);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + size * 0.18 * treeScale, cy - size * 0.22 * treeScale);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx, cy - size * 0.3 * treeScale);
        ctx.stroke();

        // Snow accumulation on branches
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.arc(cx - size * 0.18 * treeScale, cy - size * 0.24 * treeScale, size * 0.08 * treeScale, 0, Math.PI * 2);
        ctx.arc(cx + size * 0.18 * treeScale, cy - size * 0.24 * treeScale, size * 0.08 * treeScale, 0, Math.PI * 2);
        ctx.arc(cx, cy - size * 0.32 * treeScale, size * 0.1 * treeScale, 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      const windSway = Math.sin(this.animTimer * 1.8 + tile.x * 0.6) * size * 0.04;

      // Color selection by season
      let lowerColor = '#1c4521';
      let midColor = '#2d6a33';
      let highlightColor = '#4c9954';

      if (isAutumn) {
        lowerColor = '#78350f'; // Russet
        midColor = '#c2410c'; // Fiery burnt orange
        highlightColor = '#f59e0b'; // Golden amber
      } else if (isSummer) {
        lowerColor = '#16421a';
        midColor = '#28632e';
        highlightColor = '#42934b';
      }

      // Lower dark foliage layer
      ctx.fillStyle = lowerColor;
      ctx.beginPath();
      ctx.arc(cx - size * 0.12 * treeScale + windSway * 0.5, cy - size * 0.05 * treeScale, size * 0.3 * treeScale, 0, Math.PI * 2);
      ctx.arc(cx + size * 0.12 * treeScale + windSway * 0.5, cy - size * 0.05 * treeScale, size * 0.3 * treeScale, 0, Math.PI * 2);
      ctx.arc(cx + windSway * 0.5, cy - size * 0.25 * treeScale, size * 0.32 * treeScale, 0, Math.PI * 2);
      ctx.fill();

      // Mid-tone foliage layer
      ctx.fillStyle = midColor;
      ctx.beginPath();
      ctx.arc(cx - size * 0.08 * treeScale + windSway, cy - size * 0.12 * treeScale, size * 0.26 * treeScale, 0, Math.PI * 2);
      ctx.arc(cx + size * 0.08 * treeScale + windSway, cy - size * 0.12 * treeScale, size * 0.26 * treeScale, 0, Math.PI * 2);
      ctx.arc(cx + windSway, cy - size * 0.32 * treeScale, size * 0.28 * treeScale, 0, Math.PI * 2);
      ctx.fill();

      // Sunlit top-left highlight cluster
      ctx.fillStyle = highlightColor;
      ctx.beginPath();
      ctx.arc(cx - size * 0.1 * treeScale + windSway, cy - size * 0.28 * treeScale, size * 0.18 * treeScale, 0, Math.PI * 2);
      ctx.fill();

      return;
    }

    if (tile.type === 'stone_hill' || tile.type === 'copper_vein' || tile.type === 'iron_vein' || tile.type === 'gold_vein') {
      // 1. Cast shadow
      ctx.fillStyle = 'rgba(12, 16, 20, 0.4)';
      ctx.beginPath();
      ctx.ellipse(cx + size * 0.12, cy + size * 0.2, size * 0.38, size * 0.22, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // 2. Chiseled faceted boulder shape
      ctx.fillStyle = '#555f69';
      ctx.beginPath();
      ctx.moveTo(cx - size * 0.38, cy + size * 0.15);
      ctx.lineTo(cx - size * 0.25, cy - size * 0.28);
      ctx.lineTo(cx + size * 0.15, cy - size * 0.35);
      ctx.lineTo(cx + size * 0.38, cy - size * 0.05);
      ctx.lineTo(cx + size * 0.28, cy + size * 0.25);
      ctx.lineTo(cx - size * 0.15, cy + size * 0.28);
      ctx.closePath();
      ctx.fill();

      // Top sunlit facet highlight
      ctx.fillStyle = '#7a8793';
      ctx.beginPath();
      ctx.moveTo(cx - size * 0.25, cy - size * 0.28);
      ctx.lineTo(cx + size * 0.15, cy - size * 0.35);
      ctx.lineTo(cx + size * 0.05, cy - size * 0.08);
      ctx.lineTo(cx - size * 0.2, cy - size * 0.02);
      ctx.closePath();
      ctx.fill();

      // Crevice shadow
      ctx.strokeStyle = '#323940';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - size * 0.05, cy - size * 0.15);
      ctx.lineTo(cx + size * 0.1, cy + size * 0.18);
      ctx.stroke();

      // Mineral sparkles for veins
      if (tile.type === 'gold_vein') {
        const pulse = (Math.sin(this.animTimer * 3 + tile.x) + 1) * 0.5;
        ctx.fillStyle = `rgba(250, 204, 21, ${0.7 + pulse * 0.3})`;
        ctx.beginPath();
        ctx.arc(cx - size * 0.08, cy - size * 0.1, size * 0.07, 0, Math.PI * 2);
        ctx.arc(cx + size * 0.15, cy + size * 0.05, size * 0.06, 0, Math.PI * 2);
        ctx.fill();
      } else if (tile.type === 'copper_vein') {
        ctx.fillStyle = '#d97706';
        ctx.beginPath();
        ctx.arc(cx - size * 0.1, cy + size * 0.05, size * 0.07, 0, Math.PI * 2);
        ctx.arc(cx + size * 0.12, cy - size * 0.12, size * 0.06, 0, Math.PI * 2);
        ctx.fill();
      } else if (tile.type === 'iron_vein') {
        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.07, 0, Math.PI * 2);
        ctx.fill();
      }

      return;
    }

    if (tile.type === 'fertile_soil' && tile.resourceAmount > 0) {
      // Natural wild berry bush
      ctx.fillStyle = 'rgba(20, 15, 10, 0.35)';
      ctx.beginPath();
      ctx.ellipse(cx, cy + size * 0.18, size * 0.28, size * 0.14, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#26572b';
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.22, 0, Math.PI * 2);
      ctx.fill();

      // Ripe wild berries
      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(cx - size * 0.09, cy - size * 0.04, size * 0.06, 0, Math.PI * 2);
      ctx.arc(cx + size * 0.08, cy - size * 0.08, size * 0.06, 0, Math.PI * 2);
      ctx.arc(cx + size * 0.02, cy + size * 0.07, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // --- REALISTIC BUILDINGS & STRUCTURES ---
  private renderBuildingRealistic(
    ctx: CanvasRenderingContext2D,
    bld: Building,
    sx: number,
    sy: number,
    size: number
  ): void {
    const cx = sx + size * 0.5;
    const cy = sy + size * 0.5;

    // Construction state with realistic timber frame & progress
    if (!bld.isCompleted) {
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 2;
      ctx.strokeRect(sx + size * 0.15, sy + size * 0.15, size * 0.7, size * 0.7);

      // Wooden cross stakes
      ctx.beginPath();
      ctx.moveTo(sx + size * 0.15, sy + size * 0.15);
      ctx.lineTo(sx + size * 0.85, sy + size * 0.85);
      ctx.moveTo(sx + size * 0.85, sy + size * 0.15);
      ctx.lineTo(sx + size * 0.15, sy + size * 0.85);
      ctx.stroke();

      // Progress bar above
      ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
      ctx.fillRect(sx + size * 0.1, sy - size * 0.18, size * 0.8, size * 0.14);
      ctx.fillStyle = '#10b981';
      ctx.fillRect(sx + size * 0.12, sy - size * 0.16, (size * 0.76) * (bld.progress / 100), size * 0.1);
      return;
    }

    switch (bld.type) {
      case 'campfire': {
        // 1. Ash bed
        ctx.fillStyle = '#22252a';
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.32, 0, Math.PI * 2);
        ctx.fill();

        // 2. Ring of river stones
        const stoneCount = 8;
        for (let i = 0; i < stoneCount; i++) {
          const angle = (i / stoneCount) * Math.PI * 2;
          const stX = cx + Math.cos(angle) * size * 0.28;
          const stY = cy + Math.sin(angle) * size * 0.25;
          ctx.fillStyle = i % 2 === 0 ? '#64748b' : '#475569';
          ctx.beginPath();
          ctx.arc(stX, stY, size * 0.08, 0, Math.PI * 2);
          ctx.fill();
        }

        // 3. Crossed logs
        ctx.strokeStyle = '#3a2312';
        ctx.lineWidth = Math.max(3, size * 0.1);
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.18, cy + size * 0.12);
        ctx.lineTo(cx + size * 0.18, cy - size * 0.12);
        ctx.moveTo(cx + size * 0.18, cy + size * 0.12);
        ctx.lineTo(cx - size * 0.18, cy - size * 0.12);
        ctx.stroke();

        // 4. Glowing coals
        ctx.fillStyle = '#ea580c';
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.14, 0, Math.PI * 2);
        ctx.fill();

        // 5. Multi-layered organic animated flame tongues
        const flicker = Math.sin(this.animTimer * 14 + bld.x) * size * 0.06;
        const flameHeight = size * 0.35 + flicker;

        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.12, cy + size * 0.05);
        ctx.quadraticCurveTo(cx - size * 0.16, cy - flameHeight * 0.4, cx, cy - flameHeight);
        ctx.quadraticCurveTo(cx + size * 0.16, cy - flameHeight * 0.4, cx + size * 0.12, cy + size * 0.05);
        ctx.closePath();
        ctx.fill();

        // White-hot flame core
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.moveTo(cx - size * 0.06, cy);
        ctx.quadraticCurveTo(cx - size * 0.08, cy - flameHeight * 0.3, cx, cy - flameHeight * 0.65);
        ctx.quadraticCurveTo(cx + size * 0.08, cy - flameHeight * 0.3, cx + size * 0.06, cy);
        ctx.closePath();
        ctx.fill();

        // Subtle rising embers & smoky haze
        if (Math.random() < 0.25) {
          this.addParticle(bld.x + 0.5, bld.y + 0.4, '#fb923c', 1, 0.35);
        }
        break;
      }

      case 'lean_to': {
        // Natural thatched lean-to
        // Drop shadow
        ctx.fillStyle = 'rgba(10, 14, 18, 0.45)';
        ctx.beginPath();
        ctx.ellipse(cx + size * 0.15, cy + size * 0.3, size * 0.42, size * 0.22, 0.2, 0, Math.PI * 2);
        ctx.fill();

        // Slanted timber poles
        ctx.strokeStyle = '#54341b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(sx + size * 0.15, sy + size * 0.8);
        ctx.lineTo(sx + size * 0.5, sy + size * 0.15);
        ctx.lineTo(sx + size * 0.85, sy + size * 0.8);
        ctx.stroke();

        // Layered straw thatch roof
        ctx.fillStyle = '#a16207';
        ctx.beginPath();
        ctx.moveTo(sx + size * 0.12, sy + size * 0.8);
        ctx.lineTo(sx + size * 0.5, sy + size * 0.15);
        ctx.lineTo(sx + size * 0.88, sy + size * 0.8);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#ca8a04';
        for (let i = 0; i < 4; i++) {
          ctx.fillRect(sx + size * (0.2 + i * 0.15), sy + size * (0.35 + i * 0.1), size * 0.1, size * 0.04);
        }
        break;
      }

      case 'mud_hut':
      case 'thatched_cabin':
      case 'timber_house':
      case 'masonry_house': {
        const isStone = bld.type === 'masonry_house';
        // Building shadow
        ctx.fillStyle = 'rgba(10, 14, 18, 0.45)';
        ctx.beginPath();
        ctx.ellipse(cx + size * 0.15, cy + size * 0.4, size * 0.48, size * 0.25, 0.15, 0, Math.PI * 2);
        ctx.fill();

        // Main walls
        ctx.fillStyle = isStone ? '#57606a' : bld.type === 'timber_house' ? '#5a381e' : '#8c4820';
        ctx.fillRect(sx + size * 0.12, sy + size * 0.28, size * 0.76, size * 0.62);

        // Roof overhang
        ctx.fillStyle = isStone ? '#2c333a' : '#381c0b';
        ctx.beginPath();
        ctx.moveTo(sx + size * 0.05, sy + size * 0.32);
        ctx.lineTo(cx, sy - size * 0.08);
        ctx.lineTo(sx + size * 0.95, sy + size * 0.32);
        ctx.closePath();
        ctx.fill();

        // Warm candlelit window
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(sx + size * 0.25, sy + size * 0.48, size * 0.18, size * 0.18);
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(sx + size * 0.25, sy + size * 0.48, size * 0.18, size * 0.18);

        // Wood plank door
        ctx.fillStyle = '#261408';
        ctx.fillRect(sx + size * 0.54, sy + size * 0.52, size * 0.22, size * 0.38);
        break;
      }

      case 'farm_plot': {
        // Tilled loamy soil foundation
        ctx.fillStyle = '#261408';
        ctx.fillRect(sx + size * 0.05, sy + size * 0.05, size * 0.9, size * 0.9);

        // Furrows
        ctx.fillStyle = '#1c0e05';
        for (let i = 0; i < 3; i++) {
          ctx.fillRect(sx + size * 0.1, sy + size * (0.18 + i * 0.28), size * 0.8, size * 0.06);
        }

        const stage = bld.meta?.cropStage || 'growing';
        if (stage === 'seedling') {
          // Delicate green seedling sprouts
          ctx.fillStyle = '#4ade80';
          for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 4; col++) {
              ctx.beginPath();
              ctx.arc(sx + size * (0.2 + col * 0.2), sy + size * (0.24 + row * 0.28), size * 0.04, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        } else if (stage === 'growing') {
          // Tall lush green stalks
          ctx.fillStyle = '#16a34a';
          for (let row = 0; row < 3; row++) {
            const sway = Math.sin(this.animTimer * 2.0 + row) * size * 0.03;
            ctx.fillRect(sx + size * 0.15 + sway, sy + size * (0.2 + row * 0.26), size * 0.7, size * 0.12);
          }
        } else if (stage === 'ripe') {
          // Golden ripe waving wheat fields!
          ctx.fillStyle = '#f59e0b';
          for (let row = 0; row < 3; row++) {
            const sway = Math.sin(this.animTimer * 2.5 + row * 1.2) * size * 0.04;
            ctx.fillRect(sx + size * 0.12 + sway, sy + size * (0.18 + row * 0.26), size * 0.76, size * 0.15);
            // Golden wheat ears
            ctx.fillStyle = '#fbbf24';
            for (let c = 0; c < 4; c++) {
              ctx.fillRect(sx + size * (0.16 + c * 0.2) + sway, sy + size * (0.15 + row * 0.26), size * 0.08, size * 0.08);
            }
            ctx.fillStyle = '#f59e0b';
          }
        }
        break;
      }

      case 'ancestral_cairn': {
        // Ground shadow
        ctx.fillStyle = 'rgba(10, 15, 20, 0.45)';
        ctx.beginPath();
        ctx.ellipse(sx + size * 0.5, sy + size * 0.78, size * 0.38, size * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();

        // Piled river stones
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.arc(sx + size * 0.38, sy + size * 0.65, size * 0.18, 0, Math.PI * 2);
        ctx.arc(sx + size * 0.62, sy + size * 0.65, size * 0.18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.5, size * 0.16, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.35, size * 0.12, 0, Math.PI * 2);
        ctx.fill();

        // Eternal glowing ember on top
        const emberPulse = 0.5 + 0.5 * Math.sin(this.animTimer * 4);
        ctx.fillStyle = `rgba(245, 158, 11, ${0.5 * emberPulse})`;
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.26, size * 0.1, 0, Math.PI * 2);
        ctx.fill();

        // Wildflower wreath
        ctx.fillStyle = '#f472b6';
        ctx.beginPath();
        ctx.arc(sx + size * 0.36, sy + size * 0.72, size * 0.04, 0, Math.PI * 2);
        ctx.arc(sx + size * 0.64, sy + size * 0.72, size * 0.04, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case 'settlement_totem': {
        // Wooden entrance totem gateway
        ctx.fillStyle = '#52341d';
        ctx.fillRect(sx + size * 0.2, sy + size * 0.2, size * 0.14, size * 0.75);
        ctx.fillRect(sx + size * 0.66, sy + size * 0.2, size * 0.14, size * 0.75);

        ctx.fillStyle = '#6b4226';
        ctx.fillRect(sx + size * 0.12, sy + size * 0.2, size * 0.76, size * 0.14);

        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.16, size * 0.1, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#f8fafc';
        ctx.font = `bold ${Math.max(7, Math.floor(size * 0.14))}px Outfit, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillText('EDEN', sx + size * 0.5, sy + size * 0.31);
        break;
      }

      case 'animal_pen': {
        ctx.fillStyle = '#452b1b';
        ctx.fillRect(sx + size * 0.08, sy + size * 0.08, size * 0.84, size * 0.84);
        ctx.fillStyle = 'rgba(234, 179, 8, 0.2)';
        ctx.fillRect(sx + size * 0.15, sy + size * 0.15, size * 0.7, size * 0.7);

        ctx.strokeStyle = '#854d0e';
        ctx.lineWidth = 2;
        ctx.strokeRect(sx + size * 0.08, sy + size * 0.08, size * 0.84, size * 0.84);

        ctx.fillStyle = '#713f12';
        ctx.fillRect(sx + size * 0.05, sy + size * 0.05, size * 0.1, size * 0.1);
        ctx.fillRect(sx + size * 0.85, sy + size * 0.05, size * 0.1, size * 0.1);
        ctx.fillRect(sx + size * 0.05, sy + size * 0.85, size * 0.1, size * 0.1);
        ctx.fillRect(sx + size * 0.85, sy + size * 0.85, size * 0.1, size * 0.1);
        break;
      }

      case 'wooden_bridge': {
        // Timber log planks laid across water
        ctx.fillStyle = '#3a2312';
        ctx.fillRect(sx, sy + size * 0.1, size, size * 0.8);

        // Individual wood planks
        ctx.fillStyle = '#5c3a21';
        for (let i = 0; i < 5; i++) {
          ctx.fillRect(sx + i * (size * 0.2) + 1, sy + size * 0.12, size * 0.18, size * 0.76);
        }

        // Timber beam railings
        ctx.fillStyle = '#78350f';
        ctx.fillRect(sx, sy + size * 0.1, size, size * 0.08);
        ctx.fillRect(sx, sy + size * 0.82, size, size * 0.08);

        // Wooden post bolts
        ctx.fillStyle = '#d97706';
        ctx.fillRect(sx + 2, sy + size * 0.08, size * 0.08, size * 0.12);
        ctx.fillRect(sx + size - size * 0.1, sy + size * 0.08, size * 0.08, size * 0.12);
        ctx.fillRect(sx + 2, sy + size * 0.8, size * 0.08, size * 0.12);
        ctx.fillRect(sx + size - size * 0.1, sy + size * 0.8, size * 0.08, size * 0.12);
        break;
      }

      case 'waterwheel': {
        // Riverbank stone foundation
        ctx.fillStyle = '#475569';
        ctx.fillRect(sx + size * 0.1, sy + size * 0.25, size * 0.8, size * 0.7);

        // Timber mill roof
        ctx.fillStyle = '#3e2718';
        ctx.beginPath();
        ctx.moveTo(sx + size * 0.05, sy + size * 0.28);
        ctx.lineTo(sx + size * 0.5, sy + size * 0.05);
        ctx.lineTo(sx + size * 0.95, sy + size * 0.28);
        ctx.closePath();
        ctx.fill();

        // Rotating Wooden Paddle Wheel!
        const rot = bld.meta?.wheelRotation || 0;
        const wheelCenterX = sx + size * 0.5;
        const wheelCenterY = sy + size * 0.62;
        const wheelRadius = size * 0.32;

        ctx.save();
        ctx.translate(wheelCenterX, wheelCenterY);
        ctx.rotate(rot);

        // Wheel rim
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(0, 0, wheelRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Wheel hub
        ctx.fillStyle = '#451a03';
        ctx.beginPath();
        ctx.arc(0, 0, wheelRadius * 0.25, 0, Math.PI * 2);
        ctx.fill();

        // 6 Wooden Paddles
        ctx.fillStyle = '#92400e';
        for (let p = 0; p < 6; p++) {
          ctx.rotate(Math.PI / 3);
          ctx.fillRect(-wheelRadius * 0.1, 0, wheelRadius * 0.2, wheelRadius);
        }
        ctx.restore();

        // Foaming water splashes at base of wheel
        const splash = Math.sin(this.animTimer * 6) * size * 0.04;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(wheelCenterX + splash, sy + size * 0.9, size * 0.12, 0, Math.PI * 2);
        ctx.arc(wheelCenterX - size * 0.15, sy + size * 0.88, size * 0.08, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case 'horse_stable': {
        // Timber stable with paddock fencing and hay manger
        ctx.fillStyle = '#78350f';
        ctx.fillRect(sx + size * 0.1, sy + size * 0.2, size * 0.8, size * 0.65);
        // Roof
        ctx.fillStyle = '#92400e';
        ctx.beginPath();
        ctx.moveTo(sx + size * 0.05, sy + size * 0.22);
        ctx.lineTo(sx + size * 0.5, sy + size * 0.05);
        ctx.lineTo(sx + size * 0.95, sy + size * 0.22);
        ctx.fill();
        // Hay Manger (golden straw)
        ctx.fillStyle = '#facc15';
        ctx.fillRect(sx + size * 0.2, sy + size * 0.55, size * 0.35, size * 0.22);
        // Horseshoe emblem
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.18, size * 0.06, 0.2, Math.PI - 0.2);
        ctx.stroke();
        break;
      }

      case 'dock_pier': {
        // Shoreline wooden pier over water with bollards
        ctx.fillStyle = '#5c3a21';
        ctx.fillRect(sx + size * 0.1, sy + size * 0.15, size * 0.8, size * 0.7);
        // Planks
        ctx.strokeStyle = '#3e2412';
        ctx.lineWidth = 1.5;
        for (let i = 0.25; i < 0.85; i += 0.15) {
          ctx.beginPath();
          ctx.moveTo(sx + size * 0.1, sy + size * i);
          ctx.lineTo(sx + size * 0.9, sy + size * i);
          ctx.stroke();
        }
        // Mooring rope bollards
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(sx + size * 0.15, sy + size * 0.2, size * 0.1, size * 0.12);
        ctx.fillRect(sx + size * 0.75, sy + size * 0.2, size * 0.1, size * 0.12);
        break;
      }

      case 'great_library': {
        // Stately classical cut-stone archive
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(sx + size * 0.1, sy + size * 0.2, size * 0.8, size * 0.7);
        // Triangular pediment
        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.moveTo(sx + size * 0.05, sy + size * 0.22);
        ctx.lineTo(sx + size * 0.5, sy + size * 0.02);
        ctx.lineTo(sx + size * 0.95, sy + size * 0.22);
        ctx.fill();
        // Columns
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(sx + size * 0.2, sy + size * 0.22, size * 0.08, size * 0.65);
        ctx.fillRect(sx + size * 0.46, sy + size * 0.22, size * 0.08, size * 0.65);
        ctx.fillRect(sx + size * 0.72, sy + size * 0.22, size * 0.08, size * 0.65);
        // Stained-glass window
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.14, size * 0.05, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case 'timber_palisade': {
        // Sharpened upright logs
        ctx.fillStyle = '#78350f';
        for (let i = 0.15; i <= 0.85; i += 0.22) {
          ctx.beginPath();
          ctx.moveTo(sx + size * i, sy + size * 0.85);
          ctx.lineTo(sx + size * i, sy + size * 0.25);
          ctx.lineTo(sx + size * (i + 0.08), sy + size * 0.1);
          ctx.lineTo(sx + size * (i + 0.16), sy + size * 0.25);
          ctx.lineTo(sx + size * (i + 0.16), sy + size * 0.85);
          ctx.fill();
        }
        // Cross brace
        ctx.fillStyle = '#92400e';
        ctx.fillRect(sx + size * 0.1, sy + size * 0.5, size * 0.8, size * 0.08);
        break;
      }

      case 'watch_gate': {
        // Crenellated gatehouse tower with torch
        ctx.fillStyle = '#5c3a21';
        ctx.fillRect(sx + size * 0.15, sy + size * 0.1, size * 0.7, size * 0.8);
        // Gate arch opening
        ctx.fillStyle = '#1c1917';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.6, size * 0.2, Math.PI, 0);
        ctx.lineTo(sx + size * 0.7, sy + size * 0.9);
        ctx.lineTo(sx + size * 0.3, sy + size * 0.9);
        ctx.fill();
        // Flaming brazier on top
        const fireFlicker = Math.sin(this.animTimer * 12) * size * 0.03;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5 + fireFlicker, sy + size * 0.08, size * 0.06, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case 'stone_aqueduct': {
        // Roman multi-arch elevated stone flume
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(sx + size * 0.1, sy + size * 0.18, size * 0.8, size * 0.2);
        // Stone piers
        ctx.fillRect(sx + size * 0.18, sy + size * 0.38, size * 0.14, size * 0.52);
        ctx.fillRect(sx + size * 0.68, sy + size * 0.38, size * 0.14, size * 0.52);
        // Arch cutout
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.55, size * 0.22, Math.PI, 0);
        ctx.fill();
        // Glistening flowing water in upper flume
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(sx + size * 0.12, sy + size * 0.2, size * 0.76, size * 0.08);
        break;
      }

      case 'water_cistern': {
        // Deep circular stone reservoir
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.5, size * 0.38, 0, Math.PI * 2);
        ctx.fill();
        // Water surface with ripples
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.5, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.5;
        const rip = (this.animTimer * 0.5) % 1.0;
        ctx.beginPath();
        ctx.arc(sx + size * 0.5, sy + size * 0.5, size * 0.28 * rip, 0, Math.PI * 2);
        ctx.stroke();
        break;
      }

      default: {
        ctx.fillStyle = '#475569';
        ctx.fillRect(sx + size * 0.15, sy + size * 0.15, size * 0.7, size * 0.7);
      }
    }

    // Solstice festive garlands on settlement totem!
    if (this.world.isSolsticeActive && bld.type === 'settlement_totem') {
      const gPhase = Math.sin(this.animTimer * 4);
      ctx.fillStyle = '#f43f5e';
      ctx.beginPath();
      ctx.arc(sx + size * 0.25, sy + size * 0.25 + gPhase, size * 0.06, 0, Math.PI * 2);
      ctx.arc(sx + size * 0.75, sy + size * 0.25 - gPhase, size * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(sx + size * 0.5, sy + size * 0.1 + gPhase * 0.5, size * 0.07, 0, Math.PI * 2);
      ctx.fill();
    }

    // Winter snow accumulation on building rooftops
    if (this.world.season === 'Winter' && bld.type !== 'campfire' && bld.type !== 'wooden_bridge') {
      ctx.fillStyle = 'rgba(241, 245, 249, 0.85)';
      ctx.fillRect(sx + size * 0.1, sy + size * 0.05, size * 0.8, size * 0.1);
    }
  }

  // --- REALISTIC HUMANOID AGENT ---
  private renderAgentRealistic(
    ctx: CanvasRenderingContext2D,
    agent: Agent,
    sx: number,
    sy: number,
    size: number,
    isSelected: boolean
  ): void {
    // Scale based on maturity (infants, children, apprentices, adults, elders)
    const isInfant = agent.lifeStage === 'infant' || agent.age < 3;
    const isChild = !isInfant && (agent.lifeStage === 'child' || agent.age < 13);
    const isApprentice = !isInfant && !isChild && (agent.lifeStage === 'apprentice' || agent.age < 18);
    const isElder = agent.lifeStage === 'elder' || agent.age >= 60;

    const ageFactor = isInfant ? 0.52 : isChild ? 0.68 : isApprentice ? 0.85 : 1.0;
    const scale = (size / 32) * ageFactor;

    const isSleeping = agent.currentAction.toLowerCase().includes('sleep');

    // Shivering jitter when cold / freezing
    const isCold = agent.isShivering || agent.needs.warmth < 25;
    const shiver = isCold && !isSleeping ? Math.sin(this.animTimer * 45) * 1.3 * scale : 0;
    const cx = sx + size * 0.5 + shiver;
    const cy = sy + size * 0.5;

    // 1. Soft grounded drop-shadow
    ctx.fillStyle = 'rgba(8, 14, 18, 0.45)';
    ctx.beginPath();
    ctx.ellipse(cx, cy + 10 * scale, (isInfant ? 5 : 8) * scale, (isInfant ? 3 : 4) * scale, 0, 0, Math.PI * 2);
    ctx.fill();

    // 2. Walking animation steps (only if awake and moving)
    const isMoving = !isSleeping && (agent.vx !== 0 || agent.vy !== 0);
    const walkCycle = isMoving ? Math.sin(this.animTimer * (isChild ? 14 : 10)) : 0;
    const bob = isMoving ? Math.abs(Math.sin(this.animTimer * (isChild ? 14 : 10))) * 2 * scale : 0;

    // 3. Selection ring
    if (isSelected) {
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(cx, cy, 18 * scale, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // 4. Legs / Feet
    if (!isInfant) {
      ctx.fillStyle = '#52341d'; // Leather boots
      const leftLegOffset = isMoving ? walkCycle * 4 * scale : 0;
      const rightLegOffset = isMoving ? -walkCycle * 4 * scale : 0;
      ctx.fillRect(cx - 5 * scale, cy + 5 * scale + leftLegOffset - bob, 3.5 * scale, 6 * scale);
      ctx.fillRect(cx + 1.5 * scale, cy + 5 * scale + rightLegOffset - bob, 3.5 * scale, 6 * scale);
    }

    // 5. Torso & Tunic / Swaddling / Winter Fur Cloak
    if (isInfant) {
      // Swaddled cozy infant bundle
      ctx.fillStyle = '#fed7aa';
      ctx.beginPath();
      ctx.roundRect(cx - 5 * scale, cy - 6 * scale - bob, 10 * scale, 12 * scale, 5 * scale);
      ctx.fill();
      ctx.fillStyle = '#fdba74';
      ctx.fillRect(cx - 5 * scale, cy - 1 * scale - bob, 10 * scale, 2 * scale);
    } else if (agent.hasWinterCloak) {
      // Heavy tailored fur-trimmed winter cloak with hood
      ctx.fillStyle = '#3e2723'; // Rich pelt tone
      ctx.beginPath();
      ctx.roundRect(cx - 7 * scale, cy - 5 * scale - bob, 14 * scale, 13 * scale, 4 * scale);
      ctx.fill();

      // White fluffy fur collar & trim
      ctx.fillStyle = '#f1f5f9';
      ctx.beginPath();
      ctx.ellipse(cx, cy - 4 * scale - bob, 6.5 * scale, 2.5 * scale, 0, 0, Math.PI * 2);
      ctx.fill();

      // Golden bronze brooch / clasp
      ctx.fillStyle = '#f59e0b';
      ctx.fillRect(cx - 2 * scale, cy - 3 * scale - bob, 4 * scale, 2 * scale);

      // Belt
      ctx.fillStyle = '#1c1917';
      ctx.fillRect(cx - 6 * scale, cy + 2 * scale - bob, 12 * scale, 2 * scale);
    } else {
      ctx.fillStyle = isElder ? (agent.gender === 'male' ? '#334155' : '#475569') : agent.gender === 'male' ? '#4a3320' : '#883a54';
      ctx.beginPath();
      ctx.roundRect(cx - 6 * scale, cy - 4 * scale - bob, 12 * scale, 12 * scale, 3 * scale);
      ctx.fill();

      // Belt
      ctx.fillStyle = '#22150c';
      ctx.fillRect(cx - 6 * scale, cy + 2 * scale - bob, 12 * scale, 2 * scale);
    }

    // Pregnancy bump & maternal warmth glow
    if (agent.isPregnant) {
      const bumpDir = agent.facing === 'left' ? -3.5 * scale : agent.facing === 'right' ? 3.5 * scale : 0;
      ctx.fillStyle = '#9b3d5b';
      ctx.beginPath();
      ctx.arc(cx + bumpDir, cy + 1 * scale - bob, 5 * scale, 0, Math.PI * 2);
      ctx.fill();

      const pulse = 0.5 + 0.5 * Math.sin(this.animTimer * 3.5);
      ctx.fillStyle = `rgba(244, 114, 182, ${0.28 * pulse})`;
      ctx.beginPath();
      ctx.arc(cx + bumpDir, cy + 1 * scale - bob, 7 * scale, 0, Math.PI * 2);
      ctx.fill();
    }

    // 6. Arms & Hands / Walking Stick
    if (!isInfant) {
      ctx.fillStyle = '#d4a373'; // Skin tone
      const armSwing = isMoving ? -walkCycle * 4 * scale : 0;
      // Left arm
      ctx.fillRect(cx - 8.5 * scale, cy - 3 * scale + armSwing - bob, 2.8 * scale, 8 * scale);
      // Right arm (holds tool or walking staff)
      ctx.fillRect(cx + 5.7 * scale, cy - 3 * scale - armSwing - bob, 2.8 * scale, 8 * scale);

      // Elder walking staff
      if (isElder) {
        ctx.fillStyle = '#5c3a21';
        ctx.fillRect(cx + 8 * scale, cy - 10 * scale - bob, 2 * scale, 22 * scale);
        ctx.fillStyle = '#92400e';
        ctx.beginPath();
        ctx.arc(cx + 9 * scale, cy - 10 * scale - bob, 2.5 * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Wooden Shield on Left Arm
      if ((agent.inventory.wooden_shield || 0) > 0) {
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.ellipse(cx - 9 * scale, cy + 1 * scale - bob, 4.5 * scale, 7 * scale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1.4 * scale;
        ctx.stroke();
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(cx - 9 * scale, cy + 1 * scale - bob, 1.8 * scale, 0, Math.PI * 2);
        ctx.fill();
      }

      // Recurve Hunting Bow on Back
      if ((agent.inventory.hunting_bow || 0) > 0) {
        ctx.strokeStyle = '#5c3a21';
        ctx.lineWidth = 1.8 * scale;
        ctx.beginPath();
        ctx.arc(cx + 4 * scale, cy - 1 * scale - bob, 8 * scale, -Math.PI * 0.4, Math.PI * 0.4);
        ctx.stroke();
      }

      // Cargo Hauling Handcart behind Pioneer
      if (agent.hasCargoCart) {
        const cartDir = agent.facing === 'left' ? 1 : -1;
        const cartX = cx + cartDir * 12 * scale;
        const cartY = cy + 4 * scale - bob;
        // Timber cargo box
        ctx.fillStyle = '#854d0e';
        ctx.fillRect(cartX - 5 * scale, cartY - 5 * scale, 10 * scale, 8 * scale);
        // Cart Wheel
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 2 * scale;
        ctx.beginPath();
        ctx.arc(cartX, cartY + 4 * scale, 4.5 * scale, 0, Math.PI * 2);
        ctx.stroke();
        // Hitch pole
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 1.5 * scale;
        ctx.beginPath();
        ctx.moveTo(cartX - cartDir * 5 * scale, cartY);
        ctx.lineTo(cx, cy + 2 * scale - bob);
        ctx.stroke();
      }

      // Wooden Boat / Canoe Hull under Pioneer when sailing on water
      if (agent.isInBoat) {
        ctx.fillStyle = '#5c3a21';
        ctx.beginPath();
        ctx.ellipse(cx, cy + 8 * scale - bob, 14 * scale, 5 * scale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#3e2412';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // Water wake ripple
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
        ctx.beginPath();
        ctx.arc(cx, cy + 10 * scale - bob, 16 * scale, 0.2, Math.PI - 0.2);
        ctx.stroke();
      }
    }

    // 7. Head & Realistic Hair
    ctx.fillStyle = '#e8be99';
    ctx.beginPath();
    ctx.arc(cx, cy - 9 * scale - bob, (isInfant ? 4.2 : 5) * scale, 0, Math.PI * 2);
    ctx.fill();

    // Rosy cheeks for children & infants
    if (isChild || isInfant) {
      ctx.fillStyle = 'rgba(244, 114, 182, 0.45)';
      ctx.beginPath();
      ctx.arc(cx - 3 * scale, cy - 8 * scale - bob, 1.4 * scale, 0, Math.PI * 2);
      ctx.arc(cx + 3 * scale, cy - 8 * scale - bob, 1.4 * scale, 0, Math.PI * 2);
      ctx.fill();
    }

    // Hair & Beard
    const hairColor = isElder ? '#e2e8f0' : agent.gender === 'male' ? '#2b1a11' : '#5a2215';

    if (isInfant) {
      // Cute soft tuft of baby hair
      ctx.fillStyle = hairColor;
      ctx.beginPath();
      ctx.arc(cx, cy - 12 * scale - bob, 2.5 * scale, 0, Math.PI * 2);
      ctx.fill();
    } else if (agent.gender === 'male') {
      ctx.fillStyle = hairColor;
      ctx.beginPath();
      ctx.arc(cx, cy - 10 * scale - bob, 5.2 * scale, Math.PI * 0.9, Math.PI * 2.1);
      ctx.fill();

      // Beard for adult and elder men
      if (isElder) {
        // Full long dignified silver beard
        ctx.fillStyle = '#f1f5f9';
        ctx.fillRect(cx - 3.5 * scale, cy - 6 * scale - bob, 7 * scale, 5.5 * scale);
      } else if (!isChild && agent.age >= 18) {
        ctx.fillRect(cx - 3 * scale, cy - 6 * scale - bob, 6 * scale, 2.5 * scale);
      }
    } else {
      ctx.fillStyle = hairColor;
      ctx.beginPath();
      ctx.arc(cx, cy - 10 * scale - bob, 5.4 * scale, Math.PI * 0.8, Math.PI * 2.2);
      ctx.fill();
      ctx.fillRect(cx - 6 * scale, cy - 8 * scale - bob, 2.5 * scale, (isElder ? 6 : 8) * scale);
      ctx.fillRect(cx + 3.5 * scale, cy - 8 * scale - bob, 2.5 * scale, (isElder ? 6 : 8) * scale);
    }

    // 8. Eyes & Sleep State
    if (isSleeping) {
      // Peaceful closed eyelids
      ctx.strokeStyle = '#2b1a11';
      ctx.lineWidth = 1.4 * scale;
      ctx.beginPath();
      ctx.moveTo(cx - 3.5 * scale, cy - 8.5 * scale - bob);
      ctx.lineTo(cx - 0.8 * scale, cy - 8.5 * scale - bob);
      ctx.moveTo(cx + 0.8 * scale, cy - 8.5 * scale - bob);
      ctx.lineTo(cx + 3.5 * scale, cy - 8.5 * scale - bob);
      ctx.stroke();

      // Floating drifting Zzz animation
      const zTime = (this.animTimer * 1.5 + (agent.x * 0.3)) % 2.0;
      const zOffset = zTime * 14 * scale;
      const zAlpha = Math.max(0, 1 - (zTime / 2.0));
      ctx.fillStyle = `rgba(186, 230, 253, ${zAlpha})`;
      ctx.font = `bold ${Math.max(9, Math.floor(10 * scale))}px Outfit, sans-serif`;
      ctx.textAlign = 'left';
      ctx.fillText('z', cx + 6 * scale + zTime * 3, cy - 14 * scale - zOffset);
      ctx.fillText('Z', cx + 11 * scale + zTime * 4, cy - 20 * scale - zOffset * 1.3);
    } else {
      ctx.fillStyle = '#1e1b18';
      const eyeDir = agent.facing === 'left' ? -1.5 * scale : agent.facing === 'right' ? 1.5 * scale : 0;
      ctx.fillRect(cx - 2.5 * scale + eyeDir, cy - 9.5 * scale - bob, 1.6 * scale, 1.8 * scale);
      ctx.fillRect(cx + 1.0 * scale + eyeDir, cy - 9.5 * scale - bob, 1.6 * scale, 1.8 * scale);
    }

    // Cold breath vapor puff in winter/freezing weather
    if (this.world.temperatureCelsius < 5 && !isSleeping) {
      const breathCycle = (this.animTimer * 1.6 + agent.x * 0.4) % 2.6;
      if (breathCycle < 1.1) {
        const bProgress = breathCycle / 1.1;
        const bAlpha = (1 - bProgress) * 0.4;
        const bOffset = bProgress * 10 * scale;
        const bDir = agent.facing === 'left' ? -1 : 1;
        ctx.fillStyle = `rgba(241, 245, 249, ${bAlpha})`;
        ctx.beginPath();
        ctx.arc(cx + bDir * (5 * scale + bOffset), cy - 8 * scale - bOffset * 0.4 - bob, 2.2 * scale * (1 + bProgress * 0.9), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Shivering icon when freezing
    if ((agent.isShivering || agent.needs.warmth < 25) && !isSleeping) {
      ctx.fillStyle = 'rgba(186, 230, 253, 0.9)';
      ctx.font = `${Math.max(8, Math.floor(9 * scale))}px Outfit, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('🥶', cx + 9 * scale, cy - 14 * scale - bob);
    }

    // 9. Active Task Progress Ring (Float above head when working!)
    if (agent.activeTask) {
      const task = agent.activeTask;
      const pct = Math.min(1, task.progress / Math.max(1, task.duration));
      const ringRadius = 10 * scale;
      const ringY = cy - 22 * scale - bob;

      // Background circle
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(cx, ringY, ringRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Progress arc
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.arc(cx, ringY, ringRadius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * pct);
      ctx.stroke();

      // Mini task label
      ctx.fillStyle = '#f8fafc';
      ctx.font = `600 ${Math.max(9, Math.floor(9 * scale))}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 4;
      ctx.fillText(task.name, cx, ringY - 12 * scale);
      ctx.shadowBlur = 0;
    } else {
      // Small elegant name label (with marriage ring if wed)
      const ringBadge = agent.spouseId ? ' 💍' : '';
      ctx.fillStyle = '#ffffff';
      ctx.font = `600 ${Math.max(10, Math.floor(10 * scale))}px Outfit, sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 4;
      ctx.fillText(`${agent.name}${ringBadge}`, cx, cy - 17 * scale - bob);
      ctx.shadowBlur = 0;
    }

    // 10. Expecting / Pregnancy Progress Pill
    if (agent.isPregnant) {
      const pPct = Math.min(100, Math.round(agent.pregnancyProgress || 0));
      const badgeY = cy - (agent.activeTask ? 36 : 28) * scale - bob;

      ctx.fillStyle = 'rgba(23, 15, 30, 0.88)';
      ctx.beginPath();
      ctx.roundRect(cx - 28 * scale, badgeY - 7 * scale, 56 * scale, 14 * scale, 6 * scale);
      ctx.fill();

      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      ctx.fillStyle = '#fdf2f8';
      ctx.font = `bold ${Math.max(8, Math.floor(8.5 * scale))}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(`🤰 Expecting ${pPct}%`, cx, badgeY + 3.5 * scale);
    }

    // 11. Romantic Floating Hearts FX
    const hasRomance = Object.values(agent.relationships || {}).some(
      (r) => r.stage === 'crush' || r.stage === 'in_love' || r.stage === 'married'
    );
    if (hasRomance && (agent.speechBubble?.text.toLowerCase().includes('love') || agent.speechBubble?.text.toLowerCase().includes('heart') || agent.speechBubble?.text.toLowerCase().includes('flutter') || agent.speechBubble?.text.toLowerCase().includes('spouse') || (agent.spouseId && !isSleeping && Math.sin(this.animTimer + agent.x) > 0.6))) {
      const hTime = (this.animTimer * 1.4 + agent.x * 0.7) % 2.0;
      const hOffset = hTime * 18 * scale;
      const hAlpha = Math.max(0, 1 - (hTime / 2.0));
      const hSway = Math.sin(this.animTimer * 3 + agent.x) * 4 * scale;

      ctx.fillStyle = `rgba(244, 63, 94, ${hAlpha})`;
      ctx.font = `${Math.max(9, Math.floor(10 * scale))}px Outfit, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('💖', cx + 11 * scale + hSway, cy - 14 * scale - hOffset);
    }

    // 12. Solstice Celebration Dancing Sparkles FX
    if (agent.isDancingSolstice) {
      const sAngle = this.animTimer * 4 + agent.x * 2;
      const sRadius = 14 * scale;
      const spX = cx + Math.cos(sAngle) * sRadius;
      const spY = cy - 12 * scale + Math.sin(sAngle) * (sRadius * 0.4);
      ctx.fillStyle = '#facc15';
      ctx.font = `${Math.max(8, Math.floor(9 * scale))}px Outfit, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('✨', spX, spY);
    }
  }

  // --- MULTI-LINE WORD WRAPPED SPEECH & THOUGHT BUBBLE ---
  private renderMultiLineSpeechBubble(
    ctx: CanvasRenderingContext2D,
    text: string,
    x: number,
    y: number,
    isSpeech: boolean,
    accentColor: string
  ): void {
    ctx.font = '500 12px Inter, sans-serif';

    // Word wrap logic
    const maxBoxWidth = 220;
    const paddingX = 14;
    const paddingY = 10;
    const lineHeight = 16;

    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const width = ctx.measureText(testLine).width;
      if (width > maxBoxWidth - paddingX * 2 && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) lines.push(currentLine);

    // Calculate dynamic dimensions
    let longestLineWidth = 0;
    for (const line of lines) {
      const w = ctx.measureText(line).width;
      if (w > longestLineWidth) longestLineWidth = w;
    }

    const boxW = Math.max(120, longestLineWidth + paddingX * 2);
    const boxH = lines.length * lineHeight + paddingY * 2;
    const bx = x - boxW / 2;
    const by = y - boxH - 8;

    // Drop shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 4;

    // Background card
    ctx.fillStyle = isSpeech ? 'rgba(15, 23, 42, 0.95)' : 'rgba(24, 18, 38, 0.95)';
    ctx.beginPath();
    ctx.roundRect(bx, by, boxW, boxH, 10);
    ctx.fill();

    // Accent line on top
    ctx.fillStyle = isSpeech ? accentColor : '#a855f7';
    ctx.fillRect(bx + 10, by, boxW - 20, 2);

    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;

    // Subtle border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Comic pointer tail
    ctx.fillStyle = isSpeech ? 'rgba(15, 23, 42, 0.95)' : 'rgba(24, 18, 38, 0.95)';
    ctx.beginPath();
    ctx.moveTo(x - 6, by + boxH);
    ctx.lineTo(x, by + boxH + 7);
    ctx.lineTo(x + 6, by + boxH);
    ctx.fill();

    // Render lines
    ctx.fillStyle = '#f8fafc';
    ctx.textAlign = 'center';
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], x, by + paddingY + 12 + i * lineHeight);
    }
  }

  // --- ATMOSPHERIC DAY/NIGHT LIGHTING ---
  private renderAtmosphericLighting(ctx: CanvasRenderingContext2D, width: number, height: number): void {
    const time = this.world.timeOfDay;
    let darkness = 0;

    // Realistic day/night cycle curve
    if (time >= 21.5 || time < 4.0) {
      darkness = 0.88; // Night darkness
    } else if (time >= 18.0 && time < 21.5) {
      darkness = ((time - 18.0) / 3.5) * 0.88; // Dusk twilight
    } else if (time >= 4.0 && time < 7.5) {
      darkness = (1 - (time - 4.0) / 3.5) * 0.88; // Dawn morning
    }

    if (this.world.weather === 'Rain') {
      darkness = Math.min(0.88, darkness + 0.22);
    }

    if (darkness <= 0.04) return;

    ctx.save();
    ctx.fillStyle = `rgba(6, 10, 22, ${darkness})`;
    ctx.fillRect(0, 0, width, height);

    // Warm radial firelight cutouts
    ctx.globalCompositeOperation = 'destination-out';

    for (const bld of this.world.buildings.values()) {
      if (!bld.isCompleted) continue;
      if (['campfire', 'bakery', 'blacksmith', 'town_hall'].includes(bld.type)) {
        const sp = this.camera.worldToScreen(bld.x + 0.5, bld.y + 0.5, TILE_SIZE);
        const radius = (bld.type === 'campfire' ? 140 : 180) * this.camera.zoom;

        const grad = ctx.createRadialGradient(sp.x, sp.y, 8, sp.x, sp.y, radius);
        grad.addColorStop(0, 'rgba(0, 0, 0, 1.0)');
        grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.7)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0.0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.restore();
  }

  // --- SOFT CLOUD FOG OF WAR ---
  private renderSoftFogOfWar(
    ctx: CanvasRenderingContext2D,
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    size: number
  ): void {
    ctx.fillStyle = '#060a14';
    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        const tile = this.world.getTile(x, y);
        if (!tile || !tile.isRevealed) {
          const sp = this.camera.worldToScreen(x, y, TILE_SIZE);
          ctx.fillRect(sp.x, sp.y, size + 1, size + 1);
        }
      }
    }
  }

  private updateAndRenderParticles(ctx: CanvasRenderingContext2D, deltaSec: number): void {
    const renderTileSize = TILE_SIZE * this.camera.zoom;

    // Ambient seasonal particles (gentle snowflakes in winter, amber leaves in autumn)
    const season = this.world.season;
    if (this.particles.length < 80) {
      const minTileX = Math.floor(-this.camera.x / renderTileSize);
      const maxTileX = minTileX + Math.ceil(this.canvas.width / renderTileSize) + 4;
      const minTileY = Math.floor(-this.camera.y / renderTileSize);

      if (season === 'Winter' || this.world.temperatureCelsius < 2) {
        if (Math.random() < 0.35) {
          const spawnX = minTileX + Math.random() * (maxTileX - minTileX);
          const spawnY = minTileY - 2 + Math.random() * 2;
          this.particles.push({
            x: spawnX,
            y: spawnY,
            vx: -0.3 + Math.sin(this.animTimer * 1.5 + spawnX) * 0.4,
            vy: 0.9 + Math.random() * 0.8,
            life: 1.0,
            maxLife: 3.5 + Math.random() * 2.0,
            color: 'rgba(255, 255, 255, 0.85)',
            size: 1.4 + Math.random() * 2.0,
          });
        }
      } else if (season === 'Autumn') {
        if (Math.random() < 0.2) {
          const spawnX = minTileX + Math.random() * (maxTileX - minTileX);
          const spawnY = minTileY - 2 + Math.random() * 2;
          const leafColors = ['#f97316', '#eab308', '#dc2626', '#d97706', '#fbbf24'];
          this.particles.push({
            x: spawnX,
            y: spawnY,
            vx: -0.5 + Math.sin(this.animTimer * 2.2 + spawnX) * 0.6,
            vy: 0.6 + Math.random() * 0.6,
            life: 1.0,
            maxLife: 4.0 + Math.random() * 2.5,
            color: leafColors[Math.floor(Math.random() * leafColors.length)],
            size: 2.0 + Math.random() * 2.0,
          });
        }
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= deltaSec / p.maxLife;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      p.x += p.vx * deltaSec;
      p.y += p.vy * deltaSec;

      const sp = this.camera.worldToScreen(p.x, p.y, TILE_SIZE);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, p.size * (renderTileSize / 32), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;
  }

  // --- FAUNA (RABBITS, DEER, WOLVES, SHEEP, DOGS) RENDERING ---
  private renderFauna(
    ctx: CanvasRenderingContext2D,
    animal: Animal,
    sx: number,
    sy: number,
    size: number
  ): void {
    const cx = sx + size * 0.5;
    const cy = sy + size * 0.5;
    const scale = size / 32;
    const isSleeping = animal.state === 'sleeping';
    const isMoving = !isSleeping && (animal.vx !== 0 || animal.vy !== 0);
    const flip = animal.facing === 'left' ? -1 : 1;
    const hop = isMoving && animal.species === 'rabbit' ? Math.abs(Math.sin(this.animTimer * 12)) * 4 * scale : 0;
    const legWalk = isMoving ? Math.sin(this.animTimer * 10) * 3 * scale : 0;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(flip, 1);

    // Drop shadow
    ctx.fillStyle = 'rgba(8, 14, 18, 0.35)';
    ctx.beginPath();
    const shadowW = animal.species === 'rabbit' ? 5 : animal.species === 'sheep' ? 9 : 11;
    ctx.ellipse(0, 7 * scale, shadowW * scale, 3.5 * scale, 0, 0, Math.PI * 2);
    ctx.fill();

    if (animal.species === 'rabbit') {
      // Fluffy brown/white bunny
      ctx.fillStyle = '#d4b895';
      ctx.beginPath();
      ctx.ellipse(-1 * scale, 2 * scale - hop, 6 * scale, 4.5 * scale, -0.1, 0, Math.PI * 2);
      ctx.fill();
      // Fluffy white tail
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(-7 * scale, 1 * scale - hop, 2.2 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Head
      ctx.fillStyle = '#e6cca8';
      ctx.beginPath();
      ctx.arc(4 * scale, -1 * scale - hop, 3.8 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Ears
      ctx.fillStyle = '#d4b895';
      ctx.beginPath();
      ctx.ellipse(2.5 * scale, -7 * scale - hop, 1.6 * scale, 4.2 * scale, 0.2, 0, Math.PI * 2);
      ctx.fill();
      // Pink ear inner
      ctx.fillStyle = '#fbcfe8';
      ctx.beginPath();
      ctx.ellipse(2.5 * scale, -7 * scale - hop, 0.8 * scale, 3.0 * scale, 0.2, 0, Math.PI * 2);
      ctx.fill();
      // Eye
      ctx.fillStyle = isSleeping ? '#4a3728' : '#1e1b18';
      ctx.fillRect(4.5 * scale, -2 * scale - hop, 1.2 * scale, isSleeping ? 0.8 * scale : 1.2 * scale);

    } else if (animal.species === 'deer') {
      // Graceful tan/brown deer
      ctx.fillStyle = '#8b5a2b';
      // Legs
      ctx.fillRect(-6 * scale, 2 * scale + legWalk, 1.8 * scale, 7 * scale);
      ctx.fillRect(4 * scale, 2 * scale - legWalk, 1.8 * scale, 7 * scale);
      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, 9 * scale, 5 * scale, 0, 0, Math.PI * 2);
      ctx.fill();
      // White tail
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(-9 * scale, -1 * scale, 2.5 * scale, 2 * scale, 0.3, 0, Math.PI * 2);
      ctx.fill();
      // Arched neck & head
      ctx.fillStyle = '#9c6633';
      ctx.beginPath();
      ctx.moveTo(4 * scale, -2 * scale);
      ctx.lineTo(8 * scale, -9 * scale);
      ctx.lineTo(12 * scale, -7 * scale);
      ctx.lineTo(6 * scale, 2 * scale);
      ctx.fill();
      // Head
      ctx.beginPath();
      ctx.arc(10 * scale, -8 * scale, 3.2 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Antlers
      ctx.strokeStyle = '#52341d';
      ctx.lineWidth = 1.4 * scale;
      ctx.beginPath();
      ctx.moveTo(9 * scale, -11 * scale);
      ctx.lineTo(8 * scale, -16 * scale);
      ctx.lineTo(6 * scale, -18 * scale);
      ctx.moveTo(8 * scale, -14 * scale);
      ctx.lineTo(11 * scale, -17 * scale);
      ctx.stroke();
      // Eye
      ctx.fillStyle = '#111827';
      ctx.fillRect(10.5 * scale, -9 * scale, 1.4 * scale, 1.4 * scale);

    } else if (animal.species === 'wolf') {
      // Rugged wild timber wolf
      ctx.fillStyle = '#475569';
      ctx.fillRect(-6 * scale, 3 * scale + legWalk, 2.2 * scale, 6 * scale);
      ctx.fillRect(4 * scale, 3 * scale - legWalk, 2.2 * scale, 6 * scale);
      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, 9.5 * scale, 5.5 * scale, 0, 0, Math.PI * 2);
      ctx.fill();
      // Shaggy grey ruff
      ctx.fillStyle = '#64748b';
      ctx.beginPath();
      ctx.arc(5 * scale, -2 * scale, 4.5 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Head
      ctx.beginPath();
      ctx.arc(9 * scale, -4 * scale, 3.5 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Triangular ears
      ctx.fillStyle = '#334155';
      ctx.beginPath();
      ctx.moveTo(8 * scale, -7 * scale);
      ctx.lineTo(10 * scale, -11 * scale);
      ctx.lineTo(12 * scale, -7 * scale);
      ctx.fill();
      // Bushy tail
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 3.2 * scale;
      ctx.beginPath();
      ctx.moveTo(-9 * scale, 0);
      ctx.quadraticCurveTo(-14 * scale, 4 * scale, -13 * scale, 7 * scale);
      ctx.stroke();
      // Piercing amber eye
      ctx.fillStyle = '#fbbf24';
      ctx.fillRect(9.5 * scale, -5 * scale, 1.5 * scale, 1.5 * scale);

    } else if (animal.species === 'dog') {
      // Warm golden loyal domestic dog
      ctx.fillStyle = '#b45309';
      ctx.fillRect(-5 * scale, 3 * scale + legWalk, 2.2 * scale, 6 * scale);
      ctx.fillRect(4 * scale, 3 * scale - legWalk, 2.2 * scale, 6 * scale);
      // Body
      ctx.beginPath();
      ctx.ellipse(0, 0, 8.5 * scale, 5.0 * scale, 0, 0, Math.PI * 2);
      ctx.fill();
      // Woven red collar
      ctx.fillStyle = '#dc2626';
      ctx.fillRect(5 * scale, -4 * scale, 2.5 * scale, 6 * scale);
      // Head
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.arc(8.5 * scale, -3 * scale, 3.6 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Floppy ear
      ctx.fillStyle = '#92400e';
      ctx.beginPath();
      ctx.ellipse(7 * scale, -2 * scale, 1.8 * scale, 3.2 * scale, 0.4, 0, Math.PI * 2);
      ctx.fill();
      // Happy wagging tail!
      const wag = Math.sin(this.animTimer * 16) * 4 * scale;
      ctx.strokeStyle = '#b45309';
      ctx.lineWidth = 2.8 * scale;
      ctx.beginPath();
      ctx.moveTo(-8 * scale, 0);
      ctx.quadraticCurveTo(-12 * scale, -4 * scale + wag, -10 * scale, -8 * scale + wag);
      ctx.stroke();
      // Friendly eye
      ctx.fillStyle = '#1e1b18';
      ctx.fillRect(9.2 * scale, -4 * scale, 1.4 * scale, 1.4 * scale);

    } else if (animal.species === 'sheep') {
      // Fluffy cloud-like sheep
      ctx.fillStyle = '#1f2937';
      ctx.fillRect(-5 * scale, 3 * scale + legWalk, 2.0 * scale, 5 * scale);
      ctx.fillRect(4 * scale, 3 * scale - legWalk, 2.0 * scale, 5 * scale);
      // Cloud wool body
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.arc(-4 * scale, 0, 5.5 * scale, 0, Math.PI * 2);
      ctx.arc(1 * scale, -1 * scale, 6.2 * scale, 0, Math.PI * 2);
      ctx.arc(5 * scale, 0, 5.0 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Dark sheep face
      ctx.fillStyle = '#374151';
      ctx.beginPath();
      ctx.arc(8 * scale, -1 * scale, 3.2 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Wool puff on top of head
      ctx.fillStyle = '#f8fafc';
      ctx.beginPath();
      ctx.arc(8 * scale, -4 * scale, 1.8 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Eye
      ctx.fillStyle = '#e5e7eb';
      ctx.fillRect(8.5 * scale, -2 * scale, 1.2 * scale, 1.2 * scale);

    } else if (animal.species === 'horse') {
      // Strong, athletic bay/chestnut horse with flowing mane and tail
      const horseColor = '#78350f';
      const maneColor = '#1c1917';
      ctx.fillStyle = horseColor;

      // Galloping legs
      const gallop = isMoving ? Math.sin(this.animTimer * 12) * 4 * scale : 0;
      ctx.fillRect(-7 * scale, 3 * scale + gallop, 2.4 * scale, 8 * scale);
      ctx.fillRect(5 * scale, 3 * scale - gallop, 2.4 * scale, 8 * scale);
      // Dark hooves
      ctx.fillStyle = '#1c1917';
      ctx.fillRect(-7 * scale, 9 * scale + gallop, 2.6 * scale, 2.2 * scale);
      ctx.fillRect(5 * scale, 9 * scale - gallop, 2.6 * scale, 2.2 * scale);

      // Muscular body
      ctx.fillStyle = horseColor;
      ctx.beginPath();
      ctx.ellipse(0, 0, 11 * scale, 6.0 * scale, 0, 0, Math.PI * 2);
      ctx.fill();

      // Arched neck & head
      ctx.beginPath();
      ctx.moveTo(3 * scale, -2 * scale);
      ctx.lineTo(8 * scale, -11 * scale);
      ctx.lineTo(13 * scale, -8 * scale);
      ctx.lineTo(7 * scale, 3 * scale);
      ctx.fill();

      // Head
      ctx.beginPath();
      ctx.arc(11 * scale, -10 * scale, 3.8 * scale, 0, Math.PI * 2);
      ctx.fill();
      // Muzzle
      ctx.fillStyle = '#451a03';
      ctx.fillRect(12 * scale, -10 * scale, 3.8 * scale, 2.8 * scale);

      // Pointed alert ears
      ctx.fillStyle = horseColor;
      ctx.beginPath();
      ctx.moveTo(9 * scale, -13 * scale);
      ctx.lineTo(10.5 * scale, -17 * scale);
      ctx.lineTo(12 * scale, -13 * scale);
      ctx.fill();

      // Flowing mane
      ctx.fillStyle = maneColor;
      ctx.beginPath();
      ctx.moveTo(4 * scale, -2 * scale);
      ctx.lineTo(9 * scale, -11 * scale);
      ctx.lineTo(6 * scale, -7 * scale);
      ctx.fill();

      // Tail
      const tailWiggle = Math.sin(this.animTimer * 8) * 3 * scale;
      ctx.strokeStyle = maneColor;
      ctx.lineWidth = 3.2 * scale;
      ctx.beginPath();
      ctx.moveTo(-11 * scale, -1 * scale);
      ctx.quadraticCurveTo(-15 * scale, 4 * scale + tailWiggle, -13 * scale, 10 * scale + tailWiggle);
      ctx.stroke();

      // Saddling if domesticated
      if (animal.isSaddled || animal.isDomesticated) {
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(-3 * scale, -6 * scale, 8 * scale, 3.5 * scale);
        ctx.fillStyle = '#271206';
        ctx.fillRect(-1 * scale, -7 * scale, 5 * scale, 2.5 * scale);
      }

      // Eye
      ctx.fillStyle = '#111827';
      ctx.fillRect(11.2 * scale, -11 * scale, 1.4 * scale, 1.4 * scale);
    }

    ctx.restore();

    // Floating tag for named companion dogs
    if (animal.name && animal.isDomesticated) {
      ctx.fillStyle = '#38bdf8';
      ctx.font = `600 ${Math.max(9, Math.floor(9 * scale))}px Outfit, sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
      ctx.shadowBlur = 3;
      ctx.fillText(`🐕 ${animal.name}`, cx, cy - 14 * scale);
      ctx.shadowBlur = 0;
    }
  }
}
