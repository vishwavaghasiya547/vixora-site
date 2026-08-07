# Vixora Labs - Design System

*Authored jointly from the perspective of a Principal Product Designer at Linear & a Staff Frontend Engineer at Vercel.*

This document establishes the universal design tokens, components, and interactive paradigms for the Vixora Labs website. We are designing a premium, AI-first SaaS agency presence. It must feel less like a traditional agency site and more like a high-performance software product.

---

## 1. Design Philosophy

- **Premium**: High-contrast, meticulously spaced, and typographically rich. Every pixel has a purpose.
- **Minimal**: Content is king. We remove all unnecessary borders, heavy backgrounds, and distracting elements.
- **Enterprise**: Trust-inducing. Professional. Scalable.
- **AI-first**: Achieved through deep dark themes, subtle glowing elements, glassmorphism, and fluid motion.
- **Elegant**: Refined interactions. No jarring animations. Everything feels deliberate.
- **Timeless**: Avoiding fleeting trends (like heavy neubrutalism). Focusing on Swiss design principles applied to digital spaces.

---

## 2. Color System

Our palette is optimized for a deep, rich dark mode, reflecting the "AI-first" and "Premium" directives.

* **Primary (`#2563EB`)**: Brand Blue. Used for primary CTAs and active states.
* **Secondary (`#7C3AED`)**: Deep Purple. Used for gradients and AI-focused accents.
* **Accent (`#38BDF8`)**: Cyan/Light Blue. Used for glows, highlights, and micro-interactions.
* **Background (`#09090B`)**: Rich Dark (not pure black). Provides depth.
* **Surface (`#18181B`)**: Slightly lighter dark for cards and elevated components.
* **Border (`#27272A`)**: Extremely subtle separators. Barely visible unless focused.
* **Muted (`#A1A1AA`)**: Slate Gray. Used for body text and secondary information.
* **Success (`#10B981`)**: Emerald.
* **Warning (`#F59E0B`)**: Amber.
* **Danger (`#EF4444`)**: Rose.

---

## 3. Typography

**Font Family**: Geist (Geist Sans for UI, Geist Mono for code).

We utilize a tight typographic scale to create a crisp, highly legible hierarchy.

| Level | Size | Line Height | Font Weight | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero** | 72px | 1.1 | 600 (SemiBold) | -0.04em | Main landing page hooks |
| **H1** | 56px | 1.1 | 600 (SemiBold) | -0.02em | Page titles |
| **H2** | 40px | 1.2 | 600 (SemiBold) | -0.02em | Major section headers |
| **H3** | 32px | 1.2 | 500 (Medium) | -0.01em | Sub-sections, Card headers |
| **H4** | 24px | 1.3 | 500 (Medium) | 0 | Small widget titles |
| **Body Large** | 18px | 1.6 | 400 (Regular) | 0 | Lead paragraphs, Hero subtext |
| **Body** | 16px | 1.6 | 400 (Regular) | 0 | Default text, articles |
| **Small** | 14px | 1.5 | 400 (Regular) | 0 | Secondary text, nav links |
| **Caption** | 12px | 1.4 | 500 (Medium) | 0.02em | Badges, tiny labels, tooltips |

---

## 4. Spacing System

A strict 4pt baseline grid to ensure mathematical rhythm across the UI.

- **4px**: Micro gaps (e.g., between an icon and text inside a badge).
- **8px**: Inner component padding (e.g., small buttons, list items).
- **12px**: Small item gaps (e.g., between form labels and inputs).
- **16px**: Standard gap (e.g., grid gaps, standard padding).
- **24px**: Large padding (e.g., interior of a standard card).
- **32px**: Component spacing (e.g., distance between distinct UI modules).
- **48px**: Minor section gaps (e.g., between headers and content).
- **64px**: Standard section gaps (e.g., spacing between content blocks).
- **96px**: Page margins / Large section breaks.
- **128px**: Hero to first-section gaps (creates breathing room).

---

## 5. Radius System

We use a modern, slightly rounded aesthetic. Not fully pill-shaped (unless it's a badge), but not sharp corners.

- **Buttons**: 8px (`md`). Hits the sweet spot of approachable but professional.
- **Cards**: 16px (`xl`). Large enough to feel contained and distinct from the background.
- **Modal**: 24px (`2xl`). Feels like an elevated, distinct sheet over the UI.
- **Input**: 6px (`sm`). Tight, technical, and precise.
- **Badge**: 9999px (`full`). Fully rounded for quick visual scanning.

---

## 6. Shadows

In dark mode, traditional drop shadows don't work. We use subtle glows, border highlights, and backdrop blurs to simulate elevation.

- **Small**: Used for hovering small items. Subtle inner border highlight.
- **Medium**: Used for dropdowns. Slightly darker background with a 1px border.
- **Large**: Used for Modals. A very faint, widespread colored glow (often using primary color at 5% opacity).
- **Glow**: Intense, tightly blurred radial gradients behind specific AI elements or primary buttons.
- **Glass**: `backdrop-blur-md` with `bg-white/5` and a `border-white/10` stroke.

---

## 7. Grid System

- **Container Width**: Max width of `1280px` (`max-w-7xl`). Centered.
- **Desktop (>=1024px)**: 12 columns, 24px gap.
- **Laptop (>=768px)**: 12 columns, 16px gap.
- **Tablet (>=640px)**: 8 columns, 16px gap.
- **Mobile (<640px)**: 4 columns, 16px gap.

---

## 8. Button System

- **Primary**: Brand Blue background, white text. Has a subtle drop-glow.
- **Secondary**: Surface background (`#18181B`), white text, subtle border.
- **Ghost**: Transparent background, text color dims on hover. Used for tertiary actions.
- **Outline**: Transparent background, 1px border. Used for secondary CTAs.
- **Icon**: Square aspect ratio, houses a single Lucide icon.
- **Sizes**:
  - `sm`: 32px height, 14px text.
  - `md`: 40px height, 14px text (Default).
  - `lg`: 48px height, 16px text.
- **States**:
  - **Hover**: Scale up (`1.02`), brighten background slightly.
  - **Disabled**: Opacity 50%, `cursor-not-allowed`, removes hover effects.
  - **Loading**: Text fades out, replaced by a centered spinner. Interactions blocked.

---

## 9. Card System

- **Service Card**: Top-aligned icon, H3 title, muted description. Arrow appears on hover.
- **Portfolio Card**: Full-bleed image at the top. Content overlay or bottom anchored. Tags overlay the image.
- **Testimonial Card**: Minimal. Quote in H4, small avatar, name, and company below.
- **Pricing Card**: High-contrast. Most popular tier has a subtle radial glow behind it and a primary button.
- **Glass Card**: Used specifically over complex backgrounds (like hero sections) to maintain readability.
- **Hover Behaviour**: Lift Y-axis by `-4px`, reveal a subtle `border-white/20` highlight. Image inside (if any) scales to `1.05`.

---

## 10. Input System

- **Types**: Text, Email, Textarea, Select, Checkbox, Radio.
- **Styling**: `bg-transparent`, `border-border`, `text-white`. Placeholder text is `text-muted`.
- **Focus**: We do not use default blue outlines. We use `ring-2 ring-primary/50 ring-offset-2 ring-offset-background`.
- **Validation**:
  - Error: Border turns `border-danger`. Shakes slightly on submit if invalid.
  - Success: Border turns `border-success`.

---

## 11. Icon System

- **Library**: Lucide React.
- **Stroke Width**: Strictly `1.5px` for an elegant, lightweight feel.
- **Sizing**:
  - `sm`: 16x16 (inside buttons/badges)
  - `md`: 20x20 (standard UI elements, nav)
  - `lg`: 24x24 (service card heroes, feature highlights)

---

## 12. Motion System

Powered by Framer Motion. Motion should feel like physical physics, not linear math.

- **Duration**:
  - Fast: `0.2s` (Micro-interactions, hovers)
  - Normal: `0.4s` (Modals, dropdowns)
  - Slow: `0.8s` (Page load orchestration)
- **Ease**: Custom curve `cubic-bezier(0.32, 0.72, 0, 1)` (snappy entry, smooth deceleration).
- **Stagger**: `0.1s` delay between child elements appearing (e.g., list of features).
- **Hover**: Spring physics (`stiffness: 300, damping: 20`).
- **Page Transition**: Very subtle. Opacity `0 -> 1`, Y-axis `10px -> 0`.
- **Scroll Animation**: Elements fade up as they enter the viewport with a `50px` offset.

---

## 13. Accessibility Rules

- **WCAG AA**: Strict adherence to contrast ratios for text. Muted text against the background must pass.
- **Focus Rings**: Every interactive element must have a visible `focus-visible` ring. No exceptions.
- **Keyboard Navigation**: The entire site must be navigable via the Tab key.
- **Reduced Motion**: Respect `prefers-reduced-motion` media queries by disabling Framer Motion transforms and falling back to simple opacity fades.

---

## 14. Responsive Rules

- **Mobile First**: All baseline CSS targets mobile (`<640px`).
- **Tablet (`md:`)**: Used primarily to switch from stacked columns to grid layouts.
- **Desktop (`lg:`)**: Used to finalize massive multi-column layouts and increase paddings.

---

## 15. Tailwind Rules

- **Class Ordering**: We enforce standard formatting (Layout -> Spacing -> Sizing -> Typography -> Colors -> Borders -> Effects -> Interactivity) via Prettier plugins.
- **Variants**: heavily utilize `hover:`, `focus-visible:`, and group variants (`group-hover:`).
- **`cn()`**: All components must accept a `className` prop and merge it using `clsx` and `tailwind-merge` to allow localized overrides.
- **`cva()`**: Used to define component architectures. Every button, badge, and card variant is typed and defined in a CVA dictionary.

---

## 16. Component Naming Convention

- **Files**: `kebab-case` (`service-card.tsx`).
- **Components**: `PascalCase` (`ServiceCard`).
- **Compound Components**: Exported attached to the parent (e.g., `<Card.Header>`, `<Card.Content>`).

---

## 17. Example Component Tree

```text
src/
└── components/
    ├── ui/
    │   ├── button.tsx
    │   ├── card.tsx
    │   ├── input.tsx
    │   └── badge.tsx
    ├── layout/
    │   ├── navbar.tsx
    │   ├── footer.tsx
    │   └── section.tsx
    └── features/
        ├── hero/
        │   └── hero-section.tsx
        ├── services/
        │   ├── service-grid.tsx
        │   └── service-card.tsx
        └── portfolio/
            ├── portfolio-grid.tsx
            └── portfolio-item.tsx
```
