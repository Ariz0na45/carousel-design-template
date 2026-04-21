# Slide Patterns

Reusable layout templates. When building a carousel, assign each slide a pattern.

## Pattern A — Hero Hook
**Use for**: Slide 1 (the hook). This is 90% of the work.

```
┌─────────────────────────────┐
│                             │
│   [optional icon/badge]     │
│                             │
│  ┌───────────────────────┐  │
│  │  Card r=36               │  │
│  │                       │  │
│  │  HEADLINE 58-74px     │  │
│  │  Bold + accent font   │  │
│  │  italic on key word   │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │  Card r=32               │  │
│  │  Sub-text 22-26px     │  │
│  └───────────────────────┘  │
│                             │
│     [Card pill r=50]         │
│     CTA text →              │
│                             │
└─────────────────────────────┘
```

**Props**: headline, accentWord, subText, ctaText, background

## Pattern B — Content
**Use for**: Slides 2-8 (information slides).

```
┌─────────────────────────────┐
│                             │
│     01 — SECTION MARKER     │
│     (uppercase, 15px)       │
│                             │
│  ┌───────────────────────┐  │
│  │  Card r=36               │  │
│  │                       │  │
│  │  Title 42-50px Bold   │  │
│  │  Body 22-26px Light   │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │  Card r=28               │  │
│  │  Secondary text       │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

**Props**: sectionNumber, sectionLabel, title, body, secondaryText, background

## Pattern C — Comparison
**Use for**: VS slides, before/after, two options.

```
┌─────────────────────────────┐
│                             │
│     Title 42-52px Bold      │
│     ──────────              │
│           VS                │
│                             │
│  ┌──────────┐ ┌──────────┐  │
│  │ Glass    │ │ Glass    │  │
│  │ r=24     │ │ r=24     │  │
│  │ Label    │ │ Label    │  │
│  │ Body     │ │ Body     │  │
│  └──────────┘ └──────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │  Card r=28               │  │
│  │  Bottom statement     │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

**Props**: title, leftLabel, leftBody, rightLabel, rightBody, bottomText, background

## Pattern D — Definition
**Use for**: Explaining a concept, term, or framework.

```
┌─────────────────────────────┐
│                             │
│     01 — SECTION MARKER     │
│                             │
│  ┌───────────────────────┐  │
│  │  Card r=36               │  │
│  │                       │  │
│  │  Term    (Bold 36px)  │  │
│  │  /tɜːrm/ (italic)    │  │
│  │                       │  │
│  │  Definition text      │  │
│  │  22-26px Light        │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │  Card r=28               │  │
│  │  Supporting note      │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

**Props**: sectionNumber, sectionLabel, term, phonetic, definition, note, background

## Pattern E — End Save
**Use for**: Last slide — save CTA.

```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│                             │
│                       ┌──┐  │
│  ┌────────────────────┤🔖│  │
│  │ Card r=50             └──┘  │
│  │                       │  │
│  │ Save CTA text         │  │
│  │ (from brand.md)       │  │
│  │ 42-50px               │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│                             │
│                             │
└─────────────────────────────┘
```

Bookmark icon in a circular Card badge (w=88, h=88, r=999) positioned top-right of the bar, overlapping.

**Props**: background

## Pattern F — End Comment
**Use for**: Last slide — comment keyword CTA.

```
┌─────────────────────────────┐
│                             │
│                             │
│  ┌───────────────────────┐  │
│  │  Card r=36               │  │
│  │                       │  │
│  │  Comment CTA text     │  │
│  │  (from brand.md)      │  │
│  │  (50px, keyword in    │  │
│  │   accent color)       │  │
│  │                       │  │
│  │  Comment description  │  │
│  │  (from brand.md)      │  │
│  │  (26px italic)        │  │
│  │                       │  │
│  └───────────────────────┘  │
│                             │
│            ↓                │
│                             │
└─────────────────────────────┘
```

**Props**: keyword, description, background
