import React, { useEffect, useState } from 'react';
import { Music, Target, Lightbulb, ArrowRight } from 'lucide-react';

interface Slide {
  src: string;
  alt: string;
  href?: string;
}

interface AboutUsProps {
  setCurrentPage: (page: string) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      src: 'https://lh3.googleusercontent.com/0cwc6C59JR6o4On9YAolXsSHij51xwGLy6ZgOIze8svASE4gwzA7hqejdEbmxDG4U6UmLMcuX_IWR7rsGg=s265-w265-h265',
      alt: 'Digital Services',
      href: 'https://digital.rt8.co.za'
    },
    {
      src: 'https://lh3.googleusercontent.com/t9c3eGE-Bzdgm4iLuNC1i7kLp5DurIXJd-_7DsVNOh4k8R2sdxFUxLEzKpiUUAKXWeKoWOZ6k5gDbo21FA=s265-w265-h265',
      alt: 'RT8 Services'
    },
    {
      src: 'https://lh3.googleusercontent.com/VhSDOZfgu2krNvuCpf0BPlvcI7g40XW3zSAKMxua55129FeVAOwBmlrY2nXuZkjvYMQ3bY1wTrcx_uzJQQ=s265-w265-h265',
      alt: 'Music Services',
      href: 'https://music.rt8.co.za'
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            <span className="text-white">ABOUT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-pink ml-4 glow-text-red">RT8</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            The vibrant nexus where raw creativity collides with cutting-edge technology.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Main Story Card - Spans 2 columns */}
          <div className={`md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-red/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-neon-red/20"></div>

            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center">
              <span className="w-2 h-8 bg-neon-red mr-3 rounded-full"></span>
              Our Story
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Born from a vision to shatter boundaries, we're relentlessly focused on achieving Global Domination through the exhilarating synergy of Arts & Tech.
              </p>
              <p>
                What began as a passionate collective of music enthusiasts, visionary producers, electrifying DJs, and everyday creatives has blossomed into a comprehensive platform, masterfully bridging the gap between boundless creativity and ingenious, efficient solutions.
              </p>
              <p>
                Today, we stand proudly at the vanguard of the digital revolution across Africa and the globe.
              </p>
            </div>
          </div>

          {/* Image Carousel Card */}
          <div className={`glass-card rounded-3xl p-2 relative overflow-hidden transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-white font-bold text-lg">{slide.alt}</p>
                    {slide.href && (
                      <a href={slide.href} target="_blank" rel="noopener noreferrer" className="text-neon-cyan text-sm flex items-center mt-1 hover:underline">
                        Visit Site <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission Card */}
          <div className={`glass-card rounded-3xl p-8 transition-all duration-700 delay-300 hover:border-neon-pink/30 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-12 h-12 bg-neon-pink/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="w-6 h-6 text-neon-pink" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To spark a global revolution from the inside out! Cultivating an unparalleled network of diverse creatives to forge groundbreaking opportunities.
            </p>
          </div>

          {/* Tech Card */}
          <div className={`glass-card rounded-3xl p-8 transition-all duration-700 delay-400 hover:border-neon-cyan/30 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-12 h-12 bg-neon-cyan/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-6 h-6 text-neon-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Technology</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Architecting intelligent, scalable digital products that ignite real-world impact for ambitious SMEs and visionaries.
            </p>
          </div>

          {/* Music Card */}
          <div className={`glass-card rounded-3xl p-8 transition-all duration-700 delay-500 hover:border-neon-red/30 group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-12 h-12 bg-neon-red/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Music className="w-6 h-6 text-neon-red" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Music</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering full-spectrum support—from seamless digital distribution to expert management—empowering labels and artists to dominate.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className={`relative rounded-3xl overflow-hidden p-12 text-center transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-red/20 to-neon-pink/20 backdrop-blur-xl"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Ready to Join Our Community?</h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Whether you're an artist looking to take your career to the next level or a label seeking innovative infrastructure solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('demo-submissions')}
                className="btn-primary"
              >
                Submit Your Demo
              </button>
              <button
                onClick={() => setCurrentPage('meet-the-team')}
                className="btn-glass"
              >
                Meet Our Team
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
