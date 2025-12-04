export function getFieldElement(taskEl:DocumentFragment,field:string) {
    const el = taskEl.querySelector(`.${field}`) as HTMLElement | null;
    if (!el) throw new Error('not found className');
    return el;
  }

  export function clickedGetElement(ev:PointerEvent,clickClass:string):HTMLElement|null{
  let el: HTMLElement | null = null;
  for (const element of ev.composedPath()) {
      if (element instanceof HTMLElement && element.classList.contains(clickClass)) {
          el = element;
          break; 
      }
  }
  return el;
}