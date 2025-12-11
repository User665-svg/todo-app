// localStorageMock.ts
export class LocalStorageMock implements Storage {
  private store: Record<string, string> = {};

  get length(): number {
    return Object.keys(this.store).length;
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    if (this.store[key] === undefined) {return null}
    return Object.prototype.hasOwnProperty.call(this.store, key)
      ? this.store[key]
      : null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return keys[index] ?? null;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = String(value);
  }

  // ===== 便利メソッド（テスト用） =====

  /** JSON を自動で stringify して保存（テストで初期値入れる用） */
  setJSON(key: string, value: unknown): void {
    this.setItem(key, JSON.stringify(value));
  }

  /** JSON を parse して取得（デバッグ用） */
  getJSON<T>(key: string): T | null {
    const raw = this.getItem(key);
    if (!raw) return null;

    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  }
}
