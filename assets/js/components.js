/* BLOQUE 01 · Respaldo local para fotografías que no puedan cargarse. */
export function initImageFallbacks() {
  document.querySelectorAll('img[data-photo]').forEach(image => {
    const useFallback = () => {
      if (image.dataset.fallbackApplied) return;
      image.dataset.fallbackApplied = 'true';
      image.src = 'assets/images/patron-minka.svg';
      image.alt = 'Ilustración institucional de Colegio MINKA';
    };
    image.addEventListener('error', useFallback);
    if (image.complete && image.naturalWidth === 0) useFallback();
  });
}

/* BLOQUE 02 · Carrusel manual: no cambia automáticamente ni distrae la lectura. */
export function initCarousel() {
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;
  const image = carousel.querySelector('[data-carousel-image]');
  const caption = carousel.querySelector('[data-carousel-caption]');
  const count = carousel.querySelector('[data-carousel-count]');
  const slides = [
    { image: 'equipo.jpg', alt: 'Estudiantes compartiendo un proyecto en el aula', caption: 'Aprender es mejor cuando lo hacemos juntos.' },
    { image: 'aula.jpg', alt: 'Estudiantes experimentando en un taller de aprendizaje', caption: 'La curiosidad es el inicio de un gran descubrimiento.' },
    { image: 'proyecto.jpg', alt: 'Jóvenes presentando su proyecto de ciencias', caption: 'Pequeñas ideas que pueden cambiar el mundo.' }
  ];
  let current = 0;
  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    const slide = slides[current];
    delete image.dataset.fallbackApplied;
    image.src = `assets/images/${slide.image}`;
    image.alt = slide.alt;
    caption.textContent = slide.caption;
    count.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }
  carousel.querySelector('[data-prev]').addEventListener('click', () => showSlide(current - 1));
  carousel.querySelector('[data-next]').addEventListener('click', () => showSlide(current + 1));
}

/* BLOQUE 03 · Pestañas de niveles educativos con navegación por teclado. */
export function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(container => {
    const tabs = [...container.querySelectorAll('[role="tab"]')];
    const activate = (selected, moveFocus = false) => {
      tabs.forEach(tab => {
        const active = tab === selected;
        tab.setAttribute('aria-selected', String(active));
        tab.tabIndex = active ? 0 : -1;
        document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
      });
      if (moveFocus) selected.focus();
    };
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(tab));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          activate(tabs[next], true);
        }
      });
    });
    activate(tabs[0]);
  });
}
