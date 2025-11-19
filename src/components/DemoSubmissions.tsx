import React, { useEffect, useState } from 'react';
import { Mail, Music } from 'lucide-react';

const DemoSubmissions: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-red/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 w-full relative z-10">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            <span className="text-white">DEMO</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-red ml-4 glow-text-cyan">SUBMISSIONS</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light flex items-center justify-center gap-2">
            <Music className="w-5 h-5 text-neon-cyan" />
            Upload your creative sonic masterpiece below
          </p>
        </div>

        {/* Iframe Container */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full max-w-4xl mx-auto mb-12">
            <div className="glass-panel p-2 rounded-2xl border border-glass-border shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <iframe
                id="upload-iframe"
                src="https://www.labelradar.com/labels/sonicbass/portal"
                className="w-full rounded-xl bg-deep-space"
                style={{ height: '600px', border: 'none', overflow: 'hidden' }}
                title="Demo Submission Portal"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className={`text-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 rounded-3xl inline-block max-w-md w-full hover:border-neon-pink/40 transition-all duration-300 group">
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-pink transition-colors">
              Alternative Submission Method
            </h3>

            <a
              href="mailto:submit@rt8.co.za"
              className="inline-flex items-center space-x-3 text-neon-pink hover:text-white transition-colors duration-300 group/link"
            >
              <div className="w-10 h-10 bg-neon-pink/20 rounded-xl flex items-center justify-center group-hover/link:bg-neon-pink group-hover/link:text-white transition-all duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium">submit@rt8.co.za</span>
            </a>

            <p className="text-gray-400 text-sm mt-4">
              Send your demos directly to our submission email if you prefer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DemoSubmissions;
