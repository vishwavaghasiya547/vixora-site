'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { companyStats } from '@/shared/data/companyStats';
import { companyValues } from '@/features/about/data/companyValues';

const About = () => {
  const aboutStats = [
    { val: companyStats.teamMembers, label: 'Team members across 3 continents' },
    { val: companyStats.yearsExcellence, label: 'Years of shipping products that matter' },
  ];

  const featuredValues = companyValues.slice(0, 4);

  return (
    <section id="about" className="section-pad relative grain" style={{ background: 'hsl(var(--bg-alt))' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — large statement */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 mb-4 scroll-reveal">
              <span className="text-caption">About Us</span>
              <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
            </div>

            <h2 className="text-display scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}>
              A studio obsessed with{' '}
              <span className="text-serif-accent">craft,</span>{' '}
              driven by outcomes
            </h2>

            <p className="text-body text-lg max-w-2xl scroll-reveal delay-200">
              We are a team of {companyStats.teamMembers} technologists, designers, and strategists who believe digital products
              should be as intelligent as they are beautiful. Every pixel and every algorithm serves a
              purpose — your users&apos; success and your business growth.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 scroll-reveal delay-300" style={{ borderTop: '1px solid hsl(var(--border))' }}>
              {aboutStats.map((s, i) => (
                <div key={i}>
                  <div className="text-4xl font-serif font-semibold tracking-tight" style={{ color: 'hsl(var(--accent))' }}>
                    {s.val}
                  </div>
                  <p className="text-sm mt-1" style={{ color: 'hsl(var(--ink-muted))' }}>{s.label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" id="about-learn-more-btn" className="btn-primary inline-flex items-center gap-2 scroll-reveal delay-400">
              Read Our Full Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — values */}
          <div className="lg:col-span-5 space-y-4">
            {featuredValues.map((v, i) => (
              <div key={v.num} className={`card p-6 group cursor-default scroll-reveal delay-${(i + 1) * 100}`}>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs tracking-wider shrink-0 pt-1" style={{ color: 'hsl(var(--accent))' }}>
                    {v.num}
                  </span>
                  <div>
                    <h3 className="text-subhead text-base mb-1">{v.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>{v.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
