'use client';

import { useState } from 'react';
import { journeyMilestones } from '../data/journeyData';
import { CheckCircle2, ChevronLeft, ChevronRight, LayoutGrid, List } from 'lucide-react';

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(journeyMilestones.length - 1);
  const [viewMode, setViewMode] = useState<'showcase' | 'stream'>('showcase');

  const activeItem = journeyMilestones[activeIndex];
  const ActiveIcon = activeItem.icon;

  const handleNext = () => {
    setActiveIndex((prev) => (prev < journeyMilestones.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : journeyMilestones.length - 1));
  };

  return (
    <div className="relative w-full">
      {/* Header & View Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 scroll-reveal">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: 'hsl(var(--accent))' }} />
            <span className="text-caption">EVOLUTION & MILESTONES</span>
          </div>
          <h2 className="text-display" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Our Journey & <span className="text-serif-accent">Growth Story</span>
          </h2>
        </div>

        {/* View mode toggle pills */}
        <div className="flex items-center gap-3">
          <div 
            className="p-1 rounded-xl flex items-center gap-1"
            style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
          >
            <button
              onClick={() => setViewMode('showcase')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'showcase' ? 'shadow-sm' : 'hover:text-ink'
              }`}
              style={{
                background: viewMode === 'showcase' ? 'hsl(var(--surface))' : 'transparent',
                color: viewMode === 'showcase' ? 'hsl(var(--ink))' : 'hsl(var(--ink-muted))',
                border: viewMode === 'showcase' ? '1px solid hsl(var(--border-strong))' : '1px solid transparent',
              }}
            >
              <LayoutGrid className="w-3.5 h-3.5" style={{ color: viewMode === 'showcase' ? 'hsl(var(--accent))' : 'currentColor' }} />
              <span>Interactive</span>
            </button>
            <button
              onClick={() => setViewMode('stream')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'stream' ? 'shadow-sm' : 'hover:text-ink'
              }`}
              style={{
                background: viewMode === 'stream' ? 'hsl(var(--surface))' : 'transparent',
                color: viewMode === 'stream' ? 'hsl(var(--ink))' : 'hsl(var(--ink-muted))',
                border: viewMode === 'stream' ? '1px solid hsl(var(--border-strong))' : '1px solid transparent',
              }}
            >
              <List className="w-3.5 h-3.5" style={{ color: viewMode === 'stream' ? 'hsl(var(--accent))' : 'currentColor' }} />
              <span>All Stream</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mode 1: Interactive Showcase View */}
      {viewMode === 'showcase' ? (
        <div className="space-y-8">
          {/* Year Navigation Rail */}
          <div className="relative px-2 py-4 rounded-2xl overflow-x-auto no-scrollbar" style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}>
            <div className="flex items-center justify-between min-w-[600px] gap-2 relative z-10 px-4">
              {journeyMilestones.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={item.year}
                    onClick={() => setActiveIndex(idx)}
                    className="relative flex flex-col items-center gap-2 group py-2 px-4 transition-all duration-300 focus:outline-none"
                  >
                    <span
                      className={`font-mono text-sm font-bold tracking-wider transition-all duration-300 ${
                        isActive ? 'scale-110' : 'opacity-60 group-hover:opacity-100'
                      }`}
                      style={{ color: isActive ? 'hsl(var(--accent))' : 'hsl(var(--ink-muted))' }}
                    >
                      {item.year}
                    </span>
                    <div
                      className={`w-3.5 h-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                        isActive ? 'ring-4' : 'group-hover:scale-125'
                      }`}
                      style={{
                        background: isActive ? 'hsl(var(--accent))' : 'hsl(var(--surface))',
                        border: `2px solid ${isActive ? 'hsl(var(--accent))' : 'hsl(var(--border-strong))'}`,
                      }}
                    >
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span 
                      className="text-[11px] font-medium tracking-tight whitespace-nowrap transition-colors"
                      style={{ color: isActive ? 'hsl(var(--ink))' : 'hsl(var(--ink-muted))' }}
                    >
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Connecting progress line */}
            <div
              className="absolute left-10 right-10 top-[38px] h-0.5 pointer-events-none z-0"
              style={{ background: 'hsl(var(--border))' }}
            >
              <div
                className="h-full transition-all duration-500 rounded-full"
                style={{
                  width: `${(activeIndex / (journeyMilestones.length - 1)) * 100}%`,
                  background: 'hsl(var(--accent))',
                }}
              />
            </div>
          </div>

          {/* Active Milestone Card */}
          <div
            className="p-8 sm:p-10 rounded-3xl transition-all duration-500"
            style={{
              background: 'hsl(var(--surface))',
              border: '1px solid hsl(var(--border-strong))',
              boxShadow: '0 12px 36px hsl(var(--ink) / 0.04)',
            }}
          >
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column - Meta & Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider"
                    style={{
                      background: 'hsl(var(--accent-soft))',
                      color: 'hsl(var(--accent))',
                      border: '1px solid hsl(var(--accent) / 0.3)',
                    }}
                  >
                    YEAR {activeItem.year}
                  </span>
                  <span className="text-caption font-medium uppercase tracking-wider">{activeItem.subtitle}</span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink mb-3">
                    {activeItem.title}
                  </h3>
                  <p className="text-body text-base leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                    {activeItem.description}
                  </p>
                </div>

                {/* Key Highlights list */}
                <div className="pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: 'hsl(var(--ink-muted))' }}>
                    Key Accomplishments
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {activeItem.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm" style={{ color: 'hsl(var(--ink))' }}>
                        <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: 'hsl(var(--accent))' }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeItem.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column - Metric Stat Box & Controls */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                <div
                  className="p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden"
                  style={{
                    background: 'hsl(var(--surface-warm))',
                    border: '1px solid hsl(var(--border))',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110"
                    style={{ background: 'hsl(var(--accent-soft))', border: '1px solid hsl(var(--accent) / 0.2)' }}
                  >
                    <ActiveIcon className="w-7 h-7" style={{ color: 'hsl(var(--accent))' }} />
                  </div>
                  <div
                    className="font-serif font-extrabold text-3xl sm:text-4xl tracking-tight mb-1"
                    style={{ color: 'hsl(var(--ink))' }}
                  >
                    {activeItem.metric}
                  </div>
                  <div className="text-caption">{activeItem.metricLabel}</div>
                </div>

                {/* Prev / Next controls */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    onClick={handlePrev}
                    className="btn-outline flex-1 flex items-center justify-center gap-2 py-3 text-xs"
                  >
                    <ChevronLeft className="w-4 h-4" /> Previous Stage
                  </button>
                  <button
                    onClick={handleNext}
                    className="btn-primary flex-1 flex items-center justify-center gap-2 py-3 text-xs"
                  >
                    Next Stage <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mode 2: Stream View */
        <div className="relative border-l-2 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8" style={{ borderColor: 'hsl(var(--accent) / 0.3)' }}>
          {journeyMilestones.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.year} className="relative group scroll-reveal">
                {/* Node dot on line */}
                <div
                  className="absolute -left-[31px] sm:-left-[47px] top-5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 z-10"
                  style={{
                    background: 'hsl(var(--surface))',
                    border: '2px solid hsl(var(--accent))',
                    boxShadow: '0 0 0 4px hsl(var(--accent-soft))',
                  }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: 'hsl(var(--accent))' }} />
                </div>

                {/* Card */}
                <div
                  className="p-6 sm:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'hsl(var(--surface))',
                    border: '1px solid hsl(var(--border))',
                    boxShadow: '0 4px 20px hsl(var(--ink) / 0.03)',
                  }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span
                        className="px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider"
                        style={{
                          background: 'hsl(var(--accent-soft))',
                          color: 'hsl(var(--accent))',
                          border: '1px solid hsl(var(--accent) / 0.3)',
                        }}
                      >
                        {item.year}
                      </span>
                      <h3 className="text-subhead font-bold text-lg" style={{ color: 'hsl(var(--ink))' }}>
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="tag text-xs">{item.metric}</span>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
                      >
                        <Icon className="w-4 h-4" style={{ color: 'hsl(var(--accent))' }} />
                      </div>
                    </div>
                  </div>

                  <p className="text-body text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--ink-light))' }}>
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2.5 py-0.5 rounded" style={{ background: 'hsl(var(--surface-warm))', color: 'hsl(var(--ink-muted))' }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
