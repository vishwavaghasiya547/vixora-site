'use client';

import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    // Intersection Observer to trigger CSS animations when elements scroll into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Only animate once
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element enters
    });

    // Observe initial elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    // Mutation observer for dynamically rendered components
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains('scroll-reveal')) observer.observe(node);
            const children = node.querySelectorAll('.scroll-reveal');
            children.forEach(child => observer.observe(child));
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
};

export default ScrollReveal;
