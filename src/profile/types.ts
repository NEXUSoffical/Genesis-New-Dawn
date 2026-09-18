export interface UserProfile {
  id: string;
  email: string;
  username: string;
  level: number;
  currentXp: number;
  xpToNextLevel: number;
  totalXp: number;
  title: string;
  stats: {
    gamesPlayed: number;
    abyssGenerations: number;
    genesisEra: string;
    playtimeMinutes: number;
  };
}

export interface XpEvent {
  amount: number;
  reason: string;
  game: string;
  leveledUp: boolean;
  newLevel?: number;
  newTitle?: string;
}

export const TITLES: { minLevel: number; title: string }[] = [
  { minLevel: 1, title: 'Primordial Wanderer' },
  { minLevel: 2, title: 'Abyss Observer' },
  { minLevel: 3, title: 'Ecological Scholar' },
  { minLevel: 4, title: 'Ecosystem Engineer' },
  { minLevel: 5, title: 'Genesis Pioneer' },
  { minLevel: 7, title: 'Biome Sovereign' },
  { minLevel: 10, title: 'Cosmic Architect' },
  { minLevel: 15, title: 'Genesis Deity' }
];

export function calculateXpForLevel(level: number): number {
  return Math.round(100 * Math.pow(level, 1.35));
}

export function getTitleForLevel(level: number): string {
  let matched = TITLES[0].title;
  for (const t of TITLES) {
    if (level >= t.minLevel) {
      matched = t.title;
    }
  }
  return matched;
}
