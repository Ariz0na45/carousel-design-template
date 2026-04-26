# Step 04 — Background Generation

## Input
List of slides that need generated backgrounds (from Step 03).

## Photo Library

Check `resources/brand.md` for:
- **Library path** — where your existing photos are stored
- **Available categories** — what types of photos you have
- **Subject description** — for AI generation prompts

**Storyboard approach:** For consistency across a carousel, pick ONE environment thread (e.g., all desk shots, or all outdoor shots). This creates visual continuity when swiping.

## When to skip
If all slides use existing photos from your library, skip AI generation entirely and go to Step 05.

## Process

1. **Select reference photo** from `input/carousel-design/photos/headshots/` (if using AI generation with a person)
2. **Craft prompts** per the style guide below, adapting to the aesthetic defined in brand.md
3. **Generate 4 variants per background** using Replicate:
   ```bash
   bun scripts/generate-background.ts \
     --reference "input/carousel-design/photos/headshots/{photo}" \
     --prompt "{prompt}" \
     --output "input/carousel-design/photos/generated/{name}-{a|b|c|d}.jpg" \
     --quality draft
   ```
   Note: Ensure portrait 1080×1350 format.
4. **Present variants** to user
5. **User picks** → save final to `input/carousel-design/photos/`

## Style Guide — Backgrounds

Adapt all sections below to match the aesthetic, mood, and color grading specified in `resources/brand.md`.

### Lighting
- Match your brand's visual mood
- Consistent lighting across all carousel slides
- Never: lighting that clashes with your brand aesthetic

### Subject (if applicable)
- Use the subject description from brand.md
- Authentic, natural poses — never forced
- Candid moments preferred over posed shots

### Environment
- Match the visual references from brand.md
- Consistent environment thread across the carousel
- Never: environments that clash with your brand identity

### Color palette
- Match the color grading from brand.md
- Keep consistent across all slides
- Never: colors that clash with your text/accent color readability

### Prompt template
```
A [style from brand.md] portrait photograph in 9:16 vertical format. [SUBJECT from brand.md], [pose/action], in [environment]. [Lighting description matching brand aesthetic]. The mood is [mood from brand.md]. [Color grading from brand.md]. Shot on a 50mm lens, shallow depth of field. No text, no overlays. Use the attached reference photo for the person's exact likeness.
```

## Output
Generated backgrounds saved in `input/carousel-design/photos/`.
