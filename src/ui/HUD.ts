import { Agent, TechEra, Animal } from '../simulation/types';
import { WorldManager } from '../simulation/World';
import { EconomyEngine } from '../simulation/Economy';
import { AIEngine } from '../simulation/AIEngine';
import { TECHNOLOGIES } from '../simulation/Inventions';
import { Camera } from '../renderer/Camera';
import { PersistenceManager } from '../simulation/Persistence';
import { SoundEngine } from '../audio/SoundEngine';

export class HUD {
  private container: HTMLElement;
  private selectedAgentId: string = 'agent_adam';
  private openTab: 'none' | 'codex' | 'economy' | 'chronicles' | 'dynasty' | 'spawn' | 'shop' = 'none';
  private simSpeed: number = 1.0;
  private isCinematic: boolean = false;
  private isMinimapDragging: boolean = false;
  private hasSpawnedCharacter: boolean = false;

  constructor(
    private world: WorldManager,
    private economy: EconomyEngine,
    private aiEngine: AIEngine,
    private camera?: Camera,
    private soundEngine?: SoundEngine,
    private onAwakenDynasty?: () => void,
    private onSpawnCharacter?: (name?: string) => void,
    initialSpawned: boolean = false
  ) {
    this.hasSpawnedCharacter = initialSpawned || localStorage.getItem('genesis_custom_pioneer_spawned') === 'true';
    this.container = document.getElementById('app') || document.body;
    this.mountDOM();
    this.bindEvents();
    if (this.hasSpawnedCharacter) {
      this.updateSpawnLockUI();
    }
  }

  public setCustomCharacterSpawned(spawned: boolean): void {
    this.hasSpawnedCharacter = spawned;
    this.updateSpawnLockUI();
  }

  public getCustomCharacterSpawned(): boolean {
    return this.hasSpawnedCharacter;
  }

  public updateSpawnLockUI(): void {
    const topBtn = document.getElementById('btn-spawn-pioneer-top');
    const inspectorBtn = document.getElementById('btn-quick-spawn-inspector');
    const rightTabBtn = document.getElementById('tab-spawn-btn');
    const spawnModal = document.getElementById('spawn-modal');

    if (this.hasSpawnedCharacter) {
      if (topBtn) topBtn.remove();
      if (inspectorBtn) inspectorBtn.remove();
      if (rightTabBtn) rightTabBtn.remove();
      if (spawnModal) spawnModal.remove();
      if (this.openTab === 'spawn') {
        this.openTab = 'none';
      }
    }
  }

  public setCamera(camera: Camera): void {
    this.camera = camera;
  }

  public getSimSpeed(): number {
    return this.simSpeed;
  }

  public getSelectedAgentId(): string {
    return this.selectedAgentId;
  }

  public setSelectedAgentId(id: string): void {
    this.selectedAgentId = id;
  }

  private mountDOM(): void {
    this.container.innerHTML = `
      <div id="canvas-container">
        <canvas id="game-canvas"></canvas>
      </div>

      <!-- Top Navigation Bar -->
      <header id="top-bar" class="glass-panel">
        <button id="btn-logout" class="nav-tab-btn" title="Logout" style="margin-left: auto; padding: 4px 10px; font-size: 11px;">🚪 Logout</button>
        <button id="btn-premium-shop" class="nav-tab-btn" title="Cosmetics Store" style="margin-left: 8px; padding: 4px 10px; font-size: 11px; background: linear-gradient(135deg, #14F195, #9945FF); color: black; font-weight: bold;">🛒 Premium Store</button>
        <button id="btn-connect-wallet" class="nav-tab-btn" title="Connect Wallet" style="margin-left: 8px; padding: 4px 10px; font-size: 11px; background: #9945FF; color: white;">🪙 Connect Solana</button>
        <div class="brand-section">
          <div class="brand-logo">🌍</div>
          <div>
            <div class="brand-title">GENESIS: NEW DAWN</div>
            <div class="brand-subtitle" style="font-size: 10px; color: var(--text-muted); letter-spacing: 0.5px;">AUTONOMOUS AI EXPANDING CIVILIZATION</div>
          </div>
          <div id="era-badge" class="era-badge">PRIMEVAL ERA</div>
        </div>

        <div class="time-section">
          <div class="time-pill">
            <span id="sun-moon-icon">☀️</span>
            <span id="time-display">07:00</span>
            <span style="color: var(--text-muted);">|</span>
            <span id="day-display">Day 1</span>
            <span style="color: var(--text-muted);">|</span>
            <span id="season-display" style="color: var(--accent-emerald); font-weight: 600;">🌸 Spring</span>
            <span style="color: var(--text-muted);">|</span>
            <span id="temp-display" style="color: #38bdf8; font-weight: 600;">🌡️ 18°C</span>
          </div>
        </div>

        <div class="stats-section">
          <div class="stat-chip" title="Real-time Civilization Auto-saving Active" style="border-color: rgba(52, 211, 153, 0.4);">
            <span style="display:inline-block; width: 6px; height: 6px; border-radius: 50%; background: #34d399; margin-right: 4px; box-shadow: 0 0 8px #34d399;"></span>
            <span style="font-size: 10px; color: #34d399; font-weight: 600;">SAVED</span>
          </div>
          <div class="stat-chip" id="gaze-timer-chip" title="Watcher's Gaze: Logging in for 1 min every 48 hours keeps pioneers alive!" style="border-color: rgba(56, 189, 248, 0.4);">
            <span style="font-size: 10px;">👁️</span>
            <span id="gaze-timer-val" style="font-size: 10px; color: #38bdf8; font-weight: 600;">GAZE: 48h</span>
          </div>
          <div class="stat-chip">
            <span class="stat-icon">👥</span>
            <span id="pop-count">2</span>
          </div>
          <div class="stat-chip">
            <span class="stat-icon">🪙</span>
            <span id="treasury-count">0</span>
          </div>
          <div class="stat-chip">
            <span class="stat-icon">📈</span>
            <span id="gdp-count">GDP 0</span>
          </div>
          <div class="stat-chip">
            <span class="stat-icon">🏛️</span>
            <span id="buildings-count">0 Bldgs</span>
          </div>
          <button id="btn-spawn-pioneer-top" class="spawn-top-btn" title="Spawn a new character into the world anytime!">
            <span style="font-size: 13px;">➕</span>
            <span>Spawn Pioneer</span>
          </button>
          <button id="btn-export-save" class="nav-tab-btn" title="Download Civilization Backup File (.json)" style="padding: 4px 10px; font-size: 11px; margin-left: 4px;">💾 Backup</button>
          <button id="btn-import-save" class="nav-tab-btn" title="Restore Civilization Backup (.json)" style="padding: 4px 10px; font-size: 11px;">📂 Load</button>
          <button id="btn-audio-toggle" class="nav-tab-btn" title="Toggle Soundscape Audio" style="padding: 4px 10px; font-size: 11px; margin-left: 4px;">🔊 Audio: ON</button>
          <input type="file" id="file-import-save" accept=".json" style="display: none;" />
        </div>
      </header>

      <!-- Natural Passing 48h Memorial Banner -->
      <div id="natural-passing-banner" class="glass-panel" style="display: none; position: fixed; top: 70px; left: 50%; transform: translateX(-50%); z-index: 1000; padding: 18px 26px; text-align: center; border: 1px solid rgba(239, 68, 68, 0.6); background: rgba(15, 23, 42, 0.94); border-radius: 12px; box-shadow: 0 10px 35px rgba(0,0,0,0.85); max-width: 520px;">
        <div style="font-size: 26px; margin-bottom: 6px;">🪦</div>
        <div style="font-weight: 700; color: #f87171; font-size: 16px; margin-bottom: 6px;">NATURAL CAUSES: 48 HOURS UNATTENDED</div>
        <div style="font-size: 12px; color: var(--text-muted); margin-bottom: 14px; line-height: 1.5;">
          The founders have passed away peacefully of natural causes after 2 days without the Watcher's presence. Ancestral memorial cairns mark where they once walked.
        </div>
        <button id="btn-awaken-dynasty" style="background: linear-gradient(135deg, #38bdf8, #6366f1); color: white; border: none; padding: 9px 20px; border-radius: 8px; font-weight: 700; cursor: pointer; font-size: 12px;">
          🌱 Awaken Next Generation (Gen 2)
        </button>
      </div>

      <!-- Left Panel: Agent Inspector -->
      <aside id="agent-inspector" class="glass-panel">
        <div class="mobile-inspector-bar">
          <div class="mobile-drag-pill"></div>
          <button id="btn-close-mobile-inspector" class="mobile-inspector-close-btn">✕ Close</button>
        </div>
        <div class="section-label" style="display: flex; justify-content: space-between; align-items: center;">
          <span>CITIZENS OF THE EXPEDITION</span>
          <button id="btn-quick-spawn-inspector" class="quick-spawn-btn" title="Spawn a new pioneer">➕ Spawn</button>
        </div>
        <div id="agent-selector-pills" class="agent-selector-pills"></div>

        <div class="agent-header">
          <div id="agent-avatar" class="agent-avatar">👤</div>
          <div>
            <div id="agent-name" class="agent-name">Adam</div>
            <div id="agent-meta" class="agent-meta">Pioneer • Age 20 • Gen 1</div>
          </div>
        </div>

        <div class="needs-grid">
          <div class="need-row">
            <div class="need-label-row">
              <span>Hunger</span>
              <span id="val-hunger">80%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-hunger" class="need-bar-fill fill-hunger" style="width: 80%;"></div>
            </div>
          </div>

          <div class="need-row">
            <div class="need-label-row">
              <span>Energy</span>
              <span id="val-energy">90%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-energy" class="need-bar-fill fill-energy" style="width: 90%;"></div>
            </div>
          </div>

          <div class="need-row">
            <div class="need-label-row">
              <span>Warmth</span>
              <span id="val-warmth">85%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-warmth" class="need-bar-fill fill-warmth" style="width: 85%;"></div>
            </div>
          </div>

          <div class="need-row">
            <div class="need-label-row">
              <span>Social</span>
              <span id="val-social">75%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-social" class="need-bar-fill fill-social" style="width: 75%;"></div>
            </div>
          </div>

          <div class="need-row">
            <div class="need-label-row">
              <span>Curiosity</span>
              <span id="val-curiosity">80%</span>
            </div>
            <div class="need-bar-bg">
              <div id="bar-curiosity" class="need-bar-fill fill-curiosity" style="width: 80%;"></div>
            </div>
          </div>
        </div>

        <div class="agent-thought-card">
          <div class="thought-title">
            <span>🧠</span> ACTIVE THOUGHT
          </div>
          <div id="agent-thought" class="thought-text">"Where am I? The earth is raw and untouched."</div>
          <div id="agent-action" class="action-status">Current: Looking around</div>
        </div>

        <!-- Romance, Courtship & Family Card -->
        <div class="agent-romance-card">
          <div class="romance-header">
            <div class="romance-title">
              <span>❤️</span> RELATIONSHIP & FAMILY
            </div>
            <div id="romance-stage-badge" class="romance-stage-badge">STRANGERS</div>
          </div>
          <div id="romance-partner-name" class="romance-partner-text">Partner: Seeking Companion</div>
          
          <div class="romance-bars-container">
            <div class="need-row">
              <div class="need-label-row">
                <span style="font-size: 10px;">Affection</span>
                <span id="val-affection" style="font-size: 10px;">15%</span>
              </div>
              <div class="need-bar-bg" style="height: 4px;">
                <div id="bar-affection" class="need-bar-fill" style="width: 15%; background: linear-gradient(90deg, #f43f5e, #fda4af);"></div>
              </div>
            </div>
            <div class="need-row">
              <div class="need-label-row">
                <span style="font-size: 10px;">Trust</span>
                <span id="val-trust" style="font-size: 10px;">20%</span>
              </div>
              <div class="need-bar-bg" style="height: 4px;">
                <div id="bar-trust" class="need-bar-fill" style="width: 20%; background: linear-gradient(90deg, #0ea5e9, #7dd3fc);"></div>
              </div>
            </div>
          </div>

          <!-- Pregnancy Gestation Live Meter -->
          <div id="romance-pregnancy-panel" style="display: none; margin-top: 4px; padding: 6px 8px; background: rgba(244, 63, 94, 0.12); border: 1px solid rgba(244, 114, 182, 0.3); border-radius: 6px;">
            <div style="display: flex; justify-content: space-between; font-size: 10px; font-weight: 700; color: #f472b6;">
              <span id="gestation-label">🤰 Gestation Progress</span>
              <span id="val-gestation">0%</span>
            </div>
            <div class="need-bar-bg" style="height: 5px; margin-top: 4px;">
              <div id="bar-gestation" class="need-bar-fill" style="width: 0%; background: linear-gradient(90deg, #f43f5e, #f472b6);"></div>
            </div>
          </div>
        </div>

        <div class="inventory-section">
          <div class="section-label">BACKPACK INVENTORY</div>
          <div id="inventory-grid" class="inventory-grid"></div>
        </div>

        <button id="track-agent-btn" class="track-btn">
          <span>🎯</span> Track Agent Camera
        </button>
      </aside>

      <!-- Right Tab Bar -->
      <nav id="right-panel-tabs">
        <button id="tab-spawn-btn" class="tab-btn spawn-tab-highlight" title="Spawn New Pioneer (Click anytime!)">➕</button>
        <button id="tab-codex-btn" class="tab-btn" title="Inventions & Tech Codex">💡</button>
        <button id="tab-economy-btn" class="tab-btn" title="Market Economy & Prices">⚖️</button>
        <button id="tab-chronicles-btn" class="tab-btn" title="History Chronicles">📜</button>
        <button id="tab-dynasty-btn" class="tab-btn" title="Civilization Dynasty & Family Tree">🌳</button>
        <button id="tab-cinematic-btn" class="tab-btn" title="Cinematic Terrarium Mode (Press 'C')">🎥</button>
      </nav>

      <!-- Spawn Pioneer Drawer Modal -->
      <div id="spawn-modal" class="drawer-modal glass-panel spawn-drawer">
        <div class="modal-header">
          <div class="modal-title" style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 20px;">➕</span>
            <span>SPAWN NEW PIONEER</span>
          </div>
          <button class="close-btn" data-close="spawn">✕</button>
        </div>
        <p style="font-size: 12px; color: var(--text-muted); line-height: 1.5; margin: 0;">
          Give your pioneer a name. <strong style="color: #34d399;">Everything else is completely random and simulated</strong>: gender, genetics, appearance, starting vocation, constitution, personality, and birthplace.
        </p>

        <div class="spawn-form-group" style="margin-top: 8px;">
          <label class="spawn-form-label">PIONEER NAME</label>
          <div style="display: flex; gap: 8px;">
            <input type="text" id="spawn-input-name" class="spawn-text-input" placeholder="Enter name (e.g. Silas, Freya)..." maxlength="18" autofocus />
            <button id="btn-spawn-random-name" class="spawn-sub-btn" title="Suggest Random Name">🎲 Suggest</button>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
          <button id="btn-confirm-spawn" class="spawn-submit-btn">
            ✨ Bring Pioneer To Life
          </button>
          <button id="btn-instant-random-spawn" class="spawn-instant-btn">
            ⚡ Quick Spawn (Simulate All Including Name)
          </button>
        </div>
      </div>

      <!-- Tech Codex Drawer Modal -->
      <div id="codex-modal" class="drawer-modal glass-panel">
        <div class="modal-header">
          <div class="modal-title">💡 TECHNOLOGY TREE & CODEX</div>
          <button class="close-btn" data-close="codex">✕</button>
        </div>
        <div id="tech-list" class="tech-list"></div>
      </div>

      <!-- Economy Drawer Modal -->
      <div id="economy-modal" class="drawer-modal glass-panel">
        <div class="modal-header">
          <div class="modal-title">⚖️ MARKETPLACE & COMMODITIES</div>
          <button class="close-btn" data-close="economy">✕</button>
        </div>
        <p style="font-size: 11px; color: var(--text-muted); line-height: 1.4;">
          Real-time dynamic commodity pricing determined by supply, demand, and city trading activity.
        </p>
        <table class="market-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Supply</th>
              <th>Demand</th>
            </tr>
          </thead>
          <tbody id="market-tbody"></tbody>
        </table>
      </div>

      <!-- History Chronicles Modal -->
      <div id="chronicles-modal" class="drawer-modal glass-panel">
        <div class="modal-header">
          <div class="modal-title">📜 CIVILIZATION CHRONICLES</div>
          <button class="close-btn" data-close="chronicles">✕</button>
        </div>
        <div id="chronicles-full-list" style="display: flex; flex-direction: column; gap: 8px;"></div>
      </div>

      <!-- Dynasty & Family Tree Modal -->
      <div id="dynasty-modal" class="drawer-modal glass-panel dynasty-drawer">
        <div class="modal-header">
          <div class="modal-title">🌳 CIVILIZATION DYNASTY & LINEAGE</div>
          <button class="close-btn" data-close="dynasty">✕</button>
        </div>
        <div id="dynasty-summary-bar" class="dynasty-summary-bar"></div>
        <div id="dynasty-tree-container" class="dynasty-tree-container"></div>
      </div>

      <!-- Premium Token Shop Modal -->
      <div id="shop-modal" class="fullscreen-modal glass-panel">
        <div class="modal-header">
          <div class="modal-title" style="background: linear-gradient(135deg, #14F195, #9945FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 24px;">🛒 COSMETICS & SUPPORTER STORE</div>
          <button class="close-btn" data-close="shop" style="font-size: 24px; padding: 10px;">✕</button>
        </div>
        <p style="font-size: 16px; color: var(--text-muted); line-height: 1.5; margin-bottom: 24px; text-align: center; max-width: 600px; margin-left: auto; margin-right: auto;">
          Burn <strong style="color: #9945FF;">$GENESIS</strong> to unlock exclusive visual themes and supporter perks. All items are purely cosmetic and do not affect the autonomous simulation math.
        </p>
        <div class="shop-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; padding: 20px;">
          
          <div class="shop-item" style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(153, 69, 255, 0.3); display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; gap: 16px;">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">🎨 Cyberpunk HUD Theme</div>
              <div style="font-size: 14px; color: var(--text-muted);">Reskin your game UI with neon scanlines.</div>
            </div>
            <button class="btn-buy-premium" style="background: rgba(20, 241, 149, 0.1); color: #14F195; border: 1px solid #14F195; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%;">50M $GENESIS</button>
          </div>

          <div class="shop-item" style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(153, 69, 255, 0.3); display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; gap: 16px;">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">🦅 Eagle-Eye Camera</div>
              <div style="font-size: 14px; color: var(--text-muted);">Unlock ultra-wide zoom-out from the clouds.</div>
            </div>
            <button class="btn-buy-premium" style="background: rgba(20, 241, 149, 0.1); color: #14F195; border: 1px solid #14F195; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%;">100M $GENESIS</button>
          </div>

          <div class="shop-item" style="background: rgba(255,255,255,0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(153, 69, 255, 0.3); display: flex; flex-direction: column; justify-content: space-between; align-items: center; text-align: center; gap: 16px;">
            <div>
              <div style="font-size: 18px; font-weight: 700; color: #f8fafc; margin-bottom: 8px;">👑 Supporter Halo</div>
              <div style="font-size: 14px; color: var(--text-muted);">A golden halo over your custom pioneers.</div>
            </div>
            <button class="btn-buy-premium" style="background: rgba(20, 241, 149, 0.1); color: #14F195; border: 1px solid #14F195; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%;">50M $GENESIS</button>
          </div>

        </div>
      </div>

      <!-- Bottom Chronicles Active Ticker -->
      <footer id="chronicles-bar" class="glass-panel">
        <div class="chronicle-active-entry">
          <span class="chronicle-badge">LATEST CHRONICLE</span>
          <span id="latest-chronicle-text">Adam and Eve have awakened in an untamed paradise.</span>
        </div>
        <button id="view-chronicles-btn" class="chronicle-log-btn">View Full History 📜</button>
      </footer>

      <!-- Radar Minimap Container -->
      <div id="minimap-panel" class="glass-panel" title="Click or drag on radar to pan world camera">
        <div class="minimap-header">
          <span id="minimap-settlement-title">🏕️ Eden Wilds</span>
          <span id="minimap-coords" style="font-size: 10px; color: var(--text-muted);">60, 40</span>
        </div>
        <canvas id="minimap-canvas" width="168" height="112"></canvas>
      </div>

      <!-- Cinematic Terrarium Overlay -->
      <div id="cinematic-overlay" class="cinematic-overlay">
        <div id="cinematic-exit-pill" class="cinematic-exit-pill">🎥 Cinematic Terrarium • Press 'C' or Esc to Exit</div>
      </div>

      <!-- Mobile Floating Quick Controls -->
      <div id="mobile-floating-controls">
        <button id="btn-toggle-inspector-mobile" class="mobile-float-btn" title="Inspect Pioneer">
          <span>👤</span>
          <span class="mobile-btn-label">Pioneer</span>
        </button>
        <button id="btn-mobile-minimap-toggle" class="mobile-float-btn" title="Toggle Radar">
          <span>🗺️</span>
          <span class="mobile-btn-label">Radar</span>
        </button>
      </div>

      <!-- Mobile On-Screen Zoom Controls -->
      <div id="mobile-zoom-controls">
        <button id="btn-mobile-zoom-in" class="mobile-zoom-btn" title="Zoom In">➕</button>
        <button id="btn-mobile-zoom-out" class="mobile-zoom-btn" title="Zoom Out">➖</button>
      </div>
    `;
  }

  private bindEvents(): void {
    document.getElementById('btn-logout')?.addEventListener('click', () => {
      import('../auth/AuthManager').then(m => {
        m.AuthManager.logout();
        window.location.reload();
      });
    });

    document.getElementById('btn-premium-shop')?.addEventListener('click', () => {
      this.toggleTab('shop');
    });

    document.querySelectorAll('.btn-buy-premium').forEach((btn) => {
      btn.addEventListener('click', () => {
        alert("The token has not been minted yet! Minting soon...");
      });
    });

    document.getElementById('btn-connect-wallet')?.addEventListener('click', async () => {
      try {
        const provider = (window as any).solana;
        if (provider && provider.isPhantom) {
          const resp = await provider.connect();
          const btn = document.getElementById('btn-connect-wallet');
          if (btn) {
            btn.textContent = `🪙 ${resp.publicKey.toString().slice(0, 4)}...${resp.publicKey.toString().slice(-4)}`;
            btn.style.background = '#14F195'; // Solana green
            btn.style.color = '#000';
          }
          console.log('Connected to Solana:', resp.publicKey.toString());
        } else {
          window.open('https://phantom.app/', '_blank');
        }
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    });

    // Right tabs
    document.getElementById('tab-spawn-btn')?.addEventListener('click', () => this.toggleTab('spawn'));
    document.getElementById('tab-codex-btn')?.addEventListener('click', () => this.toggleTab('codex'));
    document.getElementById('tab-economy-btn')?.addEventListener('click', () => this.toggleTab('economy'));
    document.getElementById('tab-chronicles-btn')?.addEventListener('click', () => this.toggleTab('chronicles'));
    document.getElementById('tab-dynasty-btn')?.addEventListener('click', () => this.toggleTab('dynasty'));
    document.getElementById('tab-cinematic-btn')?.addEventListener('click', () => this.toggleCinematicMode());
    document.getElementById('cinematic-exit-pill')?.addEventListener('click', () => this.toggleCinematicMode());
    document.getElementById('view-chronicles-btn')?.addEventListener('click', () => this.toggleTab('chronicles'));

    // Top Header & Left Panel Spawn Pioneer triggers
    document.getElementById('btn-spawn-pioneer-top')?.addEventListener('click', () => this.toggleTab('spawn'));
    document.getElementById('btn-quick-spawn-inspector')?.addEventListener('click', () => this.toggleTab('spawn'));

    // Spawn Pioneer Modal Logic (Name only, everything else completely simulated & random)
    const ALL_SPAWN_NAMES = [
      'Seth', 'Miriam', 'Noah', 'Leah', 'Silas', 'Chloe', 'Ethan', 'Freya',
      'Caleb', 'Naomi', 'Enoch', 'Hannah', 'Ezra', 'Ruth', 'Lucas', 'Zara',
      'Jared', 'Iris', 'Felix', 'Aria', 'Rowan', 'Maya', 'Kenan', 'Elena'
    ];
    const getRandomSpawnName = () => ALL_SPAWN_NAMES[Math.floor(Math.random() * ALL_SPAWN_NAMES.length)];

    const nameInput = document.getElementById('spawn-input-name') as HTMLInputElement;
    const btnRandName = document.getElementById('btn-spawn-random-name');

    btnRandName?.addEventListener('click', () => {
      if (nameInput) {
        nameInput.value = getRandomSpawnName();
        nameInput.focus();
        nameInput.select();
      }
    });

    const executeSpawn = (customName?: string) => {
      if (this.hasSpawnedCharacter) {
        alert('Under any circumstances, only 1 character can ever be spawned in this world.');
        this.toggleTab('none');
        return;
      }
      const name = customName?.trim() || nameInput?.value.trim() || getRandomSpawnName();
      if (this.onSpawnCharacter) {
        this.onSpawnCharacter(name);
      }
      if (nameInput) nameInput.value = '';
      this.toggleTab('none');
    };

    document.getElementById('btn-confirm-spawn')?.addEventListener('click', () => {
      executeSpawn();
    });

    nameInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeSpawn();
      }
    });

    // Quick spawn: simulates everything including the name!
    document.getElementById('btn-instant-random-spawn')?.addEventListener('click', () => {
      executeSpawn(getRandomSpawnName());
    });

    // Keyboard shortcuts: C for Cinematic Terrarium, Esc to close/exit
    window.addEventListener('keydown', (e) => {
      if (e.key === 'c' || e.key === 'C') {
        if ((e.target as HTMLElement).tagName === 'INPUT') return;
        this.toggleCinematicMode();
      } else if (e.key === 'Escape') {
        if (this.isCinematic) {
          this.toggleCinematicMode();
        } else if (this.openTab !== 'none') {
          this.toggleTab('none');
        }
      }
    });

    // Radar Minimap click & drag to pan camera
    const minimapCanvas = document.getElementById('minimap-canvas') as HTMLCanvasElement;
    if (minimapCanvas) {
      const handleMinimapPan = (e: MouseEvent) => {
        const rect = minimapCanvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        const worldX = (clickX / minimapCanvas.clientWidth - 0.5) * this.world.width;
        const worldY = (clickY / minimapCanvas.clientHeight - 0.5) * this.world.height;
        this.camera?.panTo(
          Math.max(-this.world.width / 2, Math.min(this.world.width / 2, worldX)),
          Math.max(-this.world.height / 2, Math.min(this.world.height / 2, worldY))
        );
      };

      minimapCanvas.addEventListener('mousedown', (e) => {
        this.isMinimapDragging = true;
        handleMinimapPan(e);
      });

      window.addEventListener('mousemove', (e) => {
        if (this.isMinimapDragging) {
          handleMinimapPan(e);
        }
      });

      window.addEventListener('mouseup', () => {
        this.isMinimapDragging = false;
      });
    }

    // Close buttons on modals
    document.querySelectorAll('.close-btn').forEach((btn) => {
      btn.addEventListener('click', () => this.toggleTab('none'));
    });

    // Camera follow button
    document.getElementById('track-agent-btn')?.addEventListener('click', () => {
      // Find current selected agent and follow
      const agent = (window as any).agents?.find((a: Agent) => a.id === this.selectedAgentId);
      if (agent && this.camera) {
        this.camera.followTarget = agent;
      }
    });

    // Backup Save File (.json)
    document.getElementById('btn-export-save')?.addEventListener('click', () => {
      const agents = (window as any).agents || [];
      const animals = (window as any).fauna?.animals || [];
      PersistenceManager.exportSaveFile(this.world, this.economy, this.aiEngine, agents, animals);
    });

    // Load Save File (.json)
    const btnImport = document.getElementById('btn-import-save');
    const fileImport = document.getElementById('file-import-save') as HTMLInputElement;
    if (btnImport && fileImport) {
      btnImport.addEventListener('click', () => fileImport.click());
      fileImport.addEventListener('change', (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          PersistenceManager.importSaveFile(
            file,
            () => {
              alert('Civilization save restored successfully! Refreshing world...');
              window.location.reload();
            },
            (errMsg) => alert(errMsg)
          );
        }
      });
    }

    // Audio soundscape toggle
    const btnAudio = document.getElementById('btn-audio-toggle');
    if (btnAudio) {
      btnAudio.addEventListener('click', () => {
        if (this.soundEngine) {
          const isUnmuted = this.soundEngine.toggleMute();
          btnAudio.textContent = isUnmuted ? '🔊 Audio: ON' : '🔇 Audio: OFF';
          btnAudio.style.opacity = isUnmuted ? '1.0' : '0.6';
        }
      });
    }

    // Awaken new generation button
    const btnAwaken = document.getElementById('btn-awaken-dynasty');
    if (btnAwaken) {
      btnAwaken.addEventListener('click', () => {
        if (this.onAwakenDynasty) {
          this.onAwakenDynasty();
        }
      });
    }

    // Mobile UI Event Listeners
    const inspector = document.getElementById('agent-inspector');
    document.getElementById('btn-toggle-inspector-mobile')?.addEventListener('click', () => {
      this.toggleTab('none');
      inspector?.classList.toggle('mobile-open');
    });
    document.getElementById('btn-close-mobile-inspector')?.addEventListener('click', () => {
      inspector?.classList.remove('mobile-open');
    });

    // Mobile Zoom Buttons
    document.getElementById('btn-mobile-zoom-in')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.camera?.zoomIn();
    });
    document.getElementById('btn-mobile-zoom-out')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.camera?.zoomOut();
    });

    // Mobile Minimap Toggle
    const minimap = document.getElementById('minimap-panel');
    document.getElementById('btn-mobile-minimap-toggle')?.addEventListener('click', () => {
      minimap?.classList.toggle('mobile-open');
    });
  }

  public toggleCinematicMode(): void {
    this.isCinematic = !this.isCinematic;
    document.body.classList.toggle('cinematic-active', this.isCinematic);
    const cinematicBtn = document.getElementById('tab-cinematic-btn');
    if (cinematicBtn) {
      cinematicBtn.classList.toggle('active', this.isCinematic);
    }
  }

  private toggleTab(tab: 'none' | 'codex' | 'economy' | 'chronicles' | 'dynasty' | 'spawn' | 'shop'): void {
    this.openTab = this.openTab === tab ? 'none' : tab;

    if (this.openTab !== 'none') {
      document.getElementById('agent-inspector')?.classList.remove('mobile-open');
    }

    // Reset modals
    document.getElementById('spawn-modal')?.classList.remove('open');
    document.getElementById('codex-modal')?.classList.remove('open');
    document.getElementById('economy-modal')?.classList.remove('open');
    document.getElementById('chronicles-modal')?.classList.remove('open');
    document.getElementById('dynasty-modal')?.classList.remove('open');
    document.getElementById('shop-modal')?.classList.remove('open');

    // Reset tab active states
    document.getElementById('tab-spawn-btn')?.classList.remove('active');
    document.getElementById('tab-codex-btn')?.classList.remove('active');
    document.getElementById('tab-economy-btn')?.classList.remove('active');
    document.getElementById('tab-chronicles-btn')?.classList.remove('active');
    document.getElementById('tab-dynasty-btn')?.classList.remove('active');

    if (this.openTab === 'spawn') {
      if (this.hasSpawnedCharacter) {
        this.openTab = 'none';
        this.updateSpawnLockUI();
        return;
      }
      document.getElementById('spawn-modal')?.classList.add('open');
      document.getElementById('tab-spawn-btn')?.classList.add('active');
      const nameInput = document.getElementById('spawn-input-name') as HTMLInputElement;
      if (nameInput) {
        const pool = [
          'Seth', 'Miriam', 'Noah', 'Leah', 'Silas', 'Chloe', 'Ethan', 'Freya',
          'Caleb', 'Naomi', 'Enoch', 'Hannah', 'Ezra', 'Ruth', 'Lucas', 'Zara'
        ];
        nameInput.value = pool[Math.floor(Math.random() * pool.length)];
        setTimeout(() => {
          nameInput.focus();
          nameInput.select();
        }, 50);
      }
    } else if (this.openTab === 'codex') {
      document.getElementById('codex-modal')?.classList.add('open');
      document.getElementById('tab-codex-btn')?.classList.add('active');
      this.renderTechList();
    } else if (this.openTab === 'economy') {
      document.getElementById('economy-modal')?.classList.add('open');
      document.getElementById('tab-economy-btn')?.classList.add('active');
      this.renderEconomyTable();
    } else if (this.openTab === 'chronicles') {
      document.getElementById('chronicles-modal')?.classList.add('open');
      document.getElementById('tab-chronicles-btn')?.classList.add('active');
      this.renderChroniclesFull();
    } else if (this.openTab === 'dynasty') {
      document.getElementById('dynasty-modal')?.classList.add('open');
      document.getElementById('tab-dynasty-btn')?.classList.add('active');
      this.renderDynastyTree((window as any).agents || []);
    } else if (this.openTab === 'shop') {
      document.getElementById('shop-modal')?.classList.add('open');
    }
  }

  public update(agents: Agent[], animals: Animal[] = []): void {
    // Strict 1-character per person limit:
    // If the simulation has ANY pioneer other than Adam & Eve who was not born to parents,
    // or hasSpawnedCharacter is true, immediately lock and eliminate all spawn UI!
    const hasAnyCustomPioneer = this.hasSpawnedCharacter ||
      agents.some((a) => a.id !== 'agent_adam' && a.id !== 'agent_eve' && (!a.parentsIds || a.parentsIds.length === 0));
    if (hasAnyCustomPioneer) {
      if (!this.hasSpawnedCharacter) {
        this.hasSpawnedCharacter = true;
        try {
          localStorage.setItem('genesis_custom_pioneer_spawned', 'true');
        } catch (e) {}
      }
      this.updateSpawnLockUI();
    }
    // 1. Top Bar Information
    const hours = Math.floor(this.world.timeOfDay);
    const mins = Math.floor((this.world.timeOfDay - hours) * 60);
    const isNight = this.world.timeOfDay >= 20 || this.world.timeOfDay < 5.5;

    const sunMoon = document.getElementById('sun-moon-icon');
    if (sunMoon) sunMoon.textContent = isNight ? '🌙' : '☀️';

    const timeDisplay = document.getElementById('time-display');
    if (timeDisplay) {
      timeDisplay.textContent = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
    }

    const dayDisplay = document.getElementById('day-display');
    if (dayDisplay) dayDisplay.textContent = `Day ${this.world.day}`;

    const seasonDisplay = document.getElementById('season-display');
    if (seasonDisplay) {
      const s = this.world.season;
      const sName = this.world.isSolsticeActive
        ? `✨ ${s === 'Summer' ? 'Summer Solstice' : 'Winter Solstice'} Festival ✨`
        : (s === 'Spring' ? '🌸 Spring' : s === 'Summer' ? '☀️ Summer' : s === 'Autumn' ? '🍂 Autumn' : '❄️ Winter');
      seasonDisplay.textContent = sName;
      seasonDisplay.style.color = this.world.isSolsticeActive ? '#facc15' : (s === 'Winter' ? '#7dd3fc' : s === 'Autumn' ? '#fb923c' : s === 'Summer' ? '#facc15' : '#34d399');
    }

    const tempDisplay = document.getElementById('temp-display');
    if (tempDisplay) {
      const temp = Math.round(this.world.temperatureCelsius ?? 18);
      const icon = temp <= 0 ? '🥶' : temp < 10 ? '❄️' : temp > 25 ? '🔥' : '🌡️';
      tempDisplay.textContent = `${icon} ${temp}°C`;
      tempDisplay.style.color = temp <= 0 ? '#38bdf8' : temp < 10 ? '#93c5fd' : temp > 25 ? '#f87171' : '#34d399';
    }

    const popCount = document.getElementById('pop-count');
    const aliveCount = agents.filter((a) => !a.isDeceased).length;
    if (popCount) popCount.textContent = `${aliveCount} Pioneers`;

    const allDeceased = agents.length > 0 && agents.every((a) => a.isDeceased);
    const passingBanner = document.getElementById('natural-passing-banner');
    const gazeVal = document.getElementById('gaze-timer-val');
    if (passingBanner) {
      passingBanner.style.display = allDeceased ? 'block' : 'none';
    }
    if (gazeVal) {
      if (allDeceased) {
        gazeVal.textContent = 'PASSED (2d)';
        gazeVal.style.color = '#ef4444';
      } else {
        gazeVal.textContent = 'GAZE: 48h ACTIVE';
        gazeVal.style.color = '#38bdf8';
      }
    }

    const treasuryCount = document.getElementById('treasury-count');
    if (treasuryCount) {
      treasuryCount.textContent = this.economy.isCurrencyUnlocked
        ? `${this.economy.treasuryCoins} Coins`
        : 'Barter Age';
    }

    const gdpCount = document.getElementById('gdp-count');
    if (gdpCount) gdpCount.textContent = `GDP ${this.economy.totalGdp}`;

    const bldCount = document.getElementById('buildings-count');
    if (bldCount) bldCount.textContent = `${this.world.buildings.size} Structures`;

    // Determine Era
    const eraBadge = document.getElementById('era-badge');
    if (eraBadge) {
      const era = this.determineCurrentEra();
      eraBadge.textContent = `${era.toUpperCase()} ERA`;
    }

    // 2. Citizen Pills
    this.updateCitizenPills(agents);

    // 3. Selected Agent Status
    const selectedAgent = agents.find((a) => a.id === this.selectedAgentId) || agents[0];
    if (selectedAgent) {
      this.selectedAgentId = selectedAgent.id;
      this.updateAgentInspector(selectedAgent, agents);
    }

    // 4. Latest Chronicle Ticker
    if (this.aiEngine.chronicles.length > 0) {
      const latest = this.aiEngine.chronicles[0];
      const ticker = document.getElementById('latest-chronicle-text');
      if (ticker) {
        ticker.textContent = `[${latest.timeStr}] ${latest.title}: ${latest.description}`;
      }
    }

    // 5. Radar Minimap Update
    this.updateMinimap(agents, animals);

    // Update opened modals live
    if (this.openTab === 'economy') {
      this.renderEconomyTable();
    } else if (this.openTab === 'dynasty') {
      this.renderDynastyTree(agents);
    }
  }

  private determineCurrentEra(): TechEra {
    const discovered = TECHNOLOGIES.filter((t) => t.discovered);
    if (discovered.some((t) => t.era === 'renaissance')) return 'renaissance';
    if (discovered.some((t) => t.era === 'medieval')) return 'medieval';
    if (discovered.some((t) => t.era === 'bronze')) return 'bronze';
    if (discovered.some((t) => t.era === 'neolithic')) return 'neolithic';
    return 'primeval';
  }

  private updateCitizenPills(agents: Agent[]): void {
    const container = document.getElementById('agent-selector-pills');
    if (!container) return;

    if (container.children.length !== agents.length) {
      container.innerHTML = '';
      for (const agent of agents) {
        const pill = document.createElement('div');
        pill.className = `agent-pill ${agent.id === this.selectedAgentId ? 'active' : ''}`;
        pill.textContent = `${agent.gender === 'male' ? '♂' : '♀'} ${agent.name}`;
        pill.addEventListener('click', () => {
          this.selectedAgentId = agent.id;
          if (this.camera) {
            this.camera.followTarget = agent;
          }
        });
        container.appendChild(pill);
      }
    } else {
      // Refresh active class
      agents.forEach((agent, i) => {
        const child = container.children[i];
        if (child) {
          if (agent.id === this.selectedAgentId) {
            child.classList.add('active');
          } else {
            child.classList.remove('active');
          }
        }
      });
    }
  }

  private updateAgentInspector(agent: Agent, allAgents: Agent[] = []): void {
    const nameEl = document.getElementById('agent-name');
    if (nameEl) nameEl.textContent = agent.name;

    const stage = agent.lifeStage || 'adult';
    const stageBadges: Record<string, { label: string; icon: string; color: string }> = {
      infant: { label: 'INFANT (CRIB)', icon: '🍼', color: '#f472b6' },
      child: { label: 'CHILD (PLAYFUL)', icon: '🌱', color: '#facc15' },
      apprentice: { 
        label: `APPRENTICE (${(agent.apprenticeTrade || 'CRAFTER').toUpperCase()})`, 
        icon: '⚒️', 
        color: '#38bdf8' 
      },
      adult: { label: `ADULT (${agent.role.toUpperCase()})`, icon: '🌟', color: '#34d399' },
      elder: { label: 'VENERABLE ELDER', icon: '👴', color: '#c084fc' }
    };
    const stBadge = stageBadges[stage] || stageBadges.adult;

    const metaEl = document.getElementById('agent-meta');
    if (metaEl) {
      if (agent.isDeceased) {
        metaEl.innerHTML = `<span style="color: #ef4444; font-weight: 700;">🪦 ANCESTRAL SPIRIT</span> • Passed Day ${agent.deceasedDay || '?'}`;
      } else {
        const gearTags: string[] = [];
        if (agent.isRidingHorse) gearTags.push('🐎 Mounted');
        if (agent.isInBoat) gearTags.push('⛵ Sailing');
        if (agent.hasCargoCart) gearTags.push('🛒 Cart');
        if ((agent.inventory.wooden_shield || 0) > 0) gearTags.push('🛡️ Shield');
        const gearStr = gearTags.length > 0 ? ` • <span style="color: #facc15;">${gearTags.join(' ')}</span>` : '';
        metaEl.innerHTML = `<span style="color: ${stBadge.color}; font-weight: 700;">${stBadge.icon} ${stBadge.label}</span> • Age ${Math.floor(agent.age)} • Gen ${agent.generation}${gearStr}`;
      }
    }

    const avatarEl = document.getElementById('agent-avatar');
    if (avatarEl) {
      let icon = agent.gender === 'male' ? '🧔' : '👩';
      if (agent.isDeceased) icon = '🪦';
      else if (agent.isRidingHorse) icon = '🏇';
      else if (agent.isInBoat) icon = '🛶';
      else if ((agent.inventory.wooden_shield || 0) > 0) icon = '🛡️';
      else if (stage === 'infant') icon = '👶';
      else if (stage === 'child') icon = agent.gender === 'male' ? '👦' : '👧';
      else if (stage === 'elder') icon = '👴';
      avatarEl.textContent = icon;
      avatarEl.style.background = `linear-gradient(135deg, ${agent.color}, #6366f1)`;
    }

    // Need percentages
    const updateBar = (id: string, val: number) => {
      const bar = document.getElementById(`bar-${id}`);
      const text = document.getElementById(`val-${id}`);
      if (bar) bar.style.width = `${Math.round(val)}%`;
      if (text) text.textContent = `${Math.round(val)}%`;
    };

    updateBar('hunger', agent.needs.hunger);
    updateBar('energy', agent.needs.energy);
    updateBar('warmth', agent.needs.warmth);
    updateBar('social', agent.needs.social);
    updateBar('curiosity', agent.needs.curiosity);

    // Thought & Action
    const thoughtEl = document.getElementById('agent-thought');
    if (thoughtEl) thoughtEl.textContent = `"${agent.activeThought}"`;

    const actionEl = document.getElementById('agent-action');
    if (actionEl) actionEl.textContent = `Current: ${agent.currentAction}`;

    // Romance, Courtship & Family Life
    let partner = agent.spouseId ? allAgents.find((a) => a.id === agent.spouseId) : undefined;
    if (!partner) {
      partner = allAgents.find((a) => a.id !== agent.id && a.gender !== agent.gender);
    }
    const rel = partner ? agent.relationships[partner.id] : undefined;

    const partnerNameEl = document.getElementById('romance-partner-name');
    if (partnerNameEl) {
      if (agent.spouseId && partner) {
        partnerNameEl.textContent = `Partner: Married to ${partner.name} 💍`;
      } else if (partner) {
        partnerNameEl.textContent = `Partner: ${partner.name} (${partner.gender === 'male' ? 'Pioneer' : 'Pioneer'})`;
      } else {
        partnerNameEl.textContent = 'Partner: Solitary Pioneer';
      }
    }

    const stageBadgeEl = document.getElementById('romance-stage-badge');
    if (stageBadgeEl) {
      const stage = rel?.stage || 'strangers';
      const stageLabels: Record<string, { label: string; color: string; bg: string }> = {
        strangers: { label: 'STRANGERS', color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.15)' },
        friends: { label: 'FRIENDS 🤝', color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.15)' },
        crush: { label: 'CRUSH 💕', color: '#f472b6', bg: 'rgba(244, 114, 182, 0.2)' },
        in_love: { label: 'IN LOVE 💖', color: '#ec4899', bg: 'rgba(236, 72, 153, 0.25)' },
        married: { label: 'MARRIED 💍', color: '#fbbf24', bg: 'rgba(251, 191, 36, 0.2)' },
      };
      const st = stageLabels[stage] || stageLabels.strangers;
      stageBadgeEl.textContent = st.label;
      stageBadgeEl.style.color = st.color;
      stageBadgeEl.style.background = st.bg;
      stageBadgeEl.style.borderColor = st.color;
    }

    updateBar('affection', rel?.affection || 0);
    updateBar('trust', rel?.trust || 0);

    // Live Gestation Meter
    const pregnancyPanel = document.getElementById('romance-pregnancy-panel');
    const gestationLabel = document.getElementById('gestation-label');
    const valGestation = document.getElementById('val-gestation');
    const barGestation = document.getElementById('bar-gestation');

    if (pregnancyPanel && gestationLabel && valGestation && barGestation) {
      if (agent.isPregnant) {
        const pct = Math.round(agent.pregnancyProgress || 0);
        pregnancyPanel.style.display = 'block';
        gestationLabel.textContent = '🤰 Expecting Mother (Gestation)';
        valGestation.textContent = `${pct}%`;
        barGestation.style.width = `${pct}%`;
      } else if (partner && partner.isPregnant) {
        const pct = Math.round(partner.pregnancyProgress || 0);
        pregnancyPanel.style.display = 'block';
        gestationLabel.textContent = `🤰 Spouse ${partner.name} Expecting`;
        valGestation.textContent = `${pct}%`;
        barGestation.style.width = `${pct}%`;
      } else {
        pregnancyPanel.style.display = 'none';
      }
    }

    // Inventory
    const invGrid = document.getElementById('inventory-grid');
    if (invGrid) {
      invGrid.innerHTML = '';
      const items = Object.entries(agent.inventory);
      if (items.length === 0) {
        invGrid.innerHTML = `<div style="grid-column: span 4; font-size: 11px; color: var(--text-muted); text-align: center; padding: 6px;">Empty pack</div>`;
      } else {
        for (const [item, count] of items) {
          if (!count || count <= 0) continue;
          const slot = document.createElement('div');
          slot.className = 'inventory-slot';
          slot.innerHTML = `
            <div class="inv-icon">${this.getItemIcon(item)}</div>
            <div class="inv-count">${count}x</div>
          `;
          slot.title = `${item.replace('_', ' ')} (${count})`;
          invGrid.appendChild(slot);
        }
      }
    }
  }

  private getItemIcon(item: string): string {
    const map: Record<string, string> = {
      berries: '🫐',
      stick: '🪵',
      stone: '🪨',
      flint: '💎',
      clay: '🧱',
      wood_log: '🌲',
      firewood: '🔥',
      stone_axe: '🪓',
      flint_spear: '🗡️',
      woven_basket: '🧺',
      clay_pot: '🏺',
      mud_brick: '🧱',
      harvested_wheat: '🌾',
      flour: '🌾',
      bread: '🍞',
      copper_ore: '🪨',
      copper_ingot: '🥉',
      copper_axe: '🪓',
      iron_ore: '⛏️',
      iron_ingot: '🥈',
      iron_tools: '⚒️',
      gold_ore: '✨',
      gold_coin: '🪙',
      timber_plank: '🪵',
      cut_stone: '🏛️',
    };
    return map[item] || '📦';
  }

  private renderTechList(): void {
    const listEl = document.getElementById('tech-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    for (const tech of TECHNOLOGIES) {
      const card = document.createElement('div');
      card.className = `tech-card ${tech.discovered ? 'discovered' : ''}`;
      card.innerHTML = `
        <div class="tech-icon">${tech.icon}</div>
        <div class="tech-info">
          <div class="tech-name">${tech.name} <span style="font-size: 10px; color: var(--text-muted);">[${tech.era.toUpperCase()}]</span></div>
          <div class="tech-desc">${tech.description}</div>
          <div class="tech-status" style="color: ${tech.discovered ? 'var(--accent-emerald)' : 'var(--text-muted)'};">
            ${tech.discovered ? `✓ Discovered by ${tech.discoveredBy || 'Pioneers'}` : '🔒 Awaiting Experimentation'}
          </div>
        </div>
      `;
      listEl.appendChild(card);
    }
  }

  private renderEconomyTable(): void {
    const tbody = document.getElementById('market-tbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    for (const item of this.economy.items.values()) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${this.getItemIcon(item.item)} ${item.name}</td>
        <td class="price-tag">${item.currentPrice} ${this.economy.isCurrencyUnlocked ? '🪙' : 'Val'}</td>
        <td style="color: var(--accent-emerald);">${item.supply}</td>
        <td style="color: var(--accent-pink);">${item.demand}</td>
      `;
      tbody.appendChild(tr);
    }
  }

  private renderChroniclesFull(): void {
    const listEl = document.getElementById('chronicles-full-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    for (const entry of this.aiEngine.chronicles) {
      const row = document.createElement('div');
      row.style.cssText = `
        padding: 10px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        display: flex;
        align-items: flex-start;
        gap: 10px;
      `;
      row.innerHTML = `
        <div style="font-size: 20px;">${entry.icon}</div>
        <div>
          <div style="font-size: 13px; font-weight: 700;">Day ${entry.day} • ${entry.timeStr} - ${entry.title}</div>
          <div style="font-size: 11px; color: var(--text-muted); margin-top: 3px;">${entry.description}</div>
        </div>
      `;
      listEl.appendChild(row);
    }
  }

  private renderDynastyTree(agents: Agent[]): void {
    const summaryEl = document.getElementById('dynasty-summary-bar');
    const containerEl = document.getElementById('dynasty-tree-container');
    if (!summaryEl || !containerEl) return;

    const living = agents.filter((a) => !a.isDeceased);
    const deceased = agents.filter((a) => a.isDeceased);
    const maxGen = Math.max(...agents.map((a) => a.generation || 1), 1);
    const marriages = agents.filter((a) => !!a.spouseId).length / 2;

    summaryEl.innerHTML = `
      <div class="dynasty-stat-chip">
        <span class="dynasty-stat-val">${living.length}</span>
        <span class="dynasty-stat-lbl">Living Citizens</span>
      </div>
      <div class="dynasty-stat-chip">
        <span class="dynasty-stat-val">Gen ${maxGen}</span>
        <span class="dynasty-stat-lbl">Generations</span>
      </div>
      <div class="dynasty-stat-chip">
        <span class="dynasty-stat-val">${Math.floor(marriages)}</span>
        <span class="dynasty-stat-lbl">Unions 💍</span>
      </div>
      <div class="dynasty-stat-chip">
        <span class="dynasty-stat-val">${deceased.length}</span>
        <span class="dynasty-stat-lbl">Ancestral Cairns 🪦</span>
      </div>
    `;

    containerEl.innerHTML = '';

    // Group agents by generation
    const byGen: Record<number, Agent[]> = {};
    for (const a of agents) {
      const g = a.generation || 1;
      if (!byGen[g]) byGen[g] = [];
      byGen[g].push(a);
    }

    const genKeys = Object.keys(byGen).map(Number).sort((a, b) => a - b);
    for (const gen of genKeys) {
      const genAgents = byGen[gen];
      const genSection = document.createElement('div');
      genSection.className = 'dynasty-gen-section';

      const genTitle = document.createElement('div');
      genTitle.className = 'dynasty-gen-title';
      genTitle.innerHTML = gen === 1 
        ? `👑 GENERATION 1: FOUNDERS OF EDEN`
        : `🌱 GENERATION ${gen}: EXPANSION & BLOODLINE`;
      genSection.appendChild(genTitle);

      const cardsGrid = document.createElement('div');
      cardsGrid.className = 'dynasty-cards-grid';

      for (const agent of genAgents) {
        const card = document.createElement('div');
        card.className = `dynasty-card ${agent.id === this.selectedAgentId ? 'active' : ''} ${agent.isDeceased ? 'deceased' : ''}`;
        
        const stage = agent.lifeStage || 'adult';
        let stageBadge = '🌟 ADULT';
        if (agent.isDeceased) stageBadge = '🪦 ANCESTOR';
        else if (stage === 'infant') stageBadge = '🍼 INFANT';
        else if (stage === 'child') stageBadge = '🌱 CHILD';
        else if (stage === 'apprentice') stageBadge = `⚒️ APPRENTICE (${agent.apprenticeTrade || 'CRAFT'})`;
        else if (stage === 'elder') stageBadge = '👴 ELDER';

        let avatar = agent.gender === 'male' ? '🧔' : '👩';
        if (agent.isDeceased) avatar = '🪦';
        else if (stage === 'infant') avatar = '👶';
        else if (stage === 'child') avatar = agent.gender === 'male' ? '👦' : '👧';
        else if (stage === 'elder') avatar = '👴';

        const spouse = agent.spouseId ? agents.find(a => a.id === agent.spouseId) : undefined;
        let spouseText = 'Unwed';
        if (agent.spouseId && spouse) {
          spouseText = `💍 Wed to ${spouse.name}`;
        } else if (agent.parentsIds && agent.parentsIds.length > 0) {
          const parents = agents.filter(a => agent.parentsIds.includes(a.id));
          spouseText = parents.length > 0 ? `👶 Child of ${parents.map(p => p.name).join(' & ')}` : 'Line of Eden';
        }

        card.innerHTML = `
          <div class="dynasty-card-header">
            <div class="dynasty-avatar" style="background: linear-gradient(135deg, ${agent.color}, #6366f1);">${avatar}</div>
            <div class="dynasty-card-title">
              <div class="dynasty-name">${agent.name}</div>
              <div class="dynasty-role">${agent.role} • Age ${Math.floor(agent.age)}</div>
            </div>
          </div>
          <div class="dynasty-badge ${agent.isDeceased ? 'badge-deceased' : ''}">${stageBadge}</div>
          <div class="dynasty-spouse">${spouseText}</div>
          <div class="dynasty-action">${agent.isDeceased ? `Memorial Cairn Day ${agent.deceasedDay || '?'}` : agent.currentAction}</div>
        `;

        card.addEventListener('click', () => {
          this.selectedAgentId = agent.id;
          if (this.camera) {
            this.camera.panTo(agent.x, agent.y);
            if (!agent.isDeceased) {
              this.camera.followTarget = agent;
            }
          }
          this.renderDynastyTree(agents);
        });

        cardsGrid.appendChild(card);
      }

      genSection.appendChild(cardsGrid);
      containerEl.appendChild(genSection);
    }
  }

  private updateMinimap(agents: Agent[], animals: Animal[] = []): void {
    const canvas = document.getElementById('minimap-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mapW = canvas.width;
    const mapH = canvas.height;
    const halfW = this.world.width / 2;
    const halfH = this.world.height / 2;

    const toMapX = (wx: number) => ((wx + halfW) / this.world.width) * mapW;
    const toMapY = (wy: number) => ((wy + halfH) / this.world.height) * mapH;
    const tileW = Math.max(1, (1 / this.world.width) * mapW);
    const tileH = Math.max(1, (1 / this.world.height) * mapH);

    // Background terrain: deep earthy green
    ctx.fillStyle = '#0f241a';
    ctx.fillRect(0, 0, mapW, mapH);

    // Render terrain chunks
    for (const chunk of this.world.chunks.values()) {
      for (let x = 0; x < 16; x++) {
        for (let y = 0; y < 16; y++) {
          const tile = chunk.tiles[x]?.[y];
          if (!tile) continue;
          const tx = toMapX(tile.x);
          const ty = toMapY(tile.y);
          if (tx < -2 || tx > mapW + 2 || ty < -2 || ty > mapH + 2) continue;

          if (tile.type === 'water' || tile.type === 'deep_water') {
            ctx.fillStyle = '#1e3a8a';
            ctx.fillRect(tx, ty, tileW + 0.5, tileH + 0.5);
          } else if (tile.type === 'dense_forest' || tile.type === 'sparse_trees') {
            ctx.fillStyle = '#143823';
            ctx.fillRect(tx, ty, tileW + 0.5, tileH + 0.5);
          } else if (tile.type === 'dirt_path' || tile.type === 'cobblestone_road') {
            ctx.fillStyle = '#78350f';
            ctx.fillRect(tx, ty, tileW + 0.5, tileH + 0.5);
          } else if (tile.type === 'farm_wheat') {
            ctx.fillStyle = '#ca8a04';
            ctx.fillRect(tx, ty, tileW + 0.5, tileH + 0.5);
          }
        }
      }
    }

    // Render Buildings
    for (const bld of this.world.buildings.values()) {
      const bx = toMapX(bld.x);
      const by = toMapY(bld.y);
      if (bld.type === 'settlement_totem') {
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (bld.type === 'ancestral_cairn') {
        ctx.fillStyle = '#c084fc';
        ctx.beginPath();
        ctx.arc(bx, by, 3, 0, Math.PI * 2);
        ctx.fill();
      } else if (bld.type === 'wooden_bridge') {
        ctx.fillStyle = '#b45309'; // Rich wooden bridge plank color
        ctx.fillRect(bx - 1.5, by - 1.5, 3, 3);
      } else if (bld.type === 'waterwheel') {
        ctx.fillStyle = '#38bdf8'; // Blue/cyan waterwheel mill
        ctx.beginPath();
        ctx.arc(bx, by, 2.5, 0, Math.PI * 2);
        ctx.fill();
      } else if (bld.type === 'great_library') {
        ctx.fillStyle = '#c084fc'; // Regal purple archive
        ctx.fillRect(bx - 2, by - 2, 4, 4);
      } else if (bld.type === 'horse_stable') {
        ctx.fillStyle = '#92400e'; // Warm wood stable
        ctx.fillRect(bx - 2, by - 2, 4, 4);
      } else if (bld.type === 'dock_pier') {
        ctx.fillStyle = '#78350f'; // Pier
        ctx.fillRect(bx - 1.5, by - 1.5, 3, 3);
      } else if (bld.type === 'timber_palisade') {
        ctx.fillStyle = '#451a03'; // Dark palisade log
        ctx.fillRect(bx - 1, by - 1, 2, 2);
      } else if (bld.type === 'watch_gate') {
        ctx.fillStyle = '#f59e0b'; // Watch gate
        ctx.fillRect(bx - 2, by - 2, 4, 4);
      } else if (bld.type === 'stone_aqueduct') {
        ctx.fillStyle = '#38bdf8'; // Aqueduct water line
        ctx.fillRect(bx - 1.5, by - 1.5, 3, 3);
      } else if (bld.type === 'water_cistern') {
        ctx.fillStyle = '#0284c7'; // Cistern reservoir
        ctx.beginPath();
        ctx.arc(bx, by, 3, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(bx - 1.5, by - 1.5, 3, 3);
      }
    }

    // Render Domestic & Wild Fauna
    for (const animal of animals) {
      const ax = toMapX(animal.x);
      const ay = toMapY(animal.y);
      if (animal.species === 'sheep') {
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(ax - 1, ay - 1, 2, 2);
      } else if (animal.species === 'dog') {
        ctx.fillStyle = '#eab308';
        ctx.fillRect(ax - 1, ay - 1, 2, 2);
      } else if (animal.species === 'horse') {
        ctx.fillStyle = '#b45309';
        ctx.fillRect(ax - 1.5, ay - 1.5, 3, 3);
      } else if (animal.species === 'wolf') {
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(ax - 1, ay - 1, 2, 2);
      }
    }

    // Render Pioneers
    for (const agent of agents) {
      if (agent.isDeceased) continue;
      const ax = toMapX(agent.x);
      const ay = toMapY(agent.y);

      // Pulsing indicator if currently selected
      if (agent.id === this.selectedAgentId) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ax, ay, 4.5, 0, Math.PI * 2);
        ctx.stroke();
      }

      let color = agent.gender === 'male' ? '#38bdf8' : '#f472b6';
      if (agent.lifeStage === 'infant' || agent.lifeStage === 'child') {
        color = '#facc15';
      } else if (agent.lifeStage === 'elder') {
        color = '#e2e8f0';
      }
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(ax, ay, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Camera Viewport Frustum Box
    if (this.camera) {
      const screenW = this.camera.canvas.width;
      const screenH = this.camera.canvas.height;
      const halfTilesX = (screenW / 2) / (32 * this.camera.zoom);
      const halfTilesY = (screenH / 2) / (32 * this.camera.zoom);

      const vx = toMapX(this.camera.x - halfTilesX);
      const vy = toMapY(this.camera.y - halfTilesY);
      const vw = (halfTilesX * 2 / this.world.width) * mapW;
      const vh = (halfTilesY * 2 / this.world.height) * mapH;

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.lineWidth = 1.2;
      ctx.strokeRect(vx, vy, vw, vh);
    }

    // Update coordinates and settlement title
    const titleEl = document.getElementById('minimap-settlement-title');
    if (titleEl) {
      titleEl.textContent = this.world.settlementName ? `🏛️ ${this.world.settlementName}` : '🏕️ Eden Wilds';
    }
    const coordsEl = document.getElementById('minimap-coords');
    if (coordsEl && this.camera) {
      coordsEl.textContent = `${Math.round(this.camera.x)}, ${Math.round(this.camera.y)}`;
    }
  }
}
