/* BLOQUE 01 · Navegación móvil y sincronización de atributos accesibles. */
export function initNavigation() {
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-main-nav]');
  if (!toggle || !nav) return;
  const desktop = window.matchMedia('(min-width: 1021px)');
  let isOpen = false;

  function setOpen(value, restoreFocus = false) {
    isOpen = value;
    toggle.setAttribute('aria-expanded', String(value));
    toggle.setAttribute('aria-label', value ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    nav.classList.toggle('is-open', value);
    document.body.classList.toggle('menu-open', value);
    if (restoreFocus) toggle.focus();
  }

  /* BLOQUE 02 · Cierre por enlace, Escape, clic exterior o cambio de tamaño. */
  toggle.addEventListener('click', () => setOpen(!isOpen));
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isOpen) setOpen(false, true);
  });
  document.addEventListener('click', event => {
    if (isOpen && !nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  document.addEventListener('focusin', event => {
    if (isOpen && !nav.contains(event.target) && !toggle.contains(event.target)) setOpen(false);
  });
  desktop.addEventListener('change', () => setOpen(false));
}
