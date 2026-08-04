'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 'shopify-luxury',
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Luxury Fashion Co.',
    avatarInitials: 'ER',
    content:
      'Our custom Shopify store is beautiful and performs flawlessly. Vixora truly understood our brand vision and delivered a premium experience our customers love.',
    rating: 5,
  },
  {
    id: 'ai-ecommerce',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechMart Inc.',
    avatarInitials: 'SJ',
    content:
      'Vixora transformed our e-commerce platform completely. Their AI-powered recommendations increased conversion by 180% and overall revenue significantly.',
    rating: 5,
  },
  {
    id: 'saas-dashboard',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Systems',
    avatarInitials: 'MC',
    content:
      'The analytics dashboard Vixora built exceeded all our expectations. Their attention to detail and technical depth helped us make better data-driven decisions.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="pt-10 lg:pt-14 pb-20 lg:pb-28 relative"
      style={{ background: 'hsl(var(--surface))' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal">
          <span className="text-caption block mb-3">Client Voices</span>
          <h2
            className="text-display text-ink"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
          >
            Trusted by visionaries,{' '}
            <span className="text-serif-accent">validated by results</span>
          </h2>
        </div>

        {/* Ultra-Simple 3 Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              className={`p-7 rounded-2xl flex flex-col justify-between scroll-reveal delay-${(idx + 1) * 100}`}
              style={{
                background: 'hsl(var(--surface-warm))',
                border: '1px solid hsl(var(--border))',
              }}
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-accent"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm leading-relaxed text-ink font-body mb-8">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-border flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-xs shrink-0 text-white bg-accent"
                >
                  {t.avatarInitials}
                </div>
                <div>
                  <div className="font-semibold text-sm text-ink">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-muted">
                    {t.role}, <span className="text-ink-light">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
