# CryptonicFlux

The gaming-first home for CryptonicFlux: live-stream links, the weekly program board, channel highlights, community destinations, and a featured gateway to [CryptonicFlux LoL Search](https://lol.cryptonicflux.com).

## Stack

- React 19 and strict TypeScript
- Vite 6
- Tailwind CSS v4 through `@tailwindcss/vite`
- TanStack Router
- Framer Motion and Lucide icons
- Vitest and Testing Library

## Run locally

Node 22 is the project default (`.nvmrc` and `.node-version`).

```bash
npm install
npm run dev
```

Vite prints the local development URL. Routes are `/`, `/gallery`, and `/about`.

## Verify

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Cloudflare Pages uses [`public/_redirects`](public/_redirects) for the single-page app fallback. CI runs the same verification commands on pull requests and pushes to `main`.

## Featured tool

[CryptonicFlux LoL Search](https://lol.cryptonicflux.com) is the companion champion encyclopedia. It is linked from the primary navigation, mobile navigation, hero, dedicated feature section, About page, and footer.

The gallery artwork is original CSS geometry rendered locally; it does not load third-party images.
