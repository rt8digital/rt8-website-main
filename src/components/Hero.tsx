import React, { useEffect, useState, useRef } from 'react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';
import MetallicPaint, { parseLogoImage, defaultParams } from './textfx/MetallicPaint/MetallicPaint';
import { useScrollFade } from '../hooks/useScrollFade';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoImageData, setLogoImageData] = useState<ImageData | null>(null);
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
    const loadLogo = async () => {
      try {
        const response = await fetch('/src/assets/2025-06-30 (1).svg');
        const blob = await response.blob();
        const file = new File([blob], 'logo.svg', { type: 'image/svg+xml' });
        const { imageData } = await parseLogoImage(file);
        setLogoImageData(imageData);
      } catch (error) {
        console.error('Failed to load logo:', error);
      }
    };
    loadLogo();
  }, []);

  return (
    <section ref={heroContainerRef} className="min-h-screen flex items-center justify-center relative pt-8 sm:pt-16 pb-8 sm:pb-16 px-2 sm:px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <div
          ref={titleFade.ref}
          className={`transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0' : 'translate-y-10'}`}
          style={{ opacity: isLoaded ? titleFade.opacity : 0 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight px-2">
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="metallic-text-red px-2 sm:px-4 py-1 sm:py-2 inline-block transform -rotate-2 shadow-2xl mb-2 sm:mb-4 text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl"
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
              className="metallic-text-silver text-xl sm:text-3xl md:text-5xl lg:text-6xl"
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
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4 sm:mb-8 flex items-center justify-center">
            {logoImageData ? (
              <MetallicPaint imageData={logoImageData} params={defaultParams} />
            ) : (
              <img
                src="/src/assets/2025-06-30 (1).svg"
                alt="RT8 Logo"
                className="w-full h-full object-contain"
              />
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
            className="metallic-text-subtitle text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4"
          >
            Dive into the electrifying fusion of cutting-edge digital technology and artistic expression. Here, global beats ignite innovation, and creativity knows no bounds.
          </ScrambledText>
        </div>

        {/* CTA Buttons */}
        <div
          ref={buttonsFade.ref}
          className={`mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0' : 'translate-y-10'}`}
          style={{ opacity: isLoaded ? buttonsFade.opacity : 0 }}
        >
          <a
            href="https://music.rt8.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-button-red relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full shadow-2xl group hover:shadow-3xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-background overflow-hidden transition-all duration-300"
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
            <svg className="ml-2 w-5 h-5 relative z-10 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v14M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3"></path>
            </svg>
          </a>
          <a
            href="https://digital.rt8.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="metallic-button-silver relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-full shadow-2xl group hover:shadow-3xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-background overflow-hidden transition-all duration-300"
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
            <svg className="ml-2 w-5 h-5 relative z-10 text-gray-800 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;