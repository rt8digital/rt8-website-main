import React, { useEffect, useState, useRef } from 'react';
import { Music, Target, Lightbulb } from 'lucide-react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';

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
  const containerRef = useRef<HTMLElement>(null);

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
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Our audacious mission? To spark a global revolution from the inside out! By cultivating an unparalleled network of diverse creatives and brilliant minds from every walk of life, we forge groundbreaking opportunities and ingenious solutions that radically transform your daily tasks.'
    },
    {
      icon: Lightbulb,
      title: 'Web Technology',
      description: 'As your premier web technology partner, we architect intelligent, scalable digital products that don\'t just bring ideas to life—they ignite real-world impact for ambitious SMEs, leading corporations, and visionary everyday innovators.'
    },
    {
      icon: Music,
      title: 'Music',
      description: 'As a dynamic music powerhouse, we deliver full-spectrum support—from seamless digital distribution to expert management and meticulous administration—empowering labels and artists to not just navigate, but to truly dominate the exhilarating modern music landscape.'
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative pt-16 sm:pt-24 pb-12 sm:pb-24"> {/* Reduced padding */}
      <div className="max-w-5xl mx-auto px-2 sm:px-4"> {/* Reduced max-width */}
        {/* Header */}
        <div className={`text-center mb-6 sm:mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 mobile-heading"> {/* Reduced text sizes */}
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="text-white"
            >
              ABOUT
            </ScrambledText>
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="text-red-500 ml-1.5 sm:ml-3" // Reduced margin
            >
              RT8 ROTATE GROUP
            </ScrambledText>
          </h1>
          <div className="w-12 sm:w-20 h-1 bg-red-500 mx-auto mb-3 sm:mb-6"></div> {/* Reduced width and margin */}
          <ScrambledText
            as="p"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-xs sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mobile-text-shadow px-2" // Reduced text sizes and max-width
          >
            RT8: Rotate Group is the vibrant nexus where raw creativity collides with cutting-edge technology. As a multi-national powerhouse in both the music and digital realms, we empower artists, labels, and businesses with the dynamic tools, robust infrastructure, and unwavering support they need to not just succeed, but to truly lead.
          </ScrambledText>
        </div>

        {/* Company Story */}
        <div className={`mb-6 sm:mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mobile-card rounded-lg p-3 sm:p-6 bg-black/40 backdrop-blur-sm"> {/* Reduced padding */}
            <ScrambledText
              as="span"
              radius={80}
              duration={1.0}
              speed={0.4}
              scrambleChars=".:"
              className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center mobile-heading" // Reduced text sizes
            >
              Our Story
            </ScrambledText>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-6 items-center"> {/* Reduced gap */}
              <div>
                <ScrambledText
                  as="p"
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 leading-relaxed mb-2 sm:mb-3 text-xs sm:text-sm" // Reduced text sizes and margins
                >
                  Born from a vision to shatter boundaries, we're relentlessly focused on achieving Global Domination through the exhilarating synergy of Arts & Tech.
                </ScrambledText>
                <ScrambledText
                  as="p"
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 leading-relaxed mb-2 sm:mb-3 text-xs sm:text-sm" // Reduced text sizes and margins
                >
                  What began as a passionate collective of music enthusiasts, visionary producers, electrifying DJs, and everyday creatives has blossomed into a comprehensive platform, masterfully bridging the gap between boundless creativity and ingenious, efficient solutions.
                </ScrambledText>
                <ScrambledText
                  as="p"
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 leading-relaxed text-xs sm:text-sm" // Reduced text sizes
                >
                  Today, we stand proudly at the vanguard of the digital revolution across Africa and the globe, delivering cutting-edge infrastructure and unwavering support to our thriving community.
                </ScrambledText>
              </div>
              <div className="relative">
                {slides[currentSlide].href ? (
                  <a href={slides[currentSlide].href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={slides[currentSlide].src}
                      alt={slides[currentSlide].alt}
                      className="w-full h-40 sm:h-52 object-cover rounded-lg cursor-pointer transition-all duration-500 hover:scale-105"
                    />
                  </a>
                ) : (
                  <img
                    src={slides[currentSlide].src}
                    alt={slides[currentSlide].alt}
                    className="w-full h-40 sm:h-52 object-cover rounded-lg transition-all duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent rounded-lg"></div>
                {/* Slide indicators */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-red-500' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className={`mb-6 sm:mb-12 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-3 sm:gap-6"> {/* Reduced gap */}
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`mobile-card rounded-lg p-3 sm:p-4 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-red-500/5 text-center bg-black/40 backdrop-blur-sm ${ // Reduced padding
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 80}ms` }} // Reduced delay
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4"> {/* Reduced size */}
                  <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" /> {/* Reduced icon size */}
                </div>
                <ScrambledText
                  as="span"
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 mobile-heading" // Reduced text sizes
                >
                  {value.title}
                </ScrambledText>
                <ScrambledText
                  as="p"
                  radius={50}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 leading-relaxed text-xs sm:text-sm" // Reduced text sizes
                >
                  {value.description}
                </ScrambledText>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className={`mb-6 sm:mb-12 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mobile-card rounded-lg p-3 sm:p-6"> {/* Reduced padding */}
            <ScrambledText
              as="span"
              radius={80}
              duration={1.0}
              speed={0.4}
              scrambleChars=".:"
              className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center mobile-heading" // Reduced text sizes
            >
              What We Do
            </ScrambledText>
            <div className="grid md:grid-cols-2 gap-3 sm:gap-6"> {/* Reduced gap */}
              <div>
                <ScrambledText
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-base sm:text-lg font-semibold text-red-500 mb-2 sm:mb-3" // Reduced text sizes
                >
                  Creativity
                </ScrambledText>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-300"> {/* Reduced spacing */}
                  <li className="flex items-start space-x-1.5"> {/* Reduced spacing */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div> {/* Reduced size and margin */}
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-xs sm:text-sm" // Reduced text sizes
                    >
                      Professional music production and mastering services
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-1.5"> {/* Reduced spacing */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div> {/* Reduced size and margin */}
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-xs sm:text-sm" // Reduced text sizes
                    >
                      Global distribution across all major streaming platforms
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-1.5"> {/* Reduced spacing */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div> {/* Reduced size and margin */}
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-xs sm:text-sm" // Reduced text sizes
                    >
                      Marketing and promotional support
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-1.5"> {/* Reduced spacing */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div> {/* Reduced size and margin */}
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-xs sm:text-sm" // Reduced text sizes
                    >
                      Creative development and guidance
                    </ScrambledText>
                  </li>
                </ul>
              </div>
              <div>
                <ScrambledText
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-base sm:text-lg font-semibold text-red-500 mb-2 sm:mb-3" // Reduced text sizes
                >
                  Web Technology
                </ScrambledText>
                <ul className="space-y-1.5 sm:space-y-2 text-gray-300"> {/* Reduced spacing */}
                  <li className="flex items-start space-x-1.5"> {/* Reduced spacing */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div> {/* Reduced size and margin */}
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-xs sm:text-sm" // Reduced text sizes
                    >
                      Complete infrastructure and backend support
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-1.5"> {/* Reduced spacing */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div> {/* Reduced size and margin */}
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-xs sm:text-sm" // Reduced text sizes
                    >
                      Technology solutions and digital platforms
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-1.5"> {/* Reduced spacing */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div> {/* Reduced size and margin */}
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-xs sm:text-sm" // Reduced text sizes
                    >
                      Business development and partnership opportunities
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-1.5"> {/* Reduced spacing */}
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div> {/* Reduced size and margin */}
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-xs sm:text-sm" // Reduced text sizes
                    >
                      Access to our global network and resources
                    </ScrambledText>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ScrambledText
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-lg sm:text-2xl font-bold text-white mb-3 sm:mb-4 mobile-heading" // Reduced text sizes
          >
            Ready to Join Our Community?
          </ScrambledText>
          <ScrambledText
            as="p"
            radius={60}
            duration={0.8}
            speed={0.4}
            scrambleChars=".:"
            className="text-gray-300 mb-4 sm:mb-6 max-w-xl mx-auto text-xs sm:text-sm px-2" // Reduced text sizes, margins and max-width
          >
            Whether you're an artist looking to take your career to the next level or a label
            seeking innovative infrastructure solutions, we're here to help you succeed.
          </ScrambledText>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center px-2"> {/* Reduced gap */}
            <button
              onClick={() => setCurrentPage('demo-submissions')}
              className="mobile-button text-white px-5 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-xs sm:text-sm" // Reduced padding and text sizes
            >
              <ScrambledText
                as="span"
                radius={60}
                duration={0.8}
                speed={0.4}
                scrambleChars=".:"
              >
                SUBMIT YOUR DEMO
              </ScrambledText>
            </button>
            <button
              onClick={() => setCurrentPage('meet-the-team')}
              className="border-2 border-white hover:border-red-500 text-white hover:text-red-500 px-5 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm" // Reduced padding and text sizes
            >
              <ScrambledText
                as="span"
                radius={60}
                duration={0.8}
                speed={0.4}
                scrambleChars=".:"
              >
                MEET OUR TEAM
              </ScrambledText>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
