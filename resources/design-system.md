# Carousel Design System

Locked tokens — do not deviate without user approval.

**Important**: Read `resources/brand.md` first for brand-specific values (accent color, fonts, aesthetic).

## Canvas
- **Size**: 1080 × 1350px (Instagram 4:5)
- **Export**: 2x (2160 × 2700px) via Puppeteer
- **Background**: Always a full-bleed photo, never solid color

## Typography

### Primary font (configured in brand.md)
| Use | Weight | Size | Letter-spacing |
|-----|--------|------|----------------|
| Hero headline | Bold (700) | 80–88px | -2.5 to -3px |
| Section title | Bold (700) | 56–64px | -1.5 to -2px |
| Body / description | Light (300) or Regular (400) | 42–52px | default |
| Section marker | Light (300), uppercase | 28px | 3–4px |
| CTA text | Medium (500) | 32px | default |
| Small label | Light (300) | 28px | 0.5px |
| List items | Regular (400) / Bold (700) | 42–44px | -0.5px |

### Accent font (configured in brand.md)
Used for **1-2 accent words per slide** max. Always italic.
| Use | Weight | Size |
|-----|--------|------|
| Accent word in headline | Italic (400) | Same as surrounding headline |
| Accent word in body | Italic (400) | Same as surrounding body |

### Font files
Located in `engine/public/fonts/`. Configured during Step 00 Setup.

## Colors

### Text
| Name | Value | Use |
|------|-------|-----|
| White 100% | `#FFFFFF` | Headlines, primary text |
| White 85% | `rgba(255,255,255,0.85)` | Body text, CTA |
| White 70% | `rgba(255,255,255,0.7)` | Secondary body |
| White 45% | `rgba(255,255,255,0.45)` | Section markers |
| White 35% | `rgba(255,255,255,0.35)` | Strikethrough text, labels |

### Accent
| Name | HEX | Use |
|------|-----|-----|
| Accent color | See `brand.md` | Highlight words (1-2 per slide), arrows, keyword CTA |

### Never use
- See color exclusions in `brand.md`
- Multiple accent colors on the same slide

## Card Component

The `<LiquidGlass>` component is a generic layout wrapper for content containers. It handles border-radius, padding, and centering. The visual style (background, border, blur, shadow) is applied via the `style` prop based on the Card Style defined in `brand.md`.

During Step 05, Claude reads brand.md and applies your card style to every `<LiquidGlass>` instance. You can use any CSS approach: frosted glass (`backdrop-filter: blur()`), solid cards, gradients, borders only, or no containers at all.

### Shape presets
| Shape | radius | Use |
|-------|--------|-----|
| Large card | 36 | Hero content, main statements |
| Medium card | 32 | Body content, descriptions |
| Small card | 28 | Secondary info, save bar |
| Pill bar | 50 | Horizontal CTA bars |
| Circle/Pill CTA | 999 | Buttons, icon badges |

## Spacing

| Element | Value |
|---------|-------|
| Page padding | 60–64px all sides |
| Gap between cards | 28px |
| Card padding (large) | 48–56px vertical, 44–56px horizontal |
| Card padding (small) | 24–28px vertical, 36–48px horizontal |
| Pill padding | 16px vertical, 36–40px horizontal |
| Section marker to content | 32–40px |

## Backgrounds
- Always full-bleed photos from your photo library (see `brand.md` for path)
- Dark overlay only if needed for contrast (rgba(0,0,0,0.1–0.2) max)
- Match the aesthetic direction defined in `brand.md`
- Never: solid black, AI-generated slop, backgrounds that clash with your brand aesthetic
