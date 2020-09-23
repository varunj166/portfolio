export function toggleButtonActive(el) {
  const currentlyActiveEl = document.querySelector(
    '.section-nav-button.active'
  );
  if (!currentlyActiveEl) {
    return;
  }

  currentlyActiveEl.classList.remove('active');

  el.classList.add('active');
}
