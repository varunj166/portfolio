export function readMoreButtonClickListener(event) {
  const { currentTarget } = event;
  if (!currentTarget) {
    return;
  }

  const targetBlockEl = getTargetBlockEl(currentTarget);
  if (!targetBlockEl) {
    return;
  }

  // Toggle button to expanded
  toggleButtonExpanded(currentTarget);

  // Toggle block to expanded
  toggleBlockExpanded(targetBlockEl);
}

// ===================================

function getTargetBlockEl(el) {
  const targetBlock = el.getAttribute('data-target-block');
  if (!targetBlock) {
    return;
  }

  const targetBlockEl = document.getElementById(targetBlock);
  if (!targetBlockEl) {
    return;
  }

  return targetBlockEl;
}

function toggleButtonExpanded(el) {
  if (el.classList.contains('expanded')) {
    el.classList.remove('expanded');
    const textEl = el.querySelector('.read-more-text');
    if (!textEl) {
      return;
    }

    textEl.innerText = 'Read More';
  } else {
    el.classList.add('expanded');
    const textEl = el.querySelector('.read-more-text');
    if (!textEl) {
      return;
    }

    textEl.innerText = 'Read Less';
  }
}

function toggleBlockExpanded(el) {
  if (el.classList.contains('expanded')) {
    el.classList.remove('expanded');

    el.style.height = el.scrollHeight + 'px';

    setTimeout(() => {
      el.style.height = 0 + 'px';
    }, 50);
  } else {
    el.addEventListener('transitionend', handleTransitionEnd);

    el.classList.add('expanded');
    el.style.height = el.scrollHeight + 'px';
  }
}

function handleTransitionEnd(event) {
  const { target } = event;
  if (!target) {
    return;
  }

  // Check here in case of a quick double-click
  if (target.classList.contains('expanded')) {
    target.style.height = 'auto';
  }

  target.removeEventListener('transitionend', handleTransitionEnd);
}
