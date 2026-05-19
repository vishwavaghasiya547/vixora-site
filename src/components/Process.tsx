'use client';

import { Search, Lightbulb, Palette, Code, Rocket } from 'lucide-react';

const steps = [
  { num: '01', icon: Search, title: 'Discovery', desc: 'We listen, research, and map your business needs to a clear technical strategy.', dur: '1–2 weeks' },
  { num: '02', icon: Lightbulb, title: 'Strategy', desc: 'Architecture decisions, technology selection, and a roadmap aligned with your goals.', dur: '1 week' },
  { num: '03', icon: Palette, title: 'Design', desc: 'Wireframes, prototypes, and design systems that make complex products feel simple.', dur: '2–3 weeks' },
  { num: '04', icon: Code, title: 'Development', desc: 'Agile sprints, continuous integration, and relentless quality assurance throughout.', dur: '4–8 weeks' },
  { num: '05', icon: Rocket, title: 'Launch & Support', desc: 'Production deployment, monitoring, team training, and ongoing partnership.', dur: '1 week+' },
];

const Process = () => {
  return (
    <section id="process" className="section-pad relative grain" style={{ background: 'hsl(var(--bg-alt))' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="text-caption">How We Work</span>
          <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 mb-16">
          <h2 className="text-display scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            A process built for{' '}
            <span className="text-serif-accent">clarity</span>
          </h2>
          <div className="flex items-end scroll-reveal delay-200">
            <p className="text-body max-w-lg">
              Transparent, iterative, and collaborative — from discovery through launch.
              No black boxes. You know exactly where your project stands at every stage.
            </p>
          </div>
        </div>

        {/* Horizontal timeline on desktop, vertical on mobile */}
        <div className="grid lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <div key={i} className={`card p-6 group cursor-default relative scroll-reveal delay-${(i + 1) * 100}`}>
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px" style={{ background: 'hsl(var(--border))' }} />
              )}

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-wider" style={{ color: 'hsl(var(--accent))' }}>
                  {step.num}
                </span>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
                >
                  <step.icon className="w-4 h-4" style={{ color: 'hsl(var(--ink-muted))' }} />
                </div>
              </div>

              <h3 className="text-subhead text-base mb-2 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
              <p className="text-sm mb-3" style={{ color: 'hsl(var(--ink-light))', lineHeight: 1.6 }}>{step.desc}</p>
              <span className="tag">{step.dur}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 scroll-reveal delay-300">
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Process;
