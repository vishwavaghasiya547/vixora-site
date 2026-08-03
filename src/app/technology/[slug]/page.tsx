'use client';

import { useState, useEffect, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft, ArrowRight, ArrowUpRight,
  Atom, Triangle, Hexagon, Terminal, FileCode2,
  ShoppingCart, Database, Cloud, Box, Brain,
  Code, Wind, Layers, Globe, Lock, Mic2,
  BarChart2, GitBranch, Cpu, MessageSquare,
  Search, Server, Bot, MapPin, Star, Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import StartProjectModal from '@/components/StartProjectModal';

/* ─── Full tech catalogue ────────────────────────── */
const ALL_TECHS: Record<string, {
  name: string; cat: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  tagline: string; depth: string; since: string; projects: number;
  headline: string; subline: string;
  whyWeUse: { title: string; body: string }[];
  useCases: string[];
  expertise: { title: string; body: string }[];
  relatedProjects: { title: string; category: string; href: string; icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; outcome: string; stack: string[]; accentVar: string }[];
  relatedTechs: string[];
}> = {
  react: {
    name: 'React', cat: 'Frontend', icon: Atom,
    tagline: 'The foundation of every interface we ship.',
    depth: 'Expert', since: '2019', projects: 60,
    headline: 'React — The UI Layer Behind Every Product We Ship',
    subline: 'We have been building production React applications since the early adoption days. Not just applications — systems. Component architectures that scale as teams grow.',
    whyWeUse: [
      { title: 'Component Reuse at Scale', body: 'A well-designed React component library reduces development time by 40–60% as a product grows. We build design systems, not one-off UIs.' },
      { title: 'Ecosystem Depth', body: 'React\'s ecosystem — Tanstack Query, Zustand, Radix, Framer Motion — gives us the right tool for every UI challenge without reinventing solutions.' },
      { title: 'Team Scalability', body: 'React\'s component model is the lingua franca for frontend engineers globally. Teams can onboard faster, and handovers are clean.' },
    ],
    useCases: ['SaaS Product Dashboards', 'AI-Powered Web Applications', 'Admin & Internal Tools', 'Interactive Data Visualization', 'Multi-step Onboarding Flows', 'Real-time Collaborative Interfaces'],
    expertise: [
      { title: 'Performance Optimization', body: 'Code splitting, lazy loading, memoization strategies, and bundle analysis to keep initial loads under 1s.' },
      { title: 'State Architecture', body: 'We match state management patterns to application complexity — from useState to Zustand to server state with Tanstack Query.' },
      { title: 'Accessibility', body: 'WCAG 2.1 AA compliance built into component libraries, not patched in at the end of the project.' },
    ],
    relatedProjects: [
      { title: 'AssistPro AI', category: 'AI Productivity Platform', href: 'https://assistpro.ai', icon: Bot, outcome: 'React dashboard for AI task management', stack: ['React', 'Next.js', 'Node.js'], accentVar: '--accent' },
      { title: 'SEOTalos', category: 'SEO Analytics SaaS', href: 'https://seotalos.com', icon: BarChart2, outcome: 'Complex multi-property analytics dashboard', stack: ['React', 'Next.js', 'PostgreSQL'], accentVar: '--sage' },
    ],
    relatedTechs: ['nextjs', 'typescript', 'tailwindcss'],
  },
  nextjs: {
    name: 'Next.js', cat: 'Frontend', icon: Triangle,
    tagline: 'Full-stack React for production-grade web apps.',
    depth: 'Expert', since: '2020', projects: 45,
    headline: 'Next.js — Full-Stack React That Ships to Production',
    subline: 'Next.js collapsed the distinction between frontend and backend for us. We use it for SSR, SSG, ISR, server components, and API routes — often within the same application.',
    whyWeUse: [
      { title: 'SEO Without Compromise', body: 'Server-side rendering gives SaaS products and marketplaces the SEO foundation they need without sacrificing interactivity.' },
      { title: 'Unified Deployment', body: 'One codebase, one deployment target. Next.js on Vercel or self-hosted reduces infrastructure complexity significantly.' },
      { title: 'Server Components', body: 'The React Server Components model lets us push data fetching to the server, reducing client JavaScript and improving performance.' },
    ],
    useCases: ['SaaS Platforms', 'Headless E-Commerce Frontends', 'Marketing Sites with CMS', 'Authenticated Dashboards', 'API-first Applications', 'Marketplace Frontends'],
    expertise: [
      { title: 'App Router Mastery', body: 'Deep experience with the Next.js 13+ App Router — layouts, loading states, streaming, and parallel routes.' },
      { title: 'Caching Strategy', body: 'We configure Next.js caching at every level — static pages, dynamic routes, and incremental revalidation — to hit sub-100ms response times.' },
      { title: 'Edge Deployment', body: 'We deploy Next.js to the edge where latency matters — Vercel Edge Functions, Cloudflare Workers, and custom edge setups.' },
    ],
    relatedProjects: [
      { title: 'PickleballCourts', category: 'Marketplace & Community', href: 'https://livepickleballcourts.com', icon: MapPin, outcome: 'SSR + ISR marketplace with geolocation', stack: ['Next.js', 'MongoDB', 'AWS'], accentVar: '--accent' },
      { title: 'SEOTalos', category: 'SEO Analytics SaaS', href: 'https://seotalos.com', icon: BarChart2, outcome: 'SaaS dashboard with complex data fetching', stack: ['Next.js', 'PostgreSQL', 'Redis'], accentVar: '--sage' },
    ],
    relatedTechs: ['react', 'typescript', 'nodejs'],
  },
  typescript: {
    name: 'TypeScript', cat: 'Language', icon: FileCode2,
    tagline: 'Type safety at every layer of our stack.',
    depth: 'Expert', since: '2020', projects: 55,
    headline: 'TypeScript — Every Codebase We Ship Is Typed',
    subline: 'TypeScript is not optional for us. It is the contract between every function, every API endpoint, and every component. It is what makes handovers clean and refactors safe.',
    whyWeUse: [
      { title: 'Fewer Production Bugs', body: 'Typed codebases catch entire classes of runtime errors at compile time. The investment pays back within the first sprint.' },
      { title: 'Faster Onboarding', body: 'Types are documentation that never goes stale. New engineers understand intent faster when function signatures are explicit.' },
      { title: 'Safer Refactoring', body: 'Large-scale refactors become tractable when the compiler tells you exactly what breaks — not your users.' },
    ],
    useCases: ['Shared Frontend + Backend Type Contracts', 'API Client Generation', 'Complex Domain Modelling', 'Monorepo Development', 'Library and SDK Development'],
    expertise: [
      { title: 'Strict Mode', body: 'We run TypeScript in strict mode across all projects. No implicit any, no unchecked nulls.' },
      { title: 'Type Utilities', body: 'Deep use of mapped types, conditional types, and template literal types to model complex business domains accurately.' },
      { title: 'End-to-End Type Safety', body: 'tRPC, Zod, and schema-driven API design to carry type safety from database to UI without duplication.' },
    ],
    relatedProjects: [
      { title: 'AssistPro AI', category: 'AI Productivity Platform', href: 'https://assistpro.ai', icon: Bot, outcome: 'Fully typed multi-channel AI platform', stack: ['TypeScript', 'Next.js', 'Node.js'], accentVar: '--accent' },
      { title: 'ReviewRocket', category: 'Reputation Management', href: 'https://reviewroket.com', icon: Star, outcome: 'Type-safe automation and analytics SaaS', stack: ['TypeScript', 'Node.js', 'MongoDB'], accentVar: '--sage' },
    ],
    relatedTechs: ['react', 'nextjs', 'nodejs'],
  },
  nodejs: {
    name: 'Node.js', cat: 'Backend', icon: Hexagon,
    tagline: 'Event-driven APIs and real-time backends.',
    depth: 'Expert', since: '2019', projects: 70,
    headline: 'Node.js — The Backend Powering Our Most Demanding APIs',
    subline: 'We have run Node.js under serious production load — millions of API requests, real-time websocket connections, background job queues, and webhook processors.',
    whyWeUse: [
      { title: 'Shared Language', body: 'TypeScript across both frontend and backend eliminates context switching and enables shared type contracts.' },
      { title: 'Event-Driven Performance', body: 'Node\'s non-blocking I/O model is ideal for API gateways, webhook processors, and real-time systems.' },
      { title: 'Ecosystem', body: 'npm gives us access to the richest library ecosystem in software — from ORM to auth to queue management.' },
    ],
    useCases: ['REST & GraphQL APIs', 'Webhook Processors', 'Background Job Queues', 'Real-Time WebSocket Servers', 'API Gateways', 'Serverless Functions'],
    expertise: [
      { title: 'Performance Tuning', body: 'Event loop profiling, cluster mode, worker threads for CPU-bound work, and connection pool optimization.' },
      { title: 'Queue Architecture', body: 'BullMQ for reliable job processing, retry strategies, dead letter queues, and job priority management.' },
      { title: 'Security', body: 'Helmet, rate limiting, CORS configuration, input validation with Zod, and secure secret management.' },
    ],
    relatedProjects: [
      { title: 'ReviewRocket', category: 'Reputation Management', href: 'https://reviewroket.com', icon: Star, outcome: 'High-volume webhook processing and automation', stack: ['Node.js', 'MongoDB', 'Redis'], accentVar: '--accent' },
      { title: 'AssistPro AI', category: 'AI Productivity Platform', href: 'https://assistpro.ai', icon: Bot, outcome: 'Real-time AI response delivery via messaging APIs', stack: ['Node.js', 'OpenAI', 'PostgreSQL'], accentVar: '--sage' },
    ],
    relatedTechs: ['typescript', 'postgresql', 'redis'],
  },
  python: {
    name: 'Python', cat: 'Backend', icon: Terminal,
    tagline: 'Data pipelines, automation, and AI workloads.',
    depth: 'Expert', since: '2019', projects: 35,
    headline: 'Python — Our Language of Choice for AI and Data Engineering',
    subline: 'Python is where AI lives. We use it for ML model training, inference pipelines, data processing, and automation scripts that keep production systems running.',
    whyWeUse: [
      { title: 'AI/ML Ecosystem', body: 'TensorFlow, PyTorch, LangChain, Hugging Face — the entire AI ecosystem is Python-first. We are fluent in it.' },
      { title: 'Data Processing', body: 'Pandas, NumPy, and Polars for the data manipulation layer that underpins analytics products.' },
      { title: 'Automation', body: 'From web scraping to cron jobs to ETL pipelines, Python is the fastest path to reliable automation.' },
    ],
    useCases: ['AI & LLM Integration', 'Data Processing Pipelines', 'Machine Learning APIs', 'Analytics Backends', 'Workflow Automation', 'Web Scraping & ETL'],
    expertise: [
      { title: 'Async Python', body: 'asyncio and async frameworks for high-concurrency AI inference APIs that handle burst traffic without queuing.' },
      { title: 'Production ML', body: 'Model serving, versioning, monitoring, and rollback strategies for ML systems in production.' },
      { title: 'Type-Safe Python', body: 'Pydantic for data validation, mypy for type checking — we bring TypeScript-grade safety to Python codebases.' },
    ],
    relatedProjects: [
      { title: 'UserCall', category: 'Voice AI Research Platform', href: 'https://www.usercall.co', icon: Mic2, outcome: 'Voice processing and NLP pipeline', stack: ['Python', 'FastAPI', 'Whisper'], accentVar: '--accent' },
      { title: 'SEOTalos', category: 'SEO Analytics SaaS', href: 'https://seotalos.com', icon: BarChart2, outcome: 'Data ingestion and analytics processing', stack: ['Python', 'PostgreSQL', 'Redis'], accentVar: '--sage' },
    ],
    relatedTechs: ['fastapi', 'openai', 'postgresql'],
  },
  postgresql: {
    name: 'PostgreSQL', cat: 'Database', icon: Database,
    tagline: 'The relational backbone of our SaaS platforms.',
    depth: 'Expert', since: '2019', projects: 50,
    headline: 'PostgreSQL — The Database We Reach for First',
    subline: 'For any application with complex relationships, reporting, or transactional requirements, PostgreSQL is our default. We know it deeply — from index strategies to replication.',
    whyWeUse: [
      { title: 'Relational Integrity', body: 'Foreign keys, transactions, and constraints enforced at the database level — not in application code where they can be bypassed.' },
      { title: 'Analytical Power', body: 'Window functions, CTEs, and JSONB give us the analytics capabilities of a data warehouse without the operational overhead.' },
      { title: 'Extensibility', body: 'pgvector for embeddings, PostGIS for geolocation, pg_cron for scheduled jobs — PostgreSQL grows with product requirements.' },
    ],
    useCases: ['Multi-Tenant SaaS Platforms', 'Financial Systems', 'Analytics Databases', 'Geolocation Applications', 'Vector Search with pgvector', 'Reporting Systems'],
    expertise: [
      { title: 'Index Strategy', body: 'Partial indexes, GIN indexes for JSONB, covering indexes — we profile query plans and tune accordingly.' },
      { title: 'Multi-Tenant Patterns', body: 'Row-level security, schema-per-tenant, and hybrid approaches designed around your scale and security requirements.' },
      { title: 'Replication & HA', body: 'Streaming replication, read replicas, and failover configuration for databases that cannot go down.' },
    ],
    relatedProjects: [
      { title: 'SEOTalos', category: 'SEO Analytics SaaS', href: 'https://seotalos.com', icon: BarChart2, outcome: 'Multi-property analytics with complex reporting', stack: ['PostgreSQL', 'Redis', 'Python'], accentVar: '--accent' },
      { title: 'AssistPro AI', category: 'AI Productivity Platform', href: 'https://assistpro.ai', icon: Bot, outcome: 'User data and task management storage', stack: ['PostgreSQL', 'Node.js', 'Next.js'], accentVar: '--sage' },
    ],
    relatedTechs: ['redis', 'nodejs', 'python'],
  },
  aws: {
    name: 'AWS', cat: 'Cloud', icon: Cloud,
    tagline: 'Multi-region deployments and managed services.',
    depth: 'Expert', since: '2020', projects: 40,
    headline: 'AWS — The Infrastructure Layer Behind Our Most Critical Systems',
    subline: 'We have run production workloads on AWS across EC2, ECS, Lambda, RDS, S3, CloudFront, and more. We know how to architect for reliability, cost efficiency, and scale.',
    whyWeUse: [
      { title: 'Managed Services Depth', body: 'RDS managed databases, ElastiCache, SQS, and Lambda reduce operational burden while maintaining enterprise-grade reliability.' },
      { title: 'Global Reach', body: 'Multi-region deployments with CloudFront CDN give users sub-50ms response times anywhere on the planet.' },
      { title: 'Security Compliance', body: 'IAM, VPC, WAF, and Shield give us a security posture that satisfies enterprise procurement requirements.' },
    ],
    useCases: ['Production API Hosting', 'Managed Database Services', 'Object Storage and CDN', 'Serverless Workloads', 'Container Orchestration', 'Multi-Region Deployments'],
    expertise: [
      { title: 'Infrastructure as Code', body: 'Terraform and CDK for reproducible, auditable infrastructure that can be promoted across environments safely.' },
      { title: 'Cost Architecture', body: 'Reserved instances, Savings Plans, and workload right-sizing to ensure cloud costs scale proportionally with revenue.' },
      { title: 'Observability', body: 'CloudWatch, X-Ray, and third-party APM integration for comprehensive visibility into production system behaviour.' },
    ],
    relatedProjects: [
      { title: 'PickleballCourts', category: 'Marketplace & Community', href: 'https://livepickleballcourts.com', icon: MapPin, outcome: 'Multi-region marketplace infrastructure', stack: ['AWS', 'Docker', 'MongoDB'], accentVar: '--accent' },
      { title: 'UserCall', category: 'Voice AI Research Platform', href: 'https://www.usercall.co', icon: Mic2, outcome: 'Audio processing and storage infrastructure', stack: ['AWS', 'Python', 'FastAPI'], accentVar: '--sage' },
    ],
    relatedTechs: ['docker', 'nodejs', 'postgresql'],
  },
  openai: {
    name: 'OpenAI / GPT', cat: 'AI / ML', icon: Brain,
    tagline: 'LLM integration, agents, and RAG pipelines.',
    depth: 'Expert', since: '2022', projects: 22,
    headline: 'OpenAI — Building AI Products That Actually Work in Production',
    subline: 'GPT integration is not a demo. We have built production AI systems with structured outputs, token cost management, fallback strategies, and evaluation pipelines.',
    whyWeUse: [
      { title: 'Capability Breadth', body: 'Chat, function calling, embeddings, fine-tuning, vision — OpenAI\'s APIs cover the full spectrum of LLM use cases we encounter.' },
      { title: 'Production Reliability', body: 'Uptime, latency guarantees, and structured output support that lets us build reliable AI features, not experimental prototypes.' },
      { title: 'Cost Efficiency', body: 'Model selection strategy — GPT-4o for complex reasoning, GPT-4o-mini for high-volume tasks — keeps costs proportional to value.' },
    ],
    useCases: ['AI Chatbots and Assistants', 'Document Intelligence', 'Automated Content Generation', 'Sentiment Analysis', 'AI-Powered Search', 'Structured Data Extraction'],
    expertise: [
      { title: 'Prompt Engineering', body: 'System prompt design, few-shot examples, and output schema enforcement for consistent, reliable AI responses.' },
      { title: 'RAG Pipelines', body: 'Vector embeddings, semantic search, and retrieval-augmented generation for grounding LLMs in proprietary data.' },
      { title: 'Cost & Latency Management', body: 'Streaming responses, token budgeting, model routing, and caching to build AI features that are fast and economical.' },
    ],
    relatedProjects: [
      { title: 'AssistPro AI', category: 'AI Productivity Platform', href: 'https://assistpro.ai', icon: Bot, outcome: 'Core AI reasoning engine for task and document management', stack: ['OpenAI / GPT', 'Node.js', 'PostgreSQL'], accentVar: '--accent' },
      { title: 'ReviewRocket', category: 'Reputation Management', href: 'https://reviewroket.com', icon: Star, outcome: 'AI-generated review response system', stack: ['OpenAI / GPT', 'Node.js', 'MongoDB'], accentVar: '--sage' },
    ],
    relatedTechs: ['langchain', 'python', 'fastapi'],
  },
};

/* Fallback for unrecognised slugs */
function getTech(slug: string) {
  return ALL_TECHS[slug] ?? null;
}

export default function TechDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const tech = getTech(slug);
  if (!tech) notFound();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY]         = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const Icon = tech.icon;

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
      <Navbar />

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative pt-36 lg:pt-52 pb-24 overflow-hidden" style={{ background: 'hsl(var(--bg))' }}>
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
          <Link
            href="/technology"
            className="inline-flex items-center gap-2 mb-14 group"
            style={{ color: 'hsl(var(--ink-muted))' }}
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="font-mono text-[11px] uppercase tracking-widest group-hover:text-ink transition-colors">
              All Technologies
            </span>
          </Link>

          {/* Category + depth */}
          <div className="flex flex-wrap items-center gap-3 mb-8 scroll-reveal">
            <span className="text-caption">{tech.cat}</span>
            <div className="h-3.5 w-px" style={{ background: 'hsl(var(--border-strong))' }} />
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
            <span className="flex items-center gap-1.5">
              <span className="status-live" />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--sage))' }}>
                Since {tech.since}
              </span>
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              {/* Tech icon + name */}
              <div className="flex items-center gap-5 mb-8 reveal reveal-d1">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: 'hsl(var(--surface-warm))',
                    border: '1px solid hsl(var(--border))',
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: 'hsl(var(--ink))' }} />
                </div>
                <div>
                  <h1
                    className="text-display"
                    style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.08 }}
                  >
                    {tech.name}
                  </h1>
                </div>
              </div>

              <p
                className="text-body text-xl leading-relaxed max-w-2xl reveal reveal-d2"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}
              >
                {tech.subline}
              </p>
            </div>

            <div className="lg:col-span-4 reveal reveal-d3 space-y-4">
              {/* Quick meta */}
              <div className="rounded-2xl p-6 space-y-4" style={{ background: 'hsl(var(--surface))', border: '1px solid hsl(var(--border))' }}>
                {[
                  { label: 'Experience', val: `${new Date().getFullYear() - parseInt(tech.since)}+ years` },
                  { label: 'Projects', val: `${tech.projects}+ delivered` },
                  { label: 'Depth Level', val: tech.depth },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-caption">{m.label}</span>
                    <span className="font-semibold text-sm" style={{ color: 'hsl(var(--ink))' }}>{m.val}</span>
                  </div>
                ))}
              </div>
              <button
                id={`tech-detail-cta-${slug}`}
                className="btn-primary w-full flex items-center justify-center gap-2"
                onClick={() => setIsModalOpen(true)}
              >
                Discuss a {tech.name} Project <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY WE USE THIS TECHNOLOGY
      ═══════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-16 scroll-reveal">
            <span className="text-caption">Why We Use It</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="space-y-0">
            {tech.whyWeUse.map((item, i) => (
              <div
                key={item.title}
                className={`group flex flex-col lg:flex-row gap-4 lg:gap-10 py-8 scroll-reveal delay-${(i + 1) * 100}`}
                style={{ borderTop: '1px solid hsl(var(--border))' }}
              >
                <span className="font-mono text-xs tracking-widest shrink-0 w-6 mt-1" style={{ color: 'hsl(var(--accent))' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="lg:w-64 shrink-0">
                  <h3 className="text-subhead font-semibold group-hover:text-accent transition-colors duration-300" style={{ color: 'hsl(var(--ink))' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm flex-1 leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                  {item.body}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          USE CASES
      ═══════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">Where We Apply It</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-12">
            <h2 className="text-display scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Real-world{' '}
              <span className="text-serif-accent">use cases</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tech.useCases.map((uc, i) => (
              <div
                key={uc}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl scroll-reveal delay-${Math.min((i + 1) * 100, 400)}`}
                style={{
                  background: 'hsl(var(--surface))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: 'hsl(var(--accent))' }}
                />
                <span className="text-sm font-medium" style={{ color: 'hsl(var(--ink))' }}>{uc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERTISE DEPTH
      ═══════════════════════════════════════ */}
      <section className="section-pad grain relative overflow-hidden" style={{ background: 'hsl(var(--ink))' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: 'hsla(0,0%,100%,0.35)' }}>
              Our Expertise
            </span>
            <div className="h-px flex-1" style={{ background: 'hsla(0,0%,100%,0.08)' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
            <h2
              className="text-display font-serif scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: 'hsl(var(--surface))' }}
            >
              Beyond the{' '}
              <span className="font-serif italic font-normal" style={{ color: 'hsl(var(--accent))' }}>
                documentation
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tech.expertise.map((e, i) => (
              <div
                key={e.title}
                className={`rounded-2xl p-7 scroll-reveal delay-${(i + 1) * 100}`}
                style={{
                  background: 'hsla(0,0%,100%,0.04)',
                  border: '1px solid hsla(0,0%,100%,0.08)',
                }}
              >
                <h3
                  className="font-semibold mb-3"
                  style={{ color: 'hsl(var(--surface))' }}
                >
                  {e.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsla(0,0%,100%,0.5)' }}>
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          RELATED PROJECTS
      ═══════════════════════════════════════ */}
      {tech.relatedProjects.length > 0 && (
        <section className="section-pad" style={{ background: 'hsl(var(--surface))' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="flex items-center gap-4 mb-6 scroll-reveal">
              <span className="text-caption">Built With This</span>
              <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            </div>

            <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-12">
              <h2 className="text-display scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
                Projects using{' '}
                <span className="text-serif-accent">{tech.name}</span>
              </h2>
            </div>

            <div className="space-y-0">
              {tech.relatedProjects.map((p, i) => {
                const PIcon = p.icon;
                return (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 py-7 transition-all duration-300 scroll-reveal delay-${(i + 1) * 100}`}
                    style={{ borderTop: '1px solid hsl(var(--border))' }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `hsl(var(${p.accentVar}) / 0.08)`,
                        border: `1px solid hsl(var(${p.accentVar}) / 0.2)`,
                      }}
                    >
                      <PIcon className="w-5 h-5" style={{ color: `hsl(var(${p.accentVar}))` }} />
                    </div>
                    <div className="sm:w-52 shrink-0">
                      <span className="font-semibold text-sm transition-colors duration-300 group-hover:text-accent" style={{ color: 'hsl(var(--ink))' }}>
                        {p.title}
                      </span>
                      <span className="block text-caption mt-0.5">{p.category}</span>
                    </div>
                    <p className="text-sm flex-1 leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                      {p.outcome}
                    </p>
                    <div className="flex flex-wrap gap-1.5 shrink-0">
                      {p.stack.map((s) => <span key={s} className="tag">{s}</span>)}
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0"
                      style={{ color: 'hsl(var(--accent))' }}
                    />
                  </a>
                );
              })}
              <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════
          RELATED TECHNOLOGIES
      ═══════════════════════════════════════ */}
      {tech.relatedTechs.length > 0 && (
        <section className="section-pad" style={{ background: 'hsl(var(--bg-alt))' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="flex items-center gap-4 mb-8 scroll-reveal">
              <span className="text-caption">Often Used Together</span>
              <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            </div>

            <div className="flex flex-wrap gap-3">
              {tech.relatedTechs.map((slug) => {
                const rel = ALL_TECHS[slug];
                if (!rel) return null;
                const RelIcon = rel.icon;
                return (
                  <Link
                    key={slug}
                    href={`/technology/${slug}`}
                    className="group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: 'hsl(var(--surface))',
                      border: '1px solid hsl(var(--border))',
                    }}
                  >
                    <RelIcon className="w-4 h-4" style={{ color: 'hsl(var(--ink-muted))' }} />
                    <span className="text-sm font-medium group-hover:text-accent transition-colors duration-300" style={{ color: 'hsl(var(--ink))' }}>
                      {rel.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: 'hsl(var(--accent))' }} />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
      <Footer />
      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
