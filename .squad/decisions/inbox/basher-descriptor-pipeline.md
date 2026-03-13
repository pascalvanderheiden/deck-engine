### SCAFFOLD-001: Scaffolder Copies Engine Assets Directly
**Author:** Basher | **Date:** 2026-03-15 | **Status:** Implemented

1. **Scaffolder copies skills + instructions before npm install** — `copyEngineAssets(dir)` in `index.mjs` resolves the engine source in the monorepo and copies `.github/skills/` and `.github/instructions/` directly. This ensures Copilot skills are available even if npm install fails.
2. **init-project.mjs remains the sync mechanism** — still runs post-install for state.md, .github/eyes/, .vscode/settings.json, and stale-skill cleanup. Both copy paths are idempotent.
3. **Descriptors live in the engine package** — skills reference them at `node_modules/@deckio/deck-engine/themes/descriptors/{theme}.md`. Added explicit `"./themes/descriptors/*"` export to the engine package.json.
4. **When published to npm** — `copyEngineAssets` gracefully skips (engine source not adjacent). `init-project.mjs` handles the copy from the installed package. No behavioral change for published scaffolder.
5. **funky-punk has no descriptor** — falls back to the `dark` descriptor per the skill's custom-theme fallback logic. This is intentional.

**Key files:**
- `packages/create-deckio/index.mjs` — `copyEngineAssets()`, `resolveEngineRoot()`
- `packages/deck-engine/package.json` — descriptors export
- `packages/deck-engine/scripts/init-project.mjs` — unchanged, still the post-install sync
