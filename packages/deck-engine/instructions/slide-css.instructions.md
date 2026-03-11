---
description: "Use when creating or editing slide CSS modules in a deck project. Enforces required properties, orb positioning, and theme variables."
applyTo: "**/slides/**/*.module.css"
---

# Slide CSS Module Conventions

## Required root class

```css
.mySlide {
  background: var(--bg-deep);
  padding: 0 0 44px 0;        /* reserve BottomBar height */
}
```

The engine's `.slide` class already sets `flex-direction: column`, `justify-content: center`, and `overflow: hidden`. The engine also sets `flex-grow: 0` on all direct slide children, so **content stays at its natural height and is vertically centered by default** — building from the center outward. No scrolling is allowed.

For dense slides that need top-alignment, override with `justify-content: flex-start`.

## Orb positioning recipe

```css
.orb1 {
  width: 420px; height: 420px;
  top: -100px; right: -60px;
  background: radial-gradient(circle at 40% 40%, var(--accent), var(--blue-glow) 50%, transparent 70%);
}
.orb2 {
  width: 320px; height: 320px;
  bottom: -40px; right: 100px;
  background: radial-gradient(circle at 50% 50%, var(--purple-deep), rgba(110,64,201,0.25) 60%, transparent 75%);
}
```

## Body wrapper

```css
.body {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

> **Do NOT add `flex: 1` or `flex-grow: 1`** to the body wrapper or any direct slide child — it stretches the wrapper to fill the slide and defeats the engine's built-in vertical centering. The engine sets `flex-grow: 0` on all direct slide children to ensure content builds from the center outward. Inner elements within the body wrapper should also avoid `flex: 1` unless they genuinely need to fill remaining space within the body.

## Theme variables (always use these, never hard-code colors)

| Variable | Value |
|----------|-------|
| `--bg-deep` | `#080b10` |
| `--surface` | `#161b22` |
| `--border` | `#30363d` |
| `--text` | `#e6edf3` |
| `--text-muted` | `#8b949e` |
| `--accent` | project-specific |
| `--blue-glow` | `#1f6feb` |
| `--purple` | `#bc8cff` |
| `--purple-deep` | `#6e40c9` |
| `--pink` | `#f778ba` |
| `--cyan` | `#56d4dd` |
| `--green` | `#3fb950` |
| `--orange` | `#d29922` |

## Global classes (no import needed)

`accent-bar`, `orb`, `grid-dots`, `content-frame`, `content-gutter`

## Card pattern

```css
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
}
```

## Typography

| Element | Size | Weight | Spacing |
|---------|------|--------|---------|
| h1 | `clamp(42px, 5vw, 72px)` | 900 | `-2px` |
| h2 | `clamp(28px, 3.2vw, 36px)` | 700 | `-0.8px` |
| h3 | `16px–20px` | 700 | `-0.3px` |
| Subtitle | `17px` | 300–400 | — |
| Body | `13px–14px` | 400 | — |
| Badge | `10px–11px` | 600–700 | `1.5px` |

## Content density limits

Slides must never overflow the viewport. The engine shows a **red dashed border warning** in dev mode when content exceeds the slide bounds. When content doesn't fit, split across multiple slides rather than cramming. A presentation with more slides is better than one with clipped content.
