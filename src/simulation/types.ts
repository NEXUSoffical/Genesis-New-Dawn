export type TileType = 
  | 'grass' 
  | 'dense_forest' 
  | 'sparse_trees' 
  | 'water' 
  | 'deep_water' 
  | 'stone_hill' 
  | 'clay_pit' 
  | 'fertile_soil' 
  | 'copper_vein' 
  | 'iron_vein' 
  | 'gold_vein' 
  | 'dirt_path' 
  | 'cobblestone_road'
  | 'farm_wheat'
  | 'farm_corn';

export type ItemType =
  // Raw materials
  | 'berries'
  | 'wild_seeds'
  | 'stick'
  | 'flint'
  | 'stone'
  | 'clay'
  | 'wood_log'
  | 'copper_ore'
  | 'iron_ore'
  | 'gold_ore'
  // Crafted tools & goods
  | 'stone_axe'
  | 'flint_spear'
  | 'stone_hammer'
  | 'woven_basket'
  | 'clay_bowl'
  | 'clay_pot'
  | 'copper_ingot'
  | 'iron_ingot'
  | 'copper_axe'
  | 'iron_tools'
  // Food & agriculture
  | 'cooked_food'
  | 'raw_meat'
  | 'cooked_meat'
  | 'harvested_wheat'
  | 'flour'
  | 'bread'
  // Animal products & hunting
  | 'animal_hide'
  | 'raw_wool'
  | 'bone'
  | 'tanned_leather'
  | 'fresh_fish'
  | 'cooked_fish'
  | 'fish_trap'
  | 'winter_cloak'
  // Equine, Nautical, Military & Culture
  | 'braided_lasso'
  | 'wooden_boat'
  | 'cargo_cart'
  | 'written_scroll'
  | 'wooden_shield'
  | 'hunting_bow'
  // Economy & construction
  | 'firewood'
  | 'mud_brick'
  | 'timber_plank'
  | 'cut_stone'
  | 'gold_coin'
  | 'linen_cloth'
  | 'fine_clothes';

export type BuildingType =
  | 'campfire'
  | 'lean_to'
  | 'mud_hut'
  | 'thatched_cabin'
  | 'farm_plot'
  | 'clay_kiln'
  | 'animal_pen'
  | 'storage_barn'
  | 'stone_well'
  | 'smelter'
  | 'blacksmith'
  | 'windmill'
  | 'bakery'
  | 'timber_house'
  | 'masonry_house'
  | 'market_stall'
  | 'mint_bank'
  | 'town_hall'
  | 'watchtower'
  | 'fountain'
  | 'ancestral_cairn'
  | 'settlement_totem'
  | 'wooden_bridge'
  | 'waterwheel'
  | 'horse_stable'
  | 'dock_pier'
  | 'great_library'
  | 'timber_palisade'
  | 'watch_gate'
  | 'stone_aqueduct'
  | 'water_cistern';

export type TechEra = 'primeval' | 'neolithic' | 'bronze' | 'medieval' | 'renaissance';

export interface Technology {
  id: string;
  name: string;
  era: TechEra;
  description: string;
  icon: string;
  requiredResearch: number;
  researchProgress: number; // 0 to requiredResearch
  prerequisites: string[];
  requiredItems?: Partial<Record<ItemType, number>>;
  unlocksBuildings: BuildingType[];
  unlocksItems: ItemType[];
  discovered: boolean;
  discoveredBy?: string;
  discoveredAtDay?: number;
}

export interface Building {
  id: string;
  type: BuildingType;
  x: number;
  y: number;
  level: number;
  hp: number;
  maxHp: number;
  builderId?: string;
  assignedWorkers: string[];
  storage: Partial<Record<ItemType, number>>;
  maxStorage: number;
  progress: number; // 0 to 100 for construction
  isCompleted: boolean;
  meta?: Record<string, any>;
}

export interface Tile {
  x: number;
  y: number;
  type: TileType;
  resourceAmount: number; // e.g. wood count, stone count, berries
  maxResource: number;
  regrowthRate: number; // per day tick
  building?: Building;
  elevation: number;
  moisture: number;
  isRevealed: boolean;
  isInSight: boolean;
}

export interface Chunk {
  cx: number;
  cy: number;
  tiles: Tile[][]; // 16x16
}

export interface AgentNeeds {
  hunger: number;     // 0 = starving, 100 = full
  energy: number;     // 0 = exhausted, 100 = energized
  warmth: number;     // 0 = freezing, 100 = warm
  social: number;     // 0 = lonely, 100 = fulfilled
  curiosity: number;  // 0 = bored, 100 = inspired
  health: number;     // 0 = deceased, 100 = prime
}

export type AgentRole = 
  | 'Pioneer' 
  | 'Forager' 
  | 'Woodcutter' 
  | 'Builder' 
  | 'Farmer' 
  | 'Potter' 
  | 'Smith' 
  | 'Miller' 
  | 'Baker' 
  | 'Merchant' 
  | 'Scholar' 
  | 'Mayor'
  | 'Hunter'
  | 'Elder'
  | 'Apprentice'
  | 'Child'
  | 'Infant';

export interface AgentRelationship {
  targetId: string;
  affection: number; // 0 to 100
  trust: number;     // 0 to 100
  lastInteracted: number;
  stage?: 'strangers' | 'friends' | 'crush' | 'in_love' | 'betrothed' | 'married';
}

export interface AgentMemory {
  text: string;
  day: number;
  importance: number;
}

export interface AgentTask {
  name: string;
  type: 'foraging' | 'chopping' | 'striking_fire' | 'building' | 'researching' | 'crafting' | 'resting' | 'socializing';
  progress: number;
  duration: number; // in seconds
  targetX?: number;
  targetY?: number;
}

export interface Agent {
  id: string;
  name: string;
  gender: 'male' | 'female';
  age: number; // in simulation days
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX?: number;
  targetY?: number;
  facing: 'left' | 'right' | 'up' | 'down';
  color: string;
  avatarSeed: number;
  needs: AgentNeeds;
  role: AgentRole;
  inventory: Partial<Record<ItemType, number>>;
  maxCarryWeight: number;
  equippedTool?: ItemType;
  relationships: Record<string, AgentRelationship>;
  spouseId?: string;
  isPregnant?: boolean;
  pregnancyProgress?: number; // 0 to 100
  childrenIds: string[];
  parentsIds: string[];
  generation: number;
  memories: AgentMemory[];
  currentGoal: string;
  currentAction: string;
  activeThought: string;
  thoughtTimer: number;
  speechBubble?: { text: string; timer: number; isSpeech: boolean };
  activeTask?: AgentTask;
  path: { x: number; y: number }[];
  stateTimer: number;
  coins: number;
  knowledge: Set<string>;
  huntCooldown?: number;
  huntChaseTimer?: number;
  lifeStage?: 'infant' | 'child' | 'apprentice' | 'adult' | 'elder';
  apprenticeTrade?: 'farmer' | 'builder' | 'hunter' | 'blacksmith' | 'artisan';
  isDeceased?: boolean;
  deceasedDay?: number;
  memorialCairnId?: string;
  hasWinterCloak?: boolean;
  isShivering?: boolean;
  isRidingHorse?: boolean;
  isInBoat?: boolean;
  hasCargoCart?: boolean;
  isDancingSolstice?: boolean;
}

export interface MarketItem {
  item: ItemType;
  name: string;
  category: 'food' | 'material' | 'tool' | 'luxury' | 'construction';
  basePrice: number;
  currentPrice: number;
  supply: number;
  demand: number;
  totalVolumeTraded: number;
  history: number[]; // recent prices for graph
}

export interface ChronicleEvent {
  id: string;
  day: number;
  timeStr: string;
  title: string;
  description: string;
  category: 'discovery' | 'milestone' | 'birth' | 'construction' | 'economy' | 'social';
  icon: string;
}

export interface SimulationStats {
  population: number;
  totalBuildings: number;
  gdp: number;
  totalCoinsCirculating: number;
  era: TechEra;
  technologiesUnlocked: number;
  exploredChunks: number;
  averageHappiness: number;
}

export type AnimalSpecies = 'rabbit' | 'deer' | 'wolf' | 'sheep' | 'dog' | 'horse';

export interface Animal {
  id: string;
  species: AnimalSpecies;
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX?: number;
  targetY?: number;
  health: number;
  maxHealth: number;
  facing: 'left' | 'right';
  state: 'grazing' | 'wandering' | 'drinking' | 'fleeing' | 'hunting' | 'sleeping' | 'following_owner';
  stateTimer: number;
  hunger: number;
  isDomesticated: boolean;
  tameProgress: number; // 0 to 100
  ownerId?: string;
  name?: string;
  hasWool?: boolean;
  isSaddled?: boolean;
  riderId?: string;
}
