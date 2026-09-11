import { supabase } from '../backend/supabase';

export class AuthManager {
  private static cachedUser: string | null = null;

  static async getCurrentUser(): Promise<string | null> {
    const { data: { session } } = await supabase.auth.getSession();
    this.cachedUser = session?.user?.email || null;
    return this.cachedUser;
  }

  static getCachedUser(): string | null {
    return this.cachedUser;
  }

  static async logout(): Promise<void> {
    this.cachedUser = null;
    await supabase.auth.signOut();
  }
}
