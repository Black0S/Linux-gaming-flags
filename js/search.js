/* ═══════════════════════════════════════════════════════
   LINUX GAMING FLAGS — search.js
   Search, filter, highlight
═══════════════════════════════════════════════════════ */

let activeFilter = 'all';
let searchQuery  = '';

/* ─── Apply search + filter ─── */
function applySearch() {
  const q = searchQuery.toLowerCase().trim();
  let visible = 0;
  let anyVisible = false;

  document.querySelectorAll('.flag-section').forEach(sectionEl => {
    const sId = sectionEl.dataset.section;

    /* Category filter */
    if (activeFilter !== 'all' && activeFilter !== sId) {
      sectionEl.style.display = 'none';
      return;
    }

    const rows = sectionEl.querySelectorAll('tbody tr');
    let sectionVisible = 0;

    rows.forEach(row => {
      const flag = (row.dataset.flag || '').toLowerCase();
      const desc = (row.dataset.desc || '').toLowerCase();
      const match = !q || flag.includes(q) || desc.includes(q);

      row.classList.toggle('hidden-row', !match);
      if (match) {
        sectionVisible++;
        visible++;

        /* Highlight matches */
        if (q) {
          highlightCell(row.querySelector('.flag-code'), q);
          highlightCell(row.querySelector('.td-desc'), q);
        } else {
          clearHighlight(row.querySelector('.flag-code'));
          clearHighlight(row.querySelector('.td-desc'));
        }
      } else {
        clearHighlight(row.querySelector('.flag-code'));
        clearHighlight(row.querySelector('.td-desc'));
      }
    });

    if (sectionVisible === 0) {
      sectionEl.style.display = 'none';
    } else {
      sectionEl.style.display = '';
      anyVisible = true;

      /* Auto-expand when searching */
      if (q) sectionEl.classList.remove('collapsed');

      /* Update count badge */
      const countEl = sectionEl.querySelector('.section-count');
      const total = sectionEl.querySelectorAll('tbody tr').length;
      if (countEl) {
        countEl.textContent = q
          ? `${sectionVisible} / ${total} ${t('s_vars')}`
          : `${total} ${t('s_vars')}`;
      }
    }
  });

  /* Update stat */
  const visEl = document.getElementById('stat-visible');
  if (visEl) visEl.textContent = visible;

  /* No results */
  const noRes = document.getElementById('no-results');
  if (noRes) noRes.classList.toggle('visible', !anyVisible && (q || activeFilter !== 'all'));
}

/* ─── Highlight text in element ─── */
function highlightCell(el, query) {
  if (!el || !query) return;

  const orig = el.dataset.orig || el.textContent;
  el.dataset.orig = orig;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  el.innerHTML = orig.replace(regex, '<mark>$1</mark>');
}

function clearHighlight(el) {
  if (!el) return;
  if (el.dataset.orig) {
    el.textContent = el.dataset.orig;
    delete el.dataset.orig;
  }
}

/* ─── Set filter ─── */
function setFilter(cat) {
  activeFilter = cat;
  document.querySelectorAll('.filter-pill').forEach(p => {
    p.classList.toggle('active', p.dataset.cat === cat);
  });
  applySearch();
}

/* ─── Init search listeners ─── */
function initSearch() {
  const input   = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');

  if (!input) return;

  input.addEventListener('input', () => {
    searchQuery = input.value;
    clearBtn && clearBtn.classList.toggle('visible', searchQuery.length > 0);
    applySearch();
  });

  clearBtn && clearBtn.addEventListener('click', () => {
    input.value = '';
    searchQuery = '';
    clearBtn.classList.remove('visible');
    applySearch();
    input.focus();
  });

  /* Keyboard shortcut: Ctrl+K or / */
  document.addEventListener('keydown', e => {
    if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && document.activeElement !== input)) {
      e.preventDefault();
      input.focus();
      input.select();
    }
    if (e.key === 'Escape' && document.activeElement === input) {
      input.blur();
    }
  });
}
