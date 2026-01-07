import { top_element } from "./../page/main.js";
/** 指定したクラス名の要素を取得するヘルパー関数 */
export function getFieldElement(taskEl, field) {
    const el = taskEl.querySelector(`.${field}`);
    if (!el)
        throw new Error('not found className');
    return el;
}
/** クリックイベントから指定したクラス名の要素を取得するヘルパー関数 */
export function clickedGetElement(ev, clickClass) {
    let el = null;
    for (const element of ev.composedPath()) {
        if (element instanceof HTMLElement && element.classList.contains(clickClass)) {
            el = element;
            break;
        }
    }
    return el;
}
/** Visible Task Update */
export function updateVisible(app) {
    const data = app.getVisibledTask({
        isDone: top_element.statusFilter.value === "checked",
        keyword: top_element.searchText.value,
        sortBy: top_element.field.value,
        sorttype: top_element.order.value
    });
    // console.log(app,data);
    return app.getVisibledTask({
        isDone: top_element.statusFilter.value === "checked",
        keyword: top_element.searchText.value,
        sortBy: top_element.field.value,
        sorttype: top_element.order.value
    });
}
// タスクの優先度に応じたボーダーカラーを返す関数
export function taskBorderColor(priority) {
    // console.log(priority);
    switch (priority) {
        case "high":
            return "border-red-400 dark:border-red-600";
        case "medium":
            return "border-yellow-400 dark:border-yellow-600";
        case "low":
            return "border-green-400 dark:border-green-600";
        default:
            return "border-slate-200 dark:border-white/10";
    }
}
//# sourceMappingURL=dom-utils.js.map