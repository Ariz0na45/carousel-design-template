# Step 00 — Setup

First-time brand configuration. Run this once before creating your first carousel.

## Detect

Check `resources/brand.md` for placeholder text (`[Your Brand]`, `[#HEXCODE]`, `[Font Name]`). If placeholders exist, run this setup. If brand.md is already filled, skip to Step 01.

## Process

### 1. Interview

Walk the user through each section of `resources/brand.md` conversationally:

**Identity:**
- What's your brand name?
- What language should carousels be written in?
- What address form? (informal "you"/tu, formal "you"/vous, etc.)

**Colors:**
- What's your brand accent color? (HEX code)
- Give it a name (e.g., "Coral", "Midnight", "Forest")
- Do you use dark or light backgrounds? (adjusts text palette)
- Any colors to avoid?

**Typography:**
- What's your primary font? (the main text font)
- What's your accent font? (used italic, 1-2 words per slide — can be the same font)
- Which weights do you have available?
- Have you placed the font files in `engine/public/fonts/`?

**Aesthetic:**
- Describe your visual mood in 3-5 words (e.g., "dark, minimal, luxury")
- Any visual references? (brands, shows, magazines that match your aesthetic)
- What to absolutely avoid?

**Photos:**
- Do you have a photo library? Where is it?
- If using AI background generation: describe the subject (appearance, typical poses)
- What categories of photos do you have?

**Voice & Tone:**
- Describe your tone in one phrase
- Any words you never use? (with replacements)
- Give 3-5 example sentences in your target language that sound like your brand

**CTA Templates:**
- How do you say "Save this for later" in your language/tone?
- How do you say "Comment [KEYWORD]" in your language/tone?
- What's your typical lead magnet description? (e.g., "and I'll send you the guide for free")

**Context:**
- Which files in `context/` should be read before writing copy?
- Briefly describe your audience's main pain points

**Skill Dependencies:**
- Check which skills are installed: marketing-psychology, copywriting, frontend-design, humanizer

### 2. Fill brand.md

Update `resources/brand.md` with all answers. Remove placeholder brackets.

### 3. Configure fonts

Verify font files exist in `engine/public/fonts/`. Then rewrite the `@font-face` declarations in `engine/src/index.css`:

```css
/* PRIMARY FONT */
@font-face {
  font-family: '[PRIMARY_FONT_NAME]';
  src: url('/fonts/[primary-light-file]') format('[opentype|truetype]');
  font-weight: 300;
  font-style: normal;
}
/* ... repeat for each available weight (400, 500, 600, 700) */

/* ACCENT FONT */
@font-face {
  font-family: '[ACCENT_FONT_NAME]';
  src: url('/fonts/[accent-italic-file]') format('[opentype|truetype]');
  font-weight: 400;
  font-style: italic;
}

body {
  font-family: '[PRIMARY_FONT_NAME]', -apple-system, BlinkMacSystemFont, sans-serif;
  /* ... rest stays the same */
}
```

### 4. Install engine

```bash
cd engine && bun install
```

### 5. Validate

- Start dev server: `cd engine && npx vite --port 5180`
- Verify fonts load correctly in browser (check Network tab)
- Verify photo library path is accessible
- Stop dev server

## Output

Configured `resources/brand.md` + working engine with custom fonts. Ready for Step 01.
