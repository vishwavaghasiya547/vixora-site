'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Shield, Check, FileText } from 'lucide-react';
import { LegalData } from '../data/privacyPolicy';

interface LegalLayoutProps {
  data: LegalData;
}

export default function LegalLayout({ data }: LegalLayoutProps) {
  const { title, introduction, sections } = data;
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Monitor scroll for hero parallax effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor intersection to update active sidebar section
  useEffect(() => {
    const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observerOptions = {
      rootMargin: '-15% 0px -65% 0px', // Trigger when section is in the upper middle of the screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; // Offset for sticky navbar + sub-header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Quietly update browser history / hash
      window.history.pushState(null, '', `#${id}`);
      setActiveSection(id);
    }
  };

  const activeSectionTitle = sections.find((s) => s.id === activeSection)?.title || 'Select Section';

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'hsl(var(--bg))' }}>
      {/* ═══════════════════════════════════════════════
          HERO SECTION — Asymmetric Editorial Header
      ═══════════════════════════════════════════════ */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden">
        {/* Engineering Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          {/* Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              {/* Category label */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-semibold bg-accent-soft px-3 py-1 rounded-full border border-accent/10">
                  Legal & Compliance
                </span>
                <div className="h-px w-8 bg-border" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                  Vixora Studio
                </span>
              </div>

              {/* Heading */}
              <h1
                className="text-display reveal reveal-d1"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05 }}
              >
                {title === 'Privacy Policy' ? (
                  <>
                    Privacy <span className="text-serif-accent">Policy.</span>
                  </>
                ) : (
                  <>
                    Terms of <span className="text-serif-accent">Service.</span>
                  </>
                )}
              </h1>

              {/* Intro text */}
              <p className="text-body text-lg leading-relaxed font-body text-ink-light">
                {introduction}
              </p>
            </div>

            {/* Right column: premium glass-like metadata card */}
            <div className="lg:col-span-5 reveal reveal-d2">
              <div 
                className="rounded-2xl p-6 lg:p-8 border relative overflow-hidden group"
                style={{
                  background: 'hsl(var(--surface-warm))',
                  borderColor: 'hsl(var(--border))',
                }}
              >
                {/* Subtle background glow */}
                <div 
                  className="absolute -right-10 -top-10 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-500 group-hover:scale-125"
                  style={{ background: 'hsl(var(--accent))' }}
                />

                <div className="space-y-6 relative z-10">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-ink-muted" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                        Agreement
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-white border border-border">
                      <span className="status-live animate-pulse" />
                      <span style={{ color: 'hsl(var(--sage))' }}>Active</span>
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-sans font-semibold text-sm text-ink">
                      Scope & Applicability
                    </h4>
                    <p className="text-xs leading-relaxed text-ink-light font-body">
                      This document governs all interactions with Vixora Studio&apos;s website, platforms, portfolio showcases, and project scoping engagements. By interacting with our website, you accept these guidelines.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted">
                        Verified Compliance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          MOBILE STICKY NAVIGATION (Table of Contents)
      ═══════════════════════════════════════════════ */}
      <div
        ref={dropdownRef}
        className="sticky top-[73px] z-30 lg:hidden border-b transition-all duration-300 w-full"
        style={{
          background: 'hsla(var(--bg) / 0.85)',
          backdropFilter: 'blur(12px)',
          borderColor: 'hsl(var(--border))',
        }}
      >
        <div className="px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'hsl(var(--ink-muted))' }}>
            Document Sections
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-200"
            style={{
              borderColor: 'hsl(var(--border-strong))',
              background: 'hsl(var(--surface))',
              color: 'hsl(var(--ink))',
            }}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle section selector menu"
          >
            <span className="max-w-[180px] truncate">{activeSectionTitle.replace(/^\d+\.\s*/, '')}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            className="absolute left-0 right-0 border-b shadow-xl max-h-80 overflow-y-auto"
            style={{
              background: 'hsl(var(--surface))',
              borderColor: 'hsl(var(--border))',
            }}
          >
            <div className="py-2 px-4 space-y-1">
              {sections.map((sec) => {
                const isCurrent = sec.id === activeSection;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-colors"
                    style={{
                      background: isCurrent ? 'hsl(var(--accent-soft))' : 'transparent',
                      color: isCurrent ? 'hsl(var(--accent))' : 'hsl(var(--ink-light))',
                    }}
                  >
                    <span>{sec.title}</span>
                    {isCurrent && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ═══════════════════════════════════════════════
          MAIN CONTENT & DESKTOP SIDEBAR GRID
      ═══════════════════════════════════════════════ */}
      <section className="section-pad pt-10 lg:pt-16 flex-1" style={{ borderTop: '1px solid hsl(var(--border))' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Desktop Sticky Table of Contents — Connected timeline line */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-[120px] pr-8">
              <div className="mb-6 pb-4 border-b" style={{ borderColor: 'hsl(var(--border))' }}>
                <h2 className="font-mono text-xs uppercase tracking-widest" style={{ color: 'hsl(var(--ink-muted))' }}>
                  Document Outline
                </h2>
              </div>
              <div className="relative">
                {/* Vertical Rail Connector Line */}
                <div 
                  className="absolute left-[7px] top-2.5 bottom-2.5 w-px hidden lg:block"
                  style={{ background: 'hsl(var(--border-strong))' }}
                />

                <nav className="flex flex-col gap-2 relative z-10" aria-label="Document outline">
                  {sections.map((sec) => {
                    const isCurrent = sec.id === activeSection;
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        onClick={(e) => scrollToSection(e, sec.id)}
                        className="group flex items-center gap-4 py-1.5 rounded-xl text-[13px] font-medium transition-all duration-300 relative"
                        style={{
                          color: isCurrent ? 'hsl(var(--accent))' : 'hsl(var(--ink-muted))',
                          paddingLeft: '24px',
                        }}
                      >
                        {/* Interactive bullet dot on the rail */}
                        <span
                          className="absolute left-[4px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 border"
                          style={{
                            background: isCurrent ? 'hsl(var(--accent))' : 'hsl(var(--surface))',
                            borderColor: isCurrent ? 'hsl(var(--accent))' : 'hsl(var(--border-strong))',
                            boxShadow: isCurrent ? '0 0 8px hsl(var(--accent) / 0.4)' : 'none',
                            transform: isCurrent ? 'translateY(-50%) scale(1.25)' : 'translateY(-50%) scale(1)',
                          }}
                        />
                        <span className="truncate transition-colors duration-300 group-hover:text-ink">{sec.title.replace(/^\d+\.\s*/, '')}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Readability-optimized Main Article Column */}
            <article className="lg:col-span-8 space-y-16">
              {sections.map((sec) => {
                // Parse number prefix dynamically to show beautifully
                const match = sec.title.match(/^(\d+)\.\s*(.*)$/);
                const displayTitle = match ? match[2] : sec.title;
                const displayNum = match ? `0${match[1]}` : '';

                return (
                  <section
                    key={sec.id}
                    id={sec.id}
                    className="scroll-mt-36 space-y-6"
                  >
                    {/* Monospace Number & Heading Group */}
                    <div className="space-y-1 pb-3 border-b" style={{ borderColor: 'hsl(var(--border))' }}>
                      {displayNum && (
                        <span className="font-mono text-[11px] text-accent tracking-wider font-semibold block">
                          {displayNum}
                        </span>
                      )}
                      <h3
                        className="text-heading font-semibold"
                        style={{
                          fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                          color: 'hsl(var(--ink))',
                        }}
                      >
                        {displayTitle}
                      </h3>
                    </div>

                    {/* High-level Premium Takeaway box with left border accent */}
                    {sec.keyTakeaway && (
                      <div
                        className="rounded-2xl p-5 border border-l-4"
                        style={{
                          background: 'hsl(var(--accent-soft))',
                          borderColor: 'hsl(var(--accent) / 0.15)',
                          borderLeftColor: 'hsl(var(--accent))',
                        }}
                      >
                        <span
                          className="font-mono text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-md inline-block mb-2"
                          style={{
                            background: 'hsl(var(--surface))',
                            color: 'hsl(var(--accent))',
                            border: '1px solid hsl(var(--accent) / 0.15)',
                          }}
                        >
                          Key Takeaway
                        </span>
                        <p className="text-sm font-medium leading-relaxed font-sans" style={{ color: 'hsl(var(--ink))' }}>
                          {sec.keyTakeaway}
                        </p>
                      </div>
                    )}

                    {/* Body paragraphs */}
                    <div className="space-y-4 font-body">
                      {sec.content.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-body text-base leading-relaxed text-ink-light"
                          style={{ color: 'hsl(var(--ink-light))' }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Bullet points if present */}
                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="space-y-3 pl-2 mt-4">
                        {sec.bullets.map((bullet, idx) => {
                          const [boldText, ...rest] = bullet.split(':');
                          return (
                            <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-ink-light">
                              {/* Checkmark custom icon */}
                              <span
                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                                style={{
                                  background: 'hsl(var(--accent-soft))',
                                  border: '1px solid hsl(var(--accent) / 0.1)',
                                }}
                              >
                                <Check className="w-3 h-3" style={{ color: 'hsl(var(--accent))' }} />
                              </span>
                              <span style={{ color: 'hsl(var(--ink-light))' }} className="font-body">
                                {rest.length > 0 ? (
                                  <>
                                    <strong style={{ color: 'hsl(var(--ink))' }} className="font-semibold">{boldText}:</strong>
                                    {rest.join(':')}
                                  </>
                                ) : (
                                  bullet
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </section>
                );
              })}
            </article>

          </div>
        </div>
      </section>
    </div>
  );
}
