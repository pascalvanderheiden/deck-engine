# Theme Wiring: SlideContext Integration

**Author:** Livingston | **Date:** 2026-03-14 | **Status:** Implemented

## Decision

SlideProvider now accepts a `theme` prop and manages theme state:

1. **`data-theme` attribute** set on `document.documentElement` — CSS authors can scope rules with `[data-theme="light"]` selectors without modifying theme CSS files.
2. **Context exposes `theme` and `setTheme`** — consumer components can read the active theme and switch it at runtime.
3. **No Node.js imports in browser code** — SlideContext uses a local `DEFAULT_THEME` constant instead of importing from `theme-loader.js` (which requires `fs`).

## Rationale

- Theme CSS loading happens at build time (scaffolded main.jsx imports the right theme CSS). The `data-theme` attribute is a signaling mechanism, not a loader.
- Runtime theme switching requires pre-compiled theme CSS (the current theme files include `@import "tailwindcss"` and need build processing). Full runtime switching is a future enhancement.
- The browser/Node.js boundary is respected: `theme-loader.js` stays server-side, context stays browser-side.

## Impact

- **SlideContext.jsx** — new `theme` prop, `data-theme` attribute, `theme`/`setTheme` in context value
- **No changes** to theme CSS files (Saul), theme-loader.js (Basher), or component CSS (already tokenized)
