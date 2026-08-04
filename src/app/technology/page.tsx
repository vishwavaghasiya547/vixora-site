'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, ArrowUpRight,
  Atom, Triangle, Hexagon, Terminal, FileCode2,
  ShoppingCart, Database, Cloud, Box, Brain,
  Code, Wind, Layers, Globe, Lock, Mic2,
  BarChart2, GitBranch, Cpu, MessageSquare,
  Search, Server, Bot, MapPin, Star,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import StartProjectModal from '@/components/StartProjectModal';

/* ─── Tech stack data ────────────────────────────── */
const stack = [
  {
    slug: 'react',
    name: 'React',
    cat: 'Frontend',
    icon: Atom,
    tagline: 'The foundation of every interface we ship.',
    depth: 'Expert',
    since: '2019',
    projects: 60,
  },
  {
    slug: 'nextjs',
    name: 'Next.js',
    cat: 'Frontend',
    icon: Triangle,
    tagline: 'Full-stack React for production-grade web apps.',
    depth: 'Expert',
    since: '2020',
    projects: 45,
  },
  {
    slug: 'typescript',
    name: 'TypeScript',
    cat: 'Language',
    icon: FileCode2,
    tagline: 'Type safety at every layer of our stack.',
    depth: 'Expert',
    since: '2020',
    projects: 55,
  },
  {
    slug: 'tailwindcss',
    name: 'Tailwind CSS',
    cat: 'Frontend',
    icon: Wind,
    tagline: 'Utility-first design systems that scale.',
    depth: 'Expert',
    since: '2021',
    projects: 40,
  },
  {
    slug: 'nodejs',
    name: 'Node.js',
    cat: 'Backend',
    icon: Hexagon,
    tagline: 'Event-driven APIs and real-time backends.',
    depth: 'Expert',
    since: '2019',
    projects: 70,
  },
  {
    slug: 'python',
    name: 'Python',
    cat: 'Backend',
    icon: Terminal,
    tagline: 'Data pipelines, automation, and AI workloads.',
    depth: 'Expert',
    since: '2019',
    projects: 35,
  },
  {
    slug: 'fastapi',
    name: 'FastAPI',
    cat: 'Backend',
    icon: Layers,
    tagline: 'High-performance async Python APIs.',
    depth: 'Advanced',
    since: '2022',
    projects: 18,
  },
  {
    slug: 'openai',
    name: 'OpenAI / GPT',
    cat: 'AI / ML',
    icon: Brain,
    tagline: 'LLM integration, agents, and RAG pipelines.',
    depth: 'Expert',
    since: '2022',
    projects: 22,
  },
  {
    slug: 'langchain',
    name: 'LangChain',
    cat: 'AI / ML',
    icon: Cpu,
    tagline: 'Orchestrating multi-step AI reasoning chains.',
    depth: 'Advanced',
    since: '2023',
    projects: 12,
  },
  {
    slug: 'whisper',
    name: 'Whisper / STT',
    cat: 'AI / ML',
    icon: Mic2,
    tagline: 'Production voice transcription at scale.',
    depth: 'Advanced',
    since: '2023',
    projects: 8,
  },
  {
    slug: 'postgresql',
    name: 'PostgreSQL',
    cat: 'Database',
    icon: Database,
    tagline: 'The relational backbone of our SaaS platforms.',
    depth: 'Expert',
    since: '2019',
    projects: 50,
  },
  {
    slug: 'mongodb',
    name: 'MongoDB',
    cat: 'Database',
    icon: Database,
    tagline: 'Flexible document storage for dynamic schemas.',
    depth: 'Expert',
    since: '2019',
    projects: 30,
  },
  {
    slug: 'redis',
    name: 'Redis',
    cat: 'Database',
    icon: Server,
    tagline: 'Caching, queues, and real-time pub/sub.',
    depth: 'Advanced',
    since: '2021',
    projects: 25,
  },
  {
    slug: 'aws',
    name: 'AWS',
    cat: 'Cloud',
    icon: Cloud,
    tagline: 'Multi-region deployments and managed services.',
    depth: 'Expert',
    since: '2020',
    projects: 40,
  },
  {
    slug: 'docker',
    name: 'Docker',
    cat: 'Cloud',
    icon: Box,
    tagline: 'Reproducible builds and container orchestration.',
    depth: 'Expert',
    since: '2020',
    projects: 45,
  },
  {
    slug: 'shopify',
    name: 'Shopify Plus',
    cat: 'Commerce',
    icon: ShoppingCart,
    tagline: 'Custom storefronts and headless commerce.',
    depth: 'Advanced',
    since: '2020',
    projects: 14,
  },
  {
    slug: 'stripe',
    name: 'Stripe',
    cat: 'Integrations',
    icon: Lock,
    tagline: 'Subscriptions, metered billing, and payments.',
    depth: 'Expert',
    since: '2020',
    projects: 28,
  },
  {
    slug: 'whatsapp-api',
    name: 'WhatsApp API',
    cat: 'Integrations',
    icon: MessageSquare,
    tagline: 'Conversational product delivery over messaging.',
    depth: 'Advanced',
    since: '2022',
    projects: 10,
  },
];

/* ─── Projects data ──────────────────────────────── */
const projects = [
  {
    title: 'AssistPro AI',
    category: 'AI Productivity Platform',
    href: 'https://assistpro.ai',
    icon: Bot,
    desc: 'Natural language task management across WhatsApp, Telegram, and web.',
    stack: ['OpenAI / GPT', 'Node.js', 'PostgreSQL', 'Next.js'],
    outcome: 'Multi-channel AI assistant shipped to production',
    accentVar: '--accent',
  },
  {
    title: 'UserCall',
    category: 'Voice AI Research Platform',
    href: 'https://www.usercall.co',
    icon: Mic2,
    desc: 'AI-moderated voice interviews at scale with automatic insight extraction.',
    stack: ['Whisper / STT', 'Python', 'FastAPI', 'React'],
    outcome: '10× faster research cycle for product teams',
    accentVar: '--sage',
  },
  {
    title: 'PickleballCourts',
    category: 'Marketplace & Community',
    href: 'https://livepickleballcourts.com',
    icon: MapPin,
    desc: 'Location-based court discovery, community, and content monetisation.',
    stack: ['Next.js', 'MongoDB', 'AWS', 'Stripe'],
    outcome: 'National marketplace with geolocation at its core',
    accentVar: '--accent',
  },
  {
    title: 'SEOTalos',
    category: 'SEO Analytics SaaS',
    href: 'https://seotalos.com',
    icon: BarChart2,
    desc: 'Multi-property Search Console analytics with AI visibility tracking.',
    stack: ['Next.js', 'Python', 'PostgreSQL', 'Redis'],
    outcome: 'Agency analytics platform with SEO A/B testing',
    accentVar: '--sage',
  },
  {
    title: 'ReviewRocket',
    category: 'Reputation Management',
    href: 'https://reviewroket.com',
    icon: Star,
    desc: 'Automated review collection and AI-powered response generation.',
    stack: ['Node.js', 'OpenAI / GPT', 'MongoDB', 'Stripe'],
    outcome: 'Reputation automation for local business at scale',
    accentVar: '--accent',
  },
];

/* ─── Capability pillars ─────────────────────────── */
const capabilities = [
  {
    num: '01',
    title: 'Architecture Design',
    body: 'We design for the system you need in year three, not just for what ships next month. Scalability is a first-class requirement.',
  },
  {
    num: '02',
    title: 'Performance Engineering',
    body: 'Sub-100ms API responses, Core Web Vitals 90+, and database queries that never become a production incident.',
  },
  {
    num: '03',
    title: 'Security by Default',
    body: 'Auth, data isolation, rate limiting, and secrets management built in from day one — not bolted on before launch.',
  },
  {
    num: '04',
    title: 'Delivery at Velocity',
    body: 'CI/CD pipelines, feature flags, and automated testing that let us ship multiple times a day without risking production.',
  },
];

/* ─── Stack ecosystem chains ─────────────────────── */
const ecosystems = [
  {
    label: 'AI SaaS Platform',
    chain: ['Next.js', '→', 'FastAPI', '→', 'OpenAI / GPT', '→', 'PostgreSQL', '→', 'Redis', '→', 'AWS'],
  },
  {
    label: 'E-Commerce Headless',
    chain: ['Next.js', '→', 'Node.js', '→', 'Shopify Plus', '→', 'Stripe', '→', 'MongoDB', '→', 'Docker'],
  },
  {
    label: 'Voice AI Pipeline',
    chain: ['React', '→', 'FastAPI', '→', 'Whisper / STT', '→', 'LangChain', '→', 'PostgreSQL', '→', 'AWS'],
  },
  {
    label: 'Analytics Platform',
    chain: ['Next.js', '→', 'Python', '→', 'PostgreSQL', '→', 'Redis', '→', 'AWS'],
  },
];

const cats = ['All', ...Array.from(new Set(stack.map((t) => t.cat)))];

/* ─── Page ───────────────────────────────────────── */
export default function TechnologyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter]   = useState('All');
  const [scrollY, setScrollY]             = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filtered = activeFilter === 'All' ? stack : stack.filter((t) => t.cat === activeFilter);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden" style={{ background: 'hsl(var(--bg))' }}>
        {/* Engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            transform: `translateY(${scrollY * 0.06}px)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8 scroll-reveal">
            <span className="text-caption">Engineering Stack</span>
            <div className="h-px w-12" style={{ background: 'hsl(var(--border))' }} />
            <span className="flex items-center gap-1.5">
              <span className="status-live" />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--sage))' }}>
                {stack.length} Technologies
              </span>
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1
                className="text-display reveal reveal-d1"
                style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', lineHeight: 1.05 }}
              >
                Tools we trust
                <br />
                in <span className="text-serif-accent">production.</span>
              </h1>
            </div>

            <div className="reveal reveal-d2 space-y-6">
              <p className="text-body text-lg leading-relaxed">
                Every technology we use has been chosen deliberately, battle-tested across real
                client products, and measured against production performance standards — not
                just developer preference.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  id="tech-hero-start-project"
                  className="btn-primary flex items-center gap-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Discuss Your Stack <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/#work" className="btn-outline flex items-center gap-2" id="tech-hero-view-work">
                  <GitBranch className="w-4 h-4" /> See What We've Built
                </Link>
              </div>
            </div>
          </div>

          {/* Quick stats strip */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 mt-20 reveal reveal-d3"
            style={{ borderTop: '1px solid hsl(var(--border))' }}
          >
            {[
              { val: '5+', label: 'Years shipping production systems' },
              { val: '150+', label: 'Projects across 8 technology categories' },
              { val: '18', label: 'Battle-tested technologies in our stack' },
              { val: '98%', label: 'Client retention on long-term engagements' },
            ].map((s, i) => (
              <div
                key={s.label}
                className="py-7 px-6"
                style={{ borderLeft: i > 0 ? '1px solid hsl(var(--border))' : undefined }}
              >
                <div
                  className="font-serif font-bold mb-1"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'hsl(var(--ink))' }}
                >
                  {s.val}
                </div>
                <div className="text-caption">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CAPABILITY PILLARS
      ═══════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">How We Engineer</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
            <h2
              className="text-display scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Expertise that goes
              <br />
              <span className="text-serif-accent">beyond syntax</span>
            </h2>
            <div className="flex items-end scroll-reveal delay-200">
              <p className="text-body max-w-lg">
                Knowing a framework is the baseline. What differentiates our engineers is the
                depth of systems knowledge, production instinct, and architectural reasoning
                they bring to every engagement.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {capabilities.map((c, i) => (
              <div
                key={c.num}
                className={`group flex flex-col lg:flex-row gap-4 lg:gap-10 py-8 cursor-default transition-colors duration-300 scroll-reveal delay-${(i + 1) * 100}`}
                style={{ borderTop: '1px solid hsl(var(--border))' }}
              >
                <span
                  className="font-mono text-xs tracking-widest shrink-0 w-6 mt-1"
                  style={{ color: 'hsl(var(--accent))' }}
                >
                  {c.num}
                </span>
                <div className="lg:w-60 shrink-0">
                  <h3
                    className="text-subhead font-semibold group-hover:text-accent transition-colors duration-300"
                    style={{ color: 'hsl(var(--ink))' }}
                  >
                    {c.title}
                  </h3>
                </div>
                <p className="text-sm flex-1 leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                  {c.body}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FULL STACK — filterable grid
      ═══════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">Tools of the Trade</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--ink-muted))' }}>
              {filtered.length} shown
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-10">
            <h2
              className="text-display scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              The full{' '}
              <span className="text-serif-accent">engineering stack</span>
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10 scroll-reveal delay-200">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActiveFilter(c)}
                className="px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200"
                style={{
                  background: activeFilter === c ? 'hsl(var(--ink))' : 'hsl(var(--surface))',
                  color: activeFilter === c ? 'hsl(var(--bg))' : 'hsl(var(--ink-muted))',
                  border: `1px solid ${activeFilter === c ? 'hsl(var(--ink))' : 'hsl(var(--border-strong))'}`,
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Tech grid — editorial rows on hover */}
          <div className="space-y-0">
            {filtered.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.slug}
                  className={`group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 cursor-default transition-all duration-300 scroll-reveal delay-${Math.min((i + 1) * 100, 400)}`}
                  style={{ borderTop: '1px solid hsl(var(--border))' }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-accent"
                    style={{
                      background: 'hsl(var(--surface))',
                      border: '1px solid hsl(var(--border))',
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'hsl(var(--ink-muted))' }} />
                  </div>

                  {/* Name + cat */}
                  <div className="sm:w-48 shrink-0">
                    <span
                      className="font-semibold text-sm transition-colors duration-300 group-hover:text-accent"
                      style={{ color: 'hsl(var(--ink))' }}
                    >
                      {tech.name}
                    </span>
                    <span className="block text-caption mt-0.5">{tech.cat}</span>
                  </div>

                  {/* Tagline */}
                  <p className="text-sm flex-1 leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                    {tech.tagline}
                  </p>

                  {/* Meta */}
                  <div className="hidden lg:flex items-center gap-6 shrink-0">
                    <div className="text-right">
                      <span className="font-mono text-xs" style={{ color: 'hsl(var(--ink-muted))' }}>
                        {tech.projects}+ projects
                      </span>
                    </div>
                    <span
                      className="tag text-[9px]"
                      style={{
                        color: tech.depth === 'Expert' ? 'hsl(var(--accent))' : 'hsl(var(--sage))',
                        borderColor: tech.depth === 'Expert' ? 'hsl(var(--accent) / 0.3)' : 'hsl(var(--sage) / 0.3)',
                        background: tech.depth === 'Expert' ? 'hsl(var(--accent-soft))' : 'hsl(var(--sage-soft))',
                      }}
                    >
                      {tech.depth}
                    </span>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ECOSYSTEM CHAINS — how tech works together
      ═══════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">Ecosystem Architecture</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
            <h2
              className="text-display scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Technologies that{' '}
              <span className="text-serif-accent">work together</span>
            </h2>
            <div className="flex items-end scroll-reveal delay-200">
              <p className="text-body max-w-lg">
                We don&apos;t select technologies in isolation. Every stack we recommend is built
                around how these tools compose — from API boundary to database to CDN edge.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {ecosystems.map((eco, i) => (
              <div
                key={eco.label}
                className={`rounded-2xl p-7 scroll-reveal delay-${(i + 1) * 100}`}
                style={{
                  background: 'hsl(var(--surface-warm))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                <span className="text-caption mb-5 block">{eco.label}</span>
                <div className="flex flex-wrap items-center gap-2">
                  {eco.chain.map((item, j) =>
                    item === '→' ? (
                      <ArrowRight
                        key={j}
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: 'hsl(var(--border-strong))' }}
                      />
                    ) : (
                      <span
                        key={j}
                        className="font-mono text-xs font-medium px-2.5 py-1 rounded-md"
                        style={{
                          background: 'hsl(var(--surface))',
                          border: '1px solid hsl(var(--border))',
                          color: 'hsl(var(--ink))',
                        }}
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REAL PROJECTS — not logos
      ═══════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">In Production</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
            <h2
              className="text-display scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Real products,
              <br />
              <span className="text-serif-accent">real stacks</span>
            </h2>
            <div className="flex items-end scroll-reveal delay-200">
              <p className="text-body max-w-lg">
                This is not a list of technologies we have read about. These are stacks we have
                shipped to production, maintained under load, and iterated on with real clients.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-10 py-8 transition-all duration-300 scroll-reveal delay-${Math.min((i + 1) * 100, 400)}`}
                  style={{ borderTop: '1px solid hsl(var(--border))' }}
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-accent"
                    style={{
                      background: `hsl(var(${p.accentVar}) / 0.08)`,
                      border: `1px solid hsl(var(${p.accentVar}) / 0.2)`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: `hsl(var(${p.accentVar}))` }} />
                  </div>

                  {/* Project name + category */}
                  <div className="lg:w-52 shrink-0">
                    <span
                      className="font-semibold transition-colors duration-300 group-hover:text-accent"
                      style={{ color: 'hsl(var(--ink))' }}
                    >
                      {p.title}
                    </span>
                    <span className="block text-caption mt-0.5">{p.category}</span>
                  </div>

                  {/* Outcome */}
                  <p className="text-sm leading-relaxed lg:w-64 shrink-0" style={{ color: 'hsl(var(--ink-light))' }}>
                    {p.outcome}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {p.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>

                  <ArrowUpRight
                    className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ color: 'hsl(var(--accent))' }}
                  />
                </a>
              );
            })}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY US — dark editorial statement
      ═══════════════════════════════════════ */}
      <section className="section-pad grain relative overflow-hidden" style={{ background: 'hsl(var(--ink))' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'hsla(0,0%,100%,0.35)' }}>
              Why Vixora
            </span>
            <div className="h-px flex-1" style={{ background: 'hsla(0,0%,100%,0.08)' }} />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 scroll-reveal delay-100">
              <h2
                className="text-display font-serif leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  color: 'hsl(var(--surface))',
                }}
              >
                We sell{' '}
                <span className="font-serif italic font-normal" style={{ color: 'hsl(var(--accent))' }}>
                  expertise,
                </span>{' '}
                not technology.
              </h2>
              <p
                className="mt-6 text-lg leading-relaxed"
                style={{ color: 'hsla(0,0%,100%,0.5)' }}
              >
                Any agency can list the same logos. The difference is the depth of understanding
                behind them — and what that understanding means for your product.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-0">
              {[
                { label: 'Product Engineering Approach', body: 'We think like founders, not contractors. Every technical decision is framed by its business outcome.' },
                { label: 'Scalable Architecture First', body: 'We design systems that handle 10× your current load before you need to worry about it.' },
                { label: 'Faster Time to Market', body: 'Senior engineers with production experience move faster because they make fewer wrong turns.' },
                { label: 'Long-Term Technical Partnership', body: 'We document, train, and hand over codebases that your team can own and evolve independently.' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`group flex flex-col lg:flex-row gap-4 lg:gap-8 py-7 scroll-reveal delay-${(i + 1) * 100}`}
                  style={{ borderTop: '1px solid hsla(0,0%,100%,0.07)' }}
                >
                  <span className="font-mono text-[10px] tracking-widest shrink-0" style={{ color: 'hsla(0,0%,100%,0.3)' }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3
                      className="font-semibold text-sm mb-2 transition-colors duration-300 group-hover:text-accent"
                      style={{ color: 'hsl(var(--surface))' }}
                    >
                      {item.label}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsla(0,0%,100%,0.45)' }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid hsla(0,0%,100%,0.07)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ENGAGEMENT MODELS
      ═══════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">Work With Us</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
            <h2
              className="text-display scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Choose how we{' '}
              <span className="text-serif-accent">engage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                model: 'Dedicated Team',
                desc: 'A fully embedded product engineering team aligned to your roadmap and delivery cadence.',
                detail: 'Best for ongoing product development',
              },
              {
                model: 'Project-Based',
                desc: 'Fixed scope, fixed timeline, fixed price. We scope it carefully and ship it on time.',
                detail: 'Best for defined projects with clear outcomes',
              },
              {
                model: 'Monthly Retainer',
                desc: 'Continuous improvement and support bandwidth without the overhead of hiring.',
                detail: 'Best for post-launch iteration and maintenance',
              },
              {
                model: 'Staff Augmentation',
                desc: 'Senior engineers embedded directly into your existing team and processes.',
                detail: 'Best for filling specific technical gaps',
              },
            ].map((m, i) => (
              <div
                key={m.model}
                className={`rounded-2xl p-7 flex flex-col gap-4 cursor-default group transition-all duration-300 scroll-reveal delay-${(i + 1) * 100}`}
                style={{
                  background: 'hsl(var(--surface-warm))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--accent))' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="font-semibold text-base transition-colors duration-300 group-hover:text-accent"
                  style={{ color: 'hsl(var(--ink))' }}
                >
                  {m.model}
                </h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'hsl(var(--ink-light))' }}>
                  {m.desc}
                </p>
                <span className="text-caption text-[10px]">{m.detail}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center scroll-reveal delay-200">
            <button
              id="tech-engagement-cta"
              className="btn-primary flex items-center justify-center gap-2"
              onClick={() => setIsModalOpen(true)}
            >
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </button>
            <Link href="/about" className="btn-outline flex items-center justify-center gap-2" id="tech-learn-about">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FAQ
      ═══════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">Common Questions</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 scroll-reveal delay-100">
              <h2
                className="text-display"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                Questions we <span className="text-serif-accent">get asked</span>
              </h2>
              <p className="text-body mt-4">
                Technical decisions are nuanced. Here is how we typically answer the most common ones.
              </p>
              <button
                className="btn-primary flex items-center gap-2 mt-8"
                onClick={() => setIsModalOpen(true)}
                id="tech-faq-cta"
              >
                Ask Us Anything <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-8 space-y-0">
              {[
                {
                  q: 'Do you recommend a specific stack for every client?',
                  a: 'No. We start with your constraints — team, timeline, scale, budget — and choose the stack that fits. We are opinionated about quality, not about imposing our preferences.',
                },
                {
                  q: 'Can you work with an existing codebase?',
                  a: 'Absolutely. Many of our engagements are greenfield-to-legacy migrations, performance refactors, or feature additions on existing systems. We document everything we touch.',
                },
                {
                  q: 'What happens after the project ships?',
                  a: 'We offer retainer arrangements for ongoing iteration, and we always ensure a clean handover — documentation, test coverage, and a knowledge transfer session with your team.',
                },
                {
                  q: 'How do you handle scaling requirements that emerge post-launch?',
                  a: 'We design for headroom from day one. When load patterns change, we run architecture reviews and performance profiling before any reactive rewrite decisions.',
                },
                {
                  q: 'Do you work across time zones?',
                  a: 'Yes. Our team spans multiple continents and we run structured async communication workflows. Every client gets dedicated availability windows and a clear escalation path.',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className={`py-7 scroll-reveal delay-${Math.min((i + 1) * 100, 400)}`}
                  style={{ borderTop: '1px solid hsl(var(--border))' }}
                >
                  <h3
                    className="font-semibold text-sm mb-3"
                    style={{ color: 'hsl(var(--ink))' }}
                  >
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
