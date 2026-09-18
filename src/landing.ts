import { ProfileManager } from './profile/ProfileManager';
import { AuthModal } from './profile/AuthModal';
import { HeroCanvas } from './heroCanvas';
import { StudioAudio } from './landingAudio';

document.addEventListener('DOMContentLoaded', async () => {
  const profileManager = ProfileManager.getInstance();
  const authModal = new AuthModal();
  const audio = new StudioAudio();

  // Initialize interactive Living Canvas background
  const heroCanvasEl = document.getElementById('hero-canvas') as HTMLCanvasElement;
  if (heroCanvasEl) {
    new HeroCanvas(heroCanvasEl);
  }

  const accountContainer = document.getElementById('nav-account-container');
  const btnConnect = document.getElementById('btn-nav-connect');
  const btnAudio = document.getElementById('btn-studio-audio');
  const audioIcon = document.getElementById('studio-audio-icon');

  // Audio Toggle in Nav
  if (btnAudio) {
    btnAudio.addEventListener('click', () => {
      const isSoundOn = audio.toggleMute();
      if (audioIcon) {
        audioIcon.textContent = isSoundOn ? '🔊' : '🔇';
      }
    });
  }

  // Bind subtle interactive audio feedback
  const attachAudioTriggers = () => {
    document.querySelectorAll('.interactive-game-card, .btn-primary, .btn-nav-auth, .btn-connect, .nav-profile-pill').forEach(el => {
      el.addEventListener('mouseenter', () => audio.playHover());
      el.addEventListener('click', () => audio.playClick());
    });
  };

  // Initialize and listen to profile/auth changes
  await profileManager.init();

  profileManager.onAuth((profile) => {
    renderAccountNav(profile);
    attachAudioTriggers();
  });

  function renderAccountNav(profile: ReturnType<typeof profileManager.getProfile>): void {
    if (!accountContainer) return;

    if (!profile) {
      accountContainer.innerHTML = `
        <button id="btn-nav-auth" class="btn-nav-auth">
          <span>Log In / Create Account</span>
        </button>
      `;
      accountContainer.querySelector('#btn-nav-auth')?.addEventListener('click', () => {
        authModal.open('signup');
      });
    } else {
      const xpPct = Math.min(100, Math.round((profile.currentXp / profile.xpToNextLevel) * 100));
      accountContainer.innerHTML = `
        <div id="nav-profile-pill" class="nav-profile-pill" title="View Genesis Passport">
          <div class="nav-profile-avatar">👤</div>
          <div class="nav-profile-info">
            <div class="nav-profile-top">
              <span class="nav-profile-name">${profile.username}</span>
              <span class="nav-profile-level">Lv. ${profile.level}</span>
            </div>
            <div class="nav-xp-bar-bg">
              <div class="nav-xp-bar-fill" style="width: ${xpPct}%;"></div>
            </div>
          </div>
        </div>
      `;
      accountContainer.querySelector('#nav-profile-pill')?.addEventListener('click', () => {
        authModal.open('passport');
      });
    }
  }

  // Enforce mandatory account check when clicking any game link
  const gameLinks = document.querySelectorAll('.game-launch-link');
  gameLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (!profileManager.isAuthenticated()) {
        e.preventDefault();
        authModal.open('signup');
      }
    });
  });

  // Solana Wallet Connect
  if (btnConnect) {
    btnConnect.addEventListener('click', async () => {
      try {
        const provider = (window as any).solana;
        if (provider && provider.isPhantom) {
          const resp = await provider.connect();
          btnConnect.textContent = `🪙 ${resp.publicKey.toString().slice(0, 4)}...${resp.publicKey.toString().slice(-4)}`;
          btnConnect.style.background = '#14F195'; // Solana green
          btnConnect.style.color = '#000';
        } else {
          window.open('https://phantom.app/', '_blank');
        }
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    });
  }

  attachAudioTriggers();
});
