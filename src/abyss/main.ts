import './abyss.css';
import { Simulation } from './Simulation';
import { Renderer } from './Renderer';
import { AbyssAudio } from './Audio';
import { AbyssUI } from './UI';
import { Creature } from './Creature';
import { ProfileManager } from '../profile/ProfileManager';
import { AuthModal } from '../profile/AuthModal';

async function init(): Promise<void> {
  const canvas = document.getElementById('sim-canvas') as HTMLCanvasElement;
  const uiLayer = document.getElementById('ui-layer') as HTMLElement;

  if (!canvas || !uiLayer) {
    console.error('Failed to find abyss canvas or UI container');
    return;
  }

  // Mandatory Account & Profile System
  const profileManager = ProfileManager.getInstance();
  const authModal = new AuthModal();

  await profileManager.init();

  // Large expansive deep-sea world
  const WORLD_WIDTH = 2600;
  const WORLD_HEIGHT = 1800;

  const audio = new AbyssAudio();
  const ui = new AbyssUI(uiLayer, audio);
  const sim = new Simulation(WORLD_WIDTH, WORLD_HEIGHT);
  const renderer = new Renderer(canvas);

  // Center camera in the ocean middle
  renderer.camera.x = (WORLD_WIDTH - (window.innerWidth / renderer.camera.zoom)) / 2;
  renderer.camera.y = (WORLD_HEIGHT - (window.innerHeight / renderer.camera.zoom)) / 2;

  let selectedCreature: Creature | null = null;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let hasMovedSignificantly = false;

  // Account & Profile bindings
  ui.updateProfile(profileManager.getProfile());

  profileManager.onAuth((profile) => {
    ui.updateProfile(profile);
  });

  profileManager.onXp((event) => {
    ui.showXpReward(event.amount, event.reason);
    if (event.leveledUp) {
      ui.showLevelUpCelebration(event.newLevel!, event.newTitle!);
      audio.playMutationChime();
    }
  });

  ui.onAccountClick = () => {
    if (profileManager.isAuthenticated()) {
      authModal.open('passport');
    } else {
      authModal.open('signup');
    }
  };

  // Check mandatory authentication: if not logged in, prompt sign up modal immediately!
  if (!profileManager.isAuthenticated()) {
    authModal.open('signup');
  }

  // Setup ecosystem audio and XP rewards
  sim.onEcosystemEvent = (msg, type) => {
    ui.addLogMessage(msg, type);
    if (type === 'mutation') {
      audio.playMutationChime();
      profileManager.addXP(30, 'Genetic Divergence', 'Abyss');
    } else if (type === 'birth') {
      profileManager.addXP(15, 'Offspring Evolved', 'Abyss');
    } else if (type === 'god') {
      audio.playSonarPing();
    }
  };

  // Passive observation reward (every 45s)
  setInterval(() => {
    if (profileManager.isAuthenticated()) {
      profileManager.addXP(15, 'Abyss Observation', 'Abyss');
    }
  }, 45000);

  // Wire UI event callbacks
  ui.onTimeScaleChange = (scale) => {
    ui.timeScale = scale;
  };

  ui.onDeselect = () => {
    selectedCreature = null;
    renderer.camera.targetCreatureId = null;
  };

  // Handle Canvas Pointer Interactions
  canvas.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    hasMovedSignificantly = false;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    if (Math.hypot(dx, dy) > 5) {
      hasMovedSignificantly = true;
      // Stop tracking creature if manually panned
      renderer.camera.targetCreatureId = null;
    }
    renderer.camera.x -= dx / renderer.camera.zoom;
    renderer.camera.y -= dy / renderer.camera.zoom;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;

    // If it was a click without dragging
    if (!hasMovedSignificantly) {
      handleCanvasClick(e.clientX, e.clientY);
    }
  });

  // Touch Support
  let touchStartX = 0;
  let touchStartY = 0;
  let touchMoved = false;

  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchMoved = false;
    }
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;
      if (Math.hypot(dx, dy) > 8) {
        touchMoved = true;
        renderer.camera.targetCreatureId = null;
      }
      renderer.camera.x -= dx / renderer.camera.zoom;
      renderer.camera.y -= dy / renderer.camera.zoom;
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    }
  }, { passive: true });

  canvas.addEventListener('touchend', (e) => {
    if (!touchMoved && e.changedTouches.length > 0) {
      const touch = e.changedTouches[0];
      handleCanvasClick(touch.clientX, touch.clientY);
    }
  });

  // Zoom with scroll wheel
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1;
    const newZoom = Math.max(0.4, Math.min(2.5, renderer.camera.zoom * zoomFactor));

    const mouseWorldBefore = renderer.screenToWorld(e.clientX, e.clientY);
    renderer.camera.zoom = newZoom;
    const mouseWorldAfter = renderer.screenToWorld(e.clientX, e.clientY);

    renderer.camera.x += (mouseWorldBefore.x - mouseWorldAfter.x);
    renderer.camera.y += (mouseWorldBefore.y - mouseWorldAfter.y);
  }, { passive: false });

  function handleCanvasClick(screenX: number, screenY: number): void {
    // If not logged in, clicking the canvas prompts authentication
    if (!profileManager.isAuthenticated()) {
      authModal.open('signup');
      return;
    }

    const worldPos = renderer.screenToWorld(screenX, screenY);
    const tool = ui.currentTool;

    if (tool === 'inspect') {
      const clickedCreature = sim.findCreatureAt(worldPos);
      if (clickedCreature) {
        selectedCreature = clickedCreature;
        renderer.camera.targetCreatureId = clickedCreature.id;
        audio.playBubble();
        ui.updateInspector(clickedCreature);
        profileManager.addXP(10, 'Specimen Analyzed', 'Abyss');
      } else {
        selectedCreature = null;
        renderer.camera.targetCreatureId = null;
        ui.closeInspector();
      }
    } else if (tool === 'nutrient') {
      sim.spawnNutrientBloom(worldPos.x, worldPos.y, 25);
      audio.playBubble();
      profileManager.addXP(15, 'Nutrient Plankton Deployed', 'Abyss');
    } else if (tool === 'vent') {
      sim.spawnVent(worldPos.x, worldPos.y);
      audio.playSonarPing();
      profileManager.addXP(25, 'Hydrothermal Chimney', 'Abyss');
    } else if (tool === 'mutagen') {
      sim.triggerMutagenBurst();
      profileManager.addXP(35, 'Mutagenic Radiation Wave', 'Abyss');
    } else if (tool === 'leviathan') {
      const lev = sim.spawnLeviathan(worldPos.x, worldPos.y);
      selectedCreature = lev;
      renderer.camera.targetCreatureId = lev.id;
      ui.updateInspector(lev);
      profileManager.addXP(50, 'Apex Titan Awakened', 'Abyss');
    } else if (tool === 'cull') {
      sim.cullPopulation();
      audio.playSonarPing();
      profileManager.addXP(20, 'Extinction Catalyst', 'Abyss');
    }
  }

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    const panSpeed = 30 / renderer.camera.zoom;
    if (e.key === 'ArrowUp' || e.key === 'w') {
      renderer.camera.y -= panSpeed;
      renderer.camera.targetCreatureId = null;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
      renderer.camera.y += panSpeed;
      renderer.camera.targetCreatureId = null;
    } else if (e.key === 'ArrowLeft' || e.key === 'a') {
      renderer.camera.x -= panSpeed;
      renderer.camera.targetCreatureId = null;
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
      renderer.camera.x += panSpeed;
      renderer.camera.targetCreatureId = null;
    } else if (e.key === 'Escape') {
      ui.closeInspector();
    }
  });

  // Main Simulation Loop
  let lastTime = performance.now();
  let telemetryTimer = 0;

  function loop(currentTime: number): void {
    const dtRaw = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    // Cap delta time to prevent physics explosions on background tab
    const dt = Math.min(dtRaw, 0.1) * ui.timeScale;

    if (dt > 0) {
      sim.update(dt);
    }

    renderer.render(sim, dt, selectedCreature);

    // Update telemetry and inspector periodically (every 100ms)
    telemetryTimer += dtRaw;
    if (telemetryTimer > 0.1) {
      telemetryTimer = 0;
      ui.updateStats(sim.stats);
      if (selectedCreature) {
        if (selectedCreature.isDead) {
          selectedCreature = null;
          renderer.camera.targetCreatureId = null;
          ui.closeInspector();
        } else {
          ui.updateInspector(selectedCreature);
        }
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
}

// Boot up once DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    init().catch(console.error);
  });
} else {
  init().catch(console.error);
}
