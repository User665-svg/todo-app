import { read } from "./localStorage.js";
import { STORAGE_KEY } from "./type.js";
import { getFieldElement, toDateText } from "./utility.js";
const top_element = {
    "todo": document.getElementById('tpl-todo'),
    "tasks": document.getElementById('tasks')
};
function render() {
    const stored = read(STORAGE_KEY, {});
    console.log(Object.entries(stored).length);
    if (!stored)
        return;
    console.log(Object.entries(stored));
    for (const t of Object.values(stored)) {
        const task = top_element.todo.content.cloneNode(true);
        const li = task.querySelector('li');
        li === null || li === void 0 ? void 0 : li.setAttribute('data-id', String(t.id));
        const title = getFieldElement(task, "title");
        const content = getFieldElement(task, "content");
        const date = getFieldElement(task, "due-date");
        title.textContent = t.title !== "" ? t.title : "新規タスク";
        content.textContent = t.content !== "" ? t.content : "";
        date.textContent = toDateText(new Date(t.dueDate));
        top_element.tasks.appendChild(task);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    render();
    console.log(top_element.tasks.querySelectorAll('[data-id]'));
});
//# sourceMappingURL=main.js.map