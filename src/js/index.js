// ===== STYLE IMPORT =====
import '../scss/main.scss';
// ==== CORE-JS FEATURE/POLYFILL IMPORTS ====
import 'core-js/features/array/from';
import 'core-js/features/array/is-array';
import { handleWindowLoad } from './handleWindowLoad';

window.addEventListener('load', handleWindowLoad);
