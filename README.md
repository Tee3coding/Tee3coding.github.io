# Tee3coding Portfolio

A personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**. It exports to static files, so it deploys straight to GitHub Pages.

## Features

- Animated hero with staggered entrance (Framer Motion variants)
- Scroll-triggered reveal animations via a reusable `<Reveal />` component
- Hover and tap micro-interactions on cards and buttons
- Light/dark theme following the system preference
- Reduced-motion friendly smooth scrolling
- All content lives in one file: `src/data/portfolio.ts`

## Tech stack

| Tool | Purpose |
| --- | --- |
| Next.js | Framework (static export) |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animation |

## Getting started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build and export static site to `out/` |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  app/
    layout.tsx        Root layout, fonts, metadata
    page.tsx          Home page (assembles sections)
    globals.css       Tailwind import and theme variables
  components/
    Navbar.tsx        Fixed top navigation
    Hero.tsx          Animated intro
    About.tsx         Bio and skills
    Projects.tsx      Project cards
    Contact.tsx       Contact call to action
    Reveal.tsx        Scroll-reveal wrapper
  data/
    portfolio.ts      Your name, bio, skills and projects
```

## Customising

1. Edit `src/data/portfolio.ts` with your name, bio, links, skills and projects.
2. Change the accent colour by replacing the `indigo-*` Tailwind classes.
3. Add a new section: create a component in `src/components/`, wrap content in `<Reveal>`, and add it to `src/app/page.tsx`.

## Deployment (GitHub Pages)

This repo is named `Tee3coding.github.io`, so it is served from the root domain with no `basePath` needed.

A workflow in `.github/workflows/deploy.yml` builds and publishes on every push to `main`. One-time setup: in the repo go to **Settings > Pages** and set **Source** to **GitHub Actions**.

If you rename the repo to something else, add `basePath: "/<repo-name>"` to `next.config.ts`.

## License

MIT
