import { VillagerArchetype, ShopItem, ItemCategory } from '../types';

export const SHOP_ITEMS: Record<string, ShopItem> = {
  // Bakery
  bread: { id: 'bread', name: 'Warm Loaf', icon: '🍞', basePrice: 2, unit: 'loaf', category: 'bakery', description: 'Freshly baked wheat bread with a crispy crust.' },
  honey_bun: { id: 'honey_bun', name: 'Honey Bun', icon: '🥐', basePrice: 3, unit: 'bun', category: 'bakery', description: 'Glazed with mountain wildflower honey.' },
  berry_tart: { id: 'berry_tart', name: 'Berry Tart', icon: '🥧', basePrice: 5, unit: 'tart', category: 'bakery', description: 'Sweet tart packed with blue forest berries.' },
  golden_cake: { id: 'golden_cake', name: 'Royal Cake', icon: '🎂', basePrice: 12, unit: 'cake', category: 'bakery', description: 'Three tiers of fluffy vanilla and buttercream.' },

  // Blacksmith
  iron_nails: { id: 'iron_nails', name: 'Iron Nails', icon: '🔩', basePrice: 1, unit: 'pouch', category: 'blacksmith', description: 'Sturdy forged nails for building carts and roofs.' },
  arrows: { id: 'arrows', name: 'Arrow Quiver', icon: '🏹', basePrice: 4, unit: 'quiver', category: 'blacksmith', description: 'Feathered flint arrows for village scouts.' },
  dagger: { id: 'dagger', name: 'Bronze Dagger', icon: '🗡️', basePrice: 8, unit: 'blade', category: 'blacksmith', description: 'Sharp and light sidearm with leather-wrapped hilt.' },
  shield: { id: 'shield', name: 'Knight Shield', icon: '🛡️', basePrice: 15, unit: 'shield', category: 'blacksmith', description: 'Emblazoned with the golden sunrise crest.' },

  // Alchemist
  glow_shroom: { id: 'glow_shroom', name: 'Glow Shroom', icon: '🍄', basePrice: 2, unit: 'cap', category: 'alchemist', description: 'Emits a soft cyan light in dark caverns.' },
  health_salve: { id: 'health_salve', name: 'Healing Salve', icon: '🧪', basePrice: 6, unit: 'jar', category: 'alchemist', description: 'Soothes scrapes and restores vitality.' },
  mana_draught: { id: 'mana_draught', name: 'Mana Draught', icon: '✨', basePrice: 10, unit: 'vial', category: 'alchemist', description: 'Sparkling azure liquid pulsing with arcane energy.' },
  star_elixir: { id: 'star_elixir', name: 'Star Elixir', icon: '🔮', basePrice: 20, unit: 'flask', category: 'alchemist', description: 'Distilled starlight that reveals hidden treasures.' },

  // Farm
  carrot: { id: 'carrot', name: 'Crisp Carrot', icon: '🥕', basePrice: 1, unit: 'bunch', category: 'farm', description: 'Crunchy orange carrots loved by village horses.' },
  red_apple: { id: 'red_apple', name: 'Sweet Apple', icon: '🍎', basePrice: 2, unit: 'basket', category: 'farm', description: 'Crisp orchard apples, juicy and sweet.' },
  milk_jug: { id: 'milk_jug', name: 'Cream Milk', icon: '🥛', basePrice: 4, unit: 'jug', category: 'farm', description: 'Rich morning milk from clover-fed cows.' },
  wool: { id: 'wool', name: 'Cloud Wool', icon: '🧶', basePrice: 5, unit: 'spool', category: 'farm', description: 'Soft sheared wool ready for winter cloaks.' }
};

export const VILLAGERS: VillagerArchetype[] = [
  {
    id: 'barnaby',
    name: 'Barnaby',
    title: 'The Village Baker',
    avatar: '👨‍🍳',
    color: '#f59e0b',
    favoriteCategory: 'bakery',
    voicePitch: 0.9,
    dialogueStyle: {
      greeting: [
        'Good morning, young merchant! The ovens are roaring!',
        'Ah, hello friend! I smell adventure—and maybe cinnamon?',
        'Welcome! My kneading bowl is ready for ingredients.'
      ],
      waiting: [
        'Take your time, counting is just like measuring yeast!',
        'No rush, double-checking numbers makes the best loaves.'
      ],
      delighted: [
        'Splendid! Exactly what my recipe needed! Thank you!',
        'Hooray! The village will feast well today!'
      ],
      confused: [
        'Hmm, let us recount that dough together, shall we?',
        'Not quite right, friend! Let us take another look.'
      ]
    }
  },
  {
    id: 'gideon',
    name: 'Sir Gideon',
    title: 'Captain of the Guard',
    avatar: '🛡️',
    color: '#3b82f6',
    favoriteCategory: 'blacksmith',
    voicePitch: 0.75,
    dialogueStyle: {
      greeting: [
        'Hail, shopkeeper! The outpost garrison requires supplies!',
        'Greetings! My squires need reliable gear for patrol duty.',
        'At ease, merchant! What sturdiness do you offer today?'
      ],
      waiting: [
        'Patience is a warrior’s virtue. Calculate carefully!',
        'Take heed of the numbers. Accuracy wins battles!'
      ],
      delighted: [
        'Outstanding ledger work! By my sword, you are sharp!',
        'Honor to your trade! The garrison is well-provisioned!'
      ],
      confused: [
        'Hold the line! That calculation leaves coins unaccounted for.',
        'Recalibrate your tally, merchant. Let’s try again!'
      ]
    }
  },
  {
    id: 'zephyr',
    name: 'Master Zephyr',
    title: 'The Wandering Mage',
    avatar: '🧙‍♂️',
    color: '#8b5cf6',
    favoriteCategory: 'alchemist',
    voicePitch: 1.25,
    dialogueStyle: {
      greeting: [
        'Greetings, curious mind! The constellations align on your shop.',
        'Ah, a fellow seeker of formulas! Let us blend some magic.',
        'Salutations! Arcane experiments await precise proportions!'
      ],
      waiting: [
        'Magic, much like mathematics, requires steady balance...',
        'Ponder the equations of the cosmos at your own pace.'
      ],
      delighted: [
        'Marvelous alchemy! The resonance is mathematically pure!',
        'By the stars! You have the mind of a true archmage!'
      ],
      confused: [
        'A ripple in the ether! The ratios are slightly askew.',
        'Check the formula once more—magic demands precision!'
      ]
    }
  },
  {
    id: 'pip',
    name: 'Pip',
    title: 'The Goblin Collector',
    avatar: '🧝',
    color: '#10b981',
    favoriteCategory: 'trinket',
    voicePitch: 1.4,
    dialogueStyle: {
      greeting: [
        'Shiny shinies! Pip loves visiting the fancy counter!',
        'Ooh! Clinking coins, bright bottles! What can Pip buy?',
        'Hello hello! Got lots of shiny bronze in my pouch!'
      ],
      waiting: [
        'Pip is hopping with excitement! Clink clink clink!',
        'Take your time! Pip is just admiring the shiny glass!'
      ],
      delighted: [
        'Wahoo! Best deal in the whole kingdom! Pip is happy!',
        'Shiny perfection! Pip will tell all the village critters!'
      ],
      confused: [
        'Wait wait! Pip’s pointy ears hear funny math! Count again?',
        'Uh oh, the clinky coins don’t match yet! Look again!'
      ]
    }
  },
  {
    id: 'flora',
    name: 'Flora',
    title: 'The Forest Herbalist',
    avatar: '🧝‍♀️',
    color: '#06b6d4',
    favoriteCategory: 'farm',
    voicePitch: 1.1,
    dialogueStyle: {
      greeting: [
        'Peace to you, friend! The morning dew was lovely today.',
        'Hello! My woodland animals sent me on an errand.',
        'Welcome! Nature provides, and your shop delivers!'
      ],
      waiting: [
        'Like seeds growing in spring, good thinking takes a moment.',
        'Breathe easy, kind merchant. You are doing wonderfully.'
      ],
      delighted: [
        'Wonderful! The forest animals will be singing praises!',
        'Such gentle precision! Thank you from the bottom of my heart!'
      ],
      confused: [
        'Nature teaches us patience—let us recount together!',
        'Almost there, sweet friend. Give it another try!'
      ]
    }
  }
];

export function getRandomVillager(excludeId?: string): VillagerArchetype {
  const pool = excludeId ? VILLAGERS.filter(v => v.id !== excludeId) : VILLAGERS;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getRandomItems(category?: ItemCategory, count: number = 1): ShopItem[] {
  let list = Object.values(SHOP_ITEMS);
  if (category) {
    const filtered = list.filter(i => i.category === category);
    if (filtered.length > 0) list = filtered;
  }
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
