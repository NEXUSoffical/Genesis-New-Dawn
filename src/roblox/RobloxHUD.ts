export interface HotbarTool {
  id: string;
  name: string;
  icon: string;
  key: string;
}

export class RobloxHUD {
  private container: HTMLElement;
  private escMenu: HTMLElement | null = null;
  private chatMessagesEl: HTMLElement | null = null;
  private chatInput: HTMLInputElement | null = null;
  private playerCountEl: HTMLElement | null = null;
  private timePillEl: HTMLElement | null = null;
  private titleEl: HTMLElement | null = null;
  private modeBtnEl: HTMLElement | null = null;
  private studioActionsEl: HTMLElement | null = null;
  private activeSlotIndex: number = 0;

  public isStudioMode: boolean = false;
  public isFlyActive: boolean = false;
  public activeHotbarSet: 'build' | 'obby' = 'build';
  public gameTitle: string = 'Genesis 3D';

  public onToolEquipped?: (tool: HotbarTool | null) => void;
  public onChatSent?: (message: string) => void;
  public onLeaveGame?: () => void;
  public onToggleStudioMode?: (active: boolean) => void;
  public onSaveMap?: () => void;
  public onPublishMap?: () => void;
  public onLoadMap?: () => void;
  public onToggleFlyMode?: () => void;

  private buildTools: HotbarTool[] = [
    { id: 'pickaxe', name: 'Pickaxe', icon: '⛏️', key: '1' },
    { id: 'axe', name: 'Lumber Axe', icon: '🪓', key: '2' },
    { id: 'sword', name: 'Skyblade', icon: '⚔️', key: '3' },
    { id: 'block_grass', name: 'Grass', icon: '🟩', key: '4' },
    { id: 'block_stone', name: 'Stone', icon: '🪨', key: '5' },
    { id: 'block_wood', name: 'Wood', icon: '🪵', key: '6' },
    { id: 'block_leaves', name: 'Leaves', icon: '🍃', key: '7' },
    { id: 'block_brick', name: 'Brick', icon: '🧱', key: '8' },
    { id: 'block_crystal', name: 'Crystal', icon: '💎', key: '9' }
  ];

  private obbyTools: HotbarTool[] = [
    { id: 'pickaxe', name: 'Erase / Pick', icon: '⛏️', key: '1' },
    { id: 'block_lava', name: 'Lava Hazard', icon: '🔥', key: '2' },
    { id: 'block_bounce_pad', name: 'Bounce Pad', icon: '🟢', key: '3' },
    { id: 'block_speed_pad', name: 'Speed Pad', icon: '🔵', key: '4' },
    { id: 'block_checkpoint', name: 'Checkpoint', icon: '🚩', key: '5' },
    { id: 'block_finish_line', name: 'Finish Line', icon: '🏆', key: '6' },
    { id: 'block_gold', name: 'Gold Block', icon: '🟡', key: '7' },
    { id: 'block_obsidian', name: 'Obsidian', icon: '🖤', key: '8' },
    { id: 'block_neon_pink', name: 'Neon Pink', icon: '💖', key: '9' }
  ];

  constructor(parent: HTMLElement) {
    this.container = document.createElement('div');
    this.container.id = 'rbx-hud-overlay';
    parent.appendChild(this.container);

    this.render();
    this.setupKeyboardShortcuts();
    setTimeout(() => this.equipSlot(0), 100);
  }

  public get currentTools(): HotbarTool[] {
    return this.activeHotbarSet === 'build' ? this.buildTools : this.obbyTools;
  }

  private render(): void {
    this.container.innerHTML = `
      <!-- MINECRAFT CROSSHAIR -->
      <div class="rbx-minecraft-crosshair">+</div>

      <!-- TOP BAR -->
      <div class="rbx-ingame-topbar">
        <div class="rbx-ingame-topbar-left">
          <button id="rbx-btn-menu" class="rbx-menu-btn" title="Menu (ESC)">
            <span>☰</span>
          </button>
          <span id="rbx-game-title-val" style="font-size: 14px; font-weight: 800; color: #fff; letter-spacing: 0.5px; font-family: 'Outfit', sans-serif;">
            ${this.gameTitle}
          </span>
          <div id="rbx-player-count-pill" class="rbx-player-count-badge">
            <span class="pulse-dot-green"></span>
            <span id="rbx-player-count-val">1 Online</span>
          </div>

          <!-- Studio Mode Switcher & Tools -->
          <button id="rbx-btn-mode-toggle" class="rbx-hud-pill-btn ${this.isStudioMode ? 'active-studio' : ''}">
            ${this.isStudioMode ? '🛠️ Studio (Building)' : '🎮 Play Mode'}
          </button>

          <div id="rbx-studio-action-row" style="display: ${this.isStudioMode ? 'flex' : 'none'}; gap: 6px; align-items: center;">
            <button id="rbx-btn-save-map" class="rbx-hud-pill-btn green" title="Save map draft locally">
              💾 Save
            </button>
            <button id="rbx-btn-publish-map" class="rbx-hud-pill-btn purple" title="Publish map to community">
              🚀 Publish
            </button>
            <button id="rbx-btn-load-map" class="rbx-hud-pill-btn" title="Load map template or draft">
              📂 Maps
            </button>
            <button id="rbx-btn-fly-toggle" class="rbx-hud-pill-btn ${this.isFlyActive ? 'active-fly' : ''}" title="Toggle Fly Mode (F key)">
              🪽 Fly: ${this.isFlyActive ? 'ON' : 'OFF (F)'}
            </button>
          </div>
        </div>

        <div class="rbx-ingame-topbar-right">
          <div id="rbx-time-pill" class="rbx-time-badge">
            <span id="rbx-time-icon">☀️</span>
            <span id="rbx-time-val">12:00 PM</span>
          </div>
          <button id="rbx-btn-quick-exit" class="rbx-hud-exit-btn">
            Exit to Hub
          </button>
        </div>
      </div>

      <!-- CHAT CONTAINER -->
      <div id="rbx-chat-box" class="rbx-chat-container">
        <div id="rbx-chat-messages" class="rbx-chat-messages">
          <div class="rbx-chat-line">
            <span class="rbx-chat-sender" style="color: #38bdf8;">[System]</span>
            <span class="rbx-chat-text">Welcome to Genesis 3D! Press TAB to switch Obby / Building blocks.</span>
          </div>
        </div>
        <div class="rbx-chat-input-wrap">
          <input type="text" id="rbx-chat-input" class="rbx-chat-input" placeholder="Type a message..." maxlength="120" />
        </div>
      </div>

      <!-- HOTBAR CONTROLS & PALETTE SWITCHER -->
      <div class="rbx-hotbar-container">
        <div class="rbx-hotbar-tabs">
          <button id="rbx-btn-tab-build" class="rbx-hotbar-tab ${this.activeHotbarSet === 'build' ? 'active' : ''}">
            🧱 Standard Blocks
          </button>
          <button id="rbx-btn-tab-obby" class="rbx-hotbar-tab ${this.activeHotbarSet === 'obby' ? 'active' : ''}">
            ⚡ Obby & Traps (TAB)
          </button>
        </div>

        <!-- 9-SLOT BACKPACK / HOTBAR -->
        <div class="rbx-backpack-hotbar" id="rbx-hotbar-slots">
          ${this.renderHotbarSlotsHtml()}
        </div>
      </div>

      <!-- ESC PAUSE MENU -->
      <div id="rbx-esc-modal" class="rbx-esc-menu-modal" style="display: none;">
        <div class="rbx-esc-card">
          <h3 id="rbx-esc-title">${this.gameTitle}</h3>
          <p style="text-align: center; color: var(--rbx-text-sub); font-size: 13px;">Session In Progress</p>
          <button id="rbx-btn-resume" class="rbx-esc-btn rbx-esc-resume">▶ Resume Game</button>
          <button id="rbx-btn-leave" class="rbx-esc-btn rbx-esc-leave">🚪 Return to Worlds Hub</button>
        </div>
      </div>
    `;

    this.escMenu = this.container.querySelector('#rbx-esc-modal');
    this.chatMessagesEl = this.container.querySelector('#rbx-chat-messages');
    this.chatInput = this.container.querySelector('#rbx-chat-input');
    this.playerCountEl = this.container.querySelector('#rbx-player-count-val');
    this.timePillEl = this.container.querySelector('#rbx-time-pill');
    this.titleEl = this.container.querySelector('#rbx-game-title-val');
    this.modeBtnEl = this.container.querySelector('#rbx-btn-mode-toggle');
    this.studioActionsEl = this.container.querySelector('#rbx-studio-action-row');

    // Menu toggle
    this.container.querySelector('#rbx-btn-menu')?.addEventListener('click', () => this.toggleEscMenu());
    this.container.querySelector('#rbx-btn-resume')?.addEventListener('click', () => this.toggleEscMenu(false));
    this.container.querySelector('#rbx-btn-leave')?.addEventListener('click', () => {
      if (this.onLeaveGame) this.onLeaveGame();
    });

    // Quick exit
    this.container.querySelector('#rbx-btn-quick-exit')?.addEventListener('click', () => {
      if (this.onLeaveGame) this.onLeaveGame();
    });

    // Studio Mode toggle
    this.modeBtnEl?.addEventListener('click', () => {
      if (this.onToggleStudioMode) this.onToggleStudioMode(!this.isStudioMode);
    });

    // Studio action buttons
    this.container.querySelector('#rbx-btn-save-map')?.addEventListener('click', () => {
      if (this.onSaveMap) this.onSaveMap();
    });
    this.container.querySelector('#rbx-btn-publish-map')?.addEventListener('click', () => {
      if (this.onPublishMap) this.onPublishMap();
    });
    this.container.querySelector('#rbx-btn-load-map')?.addEventListener('click', () => {
      if (this.onLoadMap) this.onLoadMap();
    });
    this.container.querySelector('#rbx-btn-fly-toggle')?.addEventListener('click', () => {
      if (this.onToggleFlyMode) this.onToggleFlyMode();
    });

    // Hotbar tab switcher
    this.container.querySelector('#rbx-btn-tab-build')?.addEventListener('click', () => this.switchHotbarSet('build'));
    this.container.querySelector('#rbx-btn-tab-obby')?.addEventListener('click', () => this.switchHotbarSet('obby'));

    // Chat handling
    this.chatInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const text = this.chatInput!.value.trim();
        if (text && this.onChatSent) {
          this.onChatSent(text);
          this.chatInput!.value = '';
        }
      }
      e.stopPropagation();
    });

    this.bindSlotClickEvents();
  }

  private renderHotbarSlotsHtml(): string {
    return this.currentTools
      .map(
        (t, i) => `
        <div class="rbx-hotbar-slot ${i === this.activeSlotIndex ? 'active' : ''}" data-index="${i}" title="${t.name} [${t.key}]">
          <span class="rbx-slot-key">${t.key}</span>
          <span class="rbx-slot-icon">${t.icon}</span>
          <span class="rbx-slot-name">${t.name}</span>
        </div>
      `
      )
      .join('');
  }

  private bindSlotClickEvents(): void {
    const slots = this.container.querySelectorAll('.rbx-hotbar-slot');
    slots.forEach((s) => {
      s.addEventListener('click', () => {
        const idx = parseInt(s.getAttribute('data-index') || '0', 10);
        this.equipSlot(idx);
      });
    });
  }

  public switchHotbarSet(set: 'build' | 'obby'): void {
    this.activeHotbarSet = set;
    const tabBuild = this.container.querySelector('#rbx-btn-tab-build');
    const tabObby = this.container.querySelector('#rbx-btn-tab-obby');
    if (set === 'build') {
      tabBuild?.classList.add('active');
      tabObby?.classList.remove('active');
    } else {
      tabBuild?.classList.remove('active');
      tabObby?.classList.add('active');
    }

    const slotsContainer = this.container.querySelector('#rbx-hotbar-slots');
    if (slotsContainer) {
      slotsContainer.innerHTML = this.renderHotbarSlotsHtml();
      this.bindSlotClickEvents();
      this.equipSlot(this.activeSlotIndex);
    }
  }

  public toggleHotbarSet(): void {
    this.switchHotbarSet(this.activeHotbarSet === 'build' ? 'obby' : 'build');
  }

  public setStudioMode(active: boolean): void {
    this.isStudioMode = active;
    if (this.modeBtnEl) {
      this.modeBtnEl.textContent = active ? '🛠️ Studio (Building)' : '🎮 Play Mode';
      this.modeBtnEl.className = `rbx-hud-pill-btn ${active ? 'active-studio' : ''}`;
    }
    if (this.studioActionsEl) {
      this.studioActionsEl.style.display = active ? 'flex' : 'none';
    }
    this.showToast(active ? '🛠️ Studio Build Mode Activated! (Press F to Fly)' : '🎮 Play Mode Activated!');
  }

  public setFlyStatus(flying: boolean): void {
    this.isFlyActive = flying;
    const btn = this.container.querySelector('#rbx-btn-fly-toggle');
    if (btn) {
      btn.textContent = `🪽 Fly: ${flying ? 'ON' : 'OFF (F)'}`;
      btn.className = `rbx-hud-pill-btn ${flying ? 'active-fly' : ''}`;
    }
    this.showToast(flying ? '🪽 Fly Mode ON (Space/Shift to elevate)' : '🪽 Fly Mode OFF');
  }

  public setGameTitle(title: string): void {
    this.gameTitle = title;
    if (this.titleEl) this.titleEl.textContent = title;
    const escTitle = this.container.querySelector('#rbx-esc-title');
    if (escTitle) escTitle.textContent = title;
  }

  public showToast(msg: string): void {
    const existing = document.getElementById('rbx-hud-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'rbx-hud-toast';
    toast.className = 'rbx-hud-toast';
    toast.textContent = msg;
    this.container.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  }

  private setupKeyboardShortcuts(): void {
    window.addEventListener('keydown', (e) => {
      // Don't capture when typing in chat
      if (document.activeElement === this.chatInput) return;

      if (e.code === 'Escape') {
        this.toggleEscMenu();
      }

      if (e.code === 'KeyT' || e.code === 'Slash') {
        e.preventDefault();
        this.chatInput?.focus();
      }

      // Tab toggles Obby / Building palette
      if (e.code === 'Tab') {
        e.preventDefault();
        this.toggleHotbarSet();
      }

      // F key toggles Fly Mode
      if (e.code === 'KeyF') {
        if (this.onToggleFlyMode) this.onToggleFlyMode();
      }

      // Number keys 1-9
      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= 9) {
        this.equipSlot(num - 1);
      }
    });
  }

  public equipSlot(index: number): void {
    const tools = this.currentTools;
    if (index < 0 || index >= tools.length) return;
    this.activeSlotIndex = index;

    const slots = this.container.querySelectorAll('.rbx-hotbar-slot');
    slots.forEach((s, idx) => {
      if (idx === index) s.classList.add('active');
      else s.classList.remove('active');
    });

    const equipped = tools[index];
    if (this.onToolEquipped) this.onToolEquipped(equipped);
  }

  public setPlayerCount(count: number): void {
    if (this.playerCountEl) {
      this.playerCountEl.textContent = `${count} Online`;
    }
  }

  public setTime(timeStr: string, isNight: boolean): void {
    if (this.timePillEl) {
      const icon = isNight ? '🌙' : '☀️';
      this.timePillEl.innerHTML = `<span>${icon}</span><span>${timeStr}</span>`;
    }
  }

  public addChatMessage(sender: string, text: string, color: string = '#fff'): void {
    if (!this.chatMessagesEl) return;
    const line = document.createElement('div');
    line.className = 'rbx-chat-line';
    line.innerHTML = `<span class="rbx-chat-sender" style="color: ${color};">[${sender}]</span> <span class="rbx-chat-text">${escapeHtml(text)}</span>`;
    this.chatMessagesEl.appendChild(line);
    this.chatMessagesEl.scrollTop = this.chatMessagesEl.scrollHeight;
  }

  public toggleEscMenu(force?: boolean): void {
    if (!this.escMenu) return;
    const show = force !== undefined ? force : this.escMenu.style.display === 'none';
    this.escMenu.style.display = show ? 'flex' : 'none';
  }

  public destroy(): void {
    this.container.remove();
  }
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
