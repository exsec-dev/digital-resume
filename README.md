# Digital Resume

Bilingual single-page resume. Live at [exsec.dev](https://exsec.dev).

## Tech Stack

`React 19` `TypeScript` `Vite` `SCSS` `i18next`

## Features

- **i18n** – English and Russian locales with typed translation keys: a typo in a key is a compile-time error
- **Theming** – light and dark schemes on CSS custom properties: system-preference sync, persisted user choice, FOUC-free first paint
- **Accessibility** – skip link, focus-visible states, ARIA labels, `prefers-reduced-motion` support
- **Kinetic typography** – hero title reacts to pointer proximity via a variable font axis, with an intersection-based fallback on touch devices
- **Performance** – gzip/brotli precompression, lazy images
- **Resilience** – error boundary with a localized fallback screen

## Architecture Notes

- Small, accessible UI primitives are implemented locally; semantic HTML and CSS handle the rest without a component-library runtime
- Resume data lives next to the components that render it; all user-facing copy lives in locale files
- The build date in the footer is injected at build time as a compile-time constant

## Getting Started

Requires Node.js 20+.

```bash
npm install
npm run dev
```

## Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Dev server on port 3000           |
| `npm run build`     | Production build                  |
| `npm run preview`   | Preview the production build      |
| `npm run lint`      | ESLint, zero warnings allowed     |
| `npm run typecheck` | TypeScript checks for app and configs |
