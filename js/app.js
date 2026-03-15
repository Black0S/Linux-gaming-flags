/* ═══════════════════════════════════════════════════════
   LINUX GAMING FLAGS — app.js
   Main app: build DOM, interactions, copy, lang, scroll
═══════════════════════════════════════════════════════ */

/* ─── Toast ─── */
let toastTimer = null;

function showToast(msg) {
  const el = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  if (!el) return;
  if (msgEl) msgEl.textContent = msg || t('toast_copied');
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1900);
}

/* ─── Copy to clipboard ─── */
function copyFlag(e, flag) {
  e.stopPropagation();
  const btn = e.currentTarget;

  navigator.clipboard.writeText(flag).then(() => {
    btn.classList.add('copied');
    btn.innerHTML = copyIconCheck();
    showToast();
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = copyIconDefault();
    }, 1500);
  }).catch(() => {
    /* Fallback for older browsers */
    const ta = document.createElement('textarea');
    ta.value = flag;
    ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0;';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast();
  });
}

function copyIconDefault() {
  return `<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
  </svg>`;
}

function copyIconCheck() {
  return `<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
    <polyline points="20 6 9 17 4 12"/>
  </svg>`;
}

/* ─── Toggle section collapse ─── */
function toggleSection(id) {
  const el = document.querySelector(`.flag-section[data-section="${id}"]`);
  if (el) el.classList.toggle('collapsed');
}

/* ─── Build type badge ─── */
function typeBadge(type) {
  const map = {
    env:  () => `<span class="type-badge type-env">${t('type_env')}</span>`,
    flag: () => `<span class="type-badge type-flag">${t('type_flag')}</span>`,
    cmd:  () => `<span class="type-badge type-cmd">${t('type_cmd')}</span>`,
    val:  () => `<span class="type-badge type-val">${t('type_val')}</span>`,
  };
  return (map[type] || map.env)();
}

/* ─── Build a section ─── */
function buildSection(sec, lang) {
  const div = document.createElement('div');
  div.className = `flag-section ${sec.cssClass}`;
  div.dataset.section = sec.id;

  const tagPills = sec.tags.map(tg => `<span class="s-tag">${tg}</span>`).join('');
  const count = sec.rows.length;

  const rows = sec.rows.map(row => {
    const desc = lang === 'en' ? row.en : row.fr;
    return `
      <tr data-flag="${row.flag.toLowerCase()}" data-desc="${desc.toLowerCase()}">
        <td class="td-flag">
          <span class="flag-code" data-orig="${escapeHtml(row.flag)}">
            ${escapeHtml(row.flag)}
          </span>
          <button class="copy-btn" onclick="copyFlag(event,'${escapeSingleQuote(row.flag)}')"
                  title="Copier" aria-label="Copier ${escapeHtml(row.flag)}">
            ${copyIconDefault()}
          </button>
        </td>
        <td class="td-desc" data-orig="${escapeHtml(desc)}">${escapeHtml(desc)}</td>
        <td class="td-type">${typeBadge(row.type)}</td>
      </tr>`;
  }).join('');

  div.innerHTML = `
    <div class="section-head" onclick="toggleSection('${sec.id}')">
      <div class="section-icon-wrap">${sec.icon}</div>
      <div class="section-info">
        <div class="section-title">${t('s_' + sec.id)}</div>
        <div class="section-meta">
          <span class="section-count">${count} ${t('s_vars')}</span>
          <span class="section-tag-list">${tagPills}</span>
        </div>
      </div>
      <svg class="section-chevron" width="18" height="18" fill="none" viewBox="0 0 24 24"
           stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
    <div class="section-body">
      <table class="flags-table">
        <thead>
          <tr>
            <th>${t('th_flag')}</th>
            <th>${t('th_desc')}</th>
            <th>${t('th_type')}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;

  return div;
}

/* ─── Build filter pills ─── */
function buildFilterPills() {
  const container = document.getElementById('filter-pills');
  if (!container) return;
  container.innerHTML = '';

  const allPill = document.createElement('button');
  allPill.className = 'filter-pill active';
  allPill.dataset.cat = 'all';
  allPill.textContent = t('filter_all');
  allPill.onclick = () => setFilter('all');
  container.appendChild(allPill);

  SECTIONS.forEach(sec => {
    const pill = document.createElement('button');
    pill.className = 'filter-pill';
    pill.dataset.cat = sec.id;
    pill.innerHTML = `${sec.icon} ${t('s_' + sec.id)}`;
    pill.onclick = () => setFilter(sec.id);
    container.appendChild(pill);
  });
}

/* ─── Update stats ─── */
function updateStats() {
  const totalEl  = document.getElementById('stat-total');
  const catsEl   = document.getElementById('stat-cats');
  const visEl    = document.getElementById('stat-visible');
  const newEl    = document.getElementById('stat-new');
  const total    = getTotalFlags();

  if (totalEl) totalEl.textContent = total;
  if (catsEl)  catsEl.textContent  = SECTIONS.length;
  if (visEl)   visEl.textContent   = total;
  if (newEl)   newEl.textContent   = getNewFlags();
}

/* ─── Build hero tags ─── */
function buildHeroTags() {
  const container = document.getElementById('hero-tags');
  if (!container) return;
  container.innerHTML = '';

  const COLORS = [
    ['#00d4f5','rgba(0,212,245,0.08)','rgba(0,212,245,0.2)'],
    ['#8b5cf6','rgba(139,92,246,0.08)','rgba(139,92,246,0.2)'],
    ['#10d9a0','rgba(16,217,160,0.08)','rgba(16,217,160,0.2)'],
    ['#f5a623','rgba(245,166,35,0.08)','rgba(245,166,35,0.2)'],
    ['#f04f5a','rgba(240,79,90,0.08)','rgba(240,79,90,0.2)'],
    ['#e879a0','rgba(232,121,160,0.08)','rgba(232,121,160,0.2)'],
    ['#6979f8','rgba(105,121,248,0.08)','rgba(105,121,248,0.2)'],
    ['#06d6a0','rgba(6,214,160,0.08)','rgba(6,214,160,0.2)'],
  ];

  const tags = ['Steam', 'Proton', 'Wine', 'DXVK', 'Vulkan', 'NVIDIA', 'Gamescope', 'MangoHud', 'Wayland', 'GameMode', 'Mesa', 'AMD'];
  tags.forEach((tag, i) => {
    const [color, bg, border] = COLORS[i % COLORS.length];
    const span = document.createElement('span');
    span.className = 'hero-tag';
    span.style.cssText = `color:${color};background:${bg};border-color:${border}`;
    span.textContent = tag;
    container.appendChild(span);
  });
}

/* ─── Build all sections ─── */
function buildSections(lang) {
  const grid = document.getElementById('sections-grid');
  if (!grid) return;
  grid.innerHTML = '';

  SECTIONS.forEach(sec => {
    grid.appendChild(buildSection(sec, lang));
  });
}

/* ─── Update UI text (i18n) ─── */
function updateTexts(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  /* Search placeholder */
  const inp = document.getElementById('search-input');
  if (inp) inp.placeholder = t('search_placeholder');

  /* Section titles and counts */
  document.querySelectorAll('.flag-section').forEach(el => {
    const sId = el.dataset.section;
    const titleEl = el.querySelector('.section-title');
    const countEl = el.querySelector('.section-count');
    const sec = SECTIONS.find(s => s.id === sId);
    if (titleEl) titleEl.textContent = t('s_' + sId);
    if (countEl && sec) countEl.textContent = `${sec.rows.length} ${t('s_vars')}`;

    /* Update row descriptions */
    if (sec) {
      const rows = el.querySelectorAll('tbody tr');
      rows.forEach((row, i) => {
        const desc = lang === 'en' ? sec.rows[i]?.en : sec.rows[i]?.fr;
        const descEl = row.querySelector('.td-desc');
        if (descEl && desc) {
          descEl.textContent = desc;
          descEl.dataset.orig = desc;
          row.dataset.desc = desc.toLowerCase();
        }
      });
    }
  });

  /* Filter pills */
  document.querySelectorAll('.filter-pill').forEach(p => {
    const cat = p.dataset.cat;
    if (cat === 'all') {
      p.textContent = t('filter_all');
    } else {
      const sec = SECTIONS.find(s => s.id === cat);
      if (sec) p.innerHTML = `${sec.icon} ${t('s_' + cat)}`;
    }
  });

  /* Type badges */
  document.querySelectorAll('.td-type').forEach(td => {
    const row = td.closest('tr');
    if (!row) return;
    const sectionEl = row.closest('.flag-section');
    const sId = sectionEl?.dataset.section;
    const sec = SECTIONS.find(s => s.id === sId);
    if (!sec) return;
    const trs = Array.from(sectionEl.querySelectorAll('tbody tr'));
    const idx = trs.indexOf(row);
    if (idx >= 0 && sec.rows[idx]) {
      td.innerHTML = typeBadge(sec.rows[idx].type);
    }
  });

  /* Toast message */
  const toastMsg = document.getElementById('toast-msg');
  if (toastMsg) toastMsg.textContent = t('toast_copied');
}

/* ─── Language switch ─── */
function switchLang(lang) {
  setLang(lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  updateTexts(lang);
}

/* ─── Back to top ─── */
function initBackToTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─── Escape helpers ─── */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

function escapeSingleQuote(str) {
  return String(str).replace(/'/g,"\\'");
}

/* ─── Init ─── */
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();

  /* Set lang buttons */
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
    b.addEventListener('click', () => switchLang(b.dataset.lang));
  });

  /* Build UI */
  buildHeroTags();
  buildSections(lang);
  buildFilterPills();
  updateStats();
  updateTexts(lang);

  /* Init search */
  initSearch();

  /* Back to top */
  initBackToTop();
});
