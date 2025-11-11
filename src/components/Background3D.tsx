import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  opacity: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  rotationSpeedX: number;
  rotationSpeedY: number;
  rotationSpeedZ: number;
}

interface Asteroid {
  id: number;
  x: number;
  y: number;
  z: number;
  size: number;
  speedX: number;
  speedY: number;
  speedZ: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  rotationSpeedX: number;
  rotationSpeedY: number;
  rotationSpeedZ: number;
  opacity: number;
}

interface GridSquare {
  id: number;
  x: number;
  y: number;
  morphProgress: number;
  targetMorph: number;
}

const Background3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const gridSquaresRef = useRef<GridSquare[]>([]);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [isInitialized, setIsInitialized] = useState(false);

  // Refs for smooth hover glow intensity
  const targetHoverGlowIntensityRef = useRef(0);
  const currentHoverGlowIntensityRef = useRef(0);

  useEffect(() => {
    const initializeBackground = () => {
      // Initialize particles
      const particles: Particle[] = [];
      for (let i = 0; i < 40; i++) {
        particles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.random() * 1000,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          speedZ: (Math.random() - 0.5) * 2,
          opacity: Math.random() * 0.5 + 0.1,
          rotationX: Math.random() * 360,
          rotationY: Math.random() * 360,
          rotationZ: Math.random() * 360,
          rotationSpeedX: (Math.random() - 0.5) * 2,
          rotationSpeedY: (Math.random() - 0.5) * 2,
          rotationSpeedZ: (Math.random() - 0.5) * 2,
        });
      }
      particlesRef.current = particles;

      // Initialize 3D asteroids with enhanced visibility
      const asteroids: Asteroid[] = [];
      for (let i = 0; i < 15; i++) {
        asteroids.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          z: Math.random() * 2000 + 500,
          size: Math.random() * 50 + 30,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          speedZ: (Math.random() - 0.5) * 1,
          rotationX: Math.random() * 360,
          rotationY: Math.random() * 360,
          rotationZ: Math.random() * 360,
          rotationSpeedX: (Math.random() - 0.5) * 1,
          rotationSpeedY: (Math.random() - 0.5) * 1,
          rotationSpeedZ: (Math.random() - 0.5) * 1,
          opacity: Math.random() * 0.6 + 0.3,
        });
      }
      asteroidsRef.current = asteroids;

      // Initialize grid squares for morphing effect
      const gridSquares: GridSquare[] = [];
      const gridSize = 60;
      const cols = Math.ceil(window.innerWidth / gridSize) + 2;
      const rows = Math.ceil(window.innerHeight / gridSize) + 2;
      
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          gridSquares.push({
            id: i * rows + j,
            x: i * gridSize - gridSize,
            y: j * gridSize - gridSize,
            morphProgress: 0,
            targetMorph: 0,
          });
        }
      }
      gridSquaresRef.current = gridSquares;

      setIsInitialized(true);
    };

    initializeBackground();

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = {
        x: e.clientX,
        y: e.clientY,
      };

      // Update grid squares morph targets based on mouse distance
      gridSquaresRef.current.forEach((square) => {
        const distance = Math.sqrt(
          Math.pow(e.clientX - (square.x + 30), 2) + 
          Math.pow(e.clientY - (square.y + 30), 2)
        );
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          square.targetMorph = 1 - (distance / maxDistance);
        } else {
          square.targetMorph = 0;
        }
      });

      targetHoverGlowIntensityRef.current = 1; // Set target to full intensity on mouse move
    };

    const handleMouseLeave = () => {
      targetHoverGlowIntensityRef.current = 0; // Set target to zero intensity on mouse leave
    };

    // Animation loop
    const animate = () => {
      const mouseX = (mousePositionRef.current.x / window.innerWidth - 0.5) * 2;
      const mouseY = (mousePositionRef.current.y / window.innerHeight - 0.5) * 2;

      // Smoothly interpolate current hover glow intensity
      currentHoverGlowIntensityRef.current += (targetHoverGlowIntensityRef.current - currentHoverGlowIntensityRef.current) * 0.1;
      const interpolatedGlowIntensity = currentHoverGlowIntensityRef.current;

      // Update particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX + mouseX * 0.5;
        particle.y += particle.speedY + mouseY * 0.5;
        particle.z += particle.speedZ;

        particle.rotationX += particle.rotationSpeedX;
        particle.rotationY += particle.rotationSpeedY;
        particle.rotationZ += particle.rotationSpeedZ;

        if (particle.x < -50) particle.x = window.innerWidth + 50;
        if (particle.x > window.innerWidth + 50) particle.x = -50;
        if (particle.y < -50) particle.y = window.innerHeight + 50;
        if (particle.y > window.innerHeight + 50) particle.y = -50;
        if (particle.z < -500) particle.z = 1500;
        if (particle.z > 1500) particle.z = -500;
      });

      // Update asteroids
      asteroidsRef.current.forEach((asteroid) => {
        asteroid.x += asteroid.speedX + mouseX * 2;
        asteroid.y += asteroid.speedY + mouseY * 2;
        asteroid.z += asteroid.speedZ;

        asteroid.rotationX += asteroid.rotationSpeedX + mouseY * 0.5;
        asteroid.rotationY += asteroid.rotationSpeedY + mouseX * 0.5;
        asteroid.rotationZ += asteroid.rotationSpeedZ;

        if (asteroid.x < -100) asteroid.x = window.innerWidth + 100;
        if (asteroid.x > window.innerWidth + 100) asteroid.x = -100;
        if (asteroid.y < -100) asteroid.y = window.innerHeight + 100;
        if (asteroid.y > window.innerHeight + 100) asteroid.y = -100;
        if (asteroid.z < -1000) asteroid.z = 3000;
        if (asteroid.z > 3000) asteroid.z = -1000;
      });

      // Update grid squares morphing
      gridSquaresRef.current.forEach((square) => {
        const morphSpeed = 0.08;
        square.morphProgress += (square.targetMorph - square.morphProgress) * morphSpeed;
      });

      // Update DOM elements
      if (containerRef.current && isInitialized) {
        const particleElements = containerRef.current.querySelectorAll('.particle');
        particleElements.forEach((element, index) => {
          const particle = particlesRef.current[index];
          if (particle) {
            const el = element as HTMLElement;
            const scale = 1 + particle.z / 1000;
            // Enhance particle glow based on interpolatedGlowIntensity
            const glowStrength = 0.5 + interpolatedGlowIntensity * 0.5; // Base 0.5, max 1.0
            el.style.transform = `
              translate3d(${particle.x}px, ${particle.y}px, ${particle.z}px)
              rotateX(${particle.rotationX}deg)
              rotateY(${particle.rotationY}deg)
              rotateZ(${particle.rotationZ}deg)
              scale(${scale})
            `;
            el.style.opacity = (particle.opacity * (1 + particle.z / 1000)).toString();
            el.style.boxShadow = `0 0 ${10 * glowStrength}px rgba(239, 68, 68, ${0.5 * glowStrength})`;
          }
        });

        const asteroidElements = containerRef.current.querySelectorAll('.asteroid');
        asteroidElements.forEach((element, index) => {
          const asteroid = asteroidsRef.current[index];
          if (asteroid) {
            const el = element as HTMLElement;
            const scale = Math.max(0.2, 1 - asteroid.z / 2000);
            const brightness = Math.max(0.6, 1.2 - asteroid.z / 1500);
            // Enhance asteroid glow based on interpolatedGlowIntensity
            const glowStrength = 0.4 + interpolatedGlowIntensity * 0.6; // Base 0.4, max 1.0
            
            el.style.transform = `
              translate3d(${asteroid.x}px, ${asteroid.y}px, 0)
              rotateX(${asteroid.rotationX}deg)
              rotateY(${asteroid.rotationY}deg)
              rotateZ(${asteroid.rotationZ}deg)
              scale(${scale})
            `;
            el.style.filter = `drop-shadow(0 0 ${15 * glowStrength}px rgba(239, 68, 68, ${0.4 * glowStrength})) brightness(${brightness * 1.5}) contrast(1.3)`;
            el.style.opacity = (asteroid.opacity * brightness).toString();
          }
        });

        const gridElements = containerRef.current.querySelectorAll('.grid-square');
        gridElements.forEach((element, index) => {
          const square = gridSquaresRef.current[index];
          if (square) {
            const el = element as HTMLElement;
            const borderRadius = square.morphProgress * 50;
            const scale = 1 + square.morphProgress * 0.3;
            const opacity = 0.15 + square.morphProgress * 0.25;
            
            el.style.transform = `translate(${square.x}px, ${square.y}px) scale(${scale})`;
            el.style.borderRadius = `${borderRadius}%`;
            el.style.opacity = opacity.toString();
            el.style.backgroundColor = `rgba(239, 68, 68, ${0.1 + square.morphProgress * 0.15})`;
          }
        });

        // Update mouse glow element
        const mouseGlowElement = containerRef.current.querySelector('.mouse-glow') as HTMLElement;
        if (mouseGlowElement) {
          mouseGlowElement.style.transform = `translate3d(${mousePositionRef.current.x}px, ${mousePositionRef.current.y}px, 0) scale(${1 + interpolatedGlowIntensity * 0.5})`;
          mouseGlowElement.style.opacity = (interpolatedGlowIntensity * 0.6).toString(); // Max opacity 0.6
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInitialized]); // Dependencies only need to include isInitialized, as refs are mutable

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.01) 0%, transparent 70%),
          linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #030303 50%, #0a0a0a 75%, #000000 100%)
        `,
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Mouse-following Glow */}
      <div
        className="mouse-glow fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          background: `radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)`, // Accent color glow
          filter: `blur(40px)`,
          opacity: 0, // Initial opacity, will be updated in animate loop
          transition: 'opacity 0.3s ease-out', // Smooth transition for opacity
          willChange: 'transform, opacity', // Performance optimization
          zIndex: 10, // Ensure it's above other background elements
        }}
      />

      {/* Morphing Grid Squares */}
      {isInitialized && gridSquaresRef.current.map((square) => (
        <div
          key={`grid-square-${square.id}`}
          className="grid-square absolute pointer-events-none"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            opacity: 0.15,
          }}
        />
      ))}

      {/* Enhanced 3D Asteroids */}
      {isInitialized && asteroidsRef.current.map((asteroid) => (
        <div
          key={`asteroid-${asteroid.id}`}
          className="asteroid absolute pointer-events-none"
          style={{
            left: asteroid.x,
            top: asteroid.y,
            width: asteroid.size,
            height: asteroid.size,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative w-full h-full">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-lg shadow-lg"
              style={{
                clipPath: 'polygon(20% 0%, 80% 10%, 100% 35%, 85% 90%, 15% 85%, 0% 50%)',
              }}
            />
            <div 
              className="absolute inset-1 bg-gradient-to-tl from-gray-400 via-gray-500 to-gray-600 rounded-md opacity-80"
              style={{
                clipPath: 'polygon(30% 10%, 70% 5%, 90% 40%, 75% 80%, 25% 75%, 10% 45%)'
              }}
            />
            <div className="absolute top-2 left-2 w-3 h-3 bg-red-300 rounded-full opacity-80 blur-sm" />
            <div 
              className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-transparent to-red-500/10 rounded-lg"
              style={{
                clipPath: 'polygon(20% 0%, 80% 10%, 100% 35%, 85% 90%, 15% 85%, 0% 50%)'
              }}
            />
          </div>
        </div>
      ))}

      {/* Floating Particles */}
      {isInitialized && particlesRef.current.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="particle absolute bg-red-500 rounded-full pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            transformStyle: 'preserve-3d',
            boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)'
          }}
        />
      ))}

      {/* Ambient Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/6 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/3 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-white/2 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      {/* Enhanced Depth Layers */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-red-900/2 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-900/1 to-transparent"></div>
      </div>

      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default Background3D;
