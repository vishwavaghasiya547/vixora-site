'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import StartProjectModal from './StartProjectModal';
import VixoraLogo from './ui/VixoraLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(href.replace('/#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-4'}`}
        style={{
          background: 'hsl(var(--bg))',
          borderBottom: '1px solid hsl(var(--border))',
          boxShadow: isScrolled ? '0 1px 12px hsla(0,0%,0%,0.04)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={(e) => handleNavClick(e, '/')}>
              <VixoraLogo size="sm" />
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 rounded-lg text-[13px] font-mono uppercase tracking-wider transition-all duration-200"
                  style={{
                    color: pathname === item.href ? 'hsl(var(--accent))' : 'hsl(var(--ink-muted))',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'hsl(var(--ink))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = pathname === item.href ? 'hsl(var(--accent))' : 'hsl(var(--ink-muted))';
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <button className="btn-primary" onClick={() => setIsModalOpen(true)} id="navbar-get-started-btn">
                Start a Project
              </button>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              style={{ color: 'hsl(var(--ink-light))' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {isOpen && (
            <div className="lg:hidden mt-4 pb-5 pt-4" style={{ borderTop: '1px solid hsl(var(--border))' }}>
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { handleNavClick(e, item.href); setIsOpen(false); }}
                    className="px-4 py-3 rounded-lg text-sm font-medium"
                    style={{ color: 'hsl(var(--ink-light))' }}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="btn-primary w-full mt-3" onClick={() => { setIsOpen(false); setIsModalOpen(true); }} id="mobile-get-started-btn">
                  Start a Project
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <StartProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
