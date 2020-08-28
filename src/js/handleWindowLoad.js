import aos from 'aos';
import { initMain } from './initMain';
import { setFooterYear } from './setFooterYear';
import { clickListeners } from './clickListeners';
import { attachClickListeners } from './attachClickListeners';

export function handleWindowLoad(event) {
  setFooterYear();

  attachClickListeners(clickListeners);

  aos.init({
    duration: 500,
    mirror: false,
    debounceDelay: 200,
    once: true,
    offset: 50
  });

  initMain();
}
