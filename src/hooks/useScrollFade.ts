import { useState, useEffect, useRef } from 'react';

interface ScrollFadeOptions {
  threshold?: number; // Distance from top of viewport to start fading
  fadeDistance?: number; // Distance over which to fade
  staggerDelay?: number; // Delay for staggered effect
}

export const useScrollFade = <T extends HTMLElement = HTMLElement>(options: ScrollFadeOptions = {}) => {
  const { threshold = 100, fadeDistance = 200, staggerDelay = 0 } = options;
  const [opacity, setOpacity] = useState(1);
  const elementRef = useRef<T>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        // Cancel any pending animation frame
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }

        // Throttle the updates to improve performance
        rafId.current = requestAnimationFrame(() => {
          if (staggerDelay > 0) {
            setTimeout(() => {
              if (entry.isIntersecting) {
                // Element is entering viewport, fade in
                setOpacity(1);
              } else {
                // Element is leaving viewport, fade out
                const rect = entry.boundingClientRect;
                if (rect.top < 0) {
                  // Element has scrolled past, fade out
                  setOpacity(0);
                }
              }
            }, staggerDelay);
          } else {
            if (entry.isIntersecting) {
              // Element is entering viewport, fade in
              setOpacity(1);
            } else {
              // Element is leaving viewport, fade out
              const rect = entry.boundingClientRect;
              if (rect.top < 0) {
                // Element has scrolled past, fade out
                setOpacity(0);
              }
            }
          }
        });
      },
      {
        threshold: [0, 0.5, 1.0], // Reduced threshold points for better performance
        rootMargin: `${threshold}px 0px -${fadeDistance}px 0px`
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [threshold, fadeDistance, staggerDelay]);

  return { opacity, ref: elementRef };
};