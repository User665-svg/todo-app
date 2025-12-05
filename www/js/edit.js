import { TaskUseCase } from "./usecase.js";
const edit_element = {
    "quit": document.getElementById('quit'),
    "save": document.getElementById('save'),
    "title": document.getElementById('title'),
    "content": document.getElementById('content')
};
const app = new TaskUseCase();
edit_element.quit.addEventListener('click', () => {
    window.location.href = "/www/index.html";
});
edit_element.save.addEventListener('click', () => {
    const title = edit_element.title.value;
    const content = edit_element.content.value;
    const params = new URLSearchParams(window.location.search);
    const strId = params.get('id');
    if (!strId)
        return;
    const id = Number(strId);
    const task = app.getTask(id);
    console.log(id, title, content);
    task.title = title;
    task.content = content;
    app.editTask(id, task);
});
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const strId = params.get('id');
    if (!strId)
        return;
    const id = Number(strId);
    const task = app.getTask(id);
    edit_element.title.value = task.title;
    edit_element.content.value = task.content;
});
//# sourceMappingURL=edit.js.map