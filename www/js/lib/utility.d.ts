import type { TaskId, Task, TasksMap } from "./type.js";
export declare const toDateText: (d: Date) => string;
export declare function toArray(tasks: TasksMap): [number, Task][];
export declare function toTaskMap(ArrTask: [TaskId, Task][]): TasksMap;
export declare function isEqualTask(task1: Task, task2: Task): boolean;
//# sourceMappingURL=utility.d.ts.map