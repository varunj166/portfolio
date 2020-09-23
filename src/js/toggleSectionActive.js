export function toggleSectionActive(el) {
  const currentlyActiveEl = document.querySelector('.inner-section.active');
  if (!currentlyActiveEl) {
    return;
  }

  currentlyActiveEl.addEventListener('transitionend', handleTransitionEnd);
  currentlyActiveEl.classList.remove('active');

  el.classList.remove('display-none');
  setTimeout(() => {
    document.querySelector('main').style.height = el.scrollHeight + 30 + 'px';

    el.classList.add('active');
  }, 50);
}

// ==========================================

function handleTransitionEnd(event) {
  const { target } = event;
  if (!target) {
    return;
  }

  if (!target.classList.contains('active')) {
    target.classList.add('display-none');
  }

  target.removeEventListener('transitionend', handleTransitionEnd);
}
