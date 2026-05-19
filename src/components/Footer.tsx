'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import VixoraLogo from './ui/VixoraLogo';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/#services' },
      { name: 'Work', href: '/#work' },
      { name: 'Contact', href: '/#contact' },
    ],
    social: [
      { name: 'Twitter', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'Dribbble', href: '#' },
      { name: 'GitHub', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="relative" style={{ background: 'hsl(var(--bg))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <VixoraLogo size="md" />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm mb-8" style={{ color: 'hsl(var(--ink-light))' }}>
              We build digital products that matter. A studio obsessed with craft, driven by outcomes.
            </p>
            <div className="flex items-center gap-2">
              <div className="status-live" />
              <span className="text-caption">Taking on new projects for Q3</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-mono uppercase tracking-wider mb-6" style={{ color: 'hsl(var(--ink-muted))' }}>{title}</h4>
                <ul className="space-y-3">
                  {links.map(link => (
                    <li key={link.name}>
                      <Link href={link.href}
                        className="text-sm font-medium transition-colors flex items-center gap-1 group w-max"
                        style={{ color: 'hsl(var(--ink))' }}
                        onMouseEnter={e => { e.currentTarget.style.color = 'hsl(var(--accent))'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = 'hsl(var(--ink))'; }}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderTop: '1px solid hsl(var(--border))' }}>
          <p className="text-xs font-mono uppercase tracking-wider" style={{ color: 'hsl(var(--ink-muted))' }}>
            © {new Date().getFullYear()} Vixora Studio. All rights reserved.
          </p>
          <div className="text-xs font-mono tracking-wider" style={{ color: 'hsl(var(--ink-muted))' }}>
            SAN FRANCISCO — LONDON
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
