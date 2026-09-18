import { DNA, DietType, LureType } from './types';

const PREFIXES = [
  'Bio', 'Abysso', 'Bathyo', 'Necto', 'Pelago', 'Lumi', 'Hadalo', 'Cteno', 'Chondro',
  'Sireno', 'Phasma', 'Vipera', 'Nocti', 'Scoto', 'Cryo', 'Glauco', 'Aura'
];

const ROOTS = [
  'lumina', 'ceros', 'peltis', 'nyx', 'draco', 'squilla', 'hydra', 'stoma', 'pterix',
  'mysis', 'nema', 'thrix', 'scypha', 'morph', 'phora', 'typhla', 'brachia'
];

const SUFFIXES = [
  'velox', 'vorax', 'elegans', 'radiata', 'grandis', 'atrox', 'obscura', 'lucida',
  'mirabilis', 'ferox', 'vulgaris', 'abyssalis', 'gigas', 'pallida', 'minima'
];

export class Genetics {
  public static generateSpeciesName(dna: DNA): string {
    const p = PREFIXES[Math.floor((dna.hue / 360) * PREFIXES.length) % PREFIXES.length];
    const rIndex = Math.floor((dna.size / 30) * ROOTS.length) % ROOTS.length;
    const r = ROOTS[rIndex];
    
    let s = SUFFIXES[0];
    if (dna.diet === 'apex') s = 'gigas';
    else if (dna.diet === 'hunter') s = 'vorax';
    else if (dna.maxSpeed > 130) s = 'velox';
    else if (dna.glowIntensity > 0.8) s = 'lucida';
    else if (dna.diet === 'scavenger') s = 'obscura';
    else s = SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];

    return `${p}${r} ${s}`;
  }

  public static createAncestor(diet: DietType = 'filter', posHue?: number): DNA {
    const hue = posHue !== undefined ? posHue : (diet === 'hunter' ? 340 : diet === 'apex' ? 280 : diet === 'scavenger' ? 45 : 175);
    
    if (diet === 'apex') {
      return {
        size: 24,
        segments: 8,
        finSpan: 1.8,
        tentacleCount: 4,
        hue,
        glowIntensity: 0.9,
        pulseRate: 1.2,
        lure: 'angler_light',
        maxSpeed: 140,
        turnSpeed: 2.8,
        thrustPower: 220,
        sensoryRadius: 280,
        diet: 'apex',
        cautiousness: 0.1,
        aggression: 0.95,
        metabolism: 2.8,
        reproduceThreshold: 220,
        lifespan: 140
      };
    }

    if (diet === 'hunter') {
      return {
        size: 15,
        segments: 6,
        finSpan: 1.4,
        tentacleCount: 2,
        hue,
        glowIntensity: 0.85,
        pulseRate: 1.8,
        lure: Math.random() > 0.5 ? 'angler_light' : 'none',
        maxSpeed: 165,
        turnSpeed: 3.5,
        thrustPower: 280,
        sensoryRadius: 240,
        diet: 'hunter',
        cautiousness: 0.3,
        aggression: 0.8,
        metabolism: 1.9,
        reproduceThreshold: 140,
        lifespan: 110
      };
    }

    if (diet === 'scavenger') {
      return {
        size: 13,
        segments: 5,
        finSpan: 1.0,
        tentacleCount: 4,
        hue,
        glowIntensity: 0.6,
        pulseRate: 1.0,
        lure: 'defensive_flash',
        maxSpeed: 105,
        turnSpeed: 3.0,
        thrustPower: 180,
        sensoryRadius: 200,
        diet: 'scavenger',
        cautiousness: 0.7,
        aggression: 0.2,
        metabolism: 0.9,
        reproduceThreshold: 100,
        lifespan: 120
      };
    }

    // Standard Filter Feeder / Grazer
    return {
      size: 10,
      segments: 5,
      finSpan: 1.1,
      tentacleCount: 1,
      hue,
      glowIntensity: 0.75,
      pulseRate: 1.5,
      lure: 'none',
      maxSpeed: 115,
      turnSpeed: 3.2,
      thrustPower: 200,
      sensoryRadius: 180,
      diet: 'filter',
      cautiousness: 0.85,
      aggression: 0.05,
      metabolism: 0.8,
      reproduceThreshold: 80,
      lifespan: 100
    };
  }

  public static mutate(parentDNA: DNA, mutationRateMultiplier: number = 1.0): { dna: DNA; mutationLog: string[] } {
    const mutations: string[] = [];
    const chance = (prob: number) => Math.random() < prob * mutationRateMultiplier;
    const mutateNumber = (val: number, deltaPercent: number, min: number, max: number): number => {
      const delta = (Math.random() * 2 - 1) * deltaPercent * val;
      return Math.max(min, Math.min(max, val + delta));
    };

    const newDNA: DNA = { ...parentDNA };

    // Point mutations
    if (chance(0.35)) {
      const prev = newDNA.size;
      newDNA.size = mutateNumber(newDNA.size, 0.15, 6, 32);
      if (Math.abs(newDNA.size - prev) > 2) {
        mutations.push(newDNA.size > prev ? '+Body Mass' : '-Body Mass');
      }
    }

    if (chance(0.35)) {
      const prev = newDNA.maxSpeed;
      newDNA.maxSpeed = mutateNumber(newDNA.maxSpeed, 0.15, 60, 220);
      if (Math.abs(newDNA.maxSpeed - prev) > 10) {
        mutations.push(newDNA.maxSpeed > prev ? '+Fin Hydrodynamics' : '-Speed Tradeoff');
      }
    }

    if (chance(0.30)) {
      const prev = newDNA.sensoryRadius;
      newDNA.sensoryRadius = mutateNumber(newDNA.sensoryRadius, 0.2, 100, 360);
      if (Math.abs(newDNA.sensoryRadius - prev) > 20) {
        mutations.push(newDNA.sensoryRadius > prev ? '+Sensory Antennae' : '-Reduced Perception');
      }
    }

    if (chance(0.40)) {
      newDNA.hue = (newDNA.hue + (Math.random() * 40 - 20) + 360) % 360;
    }

    if (chance(0.25)) {
      newDNA.glowIntensity = Math.max(0.2, Math.min(1.0, newDNA.glowIntensity + (Math.random() * 0.3 - 0.15)));
    }

    if (chance(0.20)) {
      newDNA.pulseRate = Math.max(0.5, Math.min(4.0, newDNA.pulseRate + (Math.random() * 0.6 - 0.3)));
    }

    // Segment & Tentacle count shifts
    if (chance(0.15)) {
      const prevSeg = newDNA.segments;
      newDNA.segments = Math.max(3, Math.min(10, newDNA.segments + (Math.random() > 0.5 ? 1 : -1)));
      if (newDNA.segments !== prevSeg) mutations.push(newDNA.segments > prevSeg ? '+Extra Body Segment' : '-Fused Segment');
    }

    if (chance(0.12)) {
      const prevTen = newDNA.tentacleCount;
      newDNA.tentacleCount = Math.max(0, Math.min(6, newDNA.tentacleCount + (Math.random() > 0.5 ? 1 : -1)));
      if (newDNA.tentacleCount !== prevTen) mutations.push(newDNA.tentacleCount > prevTen ? '+Prehensile Tentacle' : '-Lost Tentacle');
    }

    // Macro-mutations: Lure development
    if (chance(0.08)) {
      const lures: LureType[] = ['none', 'angler_light', 'defensive_flash'];
      const nextLure = lures[Math.floor(Math.random() * lures.length)];
      if (nextLure !== newDNA.lure) {
        newDNA.lure = nextLure;
        mutations.push(`Evolved ${nextLure.replace('_', ' ')}`);
      }
    }

    // Diet shift (rare macro-mutation based on size/aggression)
    if (chance(0.05)) {
      if (newDNA.size > 18 && newDNA.diet !== 'apex') {
        newDNA.diet = 'apex';
        newDNA.aggression = 0.9;
        newDNA.cautiousness = 0.1;
        mutations.push('Ascended to Apex Predator');
      } else if (newDNA.size > 13 && newDNA.diet === 'filter') {
        newDNA.diet = 'hunter';
        newDNA.aggression = 0.7;
        mutations.push('Diet shifted to Carnivore');
      } else if (newDNA.diet === 'hunter' && Math.random() < 0.3) {
        newDNA.diet = 'scavenger';
        mutations.push('Adapted to Benthic Scavenging');
      }
    }

    // Recalculate metabolism cost: bigger body + higher speed = higher fuel burn
    const massFactor = Math.pow(newDNA.size / 10, 1.6);
    const speedFactor = newDNA.maxSpeed / 100;
    newDNA.metabolism = Math.max(0.4, Number((0.6 * massFactor * speedFactor).toFixed(2)));
    newDNA.reproduceThreshold = Math.max(50, Math.round(75 * massFactor));

    return { dna: newDNA, mutationLog: mutations };
  }
}
