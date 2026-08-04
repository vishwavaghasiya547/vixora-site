'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, GitBranch } from 'lucide-react';
import { ServiceData } from '../data/servicesData';

interface ServiceHeroProps {
  service: ServiceData;
  onOpenModal: () => void;
}

export default function ServiceHero({ service, onOpenModal }: ServiceHeroProps) {
  const { name, headline, description, metrics } = service;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Icon = service.icon;

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden" style={{ background: 'hsl(var(--bg))' }}>
      {/* Engineering Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
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
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6 scroll-reveal">
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold bg-accent-soft px-3 py-1 rounded-full border border-accent/10">
            Enterprise Services
          </span>
          <div className="h-px w-8 bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            Vixora Studio
          </span>
        </div>

        {/* Title and Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-6">
            
            {/* Service Name with Icon */}
            <div className="flex items-center gap-4 reveal reveal-d1">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{
                  background: 'hsl(var(--surface-warm))',
                  border: '1px solid hsl(var(--border))',
                }}
              >
                <Icon className="w-6 h-6" style={{ color: 'hsl(var(--ink))' }} />
              </div>
              <h1
                className="text-display"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.08 }}
              >
                {name}
              </h1>
            </div>

            {/* Headline & Subline */}
            <div className="space-y-4">
              <h2 className="text-subhead text-xl lg:text-2xl font-semibold leading-snug text-ink max-w-3xl reveal reveal-d2">
                {headline}
              </h2>
              <p className="text-body text-lg leading-relaxed font-body text-ink-light max-w-2xl reveal reveal-d3">
                {description}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-4 reveal reveal-d4">
              <button
                onClick={onOpenModal}
                className="btn-primary flex items-center gap-2"
                id={`service-hero-cta-${service.slug}`}
              >
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#case-studies"
                className="btn-outline flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <GitBranch className="w-4 h-4" /> View Portfolio
              </a>
            </div>
          </div>

          {/* Right column: Trust Metrics Grid */}
          <div className="lg:col-span-4 reveal reveal-d3">
            <div
              className="rounded-2xl p-6 lg:p-8 border relative overflow-hidden"
              style={{
                background: 'hsl(var(--surface-warm))',
                borderColor: 'hsl(var(--border))',
              }}
            >
              {/* Decorative Subtle glow */}
              <div 
                className="absolute -right-12 -top-12 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: 'hsl(var(--accent))' }}
              />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                    Key Performance
                  </span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-white border border-border">
                    <span className="status-live" />
                    <span style={{ color: 'hsl(var(--sage))' }}>Reliable</span>
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {metrics.map((m) => (
                    <div key={m.label} className="space-y-1">
                      <div className="font-serif text-2xl font-bold tracking-tight text-ink">
                        {m.value}
                      </div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted">
                    Enterprise SLA Standard
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
