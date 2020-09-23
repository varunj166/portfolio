import aos from 'aos';
import { initMain } from './initMain';
import { setFooterYear } from './setFooterYear';
import { clickListeners } from './clickListeners';
import { attachClickListeners } from './attachClickListeners';
// import { handlePopstate } from './handlePopstate';

export function handleWindowLoad(event) {
  setFooterYear();

  attachClickListeners(clickListeners);

  // window.history.pushState('bio', null, window.location.pathname + 'bio');

  // window.addEventListener('popstate', handlePopstate);

  aos.init({
    duration: 500,
    mirror: false,
    debounceDelay: 200,
    once: true,
    offset: 50
  });

  initMain();
}
