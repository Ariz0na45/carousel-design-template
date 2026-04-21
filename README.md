# Carousel Design Skill

An end-to-end Instagram carousel generator for [Claude Code](https://claude.ai/code). Give it a topic — it handles ideation, copywriting, design, rendering, and PNG export.

Built for the [flow-os](https://github.com/Ariz0na45/Business-OS-brain) skill system.

## What it does

1. **Ideation** — You give a topic. Claude proposes 3 angles with hook titles, content levels (TOFU/MOFU/BOFU), and slide structures.
2. **Copywriting** — Hook-first writing with proven formulas (contrarian, curiosity gap, identity shift, shocking number, direct challenge). Slide 1 gets 90% of the effort.
3. **Preview** — Full carousel in markdown before any rendering. Validate copy, layout patterns, and background assignments.
4. **Backgrounds** — Use your photo library or generate via Replicate API. Storyboard approach for visual continuity.
5. **Render** — Claude generates a React app with your slides. Preview in browser, iterate until perfect.
6. **Export** — Puppeteer captures each slide as PNG at 2160×2700px (2x for Instagram).

## Output

Instagram-ready PNG slides at 1080×1350 (4:5 ratio), exported at 2x resolution.

## Your brand, your rules

Everything is customizable through a single file: `resources/brand.md`.

| What | You define |
|------|-----------|
| **Colors** | Accent color, text palette, exclusions |
| **Typography** | Primary font + accent font (bring your own .otf/.ttf/.woff2) |
| **Card style** | Frosted glass, solid cards, gradients, borders only, transparent — your call |
| **Language** | English, French, Spanish, German — any language |
| **Tone** | Calm authority, energetic, academic, provocative — with example sentences |
| **Photos** | Your photo library path, subject description for AI generation |
| **Aesthetic** | Background mood, visual references, color grading |
| **CTAs** | Save and Comment templates in your language |

## Requirements

- [Claude Code](https://claude.ai/code) (CLI, desktop app, or IDE extension)
- [Bun](https://bun.sh) runtime
- A flow-os project (or any project with `.claude/skills/` convention)

### Optional

- `REPLICATE_API_TOKEN` in `.env` for AI background generation
- `marketing-psychology` skill for hook psychology
- `copywriting` skill for professional copy iteration
- `frontend-design` skill for creative layouts beyond standard patterns

## Install

### Option A — Import into flow-os

```bash
# Clone into imports/
git clone https://github.com/Ariz0na45/carousel-design-template.git imports/carousel-design

# Import using flow-os import-skill
bun .claude/skills/import-skill/scripts/import-skill.ts imports/carousel-design
```

### Option B — Manual install

```bash
# Clone directly into skills
git clone https://github.com/Ariz0na45/carousel-design-template.git .claude/skills/carousel-design

# Install engine dependencies
cd .claude/skills/carousel-design/engine && bun install
```

## First run

When you invoke the skill for the first time, Claude detects that `resources/brand.md` has placeholder values and triggers **Step 00 — Setup**:

1. Claude interviews you about your brand (colors, fonts, tone, aesthetic, photos)
2. Fills out `brand.md` with your answers
3. Configures `engine/src/index.css` with your font files
4. Installs engine dependencies
5. Validates everything works

After setup, just say "make a carousel about X" and the 6-step pipeline runs with your brand applied automatically.

## Structure

```
carousel-design/
├── SKILL.md                    # Skill entry point (triggers, process overview)
├── resources/
│   ├── brand.md                # YOUR config — colors, fonts, tone, style
│   ├── design-system.md        # Layout tokens (sizes, spacing, radius presets)
│   ├── copy-rules.md           # Hook formulas, word limits, content levels
│   └── slide-patterns.md       # 6 layout templates (A-F)
├── steps/
│   ├── 00-setup.md             # First-time brand configuration
│   ├── 01-ideation.md          # Topic → 3 angles → validated structure
│   ├── 02-copy.md              # Hook-first copywriting with annotations
│   ├── 03-preview.md           # Markdown preview before rendering
│   ├── 04-backgrounds.md       # Photo selection or AI generation
│   ├── 05-render.md            # React app generation + browser preview
│   └── 06-export.md            # Puppeteer PNG capture
├── input/photos/               # Your background photos go here
├── engine/
│   ├── src/components/
│   │   ├── LiquidGlass.tsx     # Card container (layout wrapper)
│   │   └── CarouselSlide.tsx   # Base slide (1080×1350 + bg + overlay)
│   ├── scripts/
│   │   ├── export-slides.mjs   # Puppeteer PNG export
│   │   └── crop-backgrounds.mjs # Sharp 4:5 crop
│   └── src/App.tsx             # Generated per carousel (don't edit manually)
```

## Slide patterns

6 reusable layouts that Claude assigns to each slide:

| Pattern | Use | Structure |
|---------|-----|-----------|
| **A — Hero Hook** | Slide 1 | Headline card + sub-text card + CTA pill |
| **B — Content** | Slides 2-8 | Section marker + title/body card + secondary card |
| **C — Comparison** | VS slides | Title + two side-by-side cards + bottom statement |
| **D — Definition** | Concepts | Section marker + term/phonetic/definition card + note |
| **E — End Save** | Last slide | Save CTA bar with bookmark badge |
| **F — End Comment** | Last slide | Comment keyword CTA with description |

## Copy framework

- **Slide 1** — 90% of the work. Max 15 words. One bold statement, no explanation.
- **Slide 2** — Second hook. Must work standalone (Instagram shows it on re-impression).
- **Slides 3-8** — One idea per slide. Max 25 words. Active voice.
- **End slide** — Save CTA (drives saves) or Comment CTA (drives engagement + leads).

Hook formulas: contrarian take, shocking number, identity shift, curiosity gap, direct challenge.

## License

MIT
