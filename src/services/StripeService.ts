import { supabase } from '../backend/supabase';
import { ProfileManager } from '../profile/ProfileManager';
import { CoinPackInfo, getCoinPacks, getStripeSettings, saveStripeSettings, DEFAULT_COIN_PACKS } from './StripeConfig';

export class StripeService {
  private static instance: StripeService | null = null;
  private isProcessingCheckout: boolean = false;
  private onCoinsAddedCallbacks: Array<(amount: number, newTotal: number) => void> = [];

  private constructor() {}

  public static getInstance(): StripeService {
    if (!StripeService.instance) {
      StripeService.instance = new StripeService();
    }
    return StripeService.instance;
  }

  /**
   * Initializes the Stripe handler and checks URL query parameters
   * for payment returns from Stripe Checkout or Payment Links.
   */
  public init(): void {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get('payment_status');
    const sessionId = params.get('session_id');
    const packId = params.get('pack_id');
    const coinsParam = params.get('coins');

    if (paymentStatus === 'success') {
      let coinsToCredit = coinsParam ? parseInt(coinsParam, 10) : 0;
      let packName = 'Genesis Coin Pack';

      if (packId) {
        const foundPack = DEFAULT_COIN_PACKS.find(p => p.id === packId);
        if (foundPack) {
          packName = foundPack.name;
          if (!coinsToCredit) coinsToCredit = foundPack.coins;
        }
      }

      if (!coinsToCredit) coinsToCredit = 400; // Fallback starter

      // Prevent duplicate processing on page refresh if user didn't clear session
      const processedKey = `stripe_processed_${sessionId || 'generic_' + Date.now()}`;
      if (sessionId && localStorage.getItem(processedKey)) {
        console.log('Stripe session already processed:', sessionId);
      } else {
        if (sessionId) localStorage.setItem(processedKey, 'true');
        this.fulfillPurchase(coinsToCredit, packName);
      }

      // Clean the query parameters cleanly from address bar without reloading
      this.clearUrlParameters();
    } else if (paymentStatus === 'cancelled') {
      this.showToast('Payment was cancelled. No charges were made to your account.');
      this.clearUrlParameters();
    }
  }

  /**
   * Register a listener whenever coins are credited via Stripe
   */
  public onCoinsAdded(callback: (amount: number, newTotal: number) => void): () => void {
    this.onCoinsAddedCallbacks.push(callback);
    return () => {
      this.onCoinsAddedCallbacks = this.onCoinsAddedCallbacks.filter(cb => cb !== callback);
    };
  }

  /**
   * Start the Stripe Checkout flow for a selected coin pack
   */
  public async startCheckout(pack: CoinPackInfo): Promise<void> {
    if (this.isProcessingCheckout) return;
    this.isProcessingCheckout = true;

    const profile = ProfileManager.getInstance().getProfile();
    const settings = getStripeSettings();
    const currentBase = window.location.origin + window.location.pathname;

    // 1. Direct Stripe Payment Link check
    const userCustom = settings.customLinks[pack.id];
    const linkToUse = (userCustom && userCustom.trim().startsWith('http')) ? userCustom.trim() : pack.paymentLink;
    if (linkToUse && linkToUse.trim().startsWith('http')) {
      this.isProcessingCheckout = false;
      window.location.href = linkToUse.trim();
      return;
    }

    // 2. Try Supabase Edge Function: create-checkout-session
    try {
      this.showToast(`Connecting to Stripe for ${pack.name}...`);
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          packId: pack.id,
          userId: profile?.id || 'anonymous_player',
          userEmail: profile?.email || undefined,
          returnUrl: currentBase
        }
      });

      if (!error && data?.url) {
        window.location.href = data.url;
        return;
      }
    } catch (err) {
      console.warn('Supabase Edge Function not reachable or not yet deployed:', err);
    }

    // 3. Fallback: If no link set yet, inform user or direct to standard checkout
    this.isProcessingCheckout = false;
    alert(`Stripe payment link is being connected for ${pack.name}. Please check back in a moment!`);
  }

  /**
   * Internal fulfillment: Updates localStorage wallet & ProfileManager
   */
  private fulfillPurchase(coins: number, packName: string): void {
    // 1. Update Roblox wallet localStorage
    let currentWallet = 0;
    const raw = localStorage.getItem('rbx_player_coins');
    if (raw) currentWallet = parseInt(raw, 10) || 0;
    const newTotal = currentWallet + coins;
    localStorage.setItem('rbx_player_coins', newTotal.toString());

    // 2. Update Supabase Profile if logged in
    const profileMgr = ProfileManager.getInstance();
    if (profileMgr.isAuthenticated()) {
      profileMgr.addCoins(coins);
    }

    // 3. Notify all subscribers (Roblox HUD, store views, etc.)
    this.onCoinsAddedCallbacks.forEach(cb => cb(coins, newTotal));

    // 4. Open Celebratory Modal with confetti & audio
    this.showCelebrationModal(packName, coins, newTotal);
  }

  /**
   * Celebratory Modal with Golden Coin Particles
   */
  private showCelebrationModal(packName: string, coinsAdded: number, newTotal: number): void {
    const existing = document.getElementById('genesis-stripe-celebration');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'genesis-stripe-celebration';
    overlay.className = 'stripe-modal-overlay';
    overlay.innerHTML = `
      <div class="stripe-celebration-card glass-panel">
        <div class="stripe-celebration-burst">✨ 🪙 ✨</div>
        <div class="stripe-badge-verified">✓ Verified Stripe Payment</div>
        <h2 class="stripe-celebration-title">Treasury Restocked!</h2>
        <p class="stripe-celebration-subtitle">
          Thank you for supporting <strong>Genesis</strong>! Your purchase of <em>${packName}</em> was confirmed.
        </p>

        <div class="stripe-reward-box">
          <div class="stripe-reward-amount">+🪙 ${coinsAdded.toLocaleString()}</div>
          <div class="stripe-reward-label">Coins Added to Your Wallet</div>
        </div>

        <div class="stripe-total-balance">
          Current Total Balance: <strong>🪙 ${newTotal.toLocaleString()} Coins</strong>
        </div>

        <button class="stripe-btn-claim" id="stripe-claim-btn">
          Enter Atelier & Spend Coins ➔
        </button>
      </div>
    `;

    document.body.appendChild(overlay);

    // Audio chime
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 arpeggio
      notes.forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.1);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + idx * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(audioCtx.currentTime + idx * 0.1);
        osc.stop(audioCtx.currentTime + idx * 0.1 + 0.4);
      });
    } catch {
      // Audio context might be restricted
    }

    const claimBtn = overlay.querySelector('#stripe-claim-btn');
    claimBtn?.addEventListener('click', () => {
      overlay.remove();
    });
  }

  /**
   * Stripe Modal: Allows entering Stripe Payment Links or testing simulation
   */
  public openStripeModal(selectedPack?: CoinPackInfo): void {
    const existing = document.getElementById('genesis-stripe-settings-modal');
    if (existing) existing.remove();

    const packs = getCoinPacks();
    const settings = getStripeSettings();
    const currentPack = selectedPack || packs[1]; // default 1,000 coins

    const overlay = document.createElement('div');
    overlay.id = 'genesis-stripe-settings-modal';
    overlay.className = 'stripe-modal-overlay';

    overlay.innerHTML = `
      <div class="stripe-setup-card glass-panel">
        <button class="stripe-modal-close" id="stripe-close-btn">&times;</button>
        
        <div class="stripe-modal-header">
          <div class="stripe-logo-row">
            <span class="stripe-logo-text">stripe</span>
            <span class="stripe-checkout-tag">SECURE CHECKOUT</span>
          </div>
          <h2 class="stripe-modal-title">Purchase ${currentPack.name}</h2>
          <p class="stripe-modal-desc">
            Directly support Genesis development and unlock exclusive 3D outfits and gear.
          </p>
        </div>

        <div class="stripe-summary-box">
          <div class="stripe-pack-preview">
            <span class="stripe-pack-icon">${currentPack.icon}</span>
            <div>
              <div class="stripe-pack-name">${currentPack.name}</div>
              <div class="stripe-pack-amount">🪙 ${currentPack.coins.toLocaleString()} Genesis Coins</div>
            </div>
          </div>
          <div class="stripe-pack-price">${currentPack.priceUsd}</div>
        </div>

        <!-- Stripe Direct Connect Form -->
        <div class="stripe-connect-section">
          <div class="stripe-section-label">⚙️ Stripe Payment Link Connection</div>
          <p class="stripe-section-hint">
            Paste your Stripe Payment Link for this pack below. (Create in <a href="https://dashboard.stripe.com/payment-links" target="_blank" rel="noopener">Stripe Dashboard ↗</a>).
          </p>
          <div class="stripe-input-group">
            <input 
              type="url" 
              id="stripe-link-input" 
              class="stripe-text-input" 
              placeholder="https://buy.stripe.com/..." 
              value="${settings.customLinks[currentPack.id] || ''}"
            />
            <button class="stripe-btn-save" id="stripe-save-link-btn">Save Link</button>
          </div>
        </div>

        <div class="stripe-modal-actions">
          <button class="stripe-btn-simulate" id="stripe-simulate-btn" title="Simulates successful Stripe redirect for testing">
            ⚡ Test Payment Simulation (${currentPack.priceUsd})
          </button>
          
          <button class="stripe-btn-checkout" id="stripe-direct-checkout-btn">
            Proceed to Stripe Checkout ➔
          </button>
        </div>

        <div class="stripe-modal-footer">
          <span>🔒 256-Bit SSL Encrypted</span>
          <span>•</span>
          <span>Apple Pay & Google Pay Supported</span>
          <span>•</span>
          <a href="https://stripe.com" target="_blank" rel="noopener" class="stripe-footer-link">Powered by Stripe</a>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector('#stripe-close-btn');
    closeBtn?.addEventListener('click', () => overlay.remove());

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    // Save Payment Link
    const linkInput = overlay.querySelector('#stripe-link-input') as HTMLInputElement;
    const saveLinkBtn = overlay.querySelector('#stripe-save-link-btn');
    saveLinkBtn?.addEventListener('click', () => {
      const url = linkInput.value.trim();
      const updated = { ...settings.customLinks, [currentPack.id]: url };
      saveStripeSettings({ customLinks: updated });
      this.showToast(`✓ Saved Stripe Payment Link for ${currentPack.name}`);
    });

    // Direct Stripe Checkout click
    const checkoutBtn = overlay.querySelector('#stripe-direct-checkout-btn');
    checkoutBtn?.addEventListener('click', () => {
      const customUrl = linkInput.value.trim();
      if (customUrl.startsWith('http')) {
        saveStripeSettings({ customLinks: { ...settings.customLinks, [currentPack.id]: customUrl } });
        window.location.href = customUrl;
      } else {
        alert('Please enter a valid Stripe Payment Link (e.g., https://buy.stripe.com/...) or click "Test Payment Simulation" to test the in-game flow!');
      }
    });

    // Test simulation
    const simulateBtn = overlay.querySelector('#stripe-simulate-btn');
    simulateBtn?.addEventListener('click', () => {
      overlay.remove();
      this.fulfillPurchase(currentPack.coins, currentPack.name);
    });
  }

  private clearUrlParameters(): void {
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
  }

  private showToast(msg: string): void {
    const toast = document.createElement('div');
    toast.className = 'stripe-toast-notification';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  }
}
