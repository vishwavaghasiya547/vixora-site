'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Star, User, ShieldAlert } from 'lucide-react';
import { ServiceData, ServiceProject, servicesData } from '../data/servicesData';
import ServiceHero from './ServiceHero';
import ServiceWhyChooseUs from './ServiceWhyChooseUs';
import ServiceProcess from './ServiceProcess';
import StartProjectModal from '@/components/StartProjectModal';

interface ServiceDetailLayoutProps {
  service: ServiceData;
}

export default function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { name, offerings, benefits, industries, projects, testimonials, relatedSlugs } = service;

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <ServiceHero service={service} onOpenModal={() => setIsModalOpen(true)} />

      {/* 2. Why Choose Us Section */}
      <ServiceWhyChooseUs service={service} />

      {/* 3. Services We Provide Section */}
      <section className="section-pad relative" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-14 scroll-reveal">
            <span className="text-caption">Detailed Offerings</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-16">
            <h2 className="text-display scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Core capabilities{' '}
              <span className="text-serif-accent">we offer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((o, idx) => (
              <div
                key={o.title}
                className="card p-7 lg:p-8 flex flex-col justify-between scroll-reveal"
                style={{ background: 'hsl(var(--surface))' }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent font-semibold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-subhead font-semibold text-lg" style={{ color: 'hsl(var(--ink))' }}>
                      {o.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-light font-body">
                    {o.body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-border">
                  {o.tags.map((t) => (
                    <span key={t} className="tag text-[9px]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Development Process Section */}
      <ServiceProcess service={service} />

      {/* 5. Benefits & Advantages Section */}
      <section className="section-pad relative" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-14 scroll-reveal">
            <span className="text-caption">Business Impact</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b, idx) => (
              <div
                key={b.title}
                className="rounded-2xl p-7 border flex flex-col justify-between group cursor-default scroll-reveal"
                style={{
                  background: 'hsl(var(--surface))',
                  borderColor: 'hsl(var(--border))',
                }}
              >
                <div className="space-y-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
                    style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
                  >
                    <span className="font-mono text-xs text-accent font-semibold">0{idx + 1}</span>
                  </div>
                  <h3 className="font-semibold text-base" style={{ color: 'hsl(var(--ink))' }}>
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-light font-body">
                    {b.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve Section */}
      <section className="section-pad relative" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-14 scroll-reveal">
            <span className="text-caption">Target Domains</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-16">
            <h2 className="text-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}>
              Tailored for{' '}
              <span className="text-serif-accent">your industry</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="p-6 rounded-2xl border scroll-reveal"
                style={{
                  background: 'hsl(var(--surface-warm))',
                  borderColor: 'hsl(var(--border))',
                }}
              >
                <h3 className="font-semibold text-base mb-2 text-ink">
                  {ind.name}
                </h3>
                <p className="text-xs leading-relaxed text-ink-light font-body">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Featured Projects / Case Studies Section */}
      {projects.length > 0 && (
        <section id="case-studies" className="section-pad relative" style={{ background: 'hsl(var(--bg-alt))' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-14 scroll-reveal">
              <span className="text-caption">Case Studies</span>
              <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            </div>

            <div className="space-y-0">
              {projects.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 py-8 border-b first:border-t-0 scroll-reveal"
                  style={{ borderBottom: '1px solid hsl(var(--border))' }}
                >
                  <div className="sm:w-52 shrink-0">
                    <span className="font-semibold text-sm transition-colors duration-300 group-hover:text-accent" style={{ color: 'hsl(var(--ink))' }}>
                      {p.title}
                    </span>
                    <span className="block text-caption mt-0.5">{p.category}</span>
                  </div>

                  <p className="text-sm flex-1 leading-relaxed text-ink-light font-body">
                    {p.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 shrink-0">
                    {p.stack.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>

                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 text-accent" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="section-pad relative" style={{ background: 'hsl(var(--surface))' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-14 scroll-reveal">
              <span className="text-caption">Client Endorsement</span>
              <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="space-y-6 scroll-reveal">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-accent" />
                    ))}
                  </div>

                  <blockquote className="text-display leading-snug mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
                    &ldquo;{t.content}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4 pb-6 border-b border-border">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-accent-soft border border-accent/20">
                      <User className="w-5 h-5 text-accent" />
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
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Related Services Section */}
      {relatedSlugs.length > 0 && (
        <section className="section-pad relative" style={{ background: 'hsl(var(--bg-alt))' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10 scroll-reveal">
              <span className="text-caption">Explore Other Disciplines</span>
              <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            </div>

            <div className="flex flex-wrap gap-3">
              {relatedSlugs.map((slug) => {
                const rel = servicesData[slug];
                if (!rel) return null;
                const RelIcon = rel.icon;
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="group flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 bg-surface border border-border"
                  >
                    <RelIcon className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors" />
                    <span className="text-sm font-medium group-hover:text-accent transition-colors duration-300 text-ink">
                      {rel.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 10. Final CTA Section */}
      <section className="section-pad relative overflow-hidden grain" style={{ background: 'hsl(var(--ink))' }}>
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-display leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'hsl(var(--surface))' }}>
            Ready to build <span className="font-serif italic font-normal text-accent">tomorrow&apos;s</span> software?
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: 'hsla(0,0%,100%,0.6)' }}>
            Partner with Vixora Studio to scope, engineer, and deploy high-performance {name} solutions tailored for your business scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button onClick={() => setIsModalOpen(true)} className="btn-primary">
              Schedule Consultation
            </button>
            <Link href="/#contact" className="btn-outline border-white/20 text-white hover:bg-white/5 hover:border-white">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
