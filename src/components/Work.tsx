'use client';

import { useState } from 'react';
import { ArrowRight, ArrowUpRight, Bot, Mic2, MapPin, BarChart2, Star } from 'lucide-react';
import StartProjectModal from './StartProjectModal';

/* ─────────────────────────────────────────────
   Project data — real products, real categories
   ───────────────────────────────────────────── */
const projects = [
  {
    id: '01',
    title: 'AssistPro AI',
    category: 'AI Productivity Platform',
    categoryShort: 'AI Platform',
    href: 'https://assistpro.ai',
    icon: Bot,
    desc: 'An intelligent productivity platform enabling individuals and teams to manage tasks, reminders, documents, and schedules through natural language conversations — accessible via WhatsApp, Telegram, and a web dashboard.',
    highlights: ['Natural Language Processing', 'WhatsApp & Telegram Integration', 'Document Intelligence', 'Automated Scheduling'],
    tags: ['AI / NLP', 'Multi-channel', 'Productivity'],
    accentVar: '--accent',
    featured: true,
  },
  {
    id: '02',
    title: 'UserCall',
    category: 'Voice AI Research Platform',
    categoryShort: 'Voice AI',
    href: 'https://www.usercall.co',
    icon: Mic2,
    desc: 'AI-moderated voice interviews at scale — no manual scheduling or moderation required. Automatic transcription, theme identification, sentiment analysis, and actionable insight generation for product, UX, and marketing teams.',
    highlights: ['AI Voice Moderation', 'Sentiment Analysis', 'Auto Transcription', 'Insight Generation'],
    tags: ['Voice AI', 'Research', 'Analytics'],
    accentVar: '--sage',
    featured: true,
  },
  {
    id: '03',
    title: 'PickleballCourts',
    category: 'Marketplace & Community Platform',
    categoryShort: 'Marketplace',
    href: 'https://livepickleballcourts.com',
    icon: MapPin,
    desc: 'A location-based platform for discovering pickleball courts across the United States, combining court discovery, community engagement, premium content access, and administrative management tools.',
    highlights: ['Geolocation Discovery', 'Community Features', 'Content Monetization', 'Admin Dashboard'],
    tags: ['Marketplace', 'Geo Platform', 'Community'],
    accentVar: '--accent',
    featured: false,
  },
  {
    id: '04',
    title: 'SEOTalos',
    category: 'SEO Analytics Platform',
    categoryShort: 'SEO Analytics',
    href: 'https://seotalos.com',
    icon: BarChart2,
    desc: 'Advanced SEO analytics for agencies managing multiple Google Search Console properties. Deeper keyword insights, SEO A/B testing, AI search visibility tracking, and collaborative tools for organic growth.',
    highlights: ['Multi-property GSC Management', 'SEO A/B Testing', 'AI Visibility Tracking', 'Agency Collaboration'],
    tags: ['Analytics', 'SEO', 'SaaS'],
    accentVar: '--sage',
    featured: false,
  },
  {
    id: '05',
    title: 'ReviewRocket',
    category: 'Reputation Management Platform',
    categoryShort: 'Reputation SaaS',
    href: 'https://reviewroket.com',
    icon: Star,
    desc: 'Automated review collection and reputation management for local businesses. Sends personalised review requests, monitors reviews in real time, generates AI-powered responses, and delivers actionable insights.',
    highlights: ['Automated Review Requests', 'Real-time Monitoring', 'AI Response Generation', 'Reputation Analytics'],
    tags: ['Automation', 'AI', 'Local Business'],
    accentVar: '--accent',
    featured: false,
  },
];

/* ─────────────────────────────────────────────
   Sub-components
   ───────────────────────────────────────────── */

/** Small live-dot + "Live" label */
const LiveBadge = () => (
  <span className="flex items-center gap-1.5">
    <span className="status-live" />
    <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--sage))' }}>Live</span>
  </span>
);

/** Featured card — large editorial spotlight */
const FeaturedCard = ({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`card group block p-7 lg:p-9 cursor-pointer no-underline scroll-reveal delay-${(index + 1) * 100}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`View ${project.title} — opens in new tab`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
            style={{
              background: `hsl(${project.accentVar === '--sage' ? 'var(--sage-soft)' : 'var(--accent-soft)'})`,
              border: `1px solid hsl(${project.accentVar === '--sage' ? 'var(--sage) / 0.2' : 'var(--accent) / 0.2'})`,
            }}
          >
            <Icon
              className="w-5 h-5"
              style={{ color: `hsl(var(${project.accentVar}))` }}
            />
          </div>
          <div>
            <span
              className="tag-accent text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{
                color: `hsl(var(${project.accentVar}))`,
                background: `hsl(var(${project.accentVar === '--sage' ? '--sage-soft' : '--accent-soft'}))`,
                border: `1px solid hsl(var(${project.accentVar}) / 0.25)`,
              }}
            >
              {project.categoryShort}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LiveBadge />
          <ArrowUpRight
            className="w-4 h-4 transition-all duration-300"
            style={{
              color: `hsl(var(${project.accentVar}))`,
              opacity: hovered ? 1 : 0.4,
              transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
            }}
          />
        </div>
      </div>

      {/* Number + Title */}
      <div className="mb-4">
        <span
          className="font-mono text-xs tracking-widest block mb-2"
          style={{ color: 'hsl(var(--ink-muted))' }}
        >
          {project.id}
        </span>
        <h3
          className="text-heading text-xl lg:text-2xl transition-colors duration-300"
          style={{ color: hovered ? `hsl(var(${project.accentVar}))` : 'hsl(var(--ink))' }}
        >
          {project.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-body text-sm mb-6 leading-relaxed">{project.desc}</p>

      {/* Highlights */}
      <ul
        className="space-y-2 mb-7 pb-7"
        style={{ borderBottom: '1px solid hsl(var(--border))' }}
      >
        {project.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2.5">
            <span
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: `hsl(var(${project.accentVar}))` }}
            />
            <span className="text-xs" style={{ color: 'hsl(var(--ink-light))' }}>{h}</span>
          </li>
        ))}
      </ul>

      {/* Tags + CTA */}
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        <span
          className="font-mono text-xs transition-all duration-300"
          style={{
            color: `hsl(var(${project.accentVar}))`,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
          }}
        >
          Visit →
        </span>
      </div>
    </a>
  );
};

/** Compact row — numbered editorial list */
const ProjectRow = ({
  project,
  index,
}: {
  project: typeof projects[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 py-7 cursor-pointer no-underline transition-all duration-300 scroll-reveal delay-${Math.min((index + 1) * 100, 400)}`}
      style={{ borderTop: '1px solid hsl(var(--border))' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`View ${project.title} — opens in new tab`}
    >
      {/* Index */}
      <span
        className="font-mono text-xs tracking-widest shrink-0 w-6"
        style={{ color: `hsl(var(${project.accentVar}))` }}
      >
        {project.id}
      </span>

      {/* Icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300"
        style={{
          background: hovered
            ? `hsl(var(${project.accentVar === '--sage' ? '--sage-soft' : '--accent-soft'}))`
            : 'hsl(var(--surface-warm))',
          border: '1px solid hsl(var(--border))',
        }}
      >
        <Icon
          className="w-4 h-4 transition-colors duration-300"
          style={{ color: hovered ? `hsl(var(${project.accentVar}))` : 'hsl(var(--ink-muted))' }}
        />
      </div>

      {/* Title + Category */}
      <div className="lg:w-52 shrink-0">
        <h3
          className="text-subhead text-sm font-semibold transition-colors duration-300"
          style={{ color: hovered ? `hsl(var(${project.accentVar}))` : 'hsl(var(--ink))' }}
        >
          {project.title}
        </h3>
        <span className="text-caption">{project.categoryShort}</span>
      </div>

      {/* Description */}
      <p className="text-sm flex-1 leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
        {project.desc.length > 140 ? `${project.desc.slice(0, 140)}…` : project.desc}
      </p>

      {/* Tags */}
      <div className="hidden lg:flex flex-wrap gap-1.5 shrink-0">
        {project.tags.slice(0, 2).map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* Arrow */}
      <ArrowUpRight
        className="w-4 h-4 shrink-0 transition-all duration-300"
        style={{
          color: `hsl(var(${project.accentVar}))`,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
        }}
      />
    </a>
  );
};

/* ─────────────────────────────────────────────
   Main section
   ───────────────────────────────────────────── */
const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <section
        id="work"
        className="section-pad relative"
        style={{ background: 'hsl(var(--surface))' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">Featured Projects</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--ink-muted))' }}>
              {projects.length} Products
            </span>
          </div>

          {/* Section headline */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-16">
            <h2
              className="text-display scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Real products,{' '}
              <span className="text-serif-accent">real impact</span>
            </h2>
            <div className="flex items-end scroll-reveal delay-200">
              <p className="text-body max-w-lg">
                A selection of AI platforms, SaaS products, automation systems, analytics tools,
                and business solutions successfully delivered across multiple industries.
              </p>
            </div>
          </div>

          {/* Featured cards — 2-column editorial */}
          <div className="grid lg:grid-cols-2 gap-5 mb-8">
            {featured.map((p, i) => (
              <FeaturedCard key={p.id} project={p} index={i} />
            ))}
          </div>

          {/* Remaining projects — compact numbered rows */}
          <div className="mb-16">
            {others.map((p, i) => (
              <ProjectRow key={p.id} project={p} index={i} />
            ))}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 scroll-reveal delay-200">
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: 'hsl(var(--ink))' }}>
                Ready to build your product?
              </p>
              <p className="text-caption">
                Let&apos;s turn your vision into a market-ready platform.
              </p>
            </div>
            <button
              className="btn-primary flex items-center gap-2 shrink-0"
              onClick={() => setIsModalOpen(true)}
              id="work-start-project-btn"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Work;
