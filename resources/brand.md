# Brand Configuration

Fill this out before your first carousel. Claude reads this file before every step.

Run **Step 00 — Setup** to configure this interactively, or fill it out manually.

---

## Identity

- **Brand name**: [Your Brand]
- **Language**: English
- **Address form**: informal (e.g., "you" casual, "tu" in French, "du" in German)

## Colors

### Accent

| Name | HEX | Use |
|------|-----|-----|
| [Your accent name] | [#HEXCODE] | Highlight words (1-2 per slide), arrows, keyword CTA |

### Text palette

Default text colors — optimized for dark backgrounds. Adjust if your aesthetic uses light backgrounds.

| Name | Value | Use |
|------|-------|-----|
| White 100% | `#FFFFFF` | Headlines, primary text |
| White 85% | `rgba(255,255,255,0.85)` | Body text, CTA |
| White 70% | `rgba(255,255,255,0.7)` | Secondary body |
| White 45% | `rgba(255,255,255,0.45)` | Section markers |
| White 35% | `rgba(255,255,255,0.35)` | Strikethrough text, labels |

### Color exclusions

List colors or styles to never use:
- [e.g., neon colors, pastels, bright gradients]

## Typography

### Primary font

- **Family**: [Font Name]
- **Files in engine/public/fonts/**: [list font files, e.g., my-font-light.otf, my-font-bold.otf]
- **Available weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Accent font

Used for accent words. Configure usage rules in Text Styling Rules below.

- **Family**: [Font Name]
- **Files in engine/public/fonts/**: [list font files, e.g., my-accent-italic.ttf]
- **Weight**: 400 Italic

## Card Style

Define how content containers look on each slide. Claude applies this when generating App.tsx.

- **Style**: (describe how your cards look, or share examples)
- **Background**: [CSS value]
- **Border**: [CSS value or "none"]
- **Backdrop filter**: [CSS value or "none"]
- **Shadow**: [CSS value or "none"]
- **Card radius**: [number in px]

## Spacing

- **Page padding**: [e.g., "48px 40px", "60px 48px"]
- **Gap between cards**: [e.g., "24px", "28px"]
- **Card padding (large)**: [e.g., "44px 40px"]
- **Card padding (small)**: [e.g., "24px 36px"]
- **Pill padding**: [e.g., "16px 36px"]

## Text Styling Rules

- **Accent font usage**: (how many accent words per slide, when to use accent font)
- **Accent color highlights**: (how many highlights per slide, what gets highlighted)
- **Rules to follow**: (any constraints on text emphasis)
- **Rules to avoid**: (anything to never do with text styling)

## Aesthetic

- **Background mood**: (describe in your own words)
- **Visual references**: (brands, shows, magazines that match your look)
- **Color grading**: (describe the color treatment you want)
- **Never**: (aesthetic exclusions)

## Photos

- **Library path**: input/carousel-design/photos/
- **Subject description**: [for AI generation, e.g., "A woman with curly hair in her 30s" — leave blank if not using AI generation]
- **Available categories**: [list your photo types, e.g., desk/working, outdoor/city, headshots, product shots]
- **Storyboard rule**: Pick ONE environment thread per carousel for visual continuity

## Voice & Tone

- **Tone**: [e.g., calm authority, energetic, academic, playful, provocative]
- **Word bans**: [words to never use → replacements, e.g., "business → expertise", "synergy → (remove)"]
- **Example sentences** (3-5 in your target language showing the desired tone):
  1. [Example sentence 1]
  2. [Example sentence 2]
  3. [Example sentence 3]

## CTA Templates

In your target language:

- **Save CTA**: [e.g., "Save this for later", "Sauvegarde ça pour plus tard"]
- **Comment CTA**: [e.g., "Comment [KEYWORD]", "Commente [KEYWORD]"]
- **Comment description**: [e.g., "and I'll send you the template for free", "et je t'envoie le template gratuitement"]

## Context

- **Context directory**: context/ (default flow-os location)
- **Key docs to read before writing copy**: [list relevant files, e.g., "brand-guidelines.md, icp-profile.md, offer.md"]
- **Audience pain points**: [brief summary of your target audience's main struggles — used as raw material for hooks]

## Skill Dependencies

Mark as installed or not. If not installed, Claude handles the task directly.

- **marketing-psychology**: [installed / not installed]
- **copywriting**: [installed / not installed]
- **frontend-design**: [installed / not installed]
- **humanizer**: [installed / not installed]
