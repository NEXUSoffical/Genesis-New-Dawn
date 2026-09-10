import { Animal, AnimalSpecies, Agent } from './types';
import { WorldManager } from './World';

export class FaunaManager {
  public animals: Animal[] = [];
  private spawnTimer: number = 0;
  private readonly MAX_ANIMALS = 24;

  constructor(private world: WorldManager) {
    this.spawnInitialWildlife();
  }

  private spawnInitialWildlife(): void {
    // Spawn pleasant initial fauna around the spawn clearing
    // 4 wild rabbits in meadows
    for (let i = 0; i < 4; i++) {
      const x = (Math.random() - 0.5) * 16 + (Math.random() > 0.5 ? 6 : -6);
      const y = (Math.random() - 0.5) * 16 + (Math.random() > 0.5 ? 6 : -6);
      this.animals.push(this.createAnimal('rabbit', x, y));
    }

    // 2-3 graceful deer roaming grasslands
    for (let i = 0; i < 3; i++) {
      const x = (Math.random() - 0.5) * 20 + 8;
      const y = (Math.random() - 0.5) * 20 - 8;
      this.animals.push(this.createAnimal('deer', x, y));
    }

    // 2 wild sheep on rocky knolls
    for (let i = 0; i < 2; i++) {
      const x = -10 + (Math.random() - 0.5) * 6;
      const y = 8 + (Math.random() - 0.5) * 6;
      this.animals.push(this.createAnimal('sheep', x, y));
    }

    // 2 wild horses grazing on the wide savanna meadow
    for (let i = 0; i < 2; i++) {
      const x = 14 + (Math.random() - 0.5) * 8;
      const y = 10 + (Math.random() - 0.5) * 8;
      this.animals.push(this.createAnimal('horse', x, y));
    }

    // 1 solitary wolf at forest edge
    const wx = (Math.random() > 0.5 ? 14 : -14);
    const wy = (Math.random() > 0.5 ? 12 : -12);
    this.animals.push(this.createAnimal('wolf', wx, wy));
  }

  public createAnimal(species: AnimalSpecies, x: number, y: number, name?: string): Animal {
    const id = `fauna_${species}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const maxHp = species === 'rabbit' ? 10 : species === 'sheep' ? 25 : species === 'deer' ? 35 : species === 'wolf' ? 40 : species === 'horse' ? 65 : 35;

    return {
      id,
      species,
      x,
      y,
      vx: 0,
      vy: 0,
      health: maxHp,
      maxHealth: maxHp,
      facing: Math.random() > 0.5 ? 'left' : 'right',
      state: 'grazing',
      stateTimer: Math.random() * 5,
      hunger: 80,
      isDomesticated: species === 'dog',
      tameProgress: species === 'dog' ? 100 : 0,
      name: name || (species === 'dog' ? 'Rover' : undefined),
      hasWool: species === 'sheep' ? true : undefined,
      isSaddled: false,
    };
  }

  public update(deltaSec: number, agents: Agent[]): void {
    const isNight = this.world.timeOfDay >= 21.0 || this.world.timeOfDay < 5.5;

    for (let i = this.animals.length - 1; i >= 0; i--) {
      const animal = this.animals[i];
      animal.stateTimer -= deltaSec;

      // Check if deceased
      if (animal.health <= 0) {
        this.animals.splice(i, 1);
        continue;
      }

      // Domesticated Dog AI
      if (animal.species === 'dog' && animal.ownerId) {
        this.updateDogBehavior(animal, agents, isNight, deltaSec);
        continue;
      }

      // Horse Mounted or Domesticated AI
      if (animal.species === 'horse') {
        if (animal.riderId) {
          const rider = agents.find((a) => a.id === animal.riderId);
          if (rider && rider.isRidingHorse) {
            animal.x = rider.x;
            animal.y = rider.y + 0.1;
            animal.facing = rider.facing === 'left' ? 'left' : 'right';
            animal.state = 'following_owner';
            continue;
          } else {
            animal.riderId = undefined;
          }
        }
        if (animal.isDomesticated && animal.ownerId && !animal.riderId) {
          const owner = agents.find((a) => a.id === animal.ownerId);
          if (owner) {
            const d = Math.hypot(owner.x - animal.x, owner.y - animal.y);
            if (d > 3.5) {
              const angle = Math.atan2(owner.y - animal.y, owner.x - animal.x);
              animal.vx = Math.cos(angle) * 1.8;
              animal.vy = Math.sin(angle) * 1.8;
            } else {
              animal.vx = 0;
              animal.vy = 0;
            }
            animal.x += animal.vx * deltaSec;
            animal.y += animal.vy * deltaSec;
            continue;
          }
        }
      }

      // Nighttime sleep for wild animals
      if (isNight && animal.state !== 'fleeing') {
        animal.state = 'sleeping';
        animal.vx = 0;
        animal.vy = 0;
        continue;
      }

      // Check threat proximity (humans and wolves scare herbivores)
      if (animal.species === 'rabbit' || animal.species === 'deer' || animal.species === 'sheep') {
        if (animal.state !== 'fleeing') {
          const threat = this.findNearestThreat(animal, agents);
          if (threat) {
            animal.state = 'fleeing';
            // Sheep tire out quickly (1.8s), rabbits (2.2s), deer (3.0s)
            animal.stateTimer = animal.species === 'sheep' ? 1.8 : animal.species === 'rabbit' ? 2.2 : 3.0;
            // Flee in opposite direction
            const angle = Math.atan2(animal.y - threat.y, animal.x - threat.x);
            // Slower realistic flee speeds so hunters can catch them: sheep 1.0, rabbit 2.2, deer 2.5
            const fleeSpeed = animal.species === 'rabbit' ? 2.2 : animal.species === 'deer' ? 2.5 : 1.0;
            animal.vx = Math.cos(angle) * fleeSpeed;
            animal.vy = Math.sin(angle) * fleeSpeed;
            animal.facing = animal.vx >= 0 ? 'right' : 'left';
          }
        }
      }

      // Wolf predator logic
      if (animal.species === 'wolf') {
        // Wolves fear fire and campfire light!
        const nearFire = this.isNearFire(animal.x, animal.y);
        if (nearFire) {
          animal.state = 'fleeing';
          animal.stateTimer = 5.0;
          const angle = Math.atan2(animal.y - nearFire.y, animal.x - nearFire.x);
          animal.vx = Math.cos(angle) * 2.8;
          animal.vy = Math.sin(angle) * 2.8;
        } else if (animal.state !== 'fleeing' && animal.stateTimer <= 0) {
          // Hunt nearby rabbit or deer
          const prey = this.findNearestPrey(animal);
          if (prey) {
            animal.state = 'hunting';
            const dist = Math.hypot(prey.x - animal.x, prey.y - animal.y);
            if (dist <= 0.8) {
              prey.health -= 15;
              animal.stateTimer = 3.0;
              animal.state = 'grazing';
            } else {
              const angle = Math.atan2(prey.y - animal.y, prey.x - animal.x);
              animal.vx = Math.cos(angle) * 2.2;
              animal.vy = Math.sin(angle) * 2.2;
            }
          } else {
            this.setRandomWander(animal, 1.0);
          }
        }
      }

      // General Herbivore wandering / grazing
      if (animal.stateTimer <= 0) {
        if (animal.state === 'fleeing') {
          // Animal tired out from sprinting; catches breath in place
          animal.state = 'grazing';
          animal.vx = 0;
          animal.vy = 0;
          animal.stateTimer = animal.species === 'sheep' ? 4.0 : 3.0;
        } else if (Math.random() < 0.6) {
          animal.state = 'grazing';
          animal.vx = 0;
          animal.vy = 0;
          animal.stateTimer = 4 + Math.random() * 6;
        } else {
          this.setRandomWander(animal, animal.species === 'rabbit' ? 1.0 : 0.7);
        }
      }

      // Apply movement physics
      animal.x += animal.vx * deltaSec;
      animal.y += animal.vy * deltaSec;

      if (Math.abs(animal.vx) > 0.1) {
        animal.facing = animal.vx >= 0 ? 'right' : 'left';
      }
    }

    // Gentle natural fauna respawning over time
    this.spawnTimer += deltaSec;
    if (this.spawnTimer >= 60.0 && this.animals.length < this.MAX_ANIMALS) {
      this.spawnTimer = 0;
      this.spawnAmbientWildAnimal();
    }
  }

  private updateDogBehavior(dog: Animal, agents: Agent[], isNight: boolean, deltaSec: number): void {
    const owner = agents.find((a) => a.id === dog.ownerId);
    if (!owner) return;

    const dist = Math.hypot(owner.x - dog.x, owner.y - dog.y);

    if (isNight) {
      // Sleep faithfully right next to human owner
      dog.state = 'sleeping';
      if (dist > 1.2) {
        const angle = Math.atan2(owner.y - dog.y, owner.x - dog.x);
        dog.x += Math.cos(angle) * 2.0 * deltaSec;
        dog.y += Math.sin(angle) * 2.0 * deltaSec;
      } else {
        dog.vx = 0;
        dog.vy = 0;
      }
      return;
    }

    if (dist > 2.5) {
      dog.state = 'following_owner';
      const angle = Math.atan2(owner.y - dog.y, owner.x - dog.x);
      dog.vx = Math.cos(angle) * 2.2;
      dog.vy = Math.sin(angle) * 2.2;
      dog.x += dog.vx * deltaSec;
      dog.y += dog.vy * deltaSec;
      dog.facing = dog.vx >= 0 ? 'right' : 'left';
    } else {
      dog.state = 'wandering';
      dog.vx = 0;
      dog.vy = 0;
    }
  }

  private findNearestThreat(animal: Animal, agents: Agent[]): { x: number; y: number } | null {
    const fleeDist = animal.species === 'rabbit' ? 2.8 : animal.species === 'sheep' ? 2.2 : 3.8;
    for (const agent of agents) {
      const d = Math.hypot(agent.x - animal.x, agent.y - animal.y);
      if (d <= fleeDist) return agent;
    }
    // Check wild wolves
    for (const other of this.animals) {
      if (other.species === 'wolf') {
        const d = Math.hypot(other.x - animal.x, other.y - animal.y);
        if (d <= fleeDist) return other;
      }
    }
    return null;
  }

  private findNearestPrey(wolf: Animal): Animal | null {
    let nearest: Animal | null = null;
    let minDist = 8.0;

    for (const other of this.animals) {
      if (other.species === 'rabbit' || other.species === 'deer') {
        const d = Math.hypot(other.x - wolf.x, other.y - wolf.y);
        if (d < minDist) {
          minDist = d;
          nearest = other;
        }
      }
    }
    return nearest;
  }

  private isNearFire(x: number, y: number): { x: number; y: number } | null {
    for (const b of this.world.buildings.values()) {
      if (b.type === 'campfire' && b.isCompleted) {
        const d = Math.hypot(b.x - x, b.y - y);
        if (d <= 5.0) return b;
      }
    }
    return null;
  }

  private setRandomWander(animal: Animal, speed: number): void {
    animal.state = 'wandering';
    const angle = Math.random() * Math.PI * 2;
    animal.vx = Math.cos(angle) * speed;
    animal.vy = Math.sin(angle) * speed;
    animal.stateTimer = 2.0 + Math.random() * 3.0;
  }

  private spawnAmbientWildAnimal(): void {
    const speciesList: AnimalSpecies[] = ['rabbit', 'deer', 'sheep', 'wolf'];
    const weights = [0.45, 0.30, 0.15, 0.10];
    let r = Math.random();
    let chosen: AnimalSpecies = 'rabbit';
    for (let i = 0; i < weights.length; i++) {
      if (r < weights[i]) {
        chosen = speciesList[i];
        break;
      }
      r -= weights[i];
    }

    const angle = Math.random() * Math.PI * 2;
    const dist = 16 + Math.random() * 12;
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist;
    this.animals.push(this.createAnimal(chosen, x, y));
  }

  public getNearestHuntable(x: number, y: number, maxDist = 12): Animal | null {
    let best: Animal | null = null;
    let minDist = maxDist;

    for (const animal of this.animals) {
      if (animal.isDomesticated) continue;
      const d = Math.hypot(animal.x - x, animal.y - y);
      if (d < minDist) {
        minDist = d;
        best = animal;
      }
    }
    return best;
  }

  public getNearestTameableWolf(x: number, y: number, maxDist = 8): Animal | null {
    for (const animal of this.animals) {
      if (animal.species === 'wolf' && !animal.isDomesticated) {
        const d = Math.hypot(animal.x - x, animal.y - y);
        if (d <= maxDist) return animal;
      }
    }
    return null;
  }

  public tameWolfIntoDog(wolf: Animal, owner: Agent, dogName: string): Animal {
    wolf.species = 'dog';
    wolf.isDomesticated = true;
    wolf.tameProgress = 100;
    wolf.ownerId = owner.id;
    wolf.name = dogName;
    wolf.state = 'following_owner';
    return wolf;
  }

  public getNearestTameableHorse(x: number, y: number, maxDist = 10): Animal | null {
    for (const animal of this.animals) {
      if (animal.species === 'horse' && !animal.isDomesticated) {
        const d = Math.hypot(animal.x - x, animal.y - y);
        if (d <= maxDist) return animal;
      }
    }
    return null;
  }

  public tameHorse(horse: Animal, owner: Agent, horseName?: string): Animal {
    horse.isDomesticated = true;
    horse.tameProgress = 100;
    horse.ownerId = owner.id;
    horse.isSaddled = true;
    horse.name = horseName || 'Shadowfax';
    horse.state = 'following_owner';
    return horse;
  }
}
