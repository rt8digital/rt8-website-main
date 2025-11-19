import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    let progressInterval: NodeJS.Timeout;
    let completionTimeout: NodeJS.Timeout;

    // Start progress simulation
    progressInterval = setInterval(() => {
      setProgress(prev => {
        // Slow down as we approach 90% to simulate actual loading
        const increment = prev < 70 ? Math.floor(Math.random() * 8) + 2 :
          prev < 90 ? Math.floor(Math.random() * 4) + 1 :
            Math.floor(Math.random() * 2) + 1;

        const newProgress = Math.min(prev + increment, 95);

        // When we reach 95%, stop the interval and wait for actual completion
        if (newProgress >= 95) {
          clearInterval(progressInterval);

          // Set a timeout to ensure we have some minimum loading time
          completionTimeout = setTimeout(() => {
            setIsFadingOut(true);
            // Call onLoadingComplete after fade out animation
            setTimeout(onLoadingComplete, 500);
          }, 800);
        }

        return newProgress;
      });
    }, 150);

    // Cleanup function
    return () => {
      clearInterval(progressInterval);
      if (completionTimeout) {
        clearTimeout(completionTimeout);
      }
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-deep-space transition-opacity duration-500 ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-red/20 rounded-full blur-[100px] animate-pulse"></div>

      {/* Logo/Brand */}
      <div className="relative z-10 mb-12 text-center">
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <div className="absolute inset-0 border-4 border-neon-red/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 bg-neon-red/10 rounded-full blur-md"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold text-center mb-4 tracking-tight">
          <span className="text-white">RT8</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-red ml-4 glow-text-cyan">ROTATE</span>
        </h1>

        <p className="text-gray-400 text-lg font-light tracking-wide">
          A Harmonic Symphony of Art & Innovation
        </p>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-neon-red to-neon-cyan rounded-full transition-all duration-300 ease-out box-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress percentage */}
      <div className="relative z-10 text-neon-cyan font-bold font-mono text-sm">
        {progress}%
      </div>

      {/* Loading message */}
      <div className="relative z-10 mt-8 text-gray-500 text-xs uppercase tracking-widest">
        {progress < 30 && 'Initializing systems...'}
        {progress >= 30 && progress < 60 && 'Loading assets...'}
        {progress >= 60 && progress < 90 && 'Preparing interface...'}
        {progress >= 90 && 'Ready...'}
      </div>
    </div>
  );
};

export default LoadingScreen;
