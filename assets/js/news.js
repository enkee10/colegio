import { articles } from './data.js';

/* BLOQUE 01 · Filtrado combinado por categoría y búsqueda, sin recargar. */
export function initNews() {
  const listing = document.querySelector('[data-news-list]');
  if (!listing) return;
  const cards = [...listing.querySelectorAll('[data-news-card]')];
  const buttons = [...document.querySelectorAll('[data-news-filter]')];
  const search = document.querySelector('[data-news-search]');
  const count = document.querySelector('[data-news-results]');
  const empty = document.querySelector('[data-news-empty]');
  let category = 'Todas';
  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function filter() {
    const query = normalize(search.value.trim());
    let visible = 0;
    cards.forEach(card => {
      const matchesCategory = category === 'Todas' || card.dataset.category === category;
      const matchesQuery = normalize(card.textContent).includes(query);
      card.hidden = !(matchesCategory && matchesQuery);
      if (!card.hidden) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'noticia' : 'noticias'}`;
    empty.hidden = visible !== 0;
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.newsFilter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    filter();
  }));
  search.addEventListener('input', filter);

  /* BLOQUE 02 · Diálogo nativo: foco, Escape y contenido insertado como texto.
     Los enlaces siguen apuntando a artículos estáticos si JavaScript no carga. */
  const dialog = document.querySelector('[data-article-dialog]');
  function openArticle(id) {
    const article = articles.find(item => item.id === id);
    if (!article) return false;
    dialog.querySelector('[data-article-title]').textContent = article.title;
    dialog.querySelector('[data-article-category]').textContent = article.category;
    const date = dialog.querySelector('[data-article-date]');
    date.textContent = article.displayDate;
    date.dateTime = article.date;
    const image = dialog.querySelector('[data-article-image]');
    image.src = `assets/images/${article.image}`;
    image.alt = article.title;
    const body = dialog.querySelector('[data-article-body]');
    body.replaceChildren(...article.paragraphs.map(text => {
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      return paragraph;
    }));
    dialog.showModal();
    document.body.classList.add('dialog-open');
    return true;
  }
  document.querySelectorAll('[data-open-article]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      if (openArticle(link.dataset.openArticle)) event.preventDefault();
    });
  });
  dialog.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (new URLSearchParams(location.search).has('noticia')) {
      history.replaceState(null, '', location.pathname);
    }
  });
  const initialArticle = new URLSearchParams(location.search).get('noticia');
  if (initialArticle) openArticle(initialArticle);
  filter();
}
