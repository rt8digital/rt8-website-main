import React, { useEffect, useState, useRef } from 'react';

// Constants for animation values
const ROTATION_DAMPING = 0.12;
const MOUSE_SENSITIVITY = 0.2;
// GLITCH_ANIMATION_DURATION is handled by CSS class now

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false); // State for glitch effect
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const container = containerRef.current;
    const image = imageRef.current;
    
    if (!container || !image) return;

    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      rotationRef.current.targetY = deltaX * MOUSE_SENSITIVITY;
      rotationRef.current.targetX = deltaY * -MOUSE_SENSITIVITY;
    };

    const handleMouseLeave = () => {
      rotationRef.current.targetX = 0;
      rotationRef.current.targetY = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.touches[0].clientX - centerX;
      const deltaY = e.touches[0].clientY - centerY;

      rotationRef.current.targetY = deltaX * MOUSE_SENSITIVITY;
      rotationRef.current.targetX = deltaY * -MOUSE_SENSITIVITY;
      e.preventDefault();
    };

    const animate = () => {
      const rotation = rotationRef.current;
      rotation.y += (rotation.targetY - rotation.y) * ROTATION_DAMPING;
      rotation.x += (rotation.targetX - rotation.x) * ROTATION_DAMPING;

      if (image) {
        image.style.transform = `
          rotateX(${rotation.x}deg)
          rotateY(${rotation.y}deg)
          perspective(1200px)
        `;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });

    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('touchmove', handleTouchMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 sm:pt-32 pb-8 sm:pb-16 px-2 sm:px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Main Title */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight px-2">
            <span className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 inline-block transform -rotate-2 shadow-lg mb-2 sm:mb-4 text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
              A HARMONIC SYMPHONY
            </span>
            <br />
            <span className="text-white text-xl sm:text-3xl md:text-5xl lg:text-6xl">OF</span>
            <span className="text-red-500 ml-2 sm:ml-4 text-xl sm:text-3xl md:text-5xl lg:text-6xl">ART</span>
            <span className="text-white mx-2 sm:mx-4 text-xl sm:text-3xl md:text-5xl lg:text-6xl">&</span>
            <span className="text-red-500 text-xl sm:text-3xl md:text-5xl lg:text-6xl">INNOVATION</span>
          </h1>
        </div>

        {/* Central Logo with Enhanced 3D Animation */}
        <div className={`transition-all duration-1500 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4 sm:mb-8 flex items-center justify-center">
            <div 
              ref={containerRef}
              className="spin-container cursor-pointer w-full max-w-[420px] mx-auto relative bg-transparent perspective-[1200px]"
            >
              <div 
                ref={imageRef}
                className={`spinning-image w-[103%] m-[-2.5%] pt-[105%] bg-cover bg-center relative bg-transparent transform-style-3d will-change-transform-filter ${isGlitching ? 'animate-glitch-effect' : ''}`}
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/UzepugTolsD7WyEgnHp_N49cY24JTUMaV01CuiEyzxSyZ7IWVpw-1EI37iITUzcV_420noI49ZHEY7F_Tw=s265-w265-h265")',
                }}
                onMouseEnter={() => setIsGlitching(true)}
                onMouseLeave={() => setIsGlitching(false)}
              />
              {/* Note: The logo is a background image. For accessibility, if this image conveys critical information,
                  consider using an <img> tag with an appropriate alt attribute, or ensure the surrounding text provides sufficient context. */}
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            Dive into the electrifying fusion of cutting-edge digital technology and artistic expression. Here, global beats ignite innovation, and creativity knows no bounds.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="https://music.rt8.co.za" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 ease-out bg-red-500 rounded-full shadow-lg group hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-background overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Music</span>
            <svg className="ml-2 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v14M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6l12-3"></path>
            </svg>
          </a>
          <a 
            href="https://digital.rt8.co.za" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white transition-all duration-300 ease-out border border-red-500 rounded-full shadow-lg group hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-background overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-red-600 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Digital</span>
            <svg className="ml-2 w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
