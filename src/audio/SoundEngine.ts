import { WorldManager } from '../simulation/World';
import { Animal } from '../simulation/types';

export class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;

  // Ambient nodes
  private windGain: GainNode | null = null;
  private rainGain: GainNode | null = null;
  private campfireGain: GainNode | null = null;
  private nightCricketsGain: GainNode | null = null;

  // Timers for ambient random events
  private birdTimer: number = 3.0;
  private animalSoundTimer: number = 6.0;

  constructor() {
    // AudioContext will be initialized on first user interaction or toggle
  }

  public init(): void {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.setupWindAmbient();
      this.setupRainAmbient();
      this.setupCampfireAmbient();
      // this.setupNightCricketsAmbient(); // Muted: sounds like an annoying beep
    } catch (err) {
      console.warn('Web Audio API not supported or blocked:', err);
    }
  }

  public toggleMute(): boolean {
    this.init();
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      const targetGain = this.isMuted ? 0.0 : 0.35;
      this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.1);
    }
    return !this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  // --- AMBIENT SOUND GENERATORS ---

  // 1. Wind & Foliage Ambient
  private setupWindAmbient(): void {
    if (!this.ctx || !this.masterGain) return;

    // Generate 4 seconds of brown/pink noise
    const bufferSize = this.ctx.sampleRate * 4;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      // Brown noise integration
      lastOut = (lastOut + 0.02 * white) / 1.02;
      data[i] = lastOut * 3.5;
    }

    const noiseSource = this.ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    // Filter to sound like wind blowing through tree leaves
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    // LFO to create undulating wind gusts
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.18, this.ctx.currentTime);
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(0.14, this.ctx.currentTime);

    noiseSource.connect(filter);
    filter.connect(this.windGain);
    this.windGain.connect(this.masterGain);
    noiseSource.start();
  }

  // 2. Rain Ambient
  private setupRainAmbient(): void {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = this.ctx.sampleRate * 3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const rainSource = this.ctx.createBufferSource();
    rainSource.buffer = buffer;
    rainSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(950, this.ctx.currentTime);
    filter.Q.setValueAtTime(0.8, this.ctx.currentTime);

    this.rainGain = this.ctx.createGain();
    this.rainGain.gain.setValueAtTime(0.0, this.ctx.currentTime); // Controlled by weather

    rainSource.connect(filter);
    filter.connect(this.rainGain);
    this.rainGain.connect(this.masterGain);
    rainSource.start();
  }

  // 3. Campfire Hearth Ambient
  private setupCampfireAmbient(): void {
    if (!this.ctx || !this.masterGain) return;

    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Fire crackle: mostly low rumbling noise with occasional high-amplitude sharp pops
      const isPop = Math.random() < 0.003;
      data[i] = isPop ? (Math.random() * 2 - 1) * 2.0 : (Math.random() * 0.2 - 0.1);
    }

    const fireSource = this.ctx.createBufferSource();
    fireSource.buffer = buffer;
    fireSource.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, this.ctx.currentTime);

    this.campfireGain = this.ctx.createGain();
    this.campfireGain.gain.setValueAtTime(0.0, this.ctx.currentTime); // Fade in when near campfire

    fireSource.connect(filter);
    filter.connect(this.campfireGain);
    this.campfireGain.connect(this.masterGain);
    fireSource.start();
  }

  // 4. Night Crickets Ambient
  private setupNightCricketsAmbient(): void {
    if (!this.ctx || !this.masterGain) return;

    const cricketOsc = this.ctx.createOscillator();
    cricketOsc.type = 'sine';
    cricketOsc.frequency.setValueAtTime(4500, this.ctx.currentTime);

    // Amplitude modulation for rhythmic cricket chirps
    const modOsc = this.ctx.createOscillator();
    modOsc.frequency.setValueAtTime(5.5, this.ctx.currentTime); // 5.5 Hz pulses
    const modGain = this.ctx.createGain();
    modGain.gain.setValueAtTime(0.5, this.ctx.currentTime);
    modOsc.connect(modGain.gain);

    this.nightCricketsGain = this.ctx.createGain();
    this.nightCricketsGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    cricketOsc.connect(modGain);
    modGain.connect(this.nightCricketsGain);
    this.nightCricketsGain.connect(this.masterGain);

    cricketOsc.start();
    modOsc.start();
  }

  // --- FRAME UPDATE FOR DYNAMIC AMBIENCE ---
  public update(world: WorldManager, cameraX: number, cameraY: number, deltaSec: number, animals: Animal[] = []): void {
    if (!this.ctx || this.isMuted) return;

    const now = this.ctx.currentTime;
    const time = world.timeOfDay;
    const isNight = time >= 20.5 || time < 5.5;
    const isDawn = time >= 5.5 && time < 9.0;
    const isDay = time >= 9.0 && time < 19.5;

    // 1. Weather: Rain sound
    if (this.rainGain) {
      const targetRain = world.weather === 'Rain' ? 0.22 : 0.0;
      this.rainGain.gain.setTargetAtTime(targetRain, now, 0.4);
    }

    // 1b. Seasonal Wind / Winter Blizzard
    if (this.windGain) {
      const isBlizzard = world.season === 'Winter' || world.temperatureCelsius < 0;
      const targetWind = isBlizzard ? 0.28 : (world.weather === 'Rain' ? 0.20 : 0.12);
      this.windGain.gain.setTargetAtTime(targetWind, now, 0.5);
    }

    // 2. Night Crickets
    if (this.nightCricketsGain) {
      const targetCrickets = (isNight && world.weather !== 'Rain') ? 0.05 : 0.0;
      this.nightCricketsGain.gain.setTargetAtTime(targetCrickets, now, 0.5);
    }

    // 3. Campfire Proximity
    if (this.campfireGain) {
      let nearestDist = 999;
      for (const b of world.buildings.values()) {
        if (b.type === 'campfire' && b.isCompleted) {
          const d = Math.hypot(b.x - cameraX, b.y - cameraY);
          if (d < nearestDist) nearestDist = d;
        }
      }
      // Audibility within 10 tiles of camera
      const fireVol = nearestDist < 10 ? Math.max(0, (1 - nearestDist / 10) * 0.25) : 0.0;
      this.campfireGain.gain.setTargetAtTime(fireVol, now, 0.3);
    }

    // 4. Dawn and Day Bird Chirps
    if ((isDawn || isDay) && world.weather !== 'Rain') {
      this.birdTimer -= deltaSec;
      if (this.birdTimer <= 0) {
        this.playBirdChirp();
        this.birdTimer = 4.0 + Math.random() * 8.0; // every 4-12 seconds
      }
    }

    // 5. Ambient Animal Calls (Distant wolf howl at night, sheep bleat, dog bark)
    this.animalSoundTimer -= deltaSec;
    if (this.animalSoundTimer <= 0) {
      this.animalSoundTimer = 8.0 + Math.random() * 14.0;
      this.triggerAmbientAnimalCall(animals, isNight);
    }
  }

  private triggerAmbientAnimalCall(animals: Animal[], isNight: boolean): void {
    if (animals.length === 0) return;

    if (isNight) {
      // Chance of a distant wolf howling under the moon
      const hasWolf = animals.some((a) => a.species === 'wolf' && !a.isDomesticated);
      if (hasWolf && Math.random() < 0.65) {
        this.playWolfHowl();
        return;
      }
    }

    // Pick random nearby animal to vocalize
    const rAnimal = animals[Math.floor(Math.random() * animals.length)];
    if (!rAnimal) return;

    if (rAnimal.species === 'dog') {
      this.playDogBark();
    } else if (rAnimal.species === 'sheep') {
      this.playSheepBaa();
    } else if (rAnimal.species === 'deer') {
      this.playDeerCall();
    }
  }

  // --- PROCEDURAL SOUND EFFECTS ---

  // 🐦 Sweet Melodic Bird Chirp
  public playBirdChirp(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    const baseFreq = 2600 + Math.random() * 800;

    // Upward pitch swoop
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 200, now + 0.16);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.06, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // 🐺 Haunting Forest Wolf Howl
  public playWolfHowl(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    // Deep haunting pitch curve
    osc.frequency.setValueAtTime(220, now); // A3
    osc.frequency.exponentialRampToValueAtTime(330, now + 0.8); // Rise to E4
    osc.frequency.exponentialRampToValueAtTime(293, now + 1.8); // Settle to D4
    osc.frequency.exponentialRampToValueAtTime(180, now + 2.8); // Fade down

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.7);
    gain.gain.setTargetAtTime(0.001, now + 2.0, 0.4);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 3.0);
  }

  // 🐕 Cheerful Domestic Dog Bark
  public playDogBark(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    // Quick double bark
    const bark = (delay: number, pitchMod: number) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime + delay;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(360 * pitchMod, now);
      osc.frequency.exponentialRampToValueAtTime(140 * pitchMod, now + 0.12);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);

      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.15);
    };

    bark(0, 1.0);
    bark(0.18, 1.15);
  }

  // 🐑 Sheep Bleat (Baa)
  public playSheepBaa(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(185, now);

    // Formant vocal filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(700, now);
    filter.Q.setValueAtTime(3.0, now);

    // Vibrato
    const vib = this.ctx.createOscillator();
    vib.frequency.setValueAtTime(6.0, now);
    const vibGain = this.ctx.createGain();
    vibGain.gain.setValueAtTime(12, now);
    vib.connect(vibGain);
    vibGain.connect(osc.frequency);
    vib.start(now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.1);
    gain.gain.setTargetAtTime(0.001, now + 0.5, 0.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.9);
  }

  // 🦌 Breathy Deer Call
  public playDeerCall(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(135, now);
    osc.frequency.linearRampToValueAtTime(95, now + 0.4);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.05, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.5);
  }

  // 🪨 Sharp Flint Strike / Stone Percussion Click
  public playFlintStrike(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'square';
    osc.frequency.setValueAtTime(1900 + Math.random() * 400, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.07);
  }

  // 🪵 Woody Chop / Timber Thud
  public playWoodThud(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + 0.12);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.16);
  }

  // 🔥 Miraculous Fire Ignition Whoosh
  public playFireIgnite(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(80, now);
    osc.frequency.exponentialRampToValueAtTime(260, now + 0.3);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);

    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.12, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.75);
  }

  // 💍 Sacred Wedding Chime (Pure harmonic bell arpeggio)
  public playWeddingChime(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    const now = this.ctx.currentTime;

    notes.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const time = now + i * 0.12;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.12, time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.2);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 1.3);
    });
  }

  // 👶 Sweet Baby Birth Lullaby (Gentle celestial bell chord)
  public playBabyLullaby(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const notes = [659.25, 880.00, 1174.66]; // E5, A5, D6
    const now = this.ctx.currentTime;

    notes.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const time = now + i * 0.18;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.14, time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.6);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 1.7);
    });
  }

  // 🎶 Ancient Campfire Folk Melody (Warm pentatonic harp phrase)
  public playFolkMelody(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;

    const notes = [293.66, 369.99, 440.00, 493.88, 587.33]; // D4, F#4, A4, B4, D5
    const now = this.ctx.currentTime;

    notes.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const time = now + i * 0.28;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.12, time + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(time);
      osc.stop(time + 1.9);
    });
  }

  // 🐟 River Fishing Splash (Droplet and lively water ripple)
  public playRiverFishing(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Water droplet tone
    const dropOsc = this.ctx.createOscillator();
    const dropGain = this.ctx.createGain();
    dropOsc.type = 'sine';
    dropOsc.frequency.setValueAtTime(800, now);
    dropOsc.frequency.exponentialRampToValueAtTime(320, now + 0.16);

    dropGain.gain.setValueAtTime(0.18, now);
    dropGain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    dropOsc.connect(dropGain);
    dropGain.connect(this.masterGain);
    dropOsc.start(now);
    dropOsc.stop(now + 0.17);

    // Subtle splash noise
    const bufferSize = Math.floor(this.ctx.sampleRate * 0.2);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1400, now);
    filter.Q.setValueAtTime(2.5, now);

    const splashGain = this.ctx.createGain();
    splashGain.gain.setValueAtTime(0.14, now);
    splashGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

    noise.connect(filter);
    filter.connect(splashGain);
    splashGain.connect(this.masterGain);
    noise.start(now);
  }

  // 🐎 Rhythmic Equine Gallop (Clip-clop wooden hoofbeats)
  public playHorseGallop(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    [0, 0.12].forEach((offset) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const time = now + offset;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, time);
      osc.frequency.exponentialRampToValueAtTime(70, time + 0.06);

      gain.gain.setValueAtTime(0.18, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.07);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(time);
      osc.stop(time + 0.08);
    });
  }

  // 🪈 Ancient Bone Flute & Tribal Drum Solstice Melody
  public playSolsticeBoneFlute(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Pentatonic bone flute notes: G4, Bb4, C5, D5, F5, G5
    const notes = [392.00, 466.16, 523.25, 587.33, 698.46, 783.99];

    notes.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const time = now + idx * 0.26;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      // Soft vibrato
      const vibrato = this.ctx.createOscillator();
      const vGain = this.ctx.createGain();
      vibrato.frequency.setValueAtTime(5.5, time);
      vGain.gain.setValueAtTime(6.0, time);
      vibrato.connect(vGain);
      vGain.connect(osc.frequency);
      vibrato.start(time);
      vibrato.stop(time + 0.45);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.14, time + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.5);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(time);
      osc.stop(time + 0.52);

      // Warm hollow kettle drum thump on beat 0 and 3
      if (idx === 0 || idx === 3) {
        const drumOsc = this.ctx.createOscillator();
        const drumGain = this.ctx.createGain();
        drumOsc.type = 'sine';
        drumOsc.frequency.setValueAtTime(110, time);
        drumOsc.frequency.exponentialRampToValueAtTime(45, time + 0.25);

        drumGain.gain.setValueAtTime(0.22, time);
        drumGain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);

        drumOsc.connect(drumGain);
        drumGain.connect(this.masterGain);
        drumOsc.start(time);
        drumOsc.stop(time + 0.3);
      }
    });
  }

  // 📯 Majestic Sentinel Horn Call
  public playSentinelHorn(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const hornOsc = this.ctx.createOscillator();
    const hornGain = this.ctx.createGain();

    hornOsc.type = 'sawtooth';
    hornOsc.frequency.setValueAtTime(220, now);
    hornOsc.frequency.linearRampToValueAtTime(330, now + 0.2);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(650, now);

    hornGain.gain.setValueAtTime(0.01, now);
    hornGain.gain.linearRampToValueAtTime(0.18, now + 0.15);
    hornGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    hornOsc.connect(filter);
    filter.connect(hornGain);
    hornGain.connect(this.masterGain);
    hornOsc.start(now);
    hornOsc.stop(now + 1.3);
  }

  // 🛶 Rhythmic Boat Oar Rowing
  public playOarRowing(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    const bufferSize = Math.floor(this.ctx.sampleRate * 0.35);
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.sin((i / bufferSize) * Math.PI);
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);
  }

  // ✨ Uplifting Celestial Fanfare Chime on Pioneer Arrival
  public playPioneerSpawnChime(): void {
    if (!this.ctx || !this.masterGain || this.isMuted) return;
    const now = this.ctx.currentTime;

    // Arpeggio notes: C5 (523Hz), E5 (659Hz), G5 (784Hz), C6 (1046Hz)
    const chord = [523.25, 659.25, 783.99, 1046.50];
    chord.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const time = now + idx * 0.11;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(0.18, time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.7);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(time);
      osc.stop(time + 0.75);
    });
  }
}

