import React from 'react';
import ColorBends from './bkgfx/ColorBends/ColorBends';

interface BackgroundProps {
  className?: string;
}

const Background: React.FC<BackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`fixed inset-0 z-0 overflow-hidden ${className}`}>
      <ColorBends 
        className="w-full h-full"
        speed={0.15} // Slightly slower for better performance
        scale={1.1}
        frequency={1.3}
        warpStrength={1.1}
        mouseInfluence={0.7}
        parallax={0.25}
        noise={0.03}
        autoRotate={0.3} // Slower rotation
        colors={["#ef4444", "#f87171", "#fecaca", "#991b1b"]} // RT8 red color palette
      />
    </div>
  );
};

export default Background;