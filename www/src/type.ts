export interface Task {
  title: string;
  content: string;
  dueDate: Date;
  isDone: boolean;
}

export type TaskId = number;
export type TasksMap = Record<TaskId, Task>;

export interface StoredTask {
  id: TaskId;
  title: string;
  content: string;
  dueDate: string;
  isDone: boolean;
}

export type StoredTasksMap = Record<number, StoredTask>;

export const STORAGE_KEY = "tasks";
export const QUERY_KEY = "query"