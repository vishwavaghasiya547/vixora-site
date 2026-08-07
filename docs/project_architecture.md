# Vixora Labs - Project Architecture & Strategy

As a Staff Frontend Engineer, designing the architecture for a premium, AI-first SaaS agency website requires a delicate balance between bleeding-edge performance (Next.js 15, RSCs), developer experience (TypeScript, Tailwind), and world-class aesthetics (Framer Motion, Shadcn). 

We are avoiding the "template" feel by composing a highly modular, scalable, and maintainable foundation. Here is the architectural blueprint for Vixora Labs.

## 1. Folder Structure
We will adopt a `src`-based Next.js 15 App Router architecture, structured by technical concern but highly modularized for feature scalability.

```text
vixora-site/
├── public/                 # Static assets (fonts, icons, social-cards, lottie)
├── src/
│   ├── app/                # Next.js App Router (pages, layouts, route handlers)
│   ├── assets/             # Co-located asset files (svgs, local images)
│   ├── components/         # Global React components
│   │   ├── ui/             # Shadcn & primitive UI components
│   │   ├── layout/         # Navigation, Footers, Section wrappers
│   │   └── shared/         # Reusable complex components (Cards, Grids)
│   ├── config/             # Global configuration, constants, site metadata
│   ├── features/           # Feature-based modules (e.g., /services, /portfolio)
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Third-party wrappers and core utilities
│   ├── styles/             # Global CSS, Tailwind entry
│   └── types/              # Global TypeScript definitions
├── .env.local              # Environment variables
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration (CSS variables based)
└── tsconfig.json           # TypeScript strict configuration
```
**Decision**: The `src` directory isolates application code from configuration files. Grouping by `features/` allows us to colocate domain-specific logic, while `components/ui/` keeps our design system primitives (Shadcn) strictly separated from business logic.

## 2. Component Structure
We follow a composition-over-configuration model inspired by Radix UI. 

* **Primitives (`components/ui`)**: Highly reusable, unstyled (or minimally styled with Tailwind) components like Buttons, Inputs, Dialogs.
* **Layouts (`components/layout`)**: Structural components that dictate the page skeleton (Navbar, Footer, Container, Section).
* **Feature Components (`features/[domain]/components`)**: Domain-specific UI that isn't reused globally (e.g., `PortfolioGrid`, `ServiceComparisonTable`).

**Decision**: This prevents the "prop-drilling hell" found in monolithic components. By building compound components, we maintain flexibility to achieve the bespoke, premium designs seen in Linear or Vercel without overriding a million props.

## 3. Data Layer
Next.js 15 heavily leans into React Server Components (RSC).
* **Data Fetching**: Native `fetch` API within Server Components with granular caching/revalidation (`next: { revalidate: 3600 }`).
* **Mutations**: Next.js Server Actions for form submissions (e.g., Contact Form, Newsletter).
* **State Management**: URL Search Params for shareable state (filtering portfolio, pagination). React `useState`/`useReducer` only for ephemeral UI state (accordions, modal visibility).

**Decision**: Avoiding heavy client-side state libraries (Redux, Zustand) keeps the bundle size minimal. Server Components ensure we ship zero JavaScript to the client for purely content-driven sections, maximizing hydration speed and SEO.

## 4. Config Structure
A central source of truth for site-wide variables.
* `config/site.ts`: Site metadata, URLs, navigation links, and social handles.
* `config/animations.ts`: Standardized Framer Motion variants (e.g., `fadeUp`, `staggerContainer`) to ensure motion consistency.

**Decision**: Hardcoding strings across the app makes scaling and updating a nightmare. A centralized config ensures that when Vixora Labs updates a service offering or social link, it's changed in one place and reflects everywhere.

## 5. Types
Strictly typed architecture.
* `types/index.d.ts`: Global shared types.
* `types/api.ts`: Request/Response interfaces.

**Decision**: We will enforce `strict: true` in `tsconfig.json`. Types will be primarily inferred where possible to reduce boilerplate, but explicit for API contracts and component props to guarantee self-documenting code and catch errors at compile time.

## 6. Hooks
Client-side logic encapsulation.
* `use-media-query.ts`: For JS-based responsive logic (when Tailwind isn't enough).
* `use-scroll-progress.ts`: For driving scroll-linked animations.
* `use-debounce.ts`: For search inputs or resize handlers.

**Decision**: Custom hooks will be strictly limited to Client Components (`"use client"`). They extract complex lifecycle and effect logic away from the UI, keeping our component files clean and focused on rendering.

## 7. Utilities
Pure functions without side effects.
* `lib/utils.ts`: Contains the `cn()` utility (clsx + tailwind-merge) which is crucial for dynamic Shadcn component styling without class conflicts.
* `lib/formatters.ts`: Date and currency formatting.

**Decision**: Utilities must be easily testable. The `cn()` function is a non-negotiable standard in modern Tailwind development to handle conditional class merging safely.

## 8. SEO Structure
AI-first and SaaS companies rely heavily on organic discovery.
* **Next.js Metadata API**: Utilizing `generateMetadata` for dynamic OpenGraph images, Twitter cards, and title templates.
* **Sitemap & Robots**: Next.js native `sitemap.ts` and `robots.ts` for automated, dynamic generation.
* **Semantic HTML**: Proper `<article>`, `<section>`, `<nav>`, `<aside>`, and strict `h1`-`h6` hierarchy.
* **Schema Markup**: Injecting JSON-LD for Organization, LocalBusiness, and Service schemas.

**Decision**: SEO cannot be an afterthought. By building JSON-LD and dynamic OG image generation (using `@vercel/og`) into the core architecture, we guarantee that every shared link looks premium and search engines parse our intent perfectly.

## 9. Assets Structure
* `public/fonts/`: Local font hosting (Geist) for zero layout shift (CLS).
* `public/images/`: Highly compressed WebP/AVIF imagery.
* `assets/icons/`: Inline SVG React components (using Lucide React for consistency, custom SVGs for bespoke icons).

**Decision**: Using `next/font/local` ensures fonts are preloaded and hosted on our domain, eliminating external requests to Google Fonts and drastically improving initial load times.

## 10. Naming Conventions
* **Files/Folders**: `kebab-case` (e.g., `button-group.tsx`, `hero-section.tsx`). Plays best with URLs and diverse operating systems.
* **Components/Interfaces**: `PascalCase` (e.g., `HeroSection`, `PortfolioItem`).
* **Variables/Functions/Hooks**: `camelCase` (e.g., `formatDate`, `useScroll`).
* **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRIES`, `SITE_URL`).

**Decision**: Strict naming conventions enforce a uniform codebase. It reduces cognitive load for new engineers onboarding onto the project.

## 11. Coding Standards
* **Early Returns**: Avoid deep nesting by returning early in functions.
* **Destructuring**: Always destructure props and objects.
* **Linting/Formatting**: Biome or ESLint + Prettier on pre-commit hooks (Husky & lint-staged).
* **Import Sorting**: Automated import sorting (React -> Next -> Third-party -> Local absolute -> Local relative).

**Decision**: Code should look like it was written by a single person. Automated formatting removes subjective debates in PRs.

## 12. Reusable Component Strategy
* **Base**: Shadcn UI + Radix primitives for accessibility.
* **Styling Engine**: Tailwind CSS via the `cn()` utility.
* **Variant Management**: `class-variance-authority` (CVA) to manage component states (primary, secondary, outlined, sizes).

**Decision**: We will not build complex components from scratch if an accessible primitive exists. We will wrap Radix primitives, style them with Tailwind CVA, and expose them as Vixora's design system.

## 13. Performance Strategy
* **Server-First**: Default to Server Components. Opt-in to Client Components only at the leaf nodes of the tree (e.g., just the interactive button, not the whole card).
* **Image Optimization**: `next/image` with strict sizing and `placeholder="blur"` for hero images.
* **Third-Party Scripts**: `next/script` with `strategy="worker"` or `lazyOnload` for analytics to keep the main thread unblocked.

**Decision**: A premium site must load instantly. A slow site breaks the illusion of enterprise quality. We budget our JavaScript heavily.

## 14. Accessibility (a11y) Strategy
* **Radix UI**: Ensures complex interactions (dropdowns, modals, tabs) are keyboard-navigable and screen-reader friendly out-of-the-box.
* **Focus States**: High-contrast, custom focus rings using Tailwind's `focus-visible:` pseudo-class to aid keyboard navigation without compromising mouse users' aesthetics.
* **Contrast**: Strictly adhering to WCAG AA contrast ratios, particularly in the dark theme.

**Decision**: Accessibility is not just compliance; it's a mark of engineering maturity. Premium brands do not exclude users.

## 15. Responsive Strategy
* **Mobile-First**: Tailwind defaults to mobile. We scale up using `sm:`, `md:`, `lg:`, `xl:`.
* **Fluid Typography**: Utilizing `clamp()` via Tailwind plugins for font sizes that scale smoothly between screen sizes, rather than jarring breakpoints.
* **CSS Grid**: Heavy reliance on Grid for complex, two-dimensional layouts (like the Portfolio or Bento-box feature sections) which elegantly collapse to single columns on mobile.

**Decision**: The site must feel native on an iPhone and expansive on a 4K monitor. Fluid scaling creates a much more organic, premium feel than rigid breakpoints.

## 16. Animation Strategy
* **Micro-interactions (CSS/Tailwind)**: Hover states, button clicks, and color transitions handled strictly via CSS `transition-all duration-300 ease-out`.
* **Orchestration & Physics (Framer Motion)**: Page transitions, complex stagger effects, and layout animations.
* **Scroll Dynamics (GSAP / Lenis)**: Lenis for buttery smooth scrolling. GSAP ScrollTrigger for pinning and complex scroll-bound animations.

**Decision**: Performance is paramount. We will use hardware-accelerated CSS for 90% of animations. Framer Motion/GSAP is reserved for the "wow" moments. We will respect `prefers-reduced-motion` natively.

## 17. Dark Theme Strategy
* **CSS Variables**: Tailwind configured to use CSS variables for colors (e.g., `bg-background`, `text-foreground`).
* **Implementation**: `next-themes` handling the `.dark` class injection on the `<html>` tag to prevent hydration mismatch flashes.
* **Aesthetics**: Dark mode isn't just inverted colors. We will use deep, rich grays (e.g., `#09090B`) rather than pure black, accented by the primary brand colors (`#2563EB`, `#7C3AED`) with subtle glows and radial gradients to achieve the "AI/Premium" aesthetic.

**Decision**: Given the target audience (Developers, SaaS, Enterprise), Dark Mode is functionally the primary mode. The architecture natively supports it via design tokens (variables) rather than hardcoding hex values.
