'use client';

import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideIn' | 'fadeInUp' | 'scaleIn' | 'left' | 'right';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  stagger?: boolean;
}

export const ScrollAnimation = ({
  children,
  className = '',
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  stagger = false
}: ScrollAnimationProps) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, delay, threshold, rootMargin]);

  const getAnimationClass = () => {
    if (!isVisible) return '';
    
    const baseClass = stagger ? 'stagger-children.visible' : '';
    
    switch (animation) {
      case 'fadeIn':
        return baseClass || 'animate-fadeIn';
      case 'slideIn':
        return baseClass || 'animate-slideIn';
      case 'fadeInUp':
        return baseClass || 'animate-fadeInUp';
      case 'scaleIn':
        return baseClass || 'animate-scaleIn';
      case 'left':
        return 'scroll-animate-left visible';
      case 'right':
        return 'scroll-animate-right visible';
      default:
        return baseClass || 'animate-fadeIn';
    }
  };

  const getInitialClass = () => {
    if (isVisible) return '';
    
    switch (animation) {
      case 'left':
        return 'scroll-animate-left';
      case 'right':
        return 'scroll-animate-right';
      case 'scaleIn':
        return 'scroll-animate-scale';
      default:
        return 'scroll-animate';
    }
  };

  return (
    <div
      ref={setRef}
      className={`${getInitialClass()} ${getAnimationClass()} ${stagger ? 'stagger-children' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const AnimatedSection = ({ 
  children, 
  className = '',
  animation = 'fadeIn',
  delay = 0 
}: Pick<ScrollAnimationProps, 'children' | 'className' | 'animation' | 'delay'>) => {
  return (
    <section className={`py-24 ${className}`}>
      <ScrollAnimation animation={animation} delay={delay}>
        {children}
      </ScrollAnimation>
    </section>
  );
};
