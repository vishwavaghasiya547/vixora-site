'use client';

import { useState } from 'react';
import {
  Atom,
  Triangle,
  Hexagon,
  Terminal,
  FileCode2,
  ShoppingCart,
  Database,
  Cloud,
  Box,
  Brain,
  Code,
  Wind,
  Layers,
  Workflow,
  Globe,
  Lock,
  Mic2,
  BarChart2,
  GitBranch,
  Cpu,
  MessageSquare,
  Search,
  Server,
} from 'lucide-react';

const techs = [
  /* ── Frontend ── */
  { name: 'React',         cat: 'Frontend',   icon: Atom },
  { name: 'Next.js',       cat: 'Frontend',   icon: Triangle },
  { name: 'Vue.js',        cat: 'Frontend',   icon: Code },
  { name: 'TypeScript',    cat: 'Frontend',   icon: FileCode2 },
  { name: 'Tailwind CSS',  cat: 'Frontend',   icon: Wind },

  /* ── Backend ── */
  { name: 'Node.js',       cat: 'Backend',    icon: Hexagon },
  { name: 'Python',        cat: 'Backend',    icon: Terminal },
  { name: 'FastAPI',       cat: 'Backend',    icon: Layers },
  { name: 'REST & GraphQL',cat: 'Backend',    icon: Globe },

  /* ── AI / ML ── */
  { name: 'OpenAI GPT',    cat: 'AI / ML',    icon: Brain },
  { name: 'LangChain',     cat: 'AI / ML',    icon: Workflow },
  { name: 'TensorFlow',    cat: 'AI / ML',    icon: Cpu },
  { name: 'Whisper / STT', cat: 'AI / ML',    icon: Mic2 },

  /* ── Database ── */
  { name: 'PostgreSQL',    cat: 'Database',   icon: Database },
  { name: 'MongoDB',       cat: 'Database',   icon: Database },
  { name: 'Redis',         cat: 'Database',   icon: Server },
  { name: 'Supabase',      cat: 'Database',   icon: Database },

  /* ── Cloud & DevOps ── */
  { name: 'AWS',           cat: 'Cloud',      icon: Cloud },
  { name: 'Docker',        cat: 'Cloud',      icon: Box },
  { name: 'GitHub CI/CD',  cat: 'Cloud',      icon: GitBranch },

  /* ── Commerce & Integrations ── */
  { name: 'Shopify Plus',  cat: 'Commerce',   icon: ShoppingCart },
  { name: 'WhatsApp API',  cat: 'Integrations', icon: MessageSquare },
  { name: 'Google Search Console', cat: 'Integrations', icon: Search },
  { name: 'Stripe',        cat: 'Integrations', icon: Lock },

  /* ── Analytics ── */
  { name: 'Analytics Dashboards', cat: 'Analytics', icon: BarChart2 },
];

const Technology = () => {
  const [active, setActive] = useState('All');
  const cats = ['All', ...Array.from(new Set(techs.map((t) => t.cat)))];
  const filtered = active === 'All' ? techs : techs.filter((t) => t.cat === active);

  return (
    <section id="technology" className="section-pad relative" style={{ background: 'hsl(var(--bg))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="text-caption">Tech Stack</span>
          <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--ink-muted))' }}>
            {techs.length} Tools
          </span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-12">
          <h2
            className="text-display scroll-reveal delay-100"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            Tools of the{' '}
            <span className="text-serif-accent">trade</span>
          </h2>
          <div className="flex items-end scroll-reveal delay-200">
            <p className="text-body max-w-lg">
              A battle-tested set of technologies we use to build AI platforms, SaaS products,
              marketplaces, and analytics tools that scale in production.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 scroll-reveal delay-200">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className="px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200"
              style={{
                background: active === c ? 'hsl(var(--ink))' : 'hsl(var(--surface-warm))',
                color: active === c ? 'hsl(var(--bg))' : 'hsl(var(--ink-muted))',
                border: `1px solid ${active === c ? 'hsl(var(--ink))' : 'hsl(var(--border-strong))'}`,
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filtered.map((t, i) => (
            <div
              key={t.name}
              className={`card p-5 text-center group cursor-default scroll-reveal delay-${Math.min((i + 1) * 100, 500)}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300"
                style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
              >
                <t.icon
                  className="w-5 h-5 stroke-[1.5] transition-colors duration-300 group-hover:stroke-[2]"
                  style={{ color: 'hsl(var(--ink-muted))' }}
                />
              </div>
              <h3 className="font-semibold text-sm mb-0.5 group-hover:text-accent transition-colors leading-tight">
                {t.name}
              </h3>
              <span className="text-caption">{t.cat}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14 scroll-reveal delay-300">
          <button
            className="btn-primary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            id="technology-discuss-stack-btn"
          >
            Discuss Your Stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technology;
