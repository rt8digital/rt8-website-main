import React from 'react';
import { Heart } from 'lucide-react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';

const Footer: React.FC = () => {
  return (
    <footer className="relative bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-t border-red-500/20 mt-20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          <div className="text-white/80 text-sm font-medium tracking-wide flex items-center gap-2">
            <ScrambledText
              as="span"
              radius={60}
              duration={0.8}
              speed={0.4}
              scrambleChars=".:"
              className="text-white/80"
            >
              Built with
            </ScrambledText>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
            <ScrambledText
              as="span"
              radius={60}
              duration={0.8}
              speed={0.4}
              scrambleChars=".:"
              className="text-white/80"
            >
              By
            </ScrambledText>
            <span className="text-red-500 font-semibold">
              <ScrambledText
                as="span"
                radius={60}
                duration={0.8}
                speed={0.4}
                scrambleChars=".:"
                className="text-red-500"
              >
                Rotate
              </ScrambledText>
            </span>
            <span className="text-white/60">|</span>
            <ScrambledText
              as="span"
              radius={60}
              duration={0.8}
              speed={0.4}
              scrambleChars=".:"
              className="text-white/60"
            >
              Hosting by Psycom
            </ScrambledText>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
