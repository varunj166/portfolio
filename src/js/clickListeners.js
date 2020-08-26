import { mainSectionButtonClickListener } from './mainSectionButtonClickListener';

export const clickListeners = [
  {
    element: [
      document.getElementById('bio-button'),
      document.getElementById('skills-button'),
      document.getElementById('projects-button')
    ],
    listener: mainSectionButtonClickListener
  }
];
