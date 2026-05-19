'use client';

import { useState, useEffect } from 'react';
import { X, ArrowRight, Loader2 } from 'lucide-react';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = ['Web Development', 'AI & Machine Learning', 'SaaS Platform', 'UI/UX Design', 'Commerce', 'Other'];
const budgets = ['Under $10k', '$10k - $25k', '$25k - $50k', '$50k+', 'Not sure'];

const StartProjectModal = ({ isOpen, onClose }: StartProjectModalProps) => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', service: '', budget: '', details: '' });

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) {
      setTimeout(() => { setStep(1); setStatus('idle'); setFormData({ name: '', email: '', service: '', budget: '', details: '' }); }, 300);
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (formData.name && formData.email) setStep(2);
      return;
    }
    setStatus('loading');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('success');
  };

  if (!isOpen) return null;

  const inputClasses = "w-full px-0 py-3 text-lg bg-transparent transition-all outline-none";
  const inputStyle = { borderBottom: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))' };
  const labelClasses = "block text-xs font-mono uppercase tracking-wider mb-1";
  const labelStyle = { color: 'hsl(var(--ink-muted))' };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog">
      <div className="absolute inset-0 backdrop-blur-md transition-opacity" style={{ background: 'hsl(var(--bg) / 0.8)' }} onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-surface shadow-2xl overflow-hidden animate-modalIn flex flex-col"
        style={{ height: '85vh', maxHeight: '800px', borderRadius: '1.25rem' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 shrink-0" style={{ borderBottom: '1px solid hsl(var(--border))' }}>
          <div>
            <h2 className="text-2xl font-serif font-bold" style={{ color: 'hsl(var(--ink))' }}>Start a Project</h2>
            <p className="text-sm mt-1" style={{ color: 'hsl(var(--ink-muted))' }}>
              {status === 'success' ? 'Request Received' : `Step ${step} of 2`}
            </p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'hsl(var(--surface-warm))', color: 'hsl(var(--ink))' }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-reveal-up">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2" style={{ background: 'hsl(var(--accent-soft))' }}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M10 20L16.5 26.5L30 13" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-display" style={{ fontSize: '2.5rem' }}>Thank you, {formData.name.split(' ')[0]}.</h3>
              <p className="text-body text-lg max-w-md">
                We&apos;ve received your project details. One of our partners will review it and get back to you within 24 hours.
              </p>
              <button onClick={onClose} className="btn-primary mt-4">Return to site</button>
            </div>
          ) : (
            <form id="project-form" onSubmit={handleSubmit} className="space-y-8 animate-reveal-up">
              {step === 1 ? (
                <div className="space-y-8">
                  <div>
                    <label htmlFor="modal-name" className={labelClasses} style={labelStyle}>Full Name</label>
                    <input id="modal-name" name="name" type="text" required value={formData.name} onChange={handleChange}
                      placeholder="Jane Doe" className={inputClasses} style={inputStyle} autoFocus
                    />
                  </div>
                  <div>
                    <label htmlFor="modal-email" className={labelClasses} style={labelStyle}>Work Email</label>
                    <input id="modal-email" name="email" type="email" required value={formData.email} onChange={handleChange}
                      placeholder="jane@company.com" className={inputClasses} style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClasses} style={labelStyle}>What do you need?</label>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {services.map(s => (
                        <button key={s} type="button" onClick={() => setFormData(prev => ({ ...prev, service: s }))}
                          className="px-4 py-2.5 rounded-full text-sm transition-all"
                          style={{
                            background: formData.service === s ? 'hsl(var(--ink))' : 'hsl(var(--surface-warm))',
                            color: formData.service === s ? 'hsl(var(--surface))' : 'hsl(var(--ink-light))',
                            border: formData.service === s ? '1px solid hsl(var(--ink))' : '1px solid hsl(var(--border))',
                          }}
                        >{s}</button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-8 animate-reveal-right">
                  <div>
                    <label className={labelClasses} style={labelStyle}>Estimated Budget</label>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {budgets.map(b => (
                        <button key={b} type="button" onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                          className="px-4 py-2.5 rounded-full text-sm transition-all"
                          style={{
                            background: formData.budget === b ? 'hsl(var(--ink))' : 'hsl(var(--surface-warm))',
                            color: formData.budget === b ? 'hsl(var(--surface))' : 'hsl(var(--ink-light))',
                            border: formData.budget === b ? '1px solid hsl(var(--ink))' : '1px solid hsl(var(--border))',
                          }}
                        >{b}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="modal-details" className={labelClasses} style={labelStyle}>Project Details</label>
                    <textarea id="modal-details" name="details" rows={4} required value={formData.details} onChange={handleChange}
                      placeholder="Tell us about your goals, timeline, and challenges..." className={inputClasses} style={{ ...inputStyle, resize: 'none' }}
                    />
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Footer */}
        {status !== 'success' && (
          <div className="p-6 sm:p-8 shrink-0 flex items-center justify-between" style={{ background: 'hsl(var(--bg))', borderTop: '1px solid hsl(var(--border))' }}>
            {step === 2 ? (
              <button type="button" onClick={() => setStep(1)} className="btn-ghost" style={{ paddingLeft: 0 }}>Back</button>
            ) : <div />}

            <button form="project-form" type="submit" disabled={status === 'loading'}
              className="btn-primary flex items-center gap-2"
            >
              {status === 'loading' ? (
                <><Loader2 className="w-4 h-4 animate-spin" /><span>Sending...</span></>
              ) : step === 1 ? (
                <><span>Next Step</span><ArrowRight className="w-4 h-4" /></>
              ) : (
                <><span>Submit Request</span><ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartProjectModal;
