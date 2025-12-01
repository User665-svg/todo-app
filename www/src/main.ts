
import { TaskManager } from "./logic.js";
import { type TasksMap } from "./type.js";
import { getFieldElement, toDateText } from "./utility.js";

const manager = new TaskManager();
const top_element = {
    "todo":document.getElementById('tpl-todo') as HTMLTemplateElement,
    "tasks":document.getElementById('tasks') as HTMLUListElement
}
function render(){
    const tasks:TasksMap = manager.getDataAll();
    console.log(Object.entries(tasks).length)
    if (!tasks) return;
    console.log(Object.entries(tasks));
    for (const [idx,t] of Object.entries(tasks)) {
        const task = top_element.todo.content.cloneNode(true) as DocumentFragment;
        const li = task.querySelector('li');
        li?.setAttribute('data-id',String(idx));
        const title = getFieldElement(task,"title")
        const content = getFieldElement(task,"content");
        const date = getFieldElement(task,"due-date");
        title.textContent = t.title !== "" ? t.title:"新規タスク";
        content.textContent = t.content !== "" ? t.content:"";
        date.textContent = toDateText(new Date(t.dueDate))
        top_element.tasks.appendChild(task)
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    render()
    console.log(top_element.tasks.querySelectorAll('[data-id]'));
})