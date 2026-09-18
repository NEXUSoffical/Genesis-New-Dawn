import { supabase } from '../backend/supabase';
import { UserProfile, XpEvent, calculateXpForLevel, getTitleForLevel } from './types';

type XpListener = (event: XpEvent) => void;
type AuthListener = (profile: UserProfile | null) => void;

export class ProfileManager {
  private static instance: ProfileManager | null = null;
  private currentProfile: UserProfile | null = null;
  private xpListeners: XpListener[] = [];
  private authListeners: AuthListener[] = [];
  private isInitialized: boolean = false;

  private constructor() {}

  public static getInstance(): ProfileManager {
    if (!ProfileManager.instance) {
      ProfileManager.instance = new ProfileManager();
    }
    return ProfileManager.instance;
  }

  public async init(): Promise<UserProfile | null> {
    if (this.isInitialized && this.currentProfile) {
      return this.currentProfile;
    }

    // Check active Supabase session
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        this.loadProfileForUser(session.user.id, session.user.email || 'pioneer@genesis.io');
      } else {
        this.currentProfile = null;
      }
    } catch (err) {
      console.error('Failed to get Supabase auth session:', err);
      this.currentProfile = null;
    }

    // Listen to Supabase auth state changes
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        this.loadProfileForUser(session.user.id, session.user.email || 'pioneer@genesis.io');
      } else {
        this.currentProfile = null;
        this.notifyAuthListeners();
      }
    });

    this.isInitialized = true;
    return this.currentProfile;
  }

  private loadProfileForUser(userId: string, email: string): void {
    const storageKey = `genesis_profile_${userId}`;
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      try {
        this.currentProfile = JSON.parse(saved);
        // Ensure values are numbers
        if (this.currentProfile) {
          this.currentProfile.level = this.currentProfile.level || 1;
          this.currentProfile.currentXp = this.currentProfile.currentXp || 0;
          this.currentProfile.xpToNextLevel = calculateXpForLevel(this.currentProfile.level);
          this.currentProfile.title = getTitleForLevel(this.currentProfile.level);
        }
      } catch {
        this.currentProfile = this.createDefaultProfile(userId, email);
      }
    } else {
      this.currentProfile = this.createDefaultProfile(userId, email);
    }

    this.save();
    this.notifyAuthListeners();
  }

  private createDefaultProfile(userId: string, email: string): UserProfile {
    const username = email.split('@')[0] || 'GenesisPioneer';
    return {
      id: userId,
      email,
      username: username.charAt(0).toUpperCase() + username.slice(1),
      level: 1,
      currentXp: 0,
      xpToNextLevel: calculateXpForLevel(1),
      totalXp: 0,
      title: getTitleForLevel(1),
      stats: {
        gamesPlayed: 0,
        abyssGenerations: 0,
        genesisEra: 'Stone Age',
        playtimeMinutes: 0
      }
    };
  }

  public save(): void {
    if (!this.currentProfile) return;
    localStorage.setItem(`genesis_profile_${this.currentProfile.id}`, JSON.stringify(this.currentProfile));
    // Also store last active profile key for fast retrieval
    localStorage.setItem('genesis_last_active_user', this.currentProfile.id);
  }

  public getProfile(): UserProfile | null {
    return this.currentProfile;
  }

  public isAuthenticated(): boolean {
    return this.currentProfile !== null;
  }

  public addXP(amount: number, reason: string, game: string): XpEvent | null {
    if (!this.currentProfile) {
      // Must have an account to earn XP
      return null;
    }

    this.currentProfile.currentXp += amount;
    this.currentProfile.totalXp += amount;

    let leveledUp = false;

    // Check level-up threshold
    while (this.currentProfile.currentXp >= this.currentProfile.xpToNextLevel) {
      this.currentProfile.currentXp -= this.currentProfile.xpToNextLevel;
      this.currentProfile.level++;
      this.currentProfile.xpToNextLevel = calculateXpForLevel(this.currentProfile.level);
      this.currentProfile.title = getTitleForLevel(this.currentProfile.level);
      leveledUp = true;
    }

    this.save();

    const event: XpEvent = {
      amount,
      reason,
      game,
      leveledUp,
      newLevel: leveledUp ? this.currentProfile.level : undefined,
      newTitle: leveledUp ? this.currentProfile.title : undefined
    };

    // Notify listeners
    this.xpListeners.forEach(listener => listener(event));
    if (leveledUp) {
      this.notifyAuthListeners();
    }

    return event;
  }

  public async logout(): Promise<void> {
    await supabase.auth.signOut();
    this.currentProfile = null;
    localStorage.removeItem('genesis_last_active_user');
    this.notifyAuthListeners();
  }

  public onXp(listener: XpListener): () => void {
    this.xpListeners.push(listener);
    return () => {
      this.xpListeners = this.xpListeners.filter(l => l !== listener);
    };
  }

  public onAuth(listener: AuthListener): () => void {
    this.authListeners.push(listener);
    // Trigger immediately with current state
    listener(this.currentProfile);
    return () => {
      this.authListeners = this.authListeners.filter(l => l !== listener);
    };
  }

  private notifyAuthListeners(): void {
    this.authListeners.forEach(listener => listener(this.currentProfile));
  }
}
