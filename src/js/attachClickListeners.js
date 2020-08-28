export function attachClickListeners(clickListeners) {
  for (let clickListener of clickListeners) {
    if (!Array.isArray(clickListener.element)) {
      clickListener.element.addEventListener('click', clickListener.listener);
    } else {
      for (let element of clickListener.element) {
        if (!element) {
          continue;
        }
        element.addEventListener('click', clickListener.listener);
      }
    }
  }
}
