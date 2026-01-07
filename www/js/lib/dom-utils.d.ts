import type { TaskPriority, TasksMap } from "./type.js";
import type { TaskUseCase } from "../usecase.js";
/** 指定したクラス名の要素を取得するヘルパー関数 */
export declare function getFieldElement(taskEl: DocumentFragment, field: string): HTMLElement;
/** クリックイベントから指定したクラス名の要素を取得するヘルパー関数 */
export declare function clickedGetElement(ev: PointerEvent, clickClass: string): HTMLElement | null;
/** Visible Task Update */
export declare function updateVisible(app: TaskUseCase): TasksMap;
export declare function taskBorderColor(priority?: TaskPriority): string;
//# sourceMappingURL=dom-utils.d.ts.map