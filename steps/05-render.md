# Step 05 — Render

## Input
- Validated copy with style annotations (Step 02-03)
- Backgrounds assigned per slide (Step 03-04)
- Patterns assigned per slide (Step 03)

## Process

1. **Read brand config** — `resources/brand.md` for accent color, fonts, card style, spacing, text styling rules
2. **Read design system** — `resources/design-system.md` for technical specs
3. **Read slide patterns** — `resources/slide-patterns.md`
4. **Read frontend-design skill** — For creative layout decisions (if installed, otherwise use standard patterns)
5. **Copy backgrounds** to `engine/public/` if not already there
6. **Generate `engine/src/App.tsx`** — Build all slides using `<Card>` component:
   - Define brand constants at top: `const accent = '{accent color from brand.md}'`
   - Apply card style from brand.md to every `<Card>` via the `style` prop
   - Apply spacing from brand.md (page padding, gaps, card padding)
   - Each slide = a React component following the assigned pattern
   - Apply copy with correct fonts, sizes, colors
   - Apply accent words and highlights per Text Styling Rules in brand.md
   - Background image per slide
7. **Start dev server**:
   ```bash
   cd engine && npx vite --port 5180
   ```
8. **Present preview** at http://localhost:5180/
9. **User reviews** — adjust copy, layout, spacing as needed
10. **Iterate** until user validates

## Key rules
- Always use `<Card>` from `src/components/Card.tsx` — apply card style from brand.md consistently
- Follow Text Styling Rules from brand.md for accent usage and highlights
- Use spacing values from brand.md (page padding, gaps, card padding)
- Use frontend-design skill for creative layout decisions beyond standard patterns (if installed)
- Each slide must have `id="carousel-slide"` for Puppeteer export

## Output
All slides rendering correctly in browser, validated by user.
