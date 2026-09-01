# History

## [2026-09-01] Inspect and dispatch
**Agent:** Sonic
**Branch:** main @ e2c362f
**Changes:** Pulled latest, scoped gaming overhaul, dispatched Tails.
**Files:** `.context/` seeded
**Commit:** n/a

## [2026-09-01] Gaming-first overhaul
**Agent:** Tails
**Branch:** andy/gaming-overhaul
**Changes:** Rebuilt the site around gaming streams, community, and tools; migrated to React 19, Vite 6, Tailwind CSS 4, TanStack Router, and Framer Motion; added the LoL Search feature, accessible responsive navigation, a gaming-only weekly board and gallery, tests, CI, SPA fallback, runtime pins, metadata, and documentation.
**Files:** `src/`, `public/`, `.github/workflows/ci.yml`, `index.html`, `package*.json`, TypeScript/Vite config, runtime pins, `README.md`
**Verification:**
- `npm install` — PASS
- `npm run lint` — PASS (zero warnings after router/layout split)
- `npm run typecheck` — PASS
- `npm test` — FAIL on first run because jsdom lacked viewport/scroll browser APIs; PASS after adding typed environment mocks (3 files, 4 tests)
- `npm run build` — PASS
- `git diff --check` — PASS
- `curl` smoke for `/`, `/gallery`, `/about` — PASS (HTTP 200)
- banned-topic sweep — PASS for product copy; expected historical decision-note matches and CryptonicFlux brand-name substring only
**Deploy/push:** Not performed
