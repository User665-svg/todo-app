export function getFieldElement(taskEl, field) {
    const el = taskEl.querySelector(`.${field}`);
    if (!el)
        throw new Error('not found className');
    return el;
}
export function clickedGetElement(ev, clickClass) {
    let el = null;
    for (const element of ev.composedPath()) {
        if (element instanceof HTMLElement && element.classList.contains(clickClass)) {
            el = element;
            break;
        }
    }
    return el;
}
//# sourceMappingURL=dom-utils.js.map