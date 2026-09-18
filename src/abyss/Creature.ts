import { CreatureState, CreatureAction, DNA, Vector2D, FoodParticle } from './types';
import { Genetics } from './Genetics';

let nextId = 1;

export class Creature implements CreatureState {
  public id: string;
  public name: string;
  public generation: number;
  public parentName?: string;
  public mutations: string[];

  public pos: Vector2D;
  public vel: Vector2D;
  public angle: number;
  public segments: Vector2D[];

  public energy: number;
  public maxEnergy: number;
  public age: number = 0;
  public health: number = 100;
  public isDead: boolean = false;
  public pulsePhase: number = Math.random() * Math.PI * 2;
  public flashTimer: number = 0;

  public dna: DNA;
  public action: CreatureAction = 'wandering';
  public targetPos: Vector2D | null = null;
  public targetId: string | null = null;

  private wanderAngle: number = Math.random() * Math.PI * 2;
  private reproductionCooldown: number = 6.0; // Seconds after birth before reproducing

  constructor(dna: DNA, pos: Vector2D, generation: number = 1, parentName?: string, mutations: string[] = []) {
    this.id = `creature-${nextId++}`;
    this.dna = dna;
    this.name = Genetics.generateSpeciesName(dna);
    this.generation = generation;
    this.parentName = parentName;
    this.mutations = mutations;

    this.pos = { ...pos };
    this.angle = Math.random() * Math.PI * 2;
    this.vel = {
      x: Math.cos(this.angle) * (dna.maxSpeed * 0.4),
      y: Math.sin(this.angle) * (dna.maxSpeed * 0.4)
    };

    // Initialize trailing body segments along initial angle
    this.segments = [];
    const segSpacing = Math.max(4, dna.size * 0.7);
    for (let i = 1; i <= dna.segments; i++) {
      this.segments.push({
        x: this.pos.x - Math.cos(this.angle) * (i * segSpacing),
        y: this.pos.y - Math.sin(this.angle) * (i * segSpacing)
      });
    }

    this.maxEnergy = dna.reproduceThreshold * 1.5;
    this.energy = dna.reproduceThreshold * 0.7; // Start with healthy energy
  }

  public update(
    dt: number,
    worldWidth: number,
    worldHeight: number,
    nearbyCreatures: Creature[],
    nearbyFood: FoodParticle[],
    mutationMultiplier: number
  ): Creature | null {
    if (this.isDead) return null;

    this.age += dt;
    this.reproductionCooldown = Math.max(0, this.reproductionCooldown - dt);
    this.pulsePhase += dt * this.dna.pulseRate * Math.PI * 2;
    if (this.flashTimer > 0) this.flashTimer -= dt;

    // 1. Metabolism & Lifespan
    const speed = Math.hypot(this.vel.x, this.vel.y);
    const speedRatio = speed / (this.dna.maxSpeed || 1);
    const burnRate = this.dna.metabolism * (0.6 + 0.8 * speedRatio);
    this.energy -= burnRate * dt;

    if (this.energy <= 0 || this.age > this.dna.lifespan) {
      this.isDead = true;
      return null;
    }

    // 2. AI Decision Loop
    this.evaluateAI(nearbyCreatures, nearbyFood);

    // 3. Physics & Steering
    this.applySteering(dt, worldWidth, worldHeight);

    // 4. Update trailing spine segments with undulating swimming motion
    this.updateSpine();

    // 5. Check Feeding Collision
    this.checkFeeding(nearbyFood, nearbyCreatures);

    // 6. Reproduction Check
    if (this.energy >= this.dna.reproduceThreshold && this.reproductionCooldown <= 0) {
      return this.reproduce(mutationMultiplier, worldWidth, worldHeight);
    }

    return null;
  }

  private evaluateAI(nearbyCreatures: Creature[], nearbyFood: FoodParticle[]): void {
    let nearestThreat: Creature | null = null;
    let minThreatDist = this.dna.sensoryRadius;

    let nearestPrey: Creature | null = null;
    let minPreyDist = this.dna.sensoryRadius;

    // Detect other organisms
    for (const other of nearbyCreatures) {
      if (other.id === this.id || other.isDead) continue;
      const dist = Math.hypot(other.pos.x - this.pos.x, other.pos.y - this.pos.y);

      // Threat detection: other creature is significantly bigger or an aggressive hunter
      const isThreat = (other.dna.size > this.dna.size * 1.3 && other.dna.aggression > 0.4) ||
                       (this.dna.diet === 'filter' && (other.dna.diet === 'hunter' || other.dna.diet === 'apex'));

      if (isThreat && dist < minThreatDist) {
        minThreatDist = dist;
        nearestThreat = other;
      }

      // Prey detection for hunters and apex
      const isPrey = (this.dna.diet === 'hunter' || this.dna.diet === 'apex') &&
                     (other.dna.size < this.dna.size * 0.85);

      if (isPrey && dist < minPreyDist) {
        minPreyDist = dist;
        nearestPrey = other;
      }
    }

    // High priority: Flee from danger
    if (nearestThreat && Math.random() < this.dna.cautiousness * 1.5) {
      this.action = 'fleeing';
      this.targetId = nearestThreat.id;
      // Flee in opposite direction
      const angleAway = Math.atan2(this.pos.y - nearestThreat.pos.y, this.pos.x - nearestThreat.pos.x);
      this.targetPos = {
        x: this.pos.x + Math.cos(angleAway) * 200,
        y: this.pos.y + Math.sin(angleAway) * 200
      };

      // Trigger defensive flash if available and threatened closely
      if (this.dna.lure === 'defensive_flash' && minThreatDist < 80 && this.flashTimer <= 0) {
        this.flashTimer = 2.5;
      }
      return;
    }

    // Medium priority: Hunting prey for carnivores
    if ((this.dna.diet === 'hunter' || this.dna.diet === 'apex') && nearestPrey) {
      this.action = 'stalking';
      this.targetId = nearestPrey.id;
      this.targetPos = { ...nearestPrey.pos };
      return;
    }

    // Foraging for plankton / minerals / detritus
    if (this.energy < this.maxEnergy * 0.85 && nearbyFood.length > 0) {
      let bestFood: FoodParticle | null = null;
      let minFoodDist = this.dna.sensoryRadius;

      for (const food of nearbyFood) {
        // Scavengers prefer detritus; Filter feeders eat plankton & minerals
        let affinity = 1.0;
        if (this.dna.diet === 'scavenger' && food.type === 'detritus') affinity = 2.0;
        if (this.dna.diet === 'filter' && food.type !== 'detritus') affinity = 1.5;

        const dist = Math.hypot(food.pos.x - this.pos.x, food.pos.y - this.pos.y) / affinity;
        if (dist < minFoodDist) {
          minFoodDist = dist;
          bestFood = food;
        }
      }

      if (bestFood) {
        this.action = 'foraging';
        this.targetId = bestFood.id;
        this.targetPos = { ...bestFood.pos };
        return;
      }
    }

    // Default: Wandering gracefully
    this.action = 'wandering';
    this.targetId = null;
    this.targetPos = null;
  }

  private applySteering(dt: number, worldWidth: number, worldHeight: number): void {
    let desiredAngle = this.angle;
    let targetSpeed = this.dna.maxSpeed * 0.5;

    if (this.action === 'fleeing' && this.targetPos) {
      desiredAngle = Math.atan2(this.targetPos.y - this.pos.y, this.targetPos.x - this.pos.x);
      targetSpeed = this.dna.maxSpeed * 1.25; // Adrenaline sprint
    } else if (this.action === 'stalking' && this.targetPos) {
      desiredAngle = Math.atan2(this.targetPos.y - this.pos.y, this.targetPos.x - this.pos.x);
      targetSpeed = this.dna.maxSpeed * 1.1; // Burst strike
    } else if (this.action === 'foraging' && this.targetPos) {
      desiredAngle = Math.atan2(this.targetPos.y - this.pos.y, this.targetPos.x - this.pos.x);
      targetSpeed = this.dna.maxSpeed * 0.8;
    } else {
      // Gentle ocean wander
      this.wanderAngle += (Math.random() - 0.5) * 0.8;
      desiredAngle = this.wanderAngle;
      targetSpeed = this.dna.maxSpeed * 0.45;
    }

    // Boundary repulsion to stay comfortably within world bounds
    const margin = 120;
    let steerAwayX = 0;
    let steerAwayY = 0;
    if (this.pos.x < margin) steerAwayX = 1;
    else if (this.pos.x > worldWidth - margin) steerAwayX = -1;
    if (this.pos.y < margin) steerAwayY = 1;
    else if (this.pos.y > worldHeight - margin) steerAwayY = -1;

    if (steerAwayX !== 0 || steerAwayY !== 0) {
      desiredAngle = Math.atan2(steerAwayY, steerAwayX);
      targetSpeed = this.dna.maxSpeed * 0.8;
    }

    // Smooth angle interpolation
    let diff = desiredAngle - this.angle;
    while (diff < -Math.PI) diff += Math.PI * 2;
    while (diff > Math.PI) diff -= Math.PI * 2;
    this.angle += Math.max(-this.dna.turnSpeed * dt, Math.min(this.dna.turnSpeed * dt, diff));

    // Update velocity with acceleration smoothing
    const targetVelX = Math.cos(this.angle) * targetSpeed;
    const targetVelY = Math.sin(this.angle) * targetSpeed;
    const accel = this.dna.thrustPower * dt;

    this.vel.x += (targetVelX - this.vel.x) * Math.min(1.0, accel * 0.05);
    this.vel.y += (targetVelY - this.vel.y) * Math.min(1.0, accel * 0.05);

    // Apply translation
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;

    // Hard clamp to world edge
    this.pos.x = Math.max(10, Math.min(worldWidth - 10, this.pos.x));
    this.pos.y = Math.max(10, Math.min(worldHeight - 10, this.pos.y));
  }

  private updateSpine(): void {
    const segDist = Math.max(5, this.dna.size * 0.7);
    let prevPos = this.pos;
    const speed = Math.hypot(this.vel.x, this.vel.y);
    const waveFreq = 4.0 + (speed / this.dna.maxSpeed) * 6.0;

    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      const dx = seg.x - prevPos.x;
      const dy = seg.y - prevPos.y;
      let angle = Math.atan2(dy, dx);

      // Add gentle sine wave undulating swim wiggle
      const wave = Math.sin(this.pulsePhase * waveFreq - i * 0.6) * 0.18;
      angle += wave;

      seg.x = prevPos.x + Math.cos(angle) * segDist;
      seg.y = prevPos.y + Math.sin(angle) * segDist;
      prevPos = seg;
    }
  }

  private checkFeeding(nearbyFood: FoodParticle[], nearbyCreatures: Creature[]): void {
    const eatRadius = this.dna.size + 8;

    // 1. Eat food particles
    for (let i = nearbyFood.length - 1; i >= 0; i--) {
      const food = nearbyFood[i];
      const d = Math.hypot(food.pos.x - this.pos.x, food.pos.y - this.pos.y);
      if (d < eatRadius + food.radius) {
        this.energy = Math.min(this.maxEnergy, this.energy + food.energy);
        nearbyFood.splice(i, 1);
      }
    }

    // 2. Carnivores hunting smaller creatures
    if (this.dna.diet === 'hunter' || this.dna.diet === 'apex') {
      for (const prey of nearbyCreatures) {
        if (prey.id === this.id || prey.isDead) continue;
        if (prey.dna.size < this.dna.size * 0.85) {
          const d = Math.hypot(prey.pos.x - this.pos.x, prey.pos.y - this.pos.y);
          if (d < eatRadius + prey.dna.size * 0.5) {
            // Successful capture & consumption!
            prey.isDead = true;
            this.energy = Math.min(this.maxEnergy, this.energy + prey.energy * 0.75 + 30);
            this.action = 'wandering';
          }
        }
      }
    }
  }

  private reproduce(mutationMultiplier: number, worldWidth: number, worldHeight: number): Creature {
    // Deduct reproduction energy cost from parent
    const energyCost = this.dna.reproduceThreshold * 0.5;
    this.energy -= energyCost;
    this.reproductionCooldown = 12.0; // Cooldown before parent can reproduce again

    const { dna: childDNA, mutationLog } = Genetics.mutate(this.dna, mutationMultiplier);

    // Spawn child slightly behind parent
    const spawnAngle = this.angle + Math.PI + (Math.random() - 0.5);
    const childPos: Vector2D = {
      x: Math.max(50, Math.min(worldWidth - 50, this.pos.x + Math.cos(spawnAngle) * (this.dna.size * 2))),
      y: Math.max(50, Math.min(worldHeight - 50, this.pos.y + Math.sin(spawnAngle) * (this.dna.size * 2)))
    };

    const child = new Creature(
      childDNA,
      childPos,
      this.generation + 1,
      this.name,
      mutationLog
    );
    child.energy = energyCost * 0.9;
    return child;
  }
}
