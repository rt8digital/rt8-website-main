import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-t border-red-500/20 mt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <p className="text-white/80 text-sm font-medium tracking-wide flex items-center gap-2">
            Built with 
            <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
            By 
            <span className="text-red-500 font-semibold">Rotate</span>
            <span className="text-white/60">|</span>
            <span className="text-white/60">Hosting by Psycom</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
