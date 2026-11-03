# FC Växjö Website

Public website for FC Växjö. It is separate from the mobile app.

The site is Next.js and is built to plain HTML, so Hostinger can host the `out` folder and search engines can read the text.

## Run it on your computer

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build the files for Hostinger

```bash
npm run build
```

Upload the `out` folder. Before launch, set the real domain in `src/lib/site.ts`. The sitemap and canonical links use that address.

## Where the club facts live

Training times are in `src/data/teams.ts`. Matches are in `src/data/matches.ts`. News text is in `src/data/news.ts`. Later these files are the place to swap in data from the app API.
