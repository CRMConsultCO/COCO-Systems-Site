/*
  EASY READ MODE  ·  assets/easy.js  ·  COCO Systems
  --------------------------------------------------------------------------
  One shared script, one toggle, one skin: a classic '98-style desktop
  (gray bevels, navy title bars, teal desktop, big Tahoma-style type, high
  contrast, no flicker, no scanlines, no animation).

  HOW IT WORKS
    - Adds class "easy" to <html>. All the styling lives in the CSS string
      below and only applies under html.easy, so the normal look is untouched.
    - State is remembered in localStorage ("coco_easy"), wrapped in try/catch.
      If storage is blocked, it still works for the current page view.
    - Share a link that starts in Easy Read:  https://crmconsultco.com/follow?easy=1
      (?easy=0 forces the normal look and remembers it).
    - Pages inside the home-page windows (get-started) stay in sync through the
      "storage" event.

  FUTURE ERA PACK (backlog): this file is skin #1. Other eras (DOS, Vista, 7,
  Mac Lisa '83 and onward) would be more html.skin-xxx blocks sharing the same
  content and toggle. See claude/backlog.md.
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
  /* toggle button + gate button + message box: visible in BOTH modes */
  '.easy-toggle{font:inherit;font-size:inherit;color:inherit;background:transparent;border:1px solid currentColor;padding:6px 10px;min-height:40px;cursor:pointer;white-space:nowrap;letter-spacing:.04em}',
  '.taskbar .easy-toggle{min-height:28px;padding:3px 10px;font-size:.68rem}',
  '.easy-toggle:hover,.easy-toggle:focus-visible{outline:2px solid currentColor;outline-offset:2px}',
  'html.easy .easy-float{background:#c0c0c0;color:#000;border:2px solid;border-color:#fff #404040 #404040 #fff;font-family:Tahoma,Verdana,Arial,sans-serif;font-weight:700;font-size:14px}',
  '.easy-float{position:fixed;top:8px;right:8px;z-index:2000;background:#020805;color:#3dff8a;font:12px "Space Mono","Courier New",monospace}',
  'html.easy-float-on body{padding-top:60px}',
  '.easy-boot{margin-top:28px;background:transparent;border:1px solid #3dff8a;color:#3dff8a;font:14px "Space Mono","Courier New",monospace;padding:12px 18px;min-height:48px;cursor:pointer;max-width:320px}',
  '.easy-boot:hover,.easy-boot:focus-visible{background:#3dff8a;color:#020805;outline:none}',
  '#easy-msg{position:fixed;left:50%;bottom:84px;transform:translateX(-50%);z-index:2100;width:min(92vw,340px);display:none;background:#c0c0c0;color:#000;border:2px solid;border-color:#fff #404040 #404040 #fff;box-shadow:2px 2px 0 rgba(0,0,0,.55);font:16px/1.5 Tahoma,"MS Sans Serif",Verdana,Arial,sans-serif;text-transform:none;letter-spacing:0}',
  '#easy-msg.on{display:block}',
  '#easy-msg .t{background:linear-gradient(90deg,#000080,#1084d0);color:#fff;font-weight:700;padding:4px 8px}',
  '#easy-msg .b{padding:14px 14px 6px}',
  '#easy-msg .r{padding:6px 14px 14px;text-align:right}',
  '#easy-msg button{font:inherit;min-width:84px;min-height:36px;background:#c0c0c0;color:#000;border:2px solid;border-color:#fff #404040 #404040 #fff;cursor:pointer}',
  '#easy-msg button:focus-visible{outline:2px dotted #000;outline-offset:-6px}',

  /* ---------- EASY READ SKIN: everything below only under html.easy ---------- */
  'html.easy{--bg:#c0c0c0;--card:#fff;--text:#000;--muted:#1a1a1a;--acc:#000080;--border:#404040;--panel:#fff;--title:#000080;--accent:#000080;--e-font:Tahoma,"MS Sans Serif",Verdana,"Segoe UI",Arial,sans-serif;--e-lit:#fff;--e-shade:#404040}',
  'html.easy body,html.easy body *{font-family:var(--e-font)!important;letter-spacing:normal}',
  'html.easy body{font-size:18px;line-height:1.6;text-transform:none;background:var(--bg)!important;color:#000!important;-webkit-font-smoothing:auto}',
  'html.easy body::before,html.easy body::after{display:none!important}',
  'html.easy *{animation:none!important;transition:none!important;text-shadow:none}',
  'html.easy a{color:#0000a0}',
  'html.easy a:visited{color:#551a8b}',
  'html.easy :focus-visible{outline:3px solid #000080!important;outline-offset:2px}',
  'html.easy .coon,html.easy .coon *,html.easy .follow-raccoon,html.easy .follow-raccoon *{font-family:"Courier New",monospace!important}',

  /* static text pages: privacy, terms, faq */
  'html.easy main{background:#fff;border:2px solid;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade);padding:28px 24px 40px;margin:16px auto;max-width:720px}',
  'html.easy h1,html.easy h2{color:#000080!important;text-shadow:none!important}',
  'html.easy h1{font-size:1.7rem!important;line-height:1.25}',
  'html.easy h2{font-size:1.25rem!important;border-bottom:2px solid #000!important}',
  'html.easy p,html.easy li{font-size:1rem!important;color:#000!important}',
  'html.easy .note{background:#ffffe1!important;color:#000!important;border:1px solid #000!important;border-radius:0!important;font-size:.95rem!important}',
  'html.easy .lede,html.easy .updated{color:#222!important;font-size:.95rem!important}',
  'html.easy .q{border-bottom:1px solid #404040!important}',
  'html.easy .cta,html.easy a.btn{background:#c0c0c0!important;color:#000!important;border:2px solid!important;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)!important;border-radius:0!important;text-decoration:none;font-size:1rem!important}',
  'html.easy .sitefoot,html.easy .sitefoot a,html.easy body>footer,html.easy body>footer a{color:#000!important;font-size:.95rem!important;opacity:1!important}',
  'html.easy .sitefoot a,html.easy body>footer a{color:#0000a0!important}',

  /* 404 dialog */
  'html.easy .dialog{background:#c0c0c0!important;border:2px solid!important;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)!important;box-shadow:2px 2px 0 rgba(0,0,0,.55)!important;color:#000}',
  'html.easy .dialog .titlebar{background:linear-gradient(90deg,#000080,#1084d0)!important;color:#fff!important;border:0!important;font-size:1rem!important;font-weight:700}',
  'html.easy .dialog .dots{display:none}',
  'html.easy .dialog h1,html.easy .dialog .code,html.easy .dialog p.msg{color:#000!important}',

  /* get-started (and any form page) */
  'html.easy .glow{text-shadow:none!important}',
  'html.easy .topbar{opacity:1!important;font-size:1rem!important}',
  'html.easy .topbar a{color:#0000a0!important}',
  'html.easy .sub,html.easy .step-title,html.easy .fallback,html.easy label{opacity:1!important;color:#000!important;font-size:1rem!important}',
  'html.easy .step-title .n{color:#000080!important}',
  'html.easy .panel,html.easy .invoice{background:#fff!important;color:#000!important;border:2px solid!important;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade)!important}',
  'html.easy input,html.easy select,html.easy textarea{background:#fff!important;color:#000!important;border:2px solid!important;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade)!important;font-size:1.05rem!important;border-radius:0!important}',
  'html.easy button:not(.easy-toggle):not(.easy-boot){background:#c0c0c0;color:#000!important;border:2px solid!important;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)!important;border-radius:0}',
  'html.easy .card,html.easy .addon{background:#fff!important;color:#000!important;border:2px solid #404040!important;font-size:1rem!important}',
  'html.easy .card .cdesc,html.easy .card .cprice,html.easy .addon .aprice{opacity:1!important;font-size:.95rem!important}',
  'html.easy .card.selected,html.easy .addon.selected{background:#000080!important;color:#fff!important}',
  'html.easy .card.selected *,html.easy .addon.selected *{color:#fff!important}',
  'html.easy .star{color:#7a4d00!important}',
  'html.easy .invoice,html.easy .invoice *{font-size:1rem!important;opacity:1!important}',

  /* ---------- HOME: classic teal desktop ---------- */
  'html.easy body{overflow:hidden}',
  'html.easy #matrixCanvas,html.easy #bootScreen{display:none!important}',
  'html.easy #desktop{padding:16px 16px 150px;color:#fff;background:#008080}',
  'html.easy .topbar.glow{display:none}',
  '.easy-hint{display:none}',
  'html.easy .easy-hint{display:block;background:#ffffe1;color:#000;border:1px solid #000;padding:10px 14px;margin:0 0 18px;max-width:520px;font-size:1.05rem;line-height:1.5;box-shadow:2px 2px 0 rgba(0,0,0,.45)}',
  'html.easy .icons{width:auto;max-width:720px;gap:12px}',
  'html.easy .icon-btn{width:150px;color:#fff;font-size:1rem;font-weight:700;border:2px dotted transparent;padding:10px 6px;text-shadow:1px 1px 0 #000;word-break:break-word;min-height:44px}',
  'html.easy .icon-btn .glyph{font-size:2.8rem}',
  'html.easy .icon-btn:hover,html.easy .icon-btn:focus-visible{background:#000080;border-color:#fff}',
  'html.easy .icon-btn.highlight{color:#ffff80}',
  'html.easy .widget{position:static;width:100%;max-width:460px;margin:18px 0;padding:0 0 12px;background:#c0c0c0;color:#000;font-size:1rem;line-height:1.6;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);box-shadow:2px 2px 0 rgba(0,0,0,.5)}',
  'html.easy .widget h3{margin:0 0 8px;padding:5px 10px;background:linear-gradient(90deg,#000080,#1084d0);color:#fff;border:0;font-size:1rem}',
  'html.easy .widget .infra-line,html.easy .widget .w-note,html.easy .widget>div:not(.infra-line){padding:1px 12px;opacity:1}',
  'html.easy .widget *{color:#000;opacity:1}',
  'html.easy .widget h3{color:#fff}',
  'html.easy .status-ok,html.easy .widget .status-ok{color:#004d00;font-weight:700}',
  'html.easy .window{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);box-shadow:3px 3px 0 rgba(0,0,0,.5)}',
  'html.easy .window .titlebar{background:linear-gradient(90deg,#000080,#1084d0);color:#fff;border:0;font-size:1rem;font-weight:700;padding:4px 6px 4px 10px}',
  'html.easy .window .titlebar .dots{gap:4px}',
  'html.easy .window .titlebar .dots span{position:relative;width:28px;height:26px;border-radius:0;background:#c0c0c0;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);color:#000}',
  'html.easy .window .titlebar .dots span::after{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;line-height:1}',
  'html.easy .window .titlebar .dots .min::after{content:"_";align-items:flex-end;padding-bottom:3px}',
  'html.easy .window .titlebar .dots .newtab::after{content:"\\2197"}',
  'html.easy .window .titlebar .dots .close::after{content:"\\00D7";font-size:20px}',
  'html.easy .window .titlebar .dots span.close:hover,html.easy .window .titlebar .dots span.newtab:hover{background:#dfdfdf}',
  'html.easy .window .window-body{background:#fff;color:#000;font-size:1rem}',
  'html.easy .window .window-body *{color:inherit}',
  'html.easy .board-col,html.easy .board-card{border-color:#404040}',
  'html.easy .board-card .badge{background:#000080;color:#fff!important}',
  'html.easy .taskbar{height:50px;background:#c0c0c0;color:#000;font-size:1rem;border-top:2px solid #fff;gap:8px;padding:0 8px}',
  'html.easy .taskbar .start{background:#c0c0c0;color:#000;font-weight:700;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);padding:6px 12px}',
  'html.easy .taskbar .tab{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);padding:6px 10px;min-height:38px}',
  'html.easy .taskbar .tab.active{border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade);font-weight:700;background:#dcdcdc}',
  'html.easy .taskbar .start,html.easy .taskbar .clock,html.easy .taskbar .easy-toggle{white-space:nowrap}',
  'html.easy .taskbar .clock{opacity:1;border:2px solid;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade);padding:6px 10px;color:#000}',
  'html.easy .taskbar .follow-raccoon{color:#8b0000;font-size:9px}',
  'html.easy .taskbar .easy-toggle{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);font-weight:700}',
  'html.easy .sitefoot{bottom:50px;background:#c0c0c0;color:#000;font-size:.9rem;border-top:2px solid #fff;padding:6px 10px}',
  'html.easy .sitefoot a{color:#0000a0}',
  '@media (max-width:720px){html.easy .window{inset:10px 10px 62px 10px!important}html.easy .widget{max-width:none}html.easy .icon-btn{width:calc(50% - 4px);font-size:.85rem;word-break:normal}html.easy .icons{gap:6px}html.easy .taskbar{font-size:.9rem}html.easy .taskbar .clock{display:none}html.easy .taskbar .easy-toggle{padding:6px 8px;font-size:.85rem}}',

  /* ---------- FOLLOW: RED_98 ---------- */
  'html.easy #boot{display:none!important}',
  'html.easy .wrap{max-width:560px;padding-bottom:120px}',
  'html.easy .box{background:#c0c0c0;color:#000;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);border-radius:0}',
  'html.easy .box:hover,html.easy .box:focus-visible{background:#dfdfdf;color:#000;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)}',
  'html.easy .sys{font-size:.95rem;color:#000}',
  'html.easy .share{font-size:.95rem;padding:10px 12px}',
  'html.easy .hijack{font-size:1rem;color:#8b0000;font-weight:700}',
  'html.easy .skullbtn{background:#c0c0c0;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit);border-radius:0;padding:12px}',
  'html.easy .skull{color:#8b0000;filter:none}',
  'html.easy .skullbub{background:#ffffe1;color:#000;border:1px solid #000;font-size:.95rem;max-width:280px}',
  'html.easy h1{font-size:1.7rem;color:#000;margin-top:14px}',
  'html.easy .tagline{font-size:1.05rem;color:#000}',
  'html.easy .cur{display:none}',
  'html.easy .prog{min-height:68px;padding:12px 14px;gap:10px;grid-template-columns:34px 1fr 20px}',
  'html.easy .prog .ic{font-size:1.4rem}',
  'html.easy .prog .nm{font-size:1.15rem;color:#000}',
  'html.easy .prog .tag{font-size:.9rem;opacity:1;color:#333}',
  'html.easy .prog .sub,html.easy .prog:hover .sub,html.easy .prog:focus-visible .sub{font-size:1.05rem;line-height:1.4;color:inherit}',
  'html.easy .prog .go{font-size:1.1rem}',
  'html.easy .prog.hot,html.easy .prog.hot:hover,html.easy .prog.hot:focus-visible{background:#8b0000;color:#fff;border-color:#d46a6a #3a0000 #3a0000 #d46a6a}',
  'html.easy .prog.hot .nm,html.easy .prog.hot .tag,html.easy .prog.hot .sub{color:#fff}',
  'html.easy .win{background:#fff;color:#000;border:2px solid;border-color:var(--e-shade) var(--e-lit) var(--e-lit) var(--e-shade)}',
  'html.easy .win .bar{background:linear-gradient(90deg,#8b0000,#c42b2b);color:#fff;border:0;font-size:1rem;font-weight:700;padding:5px 10px}',
  'html.easy .faq{padding:14px 14px 6px;gap:14px}',
  'html.easy .faq-item{border-bottom:1px solid #404040}',
  'html.easy .faq-q{font-size:1.1rem;color:#000}',
  'html.easy .faq-a{font-size:1.05rem;line-height:1.6;color:#000}',
  'html.easy .legal{font-size:.95rem;color:#000;border-top:2px solid #404040}',
  'html.easy .legal a{color:#0000a0}',
  'html.easy .task{flex-wrap:wrap;background:#c0c0c0;color:#000;border-top:2px solid #fff;font-size:.9rem;letter-spacing:0}',
  'html.easy .task .tb{padding:8px 10px;min-height:40px;display:inline-flex;align-items:center}',
  'html.easy .task .clock{color:#000;white-space:nowrap}',
  'html.easy .task [data-action="replay"]{display:none}',
  'html.easy .task .tb{white-space:nowrap}',
  'html.easy .toast{background:#ffffe1;color:#000;border:1px solid #000;font-size:1rem}',
  'html.easy #tut{background:rgba(0,0,0,.6)}',
  'html.easy #tut .card{background:#c0c0c0;color:#000;max-width:360px;border:2px solid;border-color:var(--e-lit) var(--e-shade) var(--e-shade) var(--e-lit)}',
  'html.easy #tut h3{font-size:1.05rem;color:#000080}',
  'html.easy #tut p{font-size:1.05rem;line-height:1.55}',
  'html.easy #tut .close{color:#000;font-size:1.4rem;min-width:36px;min-height:36px}',
  'html.easy #tut .dot{background:#fff;border-color:#000}',
  'html.easy #tut .dot.on{background:#000}',
  'html.easy #tut .nav{font-size:1rem;padding:9px 14px}'
  ].join('\n');

  var st = document.createElement('style');
  st.id = 'easy-css';
  st.appendChild(document.createTextNode(CSS));
  (document.head || root).appendChild(st);

  /* ------------------------------------------------------------- message box */
  var msg, msgTimer;
  function say(text) {
    if (!msg) {
      msg = document.createElement('div');
      msg.id = 'easy-msg';
      msg.setAttribute('role', 'status');
      msg.setAttribute('aria-live', 'polite');
      msg.innerHTML = '<div class="t">Easy Read</div><div class="b"></div><div class="r"><button type="button">OK</button></div>';
      document.body.appendChild(msg);
      msg.querySelector('button').addEventListener('click', function () { msg.classList.remove('on'); });
    }
    msg.querySelector('.b').textContent = text;
    msg.classList.add('on');
    clearTimeout(msgTimer);
    msgTimer = setTimeout(function () { msg.classList.remove('on'); }, 4500);
  }

  /* ------------------------------------------------------------------- state */
  var buttons = [];
  function label(b) {
    b.textContent = '👓 EASY READ' + (on ? ': ON' : '');
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
    b.setAttribute('title', on ? 'Easy Read is on. Press to go back to the normal look.' : 'Turn on Easy Read: big print, high contrast, no flicker.');
  }
  function enterDesktop() {
    var d = document.getElementById('desktop');
    if (d) d.classList.add('on');
  }
  function apply(v, announce, persist) {
    on = !!v;
    root.classList.toggle('easy', on);
    if (persist) write(on);
    if (on) enterDesktop();
    buttons.forEach(label);
    if (announce) {
      say(on ? 'Easy Read is on. Big print, high contrast, no flicker. Press the button again to go back.'
             : 'Back to the hacker look. Press EASY READ any time to switch.');
    }
  }
  function makeToggle() {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'easy-toggle';
    label(b);
    b.addEventListener('click', function () { apply(!on, true, true); });
    buttons.push(b);
    return b;
  }

  window.addEventListener('storage', function (e) {
    if (e.key === KEY) apply(e.newValue === '1', false, false);
  });

  function mount() {
    /* 1) in a taskbar, next to the clock (home and /follow) */
    var framed = false;
    try { framed = window.self !== window.top; } catch (e) { framed = true; }
    var clock = document.getElementById('clock');
    if (framed && !clock) { if (on) enterDesktop(); return; }
    var t = makeToggle();
    if (clock && clock.parentNode) {
      clock.parentNode.insertBefore(t, clock);
    } else {
      /* 2) everywhere else: small floating button, top right */
      t.classList.add('easy-float');
      root.classList.add('easy-float-on');
      document.body.appendChild(t);
    }

    /* home only: gate button + welcome hint */
    var gate = document.getElementById('bootScreen');
    if (gate) {
      var g = makeToggle();
      g.className = 'easy-boot';
      label(g);
      /* keep the gate's own click/Enter handler (boot) from also firing */
      g.addEventListener('keydown', function (e) { e.stopPropagation(); });
      g.addEventListener('click', function (e) { e.stopPropagation(); });
      gate.appendChild(g);
      var d = document.getElementById('desktop');
      if (d) {
        var h = document.createElement('div');
        h.className = 'easy-hint';
        h.setAttribute('role', 'note');
        h.textContent = 'Welcome! Click any icon to open it. To hire us, open GET_STARTED.EXE.';
        d.insertBefore(h, d.firstChild);
      }
    }
    if (on) enterDesktop();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
