import { Experience, MarketplaceItem, AvatarCustomization, PlayerData } from './types';
import { AvatarEditor3D, DEFAULT_AVATAR, ROBLOX_PALETTE } from './AvatarEditor3D';
import { GameEngine3D } from './GameEngine3D';
import { ShopItemRenderer } from './ShopItemRenderer';
import { CoinPackInfo, getCoinPacks } from '../services/StripeConfig';
import { StripeService } from '../services/StripeService';
import { ProfileManager } from '../profile/ProfileManager';
import { MapData } from './MapTypes';
import { MapManager } from './MapManager';
import '../services/stripe.css';

export type CoinPack = CoinPackInfo;
export const COIN_PACKS: CoinPack[] = getCoinPacks();

export class RobloxPortal {
  private container: HTMLElement;
  private currentTab: 'discover' | 'avatar' | 'marketplace' | 'create' = 'discover';
  private playerData: PlayerData;
  private avatarEditor: AvatarEditor3D | null = null;
  private active3DGame: GameEngine3D | null = null;
  private selectedBodyPart: keyof AvatarCustomization = 'torsoColor';

  private experiences: Experience[] = [
    {
      id: 'genesis-3d',
      title: 'Genesis: New Dawn (3D World)',
      tagline: 'Flagship 3D Autonomous AI Civilization',
      description: 'Explore the 3D living primeval forest. Guide pioneers Adam and Eve, chop timber, gather stone, construct dwellings around the campfire, and challenge the Ancient Monolith Trial.',
      thumbnail: '/Genesis-New-Dawn/background.jpg',
      category: '3D Simulation'
    },
    {
      id: 'abyss',
      title: 'Abyss: Deep Evolution',
      tagline: 'Deep-Sea Ecosystem Simulation',
      description: 'An autonomous deep-sea trench where bioluminescent aquatic creatures hunt, reproduce, and evolve through genetic mutation and natural selection.',
      thumbnail: '/Genesis-New-Dawn/abyss-banner.jpg',
      category: 'Evolution Simulation',
      url: '/Genesis-New-Dawn/abyss.html'
    },
    {
      id: 'merchant',
      title: 'The Number Merchant',
      tagline: 'Living Village Trade & Economy',
      description: 'Run your merchant shop in a living oasis town. Balance fluctuating market supply and demand, trade potions and scrolls, and serve travelers.',
      thumbnail: '/Genesis-New-Dawn/merchant-banner.jpg',
      category: 'Economy Simulation',
      url: '/Genesis-New-Dawn/merchant.html'
    },
    {
      id: 'lexicon',
      title: 'Lexicon Island',
      tagline: 'Where Words Sculpt Reality',
      description: 'An AI linguistic world simulation where sentences directly reshape terrain, rivers, weather, and flora across a living procedural archipelago.',
      thumbnail: '/Genesis-New-Dawn/lexicon_island_bg.jpg',
      category: 'Language AI',
      url: '/Genesis-New-Dawn/lexicon.html'
    },
    {
      id: 'genesis-2d',
      title: 'Genesis: Classic 2D Simulation',
      tagline: 'Original Procedural Sandbox Engine',
      description: 'The real-time top-down civilization engine where founders Adam & Eve discover fire, domesticate wildlife, forge bronze tools, and build dynasties.',
      thumbnail: '/Genesis-New-Dawn/gameplay-preview.jpg',
      category: 'Civilization AI',
      url: 'classic-2d'
    },
    {
      id: 'studio',
      title: 'Genesis Studios Hub',
      tagline: 'Creator & Developer Portal',
      description: 'The official platform headquarters. Inspect architecture, explore autonomous world contracts, and access creator tools.',
      thumbnail: '/Genesis-New-Dawn/genesis-logo.jpg',
      category: 'Developer Hub',
      url: '/Genesis-New-Dawn/studio.html'
    }
  ];

  private marketplaceItems: MarketplaceItem[] = [
    {
      id: 'synthetic_skin',
      name: 'Synthetic Pioneer Chassis',
      type: 'shirt',
      price: 350,
      description: 'Advanced biomechanical plating with glowing arc reactor designed for frontier exploration.',
      icon: '🦾'
    },
    {
      id: 'supporter_halo',
      name: 'Celestial Watcher Halo',
      type: 'hat',
      price: 400,
      description: 'Radiant golden halo forged from pure solar starlight.',
      icon: '😇'
    },
    {
      id: 'starweaver_robes',
      name: 'Starweaver Silk Robes',
      type: 'shirt',
      price: 300,
      description: 'Cosmic silk woven with stellar constellations and golden hem trim.',
      icon: '✨'
    },
    {
      id: 'cyberpunk_visor',
      name: 'Neural Cybernetic Visor',
      type: 'hat',
      price: 220,
      description: 'Head-mounted neon digital HUD projecting real-time spatial diagnostics.',
      icon: '🥽'
    },
    {
      id: 'eagle_eye',
      name: 'Eagle Eye Recon Goggles',
      type: 'hat',
      price: 260,
      description: 'Precision brass scouting goggles with dual amber glowing lenses.',
      icon: '🔍'
    },
    {
      id: 'viking_helmet',
      name: 'Pioneer Horned Helm',
      type: 'hat',
      price: 280,
      description: 'Forged northern steel helmet with dual ceremonial ivory horns.',
      icon: '🪖'
    },
    {
      id: 'classic_fedora',
      name: 'Noir Pioneer Fedora',
      type: 'hat',
      price: 190,
      description: 'Classic dark wool felt fedora trimmed with rich amber ribbon.',
      icon: '🎩'
    },
    {
      id: 'sword',
      name: 'Genesis Skyblade',
      type: 'gear',
      price: 320,
      description: 'Crystalline blade honed from fallen meteoric shards.',
      icon: '⚔️'
    },
    {
      id: 'speed_coil',
      name: 'Cobalt Speed Coil',
      type: 'gear',
      price: 200,
      description: 'Supercharged gravitational coil granting enhanced sprint speed.',
      icon: '⚡'
    },
    {
      id: 'wings',
      name: 'Aetheric Wings',
      type: 'gear',
      price: 550,
      description: 'Holographic cybernetic wings that flare with azure energy.',
      icon: '🪽'
    },
    {
      id: 'pickaxe',
      name: 'Genesis Azure Pickaxe',
      type: 'gear',
      price: 240,
      description: 'Supercharged gemstone mining pickaxe with tempered titanium tips.',
      icon: '⛏️'
    },
    {
      id: 'axe',
      name: 'Woodcutter Hatchet',
      type: 'gear',
      price: 180,
      description: 'Polished iron forestry axe balanced for felling ancient timber.',
      icon: '🪓'
    }
  ];

  constructor(containerId: string = 'app') {
    const el = document.getElementById(containerId);
    if (!el) throw new Error(`Mount element #${containerId} not found`);
    this.container = el;
    document.body.classList.add('rbx-mode');

    this.playerData = this.loadPlayerData();

    // Initialize Stripe Service to capture payment redirects and handle balance updates
    const stripeService = StripeService.getInstance();
    stripeService.init();
    stripeService.onCoinsAdded((_amount, newTotal) => {
      this.playerData.coins = newTotal;
      this.savePlayerData();
      this.updateCoinDisplay();
      if (this.currentTab === 'marketplace') {
        const viewContainer = this.container.querySelector('#rbx-view-container') as HTMLElement;
        if (viewContainer) this.renderMarketplaceView(viewContainer);
      }
    });

    this.render();
  }

  private loadPlayerData(): PlayerData {
    let custom: AvatarCustomization = { ...DEFAULT_AVATAR };
    let coins = 0;
    let inventory: string[] = [];

    try {
      const savedCustom = localStorage.getItem('rbx_avatar_customization');
      if (savedCustom) custom = JSON.parse(savedCustom);
      const savedCoins = localStorage.getItem('rbx_player_coins');
      if (savedCoins !== null) coins = parseInt(savedCoins, 10) || 0;
      const savedInv = localStorage.getItem('rbx_player_inventory');
      if (savedInv) inventory = JSON.parse(savedInv);
    } catch (e) {}

    const profile = ProfileManager.getInstance().getProfile();
    if (profile && typeof profile.coins === 'number' && profile.coins > coins) {
      coins = profile.coins;
    }

    return {
      username: 'Pioneer',
      coins,
      avatar: custom,
      inventory
    };
  }

  private savePlayerData(): void {
    localStorage.setItem('rbx_avatar_customization', JSON.stringify(this.playerData.avatar));
    localStorage.setItem('rbx_player_coins', this.playerData.coins.toString());
    localStorage.setItem('rbx_player_inventory', JSON.stringify(this.playerData.inventory));
  }

  public addCoins(amount: number): void {
    this.playerData.coins += amount;
    this.savePlayerData();
    this.updateCoinDisplay();
  }

  public updateCoinDisplay(): void {
    const el = this.container.querySelector('#rbx-top-coin-count');
    if (el) el.textContent = this.playerData.coins.toLocaleString();
    const shopBalance = this.container.querySelector('#rbx-shop-balance-count');
    if (shopBalance) shopBalance.textContent = this.playerData.coins.toLocaleString();
  }

  public showToast(msg: string): void {
    const existing = document.getElementById('rbx-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'rbx-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0f172a;
      border: 1px solid #38bdf8;
      box-shadow: 0 10px 25px rgba(0,0,0,0.6), 0 0 15px rgba(56,189,248,0.3);
      color: #fff;
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 600;
      z-index: 999999;
      display: flex;
      align-items: center;
      gap: 10px;
    `;
    toast.innerHTML = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }

  public openBuyCoinsModal(neededAmount?: number): void {
    const existing = document.getElementById('rbx-coin-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'rbx-coin-modal';
    overlay.className = 'rbx-coin-modal-overlay';
    overlay.innerHTML = `
      <div class="rbx-coin-modal-box">
        <button class="rbx-coin-modal-close" id="rbx-close-modal-btn">✕</button>
        <div style="text-align: center; margin-bottom: 20px;">
          <div style="font-size: 40px; margin-bottom: 6px;">🪙</div>
          <h2 style="font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 800; color: #fff; margin: 0 0 6px;">
            Buy Genesis Coins
          </h2>
          <p style="color: var(--rbx-text-sub); font-size: 13px; margin: 0;">
            ${neededAmount ? `You need <strong>🪙 ${neededAmount.toLocaleString()} more coins</strong> to purchase this item.` : 'Purchase Genesis Coins to unlock exclusive 3D gear, hats, and cybernetic chassis.'}
          </p>
          <div style="margin-top: 10px; display: inline-block; background: rgba(0,0,0,0.5); padding: 6px 14px; border-radius: 20px; border: 1px solid rgba(250,204,21,0.3); color: #fde047; font-size: 13px;">
            Current Balance: <strong>🪙 ${this.playerData.coins.toLocaleString()}</strong>
          </div>
        </div>

        <div class="rbx-coin-packs-row">
          ${getCoinPacks().map(pack => `
            <div class="rbx-coin-pack-card" data-pack-id="${pack.id}">
              ${pack.bonusText ? `<span class="rbx-pack-bonus">${pack.bonusText}</span>` : ''}
              <div class="rbx-pack-icon">${pack.icon}</div>
              <div class="rbx-pack-coins">🪙 ${pack.coins.toLocaleString()}</div>
              <div class="rbx-pack-name">${pack.name}</div>
              <button class="rbx-btn-buy-coins" data-pack-id="${pack.id}" data-pack-coins="${pack.coins}" data-pack-name="${pack.name}">
                Pay with Stripe (${pack.priceUsd})
              </button>
            </div>
          `).join('')}
        </div>

        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 11px; color: var(--rbx-text-sub);">
          <span>🔒 Secured by <strong>Stripe</strong></span>
          <span>•</span>
          <span>Apple Pay & Google Pay Supported</span>
          <span>•</span>
          <span>Instant Digital Delivery</span>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('#rbx-close-modal-btn')?.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    overlay.querySelectorAll('.rbx-btn-buy-coins').forEach(btn => {
      btn.addEventListener('click', () => {
        const packId = btn.getAttribute('data-pack-id');
        const packs = getCoinPacks();
        const pack = packs.find(p => p.id === packId);
        if (pack) {
          overlay.remove();
          StripeService.getInstance().startCheckout(pack);
        }
      });
    });
  }

  public render(): void {
    this.container.innerHTML = `
      <!-- TOP NAVIGATION BAR -->
      <nav class="rbx-topbar">
        <div class="rbx-topbar-left">
          <button id="rbx-sidebar-toggle" class="rbx-hamburger" title="Toggle Sidebar">
            ☰
          </button>
          <div class="rbx-logo-brand" id="rbx-nav-logo">
            <div class="rbx-tilted-cube">✦</div>
            <span class="rbx-brand-title">Genesis<span>Worlds</span></span>
          </div>
          <div class="rbx-nav-tabs">
            <button class="rbx-nav-btn ${this.currentTab === 'discover' ? 'active' : ''}" data-tab="discover">
              🌌 Worlds
            </button>
            <button class="rbx-nav-btn ${this.currentTab === 'create' ? 'active' : ''}" data-tab="create">
              🛠️ Studio & Obbies
            </button>
            <button class="rbx-nav-btn ${this.currentTab === 'avatar' ? 'active' : ''}" data-tab="avatar">
              👤 Avatar Customizer
            </button>
            <button class="rbx-nav-btn ${this.currentTab === 'marketplace' ? 'active' : ''}" data-tab="marketplace">
              🏛️ Shop
            </button>
          </div>
        </div>

        <div class="rbx-search-box">
          <span class="rbx-search-icon">🔍</span>
          <input type="text" id="rbx-global-search" class="rbx-search-input" aria-label="Search worlds" />
        </div>

        <div class="rbx-topbar-right">
          <button class="rbx-coin-pill" id="rbx-top-coin-btn" title="Genesis Coins - Click to buy more">
            <span class="rbx-coin-icon">🪙</span>
            <span id="rbx-top-coin-count">${this.playerData.coins.toLocaleString()}</span>
            <span style="color: #22c55e; font-weight: 900; margin-left: 2px;">+</span>
          </button>
          <div class="rbx-avatar-header-badge" id="rbx-profile-header-btn">
            <div class="rbx-mini-avatar-head" style="background-color: ${this.playerData.avatar.headColor};">
              ✦
            </div>
            <span class="rbx-header-username">${this.playerData.username}</span>
          </div>
        </div>
      </nav>

      <!-- APP LAYOUT (SIDEBAR + MAIN CONTENT) -->
      <div class="rbx-app-layout">
        <!-- SIDEBAR -->
        <aside class="rbx-sidebar" id="rbx-sidebar">
          <button class="rbx-sidebar-btn ${this.currentTab === 'discover' ? 'active' : ''}" data-tab="discover">
            <span class="rbx-sidebar-icon">🌌</span>
            <span>All Worlds</span>
          </button>
          <button class="rbx-sidebar-btn ${this.currentTab === 'create' ? 'active' : ''}" data-tab="create">
            <span class="rbx-sidebar-icon">🛠️</span>
            <span>Studio & Obbies</span>
          </button>
          <button class="rbx-sidebar-btn ${this.currentTab === 'avatar' ? 'active' : ''}" data-tab="avatar">
            <span class="rbx-sidebar-icon">👤</span>
            <span>Avatar</span>
          </button>
          <button class="rbx-sidebar-btn ${this.currentTab === 'marketplace' ? 'active' : ''}" data-tab="marketplace">
            <span class="rbx-sidebar-icon">🏛️</span>
            <span>Shop</span>
          </button>

          <div class="rbx-sidebar-divider"></div>

          <button class="rbx-sidebar-btn" onclick="window.location.href='/Genesis-New-Dawn/abyss.html'">
            <span class="rbx-sidebar-icon">🌊</span>
            <span>Abyss</span>
          </button>
          <button class="rbx-sidebar-btn" onclick="window.location.href='/Genesis-New-Dawn/merchant.html'">
            <span class="rbx-sidebar-icon">🪙</span>
            <span>Merchant</span>
          </button>
          <button class="rbx-sidebar-btn" onclick="window.location.href='/Genesis-New-Dawn/lexicon.html'">
            <span class="rbx-sidebar-icon">🏝️</span>
            <span>Lexicon</span>
          </button>
          <button class="rbx-sidebar-btn" onclick="window.location.href='/Genesis-New-Dawn/studio.html'">
            <span class="rbx-sidebar-icon">🛠️</span>
            <span>Studio</span>
          </button>
        </aside>

        <!-- MAIN VIEW CONTAINER -->
        <main class="rbx-main-content" id="rbx-view-container">
          <!-- Populated dynamically based on currentTab -->
        </main>
      </div>

      <!-- IN-GAME 3D CONTAINER -->
      <div id="rbx-game-container"></div>
    `;

    this.bindGlobalEvents();
    this.renderCurrentView();
  }

  private bindGlobalEvents(): void {
    // Nav tabs
    this.container.querySelectorAll('[data-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab') as any;
        if (tab) this.switchTab(tab);
      });
    });

    // Sidebar toggle
    const sidebar = this.container.querySelector('#rbx-sidebar');
    this.container.querySelector('#rbx-sidebar-toggle')?.addEventListener('click', () => {
      sidebar?.classList.toggle('collapsed');
    });

    // Logo click -> Home
    this.container.querySelector('#rbx-nav-logo')?.addEventListener('click', () => {
      this.switchTab('discover');
    });

    // Search filter
    const searchInput = this.container.querySelector('#rbx-global-search') as HTMLInputElement;
    searchInput?.addEventListener('input', () => {
      const term = searchInput.value.toLowerCase().trim();
      const cards = this.container.querySelectorAll('.rbx-game-card') as NodeListOf<HTMLElement>;
      cards.forEach((card) => {
        const title = card.querySelector('.rbx-card-title')?.textContent?.toLowerCase() || '';
        const desc = card.querySelector('.rbx-card-desc')?.textContent?.toLowerCase() || '';
        if (title.includes(term) || desc.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });

    // Topbar Coin button -> Buy Coins Modal
    this.container.querySelector('#rbx-top-coin-btn')?.addEventListener('click', () => {
      this.openBuyCoinsModal();
    });
  }

  public switchTab(tab: 'discover' | 'avatar' | 'marketplace' | 'create'): void {
    if (this.avatarEditor) {
      this.avatarEditor.destroy();
      this.avatarEditor = null;
    }

    this.currentTab = tab;

    // Update active nav buttons
    this.container.querySelectorAll('[data-tab]').forEach((btn) => {
      if (btn.getAttribute('data-tab') === tab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.renderCurrentView();
  }

  private renderCurrentView(): void {
    const viewContainer = this.container.querySelector('#rbx-view-container') as HTMLElement;
    if (!viewContainer) return;

    if (this.currentTab === 'discover') {
      this.renderDiscoverView(viewContainer);
    } else if (this.currentTab === 'create') {
      this.renderCommunityStudioView(viewContainer);
    } else if (this.currentTab === 'avatar') {
      this.renderAvatarEditorView(viewContainer);
    } else if (this.currentTab === 'marketplace') {
      this.renderMarketplaceView(viewContainer);
    }
  }

  /* ==========================================================================
     VIEW: DISCOVER / WORLDS DASHBOARD (Direct launch, NO placeholder stats)
     ========================================================================== */
  private renderDiscoverView(container: HTMLElement): void {
    container.innerHTML = `
      <!-- HERO BANNER -->
      <div class="rbx-welcome-banner">
        <div class="rbx-welcome-left">
          <div class="rbx-avatar-banner-thumb" style="background: ${this.playerData.avatar.headColor};">
            ✦
          </div>
          <div class="rbx-welcome-text">
            <h1>Genesis Worlds</h1>
            <p>Step directly into autonomous simulations across primeval wilderness, deep ocean trenches, and living trading economies.</p>
          </div>
        </div>
        <button class="rbx-btn-play-massive" id="rbx-hero-launch-btn">
          <span class="rbx-play-icon">▶</span>
          <span>Play Genesis 3D</span>
        </button>
      </div>

      <!-- WORLDS GRID (Direct play on click) -->
      <div class="rbx-section-header">
        <h2 class="rbx-section-title">Ecosystem Worlds</h2>
      </div>

      <div class="rbx-experiences-grid">
        ${this.experiences
          .map(
            (exp) => `
          <div class="rbx-game-card" data-exp-id="${exp.id}">
            <div class="rbx-card-thumb-wrap">
              <img src="${exp.thumbnail}" alt="${exp.title}" />
              <span class="rbx-badge-featured">${exp.category}</span>
            </div>
            <div class="rbx-card-body">
              <h3 class="rbx-card-title">${exp.title}</h3>
              <p class="rbx-card-tagline">${exp.tagline}</p>
              <p class="rbx-card-desc">${exp.description}</p>
              <button class="rbx-card-play-btn" data-exp-id="${exp.id}">
                ▶ Play World
              </button>
            </div>
          </div>
        `
          )
          .join('')}
      </div>

      <!-- FEATURED CREATOR EXPERIENCES & SURVIVAL ARENAS -->
      <div class="rbx-section-header" style="margin-top: 36px;">
        <div>
          <h2 class="rbx-section-title">🔥 Featured Studio Games & Survival Arenas</h2>
          <p style="color: var(--rbx-text-sub); font-size: 13px; margin: 4px 0 0 0;">
            Created exclusively with our new Genesis Studio: fight the undead apocalypse, jump parkour obbies, or remix in Studio!
          </p>
        </div>
      </div>

      <div class="rbx-experiences-grid">
        ${MapManager.getInstance().getAllMaps().slice(0, 3).map(m => {
          const isZombie = m.id === 'default_zombie_survival' || m.tags?.includes('Zombie');
          const bgGradient = isZombie
            ? 'linear-gradient(135deg, #450a0a, #1c1917)'
            : (m.gameMode === 'obby' ? 'linear-gradient(135deg, #1e1b4b, #0f172a)' : 'linear-gradient(135deg, #064e3b, #022c22)');
          const icon = isZombie ? '🧟 ☣️ ⚔️' : (m.gameMode === 'obby' ? '🏃 🔥' : '🏙️ ✨');
          const badgeColor = isZombie ? 'background: #dc2626; color: #fff;' : '';
          const entityCount = m.entities ? m.entities.length : 0;

          return `
          <div class="rbx-game-card">
            <div class="rbx-card-thumb-wrap" style="background: ${bgGradient}; display: flex; align-items: center; justify-content: center; font-size: 48px;">
              ${icon}
              <span class="rbx-badge-featured" style="${badgeColor}">${isZombie ? 'SURVIVAL APOCALYPSE' : m.gameMode.toUpperCase()}</span>
            </div>
            <div class="rbx-card-body">
              <h3 class="rbx-card-title">${m.title}</h3>
              <p class="rbx-card-tagline">By ${m.author} • ${m.blocks.length} Blocks ${entityCount > 0 ? `• 👥 ${entityCount} Scripted NPCs/Items` : ''}</p>
              <p class="rbx-card-desc">${m.description}</p>
              <div style="display: flex; gap: 8px; margin-top: auto;">
                <button class="rbx-card-play-btn rbx-btn-play-map" data-map-id="${m.id}" style="flex: 1.4; ${isZombie ? 'background: linear-gradient(135deg, #dc2626, #991b1b);' : ''}">
                  ▶ ${isZombie ? 'Play Survival' : (m.gameMode === 'obby' ? 'Play Obby' : 'Play World')}
                </button>
                <button class="rbx-card-play-btn rbx-btn-edit-map" data-map-id="${m.id}" style="flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff;">
                  🛠️ Studio
                </button>
              </div>
            </div>
          </div>
        `}).join('')}
      </div>
    `;

    // Hero quick launch
    container.querySelector('#rbx-hero-launch-btn')?.addEventListener('click', () => {
      this.launchExperience(this.experiences[0]);
    });

    // Card and button clicks launch immediately
    container.querySelectorAll('.rbx-game-card[data-exp-id], .rbx-card-play-btn[data-exp-id]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = el.getAttribute('data-exp-id');
        const exp = this.experiences.find((item) => item.id === id);
        if (exp) this.launchExperience(exp);
      });
    });

    // Community / Studio map play & edit buttons
    container.querySelectorAll('.rbx-btn-play-map').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const mapId = btn.getAttribute('data-map-id');
        const map = MapManager.getInstance().getMapById(mapId || '');
        if (map) this.launchCustomMap(map, false);
      });
    });

    container.querySelectorAll('.rbx-btn-edit-map').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const mapId = btn.getAttribute('data-map-id');
        const map = MapManager.getInstance().getMapById(mapId || '');
        if (map) this.launchCustomMap(map, true);
      });
    });
  }

  /* ==========================================================================
     VIEW: AVATAR CUSTOMIZER (Real 3D interactive avatar)
     ========================================================================== */
  private renderAvatarEditorView(container: HTMLElement): void {
    container.innerHTML = `
      <div class="rbx-avatar-editor-container">
        <!-- 3D VIEWPORT -->
        <div class="rbx-avatar-viewport-panel">
          <h3>3D Avatar Preview</h3>
          <canvas id="rbx-avatar-viewport-canvas" class="rbx-avatar-3d-canvas"></canvas>
          <div class="rbx-viewport-hint">Drag to rotate 360°</div>
        </div>

        <!-- CUSTOMIZATION CONTROLS -->
        <div class="rbx-avatar-customizer-panel">
          <div>
            <h2 style="font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 800;">Avatar Customizer</h2>
            <p style="color: var(--rbx-text-sub); font-size: 13px; margin-top: 4px;">Customize body colors, headgear, and held gear for your 3D playable character.</p>
          </div>

          <!-- Body part tabs -->
          <div>
            <h4 style="font-size: 14px; margin-bottom: 8px; color: #fff;">Select Body Part:</h4>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn active" data-part="torsoColor">Torso</button>
              <button class="rbx-bodypart-btn" data-part="headColor">Head</button>
              <button class="rbx-bodypart-btn" data-part="leftArmColor">Left Arm</button>
              <button class="rbx-bodypart-btn" data-part="rightArmColor">Right Arm</button>
              <button class="rbx-bodypart-btn" data-part="leftLegColor">Left Leg</button>
              <button class="rbx-bodypart-btn" data-part="rightLegColor">Right Leg</button>
            </div>
          </div>

          <!-- Color Swatches -->
          <div>
            <h4 style="font-size: 14px; margin-bottom: 8px; color: #fff;">Color Palette:</h4>
            <div class="rbx-color-swatches-grid">
              ${ROBLOX_PALETTE.map(
                (c) => `<div class="rbx-color-swatch" style="background-color: ${c};" data-color="${c}"></div>`
              ).join('')}
            </div>
          </div>

          <!-- Chassis / Apparel (Owned Only) -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 14px; color: #fff; margin: 0;">Chassis & Robes:</h4>
              <button class="rbx-shop-shortcut-link" data-tab-jump="marketplace">+ Get Outfits in Shop</button>
            </div>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn ${(!this.playerData.avatar.equippedShirt || this.playerData.avatar.equippedShirt === 'none') ? 'active' : ''}" data-shirt="none">Default Tunic</button>
              ${this.marketplaceItems
                .filter((i) => i.type === 'shirt' && this.playerData.inventory.includes(i.id))
                .map(
                  (i) => `
                <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedShirt === i.id ? 'active' : ''}" data-shirt="${i.id}">
                  ${i.name} ${i.icon}
                </button>
              `
                )
                .join('')}
            </div>
          </div>

          <!-- Headgear / Visors (Owned Only) -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 14px; color: #fff; margin: 0;">Headgear & Optics:</h4>
              <button class="rbx-shop-shortcut-link" data-tab-jump="marketplace">+ Get Hats in Shop</button>
            </div>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn ${(!this.playerData.avatar.equippedHat || this.playerData.avatar.equippedHat === 'none') ? 'active' : ''}" data-hat="none">None</button>
              ${this.marketplaceItems
                .filter((i) => i.type === 'hat' && this.playerData.inventory.includes(i.id))
                .map(
                  (i) => `
                <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedHat === i.id ? 'active' : ''}" data-hat="${i.id}">
                  ${i.name} ${i.icon}
                </button>
              `
                )
                .join('')}
            </div>
          </div>

          <!-- Face expression (Free) -->
          <div>
            <h4 style="font-size: 14px; margin-bottom: 8px; color: #fff;">Face Expression (Free):</h4>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedFace === 'smile' ? 'active' : ''}" data-face="smile">Classic Smile 🙂</button>
              <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedFace === 'chill' ? 'active' : ''}" data-face="chill">Chill Expression 😎</button>
              <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedFace === 'mischief' ? 'active' : ''}" data-face="mischief">Smirk 😏</button>
              <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedFace === 'epic_face' ? 'active' : ''}" data-face="epic_face">Open Smile 😃</button>
            </div>
          </div>

          <!-- Relic gear (Owned Only) -->
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <h4 style="font-size: 14px; color: #fff; margin: 0;">Held Gear & Relics:</h4>
              <button class="rbx-shop-shortcut-link" data-tab-jump="marketplace">+ Get Gear in Shop</button>
            </div>
            <div class="rbx-bodyparts-selector">
              <button class="rbx-bodypart-btn ${(!this.playerData.avatar.equippedGear || this.playerData.avatar.equippedGear === 'none') ? 'active' : ''}" data-gear="none">None</button>
              ${this.marketplaceItems
                .filter((i) => i.type === 'gear' && this.playerData.inventory.includes(i.id))
                .map(
                  (i) => `
                <button class="rbx-bodypart-btn ${this.playerData.avatar.equippedGear === i.id ? 'active' : ''}" data-gear="${i.id}">
                  ${i.name} ${i.icon}
                </button>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Initialize 3D Viewport
    const canvas = container.querySelector('#rbx-avatar-viewport-canvas') as HTMLCanvasElement;
    if (canvas) {
      this.avatarEditor = new AvatarEditor3D(canvas);
      setTimeout(() => this.avatarEditor?.resize(), 50);
    }

    // Body part buttons
    container.querySelectorAll('[data-part]').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('[data-part]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedBodyPart = btn.getAttribute('data-part') as any;
      });
    });

    // Color Swatches
    container.querySelectorAll('[data-color]').forEach((swatch) => {
      swatch.addEventListener('click', () => {
        const color = swatch.getAttribute('data-color');
        if (color && this.avatarEditor) {
          this.avatarEditor.updatePartColor(this.selectedBodyPart, color);
          (this.playerData.avatar as any)[this.selectedBodyPart] = color;
          this.savePlayerData();
        }
      });
    });

    // Quick shop jump buttons
    container.querySelectorAll('[data-tab-jump]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab-jump') as any;
        if (tab) this.switchTab(tab);
      });
    });

    // Shirt buttons (only owned items are rendered)
    container.querySelectorAll('[data-shirt]').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('[data-shirt]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const shirt = btn.getAttribute('data-shirt')!;
        this.playerData.avatar.equippedShirt = shirt;
        this.avatarEditor?.updateShirt(shirt);
        this.savePlayerData();
      });
    });

    // Hat buttons (only owned items are rendered)
    container.querySelectorAll('[data-hat]').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('[data-hat]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const hat = btn.getAttribute('data-hat')!;
        this.playerData.avatar.equippedHat = hat;
        this.avatarEditor?.updateHat(hat);
        this.savePlayerData();
      });
    });

    // Face buttons
    container.querySelectorAll('[data-face]').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('[data-face]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const face = btn.getAttribute('data-face')!;
        this.playerData.avatar.equippedFace = face;
        this.avatarEditor?.updateFace(face);
        this.savePlayerData();
      });
    });

    // Gear buttons (only owned items are rendered)
    container.querySelectorAll('[data-gear]').forEach((btn) => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('[data-gear]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const gear = btn.getAttribute('data-gear')!;
        this.playerData.avatar.equippedGear = gear;
        this.avatarEditor?.updateGear(gear);
        this.savePlayerData();
      });
    });
  }

  /* ==========================================================================
     VIEW: SHOP (Coin Purchasing & Authentic 3D Gear Store)
     ========================================================================== */
  private renderMarketplaceView(container: HTMLElement): void {
    container.innerHTML = `
      <!-- COIN TOP-UP BANNER -->
      <div class="rbx-coin-shop-banner">
        <div class="rbx-coin-shop-info">
          <div class="rbx-coin-shop-badge">🪙 Genesis Currency Store</div>
          <h3>Buy Genesis Coins</h3>
          <p>Purchase Genesis Coins to unlock exclusive 3D cybernetic chassis, celestial halos, wings, and legendary blades.</p>
          <div class="rbx-current-balance-tag">
            Your Wallet Balance: <strong>🪙 <span id="rbx-shop-balance-count">${this.playerData.coins.toLocaleString()}</span> Coins</strong>
          </div>
        </div>

        <div class="rbx-coin-packs-row">
          ${getCoinPacks().map(pack => `
            <div class="rbx-coin-pack-card" data-pack-id="${pack.id}">
              ${pack.bonusText ? `<span class="rbx-pack-bonus">${pack.bonusText}</span>` : ''}
              <div class="rbx-pack-icon">${pack.icon}</div>
              <div class="rbx-pack-coins">🪙 ${pack.coins.toLocaleString()}</div>
              <div class="rbx-pack-name">${pack.name}</div>
              <button class="rbx-btn-buy-coins" data-pack-id="${pack.id}" data-pack-coins="${pack.coins}" data-pack-name="${pack.name}">
                Pay with Stripe (${pack.priceUsd})
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- GEAR & OUTFITS STORE -->
      <div class="rbx-section-header">
        <div>
          <h2 class="rbx-section-title">Exclusive 3D Gear & Apparel</h2>
          <p style="color: var(--rbx-text-sub); font-size: 13px; margin-top: 4px;">
            Spend your Genesis Coins to unlock permanent 3D items for your character. Hover or move your mouse to inspect any model in 360°.
          </p>
        </div>
      </div>

      <div class="rbx-marketplace-grid">
        ${this.marketplaceItems
          .map((item) => {
            const isOwned = this.playerData.inventory.includes(item.id);
            const isEquipped =
              (item.type === 'shirt' && this.playerData.avatar.equippedShirt === item.id) ||
              (item.type === 'hat' && this.playerData.avatar.equippedHat === item.id) ||
              (item.type === 'gear' && this.playerData.avatar.equippedGear === item.id);

            const typeLabel =
              item.type === 'shirt' ? '🦾 Chassis / Robe' :
              item.type === 'hat' ? '👑 Headgear' : '⚔️ Relic Gear';

            return `
            <div class="rbx-market-card" data-item-id="${item.id}">
              <div class="rbx-market-icon-box">
                <canvas class="rbx-market-3d-canvas" data-item-id="${item.id}" width="200" height="180"></canvas>
                <span class="rbx-3d-badge">✦ 3D Model</span>
                <span class="rbx-type-badge">${typeLabel}</span>
              </div>
              <div class="rbx-market-title">${item.name}</div>
              <div class="rbx-market-desc">${item.description}</div>
              <div class="rbx-market-price-pill">🪙 ${item.price} Coins</div>
              ${isOwned ? `
                <button class="rbx-btn-buy owned" data-action="equip" data-item-id="${item.id}" data-item-type="${item.type}">
                  ${isEquipped ? '✓ Equipped' : 'Wear in Atelier'}
                </button>
              ` : `
                <button class="rbx-btn-buy" data-action="buy" data-item-id="${item.id}" data-item-price="${item.price}" data-item-name="${item.name}" data-item-type="${item.type}">
                  Buy for 🪙 ${item.price}
                </button>
              `}
            </div>
          `;
          })
          .join('')}
      </div>
    `;

    // Render exact 3D models into all shop item canvases
    ShopItemRenderer.renderAllIn(container);

    // Coin pack buttons in banner
    container.querySelectorAll('.rbx-btn-buy-coins').forEach((btn) => {
      btn.addEventListener('click', () => {
        const packId = btn.getAttribute('data-pack-id');
        const packs = getCoinPacks();
        const pack = packs.find(p => p.id === packId);
        if (pack) {
          StripeService.getInstance().startCheckout(pack);
        }
      });
    });

    // Item purchase / equip handling
    container.querySelectorAll('.rbx-btn-buy').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.getAttribute('data-action');
        const itemId = btn.getAttribute('data-item-id');
        const itemType = btn.getAttribute('data-item-type');
        const price = parseInt(btn.getAttribute('data-item-price') || '0', 10);
        const name = btn.getAttribute('data-item-name') || 'Item';

        if (action === 'equip' && itemId && itemType) {
          // Equip and go to Atelier
          if (itemType === 'shirt') this.playerData.avatar.equippedShirt = itemId;
          else if (itemType === 'hat') this.playerData.avatar.equippedHat = itemId;
          else if (itemType === 'gear') this.playerData.avatar.equippedGear = itemId;
          this.savePlayerData();
          this.switchTab('avatar');
          return;
        }

        if (action === 'buy' && itemId && itemType) {
          if (this.playerData.coins >= price) {
            // Deduct coins and add to inventory
            this.playerData.coins -= price;
            if (!this.playerData.inventory.includes(itemId)) {
              this.playerData.inventory.push(itemId);
            }
            // Auto equip on purchase
            if (itemType === 'shirt') this.playerData.avatar.equippedShirt = itemId;
            else if (itemType === 'hat') this.playerData.avatar.equippedHat = itemId;
            else if (itemType === 'gear') this.playerData.avatar.equippedGear = itemId;

            this.savePlayerData();
            this.updateCoinDisplay();
            this.showToast(`🎉 Purchased ${name}! It is now in your permanent wardrobe.`);
            this.renderMarketplaceView(container);
          } else {
            // Insufficient coins -> Open Buy Coins modal
            this.openBuyCoinsModal(price - this.playerData.coins);
          }
        }
      });
    });
  }

  /* ==========================================================================
     LAUNCH EXPERIENCE & CUSTOM MAPS
     ========================================================================== */
  public launchExperience(exp: Experience): void {
    if (exp.url) {
      if (exp.url === 'classic-2d') {
        const startFn = (window as any).startClassic2D;
        if (typeof startFn === 'function') {
          startFn();
        }
      } else {
        window.location.href = exp.url;
      }
      return;
    }

    // Launch 3D Engine
    const gameContainer = this.container.querySelector('#rbx-game-container') as HTMLElement;
    if (!gameContainer) return;

    if (this.active3DGame) {
      this.active3DGame.destroy();
      this.active3DGame = null;
    }
    gameContainer.innerHTML = '';
    gameContainer.classList.add('active');

    this.active3DGame = new GameEngine3D(
      gameContainer,
      this.playerData.avatar,
      this.playerData.username,
      () => {
        // Exit game callback
        if (this.active3DGame) {
          this.active3DGame.destroy();
          this.active3DGame = null;
        }
        gameContainer.innerHTML = '';
        gameContainer.classList.remove('active');
        this.renderCurrentView();
      }
    );
  }

  public launchCustomMap(map: MapData | null, startInStudio: boolean = false): void {
    const gameContainer = this.container.querySelector('#rbx-game-container') as HTMLElement;
    if (!gameContainer) return;

    if (this.active3DGame) {
      this.active3DGame.destroy();
      this.active3DGame = null;
    }
    gameContainer.innerHTML = '';
    gameContainer.classList.add('active');

    this.active3DGame = new GameEngine3D(
      gameContainer,
      this.playerData.avatar,
      this.playerData.username,
      () => {
        // Exit game callback
        if (this.active3DGame) {
          this.active3DGame.destroy();
          this.active3DGame = null;
        }
        gameContainer.innerHTML = '';
        gameContainer.classList.remove('active');
        this.renderCurrentView();
      },
      map,
      startInStudio
    );
  }

  /* ==========================================================================
     VIEW: STUDIO & COMMUNITY CREATIONS
     ========================================================================== */
  private renderCommunityStudioView(container: HTMLElement): void {
    const maps = MapManager.getInstance().getAllMaps();
    const userMaps = MapManager.getInstance().getUserMaps();

    container.innerHTML = `
      <!-- STUDIO HERO -->
      <div class="rbx-welcome-banner" style="background: linear-gradient(135deg, rgba(30, 27, 75, 0.95), rgba(15, 23, 42, 0.9));">
        <div class="rbx-welcome-left">
          <div class="rbx-avatar-banner-thumb" style="background: linear-gradient(135deg, #f59e0b, #d97706);">
            🛠️
          </div>
          <div class="rbx-welcome-text">
            <h1 style="font-family: 'Outfit', sans-serif;">Genesis Studio & Creator Hub</h1>
            <p>Design challenging parkour obbies, trap-filled lava towers, and social hangouts. Save locally or publish online for everyone to play!</p>
          </div>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="rbx-btn-play-massive" id="rbx-btn-launch-empty-studio" style="background: linear-gradient(135deg, #f59e0b, #d97706); color: #000;">
            <span>🛠️ Launch Studio (New)</span>
          </button>
        </div>
      </div>

      <!-- TEMPLATES & COMMUNITY GAMES -->
      <div class="rbx-section-header" style="margin-top: 30px;">
        <div>
          <h2 class="rbx-section-title">Community Obbies & Creations</h2>
          <p style="color: var(--rbx-text-sub); font-size: 13px; margin: 4px 0 0 0;">
            Play creations made by other players, or click "Edit in Studio" to remix and customize the obstacles!
          </p>
        </div>
      </div>

      <div class="rbx-experiences-grid">
        ${maps.map(m => {
          const isZombie = m.id === 'default_zombie_survival' || m.tags?.includes('Zombie');
          const bgGradient = isZombie
            ? 'linear-gradient(135deg, #450a0a, #1c1917)'
            : (m.gameMode === 'obby' ? 'linear-gradient(135deg, #1e1b4b, #0f172a)' : 'linear-gradient(135deg, #064e3b, #022c22)');
          const icon = isZombie ? '🧟 ☣️ ⚔️' : (m.gameMode === 'obby' ? '🏃 🔥' : '🏙️ ✨');
          const badgeColor = isZombie ? 'background: #dc2626; color: #fff;' : '';
          const entityCount = m.entities ? m.entities.length : 0;

          return `
          <div class="rbx-game-card">
            <div class="rbx-card-thumb-wrap" style="background: ${bgGradient}; display: flex; align-items: center; justify-content: center; font-size: 48px;">
              ${icon}
              <span class="rbx-badge-featured" style="${badgeColor}">${isZombie ? 'SURVIVAL APOCALYPSE' : m.gameMode.toUpperCase()}</span>
            </div>
            <div class="rbx-card-body">
              <h3 class="rbx-card-title">${m.title}</h3>
              <p class="rbx-card-tagline">By ${m.author} • ${m.blocks.length} Blocks ${entityCount > 0 ? `• 👥 ${entityCount} Scripted NPCs/Items` : ''}</p>
              <p class="rbx-card-desc">${m.description}</p>
              <div style="display: flex; gap: 8px; margin-top: auto;">
                <button class="rbx-card-play-btn rbx-btn-play-map" data-map-id="${m.id}" style="flex: 1.4; ${isZombie ? 'background: linear-gradient(135deg, #dc2626, #991b1b);' : ''}">
                  ▶ ${isZombie ? 'Play Survival' : (m.gameMode === 'obby' ? 'Play Obby' : 'Play World')}
                </button>
                <button class="rbx-card-play-btn rbx-btn-edit-map" data-map-id="${m.id}" style="flex: 1; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #fff;">
                  🛠️ Edit in Studio
                </button>
              </div>
            </div>
          </div>
        `}).join('')}
      </div>

      <!-- YOUR LOCAL DRAFTS -->
      <div class="rbx-section-header" style="margin-top: 40px;">
        <h2 class="rbx-section-title">Your Map Drafts (${userMaps.length})</h2>
      </div>

      ${userMaps.length === 0 ? `
        <div style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.15); border-radius: 16px; padding: 30px; text-align: center; color: var(--rbx-text-sub);">
          <div style="font-size: 32px; margin-bottom: 8px;">📐</div>
          <p style="margin: 0; font-size: 14px;">You haven't saved any maps yet. Click <strong>Launch Studio</strong> above to build and save your first custom world!</p>
        </div>
      ` : `
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${userMaps.map(um => `
            <div class="rbx-map-list-item" style="background: rgba(15,23,42,0.8);">
              <div>
                <strong style="color: #fff; font-size: 15px;">${um.title}</strong>
                <div style="font-size: 12px; color: var(--rbx-text-sub); margin-top: 4px;">
                  Mode: ${um.gameMode.toUpperCase()} • ${um.blocks.length} Blocks • Saved on ${new Date(um.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="rbx-hud-pill-btn green rbx-btn-play-map" data-map-id="${um.id}">▶ Play</button>
                <button class="rbx-hud-pill-btn rbx-btn-edit-map" data-map-id="${um.id}">🛠️ Edit</button>
                <button class="rbx-hud-pill-btn rbx-btn-export-map" data-map-id="${um.id}">⬇️ Export</button>
                <button class="rbx-hud-pill-btn rbx-btn-delete-map" data-map-id="${um.id}" style="color: #f87171; border-color: rgba(239,68,68,0.3);">🗑️</button>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    `;

    // Launch blank studio
    container.querySelector('#rbx-btn-launch-empty-studio')?.addEventListener('click', () => {
      this.launchCustomMap(null, true);
    });

    // Play map buttons
    container.querySelectorAll('.rbx-btn-play-map').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-map-id');
        const map = MapManager.getInstance().getMapById(id || '');
        if (map) this.launchCustomMap(map, false);
      });
    });

    // Edit map buttons
    container.querySelectorAll('.rbx-btn-edit-map').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-map-id');
        const map = MapManager.getInstance().getMapById(id || '');
        if (map) this.launchCustomMap(map, true);
      });
    });

    // Export map buttons
    container.querySelectorAll('.rbx-btn-export-map').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-map-id');
        const map = MapManager.getInstance().getMapById(id || '');
        if (map) MapManager.getInstance().exportMapFile(map);
      });
    });

    // Delete map buttons
    container.querySelectorAll('.rbx-btn-delete-map').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-map-id');
        if (id && confirm('Delete this map draft?')) {
          MapManager.getInstance().deleteUserMap(id);
          this.renderCommunityStudioView(container);
        }
      });
    });
  }

  public getActiveGame(): GameEngine3D | null {
    return this.active3DGame;
  }
}
