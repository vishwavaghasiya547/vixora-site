'use client';

import { useState } from 'react';
import { ArrowRight, TrendingUp, Users } from 'lucide-react';
import StartProjectModal from './StartProjectModal';

const projects = [
  { id: 1, title: 'AI-Powered E-Commerce Platform', client: 'TechMart Inc.', category: 'AI Solutions', tech: ['React', 'TensorFlow', 'AWS'], desc: 'Revolutionary e-commerce platform with AI-powered product recommendations and real-time inventory management.', rev: '+250%', users: '2M+', featured: true },
  { id: 2, title: 'Enterprise SaaS Dashboard', client: 'DataFlow Systems', category: 'Web Platforms', tech: ['Next.js', 'TypeScript', 'PostgreSQL'], desc: 'Comprehensive analytics dashboard for enterprise data visualization and business intelligence.', rev: '+150%', users: '500K+', featured: true },
  { id: 3, title: 'Shopify Plus Custom Store', client: 'Luxury Fashion Co.', category: 'E-commerce', tech: ['Shopify Plus', 'Liquid', 'GraphQL'], desc: 'Ultra-premium e-commerce experience with custom themes and advanced product customization.', rev: '+300%', users: '1M+', featured: false },
  { id: 4, title: 'Financial Analytics Platform', client: 'FinTech Solutions', category: 'Web Platforms', tech: ['React', 'Python', 'Docker'], desc: 'Real-time financial analytics platform with advanced reporting and compliance tools.', rev: '+180%', users: '250K+', featured: false },
  { id: 5, title: 'Healthcare Management System', client: 'MedTech Corp', category: 'AI Solutions', tech: ['Vue.js', 'Node.js', 'AI/ML'], desc: 'Comprehensive healthcare system with AI-driven diagnostics and patient management.', rev: '+200%', users: '100K+', featured: false },
];

const Work = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <>
      <section id="work" className="section-pad relative" style={{ background: 'hsl(var(--surface))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6 scroll-reveal">
            <span className="text-caption">Selected Work</span>
            <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
          </div>

          <div className="mb-16 scroll-reveal delay-100">
            <h2 className="text-display mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Case studies that{' '}
              <span className="text-serif-accent">speak</span> for themselves
            </h2>
          </div>

          {/* Featured — large editorial cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {featured.map((p, i) => (
              <div key={p.id} className={`card p-8 group cursor-pointer scroll-reveal delay-${(i + 1) * 100}`}>
                {/* Placeholder visual */}
                <div className="w-full h-48 rounded-xl mb-6 flex items-center justify-center"
                  style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
                >
                  <span className="num-display">{String(p.id).padStart(2, '0')}</span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="tag-accent">{p.category}</span>
                  <span className="text-caption">{p.client}</span>
                </div>

                <h3 className="text-heading text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-body text-sm mb-5">{p.desc}</p>

                <div className="flex items-center gap-6 mb-5 pb-5" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" style={{ color: 'hsl(var(--sage))' }} />
                    <span className="text-sm font-semibold" style={{ color: 'hsl(var(--sage))' }}>{p.rev}</span>
                    <span className="text-caption">revenue</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent))' }} />
                    <span className="text-sm font-semibold" style={{ color: 'hsl(var(--accent))' }}>{p.users}</span>
                    <span className="text-caption">users</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" style={{ color: 'hsl(var(--accent))' }} />
                </div>
              </div>
            ))}
          </div>

          {/* Other projects — compact rows */}
          <div className="space-y-0 mb-16">
            {others.map((p, i) => (
              <div key={p.id}
                className={`group py-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 cursor-pointer transition-all duration-300 scroll-reveal delay-${Math.min((i + 1) * 100, 500)}`}
                style={{ borderTop: '1px solid hsl(var(--border))' }}
              >
                <span className="font-mono text-xs tracking-wider shrink-0" style={{ color: 'hsl(var(--accent))' }}>
                  {String(p.id).padStart(2, '0')}
                </span>
                <h3 className="text-subhead text-base lg:w-60 shrink-0 group-hover:text-accent transition-colors">{p.title}</h3>
                <span className="text-caption shrink-0">{p.client}</span>
                <p className="text-sm flex-1" style={{ color: 'hsl(var(--ink-light))', lineHeight: 1.6 }}>{p.desc}</p>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-sm font-semibold" style={{ color: 'hsl(var(--sage))' }}>{p.rev}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'hsl(var(--accent))' }} />
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid hsl(var(--border))' }} />
          </div>

          <div className="text-center scroll-reveal delay-200">
            <button className="btn-primary flex items-center justify-center gap-2 mx-auto" onClick={() => setIsModalOpen(true)}>
              Start Your Project <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Work;
