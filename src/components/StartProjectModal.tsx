'use client';

import { useState, useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Loader2, 
  User, 
  Mail, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  FileText, 
  CheckCircle2,
  DollarSign
} from 'lucide-react';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  { id: 'web-dev', label: 'Web Development', desc: 'Custom apps & high-perf web' },
  { id: 'ai-ml', label: 'AI & Machine Learning', desc: 'Custom AI models & workflows' },
  { id: 'saas', label: 'SaaS Platform', desc: 'Scalable cloud software' },
  { id: 'ui-ux', label: 'UI/UX Design', desc: 'Bespoke design systems' },
  { id: 'commerce', label: 'Commerce', desc: 'Shopify Plus & headless e-comm' },
  { id: 'other', label: 'Other Special Request', desc: 'Custom tech consulting' },
];

const budgets = [
  { label: 'Under $10k', tag: 'Starter' },
  { label: '$10k - $25k', tag: 'Growth' },
  { label: '$25k - $50k', tag: 'Scale' },
  { label: '$50k+', tag: 'Enterprise' },
  { label: 'Not sure', tag: 'Flexible' },
];

const StartProjectModal = ({ isOpen, onClose }: StartProjectModalProps) => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    service: 'Web Development', 
    budget: '$25k - $50k', 
    details: '' 
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (!isOpen) {
      setTimeout(() => { 
        setStep(1); 
        setStatus('idle'); 
        setFormData({ name: '', email: '', service: 'Web Development', budget: '$25k - $50k', details: '' }); 
      }, 300);
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
    await new Promise(r => setTimeout(r, 1400));
    setStatus('success');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 backdrop-blur-md transition-opacity duration-300" 
        style={{ background: 'hsl(var(--ink) / 0.65)' }} 
        onClick={onClose} 
      />

      {/* Ambient background glow behind modal */}
      <div 
        className="fixed w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-30 z-[101]"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
      />

      {/* Modal Container */}
      <div 
        className="relative z-[102] w-full max-w-2xl bg-surface shadow-2xl rounded-2xl overflow-hidden animate-modalIn flex flex-col my-auto transition-all"
        style={{ 
          background: 'hsl(var(--surface))',
          border: '1px solid hsl(var(--border-strong))',
          maxHeight: '90vh'
        }}
      >
        {/* Top Header */}
        <div 
          className="p-6 sm:p-8 shrink-0 relative"
          style={{ 
            background: 'hsl(var(--surface-warm))', 
            borderBottom: '1px solid hsl(var(--border))' 
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full" style={{ background: 'hsl(var(--accent))' }} />
                <span className="text-caption" style={{ fontSize: '0.65rem' }}>
                  {status === 'success' ? 'Confirmation' : `Step ${step} of 2 • Project Intake`}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-ink" style={{ color: 'hsl(var(--ink))' }}>
                {status === 'success' ? 'Project Submitted' : 'Start Your Project'}
              </h2>
            </div>

            <button 
              onClick={onClose} 
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:rotate-90 duration-200"
              style={{ background: 'hsl(var(--surface))', border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))' }}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Step Progress Line Bar */}
          {status !== 'success' && (
            <div className="mt-5">
              <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'hsl(var(--border))' }}>
                <div 
                  className="h-full transition-all duration-500 rounded-full"
                  style={{ 
                    width: step === 1 ? '50%' : '100%',
                    background: 'hsl(var(--accent))' 
                  }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono mt-2" style={{ color: 'hsl(var(--ink-muted))' }}>
                <span className={step >= 1 ? 'font-semibold text-accent' : ''}>1. Info & Service</span>
                <span className={step === 2 ? 'font-semibold text-accent' : ''}>2. Scope & Budget</span>
              </div>
            </div>
          )}
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {status === 'success' ? (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-6 animate-reveal-up">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mb-2 shadow-lg" 
                style={{ 
                  background: 'hsl(var(--accent-soft))', 
                  border: '2px solid hsl(var(--accent) / 0.4)' 
                }}
              >
                <CheckCircle2 className="w-10 h-10" style={{ color: 'hsl(var(--accent))' }} />
              </div>
              <div>
                <h3 className="text-display mb-2" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                  Thank you, {formData.name.split(' ')[0]}!
                </h3>
                <p className="text-body max-w-md mx-auto text-sm leading-relaxed" style={{ color: 'hsl(var(--ink-light))' }}>
                  We&apos;ve received your request for <strong className="text-ink font-semibold">{formData.service}</strong>. A partner from Vixora will review your requirements and follow up within <strong className="text-accent font-semibold">24 hours</strong>.
                </p>
              </div>

              {/* Summary recap box */}
              <div 
                className="w-full max-w-md p-4 rounded-xl text-left text-xs font-mono space-y-2"
                style={{ background: 'hsl(var(--surface-warm))', border: '1px solid hsl(var(--border))' }}
              >
                <div className="flex justify-between"><span className="text-ink-muted">Client:</span> <span className="font-semibold text-ink">{formData.name}</span></div>
                <div className="flex justify-between"><span className="text-ink-muted">Email:</span> <span className="font-semibold text-ink">{formData.email}</span></div>
                <div className="flex justify-between"><span className="text-ink-muted">Target Budget:</span> <span className="font-semibold text-accent">{formData.budget}</span></div>
              </div>

              <button 
                onClick={onClose} 
                className="btn-primary mt-4"
              >
                Return to Site
              </button>
            </div>
          ) : (
            <form id="project-form" onSubmit={handleSubmit} className="space-y-6">
              {step === 1 ? (
                <div className="space-y-6 animate-reveal-up">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="modal-name" className="block text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'hsl(var(--ink-muted))' }}>
                      Full Name *
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 w-4 h-4" style={{ color: 'hsl(var(--ink-muted))' }} />
                      <input 
                        id="modal-name" 
                        name="name" 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={handleChange}
                        placeholder="Jane Doe" 
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm transition-all outline-none"
                        style={{ 
                          background: 'hsl(var(--surface-warm))', 
                          border: '1px solid hsl(var(--border))', 
                          color: 'hsl(var(--ink))' 
                        }} 
                        autoFocus
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="modal-email" className="block text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'hsl(var(--ink-muted))' }}>
                      Work Email *
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3.5 w-4 h-4" style={{ color: 'hsl(var(--ink-muted))' }} />
                      <input 
                        id="modal-email" 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={handleChange}
                        placeholder="jane@company.com" 
                        className="w-full pl-10 pr-4 py-3 rounded-xl text-sm transition-all outline-none"
                        style={{ 
                          background: 'hsl(var(--surface-warm))', 
                          border: '1px solid hsl(var(--border))', 
                          color: 'hsl(var(--ink))' 
                        }}
                      />
                    </div>
                  </div>

                  {/* Service Need Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-3 font-semibold" style={{ color: 'hsl(var(--ink-muted))' }}>
                      Select Primary Service *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {services.map(s => {
                        const isSelected = formData.service === s.label;
                        return (
                          <button 
                            key={s.id} 
                            type="button" 
                            onClick={() => setFormData(prev => ({ ...prev, service: s.label }))}
                            className="p-3.5 rounded-xl text-left transition-all duration-200 flex items-start justify-between group"
                            style={{
                              background: isSelected ? 'hsl(var(--accent-soft))' : 'hsl(var(--surface-warm))',
                              border: isSelected ? '1.5px solid hsl(var(--accent))' : '1px solid hsl(var(--border))',
                            }}
                          >
                            <div>
                              <div className="font-semibold text-xs transition-colors" style={{ color: isSelected ? 'hsl(var(--accent))' : 'hsl(var(--ink))' }}>
                                {s.label}
                              </div>
                              <div className="text-[11px] text-ink-muted mt-0.5">
                                {s.desc}
                              </div>
                            </div>
                            {isSelected && (
                              <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'hsl(var(--accent))' }} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 animate-reveal-up">
                  {/* Budget Selection */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider mb-3 font-semibold" style={{ color: 'hsl(var(--ink-muted))' }}>
                      Estimated Budget Range *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {budgets.map(b => {
                        const isSelected = formData.budget === b.label;
                        return (
                          <button 
                            key={b.label} 
                            type="button" 
                            onClick={() => setFormData(prev => ({ ...prev, budget: b.label }))}
                            className="p-3 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-center gap-1"
                            style={{
                              background: isSelected ? 'hsl(var(--ink))' : 'hsl(var(--surface-warm))',
                              color: isSelected ? 'hsl(var(--bg))' : 'hsl(var(--ink))',
                              border: isSelected ? '1.5px solid hsl(var(--ink))' : '1px solid hsl(var(--border))',
                            }}
                          >
                            <span className="text-xs font-bold font-mono">{b.label}</span>
                            <span 
                              className="text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-mono"
                              style={{ 
                                background: isSelected ? 'hsl(var(--accent))' : 'hsl(var(--border))',
                                color: isSelected ? '#fff' : 'hsl(var(--ink-muted))'
                              }}
                            >
                              {b.tag}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details Input */}
                  <div>
                    <label htmlFor="modal-details" className="block text-xs font-mono uppercase tracking-wider mb-2 font-semibold" style={{ color: 'hsl(var(--ink-muted))' }}>
                      Project Scope & Goals *
                    </label>
                    <div className="relative">
                      <textarea 
                        id="modal-details" 
                        name="details" 
                        rows={4} 
                        required 
                        value={formData.details} 
                        onChange={handleChange}
                        placeholder="Tell us about your project goals, timelines, key features, and target outcomes..." 
                        className="w-full p-4 rounded-xl text-sm transition-all outline-none"
                        style={{ 
                          background: 'hsl(var(--surface-warm))', 
                          border: '1px solid hsl(var(--border))', 
                          color: 'hsl(var(--ink))',
                          resize: 'none'
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Footer Actions & Trust Indicator */}
        {status !== 'success' && (
          <div 
            className="p-4 sm:p-6 shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4" 
            style={{ 
              background: 'hsl(var(--surface-warm))', 
              borderTop: '1px solid hsl(var(--border))' 
            }}
          >
            {/* Reassurance text */}
            <div className="flex items-center gap-3 text-xs font-mono text-ink-muted">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-accent" /> 24h Response
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" /> Strict NDA
              </span>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              {step === 2 && (
                <button 
                  type="button" 
                  onClick={() => setStep(1)} 
                  className="px-4 py-2.5 text-xs font-semibold font-mono rounded-lg flex items-center gap-1.5 transition-all"
                  style={{ border: '1px solid hsl(var(--border))', color: 'hsl(var(--ink))', background: 'hsl(var(--surface))' }}
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
              )}

              <button 
                form="project-form" 
                type="submit" 
                disabled={status === 'loading'}
                className="btn-primary flex items-center justify-center gap-2 py-3 px-6 text-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : step === 1 ? (
                  <>
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>Submit Request</span>
                    <Sparkles className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartProjectModal;
