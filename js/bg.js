/* ═══════════════════════════════════════════════════
   LGF · bg.js  — Amber military background
   1. Scanline sweep
   2. Animated orbs
   3. Canvas: slow drift + connection mesh
   4. Custom cursor
═══════════════════════════════════════════════════ */
(function(){

/* ── Styles ── */
const css = document.createElement('style');
css.textContent = `
  #bg-wrap {
    position: fixed;
    inset: 0;
    z-index: -3;
    overflow: hidden;
    pointer-events: none;
  }
  /* Vignette */
  #bg-wrap::after {
    content:'';
    position:absolute;
    inset:0;
    background: radial-gradient(ellipse 100% 100% at 50% 0%,
      transparent 30%, rgba(7,8,9,.7) 100%);
    pointer-events:none;
  }
  /* Grid */
  #bg-grid {
    position:absolute;
    inset:0;
    background-image:
      linear-gradient(rgba(245,166,35,.018) 1px, transparent 1px),
      linear-gradient(90deg, rgba(245,166,35,.018) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 90% 70% at 50% 0%, black 0%, transparent 75%);
  }
  /* Scanline sweep */
  #bg-scan {
    position:absolute;
    inset:0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(245,166,35,.022) 50%,
      transparent 100%
    );
    background-size: 100% 120px;
    animation: scan 8s linear infinite;
    pointer-events:none;
  }
  @keyframes scan {
    0%   { background-position: 0 -120px; }
    100% { background-position: 0 100vh; }
  }
  /* Grain */
  #bg-grain {
    position:absolute;
    inset:0;
    opacity:.03;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }
  /* Orbs */
  .bg-orb {
    position:absolute;
    border-radius:50%;
    filter:blur(90px);
    will-change:transform,opacity;
    animation: orb var(--d) ease-in-out infinite alternate;
  }
  @keyframes orb {
    from { transform:translate(0,0) scale(1); opacity:var(--oa); }
    to   { transform:translate(var(--tx),var(--ty)) scale(var(--s)); opacity:var(--ob); }
  }
  /* Canvas */
  #bg-canvas {
    position:fixed;
    inset:0;
    z-index:-2;
    pointer-events:none;
    opacity:.4;
  }
  /* Corner decorations */
  .bg-corner {
    position:fixed;
    width:80px; height:80px;
    border-color:rgba(245,166,35,.12);
    border-style:solid;
    pointer-events:none;
    z-index:-1;
  }
  .bg-corner-tl { top:12px; left:12px; border-width:1px 0 0 1px; }
  .bg-corner-tr { top:12px; right:12px; border-width:1px 1px 0 0; }
  .bg-corner-bl { bottom:12px; left:12px; border-width:0 0 1px 1px; }
  .bg-corner-br { bottom:12px; right:12px; border-width:0 1px 1px 0; }
`;
document.head.appendChild(css);

/* ── DOM ── */
const wrap = document.createElement('div');
wrap.id = 'bg-wrap';
wrap.innerHTML = `
  <div id="bg-grid"></div>
  <div id="bg-scan"></div>
  <div id="bg-grain"></div>
`;

const ORBS = [
  { w:600,h:360,top:'-8%', left:'20%', c:'rgba(245,166,35,', op:.055, d:20, tx:'-50px',ty:'40px', s:1.18 },
  { w:440,h:440,top:'25%', left:'-5%', c:'rgba(139,125,255,', op:.04,  d:26, tx:'35px', ty:'-25px',s:1.1  },
  { w:380,h:280,top:'55%', left:'68%', c:'rgba(78,205,196,',  op:.035, d:30, tx:'-30px',ty:'50px', s:1.12 },
  { w:320,h:320,top:'75%', left:'15%', c:'rgba(245,166,35,',  op:.03,  d:18, tx:'60px', ty:'-35px',s:1.08 },
  { w:500,h:300,top:'85%', left:'45%', c:'rgba(232,81,42,',   op:.025, d:24, tx:'-40px',ty:'-30px',s:1.06 },
];

ORBS.forEach(o => {
  const d = document.createElement('div');
  d.className = 'bg-orb';
  d.style.cssText = `
    width:${o.w}px;height:${o.h}px;
    top:${o.top};left:${o.left};
    background:radial-gradient(circle,${o.c}${o.op}) 0%,transparent 70%);
    --d:${o.d}s;--oa:${o.op};--ob:${o.op*.3};
    --tx:${o.tx};--ty:${o.ty};--s:${o.s};
  `;
  wrap.appendChild(d);
});

['tl','tr','bl','br'].forEach(p => {
  const c = document.createElement('div');
  c.className = `bg-corner bg-corner-${p}`;
  document.body.appendChild(c);
});

document.body.insertBefore(wrap, document.body.firstChild);

/* ── Canvas mesh ── */
const cv = document.createElement('canvas');
cv.id = 'bg-canvas';
document.body.insertBefore(cv, document.body.firstChild);
const ctx = cv.getContext('2d');

const REDUCED = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
const LOWEND  = navigator.hardwareConcurrency <= 2;

if (REDUCED || LOWEND) {
  cv.style.display = 'none';
} else {
  let W, H, pts;
  const N    = Math.min(55, ~~(window.innerWidth / 22));
  const DIST = 140;
  const COLORS = ['245,166,35','139,125,255','78,205,196','245,166,35'];

  const resize = () => { W = cv.width = innerWidth; H = cv.height = innerHeight; };

  function Pt() {
    this.x  = Math.random()*W;
    this.y  = Math.random()*H;
    this.vx = (Math.random()-.5)*.28;
    this.vy = (Math.random()-.5)*.28;
    this.r  = Math.random()*1.1+.35;
    this.c  = COLORS[~~(Math.random()*COLORS.length)];
  }

  const init = () => { pts = Array.from({length:N}, ()=>new Pt()); };

  const draw = () => {
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<pts.length;i++){
      const a=pts[i];
      for(let j=i+1;j<pts.length;j++){
        const b=pts[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<DIST){
          const al=(1-dist/DIST)*.1;
          ctx.beginPath();
          ctx.strokeStyle=`rgba(${a.c},${al})`;
          ctx.lineWidth=.5;
          ctx.moveTo(a.x,a.y);
          ctx.lineTo(b.x,b.y);
          ctx.stroke();
        }
      }
    }
    pts.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${p.c},.3)`;
      ctx.fill();
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<-20)p.x=W+20; if(p.x>W+20)p.x=-20;
      if(p.y<-20)p.y=H+20; if(p.y>H+20)p.y=-20;
    });
    requestAnimationFrame(draw);
  };

  resize(); init(); draw();
  window.addEventListener('resize',()=>{resize();init();},{passive:true});
}

/* ── Custom cursor ── */
if(window.matchMedia('(pointer:fine)').matches){
  const cur = document.createElement('div');
  cur.id = 'cursor';
  document.body.appendChild(cur);

  let mx=0, my=0, cx=0, cy=0;
  document.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; });

  const interactables = 'button, a, input, .snav-item, .sec-hd, .mpill, .cbtn, .lang-sw button';

  const raf = () => {
    cx += (mx-cx)*.18;
    cy += (my-cy)*.18;
    cur.style.left = cx+'px';
    cur.style.top  = cy+'px';
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);

  document.addEventListener('mouseover', e => {
    if(e.target.closest(interactables)) cur.classList.add('hover');
    else cur.classList.remove('hover');
  });
}

})();
