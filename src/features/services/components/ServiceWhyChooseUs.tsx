'use client';

import React from 'react';
import { ServiceData } from '../data/servicesData';

interface ServiceWhyChooseUsProps {
  service: ServiceData;
}

export default function ServiceWhyChooseUs({ service }: ServiceWhyChooseUsProps) {
  const { name, whyChooseUs } = service;

  return (
    <section className="section-pad relative" style={{ background: 'hsl(var(--surface))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14 scroll-reveal">
          <span className="text-caption">Why Choose Us</span>
          <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column (Sticky visual statement) */}
          <div className="lg:col-span-5 sticky top-[120px] space-y-6 scroll-reveal delay-100">
            <h2 className="text-display" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}>
              How we differentiate{' '}
              <span className="text-serif-accent">our delivery</span>
            </h2>
            <p className="text-body text-base leading-relaxed text-ink-light">
              We align our team metrics directly with your business goals. These principles shape every engineering cycle and deployment gate we run for {name} projects.
            </p>
          </div>

          {/* Right Column (Structured, non-card values list) */}
          <div className="lg:col-span-7 space-y-0">
            {whyChooseUs.map((val, idx) => (
              <div
                key={val.title}
                className="group py-8 flex gap-6 border-b first:pt-0 last:border-b-0 cursor-default scroll-reveal"
                style={{ borderColor: 'hsl(var(--border))' }}
              >
                {/* Number index */}
                <span className="font-mono text-xs font-semibold tracking-wider shrink-0 mt-1" style={{ color: 'hsl(var(--accent))' }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>

                <div className="space-y-2">
                  <h3 className="text-subhead font-semibold text-lg transition-colors duration-300 group-hover:text-accent" style={{ color: 'hsl(var(--ink))' }}>
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-light font-body" style={{ color: 'hsl(var(--ink-light))' }}>
                    {val.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
