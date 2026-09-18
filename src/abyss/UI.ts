import { Creature } from './Creature';
import { GodTool, SimulationStats } from './types';
import { AbyssAudio } from './Audio';
import { UserProfile } from '../profile/types';

export class AbyssUI {
  private container: HTMLElement;
  public currentTool: GodTool = 'inspect';
  public timeScale: number = 1.0;
  public selectedCreature: Creature | null = null;
  public onToolChange?: (tool: GodTool) => void;
  public onTimeScaleChange?: (scale: number) => void;
  public onDeselect?: () => void;
  public onAccountClick?: () => void;

  private inspectorEl!: HTMLElement;
  private statsPopEl!: HTMLElement;
  private statsGenEl!: HTMLElement;
  private statsDietEl!: HTMLElement;
  private logContainerEl!: HTMLElement;
  private audioBtn!: HTMLButtonElement;

  constructor(container: HTMLElement, audio: AbyssAudio) {
    this.container = container;
    this.buildDOM(audio);
  }

  private buildDOM(audio: AbyssAudio): void {
    this.container.innerHTML = `
      <!-- Top Navigation & Ecosystem Telemetry -->
      <header class="abyss-header">
        <div class="header-brand">
          <a href="studio.html" class="back-link" title="Return to Genesis Studios">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            <span>Studios</span>
          </a>
          <div class="divider"></div>
          <div class="game-logo">
            <span class="abyss-icon">🌊</span>
            <span class="abyss-title">Abyss: <span class="accent">Deep Evolution</span></span>
          </div>
        </div>

        <div class="header-stats">
          <div class="stat-pill" title="Living Population">
            <span class="pill-label">POP</span>
            <span id="stat-pop" class="pill-value">--</span>
          </div>
          <div class="stat-pill" title="Highest Generation Recorded">
            <span class="pill-label">MAX GEN</span>
            <span id="stat-gen" class="pill-value">--</span>
          </div>
          <div class="stat-pill diet-pill" title="Trophic Balance">
            <span id="stat-diet" class="pill-value">🌿 0 | 🦈 0 | 🦑 0 | 🦀 0</span>
          </div>
        </div>

        <div class="header-actions">
          <div id="abyss-account-pill" class="abyss-account-pill" title="Genesis Ecosystem Passport">
            <span class="abyss-acc-avatar">👤</span>
            <div class="abyss-acc-details">
              <div class="abyss-acc-line">
                <span id="abyss-acc-name">Explorer</span>
                <span id="abyss-acc-level" class="acc-lvl-badge">Lv. 1</span>
              </div>
              <div class="abyss-xp-bar-container" title="Ecosystem XP Progression">
                <div id="abyss-xp-bar-fill" class="abyss-xp-bar-fill" style="width: 0%;"></div>
              </div>
            </div>
          </div>
          <button id="btn-audio" class="btn-icon" title="Toggle Soundscape">
            <span id="audio-icon">🔇</span>
          </button>
        </div>
      </header>

      <!-- Floating XP Toasts & Level Up Banner -->
      <div id="xp-floating-container" class="xp-floating-container"></div>
      <div id="level-up-banner" class="level-up-banner hidden"></div>

      <!-- God Powers Toolbar (Bottom Center) -->
      <nav class="god-toolbar">
        <button class="tool-btn active" data-tool="inspect" title="Inspect & Track Organisms">
          <span class="tool-icon">🔍</span>
          <span class="tool-label">Observe</span>
        </button>
        <button class="tool-btn" data-tool="nutrient" title="Drop Bioluminescent Plankton Bloom">
          <span class="tool-icon">🌿</span>
          <span class="tool-label">Nutrients</span>
        </button>
        <button class="tool-btn" data-tool="vent" title="Erupt Hydrothermal Chimney">
          <span class="tool-icon">🌋</span>
          <span class="tool-label">Vent</span>
        </button>
        <button class="tool-btn" data-tool="mutagen" title="Inject Mutagen (4.5x Mutation Burst)">
          <span class="tool-icon">☢️</span>
          <span class="tool-label">Mutagen</span>
        </button>
        <button class="tool-btn" data-tool="leviathan" title="Spawn Hadal Apex Leviathan">
          <span class="tool-icon">🦑</span>
          <span class="tool-label">Leviathan</span>
        </button>
        <button class="tool-btn danger" data-tool="cull" title="Extinction Wave (Cull 50%)">
          <span class="tool-icon">⚡</span>
          <span class="tool-label">Extinction</span>
        </button>
      </nav>

      <!-- Time Controls (Bottom Right) -->
      <div class="time-controls">
        <button class="time-btn" data-speed="0" title="Pause Simulation">⏸️</button>
        <button class="time-btn active" data-speed="1" title="Normal Speed (1x)">1x</button>
        <button class="time-btn" data-speed="2" title="Fast Forward (2x)">2x</button>
        <button class="time-btn" data-speed="5" title="Hyper Warp (5x)">5x</button>
      </div>

      <!-- Live Creature Inspector Drawer (Right Panel) -->
      <aside id="inspector-panel" class="inspector-drawer hidden">
        <div class="inspector-header">
          <div>
            <span id="insp-badge" class="gen-badge">GEN 1</span>
            <h3 id="insp-name" class="creature-name">Species Name</h3>
          </div>
          <button id="btn-close-insp" class="btn-close" title="Close Inspector">&times;</button>
        </div>

        <div class="inspector-content">
          <!-- Live Telemetry -->
          <div class="metric-row">
            <span class="metric-label">Status</span>
            <span id="insp-action" class="metric-badge action-badge">Wandering</span>
          </div>
          <div class="metric-row">
            <span class="metric-label">Energy</span>
            <div class="progress-bar-container">
              <div id="insp-energy-bar" class="progress-bar energy-bar" style="width: 50%;"></div>
            </div>
            <span id="insp-energy-val" class="metric-num">50%</span>
          </div>
          <div class="metric-row">
            <span class="metric-label">Age</span>
            <span id="insp-age" class="metric-num">0.0s</span>
          </div>

          <hr class="panel-divider" />

          <!-- DNA Genome Profile -->
          <h4 class="section-heading">Genetic Genome</h4>
          <div class="dna-grid">
            <div class="dna-item">
              <span class="dna-label">Trophic Diet</span>
              <span id="insp-diet" class="dna-val">Filter Feeder</span>
            </div>
            <div class="dna-item">
              <span class="dna-label">Size / Mass</span>
              <span id="insp-size" class="dna-val">12</span>
            </div>
            <div class="dna-item">
              <span class="dna-label">Max Speed</span>
              <span id="insp-speed" class="dna-val">110 px/s</span>
            </div>
            <div class="dna-item">
              <span class="dna-label">Sensory Range</span>
              <span id="insp-sensory" class="dna-val">180 px</span>
            </div>
            <div class="dna-item">
              <span class="dna-label">Metabolism</span>
              <span id="insp-metabolism" class="dna-val">0.9 /s</span>
            </div>
            <div class="dna-item">
              <span class="dna-label">Specialization</span>
              <span id="insp-lure" class="dna-val">Angler Light</span>
            </div>
          </div>

          <hr class="panel-divider" />

          <!-- Lineage & Mutation Log -->
          <h4 class="section-heading">Evolution History</h4>
          <div class="lineage-box">
            <div class="lineage-item">
              <span class="lineage-label">Parent Lineage:</span>
              <span id="insp-parent" class="lineage-val">Primordial Spore</span>
            </div>
            <div id="insp-mutations-container" class="mutations-list">
              <!-- Dynamically populated mutation badges -->
            </div>
          </div>
        </div>
      </aside>

      <!-- Real-Time Evolutionary Activity Log (Bottom Left) -->
      <div id="activity-log" class="activity-log-container"></div>
    `;

    // Cache element references
    this.inspectorEl = this.container.querySelector('#inspector-panel')!;
    this.statsPopEl = this.container.querySelector('#stat-pop')!;
    this.statsGenEl = this.container.querySelector('#stat-gen')!;
    this.statsDietEl = this.container.querySelector('#stat-diet')!;
    this.logContainerEl = this.container.querySelector('#activity-log')!;
    this.audioBtn = this.container.querySelector('#btn-audio')!;

    // Bind Tool Buttons
    const toolBtns = this.container.querySelectorAll('.tool-btn');
    toolBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        toolBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentTool = (btn as HTMLElement).dataset.tool as GodTool;
        if (this.onToolChange) this.onToolChange(this.currentTool);
      });
    });

    // Bind Time Buttons
    const timeBtns = this.container.querySelectorAll('.time-btn');
    timeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.timeScale = parseFloat((btn as HTMLElement).dataset.speed || '1');
        if (this.onTimeScaleChange) this.onTimeScaleChange(this.timeScale);
      });
    });

    // Bind Close Inspector
    this.container.querySelector('#btn-close-insp')?.addEventListener('click', () => {
      this.closeInspector();
    });

    // Bind Audio Button
    this.audioBtn.addEventListener('click', () => {
      const isSoundOn = audio.toggleMute();
      const icon = this.container.querySelector('#audio-icon');
      if (icon) icon.textContent = isSoundOn ? '🔊' : '🔇';
    });

    // Bind Account Pill
    this.container.querySelector('#abyss-account-pill')?.addEventListener('click', () => {
      if (this.onAccountClick) this.onAccountClick();
    });
  }

  public updateProfile(profile: UserProfile | null): void {
    const nameEl = this.container.querySelector('#abyss-acc-name');
    const lvlEl = this.container.querySelector('#abyss-acc-level');
    const barEl = this.container.querySelector('#abyss-xp-bar-fill') as HTMLElement;

    if (!profile) {
      if (nameEl) nameEl.textContent = 'Sign In';
      if (lvlEl) lvlEl.textContent = 'Account Req.';
      if (barEl) barEl.style.width = '0%';
      return;
    }

    const xpPct = Math.min(100, Math.round((profile.currentXp / profile.xpToNextLevel) * 100));
    if (nameEl) nameEl.textContent = profile.username;
    if (lvlEl) lvlEl.textContent = `Lv. ${profile.level}`;
    if (barEl) barEl.style.width = `${xpPct}%`;
  }

  public showXpReward(amount: number, reason: string): void {
    const container = this.container.querySelector('#xp-floating-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'xp-floating-toast';
    toast.innerHTML = `<span class="xp-badge">+${amount} XP</span> <span class="xp-reason">${reason}</span>`;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('fade-up');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 700);
    }, 2000);
  }

  public showLevelUpCelebration(newLevel: number, newTitle: string): void {
    const banner = this.container.querySelector('#level-up-banner') as HTMLElement;
    if (!banner) return;

    banner.innerHTML = `
      <div class="level-up-content">
        <div class="lvl-star">⭐ LEVEL UP! ⭐</div>
        <div class="lvl-num">LEVEL ${newLevel}</div>
        <div class="lvl-title">Unlocked: ${newTitle}</div>
      </div>
    `;
    banner.classList.remove('hidden');

    setTimeout(() => {
      banner.classList.add('hidden');
    }, 4500);
  }

  public updateStats(stats: SimulationStats): void {
    this.statsPopEl.textContent = stats.population.toString();
    this.statsGenEl.textContent = `Gen ${stats.maxGenerations}`;
    this.statsDietEl.textContent = `🌿 ${stats.filterFeeders} | 🦈 ${stats.hunters} | 🦑 ${stats.apexPredators} | 🦀 ${stats.scavengers}`;
  }

  public updateInspector(creature: Creature | null): void {
    this.selectedCreature = creature;
    if (!creature || creature.isDead) {
      this.inspectorEl.classList.add('hidden');
      return;
    }

    this.inspectorEl.classList.remove('hidden');
    this.container.querySelector('#insp-badge')!.textContent = `GEN ${creature.generation}`;
    this.container.querySelector('#insp-name')!.textContent = creature.name;
    this.container.querySelector('#insp-action')!.textContent = creature.action.toUpperCase();

    const energyPct = Math.max(0, Math.min(100, Math.round((creature.energy / creature.maxEnergy) * 100)));
    const energyBar = this.container.querySelector('#insp-energy-bar') as HTMLElement;
    energyBar.style.width = `${energyPct}%`;
    this.container.querySelector('#insp-energy-val')!.textContent = `${energyPct}%`;

    this.container.querySelector('#insp-age')!.textContent = `${creature.age.toFixed(1)}s / ${creature.dna.lifespan.toFixed(0)}s`;
    this.container.querySelector('#insp-diet')!.textContent = creature.dna.diet.toUpperCase();
    this.container.querySelector('#insp-size')!.textContent = creature.dna.size.toFixed(1);
    this.container.querySelector('#insp-speed')!.textContent = `${Math.round(creature.dna.maxSpeed)} px/s`;
    this.container.querySelector('#insp-sensory')!.textContent = `${Math.round(creature.dna.sensoryRadius)} px`;
    this.container.querySelector('#insp-metabolism')!.textContent = `${creature.dna.metabolism.toFixed(2)}/s`;
    this.container.querySelector('#insp-lure')!.textContent = creature.dna.lure.replace('_', ' ').toUpperCase();

    this.container.querySelector('#insp-parent')!.textContent = creature.parentName || 'Primordial Origin';

    const mutContainer = this.container.querySelector('#insp-mutations-container')!;
    if (creature.mutations.length === 0) {
      mutContainer.innerHTML = '<span class="mutation-badge neutral">Baseline Specimen</span>';
    } else {
      mutContainer.innerHTML = creature.mutations
        .map(m => `<span class="mutation-badge">${m}</span>`)
        .join('');
    }
  }

  public closeInspector(): void {
    this.selectedCreature = null;
    this.inspectorEl.classList.add('hidden');
    if (this.onDeselect) this.onDeselect();
  }

  public addLogMessage(msg: string, type: 'birth' | 'death' | 'extinction' | 'mutation' | 'god'): void {
    const toast = document.createElement('div');
    toast.className = `log-toast ${type}`;
    toast.textContent = msg;

    this.logContainerEl.appendChild(toast);
    if (this.logContainerEl.children.length > 5) {
      this.logContainerEl.removeChild(this.logContainerEl.children[0]);
    }

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 500);
    }, 4500);
  }
}
