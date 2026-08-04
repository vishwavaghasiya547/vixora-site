'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Maps section element IDs to the nav item href they correspond to.
 * Order matters — sections higher in the list take lower priority
 * (the last fully-intersecting section wins).
 */
const SECTION_MAP: Record<string, string> = {
  home: '/',
  about: '/about',
  services: '/#services',
  work: '/#work',
  contact: '/#contact',
};

/**
 * Derives the "active" nav href from the current URL hash/pathname.
 * Falls back to '/' when on the home page with no hash.
 */
function getActiveSectionFromURL(pathname: string): string {
  if (typeof window === 'undefined') return pathname;

  const hash = window.location.hash; // e.g. '#services'
  if (hash) {
    const sectionId = hash.replace('#', '');
    return SECTION_MAP[sectionId] ?? pathname;
  }

  // On /about or /technology pages (no hash), highlight respective nav item
  if (pathname === '/about') return '/about';
  if (pathname.startsWith('/technology')) return '/technology';
  if (pathname.startsWith('/services')) return '/services';

  // Default to Home for root path
  return '/';
}

/**
 * useActiveSection
 *
 * Tracks which nav item should be considered "active" by:
 * 1. Reading the current URL hash/pathname on initial load & back/forward nav
 * 2. Observing section elements via IntersectionObserver during scroll
 *
 * Returns the href string of the currently active nav item.
 */
export function useActiveSection(): string {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState<string>(() =>
    getActiveSectionFromURL(pathname)
  );

  // Sync with browser history (handles direct loads, back/forward)
  useEffect(() => {
    const syncFromURL = () => setActiveHref(getActiveSectionFromURL(pathname));
    syncFromURL();

    window.addEventListener('hashchange', syncFromURL);
    window.addEventListener('popstate', syncFromURL);
    return () => {
      window.removeEventListener('hashchange', syncFromURL);
      window.removeEventListener('popstate', syncFromURL);
    };
  }, [pathname]);

  // Observe all mapped section elements (only on home page where they exist)
  useEffect(() => {
    if (pathname !== '/') return;

    const sectionIds = Object.keys(SECTION_MAP);
    const elements: HTMLElement[] = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Track ratio of each section in view
    const ratioMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratioMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Pick the section with the highest intersection ratio
        let bestId = '';
        let bestRatio = -1;
        ratioMap.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestId && bestRatio > 0) {
          const href = SECTION_MAP[bestId];
          if (href) setActiveHref(href);
        }
      },
      {
        // Use multiple thresholds for fine-grained tracking
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // Offset: top of viewport minus navbar height so section
        // becomes "active" when it reaches just below the navbar
        rootMargin: '-64px 0px -35% 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return activeHref;
}
