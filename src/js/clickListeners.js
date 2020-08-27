import { mainSectionButtonClickListener } from './mainSectionButtonClickListener';
import { readMoreButtonClickListener } from './readMoreButtonClickListener';

export const clickListeners = [
  {
    element: Array.prototype.slice.call(
      document.querySelectorAll('.section-nav-button')
    ),
    listener: mainSectionButtonClickListener
  },
  {
    element: Array.prototype.slice.call(
      document.querySelectorAll('.read-more-button')
    ),
    listener: readMoreButtonClickListener
  }
];
