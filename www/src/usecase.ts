import { TaskManager } from "./logic.js";
import type { Task, TaskId } from "./type.js";
import { queryVisible } from "./visible.js";

export class TaskUseCase{
    constructor(
        private manaeger:TaskManager,
        private visibleTasks:queryVisible
    ){}
    // Visible Task
    getVisbledTask(){
        return this.visibleTasks.getVisbledTask();
    }
    // Task maneger 
    addTask(task:Task){
        return this.manaeger.addTask(task);
    }
    getTask(id:TaskId){
        return this.manaeger.getTask(id);
    }
}

