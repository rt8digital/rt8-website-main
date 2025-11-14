import React, { useEffect, useState, useRef } from 'react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';
import MetallicPaint, { defaultParams } from './textfx/MetallicPaint/MetallicPaint';
import { useScrollFade } from '../hooks/useScrollFade';
import logoSvg from '../assets/Group (1).svg';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [metallicImageData, setMetallicImageData] = useState<ImageData | null>(null);
  const heroContainerRef = useRef<HTMLElement>(null);

  // Scroll fade hooks for staggered animation
  const titleFade = useScrollFade<HTMLDivElement>({ threshold: 150, fadeDistance: 150, staggerDelay: 0 });
  const logoFade = useScrollFade<HTMLDivElement>({ threshold: 150, fadeDistance: 150, staggerDelay: 200 });
  const subtitleFade = useScrollFade<HTMLDivElement>({ threshold: 150, fadeDistance: 150, staggerDelay: 400 });
  const buttonsFade = useScrollFade<HTMLDivElement>({ threshold: 150, fadeDistance: 150, staggerDelay: 600 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Try to load the SVG content and create a data URL for canvas rendering
    const loadSvgAsDataUrl = async () => {
      try {
        // Fetch the SVG content
        const response = await fetch(logoSvg);
        const svgText = await response.text();

        // Create a data URL from the SVG
        const dataUrl = `data:image/svg+xml;base64,${btoa(svgText)}`;

        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = dataUrl;

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Could not get canvas context');

        // Make canvas larger for better quality
        const size = Math.max(img.width, img.height, 512);
        canvas.width = size;
        canvas.height = size;

        // Fill with white background first
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, size, size);

        // Center the image
        const x = (size - img.width) / 2;
        const y = (size - img.height) / 2;

        ctx.drawImage(img, x, y, img.width, img.height);
        const imageData = ctx.getImageData(0, 0, size, size);
        setMetallicImageData(imageData);
      } catch (error) {
        console.error('Failed to load SVG as data URL:', error);
        // Fallback: create a simple metallic shape
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const size = 512;
        canvas.width = size;
        canvas.height = size;

        // Create a simple metallic shape
        ctx.fillStyle = 'rgba(200, 200, 200, 0.8)';
        ctx.fillRect(0, 0, size, size);

        // Add some contrast
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.fillRect(size * 0.2, size * 0.2, size * 0.6, size * 0.6);

        const imageData = ctx.getImageData(0, 0, size, size);
        setMetallicImageData(imageData);
      }
    };

    loadSvgAsDataUrl();
  }, []);

  return (
    <section ref={heroContainerRef} className="min-h-screen flex items-center justify-center relative pt-6 sm:pt-12 pb-6 sm:pb-12 px-2 sm:px-4"> {/* Reduced padding */}
      <div className="text-center max-w-3xl mx-auto"> {/* Reduced max-width */}
        {/* Main Title */}
        <div
          ref={titleFade.ref}
          className={`transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0' : 'translate-y-10'}`}
          style={{ opacity: isLoaded ? titleFade.opacity : 0 }}
        >
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-6 leading-tight px-2"> {/* Reduced text sizes */}
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="metallic-text-red px-1.5 sm:px-3 py-0.5 sm:py-1 inline-block transform -rotate-2 shadow-2xl mb-1.5 sm:mb-3 text-base sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl" // Reduced sizes
            >
              A HARMONIC SYMPHONY
            </ScrambledText>
            <br />
            <ScrambledText
              as="span"
              radius={100}
              duration={1.0}
              speed={0.5}
              scrambleChars=".:"
              className="metallic-text-silver text-lg sm:text-2xl md:text-4xl lg:text-5xl" // Reduced sizes
            >
              OF ART & INNOVATION
            </ScrambledText>
          </h1>
        </div>

        {/* Central Logo */}
        <div
          ref={logoFade.ref}
          className={`transition-all duration-1500 delay-300 ${isLoaded ? 'scale-100' : 'scale-95'}`}
          style={{ opacity: isLoaded ? logoFade.opacity : 0 }}
        >
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 mx-auto mb-3 sm:mb-6 flex items-center justify-center"> {/* Reduced size */}
            {metallicImageData ? (
              <MetallicPaint imageData={metallicImageData} params={defaultParams} />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-600 rounded-full animate-pulse"></div>
            )}
          </div>
        </div>

        {/* Subtitle */}
        <div
          ref={subtitleFade.ref}
          className={`transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0' : 'translate-y-10'}`}
          style={{ opacity: isLoaded ? subtitleFade.opacity : 0 }}
        >
          <ScrambledText
            as="p"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="metallic-text-subtitle text-sm md:text-sm max-w-xl mx-auto leading-relaxed px-3" // Reduced sizes
          >
            Where creativity and technology meets artistic expression.
          </ScrambledText>
        </div>

        {/* CTA Buttons */}
        <div
          ref={buttonsFade.ref}
          className={`mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0' : 'translate-y-10'}`} // Reduced margin and gap
          style={{ opacity: isLoaded ? buttonsFade.opacity : 0 }}
        >
          <a
            href="https://music.rt8.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-button-red relative inline-flex items-center justify-center px-6 py-2.5 text-base font-semibold rounded-full shadow-2xl group hover:shadow-3xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-background overflow-hidden transition-all duration-300" // Reduced padding and text size
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-400 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 via-red-300 to-red-200 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
            <ScrambledText
              as="span"
              radius={80}
              duration={0.8}
              speed={0.4}
              scrambleChars=".:"
              className="relative z-10 text-white drop-shadow-lg font-semibold"
              buttonMode={true}
            >
              Music
            </ScrambledText>
            <svg className="ml-1.5 w-4 h-4 relative z-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Reduced margin and size */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v14M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3"></path>
            </svg>
          </a>
          <a
            href="https://digital.rt8.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-button-silver relative inline-flex items-center justify-center px-6 py-2.5 text-base font-semibold rounded-full shadow-2xl group hover:shadow-3xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-background overflow-hidden transition-all duration-300" // Reduced padding and text size
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-100 via-white to-gray-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></span>
            <ScrambledText
              as="span"
              radius={80}
              duration={0.8}
              speed={0.4}
              scrambleChars=".:"
              className="relative z-10 text-gray-800 drop-shadow-lg font-semibold"
              buttonMode={true}
            >
              Digital
            </ScrambledText>
            <svg className="ml-1.5 w-4 h-4 relative z-10 text-gray-800 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Reduced margin and size */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
