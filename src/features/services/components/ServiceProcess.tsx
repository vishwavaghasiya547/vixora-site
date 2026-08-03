'use client';

import React from 'react';
import { ServiceData } from '../data/servicesData';

interface ServiceProcessProps {
  service: ServiceData;
}

export default function ServiceProcess({ service }: ServiceProcessProps) {
  const { name, process } = service;

  return (
    <section className="section-pad relative" style={{ background: 'hsl(var(--surface))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16 scroll-reveal">
          <span className="text-caption">The Method</span>
          <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
        </div>

        {/* Section Intro */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-16">
          <h2 className="text-display scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            A rigorous engineering{' '}
            <span className="text-serif-accent">workflow</span>
          </h2>
          <div className="flex items-end scroll-reveal delay-200">
            <p className="text-body max-w-lg">
              We design, test, and release our {name} systems through a structured 6-phase lifecycle that guarantees architectural integrity and cost efficiency.
            </p>
          </div>
        </div>

        {/* Timeline Rail Design */}
        <div className="relative pl-0 lg:pl-8">
          {/* Vertical rail */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden lg:block"
            style={{ background: 'hsl(var(--border))' }}
          />

          <div className="space-y-0">
            {process.map((step, idx) => (
              <div
                key={step.title}
                className="group relative flex flex-col lg:flex-row gap-4 lg:gap-12 py-8 border-t border-border first:border-t-0 scroll-reveal"
                style={{ borderColor: 'hsl(var(--border))' }}
              >
                {/* Rail dot */}
                <div
                  className="absolute left-[-4.5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full hidden lg:block transition-transform duration-300 group-hover:scale-150"
                  style={{
                    background: 'hsl(var(--accent))',
                    outline: '3px solid hsl(var(--surface))',
                  }}
                />

                {/* Step Index (Mobile & Desktop) */}
                <div className="lg:w-20 shrink-0">
                  <span className="font-mono text-xs tracking-widest font-semibold" style={{ color: 'hsl(var(--accent))' }}>
                    PHASE {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 lg:grid lg:grid-cols-3 lg:gap-8 items-baseline">
                  <h3 className="text-subhead font-semibold text-lg mb-2 lg:mb-0 transition-colors duration-300 group-hover:text-accent" style={{ color: 'hsl(var(--ink))' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-light lg:col-span-2 font-body" style={{ color: 'hsl(var(--ink-light))' }}>
                    {step.body}
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
