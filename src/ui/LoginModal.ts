import { supabase } from '../backend/supabase';
import { AuthManager } from '../auth/AuthManager';

export class LoginModal {
  public onLogin: ((username: string) => void) | null = null;
  private modalContainer: HTMLElement;

  constructor() {
    this.modalContainer = document.createElement('div');
    this.modalContainer.id = 'login-modal';
    this.modalContainer.style.position = 'fixed';
    this.modalContainer.style.top = '0';
    this.modalContainer.style.left = '0';
    this.modalContainer.style.width = '100%';
    this.modalContainer.style.height = '100%';
    this.modalContainer.style.display = 'flex';
    this.modalContainer.style.alignItems = 'center';
    this.modalContainer.style.justifyContent = 'center';
    this.modalContainer.style.background = 'rgba(0,0,0,0.7)';
    this.modalContainer.style.zIndex = '2000';
    this.modalContainer.innerHTML = `
      <div class="glass-panel" style="padding: 32px; max-width: 380px; width: 100%; text-align:center; background: rgba(13, 17, 28, 0.95);">
        <h2 style="margin-top:0; font-family: 'Outfit', sans-serif; color: #f8fafc;">Genesis Cloud Link</h2>
        <p style="margin: 8px 0 24px 0; font-size:14px; color:var(--text-muted);">Log in or sign up to save your civilization.</p>
        
        <input id="login-email" type="email" placeholder="Email" style="width:100%; padding:10px; margin-bottom:12px; border-radius: 6px; border: 1px solid #333; background: #1a1a24; color: #fff; outline: none;" />
        <input id="login-password" type="password" placeholder="Password" style="width:100%; padding:10px; margin-bottom:24px; border-radius: 6px; border: 1px solid #333; background: #1a1a24; color: #fff; outline: none;" />
        
        <div id="login-error" style="color: #ef4444; font-size: 13px; margin-bottom: 12px; min-height: 16px;"></div>

        <div style="display:flex; flex-direction: column; gap:12px; justify-content:center;">
          <button id="login-btn" style="padding:10px 16px; font-weight:600; background:#38bdf8; color:#000; border:none; border-radius:6px; cursor:pointer; font-family: 'Inter', sans-serif;">Log In</button>
          <button id="signup-btn" style="padding:10px 16px; font-weight:600; background:transparent; color:#38bdf8; border:1px solid #38bdf8; border-radius:6px; cursor:pointer; font-family: 'Inter', sans-serif;">Create Account</button>
        </div>
      </div>
    `;

    // Bind events
    this.modalContainer.querySelector('#login-btn')?.addEventListener('click', () => this.handleAuth('login'));
    this.modalContainer.querySelector('#signup-btn')?.addEventListener('click', () => this.handleAuth('signup'));
    
    // Allow Enter key to submit login
    const pwdInput = this.modalContainer.querySelector('#login-password') as HTMLInputElement;
    pwdInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleAuth('login');
    });
  }

  private async handleAuth(mode: 'login' | 'signup') {
    const emailInput = this.modalContainer.querySelector('#login-email') as HTMLInputElement;
    const pwdInput = this.modalContainer.querySelector('#login-password') as HTMLInputElement;
    const errorDiv = this.modalContainer.querySelector('#login-error') as HTMLDivElement;
    
    const email = emailInput?.value.trim();
    const password = pwdInput?.value.trim();

    if (!email || !password) {
      errorDiv.textContent = 'Please enter both email and password.';
      return;
    }
    
    if (!email.includes('@')) {
      errorDiv.textContent = 'Invalid credentials. You must use a full Email Address (e.g. name@example.com).';
      return;
    }

    errorDiv.textContent = 'Authenticating...';

    let error = null;

    if (mode === 'signup') {
      const res = await supabase.auth.signUp({ email, password });
      error = res.error;
      // Supabase may require email confirmation depending on settings
      if (!error && res.data.user?.identities?.length === 0) {
        errorDiv.textContent = 'User already exists. Try logging in.';
        return;
      } else if (!error && !res.data.session) {
         errorDiv.textContent = 'Check your email to confirm signup!';
         return;
      }
    } else {
      const res = await supabase.auth.signInWithPassword({ email, password });
      error = res.error;
    }

    if (error) {
      errorDiv.textContent = error.message;
    } else {
      const userEmail = (await AuthManager.getCurrentUser()) || email;
      if (this.onLogin) this.onLogin(userEmail);
      this.hide();
    }
  }

  public show() {
    document.body.appendChild(this.modalContainer);
    const input = this.modalContainer.querySelector('#login-email') as HTMLInputElement;
    input?.focus();
  }

  private hide() {
    this.modalContainer.remove();
  }
}
