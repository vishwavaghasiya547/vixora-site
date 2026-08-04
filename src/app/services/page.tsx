'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Shield, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import StartProjectModal from '@/components/StartProjectModal';
import { servicesData } from '@/features/services/data/servicesData';
import { trustBannerStats } from '@/shared/data/companyStats';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allServices = Object.values(servicesData);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--bg))' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-20 overflow-hidden" style={{ background: 'hsl(var(--bg))' }}>
        {/* Parallax Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
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
            <span className="text-caption">Capabilities</span>
            <div className="h-px w-12" style={{ background: 'hsl(var(--border))' }} />
            <span className="flex items-center gap-1.5">
              <span className="status-live" />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--sage))' }}>
                6 Core Disciplines
              </span>
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h1
                className="text-display reveal reveal-d1"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05 }}
              >
                Engineering with
                <br />
                unrelenting <span className="text-serif-accent">precision.</span>
              </h1>
              <p className="text-body text-xl leading-relaxed max-w-2xl mt-6 reveal reveal-d2">
                We combine deep system architecture, creative product design, and rigorous delivery frameworks to build software that changes how companies operate.
              </p>
            </div>

            <div className="lg:col-span-4 reveal reveal-d3 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary w-full flex items-center justify-center gap-2"
                id="services-main-hero-cta"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/#work"
                className="btn-outline w-full text-center flex items-center justify-center gap-2"
              >
                See Our Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Catalog */}
      <section className="section-pad pt-8" style={{ background: 'hsl(var(--surface))', borderTop: '1px solid hsl(var(--border))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-0">
            {allServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.slug}
                  className="flex flex-col lg:flex-row lg:items-center justify-between py-8 border-b first:border-t-0 border-border scroll-reveal"
                >
                  {/* Left Block: Icon + Name */}
                  <div className="flex items-center gap-4 lg:w-1/3 shrink-0">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-border"
                      style={{ background: 'hsl(var(--surface-warm))' }}
                    >
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-subhead font-semibold text-lg text-ink">
                        {svc.name}
                      </h3>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-ink-muted block mt-0.5">
                        PHASE {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Center: Tagline */}
                  <p className="text-sm flex-1 leading-relaxed text-ink-light font-body my-4 lg:my-0 lg:px-8">
                    {svc.tagline}
                  </p>

                  {/* Right: Offerings Tags */}
                  <div className="flex items-center gap-6 shrink-0 justify-between sm:justify-start">
                    <div className="flex flex-wrap gap-1.5 max-w-xs justify-end">
                      {svc.offerings.slice(0, 2).map((o) => (
                        <span key={o.title} className="tag text-[9px]">
                          {o.title.replace(/Development|Systems|Integration|Architectures|Portals/g, '').trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="border-b border-border" />
          </div>
        </div>
      </section>

      {/* Global Trust Banner */}
      <section className="py-16 relative" style={{ background: 'hsl(var(--bg-alt))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBannerStats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-serif text-3xl lg:text-4xl font-bold text-ink mb-1">{s.value}</div>
                <div className="text-caption">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
