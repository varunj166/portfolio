import { toggleButtonActive } from './toggleButtonActive';
import { toggleSectionActive } from './toggleSectionActive';

export function handlePopstate(event) {
  const state = event.state;

  if (!state) return;

  // Toggle nav button
  const button = document.querySelector(
    '[data-target-section=' + state + '-section]'
  );
  if (button) {
    toggleButtonActive(button);
  }

  // Toggle section
  const el = document.getElementById(state + '-section');
  if (el) {
    toggleSectionActive(el);
  }
}
