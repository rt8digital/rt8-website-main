import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';

const DemoSubmissions: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 sm:pt-32 pb-16 sm:pb-32">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 w-full">
        {/* Header */}
        <div className={`text-center mb-6 sm:mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 mobile-heading">
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
              className="text-red-500 ml-2 sm:ml-4"
            >
              SUBMISSIONS
            </ScrambledText>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-red-500 mx-auto mb-4 sm:mb-8"></div>
          <ScrambledText
            as="h2"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-semibold mobile-text-shadow px-2"
          >
            Upload your creative sonic masterpiece below:
          </ScrambledText>
        </div>

        {/* Iframe Container */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8">
            <div className="mobile-card rounded-lg p-2 sm:p-4 bg-black/40 backdrop-blur-sm">
              <iframe 
                id="upload-iframe" 
                src="https://www.labelradar.com/labels/sonicbass/portal" 
                className="w-full rounded-lg"
                style={{ height: '600px', border: 'none', overflow: 'hidden' }}
                title="Demo Submission Portal"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mobile-card rounded-lg p-4 sm:p-6 max-w-md mx-auto bg-black/40 backdrop-blur-sm">
            <ScrambledText
              as="h3"
              radius={60}
              duration={0.8}
              speed={0.4}
              scrambleChars=".:"
              className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 mobile-heading"
            >
              Alternative Submission Method
            </ScrambledText>
            <a
              href="mailto:submit@rt8.co.za"
              className="inline-flex items-center space-x-2 sm:space-x-3 text-red-500 hover:text-red-400 transition-colors duration-300 group"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <ScrambledText
                as="span"
                radius={50}
                duration={0.6}
                speed={0.4}
                scrambleChars=".:"
                className="text-base sm:text-lg font-medium"
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
              className="text-gray-400 text-xs sm:text-sm mt-2 sm:mt-3"
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
