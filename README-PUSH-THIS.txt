COCO Systems — FULL CATCH-UP PUSH, 2026-10-08
====================================================================
Marketing tested the live site on 8 Oct and found GitHub Pages is
still serving whatever was live BEFORE this whole round of work —
"Last-Modified: Sat 3 Oct 2026." None of the follow.html / 404 / privacy
/ index / follow-intro bundles sent earlier actually made it onto
github.com/CRMConsultCO/COCO-Systems-Site. This zip replaces all of
those separate uploads with ONE bundle so you don't have to redo them
one at a time.

HOW TO PUSH (same steps every time — bookmark this section)
--------------------------------------------------------------------
1. Unzip this folder on your computer first. Don't drag the .zip
   itself into GitHub, and don't drag the unzipped FOLDER either —
   GitHub nests folder contents under a subfolder instead of landing
   them at the repo root. Drag the loose files one level up, out of
   the folder, before uploading.
2. Go to github.com/CRMConsultCO/COCO-Systems-Site
3. Click "Add file" -> "Upload files"
4. Drag in the 6 loose files below (not the folder, not the zip)
5. Scroll down, add a commit message (e.g. "Catch-up: skull tutorial,
   404/privacy pages, trim-shop name fix"), click "Commit changes"
6. Wait 10 minutes (GitHub Pages' cache is max-age=600), or hard-refresh
   (Ctrl/Cmd+Shift+R) the live URL to bypass your own browser cache
7. Check crmconsultco.com/, /follow, /404-doesnt-exist, /privacy on
   your phone — ideally once in Safari/Chrome directly AND once by
   pasting the link into an Instagram DM to yourself and opening it
   from there, since that's how most of your 100 leads will actually
   open it

WHAT'S IN THIS ZIP -> WHERE IT GOES (repo root, no subfolder)
--------------------------------------------------------------------
  index.html        -> /index.html        (REPLACES current file)
  follow.html        -> /follow.html       (REPLACES current file)
  follow-os.html      -> /follow-os.html     (NEW file)
  follow-intro.js     -> /follow-intro.js    (REPLACES current file)
  404.html         -> /404.html         (NEW file)
  privacy.html       -> /privacy.html       (NEW file)

Nothing else changes. demo-*.html, get-started.html, link-template.html,
CRM Setup.gs etc. are untouched — not part of this bundle.

WHAT'S ACTUALLY NEW SINCE 3 OCT
--------------------------------------------------------------------
  - follow.html: the full RED_OS link-in-bio rebuild, final skull
    behavior (red glowing badge, says "I SEE YOU", tap opens a 3-step
    tutorial overview — not the earlier cursor-follow or auto-cycling
    versions)
  - index.html: ONE content fix only — see below. Everything else
    (window manager, CHOP_SHOP demo, status widget, easter eggs) is
    unchanged from what was already a project doc.
  - follow-os.html: the old desktop-icon-grid RED_OS page, archived
    here as a standalone Easter-egg page, not linked from anywhere
  - follow-intro.js, 404.html, privacy.html: unchanged content, just
    confirmed these were never actually live and are included so the
    whole site matches what's documented in the project

ONE FIX MADE IN index.html JUST NOW (flagging, not asking)
--------------------------------------------------------------------
Marketing's 8 Oct note said the CHOP_SHOP demo (and its code comments)
named a real trim shop — 5 mentions — and flagged the standing rule:
never name the trim shop from the legal matter anywhere in the site.
Checked the file myself: "Ace Mobile Auto Trim" appeared exactly 5
times (3 window titles + 1 program description + 1 code comment), plus
a CSS class prefix (.ace-*) clearly derived from the same name.

Swapped it for a made-up name, "Overland Mobile Trim," everywhere —
window titles, the description text, code comments, and the .ace-*
CSS/JS prefix (now .shop-*, purely internal, never shown to a visitor).
A source search for "ace mobile" or the old class prefix now returns
nothing. If you'd rather use a different placeholder name than
"Overland Mobile Trim," it's one find-and-replace away — say the word
and I'll swap it before you push, or just edit it yourself, it only
appears in the CHOP_SHOP section of index.html.

NOT IN THIS PUSH (still open, see the separate note in chat)
--------------------------------------------------------------------
  - skull.js (the floating index.html widget) — still not installed;
    open question whether it's wanted at all now that /follow has its
    own skull
  - Marketing's P0 items #1 (mobile boot fix, untested on real phones),
    #2 (/follow 3-step-offer spec — follow.html above covers some of
    it but not all), #3 (home page prices/services section), #5-7
    (Quick Page dry run, intake form, DJ/creator sample)
  - get-started.html $25/$50 catalog mismatch (flagged earlier,
    still unresolved)
