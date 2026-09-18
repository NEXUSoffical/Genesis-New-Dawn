import { WordToken, PartOfSpeech, DifficultyTier, ParsedSentence, StoryQuest } from '../types';
import { WORD_BANK, GrammarEngine } from '../engine/GrammarEngine';
import { lexiconSound } from '../audio/LexiconAudio';

export class SpellTablet {
  private container: HTMLElement;
  private activeTokens: WordToken[] = [];
  private currentTier: DifficultyTier = 'sprout';
  private currentQuest: StoryQuest | null = null;
  private activeTab: PartOfSpeech = 'noun';
  private hintIndex: number = 0;
  private onCastCallback: (parsed: ParsedSentence) => void;

  constructor(
    container: HTMLElement,
    onCast: (parsed: ParsedSentence) => void
  ) {
    this.container = container;
    this.onCastCallback = onCast;
  }

  public setTier(tier: DifficultyTier): void {
    this.currentTier = tier;
    this.render();
  }

  public setQuest(quest: StoryQuest | null): void {
    this.currentQuest = quest;
    this.hintIndex = 0;
    this.render();
  }

  public clear(): void {
    this.activeTokens = [];
    this.render();
  }

  public render(): void {
    const parsed = GrammarEngine.parse(this.activeTokens, this.currentTier);
    const availableWords = GrammarEngine.getWordTokensByPart(this.activeTab);

    this.container.innerHTML = `
      <div class="spell-tablet-layout">
        <!-- Story Quest Header / Banner -->
        ${this.renderQuestHeader()}

        <!-- Magical Sentence Slot Strip -->
        <div class="sentence-workbench-card">
          <div class="workbench-top">
            <span class="workbench-label">📜 Living Sentence Parchment</span>
            <div class="workbench-tools">
              <button class="tool-icon-btn" id="btn-read-aloud" title="Read Sentence Aloud" ${this.activeTokens.length === 0 ? 'disabled' : ''}>
                🔊 Listen
              </button>
              <button class="tool-icon-btn" id="btn-clear-sentence" title="Clear all words" ${this.activeTokens.length === 0 ? 'disabled' : ''}>
                🗑️ Clear
              </button>
            </div>
          </div>

          <!-- Active Sentence Strip -->
          <div class="sentence-slot-strip" id="sentence-strip">
            ${this.renderActiveTokens()}
          </div>

          <!-- Real-Time Grammar Helper Feedback -->
          <div class="grammar-feedback-bar ${parsed.isValid ? 'valid' : 'invalid'}">
            <span class="feedback-icon">${parsed.isValid ? '✨' : '💡'}</span>
            <span class="feedback-text">${parsed.isValid ? `Spell Ready: "${parsed.rawText}"` : (parsed.errorMessage || 'Add words to start!')}</span>
          </div>

          <!-- Cast Spell Primary Button -->
          <button class="cast-spell-btn ${parsed.isValid ? 'ready' : 'disabled'}" id="btn-cast-spell" ${!parsed.isValid ? 'disabled' : ''}>
            🪄 Cast Sentence Spell!
          </button>
        </div>

        <!-- Word Tile Bank -->
        <div class="word-bank-card">
          <!-- Part of Speech Category Tabs -->
          <div class="pos-tabs-row">
            <button class="pos-tab noun ${this.activeTab === 'noun' ? 'active' : ''}" data-pos="noun">
              🔷 Nouns (Things)
            </button>
            <button class="pos-tab adjective ${this.activeTab === 'adjective' ? 'active' : ''}" data-pos="adjective">
              🟣 Adjectives (Describe)
            </button>
            <button class="pos-tab verb ${this.activeTab === 'verb' ? 'active' : ''}" data-pos="verb">
              🟢 Verbs (Actions)
            </button>
            <button class="pos-tab preposition ${this.activeTab === 'preposition' ? 'active' : ''}" data-pos="preposition">
              🟠 Prepositions (Where)
            </button>
            <button class="pos-tab article ${this.activeTab === 'article' ? 'active' : ''}" data-pos="article">
              ⚪ Articles (The / A)
            </button>
          </div>

          <!-- Available Word Tiles in Selected Category -->
          <div class="word-tiles-palette">
            ${availableWords.map(w => `
              <button class="word-tile-btn pos-${w.partOfSpeech}" data-word-id="${w.id}" title="${w.definition}">
                <span class="tile-icon">${w.icon}</span>
                <span class="tile-text">${w.text}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.attachEventListeners(parsed);
  }

  private renderQuestHeader(): string {
    if (!this.currentQuest) return '';

    const q = this.currentQuest;
    return `
      <div class="quest-dialogue-banner">
        <div class="quest-npc-avatar" style="border-color: ${q.npcColor}">
          <span>${q.npcAvatar}</span>
        </div>
        <div class="quest-text-block">
          <div class="quest-title-row">
            <h4>${q.title}</h4>
            <span class="npc-role">${q.npcName} • ${q.npcTitle}</span>
          </div>
          <p class="quest-prompt">"${q.storyPrompt}"</p>
          <div class="quest-instruction-tag">
            🎯 <strong>Goal:</strong> ${q.challengeInstruction}
          </div>
          ${this.renderHintBlock()}
        </div>
        <button class="quest-hint-btn" id="btn-quest-hint">
          💡 Hint (${this.hintIndex}/${q.hintSteps.length})
        </button>
      </div>
    `;
  }

  private renderHintBlock(): string {
    if (!this.currentQuest || this.hintIndex === 0) return '';
    const steps = this.currentQuest.hintSteps.slice(0, this.hintIndex);
    return `
      <div class="quest-hints-active">
        ${steps.map((s, i) => `<span><strong>Step ${i + 1}:</strong> ${s}</span>`).join('<br>')}
      </div>
    `;
  }

  private renderActiveTokens(): string {
    if (this.activeTokens.length === 0) {
      return `<div class="empty-sentence-hint">Tap word tiles below to compose your living sentence spell!</div>`;
    }

    return this.activeTokens.map((t, idx) => `
      <div class="placed-word-token pos-${t.partOfSpeech}" data-token-idx="${idx}" title="Click to remove">
        <span class="token-pos-badge">${t.partOfSpeech}</span>
        <span class="token-main-text">${t.icon} ${t.text}</span>
        <span class="token-remove-x">×</span>
      </div>
    `).join('');
  }

  private attachEventListeners(parsed: ParsedSentence): void {
    // Word tile clicks in palette
    const tileBtns = this.container.querySelectorAll('.word-tile-btn');
    tileBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-word-id');
        if (id && WORD_BANK[id]) {
          this.activeTokens.push(WORD_BANK[id]);
          lexiconSound.playWordSnap();
          this.render();
        }
      });
    });

    // Remove token on tap
    const placedTokens = this.container.querySelectorAll('.placed-word-token');
    placedTokens.forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-token-idx') || '-1', 10);
        if (idx >= 0 && idx < this.activeTokens.length) {
          this.activeTokens.splice(idx, 1);
          lexiconSound.playWordRemove();
          this.render();
        }
      });
    });

    // POS Tab switching
    const posTabs = this.container.querySelectorAll('.pos-tab');
    posTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const pos = tab.getAttribute('data-pos') as PartOfSpeech;
        if (pos) {
          this.activeTab = pos;
          lexiconSound.playWordSnap();
          this.render();
        }
      });
    });

    // Clear button
    const clearBtn = this.container.querySelector('#btn-clear-sentence');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.clear();
        lexiconSound.playWordRemove();
      });
    }

    // Cast button
    const castBtn = this.container.querySelector('#btn-cast-spell');
    if (castBtn && parsed.isValid) {
      castBtn.addEventListener('click', () => {
        lexiconSound.playSpellCast();
        this.onCastCallback(parsed);
      });
    }

    // Listen / Read aloud button
    const listenBtn = this.container.querySelector('#btn-read-aloud');
    if (listenBtn && parsed.rawText) {
      listenBtn.addEventListener('click', () => {
        this.speakText(parsed.rawText);
      });
    }

    // Hint button
    const hintBtn = this.container.querySelector('#btn-quest-hint');
    if (hintBtn && this.currentQuest) {
      hintBtn.addEventListener('click', () => {
        if (this.hintIndex < this.currentQuest!.hintSteps.length) {
          this.hintIndex++;
          lexiconSound.playHintChime();
          this.render();
        }
      });
    }
  }

  private speakText(text: string): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.85; // Slightly slower, very clear for kids
      utterance.pitch = 1.1; // Friendly warm pitch
      window.speechSynthesis.speak(utterance);
    }
  }
}
