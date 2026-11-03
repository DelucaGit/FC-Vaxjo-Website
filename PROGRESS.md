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

## 3 November 2026 — Version 1 pages

**What shipped**

- Next.js app with seven routes: Hem, Nyheter, MatchCamp-artikeln, Träningstider, Om oss, Kontakt, Bli medlem och sponsra.
- One look on every page: Anton, crimson `#8F1822`, gold, white. Nyheter and Kontakt were drawn with a second font. They now follow Hem.
- `npm run build` writes plain HTML into `out`, including `sitemap.xml` and `robots.txt`.
- Each page has its own title, description, and canonical link. The layout adds a SportsOrganization block so search engines can read the club name, address, and founding year.
- Pictures still use the Google links from Stitch. Generated portraits of named people are not used.
- Forms open the visitor's email app. The site does not store messages, because Hostinger will only receive HTML files.
- Galleri, integritetspolicy, stadgar, and styrelse are still not pages.

**Why the data sits in `src/data`**

Training times, matches, and news are plain lists. When the app API is ready, those lists are the only place that needs to change. The pages stay the same.

**Left out on purpose**

- Birth years from the design (P15 as 2015, P16 as 2016) do not match the team names, so they are not on the site.
- Mirnes has two phone numbers in the design. The team card uses 079-331 91 04. The contact card uses 070-957 11 54. The club needs to confirm one.
- The April 2026 matches are the design's sample schedule, not a live feed.

**Next**

Replace the Google image links with real photos, confirm phone numbers, then point `src/data` at the API.
