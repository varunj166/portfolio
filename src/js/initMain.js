export function initMain() {
  const currentlyActiveEl = document.querySelector('.inner-section.active');
  if (!currentlyActiveEl) {
    return;
  }

  document.querySelector('main').style.height =
    currentlyActiveEl.scrollHeight + 30 + 'px';
}
