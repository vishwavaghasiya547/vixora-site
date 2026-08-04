'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Loader2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1400));
    setStatus('success');
    setFormData({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-pad relative" style={{ background: 'hsl(var(--surface))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6 scroll-reveal">
          <span className="text-caption">Connect</span>
          <div className="h-px flex-1" style={{ background: 'hsl(var(--border))' }} />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 scroll-reveal delay-100">
            <h2 className="text-display mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Let&apos;s start a{' '}
              <span className="text-serif-accent">dialogue</span>
            </h2>
            <p className="text-body mb-10 max-w-md">
              Whether you have a specific project in mind or just want to explore possibilities, our team is ready to talk.
            </p>

            <div className="space-y-6 pt-6 mb-10" style={{ borderTop: '1px solid hsl(var(--border))' }}>
              <div>
                <p className="text-caption mb-1">Email</p>
                <a href="mailto:hello@vixora.com" className="text-lg font-medium hover:text-accent transition-colors" style={{ color: 'hsl(var(--ink))' }}>hello@vixora.com</a>
              </div>
              <div>
                <p className="text-caption mb-1">Phone</p>
                <p className="text-lg font-medium" style={{ color: 'hsl(var(--ink))' }}>+91 98765 43210</p>
              </div>
              <div>
                <p className="text-caption mb-1">Location</p>
                <p className="text-lg font-medium" style={{ color: 'hsl(var(--ink))' }}>India (Serving Clients Worldwide)</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-caption mb-3">Jump To</p>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Our Services', href: '/#services' },
                  { name: 'Selected Work', href: '/#work' },
                  { name: 'Our Process', href: '/#process' },
                ].map((l, i) => (
                  <Link key={i} href={l.href} className="group flex items-center justify-between py-2 transition-colors duration-300"
                    style={{ borderBottom: '1px solid hsl(var(--border))' }}
                  >
                    <span className="text-sm font-medium group-hover:text-accent transition-colors" style={{ color: 'hsl(var(--ink-light))' }}>{l.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" style={{ color: 'hsl(var(--accent))' }} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 scroll-reveal delay-200">
            <div className="card-flat p-8 lg:p-10">
              <h3 className="text-heading text-xl mb-6">Send an inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'hsl(var(--ink-muted))' }}>Name *</label>
                    <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-offset-1"
                      style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))', '--tw-ring-color': 'hsl(var(--accent))' } as any}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'hsl(var(--ink-muted))' }}>Email *</label>
                    <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-offset-1"
                      style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))', '--tw-ring-color': 'hsl(var(--accent))' } as any}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'hsl(var(--ink-muted))' }}>Company <span style={{ color: 'hsl(var(--border-strong))' }}>(optional)</span></label>
                  <input id="company" name="company" type="text" value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm bg-white transition-all outline-none focus:ring-2 focus:ring-offset-1"
                    style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))', '--tw-ring-color': 'hsl(var(--accent))' } as any}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider mb-2" style={{ color: 'hsl(var(--ink-muted))' }}>Message *</label>
                  <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg text-sm bg-white transition-all outline-none resize-none focus:ring-2 focus:ring-offset-1"
                    style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))', '--tw-ring-color': 'hsl(var(--accent))' } as any}
                  />
                </div>
                <button type="submit" disabled={status !== 'idle'}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
                  ) : status === 'success' ? (
                    <><CheckCircle2 className="w-4 h-4" /><span>Sent successfully</span></>
                  ) : (
                    <><span>Send Message</span><ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
