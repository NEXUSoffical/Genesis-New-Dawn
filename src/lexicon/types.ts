export type DifficultyTier = 'sprout' | 'weaver' | 'scribe';

export type PartOfSpeech = 'article' | 'adjective' | 'noun' | 'verb' | 'preposition' | 'adverb';

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
  x: number;
  y: number;
  baseY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  scale: number;
  targetScale: number;
  state: 'idle' | 'moving' | 'sleeping' | 'dancing' | 'flying' | 'glowing';
  glowColor?: string;
  glowRadius?: number;
  frozen?: boolean;
  translucent?: boolean;
  particles: Particle[];
  creationSentence: string;
  createdTime: number;
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
  gems: number;
  completedQuestIds: string[];
  activeQuestId: string;
  soundEnabled: boolean;
  sandboxMode: boolean;
}
