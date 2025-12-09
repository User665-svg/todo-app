import type { StoredTasksMap, Task, TasksMap } from "./type.js";
export declare function defaultTask(): Task;
export declare function restoreTasks(stored: StoredTasksMap): TasksMap;
export declare function buildStoredTasksMap(tasks: TasksMap): StoredTasksMap;
export declare function getMaxId(stored: StoredTasksMap): number;
//# sourceMappingURL=task.d.ts.map