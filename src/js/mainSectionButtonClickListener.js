export function mainSectionButtonClickListener(event) {
  const { target } = event;
  if (!target) {
    return;
  }

  const sectionEl = getTargetSectionEl(target);
  if (!sectionEl) {
    return;
  }

  // Toggle button to active
  toggleButtonActive(target);

  // Toggle section to active
  toggleSectionActive(sectionEl);
}

// ===================================

function getTargetSectionEl(el) {
  const targetSection = el.getAttribute('data-target-section');
  if (!targetSection) {
    return undefined;
  }

  const targetSectionEl = document.getElementById(targetSection);
  if (!targetSectionEl) {
    return undefined;
  }

  const isActive = targetSectionEl.classList.contains('active');
  if (isActive) {
    return undefined;
  }

  return targetSectionEl;
}

function toggleButtonActive(el) {
  const currentlyActiveEl = document.querySelector(
    '.section-nav-button.active'
  );
  if (!currentlyActiveEl) {
    return;
  }

  currentlyActiveEl.classList.remove('active');

  el.classList.add('active');
}

function toggleSectionActive(el) {
  const currentlyActiveEl = document.querySelector('.inner-section.active');
  if (!currentlyActiveEl) {
    return;
  }

  currentlyActiveEl.addEventListener('transitionend', handleTransitionEnd);
  currentlyActiveEl.classList.remove('active');

  el.classList.remove('display-none');
  setTimeout(() => {
    el.classList.add('active');
  }, 50);
}

function handleTransitionEnd(event) {
  const { target } = event;
  if (!target) {
    return;
  }

  target.classList.add('display-none');

  target.removeEventListener('transitionend', handleTransitionEnd);
}
