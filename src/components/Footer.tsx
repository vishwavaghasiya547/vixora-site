'use client';

import { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowUp, 
  Check, 
  Send 
} from 'lucide-react';
import Link from 'next/link';
import VixoraLogo from './ui/VixoraLogo';

const footerLinks = {
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'AI & Machine Learning', href: '/services/ai-solutions' },
    { name: 'SaaS Platform Architecture', href: '/services/saas-architecture' },
    { name: 'UI/UX Product Design', href: '/services/ui-ux-design' },
    { name: 'E-Commerce & Shopify Plus', href: '/services/e-commerce' },
  ],
  company: [
    { name: 'About Vixora', href: '/about' },
    { name: 'Selected Work', href: '/#work' },
    { name: 'Technology Stack', href: '/technology' },
    { name: 'Our Process', href: '/#process' },
    { name: 'Contact Studio', href: '/#contact' },
  ],
  social: [
    { name: 'Twitter / X', href: 'https://twitter.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'Dribbble', href: 'https://dribbble.com' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ],
};

const SocialIcons = {
  Twitter: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.64a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/>
    </svg>
  ),
  GitHub: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/>
    </svg>
  ),
  Dribbble: () => (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm6.75 6.34a8.47 8.47 0 0 1 2.22 5.58 7.37 7.37 0 0 0-5.71-.85 18.24 18.24 0 0 0-1.58-3.08 17.5 17.5 0 0 0 5.07-1.65zM12 3.52c2.18 0 4.18.82 5.69 2.18a16.03 16.03 0 0 1-4.66 1.5 19.34 19.34 0 0 0-3.32-4.04 8.5 8.5 0 0 1 2.29-.36zM7.74 4.29a20.88 20.88 0 0 1 3.4 4.11 16.27 16.27 0 0 1-6.72 1.48 8.44 8.44 0 0 1 3.32-5.59zM3.52 12v-.22a17.75 17.75 0 0 0 7.33-1.61 19.67 19.67 0 0 1 1.63 3.19 12.06 12.06 0 0 0-7.39 3.82A8.47 8.47 0 0 1 3.52 12zm8.48 8.48a8.44 8.44 0 0 1-5.06-1.68 10.58 10.58 0 0 1 6.83-3.6 15.65 15.65 0 0 1 1.7 4.96A8.47 8.47 0 0 1 12 20.48zm3.06-.69a17.15 17.15 0 0 0-1.55-4.5 5.86 5.86 0 0 1 4.79.67 8.49 8.49 0 0 1-3.24 3.83z"/>
    </svg>
  )
};

const socialList = [
  { name: 'Twitter', Icon: SocialIcons.Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', Icon: SocialIcons.LinkedIn, href: 'https://linkedin.com' },
  { name: 'GitHub', Icon: SocialIcons.GitHub, href: 'https://github.com' },
  { name: 'Dribbble', Icon: SocialIcons.Dribbble, href: 'https://dribbble.com' },
];

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative overflow-hidden text-white pt-16 sm:pt-20 pb-12" 
      style={{ 
        background: '#090d16',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Subtle Ambient Radial Mesh */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full blur-[180px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Unified Single-Grid Content */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Brand & Integrated Newsletter Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <VixoraLogo size="md" textColor="#ffffff" />
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed max-w-md opacity-70 font-body">
              We build digital products that matter. A studio obsessed with architectural craft, elegant design systems, and business outcomes.
            </p>

            {/* Integrated Newsletter Form Box */}
            <div 
              className="p-5 rounded-2xl space-y-3"
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255, 255, 255, 0.08)' 
              }}
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-accent">
                  Newsletter Intake
                </span>
                <p className="text-xs font-medium text-white/90">
                  Join 5,000+ tech leaders receiving Vixora insights.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                <input 
                  type="email" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter work email..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs outline-none transition-all focus:border-accent"
                  style={{
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#fff',
                  }}
                />
                <button 
                  type="submit"
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all flex items-center justify-center gap-1.5 shrink-0 hover:scale-[1.03]"
                  style={{ 
                    background: 'hsl(var(--accent))', 
                    color: '#fff',
                    boxShadow: '0 4px 15px hsl(var(--accent) / 0.3)'
                  }}
                >
                  <span>{subscribed ? 'Done!' : 'Join'}</span>
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </form>
            </div>

            {/* Availability Indicator & Social Icons Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.04)', 
                  border: '1px solid rgba(255, 255, 255, 0.08)' 
                }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-caption text-white/90 font-semibold" style={{ fontSize: '0.65rem' }}>
                  Taking on projects for Q3/Q4
                </span>
              </div>

              <div className="flex items-center gap-2">
                {socialList.map((soc) => {
                  const IconComponent = soc.Icon;
                  return (
                    <a
                      key={soc.name}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:border-white/30"
                      style={{ 
                        background: 'rgba(255, 255, 255, 0.04)', 
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.8)' 
                      }}
                      aria-label={soc.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Navigation Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-mono uppercase tracking-widest mb-4 font-semibold text-white/50">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 group text-white/80 hover:text-white"
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform -translate-x-1 group-hover:translate-x-0 text-accent" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Copyright & Scroll Trigger */}
        <div 
          className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
        >
          <p className="text-xs font-mono uppercase tracking-wider text-white/40">
            © {new Date().getFullYear()} Vixora Studio Inc. All rights reserved.
          </p>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            style={{ 
              border: '1px solid rgba(255, 255, 255, 0.1)', 
              color: 'rgba(255, 255, 255, 0.8)',
              background: 'rgba(255, 255, 255, 0.04)' 
            }}
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
