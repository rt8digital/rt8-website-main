// Performance monitoring utilities
export const performanceMonitor = {
  // Log performance metrics
  logPerformance: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const startTime = navigation.startTime || 0;
        console.log('Page Load Performance:', {
          'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
          'TCP Connect': navigation.connectEnd - navigation.connectStart,
          'Server Response': navigation.responseStart - navigation.requestStart,
          'Page Load': navigation.loadEventEnd - startTime,
          'DOM Ready': navigation.domContentLoadedEventEnd - startTime,
        });
      }
    }
  },

  // Detect device capabilities
  getDeviceCapabilities: () => {
    if (typeof window === 'undefined') return {};

    return {
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      isLowEndDevice: navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2,
      hasWebGL: (() => {
        try {
          const canvas = document.createElement('canvas');
          return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
        } catch (e) {
          return false;
        }
      })(),
      connection: (navigator as any).connection?.effectiveType || 'unknown',
    };
  },

  // Throttle function for performance
  throttle: (func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },
  
  // Debounce function for performance
  debounce: (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return function(this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  },
  
  // Check if device prefers reduced motion
  prefersReducedMotion: () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
};

export default performanceMonitor;