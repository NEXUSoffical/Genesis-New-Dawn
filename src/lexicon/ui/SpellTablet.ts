import { WordToken, GameMode, DifficultyTier, EntityAction } from '../types';
import { WORD_BANK, GrammarEngine } from '../engine/GrammarEngine';
import { lexiconSound } from '../audio/LexiconAudio';
import { IslandSimulation } from '../engine/IslandSimulation';

export class SpellTablet {
  private container: HTMLElement;
  private sim: IslandSimulation;
  private currentMode: GameMode = 'quests';
  private currentTier: DifficultyTier = 'sprout';
  private activePuzzleIndex: number = 0;
  private selectedNounId: string = 'rabbit';
  
  // Sentence builder selections
  private builderArticle: WordToken = WORD_BANK.the;
  private builderAdj: WordToken | null = WORD_BANK.fluffy;
  private builderNoun: WordToken = WORD_BANK.rabbit;
  private builderVerb: WordToken = WORD_BANK.hops;
  private builderPrep: WordToken | null = WORD_BANK.in_meadow;

  private onGemsAwarded?: (amount: number) => void;

  constructor(
    container: HTMLElement,
    sim: IslandSimulation,
    tier: DifficultyTier,
    onGemsAwarded?: (amount: number) => void
  ) {
    this.container = container;
    this.sim = sim;
    this.currentTier = tier;
    this.onGemsAwarded = onGemsAwarded;

    this.render();
  }

  public setTier(tier: DifficultyTier): void {
    this.currentTier = tier;
    this.activePuzzleIndex = 0;
    this.render();
  }

  public setMode(mode: GameMode): void {
    this.currentMode = mode;
    this.render();
  }

  public render(): void {
    this.container.innerHTML = `
      <div class="spell-tablet-card">
        <!-- Activity Mode Switcher -->
        <div class="mode-navigation-bar">
          <button class="mode-tab-btn ${this.currentMode === 'quests' ? 'active' : ''}" data-mode="quests">
            🎯 Story Quests
          </button>
          <button class="mode-tab-btn ${this.currentMode === 'actions' ? 'active' : ''}" data-mode="actions">
            ⚡ Action Verbs
          </button>
          <button class="mode-tab-btn ${this.currentMode === 'adjectives' ? 'active' : ''}" data-mode="adjectives">
            🎨 Adjective Lab
          </button>
          <button class="mode-tab-btn ${this.currentMode === 'builder' ? 'active' : ''}" data-mode="builder">
            📜 Sentence Builder
          </button>
        </div>

        <!-- Mode Content Deck -->
        <div class="mode-content-deck" id="mode-content-deck">
          ${this.renderCurrentModeContent()}
        </div>
      </div>
    `;

    this.attachEvents();
  }

  private renderCurrentModeContent(): string {
    switch (this.currentMode) {
      case 'quests':
        return this.renderQuestsMode();
      case 'actions':
        return this.renderActionsMode();
      case 'adjectives':
        return this.renderAdjectivesMode();
      case 'builder':
        return this.renderBuilderMode();
      default:
        return '';
    }
  }

  // =========================================================================
  // 1. STORY QUESTS (Fill in the Blank & Real Phonics Grammar Explanations)
  // =========================================================================
  private renderQuestsMode(): string {
    const puzzles = GrammarEngine.getPuzzlesForTier(this.currentTier);
    if (this.activePuzzleIndex >= puzzles.length) {
      this.activePuzzleIndex = 0;
    }
    const currentPuzzle = puzzles[this.activePuzzleIndex];
    if (!currentPuzzle) return '<div class="quest-done-card">All quests completed!</div>';

    // Mix correct answer with distractors
    const allOptions = [currentPuzzle.correctWord, ...currentPuzzle.distractors]
      .sort(() => 0.5 - Math.random());

    return `
      <div class="quest-activity-view">
        <div class="quest-header-pill">
          <span class="quest-num-tag">Quest ${this.activePuzzleIndex + 1} of ${puzzles.length}</span>
          <span class="quest-type-tag">Focus: ${currentPuzzle.targetPart.toUpperCase()}</span>
        </div>

        <h3 class="quest-prompt-title">${currentPuzzle.question}</h3>

        <div class="puzzle-sentence-card">
          <div class="sentence-fill-in">
            ${currentPuzzle.sentencePrompt.replace('_______', `<span class="blank-slot" id="puzzle-blank-slot">_______</span>`)}
          </div>
          <button class="speak-sentence-btn" id="btn-listen-prompt" title="Listen to sentence">
            🔊 Listen
          </button>
        </div>

        <div class="options-choice-grid">
          ${allOptions.map(opt => `
            <button class="word-choice-card" data-word-id="${opt.id}" data-correct="${opt.id === currentPuzzle.correctWord.id}">
              <span class="choice-icon">${opt.icon}</span>
              <span class="choice-text">${opt.text}</span>
              <span class="choice-tag ${opt.partOfSpeech}">${opt.partOfSpeech}</span>
            </button>
          `).join('')}
        </div>

        <!-- Feedback Drawer -->
        <div class="feedback-drawer" id="puzzle-feedback" style="display: none;">
          <div class="feedback-content">
            <span class="feedback-icon" id="feedback-icon">🎉</span>
            <div class="feedback-text">
              <h4 id="feedback-title">Great Job!</h4>
              <p id="feedback-desc"></p>
            </div>
          </div>
          <button class="next-puzzle-btn" id="btn-next-puzzle">Next Quest ➔</button>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 2. ACTION VERB PLAYGROUND (Direct Cause & Effect)
  // =========================================================================
  private renderActionsMode(): string {
    const characters = [
      { id: 'rabbit', name: 'Bunny', icon: '🐰' },
      { id: 'frog', name: 'Frog', icon: '🐸' },
      { id: 'dragon', name: 'Dragon', icon: '🐲' },
      { id: 'bear', name: 'Bear', icon: '🐻' }
    ];

    const actionVerbs: Array<{ id: EntityAction; name: string; icon: string; desc: string }> = [
      { id: 'hopping', name: 'Hops', icon: '🦘', desc: 'Boing! Leaps in the air' },
      { id: 'dancing', name: 'Dances', icon: '💃', desc: 'Wiggles to the rhythm' },
      { id: 'eating', name: 'Eats', icon: '🥕', desc: 'Munches yummy food' },
      { id: 'sleeping', name: 'Sleeps', icon: '💤', desc: 'Curls up for a nap' },
      { id: 'flying', name: 'Flies', icon: '🦅', desc: 'Glides across the sky' },
      { id: 'fire', name: 'Breathes Fire', icon: '🔥', desc: 'Roars warm flames' }
    ];

    return `
      <div class="actions-activity-view">
        <div class="grammar-lesson-banner">
          <span class="lesson-badge">⚡ Grammar Rule</span>
          <p><strong>VERBS</strong> are action words! They show what your creature is doing!</p>
        </div>

        <div class="selection-section">
          <h4 class="step-header">1. Pick a Friend:</h4>
          <div class="char-picker-row">
            ${characters.map(c => `
              <button class="char-pick-btn ${this.selectedNounId === c.id ? 'selected' : ''}" data-char-id="${c.id}">
                <span class="char-emoji">${c.icon}</span>
                <span class="char-name">${c.name}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="selection-section">
          <h4 class="step-header">2. Choose an Action (Verb):</h4>
          <div class="actions-grid">
            ${actionVerbs.map(v => `
              <button class="action-trigger-btn" data-action="${v.id}">
                <span class="action-icon">${v.icon}</span>
                <div class="action-info">
                  <span class="action-name">${v.name}</span>
                  <span class="action-desc">${v.desc}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 3. ADJECTIVE MAGIC LAB (Visual Transformations)
  // =========================================================================
  private renderAdjectivesMode(): string {
    const adjectives = [
      { id: 'radiant', name: 'Radiant', icon: '🌟', desc: 'Golden glowing light' },
      { id: 'frozen', name: 'Frozen', icon: '❄️', desc: 'Turned to cool ice' },
      { id: 'gigantic', name: 'Gigantic', icon: '🏔️', desc: 'Grows 3x huge!' },
      { id: 'tiny', name: 'Tiny', icon: '🐜', desc: 'Shrinks to mini size' },
      { id: 'rainbow', name: 'Rainbow', icon: '🌈', desc: 'Shifts all colors' },
      { id: 'happy', name: 'Happy', icon: '💖', desc: 'Full of love & joy' }
    ];

    return `
      <div class="adjectives-activity-view">
        <div class="grammar-lesson-banner">
          <span class="lesson-badge">🎨 Grammar Rule</span>
          <p><strong>ADJECTIVES</strong> are describing words! They tell us how things look, feel, or smell!</p>
        </div>

        <div class="selection-section">
          <h4 class="step-header">Tap an Adjective to change how your friend looks:</h4>
          <div class="adjectives-grid">
            ${adjectives.map(a => `
              <button class="adjective-trigger-btn" data-adj-id="${a.id}" data-adj-text="${a.name}">
                <span class="adj-icon">${a.icon}</span>
                <div class="adj-info">
                  <span class="adj-name">${a.name}</span>
                  <span class="adj-desc">${a.desc}</span>
                </div>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 4. GUIDED SENTENCE BUILDER (Mad Libs)
  // =========================================================================
  private renderBuilderMode(): string {
    return `
      <div class="builder-activity-view">
        <div class="grammar-lesson-banner">
          <span class="lesson-badge">📜 Sentence Craft</span>
          <p>Put words in order to make a complete story sentence!</p>
        </div>

        <!-- Live Sentence Display -->
        <div class="constructed-sentence-display">
          <span class="token-slot article">${this.builderArticle.text}</span>
          <span class="token-slot adjective">${this.builderAdj ? this.builderAdj.text : '...'}</span>
          <span class="token-slot noun">${this.builderNoun.text}</span>
          <span class="token-slot verb">${this.builderVerb.text}</span>
          <span class="token-slot prep">${this.builderPrep ? this.builderPrep.text : ''}</span>
          <span class="period">.</span>
        </div>

        <!-- Step-by-Step Selectors -->
        <div class="builder-columns-grid">
          <!-- Step 1: Who? (Noun) -->
          <div class="builder-col">
            <span class="col-title">1. Who? (Noun)</span>
            <div class="col-options">
              ${[WORD_BANK.rabbit, WORD_BANK.dragon, WORD_BANK.frog, WORD_BANK.bear].map(n => `
                <button class="token-chip ${this.builderNoun.id === n.id ? 'active' : ''}" data-type="noun" data-id="${n.id}">
                  ${n.icon} ${n.text}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Step 2: What kind? (Adjective) -->
          <div class="builder-col">
            <span class="col-title">2. What kind? (Adjective)</span>
            <div class="col-options">
              ${[WORD_BANK.fluffy, WORD_BANK.radiant, WORD_BANK.gigantic, WORD_BANK.tiny, WORD_BANK.rainbow].map(a => `
                <button class="token-chip ${this.builderAdj?.id === a.id ? 'active' : ''}" data-type="adj" data-id="${a.id}">
                  ${a.icon} ${a.text}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Step 3: Does what? (Verb) -->
          <div class="builder-col">
            <span class="col-title">3. Does what? (Verb)</span>
            <div class="col-options">
              ${[WORD_BANK.hops, WORD_BANK.dances, WORD_BANK.eats, WORD_BANK.flies, WORD_BANK.sleeps].map(v => `
                <button class="token-chip ${this.builderVerb.id === v.id ? 'active' : ''}" data-type="verb" data-id="${v.id}">
                  ${v.icon} ${v.text}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Step 4: Where? (Preposition) -->
          <div class="builder-col">
            <span class="col-title">4. Where? (Place)</span>
            <div class="col-options">
              ${[WORD_BANK.in_meadow, WORD_BANK.across_bridge, WORD_BANK.near_castle, WORD_BANK.under_tree].map(p => `
                <button class="token-chip ${this.builderPrep?.id === p.id ? 'active' : ''}" data-type="prep" data-id="${p.id}">
                  ${p.icon} ${p.text}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Perform Sentence Button -->
        <div class="perform-action-bar">
          <button class="perform-spell-btn" id="btn-perform-sentence">
            ✨ Listen & Cast Sentence Spell!
          </button>
        </div>
      </div>
    `;
  }

  private attachEvents(): void {
    // Mode tabs
    this.container.querySelectorAll('.mode-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const mode = target.getAttribute('data-mode') as GameMode;
        if (mode) {
          lexiconSound.playWordSnap();
          this.setMode(mode);
        }
      });
    });

    // Quests Mode Events
    if (this.currentMode === 'quests') {
      const puzzles = GrammarEngine.getPuzzlesForTier(this.currentTier);
      const puzzle = puzzles[this.activePuzzleIndex];

      // Listen button
      const listenBtn = this.container.querySelector('#btn-listen-prompt');
      listenBtn?.addEventListener('click', () => {
        if (puzzle) {
          lexiconSound.speak(puzzle.sentencePrompt.replace('_______', 'blank'));
        }
      });

      // Word options
      this.container.querySelectorAll('.word-choice-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const card = e.currentTarget as HTMLElement;
          const isCorrect = card.getAttribute('data-correct') === 'true';
          const blankSlot = this.container.querySelector('#puzzle-blank-slot');
          const feedbackDrawer = this.container.querySelector('#puzzle-feedback') as HTMLElement;
          const feedbackDesc = this.container.querySelector('#feedback-desc');
          const feedbackTitle = this.container.querySelector('#feedback-title');
          const feedbackIcon = this.container.querySelector('#feedback-icon');

          if (isCorrect) {
            lexiconSound.playSuccess();
            card.classList.add('correct');
            if (blankSlot) {
              blankSlot.textContent = puzzle.correctWord.text;
              blankSlot.classList.add('filled');
            }

            // Trigger visual reward on island!
            const ent = this.sim.spawnCreature(
              puzzle.visualReward.nounId,
              puzzle.visualReward.nounId === 'rabbit' ? 'Bunny' : puzzle.visualReward.nounId === 'dragon' ? 'Dragon' : 'Bear',
              puzzle.visualReward.nounId === 'rabbit' ? '🐰' : puzzle.visualReward.nounId === 'dragon' ? '🐲' : '🐻',
              puzzle.visualReward.targetLocation
            );
            this.sim.triggerAction(puzzle.visualReward.action, ent.id);

            // Audio phonics explanation
            lexiconSound.speak(puzzle.explanation);

            if (feedbackDrawer && feedbackDesc && feedbackTitle && feedbackIcon) {
              feedbackDrawer.style.display = 'flex';
              feedbackTitle.textContent = '🌟 Brilliant Grammar!';
              feedbackDesc.textContent = puzzle.explanation;
              feedbackIcon.textContent = '🎉';
            }

            if (this.onGemsAwarded) {
              this.onGemsAwarded(10);
            }
          } else {
            lexiconSound.playTryAgain();
            card.classList.add('incorrect');
            lexiconSound.speak('Not quite. Try another word!');
            setTimeout(() => {
              card.classList.remove('incorrect');
            }, 800);
          }
        });
      });

      // Next puzzle button
      const nextBtn = this.container.querySelector('#btn-next-puzzle');
      nextBtn?.addEventListener('click', () => {
        lexiconSound.playWordSnap();
        this.activePuzzleIndex = (this.activePuzzleIndex + 1) % puzzles.length;
        this.render();
      });
    }

    // Actions Mode Events
    if (this.currentMode === 'actions') {
      // Pick character
      this.container.querySelectorAll('.char-pick-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = e.currentTarget as HTMLElement;
          const charId = target.getAttribute('data-char-id')!;
          this.selectedNounId = charId;
          lexiconSound.playWordSnap();

          const nameMap: Record<string, { name: string; icon: string }> = {
            rabbit: { name: 'Bunny', icon: '🐰' },
            frog: { name: 'Frog', icon: '🐸' },
            dragon: { name: 'Dragon', icon: '🐲' },
            bear: { name: 'Bear', icon: '🐻' }
          };
          const info = nameMap[charId] || { name: 'Friend', icon: '🐾' };
          this.sim.spawnCreature(charId, info.name, info.icon, 'meadow');
          lexiconSound.speak(info.name);
          this.render();
        });
      });

      // Trigger action verb
      this.container.querySelectorAll('.action-trigger-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = e.currentTarget as HTMLElement;
          const action = target.getAttribute('data-action') as EntityAction;
          if (action) {
            // Speak educational explanation
            lexiconSound.speak(`${action}! That is an action verb!`);
            this.sim.triggerAction(action);
          }
        });
      });
    }

    // Adjectives Mode Events
    if (this.currentMode === 'adjectives') {
      this.container.querySelectorAll('.adjective-trigger-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = e.currentTarget as HTMLElement;
          const adjId = target.getAttribute('data-adj-id')!;
          const adjText = target.getAttribute('data-adj-text')!;

          lexiconSound.speak(`${adjText}! An adjective describes how it looks!`);
          this.sim.applyAdjective(adjId, adjText);
        });
      });
    }

    // Sentence Builder Mode Events
    if (this.currentMode === 'builder') {
      this.container.querySelectorAll('.token-chip').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const target = e.currentTarget as HTMLElement;
          const type = target.getAttribute('data-type');
          const id = target.getAttribute('data-id')!;
          const word = WORD_BANK[id];

          if (word) {
            lexiconSound.playWordSnap();
            lexiconSound.speak(word.text);

            if (type === 'noun') this.builderNoun = word;
            if (type === 'adj') this.builderAdj = word;
            if (type === 'verb') this.builderVerb = word;
            if (type === 'prep') this.builderPrep = word;

            this.render();
          }
        });
      });

      // Perform full sentence
      const performBtn = this.container.querySelector('#btn-perform-sentence');
      performBtn?.addEventListener('click', () => {
        const fullSentence = `${this.builderArticle.text} ${this.builderAdj ? this.builderAdj.text + ' ' : ''}${this.builderNoun.text} ${this.builderVerb.text} ${this.builderPrep ? this.builderPrep.text : ''}.`;

        // 1. Speak sentence aloud with clear pronunciation
        lexiconSound.speak(fullSentence);

        // 2. Spawn creature on island
        let loc: 'meadow' | 'bridge' | 'castle' | 'river' | 'tree' = 'meadow';
        if (this.builderPrep?.id === 'across_bridge') loc = 'bridge';
        if (this.builderPrep?.id === 'near_castle') loc = 'castle';
        if (this.builderPrep?.id === 'under_tree') loc = 'tree';

        const ent = this.sim.spawnCreature(this.builderNoun.id, this.builderNoun.text, this.builderNoun.icon, loc);

        // 3. Apply adjective if selected
        if (this.builderAdj) {
          this.sim.applyAdjective(this.builderAdj.id, this.builderAdj.text, ent.id);
        }

        // 4. Trigger action verb
        const actionMap: Record<string, EntityAction> = {
          hops: 'hopping',
          dances: 'dancing',
          eats: 'eating',
          sleeps: 'sleeping',
          flies: 'flying'
        };
        const act = actionMap[this.builderVerb.id] || 'idle';
        setTimeout(() => {
          this.sim.triggerAction(act, ent.id);
        }, 600);

        if (this.onGemsAwarded) {
          this.onGemsAwarded(15);
        }
      });
    }
  }
}
