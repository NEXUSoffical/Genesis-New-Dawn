import { supabase } from '../backend/supabase';

export class AuthManager {
  static async getCurrentUser(): Promise<string | null> {
    const { data: { session } } = await supabase.auth.getSession();
    return session?.user?.email || null;
  }

  static async logout(): Promise<void> {
    await supabase.auth.signOut();
  }
}
