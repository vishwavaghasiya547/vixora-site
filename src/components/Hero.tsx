'use client';

import { ArrowRight, Code2, Database, Terminal, GitBranch, ShieldCheck, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import StartProjectModal from './StartProjectModal';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Tech words for typewriter effect
const techWords = ['AI Platforms', 'Enterprise SaaS', 'Scalable APIs', 'Digital Products'];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentWord = techWords[wordIdx];
    const timeout = setTimeout(() => {
      if (!isDeleting && charIdx < currentWord.length) {
        setCharIdx(prev => prev + 1);
      } else if (isDeleting && charIdx > 0) {
        setCharIdx(prev => prev - 1);
      } else if (!isDeleting && charIdx === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
      } else if (isDeleting && charIdx === 0) {
        setIsDeleting(false);
        setWordIdx((prev) => (prev + 1) % techWords.length);
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, wordIdx]);

  // Scroll & Mouse tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouse);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-end overflow-hidden"
        style={{ background: 'hsl(var(--bg))' }}
      >
        {/* Interactive Mouse Glow */}
        <div
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, hsla(14, 72%, 54%, 0.04), transparent 40%)`
          }}
        />

        {/* Engineering Blueprint Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            transform: `translateY(${scrollY * 0.1}px)` // Parallax grid
          }}
        />

        {/* Dynamic Data Flow Lines (SVG) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,200 C300,200 400,600 800,400 C1200,200 1400,500 2000,300"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              strokeDasharray="4 8"
              style={{ strokeDashoffset: scrollY * -0.5 }} // Moves on scroll
            />
            <path
              d="M0,600 C400,600 600,100 1000,300 C1400,500 1600,200 2000,400"
              fill="none"
              stroke="hsl(var(--ink))"
              strokeWidth="1"
              strokeDasharray="10 10"
              style={{ strokeDashoffset: scrollY * 0.3 }}
            />
          </svg>
        </div>

        {/* Parallax Tech Floating Cards */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden hidden md:block">
          {/* Code Snippet Card */}
          <div className="absolute top-[20%] right-[10%] w-[320px] rounded-xl shadow-2xl backdrop-blur-md p-5 transition-transform duration-75"
            style={{
              background: 'hsla(0, 0%, 100%, 0.7)',
              border: '1px solid hsl(var(--border))',
              transform: `translateY(${scrollY * 0.35}px) rotate(${scrollY * 0.02}deg)`,
            }}
          >
            <div className="flex items-center gap-2 mb-3 pb-2" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span className="text-[10px] font-mono ml-2 uppercase" style={{ color: 'hsl(var(--ink-muted))' }}>core_engine.ts</span>
              <Code2 className="w-3 h-3 ml-auto" style={{ color: 'hsl(var(--ink-muted))' }} />
            </div>
            <div className="font-mono text-[11px] leading-relaxed" style={{ color: 'hsl(var(--ink))' }}>
              <div><span style={{ color: 'hsl(var(--accent))' }}>import</span> {'{'} NeuralNet {'}'} <span style={{ color: 'hsl(var(--accent))' }}>from</span> '@vixora/ai';</div>
              <div className="mt-2"><span style={{ color: 'hsl(var(--ink-muted))' }}>// Initialize quantum processor</span></div>
              <div><span style={{ color: 'hsl(var(--sage))' }}>const</span> engine = <span style={{ color: 'hsl(var(--accent))' }}>new</span> NeuralNet();</div>
              <div className="mt-2">engine.optimize({'{'}</div>
              <div className="pl-4">scale: <span style={{ color: 'hsl(var(--sage))' }}>'infinite'</span>,</div>
              <div className="pl-4">latency: <span style={{ color: 'hsl(var(--accent))' }}>0.01</span></div>
              <div>{'}'});</div>
            </div>
          </div>

          {/* Server Metrics Card */}
          <div className="absolute bottom-[40%] right-[30%] w-[240px] rounded-xl shadow-2xl backdrop-blur-md p-4 transition-transform duration-75"
            style={{
              background: 'hsla(32, 30%, 94%, 0.85)',
              border: '1px solid hsl(var(--border))',
              transform: `translateY(${scrollY * -0.2}px) rotate(${-2 + scrollY * -0.01}deg)`,
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-4 h-4" style={{ color: 'hsl(var(--accent))' }} />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider" style={{ color: 'hsl(var(--ink))' }}>System Live</span>
              <div className="status-live ml-auto" />
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[10px] font-mono mb-1" style={{ color: 'hsl(var(--ink-muted))' }}>
                  <span>Global Requests</span>
                  <span style={{ color: 'hsl(var(--ink))' }}>1.2M/s</span>
                </div>
                <div className="h-1.5 w-full rounded-full overflow-hidden" style={{ background: 'hsl(var(--border))' }}>
                  <div className="h-full rounded-full" style={{ width: '85%', background: 'hsl(var(--ink))' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-mono mb-1" style={{ color: 'hsl(var(--ink-muted))' }}>
                  <span>Uptime</span>
                  <span style={{ color: 'hsl(var(--sage))' }}>99.999%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-40 pb-20 lg:pb-28 transition-transform duration-75"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          {/* Top line indicator */}
          <div className="reveal reveal-d1 mb-8 flex items-center gap-4">
            <Zap className="w-4 h-4" style={{ color: 'hsl(var(--accent))' }} />
            <span className="text-caption">Engineering The Future</span>
            <div className="h-px w-24" style={{ background: 'hsl(var(--border))' }} />
            <span className="text-caption font-mono hidden sm:inline-block" style={{ color: 'hsl(var(--accent))' }}>SYS.ONLINE</span>
          </div>

          {/* Headline — massive serif with Typewriter */}
          <h1 className="text-display reveal reveal-d2 max-w-5xl"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)', lineHeight: 1.1 }}
          >
            <span className="block">We engineer</span>
            <span className="block h-[1.2em] relative text-serif-accent" style={{ fontWeight: 400 }}>
              {techWords[wordIdx].substring(0, charIdx)}
              <span className="animate-pulse absolute" style={{ width: '4px', height: '80%', background: 'hsl(var(--accent))', top: '10%', marginLeft: '8px' }} />
            </span>
            <span className="block mt-2">that matter.</span>
          </h1>

          {/* Subtitle + CTAs */}
          <div className="mt-12 grid lg:grid-cols-12 gap-10 items-end">
            <div className="reveal reveal-d3 lg:col-span-7">
              <p className="text-body text-lg max-w-xl">
                We build high-performance AI platforms, scalable SaaS products, and bespoke web apps that drive measurable growth.
              </p>
            </div>

            <div className="reveal reveal-d4 lg:col-span-5 flex flex-col sm:flex-row gap-4 lg:justify-end">
              <button
                id="hero-start-project-btn"
                className="btn-primary flex items-center justify-center gap-2"
                onClick={() => setIsModalOpen(true)}
              >
                Start Your Project <Terminal className="w-4 h-4" />
              </button>
              <button id="hero-view-work-btn" className="btn-outline flex items-center justify-center gap-2" onClick={() => scrollTo('work')}>
                <GitBranch className="w-4 h-4" /> System Architecture
              </button>
            </div>
          </div>

          {/* Tech Stats Strip */}
          <div className="reveal reveal-d5 mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{ borderTop: '1px solid hsl(var(--border))' }}
          >
            {[
              { val: '0ms', label: 'Downtime', icon: ShieldCheck },
              { val: '2M+', label: 'API Requests/sec', icon: Zap },
              { val: '150+', label: 'Deployments', icon: GitBranch },
              { val: '5+', label: 'Years of Engineering', icon: Terminal },
            ].map((s, i) => (
              <div key={i} className="group cursor-default">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon className="w-4 h-4 transition-colors group-hover:text-accent" style={{ color: 'hsl(var(--ink-muted))' }} />
                  <div className="text-3xl font-serif font-semibold tracking-tight" style={{ color: 'hsl(var(--ink))' }}>
                    {s.val}
                  </div>
                </div>
                <div className="text-caption">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;
