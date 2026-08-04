'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Lightbulb,
  Target,
  Users,
  Globe,
  Zap,
  Heart,
  Shield,
  TrendingUp,
  Star,
  CheckCircle,
  Brain,
  Code,
  Palette,
  Terminal,
  GitBranch,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import StartProjectModal from '@/components/StartProjectModal';
import JourneyTimeline from '@/features/about/components/JourneyTimeline';

/* ─── Data (preserved from original) ──────────────── */

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Retention' },
  { value: '5+',  label: 'Years of Excellence' },
  { value: '40+', label: 'Countries Served' },
  { value: '$200M+', label: 'Client Revenue Generated' },
];

const values = [
  {
    num: '01',
    title: 'Innovation First',
    description:
      'We push the boundaries of what is possible. Cutting-edge technology and creative problem-solving are the backbone of everything we build.',
    icon: Lightbulb,
  },
  {
    num: '02',
    title: 'Quality Excellence',
    description:
      'Every pixel, every line of code is crafted with precision. We refuse to ship anything we would not be proud to put our name on.',
    icon: Target,
  },
  {
    num: '03',
    title: 'Client Success',
    description:
      'Your success is our KPI. We go beyond deliverables and become embedded partners in your growth journey.',
    icon: Users,
  },
  {
    num: '04',
    title: 'Radical Transparency',
    description:
      'No surprises. We communicate openly about timelines, challenges, and trade-offs so you are always in the driver seat.',
    icon: Shield,
  },
  {
    num: '05',
    title: 'Continuous Growth',
    description:
      'We invest heavily in learning and staying ahead of the curve so our clients always get solutions built for tomorrow.',
    icon: TrendingUp,
  },
  {
    num: '06',
    title: 'Speed with Substance',
    description:
      'We move fast without breaking things. Iterative delivery with an unrelenting focus on the fundamentals.',
    icon: Zap,
  },
];

const team = [
  {
    name: 'Aarav Shah',
    role: 'CEO & Co-Founder',
    description: 'Visionary leader with 10+ years scaling digital products across fintech and SaaS.',
    initials: 'AS',
  },
  {
    name: 'Priya Mehta',
    role: 'CTO & Co-Founder',
    description: 'Full-stack architect obsessed with systems design, AI, and developer experience.',
    initials: 'PM',
  },
  {
    name: 'Lucas Oliveira',
    role: 'Head of Design',
    description: 'Former Figma design lead. Crafts experiences that feel intuitive and look stunning.',
    initials: 'LO',
  },
  {
    name: 'Sara Kim',
    role: 'Head of Engineering',
    description: 'Systems thinker specialising in scalable backend infrastructure and DevOps.',
    initials: 'SK',
  },
  {
    name: 'James Okonkwo',
    role: 'AI & ML Lead',
    description: 'PhD in Machine Learning with a knack for turning research into production-ready products.',
    initials: 'JO',
  },
  {
    name: 'Ananya Patel',
    role: 'Client Success Director',
    description: 'Ensures every client relationship exceeds expectations — from kick-off to delivery and beyond.',
    initials: 'AP',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'Studio Founded',
    description:
      'Vixora started as a four-person studio in India with one clear goal: build digital products that drive real business outcomes.',
    metric: '4 Founders',
    icon: Rocket,
  },
  {
    year: '2020',
    title: 'AI & Data Focus',
    description:
      'Surpassed 20+ active clients and doubled down on AI-powered software solutions as market demand surged.',
    metric: '20+ Clients',
    icon: Brain,
  },
  {
    year: '2021',
    title: 'SaaS Practice Launch',
    description:
      'Expanded our core team with senior engineers and design leads. Launched our dedicated SaaS Platform Architecture unit.',
    metric: '15 Specialists',
    icon: Users,
  },
  {
    year: '2022',
    title: '$50M Client Revenue Impact',
    description:
      'Products built by Vixora collectively crossed $50M+ in annual revenue generated for our client partners.',
    metric: '$50M+ Revenue',
    icon: TrendingUp,
  },
  {
    year: '2023',
    title: 'Global Delivery Reach',
    description:
      'Scaled engineering infrastructure from India to support fast-growing startup and enterprise clients across 40+ countries.',
    metric: '40+ Countries',
    icon: Globe,
  },
  {
    year: '2024',
    title: 'Vixora 2.0 (AI-First)',
    description:
      'Launched our Next-Gen AI-first engineering service model and expanded our multidisciplinary team to 50+ members.',
    metric: '50+ Engineers',
    icon: Sparkles,
  },
];

const pillars = [
  {
    label: 'Engineering depth',
    body: 'We hire senior engineers who have shipped at scale — not generalists who skim the surface.',
  },
  {
    label: 'Product thinking',
    body: 'We ask why before we ask how. Every feature has a reason, every decision has a rationale.',
  },
  {
    label: 'Long-term alignment',
    body: 'We structure engagements as partnerships — your roadmap, your KPIs, your success.',
  },
];

/* ─── Page ─────────────────────────────────────────── */

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY]         = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
      <Navbar />

      {/* ═══════════════════════════════════════════════
          HERO — editorial brand statement
      ═══════════════════════════════════════════════ */}
      <section
        className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
        style={{ background: 'hsl(var(--bg))' }}
      >
        {/* Subtle engineering grid — same as Hero.tsx */}
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-8 scroll-reveal">
            <span className="text-caption">Our Story</span>
            <div className="h-px w-16" style={{ background: 'hsl(var(--border))' }} />
            <span className="flex items-center gap-1.5">
              <span className="status-live" />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--sage))' }}>
                Est. 2019
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-display reveal reveal-d1 max-w-4xl"
            style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', lineHeight: 1.05 }}
          >
            We engineer products
            <br />
            that <span className="text-serif-accent">matter.</span>
          </h1>

          {/* Sub-grid: description + quick-stats */}
          <div className="mt-14 grid lg:grid-cols-12 gap-10 reveal reveal-d2">
            <div className="lg:col-span-5">
              <p className="text-body text-lg leading-relaxed">
                Vixora is a product engineering company built by technologists who were tired of
                watching great ideas die in execution. We partner with ambitious founders and
                enterprises to ship AI platforms, SaaS products, and digital experiences that
                change how industries operate.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <button
                  className="btn-primary flex items-center gap-2"
                  onClick={() => setIsModalOpen(true)}
                  id="about-start-project-btn"
                >
                  Start a Project <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/#work"
                  className="btn-outline flex items-center gap-2"
                  id="about-view-work-btn"
                >
                  <GitBranch className="w-4 h-4" /> View Our Work
                </Link>
              </div>
            </div>

            {/* Inline stat strip */}
            <div className="lg:col-span-7 grid grid-cols-2 lg:grid-cols-3">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`py-6 px-6 scroll-reveal delay-${Math.min((i + 1) * 100, 400)}`}
                  style={{
                    borderTop: i >= 2 ? '1px solid hsl(var(--border))' : undefined,
                    borderLeft: i % 2 !== 0 ? '1px solid hsl(var(--border))' : undefined,
                  }}
                >
                  <div
                    className="font-serif font-bold leading-none mb-1"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'hsl(var(--ink))' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-caption">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPANY STORY — editorial prose layout
      ═══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-16 scroll-reveal">
            <span className="text-caption">How We Got Here</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          {/* Pull-quote + body text */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
            <div className="lg:col-span-5 scroll-reveal delay-100">
              <p
                className="text-display font-serif font-semibold leading-tight"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', color: 'hsl(var(--ink))' }}
              >
                &ldquo;Built by engineers who were tired of watching great ideas die in
                poor execution.&rdquo;
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5 scroll-reveal delay-200">
              <p className="text-body leading-relaxed">
                Vixora started in 2019 as a four-person studio with a simple conviction: most software
                agencies optimise for billable hours, not product outcomes. We built Vixora differently
                — embedding ourselves in our clients&apos; problems, shipping iteratively, and measuring
                success by the metrics that matter to the business.
              </p>
              <p className="text-body leading-relaxed">
                Today we are a team of 50+ engineers, designers, and product strategists who have
                collectively shipped AI platforms, multi-sided marketplaces, SaaS analytics tools,
                and automation systems across industries — from productivity software to voice AI
                to reputation management.
              </p>
              <p className="text-body leading-relaxed">
                We do not take on every project. We take on the right ones.
              </p>
            </div>
          </div>

          {/* Journey Section — Modern Interactive Component */}
          <JourneyTimeline />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MISSION & VISION — asymmetric editorial layout
      ═══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-16 scroll-reveal">
            <span className="text-caption">Purpose</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          {/* Mission — wide statement */}
          <div
            className="rounded-2xl p-10 lg:p-16 mb-6 scroll-reveal delay-100"
            style={{ background: 'hsl(var(--ink))' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  color: 'hsla(0,0%,100%,0.5)',
                  border: '1px solid hsla(0,0%,100%,0.12)',
                }}
              >
                Mission
              </span>
            </div>

            <p
              className="font-serif font-semibold leading-tight mb-10"
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                color: 'hsl(var(--surface))',
                maxWidth: '42ch',
              }}
            >
              To empower ambitious businesses with intelligent digital solutions that drive growth,
              create efficiency, and unlock competitive advantage.
            </p>

            <div className="grid sm:grid-cols-3 gap-6" style={{ borderTop: '1px solid hsla(0,0%,100%,0.08)', paddingTop: '2.5rem' }}>
              {['We build for scale', 'We prioritize impact over aesthetics', 'We ship, learn, and iterate'].map(
                (item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-4 h-4 flex-shrink-0 mt-0.5"
                      style={{ color: 'hsl(var(--accent))' }}
                    />
                    <span className="text-sm leading-relaxed" style={{ color: 'hsla(0,0%,100%,0.6)' }}>
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Vision — lighter companion */}
          <div
            className="rounded-2xl p-10 lg:p-14 scroll-reveal delay-200"
            style={{
              background: 'hsl(var(--surface))',
              border: '1px solid hsl(var(--border))',
            }}
          >
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4">
                <span
                  className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-6"
                  style={{
                    color: 'hsl(var(--accent))',
                    background: 'hsl(var(--accent-soft))',
                    border: '1px solid hsl(var(--accent) / 0.2)',
                  }}
                >
                  Vision
                </span>
                <h2
                  className="text-heading"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'hsl(var(--ink))' }}
                >
                  The global benchmark for digital excellence.
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5">
                <p className="text-body leading-relaxed">
                  A studio synonymous with quality, speed, and innovation — one that consistently
                  sets new standards in AI-powered and human-centered technology.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  {[
                    'Be the first call, not the last resort',
                    'Lead the AI product design frontier',
                    'Create lasting partnerships, not transactions',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div
                        className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                        style={{ background: 'hsl(var(--accent))' }}
                      />
                      <span className="text-sm leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          VALUES — numbered editorial rows (matches Services pattern)
      ═══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">What Drives Us</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
            <h2
              className="text-display scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Principles we hold{' '}
              <span className="text-serif-accent">ourselves</span> to
            </h2>
            <div className="flex items-end scroll-reveal delay-200">
              <p className="text-body max-w-lg">
                These aren&apos;t just words on a wall — they are the standards we hold ourselves
                accountable to every single day, in every project and every client relationship.
              </p>
            </div>
          </div>

          <div className="space-y-0">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.num}
                  className={`group py-7 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 cursor-default transition-all duration-300 scroll-reveal delay-${Math.min((i + 1) * 100, 500)}`}
                  style={{ borderTop: '1px solid hsl(var(--border))' }}
                >
                  <span
                    className="font-mono text-xs tracking-widest shrink-0 w-6"
                    style={{ color: 'hsl(var(--accent))' }}
                  >
                    {v.num}
                  </span>

                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-accent-soft"
                    style={{
                      background: 'hsl(var(--surface-warm))',
                      border: '1px solid hsl(var(--border))',
                    }}
                  >
                    <Icon
                      className="w-4 h-4 transition-colors duration-300"
                      style={{ color: 'hsl(var(--ink-muted))' }}
                    />
                  </div>

                  <h3
                    className="text-subhead text-base lg:w-52 shrink-0 group-hover:text-accent transition-colors duration-300"
                    style={{ color: 'hsl(var(--ink))' }}
                  >
                    {v.title}
                  </h3>

                  <p
                    className="text-sm flex-1 leading-relaxed"
                    style={{ color: 'hsl(var(--ink-light))' }}
                  >
                    {v.description}
                  </p>
                </div>
              );
            })}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHY CHOOSE US — three horizontal pillars
      ═══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-16 scroll-reveal">
            <span className="text-caption">Why Vixora</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 scroll-reveal delay-100">
              <h2
                className="text-display font-serif"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                Why clients{' '}
                <span className="text-serif-accent">choose us</span>
              </h2>
              <p className="text-body mt-6">
                We are not the cheapest option. We are the one that ships on time, communicates
                clearly, and builds products that outlive the engagement.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-0">
              {pillars.map((p, i) => (
                <div
                  key={i}
                  className={`group flex flex-col lg:flex-row gap-4 lg:gap-10 py-8 cursor-default transition-colors duration-300 scroll-reveal delay-${(i + 1) * 100}`}
                  style={{ borderTop: '1px solid hsl(var(--border))' }}
                >
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest shrink-0 mt-1"
                    style={{ color: 'hsl(var(--ink-muted))' }}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3
                      className="text-subhead font-semibold mb-2 group-hover:text-accent transition-colors duration-300 capitalize"
                      style={{ color: 'hsl(var(--ink))' }}
                    >
                      {p.label}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TEAM — minimal text-forward roster
      ═══════════════════════════════════════════════ */}
      <section className="section-pad" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">The Team</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: 'hsl(var(--ink-muted))' }}
            >
              50+ Members
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-14">
            <h2
              className="text-display scroll-reveal delay-100"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              The people behind{' '}
              <span className="text-serif-accent">the work</span>
            </h2>
            <div className="flex items-end scroll-reveal delay-200">
              <p className="text-body max-w-lg">
                A hand-picked group of exceptional humans who happen to be world-class at what they
                do — and care deeply about the work they put into the world.
              </p>
            </div>
          </div>

          {/* Roster — horizontal rows */}
          <div className="space-y-0">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-7 cursor-default transition-all duration-300 scroll-reveal delay-${Math.min((i + 1) * 100, 400)}`}
                style={{ borderTop: '1px solid hsl(var(--border))' }}
              >
                {/* Initials badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-serif font-semibold text-sm transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'hsl(var(--surface-warm))',
                    border: '1px solid hsl(var(--border))',
                    color: 'hsl(var(--ink-muted))',
                  }}
                >
                  {member.initials}
                </div>

                {/* Name */}
                <div className="sm:w-44 shrink-0">
                  <h3
                    className="font-semibold text-base transition-colors duration-300 group-hover:text-accent"
                    style={{ color: 'hsl(var(--ink))' }}
                  >
                    {member.name}
                  </h3>
                </div>

                {/* Role */}
                <div className="sm:w-52 shrink-0">
                  <span className="text-caption">{member.role}</span>
                </div>

                {/* Bio */}
                <p
                  className="text-sm flex-1 leading-relaxed"
                  style={{ color: 'hsl(var(--ink-light))' }}
                >
                  {member.description}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>

          {/* Hiring strip */}
          <div
            className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-7 rounded-2xl scroll-reveal delay-200"
            style={{
              background: 'hsl(var(--surface-warm))',
              border: '1px solid hsl(var(--border))',
            }}
          >
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: 'hsl(var(--ink))' }}>
                We&apos;re always hiring exceptional people.
              </p>
              <p className="text-caption">
                Think you belong here? We&apos;d love to hear from you.
              </p>
            </div>
            <Link
              href="/#contact"
              className="btn-outline flex items-center gap-2 shrink-0 whitespace-nowrap"
              id="about-say-hello-btn"
            >
              Say Hello <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CTA — shared FinalCTA component
      ═══════════════════════════════════════════════ */}
      <FinalCTA />

      <Footer />

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
