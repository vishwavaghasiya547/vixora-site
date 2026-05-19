'use client';

import { useState } from 'react';
import { ArrowRight, Brain, Code, Zap, ShoppingBag, Palette, Server } from 'lucide-react';
import StartProjectModal from './StartProjectModal';

const services = [
  { num: '01', title: 'AI & Machine Learning', desc: 'Predictive analytics, NLP, computer vision — we transform your data into intelligent systems that automate and scale.', icon: Brain, tags: ['TensorFlow', 'PyTorch', 'GPT'] },
  { num: '02', title: 'Web Development', desc: 'Modern, performant web applications built with React, Next.js, and cloud-native architecture for peak reliability.', icon: Code, tags: ['React', 'Next.js', 'Node'] },
  { num: '03', title: 'SaaS Platforms', desc: 'Enterprise-grade multi-tenant systems with robust APIs, real-time data, and infrastructure that scales to millions.', icon: Zap, tags: ['API Design', 'Multi-tenant', 'Scale'] },
  { num: '04', title: 'E-Commerce', desc: 'Custom Shopify Plus stores and headless commerce platforms designed to convert and delight at every touchpoint.', icon: ShoppingBag, tags: ['Shopify Plus', 'Headless', 'Payments'] },
  { num: '05', title: 'UI/UX Design', desc: 'Research-driven design systems and intuitive interfaces that make complex products feel effortlessly simple.', icon: Palette, tags: ['Design Systems', 'Research', 'Prototyping'] },
  { num: '06', title: 'DevOps & Cloud', desc: 'Automated CI/CD pipelines, container orchestration, and monitoring that keeps your infrastructure bulletproof.', icon: Server, tags: ['AWS', 'Docker', 'CI/CD'] },
];

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

          {/* Services list — editorial numbered list, not bento grid */}
          <div className="space-y-0">
            {services.map((svc, i) => (
              <div key={i}
                className="group py-7 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 cursor-default transition-all duration-300 scroll-reveal"
                style={{ borderTop: '1px solid hsl(var(--border))' }}
              >
                <span className="font-mono text-xs tracking-wider shrink-0" style={{ color: 'hsl(var(--accent))' }}>
                  {svc.num}
                </span>

                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                  style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
                >
                  <svc.icon className="w-5 h-5 transition-colors duration-300" style={{ color: 'hsl(var(--ink-muted))' }} />
                </div>

                <h3 className="text-subhead text-lg lg:w-56 shrink-0 group-hover:text-accent transition-colors duration-300">
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
