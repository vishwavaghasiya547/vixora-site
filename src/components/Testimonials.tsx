'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';
import StartProjectModal from './StartProjectModal';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, TechMart Inc.', content: 'Vixora transformed our e-commerce platform completely. Their AI-powered recommendations increased conversion by 180% and revenue by 250%. The team\'s expertise and dedication are simply unmatched.', project: 'AI-Powered E-Commerce', rating: 5 },
  { name: 'Michael Chen', role: 'CTO, DataFlow Systems', content: 'The analytics dashboard Vixora built exceeded all our expectations. Their attention to detail and deep technical expertise helped us make fundamentally better data-driven decisions.', project: 'Enterprise SaaS Dashboard', rating: 5 },
  { name: 'Emily Rodriguez', role: 'Founder, Luxury Fashion Co.', content: 'Our custom Shopify store is beautiful and performs flawlessly. Vixora truly understood our brand vision and delivered a premium experience our customers love.', project: 'Shopify Plus Custom Store', rating: 5 },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = testimonials[idx];
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <section id="testimonials" className="section-pad relative" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">Client Voices</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="max-w-4xl">
            {/* Large quote */}
            <div className="mb-10 scroll-reveal delay-100">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'hsl(var(--accent))' }} />
                ))}
              </div>

              <blockquote className="text-display leading-snug mb-8"
                style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}
              >
                &ldquo;{t.content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 pb-8" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'hsl(var(--accent-soft))', border: '1.5px solid hsl(var(--accent) / 0.3)' }}
                >
                  <User className="w-5 h-5" style={{ color: 'hsl(var(--accent))' }} />
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-caption">{t.role}</div>
                </div>
                <div className="ml-auto hidden sm:block">
                  <span className="tag">{t.project}</span>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between scroll-reveal delay-200">
              <div className="flex gap-3">
                <button onClick={prev} className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink-light))' }}
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink-light))' }}
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setIdx(i)}
                    className="w-8 h-1 rounded-full transition-all duration-300"
                    style={{ background: i === idx ? 'hsl(var(--accent))' : 'hsl(var(--border))' }}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <span className="font-mono text-xs" style={{ color: 'hsl(var(--ink-muted))' }}>
                {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          <div className="mt-14 scroll-reveal delay-300">
            <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Start Your Project</button>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Testimonials;
