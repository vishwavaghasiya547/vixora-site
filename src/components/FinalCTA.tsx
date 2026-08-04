'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import StartProjectModal from './StartProjectModal';

const FinalCTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScheduleCall = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <section className="relative py-28 overflow-hidden grain" style={{ background: 'hsl(var(--ink))' }}>
        {/* Decorative */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full" style={{ border: '1px solid hsla(0,0%,100%,0.04)' }} />
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full" style={{ border: '1px solid hsla(0,0%,100%,0.03)' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-caption scroll-reveal" style={{ color: 'hsl(var(--surface) / 0.4)' }}>Ready?</span>
          <h2 className="text-display mt-6 mb-6 scroll-reveal delay-100" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'hsl(var(--surface))' }}>
            Let&apos;s build something{' '}
            <span className="font-serif italic font-normal" style={{ color: 'hsl(var(--accent))' }}>
              extraordinary
            </span>
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto scroll-reveal delay-200" style={{ color: 'hsla(0,0%,100%,0.5)' }}>
            Every great product starts with a conversation. Tell us about your vision and let&apos;s explore how we can bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal delay-300">
            <button id="finalcta-get-started-btn" className="px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--surface))', border: '1.5px solid hsl(var(--accent))' }}
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={e => { e.currentTarget.style.background = 'hsl(var(--accent-hover))'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'hsl(var(--accent))'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </button>
            <button id="finalcta-schedule-call-btn" className="px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300"
              style={{ background: 'transparent', color: 'hsla(0,0%,100%,0.7)', border: '1.5px solid hsla(0,0%,100%,0.15)' }}
              onClick={handleScheduleCall}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'hsl(var(--surface) / 0.4)'; e.currentTarget.style.color = 'hsl(var(--surface))'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'hsla(0,0,100%,0.15)'; e.currentTarget.style.color = 'hsla(0,0%,100%,0.7)'; }}
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FinalCTA;
