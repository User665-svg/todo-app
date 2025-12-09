// 汎用的に「なんでも」読める read
export function read(key, defaultValue) {
    const data = localStorage.getItem(key);
    if (!data)
        return defaultValue;
    try {
        return JSON.parse(data);
    }
    catch (e) {
        console.error(`localStorage "${key}" の JSON パースに失敗`, e);
        return defaultValue;
    }
}
// export function add<T>(key: string, value: T): void {
//   const data = read<T[]>(key, []);
//   data.push(value);
//   write<T[]>(key, data);
// }
// export function edit<T>(key: string, index: number, value: T): void {
//   const data = read<T[]>(key, []);
//   if (index < 0 || index >= data.length) {
//     throw new Error(`Index out of range: index=${index}, length=${data.length}`);
//   }
//   data[index] = value;
//   write<T[]>(key, data);
// }
// 汎用の write
export function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
//# sourceMappingURL=localStorage.js.map