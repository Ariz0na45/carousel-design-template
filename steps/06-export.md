# Step 06 — Export

## Input
Validated slides rendering in browser (Step 05).

## Pre-export: Crop backgrounds

Before first export, crop all background images to exact 1080×1350 (4:5 Instagram ratio):

```bash
cd engine && bun scripts/crop-backgrounds.mjs
```

This prevents `object-fit: cover` from hiding pixels, which causes asymmetric glass distortion.

**Only needs to run once per set of background images.** Skip if images are already 1080×1350.

## Export

```bash
cd engine && bun scripts/export-slides.mjs {slug}
```

Where `{slug}` is a kebab-case name for the carousel (e.g., "my-first-carousel").

## Output location

`output/carousel-design/YYYY-MM-DD-{slug}/`

Files: `slide-1.png`, `slide-2.png`, ..., `slide-N.png`

## Technical notes

### One slide at a time
The export script hides all slides except the current one before each capture, ensuring clean screenshots.

### Background images
Should be pre-cropped to exact 1080×1350 for best results. Using `object-fit: cover` on wider images may crop unexpectedly.

### Dev server
Must be running. Default port: check `DEV_URL` env var or the port Vite reports on startup.

## Verify
After export, spot-check a few slides:
- Card styling matches browser view
- Text readable, fonts loaded
- Background fills the frame (no black edges)

## Output
Final PNG files at 2160×2700px (2x), ready to upload to Instagram.
