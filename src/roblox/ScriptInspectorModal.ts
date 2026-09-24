import { ScriptedEntity, ScriptBehavior } from './MapTypes';

export interface ScriptInspectorOptions {
  entity: ScriptedEntity;
  onSave: (updated: ScriptedEntity) => void;
  onDelete: (entityId: string) => void;
  onClose: () => void;
  onTestScript?: (entity: ScriptedEntity) => void;
}

export class ScriptInspectorModal {
  private container: HTMLElement;
  private options: ScriptInspectorOptions;

  constructor(parent: HTMLElement, options: ScriptInspectorOptions) {
    this.container = document.createElement('div');
    this.container.id = 'rbx-script-inspector-modal';
    this.container.className = 'rbx-modal-backdrop';
    this.options = options;
    parent.appendChild(this.container);

    this.render();
    this.bindEvents();
  }

  private render(): void {
    const e = this.options.entity;
    const isNPC = e.type === 'npc';
    const script = e.script || { behavior: 'dialogue' };

    this.container.innerHTML = `
      <div class="rbx-inspector-window">
        <!-- HEADER -->
        <div class="rbx-inspector-header">
          <div class="rbx-inspector-title">
            <span class="rbx-inspector-badge">${isNPC ? '👤 NPC / PERSON' : '📦 INTERACTIVE ITEM'}</span>
            <h2>Studio Properties & Script Editor</h2>
          </div>
          <button class="rbx-inspector-close" id="rbx-inspector-close-btn">&times;</button>
        </div>

        <div class="rbx-inspector-body">
          <!-- LEFT PANEL: PROPERTIES -->
          <div class="rbx-inspector-left">
            <h3 class="rbx-inspector-section-label">General Properties</h3>

            <div class="rbx-inspector-field">
              <label>Entity Name</label>
              <input type="text" id="rbx-prop-name" value="${e.name}" class="rbx-inspector-input" />
            </div>

            <div class="rbx-inspector-field">
              <label>Entity Type</label>
              <div class="rbx-prop-type-badge">${isNPC ? 'Blocky Avatar (Person)' : (e.itemType || 'Custom Prop')}</div>
            </div>

            ${isNPC ? `
              <h3 class="rbx-inspector-section-label" style="margin-top: 14px;">Avatar Appearance</h3>
              <div class="rbx-inspector-grid2">
                <div class="rbx-inspector-field">
                  <label>Shirt / Top</label>
                  <select id="rbx-prop-shirt" class="rbx-inspector-select">
                    <option value="none" ${(!e.avatarConfig?.equippedShirt || e.avatarConfig?.equippedShirt === 'none') ? 'selected' : ''}>Default Tunic</option>
                    <option value="flannel" ${e.avatarConfig?.equippedShirt === 'flannel' ? 'selected' : ''}>Pioneer Flannel</option>
                    <option value="genesis_hoodie" ${e.avatarConfig?.equippedShirt === 'genesis_hoodie' ? 'selected' : ''}>Genesis Hoodie</option>
                    <option value="synthetic_skin" ${e.avatarConfig?.equippedShirt === 'synthetic_skin' ? 'selected' : ''}>Cyber Synthetic Skin</option>
                    <option value="starweaver_robes" ${e.avatarConfig?.equippedShirt === 'starweaver_robes' ? 'selected' : ''}>Starweaver Robes</option>
                  </select>
                </div>
                <div class="rbx-inspector-field">
                  <label>Hat / Accessory</label>
                  <select id="rbx-prop-hat" class="rbx-inspector-select">
                    <option value="none" ${(!e.avatarConfig?.equippedHat || e.avatarConfig?.equippedHat === 'none') ? 'selected' : ''}>None</option>
                    <option value="cowboy" ${e.avatarConfig?.equippedHat === 'cowboy' ? 'selected' : ''}>Cowboy Hat</option>
                    <option value="halo" ${e.avatarConfig?.equippedHat === 'halo' ? 'selected' : ''}>Golden Halo</option>
                    <option value="crown" ${e.avatarConfig?.equippedHat === 'crown' ? 'selected' : ''}>Royal Crown</option>
                    <option value="top_hat" ${e.avatarConfig?.equippedHat === 'top_hat' ? 'selected' : ''}>Gentleman Top Hat</option>
                    <option value="beanie" ${e.avatarConfig?.equippedHat === 'beanie' ? 'selected' : ''}>Warm Beanie</option>
                  </select>
                </div>
              </div>
            ` : `
              <h3 class="rbx-inspector-section-label" style="margin-top: 14px;">Item Object Type</h3>
              <select id="rbx-prop-itemtype" class="rbx-inspector-select">
                <option value="coin" ${e.itemType === 'coin' ? 'selected' : ''}>🪙 Genesis Coin</option>
                <option value="chest" ${e.itemType === 'chest' ? 'selected' : ''}>🎁 Treasure Chest</option>
                <option value="portal" ${e.itemType === 'portal' ? 'selected' : ''}>🌀 Warp Teleport Portal</option>
                <option value="bounce_pad" ${e.itemType === 'bounce_pad' ? 'selected' : ''}>🚀 Super Bounce Launcher</option>
                <option value="speed_pad" ${e.itemType === 'speed_pad' ? 'selected' : ''}>⚡ Hyper Speed Strip</option>
                <option value="crystal" ${e.itemType === 'crystal' ? 'selected' : ''}>💎 Glowing Mana Crystal</option>
              </select>
            `}

            <!-- BEHAVIOR PRESETS -->
            <h3 class="rbx-inspector-section-label" style="margin-top: 16px;">Behavior Preset</h3>
            <div class="rbx-inspector-field">
              <select id="rbx-prop-behavior" class="rbx-inspector-select">
                <option value="dialogue" ${script.behavior === 'dialogue' ? 'selected' : ''}>💬 Interactive Dialogue / Speech</option>
                <option value="zombie" ${script.behavior === 'zombie' ? 'selected' : ''}>🧟 Zombie Undead (Chases & Attacks)</option>
                <option value="medic" ${script.behavior === 'medic' ? 'selected' : ''}>💉 Medic Doctor (Heals to 100 HP)</option>
                <option value="follow" ${script.behavior === 'follow' ? 'selected' : ''}>🏃 Pet / Companion (Follows Player)</option>
                <option value="patrol" ${script.behavior === 'patrol' ? 'selected' : ''}>🚶 Smooth Patrol / Wander</option>
                <option value="guard" ${script.behavior === 'guard' ? 'selected' : ''}>⚔️ Guard / Enemy (Chases & Attacks)</option>
                <option value="coin_reward" ${script.behavior === 'coin_reward' ? 'selected' : ''}>🪙 Coin Giver (Awards Coins)</option>
                <option value="teleport" ${script.behavior === 'teleport' ? 'selected' : ''}>🌀 Teleporter Pad</option>
                <option value="bounce" ${script.behavior === 'bounce' ? 'selected' : ''}>🚀 Super Bouncer Launcher</option>
                <option value="custom_code" ${script.behavior === 'custom_code' ? 'selected' : ''}>💻 Custom Script (Roblox Lua / JS)</option>
              </select>
            </div>

            <!-- PARAMETERS BASED ON BEHAVIOR -->
            <div id="rbx-param-combat" class="rbx-behavior-param-group" style="display: ${(script.behavior === 'zombie' || script.behavior === 'guard') ? 'block' : 'none'};">
              <div class="rbx-inspector-grid2">
                <div class="rbx-inspector-field">
                  <label>Health (HP)</label>
                  <input type="number" id="rbx-param-health" class="rbx-inspector-input" value="${script.health ?? script.maxHealth ?? 60}" min="1" max="2000" />
                </div>
                <div class="rbx-inspector-field">
                  <label>Attack Damage</label>
                  <input type="number" id="rbx-param-damage" class="rbx-inspector-input" value="${script.damageAmount ?? 12}" min="1" max="100" />
                </div>
              </div>
              <div class="rbx-inspector-grid2" style="margin-top: 6px;">
                <div class="rbx-inspector-field">
                  <label>Movement Speed</label>
                  <input type="number" id="rbx-param-speed" class="rbx-inspector-input" value="${script.moveSpeed ?? 6}" min="1" max="30" step="0.5" />
                </div>
                <div class="rbx-inspector-field">
                  <label>Aggro Range</label>
                  <input type="number" id="rbx-param-range" class="rbx-inspector-input" value="${script.detectionRange ?? 24}" min="5" max="80" />
                </div>
              </div>
            </div>

            <div id="rbx-param-dialogue" class="rbx-behavior-param-group" style="display: ${(script.behavior === 'dialogue' || script.behavior === 'medic') ? 'block' : 'none'};">
              <label>Speech Bubble Text</label>
              <textarea id="rbx-param-dialogue-text" class="rbx-inspector-textarea" rows="2" placeholder="e.g. Welcome to my obstacle course! Watch out for the lava tightrope!">${script.dialogueText || ''}</textarea>
            </div>

            <div id="rbx-param-coin" class="rbx-behavior-param-group" style="display: ${(script.behavior === 'coin_reward' || script.behavior === 'zombie') ? 'block' : 'none'};">
              <label>Coins to Award / Bounty</label>
              <input type="number" id="rbx-param-coin-amount" class="rbx-inspector-input" value="${script.coinAmount || 25}" min="1" max="1000" />
            </div>

            <div id="rbx-param-teleport" class="rbx-behavior-param-group" style="display: ${script.behavior === 'teleport' ? 'block' : 'none'};">
              <label>Target Coordinates (X, Y, Z)</label>
              <div style="display: flex; gap: 6px;">
                <input type="number" id="rbx-tp-x" class="rbx-inspector-input" placeholder="X" value="${script.teleportTarget?.x || 0}" />
                <input type="number" id="rbx-tp-y" class="rbx-inspector-input" placeholder="Y" value="${script.teleportTarget?.y || 4}" />
                <input type="number" id="rbx-tp-z" class="rbx-inspector-input" placeholder="Z" value="${script.teleportTarget?.z || 0}" />
              </div>
            </div>

            <div style="margin-top: 24px;">
              <button id="rbx-btn-delete-entity" class="rbx-btn-delete-entity">
                🗑️ Delete This ${isNPC ? 'Person' : 'Item'}
              </button>
            </div>
          </div>

          <!-- RIGHT PANEL: SCRIPT EDITOR -->
          <div class="rbx-inspector-right">
            <div class="rbx-script-editor-bar">
              <span class="rbx-script-tag">Roblox Script Engine</span>
              <div style="display: flex; gap: 8px;">
                <select id="rbx-script-template-select" class="rbx-inspector-select-mini">
                  <option value="">Insert Code Template...</option>
                  <option value="zombie_ai">🧟 Zombie Aggro AI</option>
                  <option value="medic">💉 Field Medic Healer</option>
                  <option value="quest">Quest & Coin Giver</option>
                  <option value="teleport">Checkpoint Teleport</option>
                  <option value="bounce">Launch Bouncer</option>
                  <option value="bobbing">Floating Bob Animation</option>
                </select>
                <button id="rbx-btn-test-script" class="rbx-btn-test-script">▶ Test Action</button>
              </div>
            </div>

            <div class="rbx-code-editor-container">
              <textarea id="rbx-custom-code" class="rbx-code-editor" spellcheck="false" placeholder="// Write custom JavaScript/Roblox logic here...">${script.customCode || this.getDefaultScriptTemplate()}</textarea>
            </div>

            <div class="rbx-api-cheat-sheet">
              <strong>Available Script APIs:</strong>
              <code>self.say("Hello!")</code> •
              <code>player.giveCoins(20)</code> •
              <code>player.teleport(x, y, z)</code> •
              <code>player.launch(30)</code> •
              <code>world.playSound('coin')</code> •
              <code>world.showToast(msg)</code>
            </div>
          </div>
        </div>

        <!-- FOOTER ACTIONS -->
        <div class="rbx-inspector-footer">
          <button class="rbx-btn-inspector-cancel" id="rbx-inspector-cancel-btn">Cancel</button>
          <button class="rbx-btn-inspector-save" id="rbx-inspector-save-btn">💾 Save Entity & Apply Code</button>
        </div>
      </div>
    `;
  }

  private getDefaultScriptTemplate(): string {
    return `// Custom Entity Script
// Available objects: self, player, world, dt

function onInteract(player) {
  self.say("Hello " + player.name + "! Welcome to Genesis!");
  world.playSound("coin");
  player.giveCoins(15);
}

function onTick(dt) {
  // Runs every frame
  // self.moveToward(player.position.x, player.position.z, 3.5);
}`;
  }

  private bindEvents(): void {
    const closeBtn = this.container.querySelector('#rbx-inspector-close-btn');
    const cancelBtn = this.container.querySelector('#rbx-inspector-cancel-btn');
    const saveBtn = this.container.querySelector('#rbx-inspector-save-btn');
    const deleteBtn = this.container.querySelector('#rbx-btn-delete-entity');
    const behaviorSelect = this.container.querySelector('#rbx-prop-behavior') as HTMLSelectElement;
    const templateSelect = this.container.querySelector('#rbx-script-template-select') as HTMLSelectElement;
    const testBtn = this.container.querySelector('#rbx-btn-test-script');
    const codeArea = this.container.querySelector('#rbx-custom-code') as HTMLTextAreaElement;

    closeBtn?.addEventListener('click', () => this.destroy());
    cancelBtn?.addEventListener('click', () => this.destroy());

    // Switch parameter groups based on behavior
    behaviorSelect?.addEventListener('change', () => {
      const b = behaviorSelect.value;
      const dlgGroup = this.container.querySelector('#rbx-param-dialogue') as HTMLElement;
      const coinGroup = this.container.querySelector('#rbx-param-coin') as HTMLElement;
      const tpGroup = this.container.querySelector('#rbx-param-teleport') as HTMLElement;
      const combatGroup = this.container.querySelector('#rbx-param-combat') as HTMLElement;

      if (dlgGroup) dlgGroup.style.display = (b === 'dialogue' || b === 'medic') ? 'block' : 'none';
      if (coinGroup) coinGroup.style.display = (b === 'coin_reward' || b === 'zombie') ? 'block' : 'none';
      if (tpGroup) tpGroup.style.display = b === 'teleport' ? 'block' : 'none';
      if (combatGroup) combatGroup.style.display = (b === 'zombie' || b === 'guard') ? 'block' : 'none';
    });

    // Insert templates
    templateSelect?.addEventListener('change', () => {
      const val = templateSelect.value;
      if (val === 'zombie_ai') {
        codeArea.value = `// Zombie Aggro AI Script\nfunction onTick(dt) {\n  let dist = self.position.distanceTo(player.position);\n  if (dist < 25) {\n    self.lookAt(player.position.x, player.position.z);\n    self.moveToward(player.position.x, player.position.z, 6.5);\n    if (dist < 2.2) {\n      player.damage(12);\n      world.playSound("zombie_attack");\n    }\n  }\n}\n\nfunction onInteract(player) {\n  world.playSound("zombie_groan");\n  self.say("Grrrrrr... BRAINS!");\n}`;
      } else if (val === 'medic') {
        codeArea.value = `// Field Medic Healer Script\nfunction onInteract(player) {\n  player.heal(100);\n  world.playSound("heal");\n  self.say("Medkit administered! You are back at full 100 HP!");\n  world.showToast("💚 Fully restored to 100 HP!");\n}`;
      } else if (val === 'quest') {
        codeArea.value = `function onInteract(player) {\n  self.say("Pioneer! Take these coins for your bravery!");\n  world.playSound("coin");\n  player.giveCoins(50);\n  world.showToast("⭐ Quest completed: +50 Coins!");\n}`;
      } else if (val === 'teleport') {
        codeArea.value = `function onInteract(player) {\n  self.say("Warping you forward!");\n  world.playSound("bounce");\n  player.teleport(0, 14, 25);\n}`;
      } else if (val === 'bounce') {
        codeArea.value = `function onInteract(player) {\n  world.playSound("bounce");\n  player.launch(32);\n  world.showToast("🚀 Super Launch!");\n}`;
      } else if (val === 'bobbing') {
        codeArea.value = `let t = 0;\nfunction onTick(dt) {\n  t += dt;\n  self.position.y += Math.sin(t * 3) * 0.02;\n}`;
      }
      templateSelect.value = '';
    });

    // Test button
    testBtn?.addEventListener('click', () => {
      if (this.options.onTestScript) {
        const temp = this.collectUpdatedEntity();
        this.options.onTestScript(temp);
      }
    });

    // Delete
    deleteBtn?.addEventListener('click', () => {
      if (confirm(`Delete ${this.options.entity.name}?`)) {
        this.options.onDelete(this.options.entity.id);
        this.destroy();
      }
    });

    // Save
    saveBtn?.addEventListener('click', () => {
      const updated = this.collectUpdatedEntity();
      this.options.onSave(updated);
      this.destroy();
    });
  }

  private collectUpdatedEntity(): ScriptedEntity {
    const e = this.options.entity;
    const nameInput = this.container.querySelector('#rbx-prop-name') as HTMLInputElement;
    const behaviorSelect = this.container.querySelector('#rbx-prop-behavior') as HTMLSelectElement;
    const dialogueInput = this.container.querySelector('#rbx-param-dialogue-text') as HTMLTextAreaElement;
    const coinInput = this.container.querySelector('#rbx-param-coin-amount') as HTMLInputElement;
    const healthInput = this.container.querySelector('#rbx-param-health') as HTMLInputElement;
    const damageInput = this.container.querySelector('#rbx-param-damage') as HTMLInputElement;
    const speedInput = this.container.querySelector('#rbx-param-speed') as HTMLInputElement;
    const rangeInput = this.container.querySelector('#rbx-param-range') as HTMLInputElement;
    const tpX = this.container.querySelector('#rbx-tp-x') as HTMLInputElement;
    const tpY = this.container.querySelector('#rbx-tp-y') as HTMLInputElement;
    const tpZ = this.container.querySelector('#rbx-tp-z') as HTMLInputElement;
    const codeArea = this.container.querySelector('#rbx-custom-code') as HTMLTextAreaElement;
    const shirtSelect = this.container.querySelector('#rbx-prop-shirt') as HTMLSelectElement;
    const hatSelect = this.container.querySelector('#rbx-prop-hat') as HTMLSelectElement;
    const itemTypeSelect = this.container.querySelector('#rbx-prop-itemtype') as HTMLSelectElement;

    const behavior = (behaviorSelect?.value || 'dialogue') as ScriptBehavior;

    const updatedAvatarConfig = e.avatarConfig ? {
      ...e.avatarConfig,
      equippedShirt: shirtSelect ? shirtSelect.value : e.avatarConfig.equippedShirt,
      equippedHat: hatSelect ? hatSelect.value : e.avatarConfig.equippedHat
    } : undefined;

    const hp = healthInput ? parseInt(healthInput.value, 10) || 60 : 60;

    return {
      ...e,
      name: nameInput?.value.trim() || e.name,
      itemType: itemTypeSelect ? itemTypeSelect.value : e.itemType,
      avatarConfig: updatedAvatarConfig,
      script: {
        behavior,
        dialogueText: dialogueInput?.value.trim() || undefined,
        coinAmount: coinInput ? parseInt(coinInput.value, 10) || 20 : undefined,
        health: hp,
        maxHealth: hp,
        damageAmount: damageInput ? parseInt(damageInput.value, 10) || 12 : undefined,
        moveSpeed: speedInput ? parseFloat(speedInput.value) || 6 : undefined,
        detectionRange: rangeInput ? parseFloat(rangeInput.value) || 24 : undefined,
        teleportTarget: (tpX && tpY && tpZ) ? {
          x: parseFloat(tpX.value) || 0,
          y: parseFloat(tpY.value) || 4,
          z: parseFloat(tpZ.value) || 0
        } : undefined,
        customCode: codeArea?.value.trim() || undefined
      }
    };
  }

  public destroy(): void {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    this.options.onClose();
  }
}
