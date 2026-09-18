import { IslandSimulation } from './engine/IslandSimulation';
import { QuestManager } from './quests/QuestManager';
import { SpellTablet } from './ui/SpellTablet';
import { DifficultyTier, ParsedSentence, StoryQuest, LexiconState } from './types';
import { lexiconSound } from './audio/LexiconAudio';

const STORAGE_KEY = 'genesis_lexicon_save_v1';

class LexiconIslandApp {
  private appEl: HTMLElement;
  private islandSim!: IslandSimulation;
  private questManager: QuestManager;
  private spellTablet!: SpellTablet;
  private state: LexiconState;
  private activeQuest: StoryQuest | null = null;

  constructor() {
    const root = document.getElementById('app');
    if (!root) throw new Error('Root #app element not found');
    this.appEl = root;
    this.questManager = new QuestManager();
    this.state = this.loadState();

    this.init();
  }

  private init(): void {
    this.renderShell();
    this.initComponents();
    this.loadQuestForTier();
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

        <!-- Main Stage -->
        <main class="lexicon-main-stage">
          <!-- Left: Island Canvas -->
          <div class="island-canvas-panel">
            <canvas id="island-canvas"></canvas>
            <div class="canvas-floating-controls">
              <button class="canvas-ctrl-btn" id="btn-clear-island" title="Clear all summoned creatures">
                🧹 Clear Island
              </button>
            </div>
          </div>

          <!-- Right: Spell Tablet -->
          <div id="spell-tablet-container"></div>
        </main>
      </div>
    `;

    this.attachHeaderListeners();
  }

  private initComponents(): void {
    const canvas = document.getElementById('island-canvas') as HTMLCanvasElement;
    this.islandSim = new IslandSimulation(canvas);

    const tabletContainer = document.getElementById('spell-tablet-container')!;
    this.spellTablet = new SpellTablet(tabletContainer, (parsed: ParsedSentence) => {
      this.handleSentenceCast(parsed);
    });
  }

  private loadQuestForTier(): void {
    const available = this.questManager.getQuestsForTier(this.state.tier);
    // Pick first uncompleted quest or first quest
    const uncompleted = available.find(q => !this.state.completedQuestIds.includes(q.id));
    this.activeQuest = uncompleted || available[0] || null;

    this.spellTablet.setTier(this.state.tier);
    this.spellTablet.setQuest(this.activeQuest);
  }

  private handleSentenceCast(parsed: ParsedSentence): void {
    // 1. Spawn entity physically onto the island canvas
    const entity = this.islandSim.spawnFromSentence(parsed);
    if (!entity) return;

    lexiconSound.playEntityEmergence();

    // 2. Evaluate against current quest if active
    if (this.activeQuest) {
      const result = this.questManager.evaluateSentence(this.activeQuest, parsed);

      if (result.success) {
        lexiconSound.playQuestFanfare();
        const gemsEarned = this.activeQuest.rewardGems;
        this.state.gems += gemsEarned;
        if (!this.state.completedQuestIds.includes(this.activeQuest.id)) {
          this.state.completedQuestIds.push(this.activeQuest.id);
        }
        this.saveState();
        this.updateHeaderStats();

        this.showVictoryModal(this.activeQuest, result.feedback, gemsEarned);
      } else {
        lexiconSound.playTryAgain();
        this.showRetryNotification(result.feedback);
      }
    }
  }

  private showVictoryModal(quest: StoryQuest, message: string, gems: number): void {
    const modal = document.createElement('div');
    modal.className = 'lexicon-modal-overlay';
    modal.innerHTML = `
      <div class="lexicon-modal-card">
        <div class="modal-mascot">${quest.npcAvatar}</div>
        <h2>"${quest.title}" Solved!</h2>
        <div class="modal-dialogue-box">
          <p>${message}</p>
        </div>
        <div class="gem-pouch" style="margin: 0 auto 1.25rem; display: inline-flex;">
          <span>💎</span>
          <span>+${gems} Wisdom Gems Earned!</span>
        </div>
        <button class="modal-btn" id="btn-modal-next">Next Story Challenge ➡️</button>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#btn-modal-next')?.addEventListener('click', () => {
      modal.remove();
      this.loadQuestForTier();
      this.spellTablet.clear();
    });
  }

  private showRetryNotification(feedback: string): void {
    const toast = document.createElement('div');
    toast.className = 'grammar-feedback-bar invalid';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.zIndex = '99';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    toast.innerHTML = `<span>💡 ${feedback}</span>`;

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  private updateHeaderStats(): void {
    const gemEl = document.getElementById('header-gems-val');
    if (gemEl) gemEl.textContent = this.state.gems.toString();
  }

  private attachHeaderListeners(): void {
    const tierSelect = document.getElementById('tier-select') as HTMLSelectElement | null;
    const soundBtn = document.getElementById('btn-sound-toggle');
    const clearIslandBtn = document.getElementById('btn-clear-island');

    if (tierSelect) {
      tierSelect.addEventListener('change', () => {
        this.state.tier = tierSelect.value as DifficultyTier;
        this.saveState();
        lexiconSound.playSpellCast();
        this.loadQuestForTier();
      });
    }

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const muted = lexiconSound.toggleMute();
        soundBtn.textContent = muted ? '🔇' : '🔊';
      });
    }

    if (clearIslandBtn) {
      clearIslandBtn.addEventListener('click', () => {
        this.islandSim.clearEntities();
        lexiconSound.playWordRemove();
      });
    }
  }

  private getInitialState(): LexiconState {
    return {
      tier: 'sprout',
      gems: 25,
      completedQuestIds: [],
      activeQuestId: 'sprout_1',
      soundEnabled: true,
      sandboxMode: false
    };
  }

  private loadState(): LexiconState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return { ...this.getInitialState(), ...JSON.parse(raw) };
    } catch (e) {
      console.warn('Failed to load Lexicon save:', e);
    }
    return this.getInitialState();
  }

  private saveState(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to save Lexicon state:', e);
    }
  }
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new LexiconIslandApp();
});
