import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';

const DemoSubmissions: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-16 sm:pt-24 pb-12 sm:pb-24"> {/* Reduced padding */}
      <div className="max-w-5xl mx-auto px-2 sm:px-4 w-full"> {/* Reduced max-width */}
        {/* Header */}
        <div className={`text-center mb-4 sm:mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 mobile-heading"> {/* Reduced text sizes */}
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="text-white"
            >
              DEMO
            </ScrambledText>
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="text-red-500 ml-1 sm:ml-2" // Reduced margin
            >
              SUBMISSIONS
            </ScrambledText>
          </h1>
          <div className="w-12 sm:w-20 h-1 bg-red-500 mx-auto mb-3 sm:mb-6"></div> {/* Reduced width and margin */}
          <ScrambledText
            as="h2"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-base sm:text-xl md:text-2xl text-gray-300 font-semibold mobile-text-shadow px-2" // Reduced text sizes
          >
            Upload your creative sonic masterpiece below:
          </ScrambledText>
        </div>

        {/* Iframe Container */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full max-w-3xl mx-auto mb-4 sm:mb-6"> {/* Reduced max-width and margin */}
            <div className="mobile-card rounded-lg p-1.5 sm:p-3 bg-black/40 backdrop-blur-sm"> {/* Reduced padding */}
              <iframe 
                id="upload-iframe" 
                src="https://www.labelradar.com/labels/sonicbass/portal" 
                className="w-full rounded-lg"
                style={{ height: '500px', border: 'none', overflow: 'hidden' }} // Reduced height
                title="Demo Submission Portal"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mobile-card rounded-lg p-3 sm:p-4 max-w-sm mx-auto bg-black/40 backdrop-blur-sm"> {/* Reduced padding and max-width */}
            <ScrambledText
              as="h3"
              radius={60}
              duration={0.8}
              speed={0.4}
              scrambleChars=".:"
              className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 mobile-heading" // Reduced text sizes
            >
              Alternative Submission Method
            </ScrambledText>
            <a
              href="mailto:submit@rt8.co.za"
              className="inline-flex items-center space-x-1.5 sm:space-x-2 text-red-500 hover:text-red-400 transition-colors duration-300 group" // Reduced spacing
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300"> {/* Reduced size */}
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> {/* Reduced icon size */}
              </div>
              <ScrambledText
                as="span"
                radius={50}
                duration={0.6}
                speed={0.4}
                scrambleChars=".:"
                className="text-sm sm:text-base font-medium" // Reduced text sizes
              >
                submit@rt8.co.za
              </ScrambledText>
            </a>
            <ScrambledText
              as="p"
              radius={50}
              duration={0.6}
              speed={0.4}
              scrambleChars=".:"
              className="text-gray-400 text-xs mt-1.5 sm:mt-2" // Reduced text size and margin
            >
              Send your demos directly to our submission email
            </ScrambledText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSubmissions;