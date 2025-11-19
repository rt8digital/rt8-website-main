import React, { useEffect, useState, useRef } from 'react';
import { useScrollFade } from '../hooks/useScrollFade';
import { Music, Sparkles } from 'lucide-react';
import logoSvg from '../assets/Group.svg';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroContainerRef = useRef<HTMLElement>(null);

  // Scroll fade hooks for staggered animation
  const titleFade = useScrollFade<HTMLDivElement>({ threshold: 150, fadeDistance: 150, staggerDelay: 0 });
  const logoFade = useScrollFade<HTMLDivElement>({ threshold: 150, fadeDistance: 150, staggerDelay: 200 });
  const subtitleFade = useScrollFade<HTMLDivElement>({ threshold: 150, fadeDistance: 150, staggerDelay: 400 });
  const buttonsFade = useScrollFade<HTMLDivElement>({ threshold: 150, fadeDistance: 150, staggerDelay: 600 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      ref={heroContainerRef}
      className="min-h-[85vh] md:min-h-[90vh] flex items-center justify-center relative pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Elements - Optimized for all screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs - Responsive sizing */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-neon-red/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Animated particles - Reduced on mobile for performance */}
        {[...Array(window.innerWidth < 768 ? 10 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="text-center w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
        {/* Main Title - Enhanced visibility and scaling */}
        <div
          ref={titleFade.ref}
          className={`transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0' : 'translate-y-10'}`}
          style={{ opacity: isLoaded ? titleFade.opacity : 0 }}
        >
          <h1 className="font-display font-extrabold mb-8 sm:mb-10 md:mb-12 leading-[1.05] tracking-tight">
            {/* Main headline with crystal-clear gradient */}
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6"
              style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #f43f5e 45%, #dc2626 90%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 4px 30px rgba(220, 38, 38, 0.5)) drop-shadow(0 0 60px rgba(244, 63, 94, 0.3))',
                animation: 'gradient 8s ease infinite',
                fontWeight: '900'
              }}
            >
              A HARMONIC SYMPHONY
            </span>
            {/* Subtitle with perfect contrast */}
            <span
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-light tracking-wide mt-3 sm:mt-4"
              style={{
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 255, 255, 0.15)',
                letterSpacing: '0.05em'
              }}
            >
              OF ART & INNOVATION
            </span>
          </h1>
        </div>

        {/* Central Logo - Responsive sizing with proper aspect ratio */}
        <div
          ref={logoFade.ref}
          className={`transition-all duration-1500 delay-300 ${isLoaded ? 'scale-100' : 'scale-95'}`}
          style={{ opacity: isLoaded ? logoFade.opacity : 0 }}
        >
          <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-8 sm:mb-10 flex items-center justify-center group">
            {/* Multiple glow layers - Adjusted for mobile */}
            <div className="absolute inset-0 bg-neon-red/30 blur-2xl sm:blur-3xl rounded-full animate-pulse"></div>
            <div
              className="absolute inset-3 sm:inset-4 bg-neon-pink/20 blur-xl sm:blur-2xl rounded-full animate-pulse"
              style={{ animationDelay: '0.5s' }}
            ></div>

            {/* Rotating rings - Hidden on very small screens for performance */}
            <div className="hidden sm:block absolute inset-0 rounded-full border-2 border-neon-red/20 animate-spin-slow"></div>
            <div className="hidden sm:block absolute inset-6 md:inset-8 rounded-full border border-neon-pink/20 animate-spin-reverse"></div>

            {/* Logo - Optimized drop shadow for mobile */}
            <img
              src={logoSvg}
              alt="RT8 Logo"
              className="relative z-10 w-full h-full drop-shadow-[0_0_20px_rgba(220,38,38,0.6)] sm:drop-shadow-[0_0_25px_rgba(220,38,38,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(220,38,38,0.8)] sm:group-hover:drop-shadow-[0_0_35px_rgba(220,38,38,0.8)] transition-all duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Subtitle - Responsive text sizing */}
        <div
          ref={subtitleFade.ref}
          className={`transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0' : 'translate-y-10'}`}
          style={{ opacity: isLoaded ? subtitleFade.opacity : 0 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 mb-10 sm:mb-12 font-light">
            Where creativity and technology meets artistic expression.
          </p>
        </div>

        {/* CTA Buttons - Optimized for mobile stacking */}
        <div
          ref={buttonsFade.ref}
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0' : 'translate-y-10'} px-4`}
          style={{ opacity: isLoaded ? buttonsFade.opacity : 0 }}
        >
          {/* Primary Button - Music */}
          <a
            href="https://music.rt8.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-neon-red to-neon-crimson rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] sm:hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] min-w-[200px] max-w-[280px] sm:max-w-none"
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-neon-red/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <span className="relative z-10 flex items-center justify-center gap-2">
              <Music className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-display tracking-wide text-sm sm:text-base">Explore Music</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>

          {/* Secondary Button - Digital */}
          <a
            href="https://digital.rt8.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-neon-cyan/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] sm:hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] min-w-[200px] max-w-[280px] sm:max-w-none"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/20 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

            <span className="relative z-10 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-display tracking-wide text-sm sm:text-base">Digital Services</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </a>
        </div>

        {/* Scroll indicator - Hidden on mobile, shown on larger screens */}
        <div className="hidden md:block mt-12 lg:mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-neon-red rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
