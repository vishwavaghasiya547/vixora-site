'use client';

import { useState } from 'react';
import { Atom, Triangle, Hexagon, Terminal, FileCode2, ShoppingCart, Database, Cloud, Box, Brain, Code } from 'lucide-react';

const techs = [
  { name: 'React', cat: 'Frontend', icon: Atom }, 
  { name: 'Next.js', cat: 'Frontend', icon: Triangle }, 
  { name: 'Vue.js', cat: 'Frontend', icon: Code },
  { name: 'Node.js', cat: 'Backend', icon: Hexagon }, 
  { name: 'Python', cat: 'Backend', icon: Terminal }, 
  { name: 'TypeScript', cat: 'Language', icon: FileCode2 },
  { name: 'Shopify', cat: 'Commerce', icon: ShoppingCart }, 
  { name: 'MongoDB', cat: 'Database', icon: Database }, 
  { name: 'PostgreSQL', cat: 'Database', icon: Database },
  { name: 'AWS', cat: 'Cloud', icon: Cloud }, 
  { name: 'Docker', cat: 'Cloud', icon: Box }, 
  { name: 'TensorFlow', cat: 'AI', icon: Brain },
];

const Technology = () => {
  const [active, setActive] = useState('All');
  const cats = ['All', ...Array.from(new Set(techs.map(t => t.cat)))];
  const filtered = active === 'All' ? techs : techs.filter(t => t.cat === active);

  return (
    <section id="technology" className="section-pad relative" style={{ background: 'hsl(var(--bg))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="text-caption">Tech Stack</span>
          <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
        </div>

        <h2 className="text-display mb-12 scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
          Tools of the <span className="text-serif-accent">trade</span>
        </h2>

        <div className="flex flex-wrap gap-2 mb-10 scroll-reveal delay-200">
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)}
              className="px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all duration-200"
              style={{
                background: active === c ? 'hsl(var(--ink))' : 'hsl(var(--surface-warm))',
                color: active === c ? 'hsl(var(--bg))' : 'hsl(var(--ink-muted))',
                border: `1px solid ${active === c ? 'hsl(var(--ink))' : 'hsl(var(--border-strong))'}`,
              }}
            >{c}</button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((t, i) => (
            <div key={t.name} className={`card p-5 text-center group cursor-default scroll-reveal delay-${Math.min((i + 1) * 100, 500)}`}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-300"
                style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
              >
                <span style={{ color: 'hsl(var(--ink))' }}>
                  <t.icon className="w-6 h-6 stroke-[1.5]" />
                </span>
              </div>
              <h3 className="font-semibold text-sm mb-0.5 group-hover:text-accent transition-colors">{t.name}</h3>
              <span className="text-caption">{t.cat}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-14 scroll-reveal delay-300">
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Discuss Your Stack
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technology;
