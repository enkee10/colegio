/* BLOQUE 01 · Entrada de JavaScript mediante módulos ES nativos.
   No se utilizan frameworks ni librerías externas. */
import { initNavigation } from './navigation.js';
import { initCarousel, initTabs, initImageFallbacks } from './components.js';
import { initForms } from './forms.js';
import { initNews } from './news.js';
import { initJobs } from './jobs.js';

/* BLOQUE 02 · Cada módulo se activa solo si encuentra sus elementos. */
initNavigation();
initImageFallbacks();
initCarousel();
initTabs();
initForms();
initNews();
initJobs();

/* BLOQUE 03 · Año del pie y botón de la guía imprimible. */
document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
