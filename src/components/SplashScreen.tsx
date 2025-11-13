import React, { useState, useEffect } from 'react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';

interface SplashScreenProps {
  onSplashComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onSplashComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Fade out splash screen
          setTimeout(() => {
            setIsVisible(false);
            // Call onSplashComplete after fade out
            setTimeout(onSplashComplete, 300);
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onSplashComplete]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-500">
      {/* Logo and text */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <div className="w-20 h-20 border-4 border-red-500 rounded-full animate-spin border-t-transparent"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="metallic-text-red"
            >
              RT8 ROTATE GROUP
            </ScrambledText>
          </h1>
          <div className="text-gray-400 text-lg">
            <ScrambledText
              as="span"
              radius={80}
              duration={1.0}
              speed={0.3}
              scrambleChars=".:"
              className="text-lg"
            >
              A Harmonic Symphony of Art & Innovation
            </ScrambledText>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1.5 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
          <div
            className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading text */}
        <div className="text-red-500 text-sm font-medium">
          <ScrambledText
            as="span"
            radius={50}
            duration={0.6}
            speed={0.3}
            scrambleChars=".:"
          >
            {progress < 100 ? 'Initializing experience...' : 'Ready!'}
          </ScrambledText>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;