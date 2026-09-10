import { Agent, ItemType } from './types';

export function determineLifeStage(age: number): 'infant' | 'child' | 'apprentice' | 'adult' | 'elder' {
  if (age < 3) return 'infant';
  if (age < 13) return 'child';
  if (age < 18) return 'apprentice';
  if (age < 60) return 'adult';
  return 'elder';
}

export function createInitialPioneers(): Agent[] {
  const adam: Agent = {
    id: 'agent_adam',
    name: 'Adam',
    gender: 'male',
    age: 20,
    lifeStage: 'adult',
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    facing: 'down',
    color: '#38bdf8', // Sky blue
    avatarSeed: 101,
    needs: {
      hunger: 80,
      energy: 90,
      warmth: 85,
      social: 75,
      curiosity: 80,
      health: 100,
    },
    role: 'Pioneer',
    inventory: {},
    maxCarryWeight: 30,
    relationships: {},
    childrenIds: [],
    parentsIds: [],
    generation: 1,
    memories: [
      { text: 'Opened my eyes to a boundless expanse of green and water. I am Adam.', day: 1, importance: 10 }
    ],
    currentGoal: 'Gaze in wonder at the virgin wilderness',
    currentAction: 'Observing surroundings',
    activeThought: 'The earth is cool beneath my bare feet. What are these tall green stalks and river stones?',
    thoughtTimer: 12,
    speechBubble: { text: 'Eve, our hands are empty, but the world is full of wonders. Let us explore carefully.', timer: 8, isSpeech: true },
    path: [],
    stateTimer: 0,
    coins: 0,
    knowledge: new Set<string>(), // TABULA RASA - ZERO PRESET KNOWLEDGE
  };

  const eve: Agent = {
    id: 'agent_eve',
    name: 'Eve',
    gender: 'female',
    age: 19,
    lifeStage: 'adult',
    x: 1,
    y: 0,
    vx: 0,
    vy: 0,
    facing: 'left',
    color: '#ec4899', // Rose pink
    avatarSeed: 202,
    needs: {
      hunger: 85,
      energy: 95,
      warmth: 85,
      social: 80,
      curiosity: 95,
      health: 100,
    },
    role: 'Pioneer',
    inventory: {},
    maxCarryWeight: 30,
    relationships: {},
    childrenIds: [],
    parentsIds: [],
    generation: 1,
    memories: [
      { text: 'Stood beside Adam under the open sky. I am Eve.', day: 1, importance: 10 }
    ],
    currentGoal: 'Touch unfamiliar plants and examine the riverbank',
    currentAction: 'Feeling morning breeze',
    activeThought: 'I see bright colors in the foliage. We must look closer and learn their nature.',
    thoughtTimer: 12,
    speechBubble: { text: 'Walk beside me, Adam. Let us see what this living paradise holds.', timer: 8, isSpeech: true },
    path: [],
    stateTimer: 0,
    coins: 0,
    knowledge: new Set<string>(), // TABULA RASA - ZERO PRESET KNOWLEDGE
  };

  // Start as two solitary pioneers discovering each other in paradise
  adam.relationships[eve.id] = {
    targetId: eve.id,
    affection: 15,
    trust: 20,
    lastInteracted: 0,
    stage: 'strangers',
  };
  adam.spouseId = undefined;

  eve.relationships[adam.id] = {
    targetId: adam.id,
    affection: 15,
    trust: 20,
    lastInteracted: 0,
    stage: 'strangers',
  };
  eve.spouseId = undefined;

  return [adam, eve];
}

export function createNextGenPioneers(generation: number, x = 0, y = 0): Agent[] {
  const maleName = generation === 2 ? 'Seth' : `Pioneer_${generation}M`;
  const femaleName = generation === 2 ? 'Miriam' : `Pioneer_${generation}F`;

  const m: Agent = {
    id: `agent_${maleName.toLowerCase()}_${Date.now()}`,
    name: maleName,
    gender: 'male',
    age: 20,
    lifeStage: 'adult',
    x,
    y,
    vx: 0,
    vy: 0,
    facing: 'down',
    color: '#38bdf8',
    avatarSeed: Math.floor(Math.random() * 1000),
    needs: { hunger: 85, energy: 90, warmth: 85, social: 75, curiosity: 80, health: 100 },
    role: 'Pioneer',
    inventory: {},
    maxCarryWeight: 30,
    relationships: {},
    childrenIds: [],
    parentsIds: [],
    generation,
    memories: [{ text: `Awoke upon the ancestral earth. We carry on the flame.`, day: 1, importance: 10 }],
    currentGoal: 'Honor the ancestral cairns and build anew',
    currentAction: 'Reflecting at ancestral grounds',
    activeThought: 'The elders have passed into the earth, but their legacy lives through us.',
    thoughtTimer: 10,
    speechBubble: { text: `We must tend the hearth and honor those who came before us.`, timer: 7, isSpeech: true },
    path: [],
    stateTimer: 0,
    coins: 0,
    knowledge: new Set<string>(['wild_nourishment', 'discovery_wood', 'discovery_stone', 'discovery_flint', 'discovery_fire', 'contained_hearth']),
  };

  const f: Agent = {
    id: `agent_${femaleName.toLowerCase()}_${Date.now() + 1}`,
    name: femaleName,
    gender: 'female',
    age: 19,
    lifeStage: 'adult',
    x: x + 1,
    y: y,
    vx: 0,
    vy: 0,
    facing: 'down',
    color: '#f472b6',
    avatarSeed: Math.floor(Math.random() * 1000),
    needs: { hunger: 85, energy: 90, warmth: 85, social: 75, curiosity: 80, health: 100 },
    role: 'Pioneer',
    inventory: {},
    maxCarryWeight: 30,
    relationships: {},
    childrenIds: [],
    parentsIds: [],
    generation,
    memories: [{ text: `Stood beside ${maleName} before the ancient memorial cairns.`, day: 1, importance: 10 }],
    currentGoal: 'Explore the ancestral lands and gather sustenance',
    currentAction: 'Examining surroundings',
    activeThought: 'A new dawn rises over this settlement.',
    thoughtTimer: 10,
    speechBubble: { text: `Together, ${maleName}, we shall rebuild the village.`, timer: 7, isSpeech: true },
    path: [],
    stateTimer: 0,
    coins: 0,
    knowledge: new Set<string>(['wild_nourishment', 'discovery_wood', 'discovery_stone', 'discovery_flint', 'discovery_fire', 'contained_hearth']),
  };

  m.relationships[f.id] = { targetId: f.id, affection: 35, trust: 35, lastInteracted: 0, stage: 'friends' };
  f.relationships[m.id] = { targetId: m.id, affection: 35, trust: 35, lastInteracted: 0, stage: 'friends' };

  return [m, f];
}

const FIRST_NAMES_MALE = [
  'Cain', 'Abel', 'Seth', 'Enoch', 'Jared', 'Noah', 'Kenan', 'Silas', 'Ethan', 'Lucas', 'Rowan', 'Felix', 'Leo'
];
const FIRST_NAMES_FEMALE = [
  'Awan', 'Azura', 'Naamah', 'Lydia', 'Chloe', 'Mara', 'Zara', 'Elena', 'Iris', 'Maya', 'Nora', 'Clara', 'Aria'
];

export function createOffspring(
  parent1: Agent,
  parent2: Agent,
  day: number,
  generation: number
): Agent {
  const isMale = Math.random() > 0.5;
  const nameList = isMale ? FIRST_NAMES_MALE : FIRST_NAMES_FEMALE;
  const name = nameList[Math.floor(Math.random() * nameList.length)];
  const id = `agent_${name.toLowerCase()}_${Date.now()}`;

  const offspring: Agent = {
    id,
    name,
    gender: isMale ? 'male' : 'female',
    age: 0, // Newborn
    lifeStage: 'infant',
    x: parent1.x,
    y: parent1.y,
    vx: 0,
    vy: 0,
    facing: 'down',
    color: isMale ? '#60a5fa' : '#f472b6',
    avatarSeed: Math.floor(Math.random() * 10000),
    needs: {
      hunger: 90,
      energy: 100,
      warmth: 90,
      social: 90,
      curiosity: 100,
      health: 100,
    },
    role: 'Infant',
    inventory: {},
    maxCarryWeight: 20,
    relationships: {
      [parent1.id]: { targetId: parent1.id, affection: 95, trust: 95, lastInteracted: 0, stage: 'friends' },
      [parent2.id]: { targetId: parent2.id, affection: 95, trust: 95, lastInteracted: 0, stage: 'friends' },
    },
    childrenIds: [],
    parentsIds: [parent1.id, parent2.id],
    generation,
    memories: [
      { text: `Born in our thriving settlement to ${parent1.name} and ${parent2.name}.`, day, importance: 10 }
    ],
    currentGoal: 'Resting safely in family crib',
    currentAction: 'Babbling in crib',
    activeThought: 'Warmth and soft voices all around me...',
    thoughtTimer: 10,
    speechBubble: { text: `Goo... mama!`, timer: 6, isSpeech: true },
    path: [],
    stateTimer: 0,
    coins: 5,
    knowledge: new Set([...parent1.knowledge, ...parent2.knowledge]),
  };

  parent1.childrenIds.push(id);
  parent2.childrenIds.push(id);

  return offspring;
}

export function createCustomPioneer(options: {
  name?: string;
  x?: number;
  y?: number;
  generation?: number;
  existingAgents?: Agent[];
}): Agent {
  // 1. Gender: completely random simulated 50/50
  const isMale = Math.random() > 0.5;
  const gender: 'male' | 'female' = isMale ? 'male' : 'female';
  const namePool = isMale ? FIRST_NAMES_MALE : FIRST_NAMES_FEMALE;
  const name = options.name?.trim() || namePool[Math.floor(Math.random() * namePool.length)];

  // 2. Physical & Appearance traits: randomly simulated
  const maleColors = ['#38bdf8', '#0ea5e9', '#6366f1', '#14b8a6', '#06b6d4', '#3b82f6', '#10b981'];
  const femaleColors = ['#ec4899', '#f43f5e', '#a855f7', '#fb7185', '#d946ef', '#fb923c', '#e11d48'];
  const color = isMale
    ? maleColors[Math.floor(Math.random() * maleColors.length)]
    : femaleColors[Math.floor(Math.random() * femaleColors.length)];
  const avatarSeed = Math.floor(Math.random() * 1000000);
  const age = 18 + Math.floor(Math.random() * 10); // Simulated age 18-27

  // 3. Vocation: randomly rolled from civilization trades
  const possibleRoles = ['Pioneer', 'Forager', 'Woodcutter', 'Builder', 'Farmer', 'Hunter', 'Smith', 'Scholar'];
  const role: any = possibleRoles[Math.floor(Math.random() * possibleRoles.length)];

  // 4. Position: passed in or origin with random offset
  const x = options.x ?? 0;
  const y = options.y ?? 0;
  const generation = options.generation ?? 1;
  const id = `agent_${name.toLowerCase().replace(/[^a-z0-9]/g, '')}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

  // 5. Individual Constitution & Needs: randomly simulated
  const needs = {
    hunger: 75 + Math.floor(Math.random() * 20),
    energy: 85 + Math.floor(Math.random() * 15),
    warmth: 80 + Math.floor(Math.random() * 15),
    social: 55 + Math.floor(Math.random() * 40),
    curiosity: 65 + Math.floor(Math.random() * 35),
    health: 95 + Math.floor(Math.random() * 5),
  };
  const maxCarryWeight = 26 + Math.floor(Math.random() * 14);

  // 6. Personality & First Impression Thoughts: randomly simulated
  const thoughtPool = [
    `The wind carries the scent of pine and water. A brand new world awaits me.`,
    `My hands are eager to work. What can I build for this community?`,
    `I feel a curious spark in my chest. So many wild mysteries to unravel.`,
    `The earth here is rich and fertile. We can cultivate greatness from this soil.`,
    `What remarkable people live in this valley? I must introduce myself.`,
    `A hearth, a roof, a song—simple wonders make life worth living.`
  ];
  const activeThought = thoughtPool[Math.floor(Math.random() * thoughtPool.length)];

  const speechPool = [
    `Greetings, friends! I am ${name}, ready to work with you all.`,
    `May our hearth never grow cold! I am ${name}.`,
    `The sun shines bright today! Pleased to meet you, I am ${name}.`,
    `I come seeking honest labor and fellowship. Call me ${name}.`,
    `What an untamed paradise this is! Hello everyone, I am ${name}.`
  ];
  const speechText = speechPool[Math.floor(Math.random() * speechPool.length)];

  const agent: Agent = {
    id,
    name,
    gender,
    age,
    lifeStage: 'adult',
    x,
    y,
    vx: 0,
    vy: 0,
    facing: 'down',
    color,
    avatarSeed,
    needs,
    role,
    inventory: {},
    maxCarryWeight,
    relationships: {},
    childrenIds: [],
    parentsIds: [],
    generation,
    memories: [
      { text: `Arrived in this thriving land to forge my destiny as a ${role}.`, day: 1, importance: 10 }
    ],
    currentGoal: `Explore the settlement and contribute as a ${role}`,
    currentAction: 'Greeting the community',
    activeThought,
    thoughtTimer: 10,
    speechBubble: { text: speechText, timer: 8, isSpeech: true },
    path: [],
    stateTimer: 0,
    coins: 5 + Math.floor(Math.random() * 10),
    knowledge: new Set<string>(['wild_nourishment', 'discovery_wood', 'discovery_stone', 'discovery_flint', 'discovery_fire', 'contained_hearth']),
  };

  // Give initial starter tool matching simulated vocation
  if (role === 'Forager') {
    agent.inventory['woven_basket'] = 1;
  } else if (role === 'Builder' || role === 'Smith') {
    agent.inventory['stone_hammer'] = 1;
  } else if (role === 'Woodcutter') {
    agent.inventory['stone_axe'] = 1;
  } else if (role === 'Hunter') {
    agent.inventory['flint_spear'] = 1;
  } else if (role === 'Farmer') {
    agent.inventory['wild_seeds'] = 4;
  } else if (role === 'Scholar') {
    agent.inventory['written_scroll'] = 1;
  }

  // Set friendly acquaintance relationship with existing adult agents
  if (options.existingAgents) {
    for (const other of options.existingAgents) {
      if (other.id !== agent.id && !other.isDeceased) {
        agent.relationships[other.id] = { targetId: other.id, affection: 25 + Math.floor(Math.random() * 15), trust: 25 + Math.floor(Math.random() * 15), lastInteracted: 0, stage: 'friends' };
        other.relationships[agent.id] = { targetId: agent.id, affection: 25 + Math.floor(Math.random() * 15), trust: 25 + Math.floor(Math.random() * 15), lastInteracted: 0, stage: 'friends' };
      }
    }
  }

  return agent;
}

export function hasItem(agent: Agent, item: ItemType, count = 1): boolean {
  return (agent.inventory[item] || 0) >= count;
}

export function addItem(agent: Agent, item: ItemType, count = 1): boolean {
  const currentTotal = Object.values(agent.inventory).reduce((acc, c) => acc + (c || 0), 0);
  if (currentTotal + count > agent.maxCarryWeight) {
    return false; // Exceeded inventory weight
  }
  agent.inventory[item] = (agent.inventory[item] || 0) + count;
  return true;
}

export function removeItem(agent: Agent, item: ItemType, count = 1): boolean {
  if (!hasItem(agent, item, count)) return false;
  agent.inventory[item] = (agent.inventory[item] || 0) - count;
  if (agent.inventory[item]! <= 0) {
    delete agent.inventory[item];
  }
  return true;
}

export function getInventoryCount(agent: Agent, item: ItemType): number {
  return agent.inventory[item] || 0;
}
