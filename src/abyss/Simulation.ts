import { Creature } from './Creature';
import { FoodParticle, HydrothermalVent, MarineSnowParticle, SimulationStats, Vector2D } from './types';
import { Genetics } from './Genetics';

let nextFoodId = 1;
let nextVentId = 1;

export class Simulation {
  public width: number;
  public height: number;

  public creatures: Creature[] = [];
  public foodParticles: FoodParticle[] = [];
  public vents: HydrothermalVent[] = [];
  public marineSnow: MarineSnowParticle[] = [];

  public mutationMultiplier: number = 1.0;
  public mutagenTimer: number = 0;

  public stats: SimulationStats = {
    population: 0,
    maxGenerations: 1,
    filterFeeders: 0,
    hunters: 0,
    apexPredators: 0,
    scavengers: 0,
    totalBorn: 0,
    totalDeaths: 0,
    dominantColor: '#00f0ff'
  };

  public onEcosystemEvent?: (message: string, type: 'birth' | 'death' | 'extinction' | 'mutation' | 'god') => void;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.initEnvironment();
    this.seedAncestors();
  }

  private initEnvironment(): void {
    // Initialize hydrothermal vents along the seabed (bottom 25% of the ocean)
    const ventCount = Math.max(2, Math.floor(this.width / 400));
    for (let i = 0; i < ventCount; i++) {
      const ventX = (this.width / (ventCount + 1)) * (i + 1) + (Math.random() * 80 - 40);
      const ventY = this.height - 40 - Math.random() * 60;
      this.vents.push({
        id: `vent-${nextVentId++}`,
        pos: { x: ventX, y: ventY },
        energyOutput: 18,
        radius: 28,
        particlesTimer: 0
      });
    }

    // Initialize drifting marine snow particles
    const snowCount = Math.floor((this.width * this.height) / 12000);
    for (let i = 0; i < snowCount; i++) {
      this.marineSnow.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2.2 + 0.8,
        speedY: Math.random() * 12 + 6,
        speedX: (Math.random() - 0.5) * 6,
        opacity: Math.random() * 0.6 + 0.2
      });
    }
  }

  public seedAncestors(): void {
    // Seed initial diverse primordial population
    const filterDna = Genetics.createAncestor('filter', 170);
    const hunterDna = Genetics.createAncestor('hunter', 345);
    const scavDna = Genetics.createAncestor('scavenger', 50);

    // 12 Filter feeders
    for (let i = 0; i < 12; i++) {
      const c = new Creature(filterDna, {
        x: Math.random() * (this.width - 200) + 100,
        y: Math.random() * (this.height * 0.6) + 50
      }, 1);
      this.creatures.push(c);
      this.stats.totalBorn++;
    }

    // 4 Hunters
    for (let i = 0; i < 4; i++) {
      const c = new Creature(hunterDna, {
        x: Math.random() * (this.width - 200) + 100,
        y: Math.random() * (this.height * 0.7) + 80
      }, 1);
      this.creatures.push(c);
      this.stats.totalBorn++;
    }

    // 4 Scavengers near the bottom
    for (let i = 0; i < 4; i++) {
      const c = new Creature(scavDna, {
        x: Math.random() * (this.width - 200) + 100,
        y: this.height - 120 - Math.random() * 100
      }, 1);
      this.creatures.push(c);
      this.stats.totalBorn++;
    }

    // Initial food bloom
    this.spawnNutrientBloom(this.width * 0.5, this.height * 0.35, 40);
  }

  public update(dt: number): void {
    // Mutagen decay
    if (this.mutagenTimer > 0) {
      this.mutagenTimer -= dt;
      if (this.mutagenTimer <= 0) {
        this.mutationMultiplier = 1.0;
      }
    }

    // 1. Update Marine Snow
    for (const snow of this.marineSnow) {
      snow.y += snow.speedY * dt;
      snow.x += snow.speedX * dt;
      if (snow.y > this.height) {
        snow.y = -5;
        snow.x = Math.random() * this.width;
      }
    }

    // 2. Update Hydrothermal Vents & spawn mineral plumes
    for (const vent of this.vents) {
      vent.particlesTimer += dt;
      if (vent.particlesTimer > 0.4) {
        vent.particlesTimer = 0;
        if (this.foodParticles.length < 140) {
          const spread = Math.random() * 20 - 10;
          this.foodParticles.push({
            id: `food-${nextFoodId++}`,
            pos: { x: vent.pos.x + spread, y: vent.pos.y - 25 },
            vel: { x: (Math.random() - 0.5) * 8, y: -Math.random() * 25 - 15 },
            energy: 16,
            type: 'vent_mineral',
            radius: 3.5,
            hue: 35 + Math.random() * 20, // Warm geothermal amber
            lifespan: 30,
            age: 0
          });
        }
      }
    }

    // 3. Ambient Plankton Influx from upper waters
    if (Math.random() < 0.25 && this.foodParticles.length < 160) {
      this.foodParticles.push({
        id: `food-${nextFoodId++}`,
        pos: { x: Math.random() * this.width, y: Math.random() * (this.height * 0.4) },
        vel: { x: (Math.random() - 0.5) * 4, y: Math.random() * 8 + 2 },
        energy: 12,
        type: 'plankton',
        radius: 2.8,
        hue: 165 + Math.random() * 30, // Bioluminescent cyan-green
        lifespan: 45,
        age: 0
      });
    }

    // 4. Update Food Particles physics & aging
    for (let i = this.foodParticles.length - 1; i >= 0; i--) {
      const food = this.foodParticles[i];
      food.age += dt;
      food.pos.x += food.vel.x * dt;
      food.pos.y += food.vel.y * dt;

      // Friction & buoyancy
      food.vel.x *= 0.98;
      food.vel.y *= 0.98;

      if (food.age > food.lifespan || food.pos.y > this.height + 10) {
        this.foodParticles.splice(i, 1);
      }
    }

    // 5. Update Creatures
    const newborns: Creature[] = [];
    for (let i = this.creatures.length - 1; i >= 0; i--) {
      const creature = this.creatures[i];
      const baby = creature.update(
        dt,
        this.width,
        this.height,
        this.creatures,
        this.foodParticles,
        this.mutationMultiplier
      );

      if (baby) {
        newborns.push(baby);
        this.stats.totalBorn++;
        if (baby.generation > this.stats.maxGenerations) {
          this.stats.maxGenerations = baby.generation;
        }
        if (baby.mutations.length > 0 && this.onEcosystemEvent) {
          this.onEcosystemEvent(`${baby.name} born (Gen ${baby.generation}): ${baby.mutations.join(', ')}`, 'mutation');
        }
      }

      // Handle creature death
      if (creature.isDead) {
        this.stats.totalDeaths++;
        // Turn corpse into sinking detritus for benthic scavengers
        const detritusCount = Math.max(2, Math.floor(creature.dna.size / 4));
        for (let d = 0; d < detritusCount; d++) {
          this.foodParticles.push({
            id: `detritus-${nextFoodId++}`,
            pos: { x: creature.pos.x + (Math.random() * 16 - 8), y: creature.pos.y + (Math.random() * 16 - 8) },
            vel: { x: (Math.random() - 0.5) * 6, y: Math.random() * 14 + 10 },
            energy: 15,
            type: 'detritus',
            radius: 3.2,
            hue: 25,
            lifespan: 50,
            age: 0
          });
        }
        this.creatures.splice(i, 1);
      }
    }

    // Add newborns
    for (const b of newborns) {
      this.creatures.push(b);
    }

    // 6. Extinction Safeguard: if population falls dangerously low (< 5), seed new spores
    if (this.creatures.length < 5) {
      const emergencyDna = Genetics.createAncestor(Math.random() > 0.4 ? 'filter' : 'scavenger');
      const rescue = new Creature(emergencyDna, {
        x: Math.random() * (this.width - 200) + 100,
        y: Math.random() * (this.height * 0.5) + 100
      }, this.stats.maxGenerations);
      this.creatures.push(rescue);
      this.spawnNutrientBloom(rescue.pos.x, rescue.pos.y, 20);
      if (this.onEcosystemEvent) {
        this.onEcosystemEvent('Deep current carried new primordial spores into the abyss.', 'birth');
      }
    }

    // 7. Recalculate stats
    this.updateStats();
  }

  private updateStats(): void {
    let filters = 0;
    let hunters = 0;
    let apex = 0;
    let scavs = 0;
    let hueSum = 0;

    for (const c of this.creatures) {
      if (c.dna.diet === 'apex') apex++;
      else if (c.dna.diet === 'hunter') hunters++;
      else if (c.dna.diet === 'scavenger') scavs++;
      else filters++;
      hueSum += c.dna.hue;
    }

    this.stats.population = this.creatures.length;
    this.stats.filterFeeders = filters;
    this.stats.hunters = hunters;
    this.stats.apexPredators = apex;
    this.stats.scavengers = scavs;
    
    if (this.creatures.length > 0) {
      const avgHue = Math.round(hueSum / this.creatures.length);
      this.stats.dominantColor = `hsl(${avgHue}, 100%, 65%)`;
    }
  }

  // --- GOD TOOLS ---

  public spawnNutrientBloom(x: number, y: number, count: number = 30): void {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 80;
      this.foodParticles.push({
        id: `bloom-${nextFoodId++}`,
        pos: { x: x + Math.cos(angle) * dist, y: y + Math.sin(angle) * dist },
        vel: { x: (Math.random() - 0.5) * 10, y: (Math.random() - 0.5) * 10 },
        energy: 16,
        type: 'plankton',
        radius: 3.2,
        hue: 155 + Math.random() * 45,
        lifespan: 50,
        age: 0
      });
    }
    if (this.onEcosystemEvent) {
      this.onEcosystemEvent('Nutrient bloom saturated local waters.', 'god');
    }
  }

  public spawnVent(x: number, y: number): void {
    this.vents.push({
      id: `vent-${nextVentId++}`,
      pos: { x, y: Math.max(this.height * 0.6, y) },
      energyOutput: 24,
      radius: 32,
      particlesTimer: 0
    });
    if (this.onEcosystemEvent) {
      this.onEcosystemEvent('A new geothermal hydrothermal chimney erupted!', 'god');
    }
  }

  public triggerMutagenBurst(): void {
    this.mutagenTimer = 30; // 30 seconds of high mutation
    this.mutationMultiplier = 4.5;
    if (this.onEcosystemEvent) {
      this.onEcosystemEvent('Mutagenic radiation wave triggered! Evolutionary divergence accelerated 4.5x.', 'mutation');
    }
  }

  public spawnLeviathan(x: number, y: number): Creature {
    const leviathanDna = Genetics.createAncestor('apex', 270);
    leviathanDna.size = 38;
    leviathanDna.segments = 12;
    leviathanDna.finSpan = 2.4;
    leviathanDna.tentacleCount = 6;
    leviathanDna.maxSpeed = 160;
    leviathanDna.thrustPower = 320;
    leviathanDna.sensoryRadius = 380;
    leviathanDna.glowIntensity = 1.0;
    leviathanDna.pulseRate = 0.8;
    leviathanDna.reproduceThreshold = 350;
    leviathanDna.lifespan = 300;

    const leviathan = new Creature(leviathanDna, { x, y }, this.stats.maxGenerations + 1, 'Deep Trench Titan', ['Leviathan Colossus']);
    this.creatures.push(leviathan);
    this.stats.totalBorn++;
    if (this.onEcosystemEvent) {
      this.onEcosystemEvent('A colossal Apex Leviathan emerged from the hadal trench!', 'god');
    }
    return leviathan;
  }

  public cullPopulation(): void {
    const cullCount = Math.floor(this.creatures.length * 0.5);
    for (let i = 0; i < cullCount; i++) {
      if (this.creatures.length <= 4) break;
      const target = this.creatures[Math.floor(Math.random() * this.creatures.length)];
      target.isDead = true;
    }
    if (this.onEcosystemEvent) {
      this.onEcosystemEvent(`Extinction wave culled ${cullCount} organisms. Surviving lineages are adapting.`, 'extinction');
    }
  }

  public findCreatureAt(worldPos: Vector2D): Creature | null {
    for (let i = this.creatures.length - 1; i >= 0; i--) {
      const c = this.creatures[i];
      const d = Math.hypot(c.pos.x - worldPos.x, c.pos.y - worldPos.y);
      if (d < c.dna.size * 2 + 10) {
        return c;
      }
    }
    return null;
  }
}
