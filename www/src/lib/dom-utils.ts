import { top_element } from "./../page/main.js";
import type { SortField, SortOrder, TaskPriority, TasksMap } from "./type.js";
import type { TaskUseCase } from "../usecase.js";
/** 指定したクラス名の要素を取得するヘルパー関数 */
export function getFieldElement(taskEl:DocumentFragment,field:string) {
    const el = taskEl.querySelector(`.${field}`) as HTMLElement | null;
    if (!el) throw new Error('not found className');
    return el;
  }

/** クリックイベントから指定したクラス名の要素を取得するヘルパー関数 */
export function clickedGetElement(ev:PointerEvent,clickClass:string):HTMLElement|null{
  let el: HTMLElement | null = null;
  for (const element of ev.composedPath()) {
      if (element instanceof HTMLElement && element.classList.contains(clickClass)) {
          el = element;
          break; 
      }
  }
  return el;
}

/** Visible Task Update */
export function updateVisible(app:TaskUseCase):TasksMap{
    const data = app.getVisibledTask({
        isDone:top_element.statusFilter.value==="checked",
        keyword:top_element.searchText.value,
        sortBy:top_element.field.value as SortField,
        sorttype:top_element.order.value as SortOrder
    });
    // console.log(app,data);
    return app.getVisibledTask({
        isDone:top_element.statusFilter.value==="checked",
        keyword:top_element.searchText.value,
        sortBy:top_element.field.value as SortField,
        sorttype:top_element.order.value as SortOrder
    })
}
// タスクの優先度に応じたボーダーカラーを返す関数
export function taskBorderColor(priority?: TaskPriority): string {
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