// Este es el punto de entrada de tu aplicacion
import { changeView } from './view-controller/routerController.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
