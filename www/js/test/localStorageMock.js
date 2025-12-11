// localStorageMock.ts
export class LocalStorageMock {
    constructor() {
        this.store = {};
    }
    get length() {
        return Object.keys(this.store).length;
    }
    clear() {
        this.store = {};
    }
    getItem(key) {
        if (this.store[key] === undefined) {
            return null;
        }
        return Object.prototype.hasOwnProperty.call(this.store, key)
            ? this.store[key]
            : null;
    }
    key(index) {
        var _a;
        const keys = Object.keys(this.store);
        return (_a = keys[index]) !== null && _a !== void 0 ? _a : null;
    }
    removeItem(key) {
        delete this.store[key];
    }
    setItem(key, value) {
        this.store[key] = String(value);
    }
    // ===== 便利メソッド（テスト用） =====
    /** JSON を自動で stringify して保存（テストで初期値入れる用） */
    setJSON(key, value) {
        this.setItem(key, JSON.stringify(value));
    }
    /** JSON を parse して取得（デバッグ用） */
    getJSON(key) {
        const raw = this.getItem(key);
        if (!raw)
            return null;
        try {
            return JSON.parse(raw);
        }
        catch (_a) {
            return null;
        }
    }
}
//# sourceMappingURL=localStorageMock.js.map