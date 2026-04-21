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

Used for 1-2 accent words per slide. Always italic.

- **Family**: [Font Name]
- **Files in engine/public/fonts/**: [list font files, e.g., my-accent-italic.ttf]
- **Weight**: 400 Italic

## Card Style

Define how content containers look on each slide. Claude applies this when generating App.tsx.

- **Style**: [e.g., "frosted glass (backdrop-filter blur)", "solid dark cards", "gradient cards", "transparent with border only", "soft shadow cards", "none — text directly on background"]
- **Background**: [e.g., "rgba(255,255,255,0.06)", "rgba(0,0,0,0.5)", "linear-gradient(...)", "transparent"]
- **Border**: [e.g., "0.5px solid rgba(255,255,255,0.08)", "1px solid accent color", "none"]
- **Backdrop filter**: [e.g., "blur(20px) saturate(1.2)", "none"]
- **Shadow**: [e.g., "none", "0 4px 24px rgba(0,0,0,0.3)"]

## Aesthetic

- **Background mood**: [e.g., dark and moody, bright and clean, warm and earthy, minimalist]
- **Visual references**: [e.g., "Succession / old money", "Scandinavian minimal", "tech startup clean", "editorial magazine"]
- **Color grading**: [e.g., desaturated with amber accents, high contrast black/white, warm earth tones]
- **Never**: [aesthetic exclusions, e.g., gym shots, beach vibes, bright daylight, AI-generated slop]

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
