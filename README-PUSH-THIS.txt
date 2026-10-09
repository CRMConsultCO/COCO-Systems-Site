COCO Systems — /follow v2 push, 2026-10-08
====================================================================
Marketing's "follow v2, menu order, links, legibility" handoff, built.
3 files changed. Sections 1-6 of the handoff; section 8 (pixel phone
frame) intentionally NOT built — it's P1 polish pending your/CEO's
budget sign-off on the $1,000 freeze.

HOW TO PUSH
--------------------------------------------------------------------
1. Go to github.com/CRMConsultCO/COCO-Systems-Site
2. Click "Add file" -> "Upload files"
3. Drag in follow.html and get-started.html at the REPO ROOT (same
   level as index.html) — these replace the current files there.
4. For demos/index.html: open the demos/ folder in the repo first
   (click into it), THEN "Add file" -> "Upload files" there, and
   drag in the index.html from the demos/ subfolder of this bundle.
   It needs to land at demos/index.html, not the repo root.
5. Commit message, e.g. "follow v2: menu reorder, legibility,
   destination-page price fixes" — commit directly to main.
6. Wait ~10 min (GitHub Pages cache) or hard-refresh on your phone.
7. Check /follow, /get-started.html and /demos/ — ideally once in
   Safari/Chrome directly and once by opening the /follow link from
   an Instagram DM to yourself, since that's how most leads will see it.

WHAT CHANGED
--------------------------------------------------------------------
follow.html
  - Menu reordered to: QUICK_PAGE $25 (hot) / SAMPLES / LINK_PAGE $50
    / LINK_CHECK $1 / FOR_BUSINESSES / DM_ME / EMAIL / SOMETHING_ELSE.
    Every button now links somewhere real. REPLAY moved to a small
    footer link ("replay the signal").
  - #1/#3/#4 (Quick Page, Link Page, Link Check) go to your DM link
    (ig.me/m/crmconsultco) for now — get-started.html doesn't
    preselect a tier yet, so routing there would still dead-end.
  - Text sizes bumped up (title 16px, sub-line 13px, full opacity) and
    scanlines dimmed behind the text — should read a lot easier.
  - Header compacted so the first 3 buttons are visible on a phone
    screen without scrolling (verified at 375x667).
  - README.TXT window now shows a short FAQ instead of the old
    key/value list.
  - Page title/meta updated for sharing/SEO.
  - Instagram handle confirmed by Coco (10/8): all DM links point to
    @crmconsultco (ig.me/m/crmconsultco and instagram.com/crmconsultco),
    not the @crmconsultingco handle the earlier draft used.

get-started.html
  - The $25/$50 link-page tiers now match what /follow actually says
    (was showing $25/8-links and $75/custom-domain — out of sync).
    Renamed them "QUICK PAGE" / "LINK PAGE" to match /follow's button
    names. Added a $99 "analytics + custom design upgrade" add-on to
    match the number already on /demos/. The business tiers (PAGE,
    PAGE PRO, STARTER CRM, CUSTOM) and the lead form are untouched.

demos/index.html
  - Added one line above the $50 section flagging the new $25 Quick
    Page option. Didn't add a DJ/creator sample card — that's a
    separate, bigger task (a new sample page), not just a copy fix.

NOT IN THIS PUSH
--------------------------------------------------------------------
  - Pixel phone frame around /follow (Marketing's section 8) — P1,
    waiting on CEO budget confirmation.
  - get-started.html's ?offer= preselect + creator-friendly intake
    questions (P0-6) — until that's built, the DM-link routing above
    is the workaround.
  - A DJ/creator sample page on /demos/ (P0-7).
  - index.html's mobile boot-gate fix (P0-1) — separate, unrelated to
    this handoff; still open.
