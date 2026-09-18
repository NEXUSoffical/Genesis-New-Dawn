import { TownManager } from '../economy/TownManager';
import { TownState, VillageBuilding } from '../types';
import { sound } from '../audio/MerchantAudio';

export class TownView {
  private container: HTMLElement;
  private townManager: TownManager;

  constructor(container: HTMLElement, townManager: TownManager) {
    this.container = container;
    this.townManager = townManager;
  }

  public render(): void {
    const state = this.townManager.getState();
    const buildings = Object.values(state.buildings);

    this.container.innerHTML = `
      <div class="town-view-layout">
        <!-- Village Banner & Skyline -->
        <div class="town-skyline-banner">
          <div class="skyline-info">
            <h2>🏡 Oakhaven Village</h2>
            <p>Every math problem you solve builds homes, shops, and brings prosperity to our community!</p>
          </div>
          <div class="skyline-stats">
            <div class="stat-pill">
              <span class="stat-icon">🪙</span>
              <span class="stat-value">${state.coins}</span>
              <span class="stat-label">Treasury</span>
            </div>
            <div class="stat-pill">
              <span class="stat-icon">🌟</span>
              <span class="stat-value">${state.prosperity}</span>
              <span class="stat-label">Prosperity</span>
            </div>
            <div class="stat-pill">
              <span class="stat-icon">📅</span>
              <span class="stat-value">Day ${state.day}</span>
              <span class="stat-label">Calendar</span>
            </div>
          </div>
        </div>

        <!-- Living Animated Village Diorama -->
        <div class="village-diorama">
          <div class="diorama-sky">
            <div class="diorama-cloud c1">☁️</div>
            <div class="diorama-cloud c2">☁️</div>
            <div class="diorama-sun">☀️</div>
          </div>

          <div class="diorama-landscape">
            <!-- Buildings on diorama -->
            <div class="diorama-building-lot ${state.buildings.bakery?.unlocked ? 'built' : 'locked'}">
              <div class="building-sprite">🥖</div>
              <span class="sprite-label">Bakery Lv.${state.buildings.bakery?.level || 0}</span>
            </div>

            <div class="diorama-building-lot ${state.buildings.blacksmith?.unlocked ? 'built' : 'locked'}">
              <div class="building-sprite">⚒️</div>
              <span class="sprite-label">Forge Lv.${state.buildings.blacksmith?.level || 0}</span>
            </div>

            <div class="diorama-building-lot ${state.buildings.alchemist?.unlocked ? 'built' : 'locked'}">
              <div class="building-sprite">🧪</div>
              <span class="sprite-label">Alchemy Lv.${state.buildings.alchemist?.level || 0}</span>
            </div>

            <div class="diorama-building-lot ${state.buildings.farm?.unlocked ? 'built' : 'locked'}">
              <div class="building-sprite">🌾</div>
              <span class="sprite-label">Windmill Lv.${state.buildings.farm?.level || 0}</span>
            </div>

            <div class="diorama-building-lot ${state.buildings.town_square?.unlocked ? 'built' : 'locked'}">
              <div class="building-sprite">🎪</div>
              <span class="sprite-label">Square Lv.${state.buildings.town_square?.level || 0}</span>
            </div>

            <!-- Mini wandering villagers -->
            <div class="mini-villager v1">👨‍🍳</div>
            <div class="mini-villager v2">🛡️</div>
            <div class="mini-villager v3">🧝</div>
          </div>
        </div>

        <!-- Building Construction & Upgrade Cards -->
        <div class="buildings-upgrade-section">
          <h3 class="section-title">🔨 Village Construction & Upgrades</h3>
          <div class="building-cards-grid">
            ${buildings.map(b => this.renderBuildingCard(b, state)).join('')}
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  private renderBuildingCard(b: VillageBuilding, state: TownState): string {
    const cost = this.townManager.getUpgradeCost(b.id);
    const canAfford = state.coins >= cost && b.level < b.maxLevel;
    const isMax = b.level >= b.maxLevel;

    return `
      <div class="building-card ${b.unlocked ? 'unlocked' : 'locked'}">
        <div class="card-icon-box">
          <span class="b-icon">${b.icon}</span>
          <span class="b-level-badge">${b.unlocked ? `Level ${b.level}/${b.maxLevel}` : 'Unbuilt'}</span>
        </div>

        <div class="card-details">
          <h4>${b.name}</h4>
          <p class="b-desc">${b.description}</p>
          <div class="b-benefit">
            <strong>Perk:</strong> ${b.benefit}
          </div>
        </div>

        <div class="card-action">
          ${isMax ? `
            <button class="upgrade-btn maxed" disabled>🌟 Fully Built!</button>
          ` : `
            <button 
              class="upgrade-btn ${canAfford ? 'affordable' : 'unaffordable'}" 
              data-id="${b.id}"
              ${!canAfford ? 'disabled' : ''}
            >
              ${b.unlocked ? `Upgrade (${cost} 🪙)` : `Build (${cost} 🪙)`}
            </button>
          `}
        </div>
      </div>
    `;
  }

  private attachEventListeners(): void {
    const btns = this.container.querySelectorAll('.upgrade-btn[data-id]');
    btns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        if (id) {
          const success = this.townManager.upgradeBuilding(id);
          if (success) {
            sound.playBuildingUpgrade();
            this.render();
          }
        }
      });
    });
  }
}
