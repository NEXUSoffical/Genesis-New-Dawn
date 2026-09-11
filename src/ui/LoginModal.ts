export class LoginModal {
  // Callback invoked when the user successfully logs in
  public onLogin: ((username: string) => void) | null = null;

  private modalContainer: HTMLElement;

  constructor() {
    // Create modal container but do not attach to DOM yet
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
    this.modalContainer.style.background = 'rgba(0,0,0,0.6)';
    this.modalContainer.style.zIndex = '2000';
    this.modalContainer.innerHTML = `
      <div class="glass-panel" style="padding: 24px; max-width: 320px; width: 100%; text-align:center;">
        <h2 style="margin-top:0; font-family: 'Inter', sans-serif;">Welcome to Genesis</h2>
        <p style="margin: 8px 0; font-size:14px; color:var(--text-muted);">Enter a username to continue your civilization.</p>
        <input id="login-username" type="text" placeholder="Username" style="width:100%; padding:8px; margin:12px 0; font-size:14px;" />
        <div style="display:flex; gap:8px; justify-content:center;">
          <button id="login-confirm" style="padding:8px 16px; font-weight:600; background:#34d399; color:#fff; border:none; border-radius:4px; cursor:pointer;">Play</button>
          <button id="login-cancel" style="padding:8px 16px; background:#ef4444; color:#fff; border:none; border-radius:4px; cursor:pointer;">Cancel</button>
        </div>
      </div>
    `;

    // Bind events
    this.modalContainer.querySelector('#login-confirm')?.addEventListener('click', () => this.handleConfirm());
    this.modalContainer.querySelector('#login-cancel')?.addEventListener('click', () => this.handleCancel());
    // Allow Enter key to submit
    const input = this.modalContainer.querySelector('#login-username') as HTMLInputElement;
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') this.handleConfirm();
    });
  }

  private handleConfirm() {
    const input = this.modalContainer.querySelector('#login-username') as HTMLInputElement;
    const name = input?.value.trim();
    if (name) {
      if (this.onLogin) this.onLogin(name);
      this.hide();
    } else {
      alert('Please enter a username.');
    }
  }

  private handleCancel() {
    // Default to anonymous guest
    if (this.onLogin) this.onLogin('guest');
    this.hide();
  }

  public show() {
    document.body.appendChild(this.modalContainer);
    const input = this.modalContainer.querySelector('#login-username') as HTMLInputElement;
    input?.focus();
  }

  private hide() {
    this.modalContainer.remove();
  }
}
