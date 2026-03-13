### DARK-002: deck.config.js must include appearance field
**Author:** Basher | **Date:** 2026-03-15 | **Status:** Implemented

The `appearance` field (`'dark'` or `'light'`) is now emitted in every scaffolded `deck.config.js`. This is the canonical record of the user's dark/light choice from `create-deckio`.

1. **`deckConfig()` accepts `appearance`** — 9th parameter, defaults to `'dark'`. Both shadcn and default templates include it.
2. **Skills and tools read `appearance`** — any AI skill or downstream tool can check `project.appearance` to know the deck's mode. No guessing from `theme`.
3. **`appJsx()` was already correct** — it reads `appearance` and sets `<ThemeProvider defaultTheme>` accordingly. This was NOT the bug; the missing config field was.
4. **Backwards compatible** — existing decks without `appearance` should be treated as `'dark'` (the historical default).

Relates to: DARK-001 (appearance set at scaffold time, no runtime toggle).
