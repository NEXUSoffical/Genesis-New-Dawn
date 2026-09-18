export type DifficultyLevel = 'apprentice' | 'journeyman' | 'master';

export type ItemCategory = 'bakery' | 'blacksmith' | 'alchemist' | 'farm' | 'trinket';

export interface ShopItem {
  id: string;
  name: string;
  icon: string;
  basePrice: number;
  unit: string;
  category: ItemCategory;
  description: string;
}

export type VillagerMood = 'happy' | 'thinking' | 'impatient' | 'ecstatic' | 'disappointed';

export interface VillagerArchetype {
  id: string;
  name: string;
  title: string;
  avatar: string; // Emoji or SVG representation
  color: string;
  favoriteCategory: ItemCategory;
  dialogueStyle: {
    greeting: string[];
    waiting: string[];
    delighted: string[];
    confused: string[];
  };
  voicePitch: number; // For procedural Web Audio sound
}

export type MathProblemType = 
  | 'count'          // Apprentice: count up coins or items
  | 'addition'       // Apprentice / Journeyman: sum of items
  | 'subtraction'    // Apprentice / Journeyman: change due
  | 'multiplication' // Journeyman: bundles (N items * P coins)
  | 'division'       // Journeyman / Master: equal shares or unit cost
  | 'fraction'       // Master: filling potion flask (e.g. 3/4, 2/3)
  | 'discount';      // Master: percentage off festival price

export interface CustomerOrder {
  id: string;
  customer: VillagerArchetype;
  problemType: MathProblemType;
  storyDialogue: string;
  instructionText: string;
  items: Array<{ item: ShopItem; count: number }>;
  coinPaid?: number; // When making change
  targetValue: number; // The numeric answer expected
  fractionValue?: { numerator: number; denominator: number }; // For fraction challenges
  hintSteps: string[];
  explanation: string;
  rewardCoins: number;
  reputationGain: number;
}

export interface CoinRegisterState {
  gold: number;   // 10 coins
  silver: number; // 5 coins
  bronze: number; // 1 coin
}

export interface VillageBuilding {
  id: 'bakery' | 'blacksmith' | 'alchemist' | 'farm' | 'town_square';
  name: string;
  level: number;
  maxLevel: number;
  cost: number;
  unlocked: boolean;
  icon: string;
  description: string;
  benefit: string;
}

export interface TownState {
  coins: number;
  prosperity: number;
  customersServed: number;
  day: number;
  difficulty: DifficultyLevel;
  buildings: Record<string, VillageBuilding>;
  soundEnabled: boolean;
}
