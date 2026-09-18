export type DietType = 'filter' | 'hunter' | 'apex' | 'scavenger';
export type LureType = 'none' | 'angler_light' | 'defensive_flash';

export interface Vector2D {
  x: number;
  y: number;
}

export interface DNA {
  // Morphology
  size: number;              // Base radius / scale (e.g. 6 to 28)
  segments: number;          // Trailing body segment count (3 to 10)
  finSpan: number;           // Lateral fin size (0.5 to 2.0)
  tentacleCount: number;     // Number of trailing tentacles (0 to 6)
  
  // Bioluminescence & Color
  hue: number;               // 0 - 360 (color wheel)
  glowIntensity: number;     // 0.2 - 1.0 (photophore glow power)
  pulseRate: number;         // Rate of luminescence pulsing
  lure: LureType;            // Glowing lure on head

  // Locomotion & Physics
  maxSpeed: number;          // Pixels per second
  turnSpeed: number;         // Radians per second
  thrustPower: number;       // Acceleration multiplier

  // Perception & Behavior
  sensoryRadius: number;     // Distance creature can detect food/threats
  diet: DietType;            // What it eats and hunts
  cautiousness: number;      // 0 (reckless) - 1 (very skittish / flees early)
  aggression: number;        // 0 (peaceful) - 1 (actively attacks others)

  // Metabolism & Reproduction
  metabolism: number;        // Energy burned per second (scales with speed and mass)
  reproduceThreshold: number;// Energy needed to divide/mate
  lifespan: number;          // Max age in seconds before natural death
}

export type CreatureAction = 'foraging' | 'stalking' | 'fleeing' | 'mating' | 'resting' | 'wandering';

export interface CreatureState {
  id: string;
  name: string;
  generation: number;
  parentName?: string;
  mutations: string[];
  
  // Physics & Position
  pos: Vector2D;
  vel: Vector2D;
  angle: number;
  segments: Vector2D[];
  
  // Physiology
  energy: number;
  maxEnergy: number;
  age: number;
  health: number;
  isDead: boolean;
  pulsePhase: number;
  flashTimer: number;        // For defensive flash
  
  // Genetics
  dna: DNA;
  
  // AI
  action: CreatureAction;
  targetPos: Vector2D | null;
  targetId: string | null;
}

export type FoodType = 'plankton' | 'vent_mineral' | 'detritus';

export interface FoodParticle {
  id: string;
  pos: Vector2D;
  vel: Vector2D;
  energy: number;
  type: FoodType;
  radius: number;
  hue: number;
  lifespan: number;
  age: number;
}

export interface HydrothermalVent {
  id: string;
  pos: Vector2D;
  energyOutput: number;
  radius: number;
  particlesTimer: number;
}

export interface MarineSnowParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export type GodTool = 'inspect' | 'nutrient' | 'vent' | 'mutagen' | 'leviathan' | 'cull';

export interface SimulationStats {
  population: number;
  maxGenerations: number;
  filterFeeders: number;
  hunters: number;
  apexPredators: number;
  scavengers: number;
  totalBorn: number;
  totalDeaths: number;
  dominantColor: string;
}
