export class AuthManager {
  private static USER_KEY = 'genesis_current_user';

  static getCurrentUser(): string | null {
    try {
      return localStorage.getItem(this.USER_KEY);
    } catch {
      return null;
    }
  }

  static setCurrentUser(username: string): void {
    try {
      localStorage.setItem(this.USER_KEY, username);
    } catch {}
  }

  static logout(): void {
    try {
      localStorage.removeItem(this.USER_KEY);
    } catch {}
  }
}
