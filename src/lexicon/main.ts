import { IslandSimulation } from './engine/IslandSimulation';
import { SpellTablet } from './ui/SpellTablet';
import { DifficultyTier, LexiconState } from './types';
import { lexiconSound } from './audio/LexiconAudio';

const STORAGE_KEY = 'genesis_lexicon_save_v2';

class LexiconIslandApp {
  private appEl: HTMLElement;
  private islandSim!: IslandSimulation;
  private spellTablet!: SpellTablet;
  private state: LexiconState;

  constructor() {
    const root = document.getElementById('app');
    if (!root) throw new Error('Root #app element not found');
    this.appEl = root;
    this.state = this.loadState();

    this.init();
  }

  private init(): void {
    this.renderShell();
    this.initComponents();
    this.attachEvents();
  }

  private renderShell(): void {
    this.appEl.innerHTML = `
      <div class="lexicon-app-container">
        <!-- Header -->
        <header class="lexicon-header">
          <div class="brand-area">
            <a href="studio.html" class="back-to-hub-btn" title="Return to Genesis Studios">← Studios</a>
            <span class="brand-icon">📖</span>
            <div class="brand-text">
              <h1 class="brand-title">Lexicon Island</h1>
              <span class="brand-sub">Where Words Shape Reality</span>
            </div>
          </div>

          <div class="header-controls">
            <!-- Tier selector -->
            <select id="tier-select" class="tier-selector">
              <option value="sprout" ${this.state.tier === 'sprout' ? 'selected' : ''}>🌱 Word Sprout (Ages 5-7)</option>
              <option value="weaver" ${this.state.tier === 'weaver' ? 'selected' : ''}>📖 Sentence Weaver (Ages 8-10)</option>
              <option value="scribe" ${this.state.tier === 'scribe' ? 'selected' : ''}>🔮 Master Scribe (Ages 10-13+)</option>
            </select>

            <!-- Gems pouch -->
            <div class="gem-pouch" title="Wisdom Gems Earned">
              <span class="gem-icon">💎</span>
              <span class="gem-val" id="header-gems-val">${this.state.gems}</span>
            </div>

            <!-- Audio toggle -->
            <button class="sound-btn" id="btn-sound-toggle" title="Toggle Sound">
              🔊
            </button>
          </div>
        </header>

        <!-- Main Content -->
        <main class="lexicon-main-stage">
          <!-- Panoramic Island Simulation Stage -->
          <div class="island-viewport-card">
            <canvas id="island-canvas"></canvas>
            
            <div class="viewport-overlay-bar">
              <div class="tip-pill">
                <span>💡 Tap any creature to play with it!</span>
              </div>
              <button class="canvas-action-btn" id="btn-clear-island" title="Reset creatures">
                🧹 Clear Island
              </button>
            </div>
          </div>

          <!-- Educational Learning Center -->
          <div id="spell-tablet-container" class="tablet-host-section"></div>
        </main>
      </div>
    `;
  }

  private initComponents(): void {
    const canvas = document.getElementById('island-canvas') as HTMLCanvasElement;
    this.islandSim = new IslandSimulation(canvas);

    // Spawn an initial friendly bunny
    this.islandSim.spawnCreature('rabbit', 'Bunny', '🐰', 'meadow');

    const tabletContainer = document.getElementById('spell-tablet-container')!;
    this.spellTablet = new SpellTablet(
      tabletContainer,
      this.islandSim,
      this.state.tier,
      (gems: number) => this.awardGems(gems)
    );
  }

  private attachEvents(): void {
    // 1. Tier change
    const tierSelect = document.getElementById('tier-select') as HTMLSelectElement;
    tierSelect?.addEventListener('change', (e) => {
      const newTier = (e.target as HTMLSelectElement).value as DifficultyTier;
      this.state.tier = newTier;
      this.spellTablet.setTier(newTier);
      this.saveState();
      lexiconSound.playSuccess();
    });

    // 2. Sound Toggle
    const soundBtn = document.getElementById('btn-sound-toggle');
    soundBtn?.addEventListener('click', () => {
      const isMuted = lexiconSound.toggleMute();
      if (soundBtn) {
        soundBtn.textContent = isMuted ? '🔇' : '🔊';
      }
    });

    // 3. Clear Island
    const clearBtn = document.getElementById('btn-clear-island');
    clearBtn?.addEventListener('click', () => {
      this.islandSim.clearIsland();
      lexiconSound.playWordRemove();
    });

    // 4. Interactive canvas taps
    const canvas = document.getElementById('island-canvas') as HTMLCanvasElement;
    const handleTap = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const hit = this.islandSim.getEntityAt(x, y);

      if (hit) {
        lexiconSound.playHop();
        this.islandSim.triggerAction('hopping', hit.id);
        lexiconSound.speak(hit.name);
      } else {
        // Spawn gentle stardust
        this.islandSim.triggerAction('idle');
      }
    };

    canvas.addEventListener('click', (e) => {
      handleTap(e.clientX, e.clientY);
    });

    canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        handleTap(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });
  }

  private awardGems(amount: number): void {
    this.state.gems += amount;
    const gemsEl = document.getElementById('header-gems-val');
    if (gemsEl) {
      gemsEl.textContent = this.state.gems.toString();
      gemsEl.classList.add('pulse');
      setTimeout(() => gemsEl.classList.remove('pulse'), 600);
    }
    this.saveState();
  }

  private loadState(): LexiconState {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not load saved state', e);
    }
    return {
      tier: 'sprout',
      mode: 'quests',
      gems: 20,
      completedQuestIds: [],
      completedPuzzleIds: [],
      activeQuestId: 'quest_sprout_1',
      soundEnabled: true
    };
  }

  private saveState(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not save state', e);
    }
  }
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
  new LexiconIslandApp();
});
