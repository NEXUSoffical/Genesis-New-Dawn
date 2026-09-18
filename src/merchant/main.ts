import { TownManager } from './economy/TownManager';
import { MathEngine } from './math/MathEngine';
import { ShopCounter } from './ui/ShopCounter';
import { TownView } from './ui/TownView';
import { DifficultyLevel, CustomerOrder } from './types';
import { sound } from './audio/MerchantAudio';

class NumberMerchantApp {
  private appEl: HTMLElement;
  private townManager: TownManager;
  private shopCounter!: ShopCounter;
  private townView!: TownView;
  private currentOrder: CustomerOrder | null = null;

  constructor() {
    const root = document.getElementById('app');
    if (!root) throw new Error('Root #app element not found');
    this.appEl = root;
    this.townManager = new TownManager();

    this.init();
  }

  private init(): void {
    this.renderShell();
    this.initViews();
    this.townManager.subscribe(() => this.updateHeaderStats());
    this.spawnNextCustomer();
  }

  private renderShell(): void {
    const state = this.townManager.getState();

    this.appEl.innerHTML = `
      <div class="merchant-app-container">
        <!-- Top Navigation & Stats Bar -->
        <header class="merchant-header">
          <div class="brand-area">
            <a href="studio.html" class="back-to-hub-btn" title="Return to Genesis Studios">← Studios</a>
            <span class="brand-logo">🪙</span>
            <div class="brand-text">
              <h1 class="brand-title">The Number Merchant</h1>
              <span class="brand-sub">AI Village Math Simulation</span>
            </div>
          </div>

          <!-- View Tabs -->
          <nav class="nav-tabs">
            <button class="nav-tab-btn active" id="tab-shop">
              🏪 Shop Counter
            </button>
            <button class="nav-tab-btn" id="tab-village">
              🏡 Living Village
            </button>
          </nav>

          <!-- Difficulty & Settings -->
          <div class="header-right">
            <!-- Difficulty Selector -->
            <div class="difficulty-dropdown-wrap">
              <label for="difficulty-select" class="diff-label">Skill Level:</label>
              <select id="difficulty-select" class="diff-select">
                <option value="apprentice" ${state.difficulty === 'apprentice' ? 'selected' : ''}>🌱 Apprentice (Ages 5-7)</option>
                <option value="journeyman" ${state.difficulty === 'journeyman' ? 'selected' : ''}>⚔️ Journeyman (Ages 8-10)</option>
                <option value="master" ${state.difficulty === 'master' ? 'selected' : ''}>🔮 Master (Ages 10-13+)</option>
              </select>
            </div>

            <!-- Stats Badges -->
            <div class="stats-pouch">
              <div class="stat-badge coin-badge" title="Your Coin Treasury">
                <span class="badge-icon">🪙</span>
                <span class="badge-num" id="header-coin-val">${state.coins}</span>
              </div>
              <div class="stat-badge prosperity-badge" title="Village Prosperity">
                <span class="badge-icon">🌟</span>
                <span class="badge-num" id="header-prosperity-val">${state.prosperity}</span>
              </div>
            </div>

            <!-- Audio toggle -->
            <button class="sound-toggle-btn" id="btn-sound-toggle" title="Toggle Sound Effects">
              🔊
            </button>
          </div>
        </header>

        <!-- Main Dynamic Stage -->
        <main class="merchant-main-view">
          <div id="shop-view-container" class="view-panel active"></div>
          <div id="village-view-container" class="view-panel"></div>
        </main>
      </div>
    `;

    this.attachHeaderListeners();
  }

  private initViews(): void {
    const shopContainer = document.getElementById('shop-view-container')!;
    const villageContainer = document.getElementById('village-view-container')!;

    this.shopCounter = new ShopCounter(
      shopContainer,
      (answer: number) => this.handleOrderSubmit(answer)
    );

    this.townView = new TownView(villageContainer, this.townManager);
  }

  private spawnNextCustomer(): void {
    const state = this.townManager.getState();
    const lastId = this.currentOrder?.customer.id;
    this.currentOrder = MathEngine.generateOrder(state.difficulty, lastId);
    this.shopCounter.setOrder(this.currentOrder);
  }

  private handleOrderSubmit(givenAnswer: number): void {
    if (!this.currentOrder) return;

    if (givenAnswer === this.currentOrder.targetValue) {
      // Correct!
      const earned = this.currentOrder.rewardCoins;
      const rep = this.currentOrder.reputationGain;
      this.townManager.addEarnings(earned, rep);

      this.shopCounter.showSuccessModal(this.currentOrder, earned, () => {
        this.spawnNextCustomer();
      });
    } else {
      // Friendly, encouraging feedback
      this.shopCounter.showRetryFeedback(givenAnswer, this.currentOrder.targetValue);
    }
  }

  private updateHeaderStats(): void {
    const state = this.townManager.getState();
    const coinEl = document.getElementById('header-coin-val');
    const prospEl = document.getElementById('header-prosperity-val');

    if (coinEl) coinEl.textContent = state.coins.toString();
    if (prospEl) prospEl.textContent = state.prosperity.toString();
  }

  private attachHeaderListeners(): void {
    const tabShop = document.getElementById('tab-shop');
    const tabVillage = document.getElementById('tab-village');
    const shopView = document.getElementById('shop-view-container');
    const villageView = document.getElementById('village-view-container');
    const diffSelect = document.getElementById('difficulty-select') as HTMLSelectElement | null;
    const soundBtn = document.getElementById('btn-sound-toggle');

    if (tabShop && tabVillage && shopView && villageView) {
      tabShop.addEventListener('click', () => {
        tabShop.classList.add('active');
        tabVillage.classList.remove('active');
        shopView.classList.add('active');
        villageView.classList.remove('active');
        sound.playCoinDrop(1.1);
      });

      tabVillage.addEventListener('click', () => {
        tabVillage.classList.add('active');
        tabShop.classList.remove('active');
        villageView.classList.add('active');
        shopView.classList.remove('active');
        this.townView.render();
        sound.playCoinDrop(0.9);
      });
    }

    if (diffSelect) {
      diffSelect.addEventListener('change', () => {
        const newDiff = diffSelect.value as DifficultyLevel;
        this.townManager.setDifficulty(newDiff);
        sound.playRegisterBell();
        this.spawnNextCustomer();
      });
    }

    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const muted = sound.toggleMute();
        soundBtn.textContent = muted ? '🔇' : '🔊';
        soundBtn.classList.toggle('muted', muted);
      });
    }
  }
}

// Start application when DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  new NumberMerchantApp();
});
