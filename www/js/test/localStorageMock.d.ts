export declare class LocalStorageMock implements Storage {
    private store;
    get length(): number;
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
    /** JSON を自動で stringify して保存（テストで初期値入れる用） */
    setJSON(key: string, value: unknown): void;
    /** JSON を parse して取得（デバッグ用） */
    getJSON<T>(key: string): T | null;
}
//# sourceMappingURL=localStorageMock.d.ts.map