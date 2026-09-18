import { WordToken, ParsedSentence, DifficultyTier, GrammarPuzzle } from '../types';

export const WORD_BANK: Record<string, WordToken> = {
  // Articles
  the: { id: 'the', text: 'The', partOfSpeech: 'article', icon: '✨', color: '#94a3b8', definition: 'Points to a specific thing.' },
  a: { id: 'a', text: 'A', partOfSpeech: 'article', icon: '✨', color: '#94a3b8', definition: 'Points to any single creature or thing.' },

  // Nouns (Blue)
  rabbit: { id: 'rabbit', text: 'Bunny', partOfSpeech: 'noun', icon: '🐰', color: '#3b82f6', definition: 'A fluffy hopping animal with long ears.' },
  dragon: { id: 'dragon', text: 'Dragon', partOfSpeech: 'noun', icon: '🐲', color: '#3b82f6', definition: 'A magical creature that can breathe fire.' },
  frog: { id: 'frog', text: 'Frog', partOfSpeech: 'noun', icon: '🐸', color: '#3b82f6', definition: 'A green amphibious jumper.' },
  bear: { id: 'bear', text: 'Bear', partOfSpeech: 'noun', icon: '🐻', color: '#3b82f6', definition: 'A strong, cuddly woodland protector.' },
  castle: { id: 'castle', text: 'Castle', partOfSpeech: 'noun', icon: '🏰', color: '#3b82f6', definition: 'A grand stone fortress with towers.' },
  flower: { id: 'flower', text: 'Flower', partOfSpeech: 'noun', icon: '🌸', color: '#3b82f6', definition: 'A blooming colorful plant.' },
  tree: { id: 'tree', text: 'Willow Tree', partOfSpeech: 'noun', icon: '🌳', color: '#3b82f6', definition: 'An ancient leafy tree of wisdom.' },
  carrot: { id: 'carrot', text: 'Carrot', partOfSpeech: 'noun', icon: '🥕', color: '#3b82f6', definition: 'A crunchy orange snack.' },
  river: { id: 'river', text: 'River', partOfSpeech: 'noun', icon: '🌊', color: '#3b82f6', definition: 'A flowing stream of freshwater.' },

  // Verbs (Emerald Green)
  hops: { id: 'hops', text: 'hops', partOfSpeech: 'verb', icon: '🦘', color: '#10b981', definition: 'Leaps and bounces springily.' },
  dances: { id: 'dances', text: 'dances', partOfSpeech: 'verb', icon: '💃', color: '#10b981', definition: 'Wiggles and moves to the music.' },
  eats: { id: 'eats', text: 'eats', partOfSpeech: 'verb', icon: '🥕', color: '#10b981', definition: 'Munches on a tasty meal.' },
  sleeps: { id: 'sleeps', text: 'sleeps', partOfSpeech: 'verb', icon: '💤', color: '#10b981', definition: 'Rests in peaceful slumber.' },
  flies: { id: 'flies', text: 'flies', partOfSpeech: 'verb', icon: '🦅', color: '#10b981', definition: 'Soars through the open sky.' },
  breathes_fire: { id: 'breathes_fire', text: 'breathes fire', partOfSpeech: 'verb', icon: '🔥', color: '#10b981', definition: 'Shoots bright sparks and flames.' },
  shines: { id: 'shines', text: 'shines', partOfSpeech: 'verb', icon: '✨', color: '#10b981', definition: 'Beams with brilliant light.' },

  // Adjectives (Purple)
  fluffy: { id: 'fluffy', text: 'fluffy', partOfSpeech: 'adjective', icon: '☁️', color: '#a855f7', definition: 'Soft and woolly to touch.' },
  gigantic: { id: 'gigantic', text: 'gigantic', partOfSpeech: 'adjective', icon: '🏔️', color: '#a855f7', definition: 'Enormous and towering.' },
  tiny: { id: 'tiny', text: 'tiny', partOfSpeech: 'adjective', icon: '🐜', color: '#a855f7', definition: 'Very small and cute.' },
  radiant: { id: 'radiant', text: 'radiant', partOfSpeech: 'adjective', icon: '🌟', color: '#a855f7', definition: 'Glowing with golden energy.' },
  frozen: { id: 'frozen', text: 'frozen', partOfSpeech: 'adjective', icon: '❄️', color: '#a855f7', definition: 'Turned to cool ice crystals.' },
  rainbow: { id: 'rainbow', text: 'rainbow', partOfSpeech: 'adjective', icon: '🌈', color: '#a855f7', definition: 'Shifting through all the colors.' },
  happy: { id: 'happy', text: 'happy', partOfSpeech: 'adjective', icon: '💖', color: '#a855f7', definition: 'Full of joy and good cheer.' },

  // Prepositions (Amber)
  in_meadow: { id: 'in_meadow', text: 'in the meadow', partOfSpeech: 'preposition', icon: '🌾', color: '#f59e0b', definition: 'In the green grassy field.' },
  across_bridge: { id: 'across_bridge', text: 'across the bridge', partOfSpeech: 'preposition', icon: '🌉', color: '#f59e0b', definition: 'Over the stone river arch.' },
  near_castle: { id: 'near_castle', text: 'near the castle', partOfSpeech: 'preposition', icon: '🏰', color: '#f59e0b', definition: 'By the royal stone towers.' },
  under_tree: { id: 'under_tree', text: 'under the willow tree', partOfSpeech: 'preposition', icon: '🍃', color: '#f59e0b', definition: 'Under the shady leaves.' }
};

export const GRAMMAR_PUZZLES: GrammarPuzzle[] = [
  {
    id: 'pz_verb_hop',
    tier: 'sprout',
    question: 'Choose the ACTION word (Verb) to make the bunny move!',
    sentencePrompt: 'The fluffy bunny _______ across the clover.',
    targetPart: 'verb',
    correctWord: WORD_BANK.hops,
    distractors: [
      WORD_BANK.carrot,
      WORD_BANK.fluffy
    ],
    explanation: '“Hops” is a VERB! Verbs are action words that show what someone or something does.',
    visualReward: {
      nounId: 'rabbit',
      action: 'hopping',
      targetLocation: 'meadow',
      reactionText: 'Boing! Boing!'
    }
  },
  {
    id: 'pz_noun_food',
    tier: 'sprout',
    question: 'Choose the THING (Noun) for the bunny to eat!',
    sentencePrompt: 'The happy bunny eats a crunchy _______.',
    targetPart: 'noun',
    correctWord: WORD_BANK.carrot,
    distractors: [
      WORD_BANK.dances,
      WORD_BANK.frozen
    ],
    explanation: '“Carrot” is a NOUN! Nouns are words for people, animals, places, or things (like food).',
    visualReward: {
      nounId: 'rabbit',
      action: 'eating',
      targetLocation: 'meadow',
      reactionText: 'Nom nom nom! 🥕'
    }
  },
  {
    id: 'pz_adj_dragon',
    tier: 'sprout',
    question: 'Choose the DESCRIBING word (Adjective) for the dragon!',
    sentencePrompt: 'The _______ dragon glows like pure sunshine.',
    targetPart: 'adjective',
    correctWord: WORD_BANK.radiant,
    distractors: [
      WORD_BANK.flies,
      WORD_BANK.castle
    ],
    explanation: '“Radiant” is an ADJECTIVE! Adjectives describe how things look, feel, or sound.',
    visualReward: {
      nounId: 'dragon',
      action: 'dancing',
      targetLocation: 'castle',
      reactionText: 'I am radiant! ✨'
    }
  },
  {
    id: 'pz_verb_fly',
    tier: 'weaver',
    question: 'What action does the majestic dragon do in the sky?',
    sentencePrompt: 'The golden dragon _______ high above the cloud castle.',
    targetPart: 'verb',
    correctWord: WORD_BANK.flies,
    distractors: [
      WORD_BANK.tree,
      WORD_BANK.tiny
    ],
    explanation: '“Flies” is a VERB! It tells what action the dragon is doing.',
    visualReward: {
      nounId: 'dragon',
      action: 'flying',
      targetLocation: 'castle',
      reactionText: 'Soaring through the clouds!'
    }
  },
  {
    id: 'pz_prep_bridge',
    tier: 'weaver',
    question: 'Where is the brave bear walking? Choose the PREPOSITION!',
    sentencePrompt: 'The bear marches _______ to reach the secret tower.',
    targetPart: 'preposition',
    correctWord: WORD_BANK.across_bridge,
    distractors: [
      WORD_BANK.sleeps,
      WORD_BANK.rainbow
    ],
    explanation: '“Across the bridge” is a PREPOSITIONAL phrase! It tells WHERE the action is happening.',
    visualReward: {
      nounId: 'bear',
      action: 'dancing',
      targetLocation: 'bridge',
      reactionText: 'Crossing the bridge!'
    }
  },
  {
    id: 'pz_verb_fire',
    tier: 'scribe',
    question: 'The friendly dragon wants to roast marshmallows! What verb does it use?',
    sentencePrompt: 'The magical dragon _______ to light the campfire.',
    targetPart: 'verb',
    correctWord: WORD_BANK.breathes_fire,
    distractors: [
      WORD_BANK.river,
      WORD_BANK.frozen
    ],
    explanation: '“Breathes fire” is the action VERB showing how the dragon lights the campfire!',
    visualReward: {
      nounId: 'dragon',
      action: 'fire',
      targetLocation: 'tree',
      reactionText: 'Roaaar! Warm fire! 🔥'
    }
  }
];

export class GrammarEngine {
  public static getPuzzlesForTier(tier: DifficultyTier): GrammarPuzzle[] {
    if (tier === 'sprout') {
      return GRAMMAR_PUZZLES.filter(p => p.tier === 'sprout');
    }
    return GRAMMAR_PUZZLES;
  }

  public static parse(tokens: WordToken[], _tier: DifficultyTier): ParsedSentence {
    if (tokens.length === 0) {
      return {
        tokens,
        rawText: '',
        isValid: false,
        errorMessage: 'Choose words to build your sentence!'
      };
    }

    const rawText = tokens.map(t => t.text).join(' ');

    let subjectNoun: WordToken | undefined;
    let adjective: WordToken | undefined;
    let verb: WordToken | undefined;
    let prepositionPhrase: WordToken | undefined;

    tokens.forEach(t => {
      if (t.partOfSpeech === 'noun') subjectNoun = t;
      if (t.partOfSpeech === 'adjective') adjective = t;
      if (t.partOfSpeech === 'verb') verb = t;
      if (t.partOfSpeech === 'preposition') prepositionPhrase = t;
    });

    if (!subjectNoun) {
      return {
        tokens,
        rawText,
        isValid: false,
        errorMessage: 'Add a NOUN (like Bunny, Dragon, or Bear) so we know WHO the sentence is about!'
      };
    }

    if (!verb) {
      return {
        tokens,
        rawText,
        isValid: false,
        errorMessage: 'Add a VERB (like hops, dances, or eats) so we know WHAT they are doing!'
      };
    }

    return {
      tokens,
      rawText,
      isValid: true,
      subjectNoun,
      adjective,
      verb,
      prepositionPhrase
    };
  }
}
