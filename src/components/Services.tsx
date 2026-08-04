'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import StartProjectModal from './StartProjectModal';
import { servicesData } from '@/features/services/data/servicesData';

const servicesList = Object.values(servicesData).map((svc, index) => ({
  num: String(index + 1).padStart(2, '0'),
  title: svc.name,
  desc: svc.tagline,
  icon: svc.icon,
  tags: svc.offerings.slice(0, 3).flatMap(o => o.tags).slice(0, 3),
  slug: svc.slug,
}));

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="services" className="section-pad relative" style={{ background: 'hsl(var(--bg))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">What We Do</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-16">
            <h2 className="text-display scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Six disciplines,{' '}
              <span className="text-serif-accent">one mission</span>
            </h2>
            <div className="flex items-end scroll-reveal delay-200">
              <p className="text-body max-w-lg">
                We bring together engineering, design, and strategy to build digital products
                that solve real problems and create lasting competitive advantage.
              </p>
            </div>
          </div>

          {/* Services list — editorial numbered list */}
          <div className="space-y-0">
            {servicesList.map((svc, i) => (
              <div
                key={svc.slug}
                className="py-7 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 scroll-reveal"
                style={{ borderTop: '1px solid hsl(var(--border))' }}
              >
                <span className="font-mono text-xs tracking-wider shrink-0" style={{ color: 'hsl(var(--accent))' }}>
                  {svc.num}
                </span>

                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-border"
                  style={{ background: 'hsl(var(--surface-warm))' }}
                >
                  <svc.icon className="w-5 h-5 text-accent" />
                </div>

                <h3 className="text-subhead text-lg lg:w-56 shrink-0 text-ink">
                  {svc.title}
                </h3>

                <p className="text-sm flex-1" style={{ color: 'hsl(var(--ink-light))', lineHeight: 1.7 }}>
                  {svc.desc}
                </p>

                <div className="flex flex-wrap gap-2 shrink-0">
                  {svc.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>

          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center scroll-reveal delay-200">
            <button className="btn-primary flex items-center justify-center gap-2" onClick={() => setIsModalOpen(true)}>
              Discuss Your Project <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-outline" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Services;
