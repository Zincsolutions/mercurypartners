# Mercury Partners — Style Guide & Design Tokens

This document summarizes the visual system used across the five-page reference site so it can be replicated as Webflow style classes and components.

---

## 1. Color Palette

| Token | Hex / Value | Usage |
|---|---|---|
| `--navy` | `#1a3557` | Primary dark background (mid sections) |
| `--navy-mid` | `#1e3f66` | Strategy cards, secondary dark surfaces |
| `--navy-deep` | `#0f2236` | Hero backgrounds, footer, deepest sections |
| `--gold` (accent) | `#3b82c4` | Primary accent (links, icons, highlights, dividers) |
| `--gold-light` | `#93bcdf` | Hover states on accent elements |
| `--gold-muted` | `rgba(59,130,196,0.12)` | Subtle background tints / radial glows |
| `--cream` | `#f4f7fa` | Primary light background |
| `--cream-mid` | `#e4ecf4` | Card borders, grid gaps, alternate light surfaces |
| `--white` | `#ffffff` | Card backgrounds, text on dark |
| `--text-dark` | `#1a1a1a` | Body copy on light backgrounds |
| `--text-mid` | `#4a5568` | Secondary body copy |
| `--text-light` | `#718096` | Tertiary / caption text |
| `--border-gold` | `rgba(59,130,196,0.2)` | Subtle borders/dividers on dark sections |

> **Note:** This is the "blue" palette variant. A "gold" variant also exists using `#c9a96e` as the accent — confirm with Brad which is final before building.

---

## 2. Typography

**Display / Headlines — Cormorant Garamond** (serif)
- Weights used: 300 (light), 400, 500
- Used for: all H1/H2 headings, large stat numbers, card titles, quote text
- Italic is used for emphasis within headlines (e.g., "founder-*owned businesses*"), styled in the accent color

**Body / UI — Jost** (sans-serif)
- Weights used: 200, 300, 400, 500
- Used for: paragraph copy, nav links, buttons, labels, form fields, footer

**Google Fonts import:**
```
Cormorant Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600
Jost:wght@200;300;400;500
```

**Key sizes (desktop):**
- Hero headline (Cormorant): `clamp(44px, 6.38vw, 82px)`, weight 300, line-height 1.04
- Section titles (Cormorant): `clamp(34px, 4.2vw, 54px)`, weight 300
- Body copy (Jost): `16.5px`, line-height 1.8, weight 300
- Nav links (Jost): `12.1px`, letter-spacing 0.14em, uppercase
- Section labels / overlines (Jost): `11px`, letter-spacing 0.22em, uppercase, accent color

---

## 3. Spacing & Layout

- Standard section padding: `104px 10%` (desktop)
- Alternate/dark sections: same padding, `background: var(--navy)`
- Grids: 1px gaps with `background: var(--cream-mid)` to create thin dividing lines between cards
- Max content width for body copy: ~520px

---

## 4. Components

**Buttons**
- Primary: solid accent background, navy text, uppercase, letter-spacing 0.14em, padding `16px 40px`, 1px border-radius
- Ghost: transparent, 1px border (rgba white 0.2), uppercase text, hover changes border/text to accent

**Cards (Principles, Investments, Why-Mercury, etc.)**
- White or navy background depending on section
- 1px gap grid creating hairline borders
- Hover state: background flips to `--navy-deep`, text shifts to white/gray, accent-colored border or underline appears

**FAQ Accordion**
- Question row: Cormorant Garamond, 20px, weight 500, with a "+" icon (rotates 45° to form "×" when open)
- Answer: max-height transition (0 → 200px) with opacity/padding fade
- JS toggles an `.open` class on the parent `.faq-item`

**Stat Numbers**
- Large Cormorant Garamond figures (42–64px) paired with small uppercase Jost labels below

**Nav**
- Fixed position, dark translucent background with blur, 76px height
- Logo on left (linked to home), nav links right-aligned, "Contact" styled as an outlined CTA pill

**Footer**
- Dark background, logo (inverted/desaturated, reduced opacity), copyright text, and link list

---

## 5. Logo

- File: `mercury-logo.png` (transparent background, full wordmark + icon)
- Used at `27.5px` height in nav, `21.25px` height in footer
- Applied with `filter: invert(1)` on dark backgrounds so the dark logo marks render white

---

## 6. Interaction Notes

- All hover transitions use `0.2s–0.3s ease` timing
- FAQ accordions are the only JS-driven interaction; everything else is CSS hover/transition
- No external JS libraries are required
