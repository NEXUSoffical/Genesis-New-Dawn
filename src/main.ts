import './ui/styles.css';
import { WorldManager } from './simulation/World';
import { EconomyEngine } from './simulation/Economy';
import { AIEngine } from './simulation/AIEngine';
import { createInitialPioneers, createNextGenPioneers, createCustomPioneer } from './simulation/Agent';
import { Agent } from './simulation/types';
import { Camera } from './renderer/Camera';
import { CanvasRenderer } from './renderer/CanvasRenderer';
import { HUD } from './ui/HUD';
import { PersistenceManager } from './simulation/Persistence';
import { FaunaManager } from './simulation/Fauna';
import { SoundEngine } from './audio/SoundEngine';
import { AuthManager } from './auth/AuthManager';
import { LoginModal } from './ui/LoginModal';
import { HomePage } from './ui/HomePage';

class GenesisGame {
  private world: WorldManager;
  private economy: EconomyEngine;
  private fauna: FaunaManager;
  private soundEngine: SoundEngine;
  private aiEngine: AIEngine;
  private persistence: PersistenceManager;
  private camera: Camera;
  private renderer: CanvasRenderer;
  private hud: HUD;
  private agents: Agent[];
  private simSpeed: number = 1.0;
  private lastTime: number = 0;
  private marketTimer: number = 0;
  private hasSpawnedCustomCharacter: boolean = false;

  constructor() {
    // 1. Core simulation systems
    this.world = new WorldManager(1337);
    this.economy = new EconomyEngine();
    this.fauna = new FaunaManager(this.world);
    this.soundEngine = new SoundEngine();
    this.aiEngine = new AIEngine(this.world, this.economy, this.fauna, this.soundEngine);
    this.persistence = new PersistenceManager();

    // 2. Restore persistent civilization state if exists
    const saved = PersistenceManager.loadState(this.world, this.economy, this.aiEngine);
    if (saved && saved.agents && saved.agents.length > 0) {
      this.agents = saved.agents;
      if (saved.animals && saved.animals.length > 0) {
        this.fauna.animals = saved.animals;
      }
      const hasCustomPioneer = this.agents.some((a) => a.id !== 'agent_adam' && a.id !== 'agent_eve' && (!a.parentsIds || a.parentsIds.length === 0));
      this.hasSpawnedCustomCharacter = hasCustomPioneer || !!saved.hasSpawnedCustomCharacter || localStorage.getItem('genesis_custom_pioneer_spawned') === 'true';
      if (this.hasSpawnedCustomCharacter) {
        try {
          localStorage.setItem('genesis_custom_pioneer_spawned', 'true');
        } catch (e) {}
      }

      // Handle offline elapsed time: 48-hour (2 days) natural death rule
      if (saved.elapsedSeconds >= 48 * 3600) {
        // Player was absent for 2+ days (48 hours)!
        // Pioneers pass away of natural causes, leaving ancestral memorial cairns.
        const deceasedNames: string[] = [];
        for (const agent of this.agents) {
          if (!agent.isDeceased) {
            agent.isDeceased = true;
            agent.needs.health = 0;
            agent.deceasedDay = this.world.day;
            deceasedNames.push(agent.name);

            // Erect an Ancestral Memorial Cairn at their last location
            const cairn = this.world.placeBuilding('ancestral_cairn', Math.round(agent.x), Math.round(agent.y), agent.id);
            if (cairn) cairn.isCompleted = true;
          }
        }

        const daysAway = (saved.elapsedSeconds / 86400).toFixed(1);
        this.aiEngine.addChronicle(
          'Tragic Passing: 2 Days Unattended',
          `After ${daysAway} days without the Watcher's presence, ${deceasedNames.join(' and ')} passed away of natural causes. Ancestral memorial cairns mark where they once walked.`,
          'milestone',
          '🪦'
        );
      } else if (saved.elapsedSeconds > 15) {
        const minutesAway = Math.floor(saved.elapsedSeconds / 60);
        const hoursAway = (saved.elapsedSeconds / 3600).toFixed(1);
        const timeAwayDesc = minutesAway < 60 ? `${minutesAway}m` : `${hoursAway}h`;
        this.aiEngine.addChronicle(
          'Civilization Re-awoken',
          `The world safely persevered during ${timeAwayDesc} of absence. State restored.`,
          'milestone',
          '⏳'
        );

        // Advance simulation clock safely (capped at 24 hours per resume)
        const offlineMins = Math.min(saved.elapsedSeconds / 60, 24 * 60);
        this.world.updateTimeAndWeather(offlineMins);
      }
    } else {
      this.agents = createInitialPioneers();
      this.aiEngine.addChronicle(
        'Genesis: The First Spark',
        'Adam and Eve take their first steps upon this untouched earth.',
        'milestone',
        '🌱'
      );
    }

    // Attach to global window for HUD inspect
    (window as any).agents = this.agents;
    (window as any).fauna = this.fauna;

    // Window unload auto-save
    window.addEventListener('beforeunload', () => {
      PersistenceManager.saveState(this.world, this.economy, this.aiEngine, this.agents, this.fauna.animals, this.hasSpawnedCustomCharacter);
    });

    // 3. HUD & UI Mount
    this.hud = new HUD(
      this.world,
      this.economy,
      this.aiEngine,
      undefined,
      (speed) => this.simSpeed = speed,
      this.soundEngine,
      () => {
        // Awaken Next Generation after 48h natural passing
        const nextGen = createNextGenPioneers(2, 0, 0);
        this.agents.push(...nextGen);
        (window as any).agents = this.agents;
        this.camera.followTarget = nextGen[0];
        this.camera.x = nextGen[0].x;
        this.camera.y = nextGen[0].y;
        this.aiEngine.addChronicle(
          'A New Era Dawns (Gen 2)',
          'Seth and Miriam take up the sacred mantle of their ancestors, continuing the settlement in their honor.',
          'milestone',
          '🌅'
        );
      },
      (name?: string) => {
        this.spawnNewPioneer(name);
      },
      this.hasSpawnedCustomCharacter
    );

    if (this.hasSpawnedCustomCharacter) {
      this.hud.setCustomCharacterSpawned(true);
    }

    // User interaction audio unlock (browser autoplay policy)
    const unlockAudio = () => {
      this.soundEngine.init();
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
    window.addEventListener('click', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    // 4. Canvas & Camera setup
    const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
    this.camera = new Camera(canvas);
    this.hud.setCamera(this.camera);

    this.renderer = new CanvasRenderer(canvas, this.camera, this.world);

    // Start by following Adam
    this.camera.followTarget = this.agents[0];
    this.camera.x = this.agents[0].x;
    this.camera.y = this.agents[0].y;

    // Initial click on canvas to select agent or inspect tile
    this.setupCanvasInteractions(canvas);

    // 5. Start Game Loop
    requestAnimationFrame((t) => this.loop(t));
  }

  private setupCanvasInteractions(canvas: HTMLCanvasElement): void {
    const handleSelectAt = (worldX: number, worldY: number) => {
      for (const agent of this.agents) {
        const dist = Math.hypot(agent.x + 0.5 - worldX, agent.y + 0.5 - worldY);
        if (dist <= 1.3) {
          this.hud.setSelectedAgentId(agent.id);
          this.camera.followTarget = agent;
          const inspector = document.getElementById('agent-inspector');
          if (inspector && window.innerWidth <= 768) {
            inspector.classList.add('mobile-open');
          }
          return;
        }
      }
    };

    this.camera.onTap = (worldX, worldY) => {
      handleSelectAt(worldX, worldY);
    };

    canvas.addEventListener('click', (e) => {
      if (this.camera.isDragging) return;

      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const worldPos = this.camera.screenToWorld(clickX, clickY, 32);
      handleSelectAt(worldPos.x, worldPos.y);
    });
  }

  private loop(currentTime: number): void {
    if (this.lastTime === 0) this.lastTime = currentTime;
    const deltaMs = Math.min(100, currentTime - this.lastTime);
    this.lastTime = currentTime;

    const deltaSec = (deltaMs / 1000) * this.simSpeed;

    // Simulation updates (only if not paused)
    if (this.simSpeed > 0) {
      // 1. Update AI Agents
      const newBirths = this.aiEngine.updateAgents(this.agents, deltaSec);
      if (newBirths.length > 0) {
        this.agents.push(...newBirths);
        (window as any).agents = this.agents;
      }

      // 2. Update Living Wildlife & Domestic Dogs
      this.fauna.update(deltaSec, this.agents);

      // 3. Update World Day/Night & Weather
      // True Real-time: At 1x speed, 1 real second = 1 simulation second!
      const deltaMinutes = deltaSec / 60;
      this.world.updateTimeAndWeather(deltaMinutes);

      // 4. Economy market update (every 10 seconds of simulation time)
      this.marketTimer += deltaSec;
      if (this.marketTimer >= 10.0) {
        this.marketTimer = 0;
        this.economy.updateMarketTicks();
      }

      // 5. Periodic auto-save every 15 seconds
      this.persistence.update(deltaSec, this.world, this.economy, this.aiEngine, this.agents, this.fauna.animals, this.hasSpawnedCustomCharacter);
    }

    // Camera update (lerping & zoom)
    this.camera.update(deltaMs / 1000);

    // Canvas Render (including living wildlife and companions)
    this.renderer.render(this.agents, this.hud.getSelectedAgentId(), deltaMs / 1000, this.fauna.animals);

    // Dynamic Soundscape Audio Update
    this.soundEngine.update(this.world, this.camera.x, this.camera.y, deltaSec, this.fauna.animals);

    // HUD Update
    this.hud.update(this.agents, this.fauna.animals);

    requestAnimationFrame((t) => this.loop(t));
  }

  private spawnNewPioneer(name?: string): void {
    // Under any circumstances, only 1 pioneer can ever be spawned per person!
    const hasCustomPioneer = this.agents.some((a) => a.id !== 'agent_adam' && a.id !== 'agent_eve' && (!a.parentsIds || a.parentsIds.length === 0));
    if (this.hasSpawnedCustomCharacter || hasCustomPioneer || localStorage.getItem('genesis_custom_pioneer_spawned') === 'true') {
      alert('Under any circumstances, only 1 character can ever be spawned per person. Your 1 character limit has already been reached.');
      this.hasSpawnedCustomCharacter = true;
      this.hud.setCustomCharacterSpawned(true);
      return;
    }

    this.hasSpawnedCustomCharacter = true;
    try {
      localStorage.setItem('genesis_custom_pioneer_spawned', 'true');
    } catch (e) {}
    this.hud.setCustomCharacterSpawned(true);

    // Randomly simulated spawn location near settlement on a valid walkable tile
    const centerPoint = this.camera ? { x: Math.round(this.camera.x), y: Math.round(this.camera.y) } : { x: 0, y: 0 };
    let finalX = centerPoint.x;
    let finalY = centerPoint.y;
    let found = false;

    // Try multiple random angles and distances (2 to 14 tiles away)
    for (let attempt = 0; attempt < 30 && !found; attempt++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 2 + Math.random() * 12;
      const testX = Math.round(centerPoint.x + Math.cos(angle) * dist);
      const testY = Math.round(centerPoint.y + Math.sin(angle) * dist);
      const tile = this.world.getTile(testX, testY);
      if (tile && tile.type !== 'water' && tile.type !== 'deep_water') {
        finalX = testX;
        finalY = testY;
        found = true;
      }
    }

    const currentMaxGen = Math.max(1, ...this.agents.map((a) => a.generation || 1));
    const newAgent = createCustomPioneer({
      name,
      x: finalX,
      y: finalY,
      generation: currentMaxGen,
      existingAgents: this.agents,
    });

    this.agents.push(newAgent);
    (window as any).agents = this.agents;
    PersistenceManager.saveState(this.world, this.economy, this.aiEngine, this.agents, this.fauna.animals, this.hasSpawnedCustomCharacter);

    // Follow new pioneer with camera & select in inspector
    if (this.camera) {
      this.camera.followTarget = newAgent;
      this.camera.x = newAgent.x;
      this.camera.y = newAgent.y;
    }
    this.hud.setSelectedAgentId(newAgent.id);

    // Audio fanfare & chronicle
    this.soundEngine.init();
    this.soundEngine.playPioneerSpawnChime();
    this.aiEngine.addChronicle(
      'New Pioneer Welcomed',
      `${newAgent.name} (${newAgent.gender === 'male' ? '♂' : '♀'} ${newAgent.role}) has emerged onto these fertile lands to forge their destiny with our settlement!`,
      'milestone',
      '✨'
    );
  }
}

// Start game when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  const startApp = async () => {
    const currentUser = await AuthManager.getCurrentUser();
    if (!currentUser) {
      const login = new LoginModal();
      login.onLogin = (username) => {
        new GenesisGame();
      };
      login.show();
    } else {
      new GenesisGame();
    }
  };

  const homePage = new HomePage(() => {
    startApp();
  });
  homePage.mount();
});
