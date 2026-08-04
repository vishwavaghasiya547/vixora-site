'use client';

import { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Quote, 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Play, 
  Pause 
} from 'lucide-react';
import StartProjectModal from './StartProjectModal';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  content: string;
  project: string;
  rating: number;
  metric: string;
  metricLabel: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'shopify-luxury',
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Luxury Fashion Co.',
    avatarInitials: 'ER',
    content: 'Our custom Shopify store is beautiful and performs flawlessly. Vixora truly understood our brand vision and delivered a premium experience our customers love.',
    project: 'Shopify Plus Custom Store',
    rating: 5,
    metric: '+300%',
    metricLabel: 'Customer Engagement',
  },
  {
    id: 'ai-ecommerce',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechMart Inc.',
    avatarInitials: 'SJ',
    content: 'Vixora transformed our e-commerce platform completely. Their AI-powered recommendations increased conversion by 180% and revenue by 250%. The team\'s expertise and dedication are simply unmatched.',
    project: 'AI-Powered E-Commerce',
    rating: 5,
    metric: '+180%',
    metricLabel: 'Conversion Increase',
  },
  {
    id: 'saas-dashboard',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Systems',
    avatarInitials: 'MC',
    content: 'The analytics dashboard Vixora built exceeded all our expectations. Their attention to detail and deep technical expertise helped us make fundamentally better data-driven decisions.',
    project: 'Enterprise SaaS Dashboard',
    rating: 5,
    metric: '10x',
    metricLabel: 'Data Processing Speed',
  },
];

const trustStats = [
  { value: '99.4%', label: 'Client Satisfaction Rate' },
  { value: '$50M+', label: 'Client Revenue Generated' },
  { value: '100%', label: 'On-Time Delivery Record' },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = testimonials[idx];

  const next = useCallback(() => {
    setIdx((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, next]);

  return (
    <>
      <section 
        id="testimonials" 
        className="section-pad relative overflow-hidden" 
        style={{ background: 'hsl(var(--surface))' }}
      >
        {/* Subtle Ambient Background Mesh */}
        <div 
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[140px] pointer-events-none opacity-40"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 scroll-reveal">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-2 h-2 rounded-full" style={{ background: 'hsl(var(--accent))' }} />
                <span className="text-caption">Client Voices & Proven Impact</span>
              </div>
              <h2 
                className="text-display max-w-2xl text-ink"
                style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)' }}
              >
                Trusted by visionaries,{' '}
                <span className="text-serif-accent">validated by results</span>
              </h2>
            </div>
            <p className="text-body max-w-md text-sm leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
              See how Vixora collaborates with ambitious brands to engineer digital experiences that drive measurable market growth.
            </p>
          </div>

          {/* Main Showcase Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
            
            {/* Left Column: Featured Quote Card (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-2xl relative overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md"
              style={{
                background: 'hsl(var(--surface-warm))',
                border: '1px solid hsl(var(--border-strong))',
              }}
            >
              {/* Giant Watermark Quote Icon */}
              <Quote 
                className="absolute -top-4 -right-4 w-48 h-48 pointer-events-none opacity-[0.035]" 
                style={{ color: 'hsl(var(--ink))' }}
              />

              <div>
                {/* Top Bar: Stars + ROI Badge */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                    style={{ background: 'hsl(var(--surface))', border: '1px solid hsl(var(--border))' }}
                  >
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: 'hsl(var(--accent))' }} />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono font-medium ml-1" style={{ color: 'hsl(var(--ink-muted))' }}>
                      5.0 Verified Review
                    </span>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold"
                    style={{ 
                      background: 'hsl(var(--accent-soft))', 
                      color: 'hsl(var(--accent))',
                      border: '1px solid hsl(var(--accent) / 0.3)' 
                    }}
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{t.metric} {t.metricLabel}</span>
                  </div>
                </div>

                {/* Main Quote Content */}
                <blockquote 
                  className="text-display leading-snug mb-8 font-serif transition-opacity duration-300"
                  style={{ 
                    fontSize: 'clamp(1.35rem, 2.4vw, 1.85rem)',
                    color: 'hsl(var(--ink))' 
                  }}
                >
                  &ldquo;{t.content}&rdquo;
                </blockquote>
              </div>

              {/* Bottom Client Detail Bar */}
              <div 
                className="pt-6 flex flex-wrap items-center justify-between gap-4"
                style={{ borderTop: '1px solid hsl(var(--border))' }}
              >
                <div className="flex items-center gap-4">
                  {/* Avatar Circle with Ring */}
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-sm transition-transform duration-300 hover:scale-105"
                    style={{ 
                      background: 'hsl(var(--ink))', 
                      color: 'hsl(var(--bg))',
                      boxShadow: '0 0 0 3px hsl(var(--accent) / 0.3)'
                    }}
                  >
                    {t.avatarInitials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm flex items-center gap-1.5" style={{ color: 'hsl(var(--ink))' }}>
                      {t.name}
                      <ShieldCheck className="w-4 h-4" style={{ color: 'hsl(var(--accent))' }} />
                    </div>
                    <div className="text-caption font-mono" style={{ fontSize: '0.7rem' }}>
                      {t.role}, <span style={{ color: 'hsl(var(--ink))' }}>{t.company}</span>
                    </div>
                  </div>
                </div>

                <span className="tag tag-accent text-[10px] sm:text-xs">
                  {t.project}
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Client Selector List & Stats (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Client Tab Selection Cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-caption">Select Case Story</span>
                  {/* Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-7 h-7 rounded-md flex items-center justify-center transition-all"
                      style={{ 
                        border: '1px solid hsl(var(--border))', 
                        color: isPlaying ? 'hsl(var(--accent))' : 'hsl(var(--ink-muted))',
                        background: 'hsl(var(--surface))'
                      }}
                      title={isPlaying ? 'Pause Auto-slide' : 'Play Auto-slide'}
                      aria-label="Toggle Auto-slide"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    </button>
                    <button 
                      onClick={prev} 
                      className="w-7 h-7 rounded-md flex items-center justify-center transition-all hover:border-ink"
                      style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))', background: 'hsl(var(--surface))' }}
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={next} 
                      className="w-7 h-7 rounded-md flex items-center justify-center transition-all hover:border-ink"
                      style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))', background: 'hsl(var(--surface))' }}
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {testimonials.map((item, index) => {
                  const isActive = index === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setIdx(index);
                        setIsPlaying(false);
                      }}
                      className="w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group"
                      style={{
                        background: isActive ? 'hsl(var(--surface-warm))' : 'hsl(var(--surface))',
                        border: isActive ? '1.5px solid hsl(var(--accent))' : '1px solid hsl(var(--border))',
                        boxShadow: isActive ? '0 4px 20px hsl(var(--accent) / 0.08)' : 'none',
                      }}
                    >
                      <div className="flex items-center gap-3.5">
                        <div 
                          className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-xs font-semibold transition-colors"
                          style={{
                            background: isActive ? 'hsl(var(--accent))' : 'hsl(var(--bg-alt))',
                            color: isActive ? '#fff' : 'hsl(var(--ink-light))',
                          }}
                        >
                          {item.avatarInitials}
                        </div>
                        <div>
                          <div className="font-semibold text-xs transition-colors" style={{ color: isActive ? 'hsl(var(--accent))' : 'hsl(var(--ink))' }}>
                            {item.name}
                          </div>
                          <div className="text-[11px] font-mono text-ink-muted">
                            {item.company}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span 
                          className="text-xs font-mono font-bold px-2.5 py-1 rounded-md"
                          style={{
                            background: isActive ? 'hsl(var(--accent-soft))' : 'hsl(var(--surface-warm))',
                            color: isActive ? 'hsl(var(--accent))' : 'hsl(var(--ink-muted))',
                          }}
                        >
                          {item.metric}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Progress Line */}
              <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: 'hsl(var(--border))' }}>
                <div 
                  className="h-full transition-all duration-500 rounded-full"
                  style={{ 
                    width: `${((idx + 1) / testimonials.length) * 100}%`,
                    background: 'hsl(var(--accent))'
                  }}
                />
              </div>

              {/* Mini Trust Stats Card Bar */}
              <div 
                className="grid grid-cols-3 gap-2 p-4 rounded-xl text-center"
                style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
              >
                {trustStats.map((st, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="font-serif font-bold text-base sm:text-lg" style={{ color: 'hsl(var(--ink))' }}>
                      {st.value}
                    </span>
                    <span className="text-[10px] font-mono leading-tight" style={{ color: 'hsl(var(--ink-muted))' }}>
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* CTA Banner */}
          <div 
            className="p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ 
              background: 'hsl(var(--ink))', 
              color: 'hsl(var(--bg))' 
            }}
          >
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1">
                Ready to engineer your success story?
              </h3>
              <p className="text-sm opacity-80 font-body max-w-xl">
                Partner with Vixora to build scalable, high-converting digital products tailored to your exact business goals.
              </p>
            </div>
            <button 
              className="px-7 py-3.5 text-sm font-semibold rounded-xl flex items-center gap-2 whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{ 
                background: 'hsl(var(--accent))', 
                color: '#fff',
                boxShadow: '0 4px 20px hsl(var(--accent) / 0.35)'
              }}
              onClick={() => setIsModalOpen(true)}
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Testimonials;
