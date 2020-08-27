import aos from 'aos';
import { setFooterYear } from './setFooterYear';
import { clickListeners } from './clickListeners';

export function handleWindowLoad(event) {
  setFooterYear();

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

  aos.init({
    duration: 500,
    mirror: false,
    debounceDelay: 200,
    once: true,
    offset: 50
  });
}
