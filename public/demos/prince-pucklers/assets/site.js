const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

const search = document.querySelector('#flavor-search');
const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.catalog-card')];
const resultCount = document.querySelector('#result-count');
let activeFilter = 'all';

function updateCatalog() {
  if (!cards.length) return;
  const term = (search?.value || '').trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const categories = card.dataset.category || '';
    const searchable = `${card.dataset.name || ''} ${card.textContent}`.toLowerCase();
    const categoryMatch = activeFilter === 'all' || categories.includes(activeFilter);
    const textMatch = !term || searchable.includes(term);
    const show = categoryMatch && textMatch;
    card.hidden = !show;
    if (show) visible += 1;
  });
  if (resultCount) resultCount.textContent = `${visible} flavor${visible === 1 ? '' : 's'} shown`;
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    activeFilter = button.dataset.filter || 'all';
    updateCatalog();
  });
});

search?.addEventListener('input', updateCatalog);
updateCatalog();