import { supabase } from '../backend/supabase';
import { RealtimeChannel } from '@supabase/supabase-js';

export class HomePage {
  private container: HTMLDivElement;
  private activeUsersElement: HTMLDivElement;
  private activeUsersCount: number = 0;
  private presenceChannel: RealtimeChannel | null = null;
  private onEnterCallback: () => void;

  constructor(onEnter: () => void) {
    this.onEnterCallback = onEnter;
    this.container = document.createElement('div');
    this.container.id = 'home-page';
    
    this.activeUsersElement = document.createElement('div');
    this.activeUsersElement.className = 'active-users-counter';
    this.updateActiveUsersDisplay();

    this.setupStyles();
    this.setupUI();
    this.startActiveUsersSimulation();
  }

  private setupStyles() {
    if (!document.getElementById('home-page-styles')) {
      const style = document.createElement('style');
      style.id = 'home-page-styles';
      style.textContent = `
        .home-page-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-image: url('/Genesis-New-Dawn/background.jpg');
          background-size: cover;
          background-position: center;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          color: white;
          font-family: 'Inter', sans-serif;
        }
        .home-nav-bar {
          display: flex;
          justify-content: flex-end;
          gap: 20px;
          padding: 30px 40px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%);
        }
        .home-link {
          color: white;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: color 0.3s;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .home-link:hover {
          color: #38bdf8;
        }
        .home-center-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 40px;
        }
        .btn-enter-game {
          background: rgba(56, 189, 248, 0.2);
          border: 2px solid #38bdf8;
          color: white;
          padding: 16px 48px;
          font-size: 24px;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.3);
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .btn-enter-game:hover {
          background: #38bdf8;
          color: #07090e;
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(56, 189, 248, 0.6);
        }
        .active-users-counter {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 18px;
          font-weight: 600;
          background: rgba(0, 0, 0, 0.5);
          padding: 12px 24px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
        }
        .pulse-dot {
          width: 12px;
          height: 12px;
          background-color: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
      `;
      document.head.appendChild(style);
    }
  }

  private setupUI() {
    this.container.className = 'home-page-container';

    // Top nav with Docs & Twitter
    const navBar = document.createElement('div');
    navBar.className = 'home-nav-bar';
    
    const docsLink = document.createElement('a');
    docsLink.href = '#';
    docsLink.target = '_blank';
    docsLink.className = 'home-link';
    docsLink.textContent = 'Docs';

    const twitterLink = document.createElement('a');
    twitterLink.href = '#';
    twitterLink.target = '_blank';
    twitterLink.className = 'home-link';
    twitterLink.textContent = 'Twitter';

    navBar.appendChild(docsLink);
    navBar.appendChild(twitterLink);

    // Center content
    const centerContent = document.createElement('div');
    centerContent.className = 'home-center-content';

    const enterButton = document.createElement('button');
    enterButton.className = 'btn-enter-game';
    enterButton.textContent = 'Click to Enter';
    enterButton.addEventListener('click', () => {
      this.destroy();
      this.onEnterCallback();
    });

    centerContent.appendChild(enterButton);
    centerContent.appendChild(this.activeUsersElement);

    this.container.appendChild(navBar);
    this.container.appendChild(centerContent);
  }

  private startActiveUsersSimulation() {
    this.presenceChannel = supabase.channel('global_room');

    this.presenceChannel
      .on('presence', { event: 'sync' }, () => {
        if (!this.presenceChannel) return;
        const newState = this.presenceChannel.presenceState();
        // Count number of unique connections
        let count = 0;
        for (const id in newState) {
          count += newState[id].length;
        }
        this.activeUsersCount = count;
        this.updateActiveUsersDisplay();
      })
      .subscribe(async (status: any) => {
        if (status === 'SUBSCRIBED' && this.presenceChannel) {
          await this.presenceChannel.track({
            online_at: new Date().toISOString(),
          });
        }
      });
  }

  private updateActiveUsersDisplay() {
    this.activeUsersElement.innerHTML = `
      <span class="pulse-dot"></span>
      ${this.activeUsersCount} Active Pioneers
    `;
  }

  public mount() {
    document.body.appendChild(this.container);
  }

  public destroy() {
    if (this.presenceChannel) {
      this.presenceChannel.unsubscribe();
      this.presenceChannel = null;
    }
    if (this.container.parentElement) {
      this.container.parentElement.removeChild(this.container);
    }
  }
}
