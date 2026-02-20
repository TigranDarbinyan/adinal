# Adinal Laser Studio Website

Marketing landing page for **Adinal Laser Studio** (Scottsdale, Arizona), built with Astro + React.

## What this site includes

- Hero section with primary booking/call CTAs
- About section for practitioner background
- License & certification gallery with lightbox preview
- Service list with booking links
- Contact/location section with embedded map
- FAQ section
- Mobile bottom CTA bar (Call / Book)

## Tech stack

- [Astro](https://astro.build/) for static site generation
- React (for the mobile CTA component)
- Plain CSS (global + component-level styles)

## Getting started

```bash
npm install
npm run dev
```

Site runs locally at `http://localhost:4321` by default.

## Scripts

- `npm run dev` — start development server
- `npm run build` — build production output into `dist/`
- `npm run preview` — preview the production build locally
- `npm run astro` — run Astro CLI commands

## Build

```bash
npm run build
```

## Project structure

```text
/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/      # Page sections and reusable UI blocks
│   ├── layouts/         # Shared page layout
│   ├── pages/           # Route entry points
│   └── styles/          # Global styling
├── astro.config.mjs
└── package.json
```
