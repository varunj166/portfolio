import { toggleButtonActive } from './toggleButtonActive';
import { toggleSectionActive } from './toggleSectionActive';

export function mainSectionButtonClickListener(event) {
  const { currentTarget } = event;
  if (!currentTarget) {
    return;
  }

  const sectionData = getTargetSectionEl(currentTarget);
  if (!sectionData.element) {
    return;
  }

  // Toggle button to active
  toggleButtonActive(currentTarget);

  // Toggle section to active
  toggleSectionActive(sectionData.element);

  // Manipulate history
  // if (sectionData.url) {
  //   setHistory(sectionData.url);
  // }
}

// ===================================

function getTargetSectionEl(el) {
  let targetSectionEl = undefined;

  const targetSection = el.getAttribute('data-target-section');
  if (targetSection) {
    targetSectionEl = document.getElementById(targetSection);
  }

  const isActive = targetSectionEl.classList.contains('active');
  if (isActive) {
    targetSectionEl = undefined;
  }

  let url = el.getAttribute('data-url');

  return {
    element: targetSectionEl,
    url: url
  };
}

// function setHistory(url) {
//   const splitPathname = window.location.pathname.split('/');
//   splitPathname[splitPathname.length - 1] = url;

//   window.history.pushState(url, null, splitPathname.join('/'));
// }
