# Aleksandar Mijailović — portfolio

Personal portfolio site. Next.js 16 + Tailwind CSS, exported as a static site.

## Edit content

All text, links and projects live in [`src/data/profile.ts`](src/data/profile.ts). Links left as `"#"` are hidden automatically. Fill in GitHub, LinkedIn and the booking app's live/code URLs there.

The CV served by the "Download CV" button is `public/cv-aleksandar-mijailovic.pdf`. Replace that file to update it.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Import the repo in [Vercel](https://vercel.com/new). No settings needed. `npm run build` writes a static site to `out/`, which also works on Netlify or GitHub Pages.
