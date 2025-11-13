import React, { useState, useEffect } from 'react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';
import Balatro from './bkgfx/Balatro/Balatro';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress with a more realistic approach
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
    }, 150); // Slower interval for more realistic feel

    // Cleanup function
    return () => {
      clearInterval(progressInterval);
      if (completionTimeout) {
        clearTimeout(completionTimeout);
      }
    };
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${
      isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      {/* Balatro Background */}
      <div className="absolute inset-0 z-0">
        <Balatro 
          isRotate={true} // Enable rotation for animated background
          spinRotation={-2.0}
          spinSpeed={7.0}
          contrast={3.5}
          lighting={0.4}
          spinAmount={0.25}
          pixelFilter={745.0}
          spinEase={1.0}
          mouseInteraction={true}
        />
      </div>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>
      
      {/* Logo/Brand */}
      <div className="relative z-10 mb-8">
        <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
          <div className="w-24 h-24 border-4 border-red-500 rounded-full animate-spin border-t-transparent"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
          <ScrambledText
            as="span"
            radius={100}
            duration={1.5}
            speed={0.4}
            scrambleChars=".:"
            className="metallic-text-red"
          >
            RT8 ROTATE GROUP
          </ScrambledText>
        </h1>
        <div className="text-gray-400 text-center text-lg">
          <ScrambledText
            as="span"
            radius={80}
            duration={1.2}
            speed={0.3}
            scrambleChars=".:"
            className="text-lg"
          >
            Loading experience...
          </ScrambledText>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative z-10 w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Progress percentage */}
      <div className="relative z-10 text-red-500 font-bold">
        {progress}%
      </div>

      {/* Loading message */}
      <div className="relative z-10 mt-8 text-gray-500 text-sm">
        {progress < 30 && (
          <ScrambledText
            as="span"
            radius={50}
            duration={0.8}
            speed={0.3}
            scrambleChars=".:"
          >
            Initializing systems...
          </ScrambledText>
        )}
        {progress >= 30 && progress < 60 && (
          <ScrambledText
            as="span"
            radius={50}
            duration={0.8}
            speed={0.3}
            scrambleChars=".:"
          >
            Loading assets...
          </ScrambledText>
        )}
        {progress >= 60 && progress < 90 && (
          <ScrambledText
            as="span"
            radius={50}
            duration={0.8}
            speed={0.3}
            scrambleChars=".:"
          >
            Preparing interface...
          </ScrambledText>
        )}
        {progress >= 90 && (
          <ScrambledText
            as="span"
            radius={50}
            duration={0.8}
            speed={0.3}
            scrambleChars=".:"
          >
            Almost ready...
          </ScrambledText>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;