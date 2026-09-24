/*
  ====================================================================
  COCO Systems — FOLLOW RACCOON crash sequence  (follow-intro.js)
  Loaded by index.html. Runs only when someone clicks the red raccoon
  in the taskbar corner, or when the red page's REPLAY sends them to
  index.html#crash.

  WHAT IT DOES (about 5 seconds, skippable at any point)
  1. Glitches the hub the visitor is actually looking at: it jitters,
     tears and turns from green to red.
  2. "COCO.VIRUS" windows pop up, then a laughing pixel skull.
  3. Crash screen, "CONNECTION LOST", and a CRT power-off.
  4. Loads the red page (follow.html) in the same tab, which opens on
     the COCO Systems splash and boots into RED_OS.

  SAFE BY DESIGN
  - Visual only: CSS classes and one overlay. Nothing is downloaded,
    stored, or changed on the visitor's device. It never goes
    full-screen, never blocks the Back button, and never shows a
    leave-page prompt.
  - Browsers don't let a page close its own tab, and they block new
    tabs a page opens on its own after a delay, so the "reboot" happens
    in the same tab. After the CRT power-off the screen is black, so it
    still reads as the window shutting down and starting fresh.
  - Reduced-motion visitors skip straight to the red page.
  - Coming back with the Back button restores the hub normally.

  REMOVE THE FEATURE
  Delete this file, the <script src="follow-intro.js"> line in
  index.html, and the "follow-raccoon" lines there. The raccoon then
  just links to the red page.
  ====================================================================
*/
(function () {
  'use strict';

  var FOLLOW = 'follow';            /* the red page: follow.html */
  var root = document.documentElement;
  var reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var replay = location.hash === '#crash';

  /* ---------- styles (all prefixed ft- so they can't touch the hub's own) ---------- */
  var CSS = [
    '#ft-layer{position:fixed;inset:0;z-index:2147483000;display:none;pointer-events:auto;',
    '  font-family:"Space Mono","Courier New",monospace;color:#ff3b3b;background:rgba(5,0,0,0);transition:background-color .25s ease;}',
    'html.ft-on #ft-layer{display:block;}',
    'html.ft-on body{overflow:hidden;}',
    '.ft-sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;}',
    '#ft-skip{position:absolute;z-index:5;top:calc(12px + env(safe-area-inset-top,0px));right:12px;min-height:44px;padding:0 14px;',
    '  background:rgba(5,0,0,.7);color:#ff3b3b;border:1px solid #ff3b3b;font:inherit;font-size:.72rem;letter-spacing:1.5px;cursor:pointer;}',
    '#ft-skip:hover{background:rgba(255,59,59,.18);}',
    '#ft-skip:focus-visible{outline:2px solid #f2e6d8;outline-offset:3px;}',
    '.ft-fx{position:absolute;inset:0;overflow:hidden;}',
    '.ft-disc{position:absolute;left:16px;right:16px;bottom:calc(48px + env(safe-area-inset-bottom,0px));margin:0;text-align:center;',
    '  font-size:.68rem;letter-spacing:.5px;color:#ff3b3b;text-shadow:0 0 6px #000,0 0 2px #000;}',

    /* 1. glitch the real hub underneath */
    'html.ft-glitch #desktop{animation:ftJitter .9s steps(1) infinite;}',
    'html.ft-glitch #desktop,html.ft-glitch #matrixCanvas{filter:hue-rotate(var(--ft-hue,0deg)) saturate(1.5);transition:filter .5s steps(3);}',
    'html.ft-h1{--ft-hue:-70deg;} html.ft-h2{--ft-hue:-140deg;}',
    '@keyframes ftJitter{0%{transform:none;clip-path:none}',
    '  25%{transform:translate(-5px,1px) skewX(-1.2deg);clip-path:inset(0 0 9% 0)}',
    '  50%{transform:translate(4px,-2px);clip-path:none}',
    '  75%{transform:translate(-2px,0) skewX(1.5deg);clip-path:inset(7% 0 0 0)}',
    '  100%{transform:none;clip-path:none}}',
    '.ft-tear{position:absolute;left:-5%;right:-5%;top:var(--y);height:var(--h);display:none;',
    '  -webkit-backdrop-filter:hue-rotate(160deg) saturate(2) contrast(1.4);backdrop-filter:hue-rotate(160deg) saturate(2) contrast(1.4);',
    '  background:rgba(255,59,59,.06);animation:ftTear 1.4s steps(4) infinite;}',
    '#ft-layer[data-stage="glitch"] .ft-tear,#ft-layer[data-stage="virus"] .ft-tear{display:block;}',
    '@keyframes ftTear{0%{transform:translateX(-4%)}25%{transform:translateX(3%) scaleY(1.6)}50%{transform:translate(-2%,-30%)}75%{transform:translate(5%,40%) scaleY(.6)}100%{transform:none}}',

    /* 2. virus windows (COCO's own window style, not any real OS) */
    '.ft-win{position:absolute;display:none;border:1px solid #ff3b3b;background:#050000;box-shadow:0 0 22px rgba(255,59,59,.3);font-size:.78rem;line-height:1.7;}',
    '#ft-layer[data-stage="virus"] .ft-win.on{display:block;}',
    '.ft-w1{left:50%;top:44%;width:min(440px,92vw);transform:translate(-50%,-50%);z-index:3;}',
    '.ft-w2{left:calc(50% + min(90px,8vw));top:calc(44% + 96px);width:min(300px,70vw);transform:translate(-30%,-10%);z-index:2;}',
    '.ft-w3{left:calc(50% - min(120px,12vw));top:calc(44% - 140px);width:min(300px,70vw);transform:translate(-70%,-60%);z-index:1;}',
    '.ft-title{display:flex;justify-content:space-between;align-items:center;gap:10px;background:#2a0707;border-bottom:1px solid #8f1414;',
    '  padding:6px 10px;font-size:.72rem;letter-spacing:1px;}',
    '.ft-dots{display:flex;gap:6px;} .ft-dots i{width:11px;height:11px;border-radius:50%;border:1px solid #ff3b3b;}',
    '.ft-body{padding:14px 18px;} .ft-body p{margin:0 0 6px;min-height:1.7em;} .ft-warn{color:#ffb000;}',
    '.ft-bar{height:14px;border:1px solid #ff3b3b;margin-top:10px;padding:2px;} .ft-bar span{display:block;height:100%;width:0;background:#ff3b3b;}',
    '.ft-w1.on .ft-bar span{animation:ftFill 1.2s steps(10) .2s forwards;} @keyframes ftFill{to{width:100%}}',

    /* 3. skull */
    '#ft-layer[data-stage="skull"],#ft-layer[data-stage="crash"]{background:rgba(5,0,0,.94);}',
    '.ft-skull,.ft-crash{position:absolute;inset:0;display:none;align-items:center;justify-content:center;flex-direction:column;text-align:center;padding:72px 16px 56px;}',
    '#ft-layer[data-stage="skull"] .ft-skull,#ft-layer[data-stage="crash"] .ft-crash{display:flex;}',
    '.ft-skull svg{width:min(46vmin,220px);height:auto;shape-rendering:crispEdges;overflow:visible;}',
    '.ft-bone{fill:#f2e6d8;} .ft-eyes{fill:#ff3b3b;}',
    '#ft-layer[data-stage="skull"] .ft-jaw{animation:ftLaugh .33s steps(1) infinite;}',
    '@keyframes ftLaugh{0%{transform:translateY(0)}50%{transform:translateY(1.5px)}}',
    '.ft-laugh{font-family:"Share Tech Mono",monospace;font-size:clamp(1.4rem,6vw,2.4rem);letter-spacing:6px;margin:16px 0 0;min-height:1.3em;}',

    /* 4. crash, then the CRT loses connection */
    '.ft-crash{font-family:"Share Tech Mono",monospace;font-size:clamp(1rem,4.2vw,1.6rem);letter-spacing:2px;line-height:1.4;}',
    '.ft-crash p{margin:0;} .ft-halt{color:#ffb000;font-size:.8em;margin-top:14px !important;}',
    '.ft-lost{font-size:.7em;margin-top:18px !important;visibility:hidden;} .ft-lost.on{visibility:visible;}',
    'html.ft-crt{background:#000 !important;}',
    'html.ft-crt body{transform-origin:50% 50%;animation:ftCrtOff .5s ease-in forwards;}',
    '@keyframes ftCrtOff{0%{transform:scale(1,1);filter:none}55%{transform:scale(1,.006);filter:brightness(3)}100%{transform:scale(0,.006);filter:brightness(3)}}',

    /* reduced motion (only reached by an explicit REPLAY): calm version */
    '@media (prefers-reduced-motion: reduce){',
    '  html.ft-glitch #desktop{animation:none;} .ft-tear{animation:none;}',
    '  #ft-layer[data-stage="skull"] .ft-jaw{animation:none;}',
    '  html.ft-crt body{animation:ftFade .4s ease forwards;}',
    '  @keyframes ftFade{to{opacity:0}}',
    '}',

    /* REPLAY from the red page: hide the boot screen from the first frame */
    'html.ft-replay #bootScreen{display:none !important;} html.ft-replay #desktop{display:block;}'
  ].join('\n');

  var style = document.createElement('style');
  style.id = 'ft-style';
  style.textContent = CSS;
  (document.head || root).appendChild(style);
  if (replay) root.classList.add('ft-replay');

  /* ---------- markup ---------- */
  var SKULL =
    '<svg viewBox="0 0 16 18" focusable="false">' +
    '<path class="ft-bone" d="M4 0h8v1h-8zM2 1h12v1h-12zM1 2h14v1h-14zM1 3h14v1h-14zM1 4h14v1h-14zM1 5h2v1h-2zM7 5h2v1h-2zM13 5h2v1h-2zM1 6h1v1h-1zM7 6h2v1h-2zM14 6h1v1h-1zM1 7h1v1h-1zM7 7h2v1h-2zM14 7h1v1h-1zM1 8h2v1h-2zM6 8h4v1h-4zM13 8h2v1h-2zM2 9h5v1h-5zM9 9h5v1h-5zM3 10h4v1h-4zM9 10h4v1h-4zM3 11h10v1h-10zM3 12h1v1h-1zM5 12h1v1h-1zM7 12h2v1h-2zM10 12h1v1h-1zM12 12h1v1h-1z"/>' +
    '<path class="ft-eyes" d="M3 5h4v1h-4zM9 5h4v1h-4zM2 6h5v1h-5zM9 6h5v1h-5zM2 7h5v1h-5zM9 7h5v1h-5zM3 8h3v1h-3zM10 8h3v1h-3z"/>' +
    '<path class="ft-bone ft-jaw" d="M3 13h1v1h-1zM5 13h1v1h-1zM7 13h2v1h-2zM10 13h1v1h-1zM12 13h1v1h-1zM3 14h10v1h-10zM5 15h6v1h-6z"/>' +
    '</svg>';

  function win(cls, title, body) {
    return '<div class="ft-win ' + cls + '"><div class="ft-title"><span>' + title + '</span>' +
      '<span class="ft-dots"><i></i><i></i></span></div><div class="ft-body">' + body + '</div></div>';
  }

  var HTML =
    '<button id="ft-skip" type="button" aria-describedby="ft-note">SKIP INTRO &#9656;</button>' +
    '<p id="ft-note" class="ft-sr">A short, harmless retro crash animation is playing. In about five seconds it opens the COCO Systems follow page.</p>' +
    '<div class="ft-fx" aria-hidden="true">' +
      '<div class="ft-tear" style="--y:14%;--h:6%"></div>' +
      '<div class="ft-tear" style="--y:38%;--h:4%;animation-delay:-.4s"></div>' +
      '<div class="ft-tear" style="--y:61%;--h:7%;animation-delay:-.8s"></div>' +
      '<div class="ft-tear" style="--y:83%;--h:3%;animation-delay:-1.1s"></div>' +
      win('ft-w3', 'COCO.VIRUS (3)', '<p>SPREADING GOOD VIBES...</p>') +
      win('ft-w2', 'COCO.VIRUS (2)', '<p>REPLICATING...</p>') +
      win('ft-w1', 'COCO.VIRUS // EST. 1996',
        '<p class="ft-warn">SIDE EFFECTS MAY INCLUDE: FOLLOWING.</p><p class="ft-l1"></p><p class="ft-l2"></p>' +
        '<div class="ft-bar"><span></span></div>') +
      '<div class="ft-skull">' + SKULL + '<p class="ft-laugh"></p></div>' +
      '<div class="ft-crash"><p>FATAL ERROR 0xC0C0:<br>TOO MUCH PERSONALITY</p>' +
        '<p class="ft-halt">SYSTEM HALTED.</p><p class="ft-lost">CONNECTION LOST.</p></div>' +
      '<p class="ft-disc">// harmless animation. nothing is happening to your device.</p>' +
    '</div>';

  /* ---------- sequence ---------- */
  var timers = [], running = false, layer = null;
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function $(sel) { return layer.querySelector(sel); }
  function type(el, text, speed) {
    var i = 0;
    (function tick() {
      el.textContent = text.slice(0, ++i);
      if (i < text.length) later(tick, speed);
    })();
  }
  function go(hash) { location.href = FOLLOW + (hash || ''); }
  function desktop() { return document.getElementById('desktop'); }

  function build() {
    if (layer) return;
    layer = document.createElement('div');
    layer.id = 'ft-layer';
    layer.innerHTML = HTML;
    document.body.appendChild(layer);
    $('#ft-skip').addEventListener('click', function () { clearTimers(); go('#skip'); });
  }

  function stage(name) { layer.setAttribute('data-stage', name); }

  function run() {
    if (running) return;
    running = true;
    build();
    clearTimers();
    ['.ft-l1', '.ft-l2', '.ft-laugh'].forEach(function (s) { $(s).textContent = ''; });
    root.classList.add('ft-on', 'ft-glitch');
    if (desktop()) desktop().inert = true;
    stage('glitch');
    $('#ft-skip').focus({ preventScroll: true });

    later(function () { root.classList.add('ft-h1'); }, 350);
    later(function () { root.classList.add('ft-h2'); }, 800);
    later(function () {
      stage('virus');
      $('.ft-w1').classList.add('on');
      type($('.ft-l1'), 'UH OH. SOMETHING CATCHY GOT IN.', 22);
      later(function () { type($('.ft-l2'), 'REPLACING BORING WITH COCO...', 22); }, 750);
    }, 1200);
    later(function () { $('.ft-w2').classList.add('on'); }, 1550);
    later(function () { $('.ft-w3').classList.add('on'); }, 1900);
    later(function () { stage('skull'); type($('.ft-laugh'), 'HA HA HA', 110); }, 2700);
    later(function () { stage('crash'); }, 4100);
    later(function () { $('.ft-lost').classList.add('on'); }, 4450);
    later(function () { root.classList.add('ft-crt'); }, 4750);
    later(function () { go('#boot'); }, 5350);
  }

  function reset() {
    clearTimers();
    running = false;
    root.classList.remove('ft-on', 'ft-glitch', 'ft-h1', 'ft-h2', 'ft-crt', 'ft-replay');
    if (layer) {
      layer.removeAttribute('data-stage');
      Array.prototype.forEach.call(layer.querySelectorAll('.on'), function (el) { el.classList.remove('on'); });
    }
    if (desktop()) desktop().inert = false;
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && running) { clearTimers(); go('#skip'); }
  });

  /* Back button from the red page: the browser may restore this page mid-crash. */
  window.addEventListener('pageshow', function (e) { if (e.persisted) reset(); });

  document.addEventListener('DOMContentLoaded', function () {
    var link = document.querySelector('.follow-raccoon');
    if (link) {
      link.setAttribute('href', FOLLOW);
      link.addEventListener('click', function (e) {
        /* Cmd/Ctrl/Shift/middle click keep their normal "open in new tab" behavior. */
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        if (reduce) { go(''); return; }
        run();
      });
    }
    if (replay) {
      var boot = document.getElementById('bootScreen');
      if (boot) boot.classList.add('hidden');
      if (desktop()) desktop().classList.add('on');
      try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {}
      later(run, 700);
    }
  });
})();
