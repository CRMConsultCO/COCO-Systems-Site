/*
  EASY READ MODE  ·  assets/easy.js  ·  COCO Systems
  --------------------------------------------------------------------------
  One shared script, one toggle, one skin: the classic Windows '98 look
  (gray bevels, navy title bars, teal desktop). It only changes the SKIN.
  Layout, text sizes and content stay exactly as they are in the normal look.
  It also turns off scanlines and animation, which is what makes it easier to read.

  HOW IT WORKS
    - Adds class "easy" to <html>. All the styling is in the CSS string below and
      only applies under html.easy, so the normal look is untouched.
    - State is remembered in localStorage ("coco_easy"), wrapped in try/catch.
      If storage is blocked it still works for the current page view.
    - Start a link in the '98 look:  https://crmconsultco.com/follow?easy=1
      (?easy=0 forces the normal look and remembers it).
    - Pages inside the home-page windows stay in sync through the "storage" event.
    - No pop-ups, no messages, nothing on the first (boot) screen.

  FUTURE ERA PACK (backlog): this file is skin #1. Other eras (Vista, 7, Mac)
  would be more html.skin-xxx blocks sharing the same toggle. See claude/backlog.md.
*/
(function () {
  'use strict';
  var KEY = 'coco_easy';
  var root = document.documentElement;

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function write(v) { try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) {} }

  var on = false;
  var q = /[?&]easy=(0|1)(?:&|#|$)/.exec(location.search);
  if (q) { on = q[1] === '1'; write(on); } else { on = read() === '1'; }
  root.classList.toggle('easy', on);

  /* ------------------------------------------------------------------ CSS */
  var CSS = [
  /* the toggle button: visible in BOTH looks */
  '.easy-toggle{font:inherit;font-size:inherit;color:inherit;background:transparent;border:1px solid currentColor;padding:5px 10px;cursor:pointer;white-space:nowrap;letter-spacing:.04em}',
  '.easy-toggle:hover,.easy-toggle:focus-visible{outline:2px solid currentColor;outline-offset:2px}',
  '.easy-float{position:fixed;top:8px;right:8px;z-index:2000;background:#020805;color:#3dff8a;font:12px "Space Mono","Courier New",monospace;min-height:34px}',
  'html.easy-float-on body{padding-top:56px}',

  /* ---------- EASY READ SKIN: everything below only applies under html.easy ---------- */
  'html.easy{--bg:#c0c0c0;--card:#fff;--text:#000;--muted:#1a1a1a;--acc:#000080;--border:#404040;--panel:#fff;--title:#000080;--accent:#000080;--e-font:Tahoma,"MS Sans Serif",Verdana,"Segoe UI",Arial,sans-serif;--e-lit:#fff;--e-shade:#404040}',
  'html.easy body,html.easy body *{font-family:var(--e-font)!important}',
  'html.easy body{background:var(--bg)!important;color:#000!important}',
  'html.easy body::before,html.easy body::after{display:none!important}',
  'html.easy *{animation:none!important;transition:none!important;text-shadow:none}',
  'html.easy a{color:#0000a0}',
  'html.easy a:visited{color:#551a8b}',
  'html.easy :focus-visible{outline:2px solid #000080!important;outline-offset:2px}',
  'html.easy .coon,html.easy .coon *,html.easy .follow-raccoon,html.easy .follow-raccoon *{font-family:"Courier New",monospace!important}',

  /* static text pages: privacy, terms, faq */
  'html.easy main{background:#fff;border:2px solid;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade);margin:16px auto}',
  'html.easy h1,html.easy h2{color:#000080!important;text-shadow:none!important}',
  'html.easy h2{border-bottom:2px solid #000!important}',
  'html.easy p,html.easy li{color:#000!important}',
  'html.easy .note{background:#ffffe1!important;color:#000!important;border:1px solid #000!important;border-radius:0!important}',
  'html.easy .lede,html.easy .updated{color:#222!important}',
  'html.easy .q{border-bottom:1px solid #404040!important}',
  'html.easy .cta,html.easy a.btn{background:#c0c0c0!important;color:#000!important;border:2px solid!important;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)!important;border-radius:0!important;text-decoration:none}',
  'html.easy .sitefoot,html.easy .sitefoot a,html.easy body>footer,html.easy body>footer a{color:#000!important;opacity:1!important}',
  'html.easy .sitefoot a,html.easy body>footer a{color:#0000a0!important}',

  /* 404 dialog */
  'html.easy .dialog{background:#c0c0c0!important;border:2px solid!important;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)!important;box-shadow:2px 2px 0 rgba(0,0,0,.55)!important;color:#000}',
  'html.easy .dialog .titlebar{background:linear-gradient(90deg,#000080,#1084d0)!important;color:#fff!important;border:0!important;font-weight:700}',
  'html.easy .dialog .dots{display:none}',
  'html.easy .dialog h1,html.easy .dialog .code,html.easy .dialog p.msg{color:#000!important}',

  /* get-started (and any form page) */
  'html.easy .glow{text-shadow:none!important}',
  'html.easy .topbar{opacity:1!important}',
  'html.easy .topbar a{color:#0000a0!important}',
  'html.easy .sub,html.easy .step-title,html.easy .fallback,html.easy label{opacity:1!important;color:#000!important}',
  'html.easy .step-title .n{color:#000080!important}',
  'html.easy .panel,html.easy .invoice{background:#fff!important;color:#000!important;border:2px solid!important;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade)!important}',
  'html.easy input,html.easy select,html.easy textarea{background:#fff!important;color:#000!important;border:2px solid!important;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade)!important;border-radius:0!important}',
  'html.easy button:not(.easy-toggle){background:#c0c0c0;color:#000!important;border:2px solid!important;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)!important;border-radius:0}',
  'html.easy .card,html.easy .addon{background:#fff!important;color:#000!important;border:2px solid #404040!important}',
  'html.easy .card .cdesc,html.easy .card .cprice,html.easy .addon .aprice{opacity:1!important}',
  'html.easy .card.selected,html.easy .addon.selected{background:#000080!important;color:#fff!important}',
  'html.easy .card.selected *,html.easy .addon.selected *{color:#fff!important}',
  'html.easy .star{color:#7a4d00!important}',
  'html.easy .invoice,html.easy .invoice *{opacity:1!important}',

  /* ---------- HOME: classic teal desktop ---------- */
  'html.easy #matrixCanvas,html.easy #bootScreen{display:none!important}',
  'html.easy #desktop{color:#fff;background:#008080}',
  'html.easy .topbar.glow{color:#fff}',
  'html.easy .icon-btn{color:#fff;border:1px dotted transparent;text-shadow:1px 1px 0 #000;letter-spacing:0}',
  'html.easy .icon-btn:hover,html.easy .icon-btn:focus-visible{background:#000080;border-color:#fff}',
  'html.easy .icon-btn.highlight{color:#ffff80}',
  'html.easy .widget{background:#c0c0c0;color:#000;padding:0 0 10px;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);box-shadow:2px 2px 0 rgba(0,0,0,.5)}',
  'html.easy .widget h3{margin:0 0 8px;padding:4px 10px;background:linear-gradient(90deg,#000080,#1084d0);color:#fff;border:0}',
  'html.easy .widget .infra-line,html.easy .widget .w-note{padding:1px 12px;opacity:1}',
  'html.easy .widget *{color:#000;opacity:1}',
  'html.easy .widget h3{color:#fff}',
  'html.easy .widget a{color:#0000a0}',
  'html.easy .status-ok,html.easy .widget .status-ok{color:#004d00;font-weight:700}',
  'html.easy .window{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);box-shadow:3px 3px 0 rgba(0,0,0,.5)}',
  'html.easy .window .titlebar{background:linear-gradient(90deg,#000080,#1084d0);color:#fff;border:0;font-weight:700;padding:3px 4px 3px 8px}',
  'html.easy .window .titlebar .dots{gap:3px}',
  'html.easy .window .titlebar .dots span{position:relative;width:20px;height:18px;border-radius:0;background:#c0c0c0;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);color:#000}',
  'html.easy .window .titlebar .dots span::after{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;line-height:1}',
  'html.easy .window .titlebar .dots .min::after{content:"_";align-items:flex-end;padding-bottom:2px}',
  'html.easy .window .titlebar .dots .newtab::after{content:"\\2197"}',
  'html.easy .window .titlebar .dots .close::after{content:"\\00D7";font-size:15px}',
  'html.easy .window .titlebar .dots span.close:hover,html.easy .window .titlebar .dots span.newtab:hover,html.easy .window .titlebar .dots span.min:hover{background:#dfdfdf}',
  'html.easy .window .window-body{background:#fff;color:#000}',
  'html.easy .window .window-body *{color:inherit}',
  'html.easy .board-col,html.easy .board-card{border-color:#404040}',
  'html.easy .board-card .badge{background:#000080;color:#fff!important}',
  'html.easy .taskbar{background:#c0c0c0;color:#000;border-top:2px solid #fff}',
  'html.easy .taskbar .start{background:#c0c0c0;color:#000;font-weight:700;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)}',
  'html.easy .taskbar .tab{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)}',
  'html.easy .taskbar .tab.active{border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade);font-weight:700;background:#dcdcdc}',
  'html.easy .taskbar .clock{opacity:1;border:2px solid;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade);padding:3px 8px;color:#000}',
  'html.easy .taskbar .follow-raccoon{color:#8b0000}',
  'html.easy .taskbar .easy-toggle{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)}',
  'html.easy .sitefoot{background:#c0c0c0;color:#000;border-top:2px solid #fff}',
  'html.easy .sitefoot a{color:#0000a0}',

  /* ---------- FOLLOW: RED_98 ---------- */
  'html.easy #boot{display:none!important}',
  'html.easy .box{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);border-radius:0}',
  'html.easy .box:hover,html.easy .box:focus-visible{background:#dfdfdf;color:#000;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)}',
  'html.easy .sys{color:#000}',
  'html.easy .hijack{color:#8b0000;font-weight:700}',
  'html.easy .skullbtn{background:#c0c0c0;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);border-radius:0}',
  'html.easy .skull{color:#8b0000;filter:none}',
  'html.easy .skullbub{background:#ffffe1;color:#000;border:1px solid #000}',
  'html.easy h1{color:#000}',
  'html.easy .tagline{color:#000}',
  'html.easy .cur{display:none}',
  'html.easy .prog .nm{color:#000}',
  'html.easy .prog .tag{opacity:1;color:#333}',
  'html.easy .prog .sub,html.easy .prog:hover .sub,html.easy .prog:focus-visible .sub{color:inherit}',
  'html.easy .prog.hot,html.easy .prog.hot:hover,html.easy .prog.hot:focus-visible{background:#8b0000;color:#fff;border-color:#d46a6a #3a0000 #3a0000 #d46a6a}',
  'html.easy .prog.hot .nm,html.easy .prog.hot .tag,html.easy .prog.hot .sub{color:#fff}',
  'html.easy .win{background:#fff;color:#000;border:2px solid;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade)}',
  'html.easy .win .bar{background:linear-gradient(90deg,#8b0000,#c42b2b);color:#fff;border:0;font-weight:700}',
  'html.easy .faq-item{border-bottom:1px solid #404040}',
  'html.easy .faq-q,html.easy .faq-a{color:#000}',
  'html.easy .legal{color:#000;border-top:2px solid #404040}',
  'html.easy .legal a{color:#0000a0}',
  'html.easy .task{background:#c0c0c0;color:#000;border-top:2px solid #fff}',
  'html.easy .task .clock{color:#000}',
  'html.easy .task [data-action="replay"]{display:none}',
  'html.easy .toast{background:#ffffe1;color:#000;border:1px solid #000}',
  'html.easy #tut{background:rgba(0,0,0,.6)}',
  'html.easy #tut .card{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)}',
  'html.easy #tut h3{color:#000080}',
  'html.easy #tut .close{color:#000}',
  'html.easy #tut .dot{background:#fff;border-color:#000}',
  'html.easy #tut .dot.on{background:#000}'
  ].join('\n');

  var st = document.createElement('style');
  st.id = 'easy-css';
  st.appendChild(document.createTextNode(CSS));
  (document.head || root).appendChild(st);

  /* ------------------------------------------------------------------- state */
  var buttons = [];
  function label(b) {
    b.textContent = '👓 EASY READ' + (on ? ': ON' : '');
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.setAttribute('title', on ? "Windows 98 look is on. Press to go back to the terminal look." : "Switch to a classic Windows 98 look.");
  }
  function enterDesktop() {
    /* when Easy Read is already on, skip the terminal boot screen */
    var d = document.getElementById('desktop');
    if (d) d.classList.add('on');
  }
  function apply(v, persist) {
    on = !!v;
    root.classList.toggle('easy', on);
    if (persist) write(on);
    if (on) enterDesktop();
    buttons.forEach(label);
  }
  function makeToggle() {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'easy-toggle';
    label(b);
    b.addEventListener('click', function () { apply(!on, true); });
    buttons.push(b);
    return b;
  }

  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(e.newValue === '1', false);
  });

  function mount() {
    var framed = false;
    try { framed = window.self !== window.top; } catch (e) { framed = true; }
    var clock = document.getElementById('clock');
    /* inside a home-page window: no button of its own, it follows the parent through "storage" */
    if (framed && !clock) { if (on) enterDesktop(); return; }
    var t = makeToggle();
    if (clock && clock.parentNode) {
      /* home and /follow: in the taskbar next to the clock */
      clock.parentNode.insertBefore(t, clock);
    } else {
      /* other pages: small floating button, top right */
      t.classList.add('easy-float');
      root.classList.add('easy-float-on');
      document.body.appendChild(t);
    }
    if (on) enterDesktop();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
