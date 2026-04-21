# Step 03 — Preview (Markdown)

## Input
Validated copy from Step 02.

## Process

Present each slide as a markdown block before rendering. This minimizes iteration cycles on the actual render.

### Format per slide:
```markdown
---
## Slide 1 — Hook
**Pattern**: A — Hero Hook
**Background**: photo-desk.jpg

**2026 is the year of the**
~~Side Hustler~~
*Builder* ← Accent Font italic, accent color

> Everyone's using AI to code but very few **run their business** with it.

`[CTA pill]` Let me show you how →
---
```

### What to specify per slide:
- **Pattern** (A-F from `resources/slide-patterns.md`)
- **Background** (existing photo or "generate" if none fits)
- **Copy** with style annotations
- **Special elements** (icons, badges, arrows)

### User validates:
- Copy final?
- Layout pattern per slide?
- Backgrounds assigned?
- Any slides needing generated backgrounds? → Step 04
- All good? → Skip to Step 05

## Output
Validated preview document. List of slides needing background generation (if any).
