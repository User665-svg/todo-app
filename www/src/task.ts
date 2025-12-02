import type { Task } from "./type";

export function defaultTask():Task{
  const d = new Date();
  d.setDate(d.getDate() + 7);
  const task:Task = {
    title:"新規タスク",
    content:"",
    dueDate:d,
    isDone:false
  }
  return task
}