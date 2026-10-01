/* BLOQUE 01 · Búsqueda de las vacantes ficticias por texto y área. */
export function initJobs() {
  const form = document.querySelector('[data-job-filters]');
  if (!form) return;
  const search = form.querySelector('[data-job-search]');
  const area = form.querySelector('[data-job-area]');
  const cards = [...document.querySelectorAll('[data-job-card]')];
  const status = document.querySelector('[data-job-results]');
  const empty = document.querySelector('[data-job-empty]');
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function filter() {
    const query = normalize(search.value.trim());
    let visible = 0;
    cards.forEach(card => {
      card.hidden = !((area.value === 'Todas' || card.dataset.area === area.value) && normalize(card.textContent).includes(query));
      if (!card.hidden) visible++;
    });
    status.textContent = `${visible} ${visible === 1 ? 'vacante de ejemplo' : 'vacantes de ejemplo'}`;
    empty.hidden = visible !== 0;
  }
  form.addEventListener('submit', event => { event.preventDefault(); filter(); });
  search.addEventListener('input', filter);
  area.addEventListener('change', filter);
  form.querySelector('[data-job-reset]').addEventListener('click', () => {
    search.value = '';
    area.value = 'Todas';
    filter();
    search.focus();
  });
  filter();
}
