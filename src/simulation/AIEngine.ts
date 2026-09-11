import { Agent, ItemType, BuildingType, Building, ChronicleEvent, AgentTask } from './types';
import { WorldManager } from './World';
import { EconomyEngine } from './Economy';
import { TECHNOLOGIES, BUILDING_SPECS, CRAFTING_RECIPES } from './Inventions';
import { hasItem, addItem, removeItem, createOffspring, getInventoryCount, determineLifeStage } from './Agent';
import { FaunaManager } from './Fauna';
import { SoundEngine } from '../audio/SoundEngine';

export class AIEngine {
  private world: WorldManager;
  private economy: EconomyEngine;
  public fauna?: FaunaManager;
  public soundEngine?: SoundEngine;
  public chronicles: ChronicleEvent[] = [];
  public onChronicle?: (event: ChronicleEvent) => void;

  constructor(world: WorldManager, economy: EconomyEngine, fauna?: FaunaManager, soundEngine?: SoundEngine) {
    this.world = world;
    this.economy = economy;
    this.fauna = fauna;
    this.soundEngine = soundEngine;
  }

  public setFaunaManager(fauna: FaunaManager): void {
    this.fauna = fauna;
  }

  public setSoundEngine(sound: SoundEngine): void {
    this.soundEngine = sound;
  }

  public addChronicle(
    title: string,
    description: string,
    category: ChronicleEvent['category'],
    icon: string
  ): void {
    const hours = Math.floor(this.world.timeOfDay);
    const mins = Math.floor((this.world.timeOfDay - hours) * 60);
    const timeStr = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;

    const event: ChronicleEvent = {
      id: `chron_${Date.now()}_${Math.random()}`,
      day: this.world.day,
      timeStr,
      title,
      description,
      category,
      icon,
    };

    this.chronicles.unshift(event);
    if (this.chronicles.length > 80) this.chronicles.pop();

    if (this.onChronicle) {
      this.onChronicle(event);
    }
  }

  public updateAgents(agents: Agent[], deltaSec: number): Agent[] {
    const newAgents: Agent[] = [];

    for (const agent of agents) {
      this.updateAgentNeeds(agent, deltaSec);
      this.updateAgentSpeechAndThoughts(agent, deltaSec);
      this.updateAgentPathing(agent, deltaSec);

      // Advance pregnancy & gestational milestones for expecting mothers
      this.updatePregnancyGestation(agent, agents, newAgents, deltaSec);

      // If agent is busy working on an active task, progress it!
      if (agent.activeTask) {
        this.progressAgentTask(agent, deltaSec);
      } else {
        this.decideAgentGoal(agent, agents, newAgents, deltaSec);
      }

      this.world.revealRadius(agent.x, agent.y, 6);
    }

    return newAgents;
  }

  private updateAgentNeeds(agent: Agent, deltaSec: number): void {
    // Slower, grounded real-time decay
    agent.needs.hunger = Math.max(0, agent.needs.hunger - 0.015 * deltaSec);

    const isResting = agent.currentAction.toLowerCase().includes('rest') || agent.currentAction.toLowerCase().includes('sleep');
    if (isResting) {
      agent.needs.energy = Math.min(100, agent.needs.energy + 0.12 * deltaSec);
    } else {
      agent.needs.energy = Math.max(0, agent.needs.energy - 0.012 * deltaSec);
    }

    // Warmth check: night, cold temperature, winter, and rain drop warmth
    const isNight = this.world.timeOfDay > 20 || this.world.timeOfDay < 5.5;
    const isRain = this.world.weather === 'Rain';
    const nearFireOrShelter = this.isNearWarmthSource(agent.x, agent.y);
    const isCold = this.world.temperatureCelsius < 6;
    const isFreezing = this.world.temperatureCelsius < 0;

    // Equip winter cloak if pioneer has one in backpack
    if ((agent.inventory.winter_cloak || 0) > 0) {
      agent.hasWinterCloak = true;
    }

    // Cargo cart expands carrying capacity
    if ((agent.inventory.cargo_cart || 0) > 0) {
      agent.hasCargoCart = true;
      agent.maxCarryWeight = 80;
    }

    if (nearFireOrShelter) {
      agent.needs.warmth = Math.min(100, agent.needs.warmth + 0.35 * deltaSec);
      agent.isShivering = false;
    } else if (isNight || isRain || isCold) {
      let drop = (isNight ? 0.04 : 0) + (isRain ? 0.03 : 0);
      if (isFreezing) drop += 0.08;
      else if (isCold) drop += 0.04;

      // Wearing winter cloak reduces cold drop by 75%!
      if (agent.hasWinterCloak) {
        drop *= 0.25;
      }

      agent.needs.warmth = Math.max(10, agent.needs.warmth - drop * deltaSec);
      agent.isShivering = isCold && !agent.hasWinterCloak && agent.needs.warmth < 50;

      if (agent.isShivering && Math.random() < 0.003 * deltaSec * 60) {
        agent.activeThought = "The bitter winter air freezes my breath... I must find warmth soon!";
      }
    } else {
      agent.needs.warmth = Math.min(95, agent.needs.warmth + 0.02 * deltaSec);
      agent.isShivering = false;
    }

    // Social decays very gradually
    agent.needs.social = Math.max(0, agent.needs.social - 0.008 * deltaSec);

    // Curiosity accumulates when well-fed
    if (agent.needs.hunger > 50 && agent.needs.energy > 40) {
      agent.needs.curiosity = Math.min(100, agent.needs.curiosity + 0.03 * deltaSec);
    }

    // Hunt cooldown decay
    if (agent.huntCooldown && agent.huntCooldown > 0) {
      agent.huntCooldown = Math.max(0, agent.huntCooldown - deltaSec);
    }

    // Fish cooldown decay
    if ((agent as any).fishCooldown && (agent as any).fishCooldown > 0) {
      (agent as any).fishCooldown = Math.max(0, (agent as any).fishCooldown - deltaSec);
    }

    // Lifespan: real-time aging and life stage transitions
    agent.age += (deltaSec / 14400);
    const newStage = determineLifeStage(agent.age);
    if (!agent.lifeStage) agent.lifeStage = newStage;

    if (agent.lifeStage !== newStage) {
      const oldStage = agent.lifeStage;
      agent.lifeStage = newStage;

      if (newStage === 'child' && oldStage === 'infant') {
        agent.role = 'Child';
        this.setSpeech(agent, 'Look at me walk on my own! The world is so vast!', 7);
        this.addChronicle(`Growth of ${agent.name}`, `${agent.name} has grown from infancy into a playful child of the settlement!`, 'milestone', '🌱');
      } else if (newStage === 'apprentice' && oldStage === 'child') {
        agent.role = 'Apprentice';
        const trades: ('farmer' | 'builder' | 'hunter' | 'artisan')[] = ['farmer', 'builder', 'hunter', 'artisan'];
        agent.apprenticeTrade = trades[Math.floor(Math.random() * trades.length)];
        this.setSpeech(agent, `I am ready to learn the trade of a ${agent.apprenticeTrade}!`, 7);
        this.addChronicle(`Apprenticeship: ${agent.name}`, `${agent.name} has entered youth and begun apprenticeship as a ${agent.apprenticeTrade}!`, 'milestone', '⚒️');
      } else if (newStage === 'adult' && oldStage === 'apprentice') {
        agent.role = agent.apprenticeTrade === 'farmer' ? 'Farmer' : agent.apprenticeTrade === 'builder' ? 'Builder' : agent.apprenticeTrade === 'hunter' ? 'Hunter' : 'Pioneer';
        this.setSpeech(agent, 'I have reached adulthood. I will work to build our homeland.', 7);
        this.addChronicle(`Coming of Age: ${agent.name}`, `${agent.name} has reached full adulthood as a skilled ${agent.role}!`, 'milestone', '🌟');
      } else if (newStage === 'elder' && oldStage === 'adult') {
        agent.role = 'Elder';
        this.setSpeech(agent, "My hair turns silver like river frost. Let me share our people's wisdom.", 8);
        this.addChronicle(`Venerable Elder ${agent.name}`, `${agent.name} has lived to see generations flourish and is now revered as an Elder.`, 'milestone', '👴');
      }
    }

    // Check winter insulation discovery when cold
    this.checkWinterInsulationDiscovery(agent);
  }

  private isNearWarmthSource(x: number, y: number): boolean {
    const rx = Math.round(x);
    const ry = Math.round(y);
    for (let dx = -2; dx <= 2; dx++) {
      for (let dy = -2; dy <= 2; dy++) {
        const tile = this.world.getTile(rx + dx, ry + dy);
        if (tile && tile.building && tile.building.isCompleted) {
          const t = tile.building.type;
          if (['campfire', 'lean_to', 'mud_hut', 'thatched_cabin', 'timber_house', 'masonry_house', 'bakery'].includes(t)) {
            return true;
          }
        }
      }
    }
    return false;
  }

  private updateAgentSpeechAndThoughts(agent: Agent, deltaSec: number): void {
    if (agent.speechBubble) {
      agent.speechBubble.timer -= deltaSec;
      if (agent.speechBubble.timer <= 0) {
        agent.speechBubble = undefined;
      }
    }

    agent.thoughtTimer -= deltaSec;
    if (agent.thoughtTimer <= 0) {
      agent.thoughtTimer = 18 + Math.random() * 25;
      this.generateContextualThought(agent);
    }
  }

  private generateContextualThought(agent: Agent): void {
    const hasWood = agent.knowledge.has('discovery_wood');
    const hasStone = agent.knowledge.has('discovery_stone');
    const hasFire = agent.knowledge.has('discovery_fire');
    const time = this.world.timeOfDay;

    if (!hasWood) {
      agent.activeThought = 'What are these tall living pillars stretching to the sky? Can their fallen limbs be held?';
      return;
    }
    if (!hasStone) {
      agent.activeThought = 'The grey pebbles along the water... they are smooth and heavy. What are they?';
      return;
    }
    if (!hasFire && time >= 18.0) {
      agent.activeThought = 'The shadows lengthen and the night air turns cold. Is there no warmth to drive back the darkness?';
      return;
    }
    if (hasFire) {
      agent.activeThought = 'Fire... a sacred dancing spirit. It eats dry wood and gives us light and warmth.';
      return;
    }

    const thoughts = [
      `The earth is vast and pristine. We must observe and understand its nature.`,
      `Every stone and branch holds a purpose if we look with patience.`,
      `Eve and I walk with bare feet upon a world that has never known footsteps.`,
      `The rhythm of sunrise and sunset teaches us when to work and when to rest.`,
      `Nature provides all we need, if only our minds can perceive it.`,
    ];
    agent.activeThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  }

  private setSpeech(agent: Agent, text: string, duration = 7): void {
    agent.speechBubble = {
      text,
      timer: duration,
      isSpeech: true,
    };
  }

  private updateAgentPathing(agent: Agent, deltaSec: number): void {
    if (agent.targetX === undefined || agent.targetY === undefined) return;

    const dx = agent.targetX - agent.x;
    const dy = agent.targetY - agent.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 0.15) {
      agent.x = agent.targetX;
      agent.y = agent.targetY;
      agent.targetX = undefined;
      agent.targetY = undefined;
      agent.vx = 0;
      agent.vy = 0;
      return;
    }

    const isHuntingOrRunning = agent.currentAction.toLowerCase().includes('stalk') ||
      agent.currentAction.toLowerCase().includes('hunt') ||
      agent.currentGoal.toLowerCase().includes('track');
    let speed = isHuntingOrRunning ? 2.4 : 1.2;
    if (agent.isRidingHorse) {
      speed *= 2.2;
    } else if (agent.isInBoat) {
      speed *= 1.8;
    }
    const currentTile = this.world.getTile(Math.round(agent.x), Math.round(agent.y));
    if (currentTile?.type === 'cobblestone_road' || currentTile?.type === 'dirt_path') {
      speed *= 1.4;
    }
    const step = Math.min(dist, speed * deltaSec);
    agent.vx = (dx / dist) * step;
    agent.vy = (dy / dist) * step;
    agent.x += agent.vx;
    agent.y += agent.vy;

    if (Math.abs(dx) > Math.abs(dy)) {
      agent.facing = dx > 0 ? 'right' : 'left';
    } else {
      agent.facing = dy > 0 ? 'down' : 'up';
    }
  }

  private setAgentMoveTarget(agent: Agent, tx: number, ty: number): void {
    agent.targetX = tx;
    agent.targetY = ty;
  }

  // --- PROGRESSIVE ACTIVE TASKS ---
  private progressAgentTask(agent: Agent, deltaSec: number): void {
    if (!agent.activeTask) return;

    const task = agent.activeTask;
    task.progress += deltaSec;
    const pct = Math.round((task.progress / task.duration) * 100);
    agent.currentAction = `${task.name} (${pct}%)`;

    if (task.progress >= task.duration) {
      this.completeAgentTask(agent, task);
      agent.activeTask = undefined;
    }
  }

  private completeAgentTask(agent: Agent, task: AgentTask): void {
    // 1. SENSORY DISCOVERY COMPLETIONS
    if (task.name.includes('unfamiliar red berries')) {
      const tech = TECHNOLOGIES.find((t) => t.id === 'wild_nourishment');
      if (tech) {
        tech.discovered = true;
        tech.discoveredBy = agent.name;
        tech.discoveredAtDay = this.world.day;
        agent.knowledge.add(tech.id);
        addItem(agent, 'berries', 3);
        addItem(agent, 'wild_seeds', 2);
        this.setSpeech(agent, 'These red berries are juicy and sweet! They nourish our hunger and strength!', 8);
        this.addChronicle('Discovery: Edible Berries', `${agent.name} sampled wild berries and discovered they provide sweet nourishment.`, 'discovery', '🫐');
      }
    } else if (task.name.includes('fallen branches') || task.name.includes('tree trunk')) {
      const tech = TECHNOLOGIES.find((t) => t.id === 'discovery_wood');
      if (tech) {
        tech.discovered = true;
        tech.discoveredBy = agent.name;
        tech.discoveredAtDay = this.world.day;
        agent.knowledge.add(tech.id);
        addItem(agent, 'stick', 3);
        this.soundEngine?.playWoodThud();
        this.setSpeech(agent, 'This fallen branch from the canopy is sturdy yet light. It is wood! We can hold and use it!', 8);
        this.addChronicle('Discovery of Wood', `${agent.name} discovered fallen branches and sticks can be gathered and used as tools.`, 'discovery', '🪵');
      }
    } else if (task.name.includes('heavy river stones')) {
      const tech = TECHNOLOGIES.find((t) => t.id === 'discovery_stone');
      if (tech) {
        tech.discovered = true;
        tech.discoveredBy = agent.name;
        tech.discoveredAtDay = this.world.day;
        agent.knowledge.add(tech.id);
        addItem(agent, 'stone', 3);
        this.soundEngine?.playFlintStrike();
        this.setSpeech(agent, 'These cold, heavy river stones do not rot or bend. Stone!', 8);
        this.addChronicle('Discovery of River Stones', `${agent.name} discovered hard river stones from the waterbank.`, 'discovery', '🪨');
      }
    } else if (task.name.includes('Knocking two river stones')) {
      const tech = TECHNOLOGIES.find((t) => t.id === 'discovery_flint');
      if (tech) {
        tech.discovered = true;
        tech.discoveredBy = agent.name;
        tech.discoveredAtDay = this.world.day;
        agent.knowledge.add(tech.id);
        addItem(agent, 'flint', 2);
        this.soundEngine?.playFlintStrike();
        this.setSpeech(agent, 'The rock fractured! Look at this razor-sharp shard! It can cut through anything!', 8);
        this.addChronicle('Discovery of Flint & Sharp Edge', `${agent.name} fractured a river stone and discovered razor-sharp flint shards.`, 'discovery', '💎');
      }
    } else if (task.name.includes('flint against stone')) {
      const tech = TECHNOLOGIES.find((t) => t.id === 'discovery_sparks');
      if (tech) {
        tech.discovered = true;
        tech.discoveredBy = agent.name;
        tech.discoveredAtDay = this.world.day;
        agent.knowledge.add(tech.id);
        this.soundEngine?.playFlintStrike();
        this.setSpeech(agent, 'Look! Leaping sparks of glowing light! Tiny burning stars from the rock!', 8);
        this.addChronicle('Discovery of Percussion Sparks', `${agent.name} struck flint violently against mineral rock and witnessed incandescent sparks!`, 'discovery', '✨');
      }
    } else if (task.name.includes('dry tinder nest')) {
      const tech = TECHNOLOGIES.find((t) => t.id === 'discovery_fire');
      if (tech) {
        tech.discovered = true;
        tech.discoveredBy = agent.name;
        tech.discoveredAtDay = this.world.day;
        agent.knowledge.add(tech.id);
        this.soundEngine?.playFireIgnite();
        this.setSpeech(agent, 'FIRE! It lives! It breathes smoke, devours dry wood, and banishes the cold and dark!', 9);
        this.addChronicle('THE DISCOVERY OF FIRE', `${agent.name} caught a percussion spark in dry tinder and witnessed the miraculous birth of Fire!`, 'discovery', '🔥');
      }
    } else if (task.name.includes('safe hearth ring')) {
      const tech = TECHNOLOGIES.find((t) => t.id === 'contained_hearth');
      if (tech) {
        tech.discovered = true;
        tech.discoveredBy = agent.name;
        tech.discoveredAtDay = this.world.day;
        agent.knowledge.add(tech.id);
        this.setSpeech(agent, 'By surrounding the flame with river stones, it stays safe and will not escape into the forest! A contained hearth!', 8);
        this.addChronicle('Contained Campfire Hearth', `${agent.name} placed a circle of river stones to contain the fire safely.`, 'discovery', '⛺');

        // Now place the campfire building!
        this.world.placeBuilding('campfire', Math.round(agent.x), Math.round(agent.y), agent.id);
        const bld = this.world.getTile(Math.round(agent.x), Math.round(agent.y))?.building;
        if (bld) bld.isCompleted = true;
      }
    } else if (task.type === 'foraging') {
      if (task.name.includes('sweet berries')) {
        addItem(agent, 'berries', 2);
        addItem(agent, 'wild_seeds', 1);
        agent.currentAction = 'Picked sweet berries';
        this.economy.registerSupply('berries', 2);
      } else if (task.name.includes('kindling') || task.name.includes('dry sticks')) {
        addItem(agent, 'stick', 2);
        agent.currentAction = 'Collected dry kindling';
        this.economy.registerSupply('stick', 2);
      } else if (task.name.includes('Chopping fallen timber')) {
        addItem(agent, 'wood_log', 1);
        agent.currentAction = 'Gathered timber logs';
        this.economy.registerSupply('wood_log', 1);
      } else if (task.name.includes('river stones')) {
        addItem(agent, 'stone', 1);
        if (agent.knowledge.has('discovery_flint') && Math.random() < 0.5) addItem(agent, 'flint', 1);
        agent.currentAction = 'Gathered river stones';
        this.economy.registerSupply('stone', 1);
      } else if (task.name.includes('clay')) {
        addItem(agent, 'clay', 2);
        agent.currentAction = 'Dug river clay';
        this.economy.registerSupply('clay', 2);
      } else if (task.name.includes('Hunting')) {
        // Successful hunt
        if (this.fauna) {
          const prey = this.fauna.getNearestHuntable(agent.x, agent.y, 3.5);
          if (prey) {
            prey.health = 0; // successfully brought down
            const isDeer = prey.species === 'deer';
            const isSheep = prey.species === 'sheep';

            const meatCount = isDeer ? 3 : isSheep ? 2 : 1;
            const hideCount = isDeer ? 2 : 1;
            addItem(agent, 'raw_meat', meatCount);
            addItem(agent, 'animal_hide', hideCount);
            addItem(agent, 'bone', isDeer ? 2 : 1);
            if (isSheep) addItem(agent, 'raw_wool', 1);

            this.economy.registerSupply('raw_meat', meatCount);
            this.economy.registerSupply('animal_hide', hideCount);

            this.soundEngine?.playFlintStrike();
            agent.huntCooldown = 20.0; // Cooldown after successful hunt

            this.setSpeech(agent, `A clean strike! We brought down a wild ${prey.species}!`, 7);
            this.addChronicle(
              `Successful Hunt: ${prey.species}`,
              `${agent.name} hunted a wild ${prey.species}, providing meat and hide for the settlement.`,
              'discovery',
              '🏹'
            );
          } else {
            agent.huntCooldown = 15.0;
            this.setSpeech(agent, 'The wild game escaped into the underbrush! I must try another time.', 5);
          }
        }
        agent.currentAction = 'Dressed and butchered wild game';
      }
    } else if (task.name.includes('Befriending forest wolf')) {
      if (this.fauna && hasItem(agent, 'cooked_meat', 1)) {
        removeItem(agent, 'cooked_meat', 1);
        const wolf = this.fauna.getNearestTameableWolf(agent.x, agent.y, 3.0);
        if (wolf) {
          const dogName = agent.gender === 'male' ? 'Hunter' : 'Lupa';
          this.fauna.tameWolfIntoDog(wolf, agent, dogName);
          this.setSpeech(agent, `Look at him wag his tail! The forest wolf has become our loyal hound, ${dogName}!`, 8);
          this.addChronicle(
            'First Canine Domesticated',
            `${agent.name} offered roasted meat to a wild wolf and welcomed domestic dog ${dogName} into mankind's companionship!`,
            'milestone',
            '🐕'
          );
        }
      }
      agent.currentAction = 'Befriended loyal dog companion';
    } else if (task.type === 'crafting') {
      agent.currentAction = `Finished ${task.name}`;
    } else if (task.type === 'researching') {
      agent.currentAction = 'Reflecting on experiments';
    } else if (task.type === 'building') {
      agent.currentAction = 'Completed construction phase';
    }
  }

  // --- GOAL SELECTION & NATURAL LIVING BEHAVIOR ---
  private decideAgentGoal(
    agent: Agent,
    allAgents: Agent[],
    newAgentsOut: Agent[],
    deltaSec: number
  ): void {
    agent.stateTimer += deltaSec;

    // Check if settlement should be formally consecrated
    this.checkSettlementFounding(agent);

    // Infants stay in crib or near parents
    if (agent.lifeStage === 'infant') {
      this.handleInfantBehavior(agent, allAgents);
      return;
    }

    // Children have playful routines and follow parents
    if (agent.lifeStage === 'child') {
      if (this.handleChildBehavior(agent, allAgents)) return;
    }

    // Elders have wisdom storytelling & ancestral memorial routines
    if (agent.lifeStage === 'elder') {
      if (this.handleElderBehavior(agent, allAgents)) return;
    }

    // 1. TABULA RASA: PRIMITIVE EXPLORATION & DISCOVERY OF NATURAL FORCES FIRST!
    if (this.tryPrimitiveExplorationAndDiscovery(agent)) {
      return;
    }

    // 2. CRITICAL: EAT IF HUNGRY — triggers at 65% so pioneers eat proactively, not just when starving
    if (agent.needs.hunger < 65) {
      if (this.tryEatFoodFromInventory(agent)) {
        return;
      }
      if (agent.knowledge.has('wild_nourishment')) {
        this.seekAndForageFood(agent);
        return;
      }
    }

    // 3. CIRCADIAN SLEEP: SLEEP THROUGH THE NIGHT (21:00 - 05:30) OR WHEN EXHAUSTED
    const time = this.world.timeOfDay;
    const isNight = time >= 21.0 || time < 5.5;
    const isExhausted = agent.needs.energy < 25;

    if (isNight || isExhausted) {
      this.seekShelterOrRest(agent);
      return;
    }

    // 4. DUSK & CHILL: SEEK HEARTH OR SHELTER TO STAY WARM
    const isDusk = time >= 19.0 || time < 6.0;
    const isChilly = agent.needs.warmth < 60;

    if (isDusk && isChilly) {
      this.seekShelterOrFire(agent);
      return;
    }

    // 5. SOCIALIZING, ROMANCE & PROCREATION (Courting, building trust, marriage)
    if (this.trySocializeOrProcreate(agent, allAgents, newAgentsOut, deltaSec)) {
      return;
    }

    // 6. CAREFUL EXPERIMENTATION & RESEARCH (Accumulates over real time!)
    if (this.tryInventOrExperiment(agent)) {
      return;
    }

    // 7. BUILD ESSENTIAL INFRASTRUCTURE (Shelter, Kiln, Farm)
    if (this.tryWorkOnBuilding(agent)) {
      return;
    }

    if (this.tryPlanNewBuilding(agent)) {
      return;
    }

    // 8. CRAFTING RECIPES (Stone tools, baskets - takes real work time)
    if (this.tryCraftItems(agent)) {
      return;
    }

    // 9. WILDLIFE HUNTING & CANINE DOMESTICATION
    if (this.tryHuntingOrTaming(agent)) {
      return;
    }

    // 10. RIVER HYDROLOGY & FISHING
    if (this.tryRiverFishing(agent)) {
      return;
    }

    // 11. TIMBER FOOTBRIDGES OVER RIVERS
    if (this.tryBuildBridge(agent)) {
      return;
    }

    // 12. SOLSTICE CEREMONIAL DANCE CELEBRATION
    if (this.trySolsticeCelebration(agent)) {
      return;
    }

    // 13. HORSE TAMING & MOUNTING
    if (this.tryHorseTamingOrMounting(agent)) {
      return;
    }

    // 14. NAUTICAL BOAT EMBARKATION
    if (this.tryBoatNavigation(agent)) {
      return;
    }

    // 15. GREAT LIBRARY SCRIBING & PHILOSOPHY
    if (this.tryGreatLibraryStudy(agent)) {
      return;
    }

    // 16. SETTLEMENT SENTINEL PATROL
    if (this.trySentinelPatrol(agent)) {
      return;
    }

    // 17. NATURAL PAUSE / CONTEMPLATION (Pioneers take time to observe the world)
    if (Math.random() < 0.15 && agent.needs.hunger > 60 && agent.needs.energy > 50) {
      agent.currentGoal = 'Contemplating nature';
      agent.currentAction = 'Observing the horizon';
      return;
    }

    // 18. FORAGE & EXPLORE (Only for discovered materials!)
    this.gatherResourcesForSettlement(agent);
  }

  // --- LIFE STAGE BEHAVIORS (INFANTS, CHILDREN, ELDERS) & SETTLEMENT FOUNDING ---
  private checkSettlementFounding(agent: Agent): void {
    if (this.world.buildings.size >= 2) {
      const hasShelter = Array.from(this.world.buildings.values()).some(
        (b) => b.isCompleted && ['lean_to', 'mud_hut', 'thatched_cabin'].includes(b.type)
      );
      const hasFire = Array.from(this.world.buildings.values()).some(
        (b) => b.isCompleted && b.type === 'campfire'
      );
      const hasTotem = Array.from(this.world.buildings.values()).some(
        (b) => b.type === 'settlement_totem'
      );

      if (hasShelter && hasFire && !hasTotem) {
        const shelter = Array.from(this.world.buildings.values()).find(
          (b) => b.isCompleted && ['lean_to', 'mud_hut', 'thatched_cabin'].includes(b.type)
        )!;
        const tx = Math.round(shelter.x + 2);
        const ty = Math.round(shelter.y);

        const totem = this.world.placeBuilding('settlement_totem', tx, ty, agent.id);
        if (totem) {
          totem.isCompleted = true;
          totem.meta = { settlementName: 'Haven of Eden', foundedDay: this.world.day };
        }
        this.world.settlementName = 'Haven of Eden';

        this.setSpeech(agent, 'Here by our shelter and fire, we consecrate Haven of Eden, our eternal homeland!', 8);
        this.soundEngine?.playWeddingChime();
        this.addChronicle(
          'Settlement Founded: Haven of Eden',
          `${agent.name} and the pioneers raised an entrance totem and formally established Haven of Eden as mankind's first permanent settlement!`,
          'milestone',
          '🏛️'
        );
      }
    }
  }

  private handleInfantBehavior(agent: Agent, allAgents: Agent[]): void {
    const shelter = this.findNearestBuilding(agent.x, agent.y, (b) => {
      return b.isCompleted && ['lean_to', 'mud_hut', 'thatched_cabin', 'timber_house'].includes(b.type);
    });
    const mother = allAgents.find((a) => agent.parentsIds.includes(a.id) || a.gender === 'female');

    if (shelter) {
      const dist = Math.hypot(shelter.x - agent.x, shelter.y - agent.y);
      if (dist > 1.2) {
        agent.currentGoal = 'Rest in family crib';
        agent.currentAction = 'Resting in shelter crib';
        this.setAgentMoveTarget(agent, shelter.x, shelter.y);
        return;
      }
    } else if (mother) {
      const dist = Math.hypot(mother.x - agent.x, mother.y - agent.y);
      if (dist > 2.0) {
        agent.currentGoal = 'Stay close to mother';
        agent.currentAction = 'Crawling near mother';
        this.setAgentMoveTarget(agent, mother.x, mother.y);
        return;
      }
    }

    agent.currentGoal = 'Rest in family crib';
    agent.currentAction = 'Babbling peacefully in crib';
    if (Math.random() < 0.05 && !agent.speechBubble) {
      const babbles = ['Goo... mama!', 'Da da!', 'Ba ba!', 'Ahhh...', 'Giggle!'];
      this.setSpeech(agent, babbles[Math.floor(Math.random() * babbles.length)], 4);
    }
  }

  private handleChildBehavior(agent: Agent, allAgents: Agent[]): boolean {
    // 1. Play with domestic dog companion!
    if (this.fauna && Math.random() < 0.25) {
      const dog = this.fauna.animals.find((a) => a.species === 'dog');
      if (dog) {
        const dist = Math.hypot(dog.x - agent.x, dog.y - agent.y);
        if (dist > 2.0) {
          agent.currentGoal = `Play with ${dog.name || 'companion dog'}`;
          agent.currentAction = `Playing with ${dog.name || 'dog'} in meadow`;
          this.setAgentMoveTarget(agent, dog.x, dog.y);
          return true;
        } else if (Math.random() < 0.15 && !agent.speechBubble) {
          this.setSpeech(agent, `Good doggy, ${dog.name || 'Hunter'}! Look at you wag your tail!`, 5);
          return true;
        }
      }
    }

    // 2. Follow and observe adult parents at work (learning crafts)
    const parent = allAgents.find((a) => agent.parentsIds.includes(a.id) || (a.lifeStage === 'adult' && a.id !== agent.id));
    if (parent && Math.random() < 0.4) {
      const dist = Math.hypot(parent.x - agent.x, parent.y - agent.y);
      if (dist > 3.0) {
        agent.currentGoal = `Watch ${parent.name} work`;
        agent.currentAction = `Following ${parent.name} to learn crafts`;
        this.setAgentMoveTarget(agent, parent.x, parent.y);
        return true;
      } else if (Math.random() < 0.08 && !agent.speechBubble) {
        const childQuestions = [
          `"${parent.name}, how do river stones make sparks of fire?"`,
          `"Will I be strong enough to build a big cabin one day?"`,
          `"Look at that pretty bird singing in the tall trees!"`,
          `"Can I help you pick sweet red berries?"`
        ];
        this.setSpeech(agent, childQuestions[Math.floor(Math.random() * childQuestions.length)], 6);
        return true;
      }
    }

    // 3. Play in the meadow
    if (Math.random() < 0.2) {
      agent.currentGoal = 'Play in meadow';
      agent.currentAction = 'Picking wildflowers and running';
      return true;
    }

    return false;
  }

  private handleElderBehavior(agent: Agent, allAgents: Agent[]): boolean {
    // 1. Natural dignified passing of old age (at age >= 75)
    if (agent.age >= 75 && Math.random() < 0.0006) {
      const cairnX = Math.round(agent.x);
      const cairnY = Math.round(agent.y);
      const cairn = this.world.placeBuilding('ancestral_cairn', cairnX, cairnY, agent.id);
      if (cairn) {
        cairn.isCompleted = true;
        cairn.meta = { elderName: agent.name, generation: agent.generation, passedDay: this.world.day };
      }

      agent.isDeceased = true;
      agent.deceasedDay = this.world.day;

      this.addChronicle(
        `Passing of Elder ${agent.name}`,
        `Beloved Elder ${agent.name} passed peacefully into eternal rest at age ${Math.floor(agent.age)}. Descendants raised an Ancestral Memorial Cairn in their honor.`,
        'milestone',
        '🕊️'
      );

      const idx = allAgents.indexOf(agent);
      if (idx >= 0) allAgents.splice(idx, 1);
      return true;
    }

    // 2. Impart ancestral wisdom by the campfire
    const isEvening = this.world.timeOfDay >= 19.0 && this.world.timeOfDay < 21.0;
    const nearFire = this.isNearWarmthSource(agent.x, agent.y);
    if (isEvening && nearFire && Math.random() < 0.08 && !agent.speechBubble) {
      const elderTales = [
        `"Listen closely, young ones: long ago, our hands were empty until we struck river flint to kindle fire."`,
        `"Every tree and river has a spirit. Respect this earth, and it will always provide for our people."`,
        `"I remember when our settlement was only two souls beneath the vast sky. Look how we have grown."`,
        `"Keep the hearth flame burning bright, and no darkness will ever conquer our home."`
      ];
      this.setSpeech(agent, elderTales[Math.floor(Math.random() * elderTales.length)], 8);
      this.soundEngine?.playFolkMelody();
      return true;
    }

    // 3. Visit ancestral cairns to pay respects
    for (const b of this.world.buildings.values()) {
      if (b.type === 'ancestral_cairn' && b.isCompleted) {
        const dist = Math.hypot(b.x - agent.x, b.y - agent.y);
        if (dist <= 2.5 && Math.random() < 0.08 && !agent.speechBubble) {
          const elderName = b.meta?.elderName || 'our ancestors';
          this.setSpeech(agent, `We honor you, ${elderName}. Your legacy guides our children's footsteps.`, 6);
          agent.needs.social = Math.min(100, agent.needs.social + 20);
          return true;
        }
      }
    }

    return false;
  }

  // --- STEP-BY-STEP FOUNDATIONAL DISCOVERY ---
  private tryPrimitiveExplorationAndDiscovery(agent: Agent): boolean {
    // 1. DISCOVER EDIBLE BERRIES
    if (!agent.knowledge.has('wild_nourishment')) {
      const bush = this.findNearestTileMatching(agent.x, agent.y, 16, (t) => t.type === 'fertile_soil' && t.resourceAmount > 0);
      if (bush) {
        const dist = Math.hypot(bush.x - agent.x, bush.y - agent.y);
        if (dist <= 1.2) {
          agent.activeTask = {
            name: 'Examining unfamiliar red berries',
            type: 'foraging',
            progress: 0,
            duration: 8.0,
            targetX: bush.x,
            targetY: bush.y,
          };
          agent.currentAction = 'Inspecting wild red fruits';
        } else {
          agent.currentGoal = 'Approach unfamiliar red foliage';
          agent.currentAction = 'Walking toward wild berry bush';
          this.setAgentMoveTarget(agent, bush.x, bush.y);
        }
        return true;
      }
    }

    // 2. DISCOVER WOOD
    if (!agent.knowledge.has('discovery_wood')) {
      const tree = this.findNearestTileMatching(agent.x, agent.y, 16, (t) => (t.type === 'sparse_trees' || t.type === 'dense_forest') && t.resourceAmount > 0);
      if (tree) {
        const dist = Math.hypot(tree.x - agent.x, tree.y - agent.y);
        if (dist <= 1.2) {
          agent.activeTask = {
            name: 'Inspecting fallen branches & tree trunk',
            type: 'foraging',
            progress: 0,
            duration: 10.0,
            targetX: tree.x,
            targetY: tree.y,
          };
          agent.currentAction = 'Touching tree bark and examining branches';
        } else {
          agent.currentGoal = 'Approach tall tree canopy';
          agent.currentAction = 'Walking toward fallen timber';
          this.setAgentMoveTarget(agent, tree.x, tree.y);
        }
        return true;
      }
    }

    // 3. DISCOVER STONE
    if (!agent.knowledge.has('discovery_stone')) {
      const rockTile = this.findNearestTileMatching(agent.x, agent.y, 16, (t) => t.type === 'stone_hill' || t.type === 'water');
      if (rockTile) {
        const dist = Math.hypot(rockTile.x - agent.x, rockTile.y - agent.y);
        if (dist <= 1.2) {
          agent.activeTask = {
            name: 'Examining smooth heavy river stones',
            type: 'foraging',
            progress: 0,
            duration: 10.0,
            targetX: rockTile.x,
            targetY: rockTile.y,
          };
          agent.currentAction = 'Picking up heavy river pebble';
        } else {
          agent.currentGoal = 'Examine grey stones by riverbank';
          agent.currentAction = 'Walking toward stone deposit';
          this.setAgentMoveTarget(agent, rockTile.x, rockTile.y);
        }
        return true;
      }
    }

    // 4. DISCOVER FLINT (SHARP FRACTURE)
    if (agent.knowledge.has('discovery_stone') && !agent.knowledge.has('discovery_flint')) {
      if (hasItem(agent, 'stone', 1)) {
        agent.activeTask = {
          name: 'Knocking two river stones together',
          type: 'researching',
          progress: 0,
          duration: 14.0,
        };
        agent.currentAction = 'Striking stones to test hardness';
        return true;
      } else {
        const rockTile = this.findNearestTileMatching(agent.x, agent.y, 16, (t) => t.type === 'stone_hill');
        if (rockTile) {
          this.setAgentMoveTarget(agent, rockTile.x, rockTile.y);
          agent.currentAction = 'Searching for a river stone to examine';
          return true;
        }
      }
    }

    // 5. DISCOVER PERCUSSION SPARKS
    if (agent.knowledge.has('discovery_flint') && !agent.knowledge.has('discovery_sparks')) {
      if (hasItem(agent, 'flint', 1) && hasItem(agent, 'stone', 1)) {
        agent.activeTask = {
          name: 'Striking sharp flint against stone',
          type: 'researching',
          progress: 0,
          duration: 14.0,
        };
        agent.currentAction = 'Striking flint at high velocity';
        return true;
      }
    }

    // 6. DISCOVER FIRE
    if (agent.knowledge.has('discovery_sparks') && agent.knowledge.has('discovery_wood') && !agent.knowledge.has('discovery_fire')) {
      const isNightOrDusk = this.world.timeOfDay >= 18.0 || this.world.timeOfDay < 5.5;
      const isCold = agent.needs.warmth < 65 || this.world.weather === 'Rain';
      if (isNightOrDusk || isCold || agent.needs.curiosity > 70) {
        if (hasItem(agent, 'flint', 1) && hasItem(agent, 'stick', 2)) {
          agent.activeTask = {
            name: 'Catching flint sparks in dry tinder nest',
            type: 'striking_fire',
            progress: 0,
            duration: 22.0,
          };
          agent.currentAction = 'Blowing gently on warm smoky ember';
          this.setSpeech(agent, 'I see a faint wisp of smoke... breathe gently into the dry tinder nest!');
          return true;
        }
      }
    }

    // 7. DISCOVER CONTAINED CAMPFIRE HEARTH
    if (agent.knowledge.has('discovery_fire') && !agent.knowledge.has('contained_hearth')) {
      const isNightOrDusk = this.world.timeOfDay >= 18.0 || this.world.timeOfDay < 5.5;
      if (isNightOrDusk || agent.needs.warmth < 50) {
        if (hasItem(agent, 'stone', 4) && hasItem(agent, 'stick', 4)) {
          agent.activeTask = {
            name: 'Arranging river stones into a safe hearth ring',
            type: 'building',
            progress: 0,
            duration: 20.0,
          };
          agent.currentAction = 'Placing protective ring of river stones';
          return true;
        }
      }
    }

    return false;
  }

  private tryEatFoodFromInventory(agent: Agent): boolean {
    const foodPriorities: ItemType[] = ['cooked_meat', 'cooked_fish', 'bread', 'cooked_food', 'fresh_fish', 'berries', 'raw_meat', 'harvested_wheat'];
    for (const food of foodPriorities) {
      if (hasItem(agent, food, 1)) {
        removeItem(agent, food, 1);
        const gain = food === 'cooked_meat' ? 60 : food === 'cooked_fish' ? 55 : food === 'bread' ? 50 : food === 'cooked_food' ? 40 : food === 'fresh_fish' ? 35 : food === 'raw_meat' ? 30 : 25;
        agent.needs.hunger = Math.min(100, agent.needs.hunger + gain);
        if (food === 'cooked_meat' || food === 'cooked_fish' || food === 'cooked_food') {
          agent.needs.warmth = Math.min(100, agent.needs.warmth + 25); // hot meal provides radiant warmth against cold!
        }
        agent.currentAction = `Eating ${food.replace('_', ' ')}`;
        this.economy.registerDemand(food, 1);
        return true;
      }
    }
    return false;
  }

  private tryHuntingOrTaming(agent: Agent): boolean {
    if (!this.fauna) return false;

    // 1. TAME FOREST WOLF WITH ROASTED MEAT INTO DOMESTIC DOG
    if (agent.knowledge.has('wolf_domestication') && hasItem(agent, 'cooked_meat', 1)) {
      const wolf = this.fauna.getNearestTameableWolf(agent.x, agent.y, 10);
      if (wolf) {
        const dist = Math.hypot(wolf.x - agent.x, wolf.y - agent.y);
        if (dist <= 1.5) {
          agent.activeTask = {
            name: 'Befriending forest wolf with roasted meat',
            type: 'socializing',
            progress: 0,
            duration: 8.0,
            targetX: wolf.x,
            targetY: wolf.y,
          };
          agent.currentAction = 'Offering roast meat to cautious wolf';
          return true;
        } else {
          agent.currentGoal = 'Approach wild wolf with food';
          agent.currentAction = 'Walking gently toward wolf with meat';
          this.setAgentMoveTarget(agent, wolf.x, wolf.y);
          return true;
        }
      }
    }

    // 2. HUNT WILD GAME (RABBITS, DEER, SHEEP)
    if (agent.knowledge.has('spear_hunting') && (hasItem(agent, 'flint_spear', 1) || hasItem(agent, 'stone_axe', 1))) {
      // Check hunt cooldown
      if (agent.huntCooldown && agent.huntCooldown > 0) return false;

      // Exhausted pioneers do not pursue game
      if (agent.needs.energy < 30 || agent.needs.warmth < 40) {
        agent.huntChaseTimer = 0;
        return false;
      }

      if (agent.needs.hunger < 75 || !hasItem(agent, 'cooked_meat', 1)) {
        const prey = this.fauna.getNearestHuntable(agent.x, agent.y, 14);
        if (prey) {
          const dist = Math.hypot(prey.x - agent.x, prey.y - agent.y);

          // Ranged spear thrust reach (2.2 tiles)
          if (dist <= 2.2) {
            agent.huntChaseTimer = 0;
            // Cornered prey slows down
            prey.vx *= 0.15;
            prey.vy *= 0.15;
            prey.state = 'grazing';

            agent.activeTask = {
              name: `Hunting ${prey.species} with spear`,
              type: 'foraging',
              progress: 0,
              duration: 1.0, // Decisive quick thrust
              targetX: prey.x,
              targetY: prey.y,
            };
            agent.currentAction = `Striking ${prey.species} with spear`;
            return true;
          } else {
            // Chase timeout check to prevent infinite chase loops!
            agent.huntChaseTimer = (agent.huntChaseTimer || 0) + 0.25;
            if (agent.huntChaseTimer >= 7.0) {
              // Break off chase! Animal escaped into thicket
              agent.huntChaseTimer = 0;
              agent.huntCooldown = 25.0; // Cooldown 25 seconds
              agent.targetX = undefined;
              agent.targetY = undefined;
              this.setSpeech(agent, `Whew... the wild ${prey.species} darted into the thicket! I need to catch my breath.`, 5);
              agent.currentGoal = 'Catch breath';
              agent.currentAction = 'Catching breath after chase';
              return true;
            }

            agent.currentGoal = `Track wild ${prey.species}`;
            agent.currentAction = `Stalking ${prey.species} through foliage`;
            this.setAgentMoveTarget(agent, prey.x, prey.y);
            return true;
          }
        } else {
          agent.huntChaseTimer = 0;
        }
      }
    }

    return false;
  }

  private tryRiverFishing(agent: Agent): boolean {
    if (!agent.knowledge.has('river_fishing')) {
      // Epistemology sensory discovery: pioneers observing water discover fish
      const waterTile = this.findNearestTileMatching(agent.x, agent.y, 8, (t) => t.type === 'water');
      if (waterTile) {
        const dist = Math.hypot(waterTile.x - agent.x, waterTile.y - agent.y);
        if (dist <= 1.6 && Math.random() < 0.25) {
          agent.knowledge.add('river_fishing');
          const tech = TECHNOLOGIES.find((t) => t.id === 'river_fishing');
          if (tech) tech.discovered = true;
          this.setSpeech(agent, "Look! Silver trout leaping in the river current! We can fish here!", 7);
          this.addChronicle('Discovery of River Fishing', `${agent.name} discovered schools of freshwater fish swimming in the river, unlocking fishing traps and spears.`, 'discovery', '🐟');
          return true;
        }
      }
      return false;
    }

    // Don't start another fishing task if already actively fishing
    if (agent.activeTask?.type === 'foraging') return false;

    // Cooldown after last fish catch — prevents back-to-back fishing
    if ((agent as any).fishCooldown && (agent as any).fishCooldown > 0) return false;

    // Only fish when genuinely hungry (below 60%) AND not carrying 2+ fish already
    const fishHeld = getInventoryCount(agent, 'fresh_fish');
    if (fishHeld >= 2) return false; // Already has fish — go eat them first!
    if (agent.needs.hunger > 60) return false; // Full enough, do something else

    const waterTile = this.findNearestTileMatching(agent.x, agent.y, 14, (t) => t.type === 'water');
    if (waterTile) {
      const dist = Math.hypot(waterTile.x - agent.x, waterTile.y - agent.y);
      if (dist <= 1.6) {
        agent.activeTask = {
          name: 'Spearfishing trout in riverbank',
          type: 'foraging',
          progress: 0,
          duration: 7.0,
          targetX: waterTile.x,
          targetY: waterTile.y,
        };
        agent.currentAction = 'Spearfishing in shallow river water';
        if (this.soundEngine && (this.soundEngine as any).playRiverFishing) {
          (this.soundEngine as any).playRiverFishing();
        }
        // Add fish to inventory
        addItem(agent, 'fresh_fish', 1);
        this.economy.registerSupply('fresh_fish', 1);
        // Immediately consume one fish to replenish hunger (eating on the spot)
        removeItem(agent, 'fresh_fish', 1);
        agent.needs.hunger = Math.min(100, agent.needs.hunger + 35);
        agent.currentAction = 'Eating fresh catch by the riverbank';
        // 30-second cooldown before fishing again
        (agent as any).fishCooldown = 30.0;
        return true;
      } else {
        agent.currentGoal = 'Approach river to catch fish';
        agent.currentAction = 'Walking to riverbank';
        this.setAgentMoveTarget(agent, waterTile.x, waterTile.y);
        return true;
      }
    }
    return false;
  }

  private tryBuildBridge(agent: Agent): boolean {
    if (!agent.knowledge.has('bridge_engineering')) {
      const waterTile = this.findNearestTileMatching(agent.x, agent.y, 6, (t) => t.type === 'water');
      if (waterTile && agent.knowledge.has('primitive_shelter') && Math.random() < 0.2) {
        agent.knowledge.add('bridge_engineering');
        const tech = TECHNOLOGIES.find((t) => t.id === 'bridge_engineering');
        if (tech) tech.discovered = true;
        this.setSpeech(agent, "If we span timber logs across this water, we can cross to new horizons!", 7);
        this.addChronicle('Invention of Bridge Engineering', `${agent.name} conceived of timber footbridges to span rivers and cross into uncharted territory.`, 'discovery', '🌉');
        return true;
      }
      return false;
    }

    if (agent.knowledge.has('bridge_engineering') && hasItem(agent, 'wood_log', 2) && hasItem(agent, 'stick', 3)) {
      const waterTile = this.findNearestTileMatching(agent.x, agent.y, 12, (t) => t.type === 'water' && !t.building);
      if (waterTile) {
        const dist = Math.hypot(waterTile.x - agent.x, waterTile.y - agent.y);
        if (dist <= 1.8) {
          const bridge = this.world.placeBuilding('wooden_bridge', waterTile.x, waterTile.y, agent.id);
          if (bridge) {
            removeItem(agent, 'wood_log', 2);
            removeItem(agent, 'stick', 3);
            bridge.isCompleted = true;
            this.setSpeech(agent, 'The bridge is laid! The river is conquered!', 7);
            this.addChronicle('Wooden Bridge Constructed', `${agent.name} constructed a timber footbridge across the river, opening passage to new lands.`, 'construction', '🌉');
            return true;
          }
        } else {
          agent.currentGoal = 'Approach river to lay bridge timbers';
          this.setAgentMoveTarget(agent, waterTile.x, waterTile.y);
          return true;
        }
      }
    }
    return false;
  }

  private checkWinterInsulationDiscovery(agent: Agent): void {
    if (!agent.knowledge.has('tailoring_insulation')) {
      if (this.world.temperatureCelsius < 8 && (hasItem(agent, 'animal_hide', 1) || hasItem(agent, 'raw_wool', 1))) {
        agent.knowledge.add('tailoring_insulation');
        const tech = TECHNOLOGIES.find((t) => t.id === 'tailoring_insulation');
        if (tech) tech.discovered = true;
        this.setSpeech(agent, "The cold bites deep! By wrapping hides and wool fleece, we can insulate against the frost!", 7);
        this.addChronicle('Invention of Winter Insulation', `${agent.name} devised warm winter cloaks from animal hides and wool to endure freezing blizzards.`, 'discovery', '🧥');
      }
    }
  }

  private trySolsticeCelebration(agent: Agent): boolean {
    if (!this.world.isSolsticeActive) {
      agent.isDancingSolstice = false;
      return false;
    }

    // Gather around the Settlement Totem or Central Campfire
    const totem = Array.from(this.world.buildings.values()).find(
      (b) => b.isCompleted && (b.type === 'settlement_totem' || b.type === 'campfire')
    );

    if (totem) {
      const dist = Math.hypot(totem.x - agent.x, totem.y - agent.y);
      if (dist <= 3.5) {
        agent.isDancingSolstice = true;
        agent.currentGoal = 'Celebrate the Solstice Festival';
        agent.currentAction = 'Dancing in the Solstice Circle! ✨';
        agent.needs.curiosity = 100;
        agent.needs.social = 100;
        if (Math.random() < 0.05) {
          const sName = this.world.season === 'Summer' ? 'Summer Solstice' : 'Winter Solstice';
          this.setSpeech(agent, `Rejoice! The ${sName} brings renewal to our people!`, 6);
        }
        return true;
      } else {
        agent.currentGoal = 'Join the Solstice Dance';
        agent.currentAction = 'Heading to the town totem for the festival';
        this.setAgentMoveTarget(agent, totem.x + (Math.random() - 0.5) * 3, totem.y + (Math.random() - 0.5) * 3);
        return true;
      }
    }
    return false;
  }

  private tryHorseTamingOrMounting(agent: Agent): boolean {
    if (!this.fauna) return false;

    // Check taming discovery
    if (!agent.knowledge.has('horse_whispering')) {
      const wildHorse = this.fauna.getNearestTameableHorse(agent.x, agent.y, 8);
      if (wildHorse && agent.knowledge.has('primitive_shelter') && (hasItem(agent, 'raw_wool', 1) || hasItem(agent, 'harvested_wheat', 1))) {
        agent.knowledge.add('horse_whispering');
        const tech = TECHNOLOGIES.find((t) => t.id === 'horse_whispering');
        if (tech) tech.discovered = true;
        this.setSpeech(agent, "With gentle words and sweet grain, these magnificent wild mustangs will carry our people!", 7);
        this.addChronicle('Horse Domestication Discovered', `${agent.name} discovered horse whispering, opening the era of equine travel and transport.`, 'discovery', '🐎');
        return true;
      }
    }

    // Tame nearby wild horse if pioneer has lasso
    if (agent.knowledge.has('horse_whispering') || (agent.inventory.braided_lasso || 0) > 0) {
      const wildHorse = this.fauna.getNearestTameableHorse(agent.x, agent.y, 7);
      if (wildHorse) {
        const dist = Math.hypot(wildHorse.x - agent.x, wildHorse.y - agent.y);
        if (dist <= 1.5) {
          this.fauna.tameHorse(wildHorse, agent, 'Bucephalus');
          agent.currentAction = 'Saddled and tamed a loyal horse!';
          this.setSpeech(agent, 'Steady now... we shall explore the world together!', 6);
          this.addChronicle('Wild Mustang Tamed', `${agent.name} tamed a magnificent wild horse to ride across the land.`, 'milestone', '🐎');
          return true;
        } else {
          agent.currentGoal = 'Approach wild horse gently';
          agent.currentAction = 'Approaching mustang with sweet grain';
          this.setAgentMoveTarget(agent, wildHorse.x, wildHorse.y);
          return true;
        }
      }
    }

    // Mount owned horse for long journeys
    const ownedHorse = this.fauna.animals.find((a) => a.species === 'horse' && a.ownerId === agent.id);
    if (ownedHorse && !agent.isRidingHorse && agent.targetX !== undefined && agent.targetY !== undefined) {
      const tripDist = Math.hypot(agent.targetX - agent.x, agent.targetY - agent.y);
      if (tripDist > 8) {
        const dHorse = Math.hypot(ownedHorse.x - agent.x, ownedHorse.y - agent.y);
        if (dHorse <= 2.0) {
          agent.isRidingHorse = true;
          ownedHorse.riderId = agent.id;
          agent.currentAction = 'Mounted on horseback!';
          return true;
        }
      }
    }

    // Dismount when arrived at target
    if (agent.isRidingHorse && (agent.targetX === undefined || agent.targetY === undefined || Math.hypot(agent.targetX - agent.x, agent.targetY - agent.y) < 1.0)) {
      if (Math.random() < 0.3) {
        agent.isRidingHorse = false;
        if (ownedHorse) ownedHorse.riderId = undefined;
      }
    }

    return false;
  }

  private tryBoatNavigation(agent: Agent): boolean {
    if (!agent.knowledge.has('shipbuilding') && (agent.inventory.wood_log || 0) >= 3 && agent.knowledge.has('bridge_engineering')) {
      const waterNear = this.findNearestTileMatching(agent.x, agent.y, 6, (t) => t.type === 'water');
      if (waterNear && Math.random() < 0.2) {
        agent.knowledge.add('shipbuilding');
        const tech = TECHNOLOGIES.find((t) => t.id === 'shipbuilding');
        if (tech) tech.discovered = true;
        this.setSpeech(agent, "By hollowing out buoyant timber, we can construct boats to sail upon deep rivers and oceans!", 7);
        this.addChronicle('Discovery of Shipbuilding', `${agent.name} conceived of hollowed timber boats to sail upon open waters.`, 'discovery', '⛵');
        return true;
      }
    }

    // Embark onto water if carrying a wooden boat
    const currentTile = this.world.getTile(Math.round(agent.x), Math.round(agent.y));
    const isWater = currentTile?.type === 'water' || currentTile?.type === 'deep_water';

    if ((agent.inventory.wooden_boat || 0) > 0) {
      if (isWater && !agent.isInBoat) {
        agent.isInBoat = true;
        agent.currentAction = 'Sailing upon river waters in a wooden boat ⛵';
        return true;
      }
    }

    if (agent.isInBoat && !isWater) {
      agent.isInBoat = false;
      agent.currentAction = 'Disembarked boat onto dry land';
    }

    return false;
  }

  private tryGreatLibraryStudy(agent: Agent): boolean {
    const library = Array.from(this.world.buildings.values()).find(
      (b) => b.type === 'great_library' && b.isCompleted
    );
    if (!library) return false;

    if (agent.lifeStage === 'adult' || agent.lifeStage === 'elder') {
      const dist = Math.hypot(library.x - agent.x, library.y - agent.y);
      if (dist <= 2.5) {
        agent.currentGoal = 'Study codices in the Great Archive';
        agent.currentAction = 'Inscribing historical chronicles & philosophy';
        agent.needs.curiosity = Math.min(100, agent.needs.curiosity + 0.2);
        return true;
      } else if (Math.random() < 0.12) {
        agent.currentGoal = 'Visit the Great Library';
        agent.currentAction = 'Walking to the library to study scrolls';
        this.setAgentMoveTarget(agent, library.x, library.y);
        return true;
      }
    }
    return false;
  }

  private trySentinelPatrol(agent: Agent): boolean {
    if ((agent.inventory.wooden_shield || 0) > 0 || (agent.inventory.hunting_bow || 0) > 0) {
      const gate = Array.from(this.world.buildings.values()).find(
        (b) => (b.type === 'watch_gate' || b.type === 'timber_palisade') && b.isCompleted
      );
      if (gate) {
        const dist = Math.hypot(gate.x - agent.x, gate.y - agent.y);
        if (dist <= 2.5) {
          agent.currentGoal = 'Guard settlement perimeter';
          agent.currentAction = 'Standing sentinel watch with shield & bow 🛡️';
          return true;
        } else if (Math.random() < 0.15) {
          agent.currentGoal = 'Patrol perimeter gate';
          agent.currentAction = 'Walking to watch gate for perimeter patrol';
          this.setAgentMoveTarget(agent, gate.x, gate.y);
          return true;
        }
      }
    }
    return false;
  }

  private seekAndForageFood(agent: Agent): void {
    agent.currentGoal = 'Seek food';
    const target = this.findNearestTileMatching(agent.x, agent.y, 16, (tile) => {
      if (tile.building && tile.building.isCompleted && tile.building.type === 'farm_plot') {
        return (tile.building.storage.harvested_wheat || 0) > 0;
      }
      return tile.type === 'fertile_soil' && tile.resourceAmount > 0;
    });

    if (target) {
      const dist = Math.hypot(target.x - agent.x, target.y - agent.y);
      if (dist <= 1.2) {
        agent.activeTask = {
          name: 'Foraging sweet berries',
          type: 'foraging',
          progress: 0,
          duration: 8.0,
          targetX: target.x,
          targetY: target.y,
        };
        agent.currentAction = 'Picking berries from bush';
      } else {
        agent.currentAction = 'Walking to berry bush';
        this.setAgentMoveTarget(agent, target.x, target.y);
      }
    } else {
      this.wanderNearOrigin(agent);
    }
  }

  private seekShelterOrRest(agent: Agent): void {
    const time = this.world.timeOfDay;
    const isNight = time >= 21.0 || time < 5.5;

    agent.currentGoal = isNight ? 'Sleeping until dawn' : 'Resting to restore energy';
    const shelter = this.findNearestBuilding(agent.x, agent.y, (b) => {
      return b.isCompleted && ['lean_to', 'mud_hut', 'thatched_cabin', 'timber_house', 'masonry_house', 'campfire'].includes(b.type);
    });

    if (shelter) {
      const dist = Math.hypot(shelter.x - agent.x, shelter.y - agent.y);
      if (dist <= 1.2) {
        agent.currentAction = isNight 
          ? `Sleeping soundly in ${shelter.type.replace('_', ' ')}` 
          : `Resting peacefully near ${shelter.type.replace('_', ' ')}`;
        agent.needs.energy = Math.min(100, agent.needs.energy + 0.08);
      } else {
        agent.currentAction = isNight ? 'Heading to shelter for the night' : 'Heading to shelter for rest';
        this.setAgentMoveTarget(agent, shelter.x, shelter.y);
      }
    } else {
      agent.currentAction = isNight ? 'Sleeping in soft meadow under stars' : 'Resting in the soft meadow';
      agent.needs.energy = Math.min(100, agent.needs.energy + 0.06);
    }
  }

  private seekShelterOrFire(agent: Agent): void {
    agent.currentGoal = 'Seek warmth from cold night';
    const warmthSource = this.findNearestBuilding(agent.x, agent.y, (b) => {
      return b.isCompleted && ['campfire', 'lean_to', 'mud_hut', 'thatched_cabin', 'timber_house', 'masonry_house', 'bakery'].includes(b.type);
    });

    if (warmthSource) {
      const dist = Math.hypot(warmthSource.x - agent.x, warmthSource.y - agent.y);
      if (dist <= 1.2) {
        agent.currentAction = `Warming hands by the ${warmthSource.type.replace('_', ' ')}`;
        agent.needs.warmth = Math.min(100, agent.needs.warmth + 0.3);
      } else {
        agent.currentAction = 'Walking toward warm hearthfire';
        this.setAgentMoveTarget(agent, warmthSource.x, warmthSource.y);
      }
    }
  }

  // --- PREGNANCY GESTATION & CHILDBIRTH ---
  private updatePregnancyGestation(
    agent: Agent,
    allAgents: Agent[],
    newAgentsOut: Agent[],
    deltaSec: number
  ): void {
    if (!agent.isPregnant) return;

    // Gestation takes ~150-180 seconds of real-time simulation (equivalent to 2-3 full in-game days)
    const gestationSpeed = (100 / 150) * deltaSec;
    const prevProgress = agent.pregnancyProgress || 0;
    agent.pregnancyProgress = Math.min(100, prevProgress + gestationSpeed);

    // Milestones at 25% and 65%
    if (prevProgress < 25 && agent.pregnancyProgress >= 25) {
      const spouse = allAgents.find((a) => a.id === agent.spouseId);
      this.setSpeech(agent, 'I felt our baby flutter for the first time! A new life grows inside!', 7);
      if (spouse) {
        this.setSpeech(spouse, `Rest your feet, my love. I will gather sweet berries and firewood for our hearth.`, 7);
      }
    } else if (prevProgress < 65 && agent.pregnancyProgress >= 65) {
      const spouse = allAgents.find((a) => a.id === agent.spouseId);
      this.setSpeech(agent, 'Our baby grows strong. Soon we will hold our little one under this wide sky.', 7);
      if (spouse) {
        this.setSpeech(spouse, `Our shelter is warm and safe. We will welcome our child together!`, 7);
      }
    }

    // Giving birth at 100%
    if (agent.pregnancyProgress >= 100) {
      agent.isPregnant = false;
      agent.pregnancyProgress = 0;

      const spouse = allAgents.find((a) => a.id === agent.spouseId);
      const baby = createOffspring(agent, spouse || agent, this.world.day, agent.generation + 1);
      newAgentsOut.push(baby);

      this.soundEngine?.playBabyLullaby();

      const fatherName = spouse ? spouse.name : 'partner';
      this.setSpeech(agent, `${fatherName}, look at our precious baby ${baby.name}! A miracle in our family!`, 8);
      if (spouse) {
        this.setSpeech(spouse, `Welcome to the world, little ${baby.name}. Our home is yours forever!`, 8);
      }

      this.addChronicle(
        `Birth of ${baby.name}`,
        `${agent.name} and ${spouse ? spouse.name : 'her family'} welcomed newborn child ${baby.name} into Genesis World!`,
        'birth',
        '👶'
      );
    }
  }

  // --- ROMANCE, COURTSHIP, MARRIAGE & FAMILY LIFE ---
  private trySocializeOrProcreate(
    agent: Agent,
    allAgents: Agent[],
    _newAgentsOut: Agent[],
    deltaSec: number
  ): boolean {
    // 1. Find romantic partner / companion
    let partner: Agent | undefined;
    if (agent.spouseId) {
      partner = allAgents.find((a) => a.id === agent.spouseId);
    } else {
      partner = allAgents.find(
        (a) => a.id !== agent.id && a.age >= 15 && a.gender !== agent.gender && (!a.spouseId || a.spouseId === agent.id)
      );
    }
    if (!partner) return false;

    // 2. Ensure relationship records exist symmetrically
    if (!agent.relationships[partner.id]) {
      agent.relationships[partner.id] = {
        targetId: partner.id,
        affection: 15,
        trust: 20,
        lastInteracted: 0,
        stage: 'strangers',
      };
    }
    if (!partner.relationships[agent.id]) {
      partner.relationships[agent.id] = {
        targetId: agent.id,
        affection: 15,
        trust: 20,
        lastInteracted: 0,
        stage: 'strangers',
      };
    }

    const rel = agent.relationships[partner.id];
    const partnerRel = partner.relationships[agent.id];
    const dist = Math.hypot(partner.x - agent.x, partner.y - agent.y);

    // 3. Partner protective care behavior (Husband feeding pregnant wife)
    if (partner.isPregnant && (partner.needs.hunger < 70 || hasItem(agent, 'berries', 1))) {
      if (dist <= 2.8 && hasItem(agent, 'berries', 1)) {
        removeItem(agent, 'berries', 1);
        addItem(partner, 'berries', 1);
        partner.needs.hunger = Math.min(100, partner.needs.hunger + 25);
        this.setSpeech(agent, `Here, ${partner.name}, sweet berries for you and our little one.`, 6);
        return true;
      }
    }

    // 4. Proximity interactions
    if (dist <= 2.8) {
      const nearHearth = this.isNearWarmthSource(agent.x, agent.y);

      // Continuous bonding while together
      rel.affection = Math.min(100, rel.affection + (nearHearth ? 0.35 : 0.18) * deltaSec);
      rel.trust = Math.min(100, rel.trust + (nearHearth ? 0.3 : 0.15) * deltaSec);
      partnerRel.affection = rel.affection;
      partnerRel.trust = rel.trust;

      agent.needs.social = Math.min(100, agent.needs.social + 0.3 * deltaSec);
      partner.needs.social = Math.min(100, partner.needs.social + 0.3 * deltaSec);

      // --- STAGE 1: STRANGERS -> FRIENDS ---
      if (rel.stage === 'strangers') {
        if (rel.affection >= 30 && rel.trust >= 30) {
          rel.stage = 'friends';
          partnerRel.stage = 'friends';
          this.setSpeech(agent, `It is good to have you by my side, ${partner.name}. We are no longer alone.`, 7);
          this.setSpeech(partner, `I feel the same, ${agent.name}. Together we can face anything.`, 7);
          this.addChronicle(
            'Bonds of Companionship',
            `${agent.name} and ${partner.name} have formed a warm bond of friendship in the wilderness.`,
            'milestone',
            '🤝'
          );
          return true;
        }

        if (Math.random() < 0.03 && !agent.speechBubble) {
          const lines = [
            `"Greetings... It is comforting to see another person in this vast wild."`,
            `"The river is clear and the earth is rich. We can survive here."`,
            `"Let us share what we discover so neither of us goes cold or hungry."`
          ];
          this.setSpeech(agent, lines[Math.floor(Math.random() * lines.length)], 5);
          return true;
        }
      }

      // --- STAGE 2: FRIENDS -> CRUSH ---
      else if (rel.stage === 'friends') {
        // Gift giving / sharing berries
        if (hasItem(agent, 'berries', 1) && Math.random() < 0.05) {
          removeItem(agent, 'berries', 1);
          addItem(partner, 'berries', 1);
          rel.affection = Math.min(100, rel.affection + 6);
          partnerRel.affection = rel.affection;
          this.setSpeech(agent, `Here, ${partner.name}, fresh berries I gathered from the wild bushes.`, 6);
          this.setSpeech(partner, `Thank you, ${agent.name}! Your thoughtfulness warms my heart.`, 6);
          return true;
        }

        if (rel.affection >= 55 && rel.trust >= 50) {
          rel.stage = 'crush';
          partnerRel.stage = 'crush';
          this.setSpeech(agent, `Whenever you smile at me, ${partner.name}, my heart flutters.`, 7);
          this.setSpeech(partner, `I find myself looking for you among the tall trees, ${agent.name}...`, 7);
          this.addChronicle(
            'Awakening of Affection',
            `A tender romantic affection has begun to blossom between ${agent.name} and ${partner.name}.`,
            'milestone',
            '💕'
          );
          return true;
        }

        if (Math.random() < 0.03 && !agent.speechBubble) {
          const lines = [
            `"Working beside you makes the heaviest tasks feel light, ${partner.name}."`,
            `"The hearth is peaceful tonight with you nearby."`,
            `"I am grateful that our paths crossed in this great wilderness."`
          ];
          this.setSpeech(agent, lines[Math.floor(Math.random() * lines.length)], 5);
          return true;
        }
      }

      // --- STAGE 3: CRUSH -> IN LOVE ---
      else if (rel.stage === 'crush') {
        if (rel.affection >= 78 && rel.trust >= 70) {
          rel.stage = 'in_love';
          partnerRel.stage = 'in_love';
          this.setSpeech(agent, `${partner.name}, I love you with all my heart. Through every storm and season, I want to stand beside you.`, 8);
          this.setSpeech(partner, `And I love you, ${agent.name}. In this vast world, you are my home.`, 8);
          this.addChronicle(
            'Declaration of True Love',
            `Under the open heavens, ${agent.name} and ${partner.name} confessed their deep love for one another!`,
            'milestone',
            '💖'
          );
          return true;
        }

        if (Math.random() < 0.04 && !agent.speechBubble) {
          const lines = [
            `"Look at how the firelight shines in your eyes tonight, ${partner.name}."`,
            `"Every time I hear your voice, this wild forest feels like home."`,
            `"Will you sit with me by the hearth tonight?"`
          ];
          this.setSpeech(agent, lines[Math.floor(Math.random() * lines.length)], 6);
          return true;
        }
      }

      // --- STAGE 4: IN LOVE -> MARRIED ---
      else if (rel.stage === 'in_love') {
        // Shelter check: pioneers require a permanent shelter to establish a family home!
        let hasShelter = false;
        for (const b of this.world.buildings.values()) {
          if (b.isCompleted && ['lean_to', 'mud_hut', 'thatched_cabin', 'timber_house', 'masonry_house'].includes(b.type)) {
            hasShelter = true;
            break;
          }
        }

        if (!hasShelter) {
          if (Math.random() < 0.04 && !agent.speechBubble) {
            this.setSpeech(agent, `We must build a shelter, ${partner.name}, so we have a true hearth to bind our lives together in marriage!`, 6);
            return true;
          }
        } else if (rel.affection >= 88 && rel.trust >= 80) {
          // Sacred Marriage Union!
          rel.stage = 'married';
          partnerRel.stage = 'married';
          agent.spouseId = partner.id;
          partner.spouseId = agent.id;

          this.soundEngine?.playWeddingChime();

          this.setSpeech(agent, `By this hearth and under the stars, I take thee as my beloved spouse!`, 8);
          this.setSpeech(partner, `I take thee as my spouse! Together we will build our home and raise our children!`, 8);

          this.addChronicle(
            `Sacred Union: ${agent.name} & ${partner.name}`,
            `By the hearth of their completed shelter, ${agent.name} and ${partner.name} united in sacred marriage!`,
            'milestone',
            '💍'
          );
          return true;
        }
      }

      // --- STAGE 5: MARRIED LIFE & CONCEPTION ---
      else if (rel.stage === 'married') {
        const female = agent.gender === 'female' ? agent : partner.gender === 'female' ? partner : null;
        const male = agent.gender === 'male' ? agent : partner.gender === 'male' ? partner : null;

        if (female && male && !female.isPregnant) {
          let totalCapacity = 0;
          for (const b of this.world.buildings.values()) {
            if (b.isCompleted) {
              const spec = BUILDING_SPECS[b.type];
              totalCapacity += spec.housingCapacity || 0;
            }
          }

          const canConceive = allAgents.length < Math.max(2, totalCapacity);
          const isComfortable = female.needs.hunger > 55 && male.needs.hunger > 55;

          if (canConceive && isComfortable && Math.random() < 0.02) {
            female.isPregnant = true;
            female.pregnancyProgress = 0;

            this.setSpeech(female, `${male.name}, our love has borne fruit! I feel new life stirring within me!`, 8);
            this.setSpeech(male, `A child! I will guard our home and gather everything you need, my love!`, 8);

            this.addChronicle(
              `A Family Begins: ${female.name} is Expecting`,
              `${female.name} and ${male.name} have conceived a child! A new generation will soon grace Genesis World.`,
              'birth',
              '🤰'
            );
            return true;
          }
        }

        if (Math.random() < 0.03 && !agent.speechBubble) {
          const lines = [
            `"${partner.name}, our home is peaceful and filled with warmth."`,
            `"Building this life with you is the greatest blessing of my life."`,
            `"Together we are watching a whole world come alive."`
          ];
          this.setSpeech(agent, lines[Math.floor(Math.random() * lines.length)], 5);
          return true;
        }
      }
    }

    // 5. Approaching beloved if far apart and contemplative
    if (dist > 3.0 && dist < 22 && (rel.stage === 'crush' || rel.stage === 'in_love' || rel.stage === 'married')) {
      if (agent.needs.hunger > 55 && agent.needs.energy > 40 && Math.random() < 0.08) {
        agent.currentGoal = `Spend time with ${partner.name}`;
        agent.currentAction = `Walking toward beloved ${partner.name}`;
        this.setAgentMoveTarget(agent, partner.x, partner.y);
        return true;
      }
    }

    return false;
  }

  private tryInventOrExperiment(agent: Agent): boolean {
    if (agent.needs.curiosity < 50) return false;

    for (const tech of TECHNOLOGIES) {
      if (tech.discovered) continue;

      const prereqsMet = tech.prerequisites.every((p) => {
        const t = TECHNOLOGIES.find((item) => item.id === p);
        return t && t.discovered;
      });
      if (!prereqsMet) continue;

      let hasRequiredItems = true;
      if (tech.requiredItems) {
        for (const [item, count] of Object.entries(tech.requiredItems)) {
          if (!hasItem(agent, item as ItemType, count)) {
            hasRequiredItems = false;
            break;
          }
        }
      }

      if (hasRequiredItems) {
        agent.activeTask = {
          name: `Experimenting: ${tech.name}`,
          type: 'researching',
          progress: 0,
          duration: 16.0,
        };
        agent.currentAction = `Testing ideas for ${tech.name}`;

        // Grounded, gradual research accumulation calibrated for long-term progression
        const researchGain = 2.5 + Math.random() * 2.0;
        tech.researchProgress = (tech.researchProgress || 0) + researchGain;

        if (tech.researchProgress >= tech.requiredResearch) {
          tech.discovered = true;
          tech.discoveredBy = agent.name;
          tech.discoveredAtDay = this.world.day;
          agent.knowledge.add(tech.id);

          if (tech.requiredItems) {
            for (const [item, count] of Object.entries(tech.requiredItems)) {
              removeItem(agent, item as ItemType, count);
            }
          }

          this.setSpeech(agent, `Eureka! After deep study, I have unlocked ${tech.name}!`, 7);
          this.addChronicle(
            `Discovered: ${tech.name}`,
            `${agent.name} unlocked ${tech.name} (${tech.era.toUpperCase()} ERA).`,
            'discovery',
            tech.icon
          );

          if (tech.id === 'coin_minting') {
            this.economy.unlockCurrency();
            this.addChronicle(
              'Currency & Market Economy Established',
              'Gold coins are now minted! The barter age transitions into an official coin economy.',
              'economy',
              '🪙'
            );
          }
        } else {
          this.setSpeech(agent, `Studying ${tech.name}... Progress: ${tech.researchProgress}/${tech.requiredResearch}`, 4);
        }

        return true;
      }
    }
    return false;
  }

  private tryWorkOnBuilding(agent: Agent): boolean {
    const uncompleted = this.findNearestBuilding(agent.x, agent.y, (b) => !b.isCompleted);
    if (!uncompleted) return false;

    const dist = Math.hypot(uncompleted.x - agent.x, uncompleted.y - agent.y);
    const spec = BUILDING_SPECS[uncompleted.type];

    if (dist <= 1.5) {
      agent.activeTask = {
        name: `Assembling ${spec.name}`,
        type: 'building',
        progress: 0,
        duration: 12.0,
      };
      uncompleted.progress += 15;

      if (uncompleted.progress >= 100) {
        uncompleted.isCompleted = true;
        uncompleted.progress = 100;
        this.setSpeech(agent, `Finished building the ${spec.name}!`, 5);
        this.addChronicle(
          `Constructed ${spec.name}`,
          `${agent.name} finished building a ${spec.name}.`,
          'construction',
          '🏗️'
        );
      }
      return true;
    } else {
      agent.currentGoal = `Walk to ${spec.name}`;
      agent.currentAction = `Moving to construction site`;
      this.setAgentMoveTarget(agent, uncompleted.x, uncompleted.y);
      return true;
    }
  }

  private tryPlanNewBuilding(agent: Agent): boolean {
    const time = this.world.timeOfDay;
    const isNightOrDusk = time >= 18.0 || time < 5.5;

    const desiredBuildingOrder: BuildingType[] = [
      'campfire',
      'lean_to',
      'farm_plot',
      'clay_kiln',
      'mud_hut',
      'storage_barn',
      'thatched_cabin',
      'stone_well',
      'smelter',
      'blacksmith',
      'windmill',
      'bakery',
      'timber_house',
      'market_stall',
      'mint_bank',
      'town_hall',
    ];

    for (const bType of desiredBuildingOrder) {
      // Never build campfire during broad warm daylight
      if (bType === 'campfire' && !isNightOrDusk && this.world.weather !== 'Rain' && agent.needs.warmth > 55) {
        continue;
      }

      const spec = BUILDING_SPECS[bType];
      if (spec.requiredTech) {
        const tech = TECHNOLOGIES.find((t) => t.id === spec.requiredTech);
        if (!tech || !tech.discovered) continue;
      }

      let count = 0;
      for (const b of this.world.buildings.values()) {
        if (b.type === bType) count++;
      }

      const maxWanted = ['campfire', 'lean_to', 'clay_kiln', 'smelter', 'blacksmith', 'windmill', 'bakery', 'market_stall', 'mint_bank', 'town_hall'].includes(bType)
        ? 1
        : 3;

      if (count < maxWanted) {
        let hasMaterials = true;
        for (const [item, requiredCount] of Object.entries(spec.inputs)) {
          if (!hasItem(agent, item as ItemType, requiredCount)) {
            hasMaterials = false;
            break;
          }
        }

        if (hasMaterials) {
          const spot = this.findNearbyEmptyTile(Math.round(agent.x), Math.round(agent.y), 4);
          if (spot) {
            for (const [item, requiredCount] of Object.entries(spec.inputs)) {
              removeItem(agent, item as ItemType, requiredCount);
            }
            this.world.placeBuilding(bType, spot.x, spot.y, agent.id);
            this.setSpeech(agent, `Laying out the ground for a ${spec.name}!`);
            return true;
          }
        }
      }
    }
    return false;
  }

  private tryCraftItems(agent: Agent): boolean {
    for (const recipe of CRAFTING_RECIPES) {
      if (recipe.requiredTech) {
        const tech = TECHNOLOGIES.find((t) => t.id === recipe.requiredTech);
        if (!tech || !tech.discovered) continue;
      }

      let hasInputs = true;
      for (const [item, count] of Object.entries(recipe.inputs)) {
        if (!hasItem(agent, item as ItemType, count)) {
          hasInputs = false;
          break;
        }
      }

      if (hasInputs && getInventoryCount(agent, recipe.output) < 2) {
        agent.activeTask = {
          name: `Crafting ${recipe.name}`,
          type: 'crafting',
          progress: 0,
          duration: Math.max(8, recipe.timeCost * 2),
        };

        for (const [item, count] of Object.entries(recipe.inputs)) {
          removeItem(agent, item as ItemType, count);
        }
        addItem(agent, recipe.output, recipe.outputCount);
        this.economy.registerSupply(recipe.output, recipe.outputCount);
        this.setSpeech(agent, `Working on ${recipe.name}...`);
        return true;
      }
    }
    return false;
  }

  private gatherResourcesForSettlement(agent: Agent): void {
    // ONLY gather resources that have been discovered!
    const canGatherWood = agent.knowledge.has('discovery_wood');
    const canGatherStone = agent.knowledge.has('discovery_stone');
    const canGatherFlint = agent.knowledge.has('discovery_flint');

    if (!canGatherWood && !canGatherStone) {
      this.wanderNearOrigin(agent);
      return;
    }

    const needsWood = canGatherWood && getInventoryCount(agent, 'stick') < 12;
    const needsLog = canGatherWood && getInventoryCount(agent, 'wood_log') < 6;
    const needsStone = canGatherStone && getInventoryCount(agent, 'stone') < 10;
    const needsFlint = canGatherFlint && getInventoryCount(agent, 'flint') < 4;

    if (!needsWood && !needsLog && !needsStone && !needsFlint) {
      this.wanderNearOrigin(agent);
      return;
    }

    let targetType: 'stick' | 'wood_log' | 'stone' | 'flint' = 'stick';
    if (needsLog) targetType = 'wood_log';
    else if (needsWood) targetType = 'stick';
    else if (needsStone) targetType = 'stone';
    else if (needsFlint) targetType = 'flint';

    const tile = this.findNearestTileMatching(agent.x, agent.y, 16, (t) => {
      if (targetType === 'stick' || targetType === 'wood_log') return (t.type === 'sparse_trees' || t.type === 'dense_forest') && t.resourceAmount > 0;
      if (targetType === 'stone' || targetType === 'flint') return (t.type === 'stone_hill' || t.type === 'grass') && t.resourceAmount > 0;
      return false;
    });

    if (tile) {
      const dist = Math.hypot(tile.x - agent.x, tile.y - agent.y);
      if (dist <= 1.2) {
        let taskName = 'Examining river stones';
        if (targetType === 'stick') taskName = 'Searching brush for dry sticks';
        if (targetType === 'wood_log') taskName = 'Chopping fallen timber for logs';

        agent.activeTask = {
          name: taskName,
          type: 'foraging',
          progress: 0,
          duration: targetType === 'wood_log' ? 14.0 : 10.0,
          targetX: tile.x,
          targetY: tile.y,
        };
        agent.currentAction = `Gathering ${targetType.replace('_', ' ')}`;
      } else {
        agent.currentGoal = `Search for ${targetType}`;
        agent.currentAction = `Walking toward natural resources`;
        this.setAgentMoveTarget(agent, tile.x, tile.y);
      }
    } else {
      this.wanderNearOrigin(agent);
    }
  }

  private wanderNearOrigin(agent: Agent): void {
    if (!agent.targetX || Math.random() < 0.03) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 2 + Math.random() * 4;
      const tx = Math.round(agent.x + Math.cos(angle) * dist);
      const ty = Math.round(agent.y + Math.sin(angle) * dist);
      if (this.world.isWalkable(tx, ty)) {
        this.setAgentMoveTarget(agent, tx, ty);
        agent.currentAction = 'Walking through the meadow';
      }
    }
  }

  private findNearestTileMatching(
    startX: number,
    startY: number,
    maxRadius: number,
    predicate: (tile: any) => boolean
  ): any | null {
    let nearest: any = null;
    let nearestDist = Infinity;

    const minX = Math.floor(startX - maxRadius);
    const maxX = Math.ceil(startX + maxRadius);
    const minY = Math.floor(startY - maxRadius);
    const maxY = Math.ceil(startY + maxRadius);

    for (let x = minX; x <= maxX; x++) {
      for (let y = minY; y <= maxY; y++) {
        const tile = this.world.getTile(x, y);
        if (tile && predicate(tile)) {
          const d = (x - startX) * (x - startX) + (y - startY) * (y - startY);
          if (d < nearestDist) {
            nearestDist = d;
            nearest = tile;
          }
        }
      }
    }
    return nearest;
  }

  private findNearestBuilding(
    startX: number,
    startY: number,
    predicate: (b: Building) => boolean
  ): Building | null {
    let nearest: Building | null = null;
    let nearestDist = Infinity;

    for (const b of this.world.buildings.values()) {
      if (predicate(b)) {
        const d = (b.x - startX) * (b.x - startX) + (b.y - startY) * (b.y - startY);
        if (d < nearestDist) {
          nearestDist = d;
          nearest = b;
        }
      }
    }
    return nearest;
  }

  private findNearbyEmptyTile(originX: number, originY: number, radius: number): { x: number; y: number } | null {
    for (let r = 1; r <= radius; r++) {
      for (let dx = -r; dx <= r; dx++) {
        for (let dy = -r; dy <= r; dy++) {
          const tx = originX + dx;
          const ty = originY + dy;
          const tile = this.world.getTile(tx, ty);
          if (tile && tile.type === 'grass' && !tile.building) {
            return { x: tx, y: ty };
          }
        }
      }
    }
    return null;
  }
}
