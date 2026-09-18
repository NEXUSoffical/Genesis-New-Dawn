import { StoryQuest, DifficultyTier, ParsedSentence } from '../types';

export const STORY_QUESTS: StoryQuest[] = [
  // TIER: Sprout (Ages 5–7)
  {
    id: 'sprout_1',
    title: 'The Meadow Bunny',
    tier: 'sprout',
    npcName: 'Barnaby the Baker',
    npcTitle: 'Island Friend',
    npcAvatar: '👨‍🍳',
    npcColor: '#f59e0b',
    storyPrompt: 'Welcome to Lexicon Island, young Word Sprout! The grassy meadow is so quiet this morning. Can you invite a fluffy friend to play?',
    challengeInstruction: 'Write a sentence to invite a rabbit to hop into the meadow!',
    expectedKeywords: {
      noun: ['rabbit'],
      verb: ['hops'],
      preposition: ['into_meadow']
    },
    hintSteps: [
      'Choose a Noun: tap "rabbit".',
      'Choose an Action Verb: tap "hops".',
      'Choose where it goes: tap "into the meadow".'
    ],
    explanation: 'Nouns name things, verbs describe the action, and prepositions tell us where!',
    successDialogue: 'Hooray! Look at the happy rabbit hopping through the sweet clover!',
    rewardGems: 15
  },
  {
    id: 'sprout_2',
    title: 'Light in the Dark',
    tier: 'sprout',
    npcName: 'Elder Hoot',
    npcTitle: 'The Scholar Owl',
    npcAvatar: '🦉',
    npcColor: '#3b82f6',
    storyPrompt: 'Twilight is descending under the willow branches. Woodland critters need light to find their burrows safely.',
    challengeInstruction: 'Create a lantern that shines under the willow tree!',
    expectedKeywords: {
      noun: ['lantern'],
      verb: ['shines'],
      preposition: ['under_tree']
    },
    hintSteps: [
      'Find the object Noun: "lantern".',
      'Pick what light does: "shines".',
      'Place it: "under the willow tree".'
    ],
    explanation: 'Your sentence illuminated the shadows under the tree!',
    successDialogue: 'Warm and bright! The owl hoots in gratitude for your gentle light.',
    rewardGems: 15
  },

  // TIER: Weaver (Ages 8–10)
  {
    id: 'weaver_1',
    title: 'Bridging the Chasm',
    tier: 'weaver',
    npcName: 'Sir Gideon',
    npcTitle: 'Captain of Scouts',
    npcAvatar: '🛡️',
    npcColor: '#3b82f6',
    storyPrompt: 'Hold! The earthquake cracked a deep ravine through our path! The scouts cannot leap across the rocky gorge without a sturdy crossing.',
    challengeInstruction: 'Summon a gigantic or brave bridge that builds across the chasm!',
    expectedKeywords: {
      adjective: ['gigantic', 'brave', 'golden'],
      noun: ['bridge'],
      verb: ['builds', 'protects'],
      preposition: ['across_chasm']
    },
    hintSteps: [
      'Add a descriptive Adjective first (e.g. "gigantic").',
      'Add the Noun: "bridge".',
      'Add an Action Verb: "builds".',
      'Add the Preposition: "across the chasm".'
    ],
    explanation: 'Adjectives go before nouns in English to describe their size and power!',
    successDialogue: 'Magnificent engineering! The chasm is bridged and our scouts can advance safely!',
    rewardGems: 25
  },
  {
    id: 'weaver_2',
    title: 'Shower of Life',
    tier: 'weaver',
    npcName: 'Flora',
    npcTitle: 'The Herbalist',
    npcAvatar: '🧝‍♀️',
    npcColor: '#10b981',
    storyPrompt: 'The afternoon sun is baking our herb gardens! The wild blue orchids are wilting. We need cool rain right away.',
    challengeInstruction: 'Write a sentence summoning a gentle or fluffy raincloud into the meadow!',
    expectedKeywords: {
      adjective: ['gentle', 'fluffy'],
      noun: ['raincloud'],
      verb: ['glides', 'shines'],
      preposition: ['into_meadow', 'under_tree']
    },
    hintSteps: [
      'Pick an Adjective like "gentle" or "fluffy".',
      'Select the water-bearing Noun: "raincloud".',
      'Complete the action and place it in the meadow!'
    ],
    explanation: 'Descriptive words helped bring life-giving rain to the thirsty meadow!',
    successDialogue: 'Listen to the gentle pitter-patter! The flowers are unfurling their petals with joy!',
    rewardGems: 25
  },

  // TIER: Master Scribe (Ages 10–13+)
  {
    id: 'scribe_1',
    title: 'Guardian of the Crystal Lake',
    tier: 'scribe',
    npcName: 'Master Zephyr',
    npcTitle: 'The Archmage',
    npcAvatar: '🧙‍♂️',
    npcColor: '#8b5cf6',
    storyPrompt: 'An ancient sanctuary rests atop the lake cliffs. Legend says an arcane creature of pure starlight watches over the peaceful waters.',
    challengeInstruction: 'Describe a luminous or radiant dragon that glides gracefully above the crystal lake!',
    expectedKeywords: {
      adjective: ['luminous', 'radiant'],
      noun: ['dragon'],
      verb: ['glides', 'soars'],
      preposition: ['above_lake']
    },
    hintSteps: [
      'Set the luminous aura with an Adjective: "luminous" or "radiant".',
      'Name the legendary beast: "dragon".',
      'Describe smooth flight: "glides".',
      'Locate it high in the sky: "above the crystal lake".'
    ],
    explanation: 'Rich descriptive vocabulary and prepositional phrases paint vivid imagery in the reader’s mind!',
    successDialogue: 'By the cosmos! The dragon awakens, illuminating the crystal waters with celestial wonder!',
    rewardGems: 35
  }
];

export class QuestManager {
  private quests: StoryQuest[] = STORY_QUESTS;

  public getQuestsForTier(tier: DifficultyTier): StoryQuest[] {
    return this.quests.filter(q => q.tier === tier);
  }

  public getQuestById(id: string): StoryQuest | undefined {
    return this.quests.find(q => q.id === id);
  }

  public evaluateSentence(quest: StoryQuest, parsed: ParsedSentence): { success: boolean; feedback: string } {
    if (!parsed.isValid) {
      return { success: false, feedback: parsed.errorMessage || 'Invalid sentence structure.' };
    }

    const exp = quest.expectedKeywords;

    // Check noun
    if (exp.noun && (!parsed.subjectNoun || !exp.noun.includes(parsed.subjectNoun.id))) {
      return {
        success: false,
        feedback: `The quest asks about a ${exp.noun.join(' or ')}, but you used ${parsed.subjectNoun?.text || 'nothing'}.`
      };
    }

    // Check adjective if required
    if (exp.adjective && (!parsed.adjective || !exp.adjective.includes(parsed.adjective.id))) {
      return {
        success: false,
        feedback: `Try adding a descriptive adjective like ${exp.adjective.join(' or ')} to empower your spell!`
      };
    }

    // Check preposition if required
    if (exp.preposition && (!parsed.prepositionPhrase || !exp.preposition.includes(parsed.prepositionPhrase.id))) {
      return {
        success: false,
        feedback: `Check where the action happens! The quest takes place ${exp.preposition.join(' or ')}.`
      };
    }

    return { success: true, feedback: quest.successDialogue };
  }
}
