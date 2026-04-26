---
name: carousel-design
description: Create Instagram carousel posts (1080×1350) end-to-end — from ideation to copywriting to design to PNG export. Use when the user wants to create a carousel, design Instagram slides, make carousel content, or says "carousel", "create slides", "Instagram post", "make a carousel about", "carousel design". Handles ideation (3 angles), copy (hook-first), markdown preview, background selection/generation (Replicate), React render with styled card layouts, and Puppeteer PNG export. Fully customizable via resources/brand.md.
---

# Carousel Design

End-to-end Instagram carousel generator. From topic to exported PNG slides with styled card effects.

## First-Time Setup

1. **Configure your brand** — Run Step 00 to fill out `resources/brand.md` with your colors, fonts, language, tone, and aesthetic
2. **Add font files** — Place your font files in `engine/public/fonts/`
3. **Install engine**:
   ```bash
   cd engine && bun install
   ```

## Process

Follow the steps in order. Read each step file for detailed instructions.

### Step 00 — Setup (`steps/00-setup.md`)
First-time only. Configure brand.md, install fonts, set up engine.

### Step 01 — Ideation (`steps/01-ideation.md`)
User gives topic → read context → propose 3 angles → validate structure.

### Step 02 — Copywriting (`steps/02-copy.md`)
Apply psychological levers → write hook-first → annotate styling → validate.

**Optional skill dependencies**: `marketing-psychology` for psychological levers, `copywriting` for hook crafting. If not installed, Claude handles these directly using the formulas in copy-rules.md.

### Step 03 — Preview (`steps/03-preview.md`)
Present full carousel in markdown format → user validates copy + layout + backgrounds before rendering.

### Step 04 — Backgrounds (`steps/04-backgrounds.md`)
Select from photo library or generate backgrounds via Replicate. Skip if using existing photos.

### Step 05 — Render (`steps/05-render.md`)
Generate App.tsx using `<Card>` component → preview on localhost:5180 → iterate.

**Optional skill dependency**: `frontend-design` for creative layout decisions beyond standard patterns.

### Step 06 — Export (`steps/06-export.md`)
Puppeteer captures each slide → PNG @2x → `output/carousel-design/YYYY-MM-DD-{slug}/`.

## Resources

| File | What |
|------|------|
| `resources/brand.md` | Your brand config (colors, fonts, language, tone, aesthetic, photos) |
| `resources/design-system.md` | Technical specs (canvas size, export, typography sizing ranges) |
| `resources/slide-patterns.md` | 6 reusable layout patterns (A-F) with structure |
| `resources/copy-rules.md` | Copywriting rules, hook formulas, style annotations |

## Key Rules

1. **Always read brand.md first** — every step reads brand config for colors, fonts, language, tone
2. **Always read resources/** before designing — design-system.md, slide-patterns.md, copy-rules.md
3. **Read context/** for audience/brand docs before writing copy (if configured in brand.md)
4. **Always use `<Card>` component** — keep card styling consistent via brand.md
5. **Slide 1 = 90% of the work** — the hook determines everything
6. **Slide 2 = second hook** — Instagram may show it on re-impression
7. **Markdown preview before render** — minimize iteration cycles
8. **One idea per slide** — no walls of text, max 25 words per content slide

## Engine

The rendering engine lives in `engine/`. It's a React + Vite + Tailwind project with:
- `src/components/Card.tsx` — Reusable `<Card>` container component (any shape)
- `src/components/CarouselSlide.tsx` — Base slide wrapper (1080×1350)
- `scripts/export-slides.mjs` — Puppeteer PNG export
- `scripts/crop-backgrounds.mjs` — Sharp image preprocessing

```bash
# Start dev server
cd engine && npx vite --port 5180

# Export slides
cd engine && bun scripts/export-slides.mjs {slug}
```

## Optional Dependencies

These skills enhance the workflow but are not required:
- **marketing-psychology** — Psychological levers for hook creation (Step 02)
- **copywriting** — Professional hook crafting and iteration (Step 02)
- **frontend-design** — Creative layout decisions beyond patterns (Step 05)
- **humanizer** — Remove AI patterns from copy (post-Step 02)
