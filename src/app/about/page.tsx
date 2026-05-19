import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ArrowLeft,
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
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
    title: 'About Vixora — Engineering Intelligent Digital Experiences',
    description:
        'Learn about Vixora — our story, mission, values, team, and what drives us to build exceptional digital products.',
};

/* ─── Data ─────────────────────────────────────── */

const stats = [
    { value: '150+', label: 'Projects Delivered', icon: CheckCircle },
    { value: '50+', label: 'Team Members', icon: Users },
    { value: '98%', label: 'Client Retention', icon: Heart },
    { value: '5+', label: 'Years of Excellence', icon: Star },
    { value: '40+', label: 'Countries Served', icon: Globe },
    { value: '$200M+', label: 'Client Revenue Generated', icon: TrendingUp },
];

const values = [
    {
        title: "Innovation First",
        description: "We push the boundaries of what is possible. Cutting-edge technology and creative problem-solving are the backbone of everything we build.",
        icon: Lightbulb,
        color: "bg-amber-50 text-amber-600",
    },
    {
        title: "Quality Excellence",
        description: "Every pixel, every line of code is crafted with precision. We refuse to ship anything we would not be proud to put our name on.",
        icon: Target,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Client Success",
        description: "Your success is our KPI. We go beyond deliverables and become embedded partners in your growth journey.",
        icon: Users,
        color: "bg-green-50 text-green-600",
    },
    {
        title: "Radical Transparency",
        description: "No surprises. We communicate openly about timelines, challenges, and trade-offs so you are always in the driver seat.",
        icon: Shield,
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "Continuous Growth",
        description: "We invest heavily in learning and staying ahead of the curve so our clients always get solutions built for tomorrow.",
        icon: TrendingUp,
        color: "bg-rose-50 text-rose-600",
    },
    {
        title: "Speed with Substance",
        description: "We move fast without breaking things. Iterative delivery with an unrelenting focus on the fundamentals.",
        icon: Zap,
        color: "bg-indigo-50 text-indigo-600",
    },
];

const team = [
    {
        name: 'Aarav Shah',
        role: 'CEO & Co-Founder',
        description: 'Visionary leader with 10+ years scaling digital products across fintech and SaaS.',
        initials: 'AS',
        gradient: 'from-[hsl(var(--ink))] to-[hsl(var(--ink-light))]',
    },
    {
        name: 'Priya Mehta',
        role: 'CTO & Co-Founder',
        description: 'Full-stack architect obsessed with systems design, AI, and developer experience.',
        initials: 'PM',
        gradient: 'from-[hsl(var(--ink))] to-[hsl(var(--ink-muted))]',
    },
    {
        name: 'Lucas Oliveira',
        role: 'Head of Design',
        description: 'Former Figma design lead. Crafts experiences that feel intuitive and look stunning.',
        initials: 'LO',
        gradient: 'from-[hsl(var(--ink-light))] to-[hsl(var(--ink-faint))]',
    },
    {
        name: 'Sara Kim',
        role: 'Head of Engineering',
        description: 'Systems thinker specialising in scalable backend infrastructure and DevOps.',
        initials: 'SK',
        gradient: 'from-[hsl(var(--ink))] to-[hsl(var(--ink-muted))]',
    },
    {
        name: 'James Okonkwo',
        role: 'AI & ML Lead',
        description: 'PhD in Machine Learning with a knack for turning research into production-ready products.',
        initials: 'JO',
        gradient: 'from-[hsl(var(--ink))] to-[hsl(var(--ink-faint))]',
    },
    {
        name: 'Ananya Patel',
        role: 'Client Success Director',
        description: 'Ensures every client relationship exceeds expectations — from kick-off to delivery and beyond.',
        initials: 'AP',
        gradient: 'from-[hsl(var(--ink-light))] to-[hsl(var(--border-strong))]',
    },
];

const timeline = [
    {
        year: '2019',
        title: 'Founded in San Francisco',
        description:
            'Vixora started as a two-person studio with one goal: build digital products that actually move the needle.',
    },
    {
        year: '2020',
        title: 'First 20 Clients & AI Pivot',
        description:
            'We hit our first 20 clients and doubled down on AI-powered solutions as the market began to shift.',
    },
    {
        year: '2021',
        title: 'Team Grows to 15',
        description:
            'Brought on design, engineering, and strategy specialists. Launched our SaaS Platform practice.',
    },
    {
        year: "2022",
        title: "$50M in Client Revenue",
        description: "Our clients collectively generated over $50M in revenue using products we built. A milestone we are proud of.",
    },
    {
        year: '2023',
        title: 'Global Expansion',
        description:
            'Opened delivery hubs in London and Singapore. Now serving clients across 40+ countries.',
    },
    {
        year: '2024',
        title: 'Vixora 2.0',
        description:
            'Launched our new AI-first service model and grew to 50+ team members. The best chapter yet.',
    },
];

const expertise = [
    { icon: Brain, label: 'AI & Machine Learning' },
    { icon: Code, label: 'Web Development' },
    { icon: Zap, label: 'SaaS Platforms' },
    { icon: Palette, label: 'UI/UX Design' },
];

/* ─── Page ─────────────────────────────────────── */

export default function AboutPage() {
    return (
        <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
            <Navbar />

            {/* ── Hero ─────────────────────────────────── */}
            <section className="pt-32 pb-20" style={{ background: 'hsl(var(--bg))' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <Link
                        href="/#about"
                        className="inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors mb-10 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-bg-alt border border-border rounded-full px-4 py-2 text-sm font-medium text-ink-light">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Our Story
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-bold text-ink leading-none tracking-tight">
                                We are<br />
                                <span className="text-ink-faint">Vixora.</span>
                            </h1>
                            <p className="text-xl text-ink-light leading-relaxed max-w-lg">
                                A team of technologists, designers, and strategists obsessed with building digital products that genuinely change how businesses operate and how users experience the world.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {expertise.map(({ icon: Icon, label }) => (
                                <div
                                    key={label}
                                    className="card-elevated flex flex-col items-start gap-3 p-5"
                                >
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--accent))' }}>
                                        <Icon className="w-5 h-5 text-surface" />
                                    </div>
                                    <span className="font-semibold text-ink text-sm">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Dark banner ──────────────────────────── */}
            <section className="py-20 text-surface" style={{ background: 'hsl(var(--ink))' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 items-center">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="text-center space-y-2 col-span-1">
                                    <Icon className="w-5 h-5 text-ink-faint mx-auto" />
                                    <div className="text-3xl lg:text-4xl font-bold">{stat.value}</div>
                                    <div className="text-xs text-ink-faint leading-tight">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Mission & Vision ─────────────────────── */}
            <section className="py-24" style={{ background: 'hsl(var(--surface-warm))' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Mission */}
                        <div className="card-elevated p-10 space-y-5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--accent))' }}>
                                <Target className="w-6 h-6 text-surface" />
                            </div>
                            <h2 className="text-3xl font-bold text-ink">Our Mission</h2>
                            <p className="text-ink-light leading-relaxed text-lg">
                                To empower ambitious businesses with intelligent digital solutions that drive growth, create efficiency, and unlock competitive advantage — in a world that never stops evolving.
                            </p>
                            <div className="pt-2 space-y-3">
                                {['We build for scale', 'We prioritize impact over aesthetics', 'We ship, learn, and iterate'].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-sm text-ink-light">
                                        <CheckCircle className="w-4 h-4 text-ink flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="card-elevated p-10 space-y-5">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'hsl(var(--accent))' }}>
                                <Globe className="w-6 h-6 text-surface" />
                            </div>
                            <h2 className="text-3xl font-bold text-ink">Our Vision</h2>
                            <p className="text-ink-light leading-relaxed text-lg">
                                To be the global benchmark for digital excellence — a studio synonymous with quality, speed, and innovation that consistently sets new standards in AI-powered and human-centered technology.
                            </p>
                            <div className="pt-2 space-y-3">
                                {['Be the first call, not the last resort', 'Lead the AI product design frontier', 'Create lasting partnerships, not transactions'].map((item) => (
                                    <div key={item} className="flex items-center gap-3 text-sm text-ink-light">
                                        <CheckCircle className="w-4 h-4 text-ink flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Story / Timeline ─────────────────────── */}
            <section className="py-24" style={{ background: 'hsl(var(--surface))' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-ink mb-4">Our Journey</h2>
                        <p className="text-ink-light text-lg max-w-2xl mx-auto">
                            From a two-person studio to a global team — here's how we got here.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

                        <div className="space-y-12">
                            {timeline.map((item, i) => (
                                <div
                                    key={i}
                                    className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start lg:items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className={`card-elevated p-8 ${i % 2 !== 0 ? 'lg:text-right' : ''}`}>
                                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-ink-faint mb-3 bg-bg-alt border border-border rounded-full px-3 py-1">
                                                {item.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-ink mb-2">{item.title}</h3>
                                            <p className="text-ink-light leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Center dot */}
                                    <div className="hidden lg:flex w-5 h-5 rounded-full border-4 border-surface shadow-md flex-shrink-0" style={{ background: 'hsl(var(--accent))' }} />

                                    {/* Spacer */}
                                    <div className="flex-1 hidden lg:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Values ───────────────────────────────── */}
            <section className="py-24" style={{ background: 'hsl(var(--surface-warm))' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-ink mb-4">What Drives Us</h2>
                        <p className="text-ink-light text-lg max-w-2xl mx-auto">
                            These aren't just words on a wall — they're the principles we hold ourselves accountable to every single day.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div key={i} className="card-featured space-y-4 group hover:-translate-y-1 transition-transform duration-200">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${v.color}`}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-ink">{v.title}</h3>
                                    <p className="text-ink-light leading-relaxed text-sm">{v.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Team ─────────────────────────────────── */}
            <section className="py-24" style={{ background: 'hsl(var(--surface))' }}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-ink mb-4">The Team Behind Vixora</h2>
                        <p className="text-ink-light text-lg max-w-2xl mx-auto">
                            A hand-picked group of exceptional humans who happen to be world-class at what they do.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="card-featured space-y-5 group">
                                {/* Avatar */}
                                <div
                                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-surface font-bold text-lg`}
                                >
                                    {member.initials}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-ink">{member.name}</h3>
                                    <p className="text-sm font-medium text-ink-muted mb-3">{member.role}</p>
                                    <p className="text-sm text-ink-light leading-relaxed">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hiring banner */}
                    <div className="mt-16 rounded-2xl p-10 text-surface text-center" style={{ background: 'hsl(var(--accent))' }}>
                        <h3 className="text-2xl font-bold mb-3">We're always hiring exceptional people.</h3>
                        <p className="text-surface opacity-80 mb-6 max-w-xl mx-auto">
                            Think you belong here? We'd love to hear from you — even if there's no open role that fits perfectly.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 bg-surface px-6 py-3 rounded-lg font-semibold hover:bg-bg-alt transition-colors" style={{ color: 'hsl(var(--accent))' }}
                        >
                            Say Hello <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── CTA ──────────────────────────────────── */}
            <FinalCTA />

            <Footer />
        </div>
    );
}
