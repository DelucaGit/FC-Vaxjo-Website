# Progress and decisions

This file records what we shipped and why we chose it. It is the source for a later write-up of the project.

## 3 November 2026 — Website gets its own repo

**What we decided**

- The public site lives in this folder, not inside the mobile app repo.
- GitHub repo: `DelucaGit/FC-Vaxjo-Website` (public, same as the app repo).
- Hosting target: Hostinger Business. The site will be built to plain HTML so search engines can read it and Hostinger does not need a Node server.
- Version 1 is the seven pages from the Stitch export: Hem, Om oss, Träningstider, Bli medlem & sponsra, Kontakt, Nyheter, and the MatchCamp article.
- Galleri, Integritetspolicy, Klubbstadgar, and Styrelse & ledning are not in version 1. The design did not include those pages.
- All pages will share the look of Hem (Anton, crimson, gold). Nyheter, the article, and Kontakt were drawn with a second font set. One look keeps the club feeling like one site.
- Photos stay as the Google image links from Stitch until real club photos are ready.
- Later, training times, schedules, and coming matches will come from the app API. The site will ask the API for that data. It does not need to live in the app repo to do that.

**Why a separate repo**

The website and the app ship to different places and on different days. A branch inside `FC-Vaxjo-Mobile-App` would still mix the two histories, and that repo already had unfinished app work.

**Next**

Scaffold the Next.js app in this folder, then turn the seven Stitch pages into real routes.
