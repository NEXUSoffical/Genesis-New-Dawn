import { CustomerOrder, CoinRegisterState, VillagerMood } from '../types';
import { sound } from '../audio/MerchantAudio';

export class ShopCounter {
  private container: HTMLElement;
  private currentOrder: CustomerOrder | null = null;
  private coinTray: CoinRegisterState = { gold: 0, silver: 0, bronze: 0 };
  private activeFlaskUnits: number = 0;
  private currentMood: VillagerMood = 'happy';
  private hintIndex: number = 0;
  private onSubmitCallback: (answer: number) => void;

  constructor(
    container: HTMLElement,
    onSubmit: (answer: number) => void
  ) {
    this.container = container;
    this.onSubmitCallback = onSubmit;
  }

  public setOrder(order: CustomerOrder): void {
    this.currentOrder = order;
    this.coinTray = { gold: 0, silver: 0, bronze: 0 };
    this.activeFlaskUnits = 0;
    this.currentMood = 'happy';
    this.hintIndex = 0;
    this.render();
    sound.playVillagerVoice(order.customer.voicePitch);
  }

  public setMood(mood: VillagerMood): void {
    this.currentMood = mood;
    const moodEl = this.container.querySelector('.customer-mood-badge');
    if (moodEl) {
      moodEl.className = `customer-mood-badge mood-${mood}`;
      moodEl.textContent = this.getMoodLabel(mood);
    }
  }

  private getMoodLabel(mood: VillagerMood): string {
    switch (mood) {
      case 'ecstatic': return '✨ Delighted!';
      case 'happy': return '😊 Cheerful';
      case 'thinking': return '🤔 Thinking';
      case 'disappointed': return '🧐 Let’s recount';
      default: return '😊 Ready';
    }
  }

  private calculateTrayTotal(): number {
    return (this.coinTray.gold * 10) + (this.coinTray.silver * 5) + (this.coinTray.bronze * 1);
  }

  public render(): void {
    if (!this.currentOrder) {
      this.container.innerHTML = `<div class="counter-empty">Waiting for a customer to enter the shop...</div>`;
      return;
    }

    const o = this.currentOrder;
    const totalCoins = this.calculateTrayTotal();
    const isFraction = o.problemType === 'fraction';

    this.container.innerHTML = `
      <div class="shop-counter-layout">
        <!-- Customer Stage -->
        <div class="customer-stage-card">
          <div class="customer-avatar-box" style="--accent: ${o.customer.color}">
            <span class="customer-avatar-icon">${o.customer.avatar}</span>
            <div class="customer-mood-badge mood-${this.currentMood}">${this.getMoodLabel(this.currentMood)}</div>
          </div>
          
          <div class="customer-info">
            <h2 class="customer-name">${o.customer.name}</h2>
            <span class="customer-title">${o.customer.title}</span>
          </div>

          <div class="customer-dialogue-bubble">
            <p class="dialogue-text">"${o.storyDialogue}"</p>
          </div>

          <div class="order-items-preview">
            ${o.items.map(it => `
              <div class="item-pill">
                <span class="pill-icon">${it.item.icon}</span>
                <span class="pill-name">${it.count > 1 ? `${it.count}× ` : ''}${it.item.name}</span>
                <span class="pill-price">${it.item.basePrice * it.count} 🪙</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Working Counter Area -->
        <div class="counter-work-area">
          <div class="ledger-instruction-card">
            <div class="ledger-header">
              <span class="ledger-tag">📜 Merchant's Ledger</span>
              <button class="hint-toggle-btn" id="btn-hint" title="Get a friendly step-by-step hint">
                💡 Need a Hint? (${this.hintIndex}/${o.hintSteps.length})
              </button>
            </div>
            
            <p class="instruction-main">${o.instructionText}</p>

            <div id="hint-box" class="hint-scaffold-box ${this.hintIndex > 0 ? 'visible' : ''}">
              ${this.renderHintContent()}
            </div>
          </div>

          ${isFraction ? this.renderFractionFlask() : this.renderCoinRegister(totalCoins)}
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderHintContent(): string {
    if (!this.currentOrder || this.hintIndex === 0) {
      return `<p class="hint-placeholder">Tap 'Need a Hint?' if you want to break down the math step-by-step!</p>`;
    }

    const steps = this.currentOrder.hintSteps.slice(0, this.hintIndex);
    return `
      <ul class="hint-steps-list">
        ${steps.map((s, idx) => `
          <li class="hint-step-item">
            <span class="step-num">${idx + 1}</span>
            <span class="step-text">${s}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  private renderFractionFlask(): string {
    const o = this.currentOrder!;
    const f = o.fractionValue || { numerator: 3, denominator: 4 };
    const maxVolume = o.items[0]?.item.id === 'star_elixir' ? 16 : 12;

    return `
      <div class="fraction-apparatus-card">
        <div class="apparatus-header">
          <h3>🧪 Arcane Flask Measurement Tool</h3>
          <p>Pour the potion to match the customer's fraction recipe: <strong>${f.numerator}/${f.denominator}</strong></p>
        </div>

        <div class="flask-visual-container">
          <div class="flask-outer">
            <div class="flask-liquid" id="flask-fill" style="height: ${(this.activeFlaskUnits / maxVolume) * 100}%">
              <div class="liquid-bubbles"></div>
            </div>
            <div class="flask-marks">
              ${Array.from({ length: f.denominator }, (_, i) => {
                const markFrac = (f.denominator - i);
                const markUnits = (markFrac / f.denominator) * maxVolume;
                return `
                  <div class="flask-mark-line" style="bottom: ${(markFrac / f.denominator) * 100}%">
                    <span>${markFrac}/${f.denominator} (${markUnits} oz)</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="flask-controls">
            <div class="flask-readout">
              <span class="readout-label">Current Pour:</span>
              <span class="readout-value" id="flask-readout">${this.activeFlaskUnits} oz</span>
            </div>

            <div class="flask-buttons">
              <button class="flask-btn add-btn" id="btn-pour-oz">+1 Ounce</button>
              <button class="flask-btn add-btn" id="btn-pour-segment">+${maxVolume / f.denominator} Oz (1/${f.denominator})</button>
              <button class="flask-btn clear-btn" id="btn-empty-flask">Empty Flask</button>
            </div>
          </div>
        </div>

        <div class="counter-actions">
          <button class="ring-bell-btn" id="btn-submit-fraction">
            ✨ Bottle Potion & Serve Customer!
          </button>
        </div>
      </div>
    `;
  }

  private renderCoinRegister(totalCoins: number): string {
    return `
      <div class="coin-register-card">
        <div class="register-header">
          <div class="register-title">
            <span class="register-icon">🪙</span>
            <h3>Tactile Cash Drawer</h3>
          </div>
          <div class="tray-total-display">
            <span class="total-label">Tray Total:</span>
            <span class="total-number ${totalCoins > 0 ? 'active' : ''}">${totalCoins}</span>
            <span class="total-currency">Coins</span>
          </div>
        </div>

        <!-- Coin Dispenser Drawers -->
        <div class="coin-dispensers">
          <button class="coin-draw-btn gold-btn" id="btn-add-gold">
            <div class="coin-graphic coin-gold">10</div>
            <div class="coin-label-block">
              <span class="coin-name">Gold Coin</span>
              <span class="coin-val">+10 Coins</span>
            </div>
          </button>

          <button class="coin-draw-btn silver-btn" id="btn-add-silver">
            <div class="coin-graphic coin-silver">5</div>
            <div class="coin-label-block">
              <span class="coin-name">Silver Coin</span>
              <span class="coin-val">+5 Coins</span>
            </div>
          </button>

          <button class="coin-draw-btn bronze-btn" id="btn-add-bronze">
            <div class="coin-graphic coin-bronze">1</div>
            <div class="coin-label-block">
              <span class="coin-name">Bronze Coin</span>
              <span class="coin-val">+1 Coin</span>
            </div>
          </button>
        </div>

        <!-- Tactile Placement Tray -->
        <div class="counter-tray-box">
          <div class="tray-inner" id="tray-coins-container">
            ${this.renderTrayCoins()}
          </div>
        </div>

        <!-- Quick Manual Keypad (Optional for fast kids) -->
        <div class="counter-bottom-controls">
          <button class="clear-tray-btn" id="btn-clear-tray" ${totalCoins === 0 ? 'disabled' : ''}>
            🗑️ Clear Tray
          </button>

          <div class="direct-number-entry">
            <label for="num-input">Or Type:</label>
            <input type="number" id="num-input" class="direct-input" min="0" max="999" placeholder="?" value="${totalCoins > 0 ? totalCoins : ''}" />
          </div>

          <button class="ring-bell-btn" id="btn-ring-register">
            🛎️ Ring Register! (${totalCoins} 🪙)
          </button>
        </div>
      </div>
    `;
  }

  private renderTrayCoins(): string {
    const total = this.calculateTrayTotal();
    if (total === 0) {
      return `<span class="tray-empty-text">Tap the Gold, Silver, or Bronze coins above to place them in your payment tray!</span>`;
    }

    let html = '<div class="tray-tokens-wrap">';
    for (let i = 0; i < this.coinTray.gold; i++) {
      html += `<span class="tray-coin-token gold" title="Gold: 10 coins">10</span>`;
    }
    for (let i = 0; i < this.coinTray.silver; i++) {
      html += `<span class="tray-coin-token silver" title="Silver: 5 coins">5</span>`;
    }
    for (let i = 0; i < this.coinTray.bronze; i++) {
      html += `<span class="tray-coin-token bronze" title="Bronze: 1 coin">1</span>`;
    }
    html += '</div>';
    return html;
  }

  private attachEventListeners(): void {
    // Hint button
    const hintBtn = this.container.querySelector('#btn-hint');
    if (hintBtn && this.currentOrder) {
      hintBtn.addEventListener('click', () => {
        if (this.hintIndex < this.currentOrder!.hintSteps.length) {
          this.hintIndex++;
          sound.playPotionPour();
          const hintBox = this.container.querySelector('#hint-box');
          if (hintBox) {
            hintBox.className = 'hint-scaffold-box visible';
            hintBox.innerHTML = this.renderHintContent();
          }
          hintBtn.textContent = `💡 Need a Hint? (${this.hintIndex}/${this.currentOrder!.hintSteps.length})`;
        }
      });
    }

    // Coin buttons
    const btnGold = this.container.querySelector('#btn-add-gold');
    const btnSilver = this.container.querySelector('#btn-add-silver');
    const btnBronze = this.container.querySelector('#btn-add-bronze');
    const btnClear = this.container.querySelector('#btn-clear-tray');
    const btnRing = this.container.querySelector('#btn-ring-register');
    const numInput = this.container.querySelector('#num-input') as HTMLInputElement | null;

    if (btnGold) {
      btnGold.addEventListener('click', () => {
        this.coinTray.gold++;
        sound.playCoinDrop(0.85);
        this.updateTrayDisplay();
      });
    }

    if (btnSilver) {
      btnSilver.addEventListener('click', () => {
        this.coinTray.silver++;
        sound.playCoinDrop(1.0);
        this.updateTrayDisplay();
      });
    }

    if (btnBronze) {
      btnBronze.addEventListener('click', () => {
        this.coinTray.bronze++;
        sound.playCoinDrop(1.25);
        this.updateTrayDisplay();
      });
    }

    if (btnClear) {
      btnClear.addEventListener('click', () => {
        this.coinTray = { gold: 0, silver: 0, bronze: 0 };
        sound.playCoinRemove();
        this.updateTrayDisplay();
      });
    }

    if (numInput) {
      numInput.addEventListener('input', () => {
        const val = parseInt(numInput.value, 10);
        if (!isNaN(val) && val >= 0) {
          // Convert number directly into coin tray representation (greedy breakdown)
          const gold = Math.floor(val / 10);
          const rem = val % 10;
          const silver = Math.floor(rem / 5);
          const bronze = rem % 5;
          this.coinTray = { gold, silver, bronze };
          this.updateTrayDisplay(false);
        }
      });
    }

    if (btnRing) {
      btnRing.addEventListener('click', () => {
        const total = this.calculateTrayTotal();
        this.onSubmitCallback(total);
      });
    }

    // Fraction buttons
    const btnPourOz = this.container.querySelector('#btn-pour-oz');
    const btnPourSeg = this.container.querySelector('#btn-pour-segment');
    const btnEmptyFlask = this.container.querySelector('#btn-empty-flask');
    const btnSubmitFrac = this.container.querySelector('#btn-submit-fraction');

    if (btnPourOz) {
      btnPourOz.addEventListener('click', () => {
        sound.playPotionPour();
        this.activeFlaskUnits += 1;
        this.updateFlaskDisplay();
      });
    }

    if (btnPourSeg && this.currentOrder) {
      const f = this.currentOrder.fractionValue || { numerator: 1, denominator: 4 };
      const maxVolume = 16;
      const segUnits = Math.round(maxVolume / f.denominator);
      btnPourSeg.addEventListener('click', () => {
        sound.playPotionPour();
        this.activeFlaskUnits += segUnits;
        this.updateFlaskDisplay();
      });
    }

    if (btnEmptyFlask) {
      btnEmptyFlask.addEventListener('click', () => {
        sound.playCoinRemove();
        this.activeFlaskUnits = 0;
        this.updateFlaskDisplay();
      });
    }

    if (btnSubmitFrac) {
      btnSubmitFrac.addEventListener('click', () => {
        this.onSubmitCallback(this.activeFlaskUnits);
      });
    }
  }

  private updateTrayDisplay(updateInput: boolean = true): void {
    const total = this.calculateTrayTotal();
    const numEl = this.container.querySelector('.total-number');
    const btnRing = this.container.querySelector('#btn-ring-register');
    const btnClear = this.container.querySelector('#btn-clear-tray') as HTMLButtonElement | null;
    const trayContainer = this.container.querySelector('#tray-coins-container');
    const inputEl = this.container.querySelector('#num-input') as HTMLInputElement | null;

    if (numEl) {
      numEl.textContent = total.toString();
      numEl.className = `total-number ${total > 0 ? 'active' : ''}`;
    }
    if (btnRing) {
      btnRing.textContent = `🛎️ Ring Register! (${total} 🪙)`;
    }
    if (btnClear) {
      btnClear.disabled = total === 0;
    }
    if (trayContainer) {
      trayContainer.innerHTML = this.renderTrayCoins();
    }
    if (updateInput && inputEl) {
      inputEl.value = total > 0 ? total.toString() : '';
    }
  }

  private updateFlaskDisplay(): void {
    const maxVolume = 16;
    const fillEl = this.container.querySelector('#flask-fill') as HTMLElement | null;
    const readoutEl = this.container.querySelector('#flask-readout');

    if (fillEl) {
      const clampedPct = Math.min(100, Math.max(0, (this.activeFlaskUnits / maxVolume) * 100));
      fillEl.style.height = `${clampedPct}%`;
    }
    if (readoutEl) {
      readoutEl.textContent = `${this.activeFlaskUnits} oz`;
    }
  }

  public showSuccessModal(order: CustomerOrder, earnedCoins: number, onNext: () => void): void {
    sound.playRegisterBell();
    sound.playVictoryFanfare();
    this.setMood('ecstatic');

    const modal = document.createElement('div');
    modal.className = 'merchant-modal-overlay';
    modal.innerHTML = `
      <div class="merchant-modal-card success-card">
        <div class="confetti-emitter">🎉 🎊 ⭐ 🪙</div>
        <div class="success-avatar">${order.customer.avatar}</div>
        <h2>"${order.customer.dialogueStyle.delighted[Math.floor(Math.random() * order.customer.dialogueStyle.delighted.length)]}"</h2>
        
        <div class="success-explanation-box">
          <span class="check-icon">✓</span>
          <p>${order.explanation}</p>
        </div>

        <div class="reward-pouch">
          <div class="reward-item">
            <span class="reward-icon">🪙</span>
            <span class="reward-amount">+${earnedCoins} Coins Earned</span>
          </div>
          <div class="reward-item">
            <span class="reward-icon">🌟</span>
            <span class="reward-amount">+${order.reputationGain} Village Prosperity</span>
          </div>
        </div>

        <button class="next-customer-btn" id="btn-modal-next">
          Serve Next Customer! ➡️
        </button>
      </div>
    `;

    document.body.appendChild(modal);

    const nextBtn = modal.querySelector('#btn-modal-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        modal.remove();
        onNext();
      });
    }
  }

  public showRetryFeedback(given: number, expected: number): void {
    sound.playTryAgain();
    this.setMood('thinking');

    const diff = Math.abs(given - expected);
    let message = '';
    if (given < expected) {
      message = `You counted ${given} coins, but the order requires ${expected} coins (need ${diff} more coins). Let’s recount!`;
    } else {
      message = `You counted ${given} coins, which is ${diff} coins too many for this order (${expected} coins). Let’s adjust!`;
    }

    const toast = document.createElement('div');
    toast.className = 'retry-toast-message';
    toast.innerHTML = `
      <div class="toast-content">
        <span class="toast-icon">🤔</span>
        <div class="toast-text">
          <strong>Almost there!</strong>
          <p>${message}</p>
        </div>
      </div>
    `;

    this.container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 4500);
  }
}
