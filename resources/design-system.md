# Carousel Design System — Technical Specs

These are platform-level technical requirements, not design choices. Design choices live in `resources/brand.md`.

**Important**: Read `resources/brand.md` first for all brand-specific values.

## Canvas
- **Size**: 1080 × 1350px (Instagram 4:5)
- **Export**: 2x (2160 × 2700px) via Puppeteer
- **Background**: Always a full-bleed photo, never solid color

## Typography

### Sizing ranges (from config)

Font sizes configured during setup. These are recommended ranges for readability on Instagram — IG compresses carousels heavily.

| Use | Recommended range | Minimum |
|-----|-------------------|---------|
| Hero headline | 70-88px | 64px |
| Section title | 50-64px | 44px |
| Body / description | 38-52px | 36px |
| Section marker | 24-32px | 22px |
| CTA text | 28-36px | 26px |
| Small label | 24-32px | 22px |

### Font families (from config)
- **Primary font**: See `brand.md`
- **Accent font**: See `brand.md`
- Font files located in `engine/public/fonts/`, configured during Step 00.

## Colors (from config)

### Text palette
See `brand.md` for your text color palette. Default for dark backgrounds:

| Name | Value | Use |
|------|-------|-----|
| White 100% | `#FFFFFF` | Headlines, primary text |
| White 85% | `rgba(255,255,255,0.85)` | Body text, CTA |
| White 70% | `rgba(255,255,255,0.7)` | Secondary body |
| White 45% | `rgba(255,255,255,0.45)` | Section markers |
| White 35% | `rgba(255,255,255,0.35)` | Strikethrough text, labels |

Adjust this palette in `brand.md` if your aesthetic uses light backgrounds.

### Accent color
See `brand.md` for your accent color.

## Card Component

The `<Card>` component (in `src/components/Card.tsx`) is a generic layout wrapper for content containers. It handles border-radius, padding, and centering. The visual style (background, border, blur, shadow) is applied via the `style` prop based on the Card Style defined in `brand.md`.

During Step 05, Claude reads brand.md and applies your card style to every `<Card>` instance.

### Shape presets (from config)
Card radius, spacing, and padding values are configured during setup in `brand.md`. The `<Card>` component accepts a `radius` prop.

## Spacing (from config)

Page padding, gaps between cards, and card padding are defined during setup in `brand.md`. The `<CarouselSlide>` component accepts a `padding` prop.

## Backgrounds
- Always full-bleed photos from your photo library (see `brand.md` for path)
- Match the aesthetic direction defined in `brand.md`
- Respect style exclusions from `brand.md`
