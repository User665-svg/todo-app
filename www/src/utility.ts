import type { Task, TasksMap } from "./type";

export const toDateText = (d:Date) =>{ 
    const text = d.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
    return text;
}

export function toArray(tasks:TasksMap){
  const arr = Object.entries(tasks); 
  return arr
}

export function toTaskMap(ArrTask:[string,Task][]){
  const tasksMap:TasksMap = Object.fromEntries(ArrTask);
  return tasksMap;
}

