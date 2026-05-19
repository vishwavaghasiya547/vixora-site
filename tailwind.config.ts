import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        bg: { DEFAULT: 'hsl(var(--bg))', alt: 'hsl(var(--bg-alt))' },
        surface: { DEFAULT: 'hsl(var(--surface))', warm: 'hsl(var(--surface-warm))' },
        ink: { DEFAULT: 'hsl(var(--ink))', light: 'hsl(var(--ink-light))', muted: 'hsl(var(--ink-muted))', faint: 'hsl(var(--ink-faint))' },
        accent: { DEFAULT: 'hsl(var(--accent))', hover: 'hsl(var(--accent-hover))', soft: 'hsl(var(--accent-soft))', medium: 'hsl(var(--accent-medium))' },
        sage: { DEFAULT: 'hsl(var(--sage))', soft: 'hsl(var(--sage-soft))' },
        border: { DEFAULT: 'hsl(var(--border))', strong: 'hsl(var(--border-strong))' },
      },
      borderRadius: {
        lg: 'var(--radius)',
      },
    },
  },
  plugins: [],
} satisfies Config;
