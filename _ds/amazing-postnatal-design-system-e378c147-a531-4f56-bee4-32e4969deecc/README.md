# Amazing Postnatal — Design System

A brand & UI system for **Amazing Postnatal Care** (产护经验), a Chinese postnatal-care service rooted in the tagline *"Amazing Care For Amazing Life · 生命的起源，幸福的源泉"* — "the origin of life, the wellspring of happiness."

The system is **bilingual** (English + Simplified Chinese), **gentle & maternal** in tone, and visually anchored by a *seedling-and-seed* mark in sage green, warm brown, and a single touch of gold — accented by a sentimental rose/pink family that appears in gifting, badges, and celebratory moments.

---

## Source materials

| File | Notes |
|------|------|
| `uploads/Amazing Branding Design 2025.pdf` | Official 3-page brand identity sheet (provided by client) |
| `uploads/logo.png` | Master wordmark + seedling logo, 640×274, transparent PNG |
| `assets/brand-guide-page-{1,2,3}.png` | Rasterized pages of the PDF, kept as reference |
| `assets/element-*.png` | Decorative motifs cropped from the PDF (ribbons, bows, badges, leaves, sparkles, wave, pin) |

No codebase, Figma, or website assets were provided. The system below is a faithful expansion of the print brand sheet into a working digital design system; the **UI kits** are an opinionated digital extrapolation of that print language (flagged below).

---

## What the brand is for

Amazing Postnatal serves **new mothers (产妇) and newborns (新生儿)** in the first weeks after birth — confinement-care (月子) services, nursing, lactation support, and gentle baby care. The audience is families in an emotional, vulnerable, hopeful moment. Every touchpoint should feel **safe, warm, attentive, premium, and quietly celebratory** — never clinical, never loud.

---

## Index — files in this system

```
/  (project root)
├── README.md                   ← this file (start here)
├── SKILL.md                    ← agent skill manifest
├── colors_and_type.css         ← all CSS vars, type scale, semantic classes
├── assets/                     ← logo + all decorative motifs (PNG, transparent)
│   ├── logo.png
│   ├── brand-guide-page-{1,2,3}.png
│   ├── element-leaf-{1..8}-*.png        — 4 colorways × 2 styles (leaf + seedling)
│   ├── element-leaves-row.png
│   ├── element-ribbon-pink.png          — pale-pink banner with sparkles
│   ├── element-ribbon-sage.png          — sage banner
│   ├── element-bow-mauve.png            — small flat mauve bow
│   ├── element-bow-pink-large.png       — large glossy pink bow
│   ├── element-badge-seal.png           — pink scalloped seal
│   ├── element-badge-tag.png            — pink price-tag with hook
│   ├── element-card-dots.png            — card with pink-dot header
│   ├── element-sparkle.png              — 4-point soft star
│   ├── element-heart.png                — stylized chunky heart
│   ├── element-wave-pin.png             — looping wave with location pin
│   ├── element-icon-pin.png             — location pin only
│   └── element-chinese-handwritten.png  — 产护经验 hand-lettered logotype
├── preview/                    ← design-system tab cards (see register_assets calls)
├── ui_kits/
│   └── marketing_site/         ← clickable mockup of a marketing site
└── slides/                     ← (none — no deck template provided)
```

---

## Content Fundamentals

Amazing's brand book ships a single tagline and a few labels, so much of the voice below is **extrapolated from that source language**.

### Voice & tone

- **Gentle, reassuring, slightly poetic.** The core tagline pairs a soft English line ("Amazing Care For Amazing Life") with a more lyrical Chinese counterpart (*生命的起源，幸福的源泉* — "the origin of life, the wellspring of happiness"). Both copywriting languages should feel like this: warm, slow, never urgent.
- **Bilingual by default.** Almost every meaningful surface carries both English and Chinese — English usually labels & headlines, Chinese carries the emotional/explanatory weight. When space allows, present both; when not, prefer the language of the audience.
- **"We" not "I", and rarely "you" directly.** Speak as a caring team: "我们陪伴" (we accompany), "we'll be there." Avoid imperatives.
- **No marketing slang.** No "boost", "unlock", "supercharge". Prefer words like *care*, *gentle*, *together*, *moments*, *journey*, *陪伴* (accompany), *呵护* (cherish/protect), *安心* (peace of mind).

### Casing & punctuation

- **English headlines: Title Case** for short lines, **sentence case** for longer body lines.
- **All-caps eyebrows** (e.g. `COLOR`, `FONT`, `ELEMENT`) with **wide letter-spacing (0.16em)** — straight from the brand book.
- **Spaced-out tagline form:** `A m a z i n g   C a r e   F o r   A m a z i n g   L i f e` — used on hero / poster moments, never in dense copy.
- **Chinese punctuation** uses the full-width set (`，。！？「」`) except in mixed bilingual lines where a half-width comma may read better.
- **No exclamation marks** in body voice. Reserve `！` and `!` for celebratory moments (a baby's birth, a milestone) — never marketing.

### Emoji & decoration

- **No emoji.** This brand handles ornament through its own motif library — ribbons, bows, sparkles, the seedling. Emoji would feel out of place.
- **Sparkles** (`element-sparkle.png`, or the 4-pt star shape) are the closest thing to a "highlight" glyph and may be used decoratively, never inline in copy.

### Vocabulary cheat-sheet

| Use | Avoid |
|-----|-------|
| care · 呵护 · accompany · 陪伴 | service · provider |
| gentle · 温柔 · soft · quiet | premium · luxury · exclusive |
| journey · moments · season · 时光 | experience · solution |
| family · 家人 · loved ones | customer · user · client |
| 月子 · postnatal · newborn | confinement period (clinical) |

### Example copy

> **Hero (EN+ZH):**
> Amazing Care For Amazing Life
> 生命的起源，幸福的源泉

> **Section eyebrow:** `CARE PROGRAMS · 月子服务`

> **Body:** "From the first cry through the first quiet night, we are with you. Our 月嫂 team plans every meal, every nap, and every gentle moment together with your family."

> **CTA button:** `Begin together  →`  /  `预约咨询`

---

## Visual Foundations

### Color
- **Three families**, in priority order:
  1. **Brand primaries** — sage green (`--brand-sage`, the seedling), warm brown/bark (`--brand-bark`, the wordmark), and metallic gold (`--brand-gold`, the seed). These carry logo and core identity.
  2. **Rose / pink** — five rose tones from deep berry to pale blush. Used for warmth: gifting moments, baby/mother sections, badges, decorative ribbons & bows.
  3. **Warm neutrals** — cream → sand → taupe → bark for paper-like surfaces.
- **No pure black, ever.** Darkest ink is `--brand-bark-deep` (#5d5040).
- **Gradients:** *very* sparingly, only as soft 1-direction washes on the gold seed or on large background blobs (see `brand-guide-page-3.png`). Never bluish-purple, never high-saturation.
- **Imagery color** is **warm, slightly hazy, daylight-natural** — golden-hour skin, soft white linens, blurred greenery backgrounds. Never cool/clinical, never high-contrast.

### Typography
- **English:** Avenir Next (Ultra Light / Regular / Medium). On the web we ship **Nunito Sans** as the Google Fonts substitute — **⚠ font-substitution flag, see below.** A serif (Cormorant) is included as the "wordmark feel" font, used only for occasional decorative pairings.
- **Chinese display:** 方正正中黑简体 (a heavy commercial Chinese sans) — **not available as a free webfont**. Fallback chain ships **Noto Sans SC 900**. ⚠ flagged.
- **Chinese body:** 苹方 (PingFang SC) — Apple system font; renders natively on Mac/iOS, falls back to Noto Sans SC elsewhere.
- **Letter-spacing is a brand signal:** all-caps labels and the tagline are spaced wide (0.16–0.32em). Never tight.

### Spacing & rhythm
- **8-px base** (`--space-1` through `--space-10`).
- Generous breathing room around hero/headline blocks (`--space-7` to `--space-9` vertically). The brand book is mostly whitespace — match that.

### Backgrounds & surfaces
- **Pure white (`#fff`) is the default canvas.**
- Warm cream (`--paper`, `#faf6ee`) is the secondary canvas for "soft" sections (gifting, testimonials).
- Pale blush (`--rose-petal`) is the third canvas, used for sentimental / mother-and-baby moments.
- Large **organic blob shapes** in pale neutral or sage (see `brand-guide-page-3.png`) appear behind hero content; never on dense UI.
- **No repeating patterns, no textures, no grain, no noise.** The brand is **clean and quiet**.

### Imagery direction
- **Warm, soft, naturally-lit photographs** of mothers + babies + caregivers. Shallow depth of field. Slight haze. Neutral / pastel wardrobe (white, cream, blush, sage).
- Avoid: stock-photo smiles, harsh studio lighting, clinical scrubs, blue tones.
- We do **not** illustrate human figures — when imagery is missing, use a sage / blush solid block or a leaf motif as placeholder.

### Iconography & ornament (see ICONOGRAPHY below)
- The **decorative motifs** in `assets/element-*.png` (ribbons, bows, badges, sparkles, hearts, the seedling, the wave-with-pin) are the brand's primary ornaments. Use them at large scale, isolated, with surrounding whitespace.
- For UI icons we adopt **Lucide** at stroke-width 1.5px in `--brand-bark-deep` — see ICONOGRAPHY for rationale.

### Corner radii
- Soft, generous. Default radius is **14px** (`--radius`); cards 18–24px; sheets 24–32px; pill buttons 999px.
- Photography is **never** hard-cornered — at minimum `--radius-md` (18px).

### Borders & dividers
- Default border is `--stone` (#e6e1d7), 1px.
- The brand book's signature divider is a **1px sage-soft hairline with a centered all-caps label** — see `.rule` utility in `colors_and_type.css`. Use it as section openers.

### Elevation / shadows
- Two shadow systems coexist:
  - **Paper shadows** — very soft, warm-bark tinted (`--shadow-sm` → `--shadow-lg`), no offset, used on cards.
  - **Petal shadow** — a single warm-pink-tinted shadow (`--shadow-petal`) used only on gift/celebratory cards.
- No hard drop shadows. No neon glows.

### Hover, press & focus
- **Hover:** lift via shadow (`--shadow` → `--shadow-md`) + 1–2px upward translate; or 4–6% darken on color fills. Never opacity-only.
- **Press / active:** shrink to `scale(0.98)` with no shadow.
- **Focus:** 2px outline in `--focus-ring` (sage-deep @ 40% alpha) with 2px offset — visible but soft.
- **Transitions:** `var(--dur)` 240ms `var(--ease)`. A `--ease-spring` is provided for the occasional bounce on celebratory micro-interactions.

### Animation
- **Default is fade + small translate (8–12px).** Slide-up on section reveal. No big slides, no bounces (except the spring ease for confetti-style moments).
- **Easing:** `cubic-bezier(.2,.7,.2,1)` — soft out. Defined as `--ease`.
- **Duration:** 240ms default, 420ms for large/hero entrances. Never under 140ms — would feel snappy/digital.

### Transparency & blur
- Glass/blur **rarely**. Reserved for sticky headers over imagery: `backdrop-filter: blur(12px)` on a `rgba(255,255,255,.7)` surface.
- Protective gradients over photography: a 0–60% black-to-transparent overlay is **wrong here**; instead use a **`--paper` → transparent** soft wash if text must sit on imagery.

### Cards
- White (`--surface`) fill, 18–24px radius, 1px `--border` hairline, `--shadow` elevation. Generous interior padding (`--space-5` to `--space-6`).
- A celebratory variant adds a **pink scalloped header strip** (echoing `element-card-dots.png`).

### Layout rules
- **Centered hero compositions** are the brand's default — the logo, tagline, and a single ornament floating in whitespace. Don't crowd.
- Section dividers use the **labelled hairline** (`.rule`) rather than chunky bars.
- The wave-with-pin (`element-wave-pin.png`) is the brand's signature **footer/section transition** ornament — use it once per page at most.

---

## Iconography

The brand book provides **decorative motifs**, not a UI icon set. We split this into two layers:

### Decorative motifs (from the brand book — primary)

These are large, isolated, illustrative — used like spot-illustrations, not inline with text:

| Motif | File | Use |
|-------|------|-----|
| Seedling + leaf (logo mark) | `assets/element-leaf-{2,4,6,8}-*.png` | The core identity ornament. 4 colorways (tan / pink / silver / sage) × 2 styles (leaf-only odd, leaf-with-seed even) |
| Pink ribbon banner | `assets/element-ribbon-pink.png` | Celebratory titles, milestone callouts |
| Sage ribbon banner | `assets/element-ribbon-sage.png` | Quieter milestone callouts |
| Mauve flat bow | `assets/element-bow-mauve.png` | Small gift-tag accents |
| Glossy pink bow | `assets/element-bow-pink-large.png` | Featured gift / package accents |
| Scalloped seal | `assets/element-badge-seal.png` | Certifications, trust marks, awards |
| Hanging price tag | `assets/element-badge-tag.png` | Pricing / offer callouts |
| Sparkle (4-pt star) | `assets/element-sparkle.png` | Spot accents, premium feel — never inline |
| Stylized heart | `assets/element-heart.png` | Love / favorites / testimonials section |
| Wave + pin | `assets/element-wave-pin.png` | Footer transition, "find us" sections |
| Location pin | `assets/element-icon-pin.png` | The pin glyph isolated, for maps |
| Dotted card | `assets/element-card-dots.png` | Reference for the brand's celebratory card style |

**Always** use these motifs at generous scale (≥80px), on white or cream, with surrounding whitespace.
**Never** draw new SVG versions — copy these PNGs directly.

### UI icons (substituted — flagged)

The brand book does **not** specify a UI icon set. For functional icons (nav, settings, etc) we adopt **Lucide** via CDN, at stroke-width **1.5px**, color `--fg` or `--brand-bark-deep`. Lucide's soft, rounded, even-stroked style matches the brand's gentle voice better than e.g. Heroicons or Material.

```html
<!-- Load Lucide once -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<i data-lucide="heart" style="width:24px;height:24px;color:var(--brand-bark-deep);stroke-width:1.5"></i>
<script>lucide.createIcons()</script>
```

**⚠ Substitution flag:** Lucide is not specified by the client. Confirm with brand owner before production. Alternatives: Phosphor (regular weight), Tabler.

### Emoji & Unicode

- **Emoji:** not used.
- **Unicode dingbats:** the right-arrow `→` and middle dot `·` are acceptable inline (e.g. CTAs, bilingual separators). No other Unicode decoration.

---

## ⚠ Font substitutions — please review

| Specified | Shipped | Status |
|-----------|---------|--------|
| Avenir Next (Ultra Light / Regular / Medium) | **Nunito Sans** (200/400/600) | Substituted — Avenir Next is a proprietary Apple/Linotype font |
| 方正正中黑简体 (FZZhengZhongHeiJianTi) | **`fonts/FZZZHONGJW.TTF`** — the real face, loaded via `@font-face` | ✅ Native |
| 苹方 (PingFang SC) | system PingFang on Apple devices; **Noto Sans SC 300/500** elsewhere | Renders natively on Mac/iOS; substituted elsewhere |

If you can share the licensed font files (`.otf`/`.ttf`/`.woff2`), drop them into `fonts/` and the system will pick them up via the existing `--font-en` / `--font-zh*` variable chain.

---

## UI Kits

| Kit | Path | Notes |
|-----|------|-------|
| Marketing Site | `ui_kits/marketing_site/index.html` | Bilingual marketing-site recreation — homepage with hero, programs, gallery, testimonial, footer. Includes header, button, card, ribbon-badge, and program-tile components. Extrapolated from the brand book (no source code provided). |

No mobile app / dashboard kit was created — the client hasn't shared a product surface beyond the print brand sheet. Ask if needed.

---

## How to use this system

1. Link `colors_and_type.css` in any HTML file you build for Amazing.
2. Use the CSS variables — never invent new colors. If you need a tint, use `color-mix(in srgb, var(--brand-sage) 30%, white)`.
3. Reference assets directly from `assets/`. Don't redraw.
4. For new components, study `ui_kits/marketing_site/` first — match its component vocabulary.
5. Bilingual is the default. Show Chinese alongside English wherever there's room.

---

## CAVEATS

- **No source codebase, Figma, or product screenshots were provided** — only the 3-page print brand sheet + logo. The UI kit is an opinionated extrapolation, not a recreation.
- **All three specified fonts are substituted with free fallbacks.** Real font files needed for production fidelity.
- The **gold** color in the brand book is metallic — our `--brand-gold` / `--brand-gold-light` are flat-color approximations. For hero usage consider an SVG gradient.
- No **photography** was provided. UI kit uses solid sage/blush blocks as placeholders.
- No **dark mode** is defined — the brand's whole language is built on warm paper-white. Ask if a dark variant is needed.


## Components

Exported on `window.AmazingPostnatalDesignSystem_e378c1`:

- **Button** — pill button in rose, sage, outline, and ghost variants (sm/md/lg).
- **SectionHeading** — eyebrow + display title + Chinese sub-line.
- **ProgramCard** — program tile with duration pill and bilingual title.

Global styles: link `styles.css` (it `@import`s `colors_and_type.css`).
