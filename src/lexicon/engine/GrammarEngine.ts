import { WordToken, PartOfSpeech, ParsedSentence, DifficultyTier } from '../types';

export const WORD_BANK: Record<string, WordToken> = {
  // Articles
  the: { id: 'the', text: 'The', partOfSpeech: 'article', icon: '✨', color: '#94a3b8', definition: 'A special word pointing to a specific thing.' },
  a: { id: 'a', text: 'A', partOfSpeech: 'article', icon: '✨', color: '#94a3b8', definition: 'Points to any single person, animal, or thing.' },

  // Adjectives (Purple / Violet)
  luminous: { id: 'luminous', text: 'luminous', partOfSpeech: 'adjective', icon: '🌟', color: '#a855f7', definition: 'Glowing brightly with magical light.' },
  gigantic: { id: 'gigantic', text: 'gigantic', partOfSpeech: 'adjective', icon: '🏔️', color: '#a855f7', definition: 'Huge, towering, and enormous in size.' },
  gentle: { id: 'gentle', text: 'gentle', partOfSpeech: 'adjective', icon: '🌸', color: '#a855f7', definition: 'Soft, calm, and kind.' },
  frozen: { id: 'frozen', text: 'frozen', partOfSpeech: 'adjective', icon: '❄️', color: '#a855f7', definition: 'Turned into hard, icy crystal.' },
  radiant: { id: 'radiant', text: 'radiant', partOfSpeech: 'adjective', icon: '☀️', color: '#a855f7', definition: 'Beaming with warmth, sun, and energy.' },
  tiny: { id: 'tiny', text: 'tiny', partOfSpeech: 'adjective', icon: '🔍', color: '#a855f7', definition: 'Very small and adorable.' },
  golden: { id: 'golden', text: 'golden', partOfSpeech: 'adjective', icon: '🪙', color: '#a855f7', definition: 'Shining with the rich luster of pure gold.' },
  brave: { id: 'brave', text: 'brave', partOfSpeech: 'adjective', icon: '🛡️', color: '#a855f7', definition: 'Ready to face danger without fear.' },
  fluffy: { id: 'fluffy', text: 'fluffy', partOfSpeech: 'adjective', icon: '☁️', color: '#a855f7', definition: 'Light, soft, and woolly.' },

  // Nouns (Blue)
  rabbit: { id: 'rabbit', text: 'rabbit', partOfSpeech: 'noun', icon: '🐇', color: '#3b82f6', definition: 'A cute furry woodland creature with long ears.' },
  dragon: { id: 'dragon', text: 'dragon', partOfSpeech: 'noun', icon: '🐉', color: '#3b82f6', definition: 'A majestic winged reptile breathing spark and wonder.' },
  bridge: { id: 'bridge', text: 'bridge', partOfSpeech: 'noun', icon: '🌉', color: '#3b82f6', definition: 'A wooden or stone path spanning across water or a chasm.' },
  raincloud: { id: 'raincloud', text: 'raincloud', partOfSpeech: 'noun', icon: '🌧️', color: '#3b82f6', definition: 'A floating cloud showering nourishing water.' },
  lantern: { id: 'lantern', text: 'lantern', partOfSpeech: 'noun', icon: '🏮', color: '#3b82f6', definition: 'A glowing lamp that pierces the darkness.' },
  castle: { id: 'castle', text: 'castle', partOfSpeech: 'noun', icon: '🏰', color: '#3b82f6', definition: 'A grand fortress with towers and pennants.' },
  flower: { id: 'flower', text: 'flower', partOfSpeech: 'noun', icon: '🌷', color: '#3b82f6', definition: 'A vibrant plant blossom with petals of sweet nectar.' },
  wolf: { id: 'wolf', text: 'wolf', partOfSpeech: 'noun', icon: '🐺', color: '#3b82f6', definition: 'A loyal sentinel creature of the northern woods.' },
  owl: { id: 'owl', text: 'owl', partOfSpeech: 'noun', icon: '🦉', color: '#3b82f6', definition: 'A nocturnal bird of deep wisdom.' },
  tree: { id: 'tree', text: 'tree', partOfSpeech: 'noun', icon: '🌳', color: '#3b82f6', definition: 'A tall leafy plant rooted deep into the earth.' },

  // Adverbs (Teal)
  peacefully: { id: 'peacefully', text: 'peacefully', partOfSpeech: 'adverb', icon: '🕊️', color: '#14b8a6', definition: 'In a calm, quiet, and tranquil manner.' },
  gracefully: { id: 'gracefully', text: 'gracefully', partOfSpeech: 'adverb', icon: '🩰', color: '#14b8a6', definition: 'With smooth, elegant beauty.' },
  swiftly: { id: 'swiftly', text: 'swiftly', partOfSpeech: 'adverb', icon: '⚡', color: '#14b8a6', definition: 'With great speed and nimble agility.' },
  courageously: { id: 'courageously', text: 'courageously', partOfSpeech: 'adverb', icon: '🦁', color: '#14b8a6', definition: 'With bold heart and bravery.' },

  // Verbs (Emerald Green)
  hops: { id: 'hops', text: 'hops', partOfSpeech: 'verb', icon: '🦘', color: '#10b981', definition: 'Leaps lightly on springy feet.' },
  glides: { id: 'glides', text: 'glides', partOfSpeech: 'verb', icon: '🦅', color: '#10b981', definition: 'Sails smoothly through the air without flapping.' },
  shines: { id: 'shines', text: 'shines', partOfSpeech: 'verb', icon: '✨', color: '#10b981', definition: 'Radiates bright sparkling light.' },
  sleeps: { id: 'sleeps', text: 'sleeps', partOfSpeech: 'verb', icon: '💤', color: '#10b981', definition: 'Rests quietly in peaceful slumber.' },
  dances: { id: 'dances', text: 'dances', partOfSpeech: 'verb', icon: '💃', color: '#10b981', definition: 'Moves playfully to the rhythm of nature.' },
  melts: { id: 'melts', text: 'melts', partOfSpeech: 'verb', icon: '💧', color: '#10b981', definition: 'Transforms solid cold ice into flowing warm water.' },
  blooms: { id: 'blooms', text: 'blooms', partOfSpeech: 'verb', icon: '🌺', color: '#10b981', definition: 'Unfurls radiant petals in full color.' },
  protects: { id: 'protects', text: 'protects', partOfSpeech: 'verb', icon: '🛡️', color: '#10b981', definition: 'Guards friends and shelters them from harm.' },
  builds: { id: 'builds', text: 'builds', partOfSpeech: 'verb', icon: '🔨', color: '#10b981', definition: 'Constructs sturdy foundations and beams.' },

  // Prepositions (Warm Orange / Amber)
  into_meadow: { id: 'into_meadow', text: 'into the meadow', partOfSpeech: 'preposition', icon: '🌾', color: '#f59e0b', definition: 'Moving inward toward the grassy fields.' },
  across_chasm: { id: 'across_chasm', text: 'across the chasm', partOfSpeech: 'preposition', icon: '🌉', color: '#f59e0b', definition: 'Stretching from one edge of the gorge to the other.' },
  under_tree: { id: 'under_tree', text: 'under the willow tree', partOfSpeech: 'preposition', icon: '🍃', color: '#f59e0b', definition: 'Beneath the shady green branches.' },
  above_lake: { id: 'above_lake', text: 'above the crystal lake', partOfSpeech: 'preposition', icon: '🌊', color: '#f59e0b', definition: 'In the open sky over the shimmering water.' },
  around_fire: { id: 'around_fire', text: 'around the campfire', partOfSpeech: 'preposition', icon: '🔥', color: '#f59e0b', definition: 'Circling the warm hearth stones.' },
  through_forest: { id: 'through_forest', text: 'through the enchanted woods', partOfSpeech: 'preposition', icon: '🌲', color: '#f59e0b', definition: 'Navigating between the mossy trunks.' }
};

export class GrammarEngine {
  /**
   * Parses and validates a sequence of tokens into a complete, executable sentence.
   */
  public static parse(tokens: WordToken[], tier: DifficultyTier): ParsedSentence {
    if (tokens.length === 0) {
      return {
        tokens,
        rawText: '',
        isValid: false,
        errorMessage: 'Tap or drag words to build your sentence spell!'
      };
    }

    const rawText = tokens.map(t => t.text).join(' ');

    let subjectNoun: WordToken | undefined;
    let adjective: WordToken | undefined;
    let verb: WordToken | undefined;
    let adverb: WordToken | undefined;
    let prepositionPhrase: WordToken | undefined;

    tokens.forEach(t => {
      if (t.partOfSpeech === 'noun') subjectNoun = t;
      if (t.partOfSpeech === 'adjective') adjective = t;
      if (t.partOfSpeech === 'verb') verb = t;
      if (t.partOfSpeech === 'adverb') adverb = t;
      if (t.partOfSpeech === 'preposition') prepositionPhrase = t;
    });

    // 1. Must have a Noun
    if (!subjectNoun) {
      return {
        tokens,
        rawText,
        isValid: false,
        errorMessage: 'Who or what is your sentence about? Add a Noun (like rabbit, dragon, or bridge)!'
      };
    }

    // 2. Must have a Verb
    if (!verb) {
      return {
        tokens,
        rawText,
        isValid: false,
        errorMessage: `What does the ${subjectNoun.text} do? Add an Action Verb (like hops, glides, or shines)!`
      };
    }

    // 3. Tier-specific checks
    if (tier === 'weaver' && !adjective && !prepositionPhrase) {
      return {
        tokens,
        rawText,
        isValid: false,
        errorMessage: 'Sentence Weavers add description! Add an Adjective (like luminous) or a Preposition (where it happens)!'
      };
    }

    if (tier === 'scribe' && (!adjective || !prepositionPhrase)) {
      return {
        tokens,
        rawText,
        isValid: false,
        errorMessage: 'Master Scribes craft complete scenes! Include an Adjective, a Verb, and a Prepositional Phrase.'
      };
    }

    // Correct syntax sequence: Adjective should come before Noun
    const nounIdx = tokens.findIndex(t => t.partOfSpeech === 'noun');
    const adjIdx = tokens.findIndex(t => t.partOfSpeech === 'adjective');
    if (adjIdx !== -1 && adjIdx > nounIdx) {
      return {
        tokens,
        rawText,
        isValid: false,
        errorMessage: `English grammar tip: In English, adjectives go before nouns! (e.g. "${adjective?.text} ${subjectNoun.text}", not "${subjectNoun.text} ${adjective?.text}").`
      };
    }

    return {
      tokens,
      rawText: rawText.charAt(0).toUpperCase() + rawText.slice(1) + '.',
      isValid: true,
      subjectNoun,
      adjective,
      verb,
      adverb,
      prepositionPhrase
    };
  }

  /**
   * Get available word tokens filtered by category or difficulty
   */
  public static getWordTokensByPart(part: PartOfSpeech): WordToken[] {
    return Object.values(WORD_BANK).filter(w => w.partOfSpeech === part);
  }
}
