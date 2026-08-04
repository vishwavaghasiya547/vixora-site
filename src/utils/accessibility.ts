// Accessibility utilities

export const manageFocus = (element: HTMLElement | null) => {
  if (element) {
    element.focus();
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstFocusable = focusableElements[0] as HTMLElement;
  const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus();
          e.preventDefault();
        }
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

export const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

export const skipToContent = () => {
  const mainContent = document.querySelector('main') || document.querySelector('[role="main"]');
  if (mainContent) {
    manageFocus(mainContent as HTMLElement);
  }
};

// Keyboard navigation utilities
export const handleKeyboardNavigation = (
  e: KeyboardEvent,
  actions: {
    onEnter?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
  }
) => {
  switch (e.key) {
    case 'Enter':
    case ' ':
      e.preventDefault();
      actions.onEnter?.();
      break;
    case 'Escape':
      actions.onEscape?.();
      break;
    case 'ArrowUp':
      e.preventDefault();
      actions.onArrowUp?.();
      break;
    case 'ArrowDown':
      e.preventDefault();
      actions.onArrowDown?.();
      break;
    case 'ArrowLeft':
      e.preventDefault();
      actions.onArrowLeft?.();
      break;
    case 'ArrowRight':
      e.preventDefault();
      actions.onArrowRight?.();
      break;
  }
};

// Color contrast checker (basic implementation)
export const getContrastRatio = (color1: string, color2: string): number => {
  // This is a simplified version - in production, use a proper library
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;
    
    const [r, g, b] = rgb.map(Number);
    const [rs, gs, bs] = [r, g, b].map(c => {
      c = c / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
};

export const hasGoodContrast = (foreground: string, background: string): boolean => {
  return getContrastRatio(foreground, background) >= 4.5; // WCAG AA standard
};
