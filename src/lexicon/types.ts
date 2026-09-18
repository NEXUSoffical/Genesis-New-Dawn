export type DifficultyTier = 'sprout' | 'weaver' | 'scribe';

export type PartOfSpeech = 'article' | 'adjective' | 'noun' | 'verb' | 'preposition' | 'adverb';

export type GameMode = 'actions' | 'quests' | 'adjectives' | 'builder';

export type EntityAction = 'idle' | 'hopping' | 'dancing' | 'sleeping' | 'eating' | 'flying' | 'fire';

export interface WordToken {
  id: string;
  text: string;
  partOfSpeech: PartOfSpeech;
  icon: string;
  color: string;
  definition: string;
  phonicsPitch?: number;
}

export interface ParsedSentence {
  tokens: WordToken[];
  rawText: string;
  isValid: boolean;
  errorMessage?: string;
  subjectNoun?: WordToken;
  adjective?: WordToken;
  verb?: WordToken;
  prepositionPhrase?: WordToken;
  adverb?: WordToken;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

export interface IslandEntity {
  id: string;
  name: string;
  icon: string;
  nounId: string;
  x: number;
  y: number;
  baseY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  scale: number;
  targetScale: number;
  squashX: number;
  squashY: number;
  rotation: number;
  action: EntityAction;
  actionTimer: number;
  glowColor?: string;
  glowRadius?: number;
  colorFilter?: string; // 'rainbow' | 'ice' | 'gold' | 'fire'
  frozen?: boolean;
  particles: Particle[];
  speechBubble?: { text: string; timer: number };
  createdTime: number;
}

export interface GrammarPuzzle {
  id: string;
  tier: DifficultyTier;
  question: string;
  sentencePrompt: string; // e.g. "The rabbit hops across the ______."
  targetPart: PartOfSpeech;
  correctWord: WordToken;
  distractors: WordToken[];
  explanation: string;
  visualReward: {
    nounId: string;
    action: EntityAction;
    targetLocation: 'meadow' | 'bridge' | 'castle' | 'river' | 'tree';
    reactionText: string;
  };
}

export interface StoryQuest {
  id: string;
  title: string;
  tier: DifficultyTier;
  npcName: string;
  npcTitle: string;
  npcAvatar: string;
  npcColor: string;
  storyPrompt: string;
  challengeInstruction: string;
  expectedKeywords: {
    noun?: string[];
    adjective?: string[];
    verb?: string[];
    preposition?: string[];
  };
  hintSteps: string[];
  explanation: string;
  successDialogue: string;
  rewardGems: number;
}

export interface LexiconState {
  tier: DifficultyTier;
  mode: GameMode;
  gems: number;
  completedQuestIds: string[];
  completedPuzzleIds: string[];
  activeQuestId: string;
  soundEnabled: boolean;
}
