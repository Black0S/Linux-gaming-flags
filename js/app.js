/* ═══════════════════════════════════════════════════
   LGF · app.js
═══════════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const esc  = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const escQ = s => String(s).replace(/'/g,"\\'");

/* ── Toast ── */
let toastT;
function toast(){
  const el=$('toast'); el.classList.add('on');
  clearTimeout(toastT);
  toastT=setTimeout(()=>el.classList.remove('on'),1800);
}

/* ── Icons ── */
const iCopy=()=>`<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const iCheck=()=>`<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;

/* ── Copy ── */
function doCopy(e, flag){
  e.stopPropagation();
  const btn=e.currentTarget;
  navigator.clipboard.writeText(flag).catch(()=>{
    const ta=document.createElement('textarea');
    ta.value=flag; ta.style.cssText='position:fixed;opacity:0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); ta.remove();
  });
  btn.classList.add('done'); btn.innerHTML=iCheck(); toast();
  setTimeout(()=>{ btn.classList.remove('done'); btn.innerHTML=iCopy(); },1500);
}

/* ── Type badge ── */
function tbadge(type){
  const m={env:'tb-env ENV',flag:'tb-flag FLAG',cmd:'tb-cmd CMD',val:'tb-val VAL'};
  const v=m[type]||'tb-env ENV';
  const [cls,lbl]=v.split(' ');
  return `<span class="tbadge ${cls}">${lbl}</span>`;
}

/* ── Build row ── */
function buildRow(row, l){
  const desc = l==='en' ? row.en : row.fr;
  const type = row.type||row.t||'env';
  return `<tr data-f="${esc(row.f).toLowerCase()}" data-d="${esc(desc).toLowerCase()}">
    <td class="td-f">
      <div class="flag-wrap">
        <span class="flag-pill">${esc(row.f)}</span>
        <button class="cbtn" onclick="doCopy(event,'${escQ(row.f)}')" aria-label="Copy">${iCopy()}</button>
      </div>
    </td>
    <td class="td-d">${esc(desc)}</td>
    <td class="td-t">${tbadge(type)}</td>
  </tr>`;
}

/* ── Build section ── */
function buildSection(sec, l){
  const name = t('s_'+sec.id);
  const tags = (sec.tags||[]).map(g=>`<span class="sec-stag">${g}</span>`).join('');
  const rows = sec.rows.map(r=>buildRow(r,l)).join('');
  return `
<div class="sec ${sec.css||''}" data-sec="${sec.id}" id="sec-${sec.id}">
  <div class="sec-hd" onclick="toggleSec('${sec.id}')">
    <div class="sec-ico">${sec.icon}</div>
    <div class="sec-info">
      <div class="sec-title">${name}</div>
      <div class="sec-meta-row">
        <span class="sec-cnt">${sec.rows.length} ${t('vars')}</span>
        <div class="sec-tags">${tags}</div>
      </div>
    </div>
    <svg class="sec-chev" width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </div>
  <div class="sec-body">
    <table>
      <thead><tr>
        <th>${t('th_flag')}</th>
        <th>${t('th_desc')}</th>
        <th>${t('th_type')}</th>
      </tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
</div>`;
}

/* ── Toggle section ── */
function toggleSec(id){
  const el=document.querySelector(`.sec[data-sec="${id}"]`);
  if(el) el.classList.toggle('closed');
}

/* ── Sidebar ── */
function buildSidebar(){
  const nav=$('sb-nav');
  if(!nav) return;
  nav.innerHTML='';
  DATA.forEach(sec=>{
    const btn=document.createElement('button');
    btn.className='snav-item';
    btn.dataset.sec=sec.id;
    btn.innerHTML=`
      <span class="snav-ico">${sec.icon}</span>
      <span class="snav-label">${t('s_'+sec.id)}</span>
      <span class="snav-count">${sec.rows.length}</span>
    `;
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.snav-item').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      filterCat(sec.id);
      const target=$(`sec-${sec.id}`);
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
    nav.appendChild(btn);
  });
  // "All" at top
  const allBtn=document.createElement('button');
  allBtn.className='snav-item active';
  allBtn.dataset.sec='all';
  allBtn.innerHTML=`<span class="snav-ico">◈</span><span class="snav-label">${t('pill_all')}</span><span class="snav-count">${totalFlags()}</span>`;
  allBtn.addEventListener('click',()=>{
    document.querySelectorAll('.snav-item').forEach(b=>b.classList.remove('active'));
    allBtn.classList.add('active');
    filterCat('all');
  });
  nav.insertBefore(allBtn, nav.firstChild);
}

/* ── Mobile pills ── */
function buildPills(){
  const c=$('mpills');
  if(!c) return;
  c.innerHTML=`<button class="mpill on" data-cat="all">${t('pill_all')}</button>`;
  DATA.forEach(s=>{
    const b=document.createElement('button');
    b.className='mpill'; b.dataset.cat=s.id;
    b.textContent=`${s.icon} ${t('s_'+s.id)}`;
    c.appendChild(b);
  });
  c.querySelectorAll('.mpill').forEach(p=>p.addEventListener('click',()=>{
    filterCat(p.dataset.cat);
    c.querySelectorAll('.mpill').forEach(x=>x.classList.toggle('on',x===p));
  }));
}

/* ── Filter ── */
let activeCat='all';
function filterCat(cat){
  activeCat=cat;
  runSearch();
}

/* ── Search ── */
let q='';
function runSearch(){
  let vis=0, any=false;
  document.querySelectorAll('.sec').forEach(card=>{
    const sid=card.dataset.sec;
    if(activeCat!=='all'&&activeCat!==sid){ card.style.display='none'; return; }
    card.style.display='';
    let shown=0;
    card.querySelectorAll('tbody tr').forEach(row=>{
      const match=!q||row.dataset.f.includes(q)||row.dataset.d.includes(q);
      row.classList.toggle('hide',!match);
      if(match){
        shown++; vis++;
        if(q){ hlCell(row.querySelector('.flag-pill'),q); hlCell(row.querySelector('.td-d'),q); }
        else { clrCell(row.querySelector('.flag-pill')); clrCell(row.querySelector('.td-d')); }
      } else { clrCell(row.querySelector('.flag-pill')); clrCell(row.querySelector('.td-d')); }
    });
    if(shown===0){ card.style.display='none'; }
    else {
      any=true;
      if(q) card.classList.remove('closed');
      const c=card.querySelector('.sec-cnt');
      const sec=DATA.find(s=>s.id===sid);
      if(c&&sec) c.textContent=q?`${shown}/${sec.rows.length} ${t('vars')}`:`${sec.rows.length} ${t('vars')}`;
    }
  });
  const sv=$('stat-vis'); if(sv) sv.textContent=vis;
  const nr=$('no-res'); if(nr) nr.classList.toggle('on',!any&&(!!q||activeCat!=='all'));
}

function hlCell(el,query){
  if(!el) return;
  const orig=el.dataset.orig||el.textContent;
  el.dataset.orig=orig;
  const re=new RegExp('('+query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','gi');
  el.innerHTML=orig.replace(re,'<mark>$1</mark>');
}
function clrCell(el){
  if(!el||!el.dataset.orig) return;
  el.textContent=el.dataset.orig;
  delete el.dataset.orig;
}

/* ── Stats ── */
function updateStats(){
  const total=totalFlags();
  const sv=$('stat-vis');
  if($('stat-total')) $('stat-total').textContent=total;
  if($('stat-cats'))  $('stat-cats').textContent=DATA.length;
  if(sv) sv.textContent=total;
  if($('stat-new'))   $('stat-new').textContent=newFlags();
  // sidebar stats
  if($('sb-total'))  $('sb-total').textContent=total;
  if($('sb-cats'))   $('sb-cats').textContent=DATA.length;
}

/* ── Hero chips ── */
function buildChips(){
  const c=$('hero-chips'); if(!c) return;
  ['Steam','Proton','Wine','DXVK','VKD3D','Vulkan','NVIDIA','FSR','DLSS','Gamescope','MangoHud','Wayland','vkBasalt','GameMode','Mesa','PRIME'].forEach(tag=>{
    const s=document.createElement('span');
    s.className='hchip'; s.textContent=tag;
    c.appendChild(s);
  });
}

/* ── Lang switch ── */
function switchLang(l){
  setLang(l);
  document.querySelectorAll('.lbtn').forEach(b=>b.classList.toggle('on',b.dataset.l===l));
  rebuildAll();
}

/* ── Rebuild ── */
function rebuildAll(){
  const l=getLang();
  // texts
  const tmap={
    'hero-eye':'hero_eye','hero-l1':'hero_l1','hero-l2':'hero_l2','hero-l3':'hero_l3',
    'hero-desc':'hero_desc','sb-label':'sb_title','stat-total-l':'stat_total',
    'stat-cats-l':'stat_cats','stat-vis-l':'stat_vis','stat-new-l':'stat_new',
    'footer-copy':'footer'
  };
  Object.entries(tmap).forEach(([id,key])=>{ const el=$(id); if(el) el.textContent=t(key); });
  // search placeholders
  ['topbar-search-input','mobile-search-input'].forEach(id=>{
    const el=$(id); if(el) el.placeholder=t('search_ph');
  });
  // toast
  const tm=$('toast-msg'); if(tm) tm.textContent=t('toast');
  // sections
  const grid=$('sections'); if(grid) grid.innerHTML=DATA.map(s=>buildSection(s,l)).join('');
  buildSidebar(); buildPills(); updateStats();
  runSearch();
}

/* ── Dual search (topbar + mobile) ── */
function initSearch(){
  const inputs=['topbar-search-input','mobile-search-input'];
  const clears=['topbar-search-clear','mobile-search-clear'];

  inputs.forEach((id,i)=>{
    const inp=$(id); if(!inp) return;
    inp.addEventListener('input',()=>{
      q=inp.value.toLowerCase().trim();
      // sync other input
      const other=$(inputs[1-i]); if(other) other.value=inp.value;
      // clear buttons
      clears.forEach(cid=>{ const c=$(cid); if(c) c.classList.toggle('on',q.length>0); });
      runSearch();
    });
  });

  clears.forEach((id,i)=>{
    const btn=$(id); if(!btn) return;
    btn.addEventListener('click',()=>{
      q=''; inputs.forEach(iid=>{ const el=$(iid); if(el) el.value=''; });
      btn.classList.remove('on'); runSearch();
      $(inputs[i])?.focus();
    });
  });

  document.addEventListener('keydown',e=>{
    if((e.key==='k'&&(e.ctrlKey||e.metaKey))||(e.key==='/')){
      const inp=$(innerWidth>900?'topbar-search-input':'mobile-search-input');
      if(document.activeElement!==inp){ e.preventDefault(); inp?.focus(); inp?.select(); }
    }
    if(e.key==='Escape') inputs.forEach(id=>$(id)?.blur());
  });
}

/* ── Back to top ── */
function initBackTop(){
  const btn=$('back-top'); if(!btn) return;
  window.addEventListener('scroll',()=>btn.classList.toggle('on',scrollY>400),{passive:true});
  btn.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
}

/* ── Intersection observer: highlight sidebar ── */
function initScrollSpy(){
  if(!('IntersectionObserver' in window)) return;
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting&&activeCat==='all'){
        const id=e.target.dataset.sec;
        document.querySelectorAll('.snav-item').forEach(b=>{
          b.classList.toggle('active',b.dataset.sec===id);
        });
      }
    });
  },{rootMargin:`-${56+20}px 0px -60% 0px`});
  document.querySelectorAll('.sec').forEach(s=>obs.observe(s));
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.lbtn').forEach(b=>{
    b.classList.toggle('on',b.dataset.l===getLang());
    b.addEventListener('click',()=>switchLang(b.dataset.l));
  });
  buildChips();
  rebuildAll();
  initSearch();
  initBackTop();
  setTimeout(initScrollSpy, 200);
});
