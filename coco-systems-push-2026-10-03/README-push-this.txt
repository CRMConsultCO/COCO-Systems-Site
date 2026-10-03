COCO Systems — manual push bundle (freeze priority #1), 2026-10-03
=====================================================================

GitHub repo: CRMConsultCO/COCO-Systems-Site (confirmed from your
Connectors screen). This Engineering session can't push directly to
it yet (see handoffs/ENG-2026-10-03-reply-to-freeze.md in the project
for why — short version: the repo is connected to your account, but
not to this particular chat session, and there's no self-service way
for me to attach it from here). So: unzip this and push/upload these
5 files yourself, exactly as named, to the REPO ROOT.

Files in this zip -> where they go:
  404.html          -> /404.html           (repo root)
  privacy.html      -> /privacy.html       (repo root)
  follow.html       -> /follow.html        (repo root, or wherever
                                             your /follow route already
                                             points -- same path it's
                                             on now, just updated content)
  follow-intro.js   -> /follow-intro.js    (repo root, same path as now)
  index.html        -> /index.html         (repo root, same path as now)

What changed in each (full detail in the handoff doc):
  - 404.html        NEW. Crashed RED_OS error dialog, links to both
                     /follow and /.
  - privacy.html     NEW. Plain-language draft privacy page -- flagged
                     as not yet attorney-reviewed.
  - follow.html       UPDATED. REPLAY.EXE now does the fast
                     ?replay#boot version instead of the full intro.
  - follow-intro.js   UPDATED. Added the "SIMULATION - NO SYSTEM
                     CHANGES" label text.
  - index.html        UPDATED. New-tab titlebar button on demo windows,
                     and the hover "stats log" now shows your real
                     confirmed pricing (CHOP_SHOP/BOOTH_RENT/INK_LOG/
                     FULL_STACK) instead of placeholders, plus the
                     "Estimates. Flat price confirmed in writing
                     before work starts." disclaimer line.

Everything else on the site (demo-*.html, get-started.html, CRM
Setup.gs, etc.) is untouched -- only these 5 files changed.

One GitHub commit, one message, covers all 5:
  "Push 404/privacy pages, /follow fast-replay fix, SIMULATION label,
   real pricing in hover widget"

After it's live, ping me and I'll do a quick pass on the deployed
site (boot -> click around -> hit a bad URL -> check /follow) to
confirm nothing broke in the copy.
