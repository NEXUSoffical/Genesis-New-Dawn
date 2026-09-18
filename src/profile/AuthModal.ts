import { supabase } from '../backend/supabase';
import { ProfileManager } from './ProfileManager';

export class AuthModal {
  private container: HTMLElement;
  private mode: 'login' | 'signup' | 'passport' = 'login';
  private profileManager: ProfileManager;

  constructor() {
    this.profileManager = ProfileManager.getInstance();
    this.container = document.createElement('div');
    this.container.id = 'genesis-auth-modal';
    this.container.className = 'auth-modal-overlay hidden';
    document.body.appendChild(this.container);

    this.container.addEventListener('click', (e) => {
      if (e.target === this.container) {
        this.close();
      }
    });
  }

  public open(mode: 'login' | 'signup' | 'passport' = 'login'): void {
    if (this.profileManager.isAuthenticated()) {
      this.mode = 'passport';
    } else {
      this.mode = mode === 'passport' ? 'login' : mode;
    }

    this.render();
    this.container.classList.remove('hidden');
  }

  public close(): void {
    this.container.classList.add('hidden');
  }

  private render(): void {
    const profile = this.profileManager.getProfile();

    if (profile && this.mode === 'passport') {
      // Passport / Account Screen
      const xpPct = Math.min(100, Math.round((profile.currentXp / profile.xpToNextLevel) * 100));
      this.container.innerHTML = `
        <div class="auth-modal-card glass-panel">
          <div class="auth-modal-header">
            <span class="auth-brand">⚡ Genesis Passport</span>
            <button class="auth-close-btn">&times;</button>
          </div>

          <div class="passport-hero">
            <div class="passport-avatar">👤</div>
            <h2 class="passport-username">${profile.username}</h2>
            <div class="passport-rank-badge">${profile.title}</div>
            <p class="passport-email">${profile.email}</p>
          </div>

          <div class="passport-xp-box">
            <div class="passport-xp-labels">
              <span class="passport-level-tag">LEVEL ${profile.level}</span>
              <span class="passport-xp-counter">${profile.currentXp} / ${profile.xpToNextLevel} XP (${xpPct}%)</span>
            </div>
            <div class="passport-bar-bg">
              <div class="passport-bar-fill" style="width: ${xpPct}%;"></div>
            </div>
            <div class="passport-total-xp">Total Lifetime XP: <strong>${profile.totalXp.toLocaleString()} XP</strong></div>
          </div>

          <div class="passport-stats-grid">
            <div class="passport-stat-item">
              <span class="p-stat-val">${profile.level}</span>
              <span class="p-stat-lbl">Global Level</span>
            </div>
            <div class="passport-stat-item">
              <span class="p-stat-val">${profile.title}</span>
              <span class="p-stat-lbl">Rank Title</span>
            </div>
          </div>

          <button id="btn-modal-logout" class="btn-auth-logout">Sign Out of Account</button>
        </div>
      `;

      this.container.querySelector('.auth-close-btn')?.addEventListener('click', () => this.close());
      this.container.querySelector('#btn-modal-logout')?.addEventListener('click', async () => {
        await this.profileManager.logout();
        this.open('login');
      });
      return;
    }

    // Sign In / Create Account Screen
    const isSignup = this.mode === 'signup';
    this.container.innerHTML = `
      <div class="auth-modal-card glass-panel">
        <div class="auth-modal-header">
          <div class="auth-tabs">
            <button id="tab-login" class="auth-tab ${!isSignup ? 'active' : ''}">Sign In</button>
            <button id="tab-signup" class="auth-tab ${isSignup ? 'active' : ''}">Create Account</button>
          </div>
          <button class="auth-close-btn">&times;</button>
        </div>

        <div class="auth-modal-body">
          <h3 class="auth-headline">${isSignup ? 'Create Genesis Account' : 'Welcome Back'}</h3>
          <p class="auth-subtext">
            ${isSignup 
              ? 'An account is required to earn XP, level up, and preserve your progression across all games.' 
              : 'Sign in to sync your level and unlock ecosystem titles.'}
          </p>

          <form id="auth-form" class="auth-form">
            <div class="auth-field">
              <label for="auth-email">Email Address</label>
              <input id="auth-email" type="email" placeholder="explorer@genesis.io" required />
            </div>

            <div class="auth-field">
              <label for="auth-password">Password</label>
              <input id="auth-password" type="password" placeholder="••••••••" required minlength="6" />
            </div>

            <div id="auth-error-msg" class="auth-error hidden"></div>

            <button type="submit" id="btn-auth-submit" class="btn-primary-auth">
              ${isSignup ? 'Create Account & Start' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    `;

    this.container.querySelector('.auth-close-btn')?.addEventListener('click', () => this.close());

    this.container.querySelector('#tab-login')?.addEventListener('click', () => {
      this.mode = 'login';
      this.render();
    });

    this.container.querySelector('#tab-signup')?.addEventListener('click', () => {
      this.mode = 'signup';
      this.render();
    });

    const form = this.container.querySelector('#auth-form') as HTMLFormElement;
    form?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = (this.container.querySelector('#auth-email') as HTMLInputElement).value.trim();
      const password = (this.container.querySelector('#auth-password') as HTMLInputElement).value.trim();
      const errorEl = this.container.querySelector('#auth-error-msg') as HTMLElement;
      const submitBtn = this.container.querySelector('#btn-auth-submit') as HTMLButtonElement;

      errorEl.classList.add('hidden');
      errorEl.textContent = '';
      submitBtn.disabled = true;
      submitBtn.textContent = 'Verifying with Genesis Cloud...';

      try {
        if (this.mode === 'signup') {
          const { data, error } = await supabase.auth.signUp({ email, password });
          if (error) throw error;
          if (data.user && !data.session) {
            errorEl.classList.remove('hidden');
            errorEl.style.color = '#38bdf8';
            errorEl.textContent = 'Account created! Please check your email to confirm signup, or sign in.';
            submitBtn.disabled = false;
            submitBtn.textContent = 'Create Account';
            return;
          }
        } else {
          const { error } = await supabase.auth.signInWithPassword({ email, password });
          if (error) throw error;
        }

        // Successfully authenticated!
        await this.profileManager.init();
        this.close();
      } catch (err: unknown) {
        errorEl.classList.remove('hidden');
        errorEl.style.color = '#ef4444';
        errorEl.textContent = err instanceof Error ? err.message : 'Authentication failed. Please try again.';
        submitBtn.disabled = false;
        submitBtn.textContent = this.mode === 'signup' ? 'Create Account & Start' : 'Sign In';
      }
    });
  }
}
