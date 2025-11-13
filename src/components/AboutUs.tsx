import React, { useEffect, useState, useRef } from 'react';
import { Music, Users, Award, Globe, Target, Lightbulb } from 'lucide-react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';

interface AboutUsProps {
  setCurrentPage: (page: string) => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    {
      icon: Music,
      value: '500+',
      label: 'Releases',
      description: 'High-quality music releases across all genres'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Artists',
      description: 'Talented musicians in our network'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Labels',
      description: 'Partner labels using our infrastructure'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global reach and distribution'
    }
  ];

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
    <section ref={containerRef} className="min-h-screen flex items-center justify-center relative pt-20 sm:pt-32 pb-16 sm:pb-32">
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 mobile-heading">
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
              className="text-red-500 ml-2 sm:ml-4"
            >
              RT8 ROTATE GROUP
            </ScrambledText>
          </h1>
          <div className="w-16 sm:w-24 h-1 bg-red-500 mx-auto mb-4 sm:mb-8"></div>
          <ScrambledText
            as="p"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-sm sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mobile-text-shadow px-2"
          >
            RT8: Rotate Group is the vibrant nexus where raw creativity collides with cutting-edge technology. As a multi-national powerhouse in both the music and digital realms, we empower artists, labels, and businesses with the dynamic tools, robust infrastructure, and unwavering support they need to not just succeed, but to truly lead.
          </ScrambledText>
        </div>

        {/* Company Story */}
        <div className={`mb-8 sm:mb-16 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mobile-card rounded-lg p-4 sm:p-8 bg-black/40 backdrop-blur-sm">
            <ScrambledText
              as="span"
              radius={80}
              duration={1.0}
              speed={0.4}
              scrambleChars=".:"
              className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center mobile-heading"
            >
              Our Story
            </ScrambledText>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8 items-center">
              <div>
                <ScrambledText
                  as="p"
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base"
                >
                  Born from a vision to shatter boundaries, we're relentlessly focused on achieving Global Domination through the exhilarating synergy of Arts & Tech.
                </ScrambledText>
                <ScrambledText
                  as="p"
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base"
                >
                  What began as a passionate collective of music enthusiasts, visionary producers, electrifying DJs, and everyday creatives has blossomed into a comprehensive platform, masterfully bridging the gap between boundless creativity and ingenious, efficient solutions.
                </ScrambledText>
                <ScrambledText
                  as="p"
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 leading-relaxed text-sm sm:text-base"
                >
                  Today, we stand proudly at the vanguard of the digital revolution across Africa and the globe, delivering cutting-edge infrastructure and unwavering support to our thriving community.
                </ScrambledText>
              </div>
              <div className="relative">
                <img 
                  src="https://lh3.googleusercontent.com/dcZeSl1IXpMiiE1J9hswAaQvsUcQglhNgtLJFxaG-SrFXzs7QWIejba0YS0oWGBItFelWCcfdT4L0KLoJg=s265-w265-h265"
                  alt="Music Studio"
                  className="w-full h-48 sm:h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mb-8 sm:mb-16 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ScrambledText
            as="span"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-12 mobile-heading"
          >
            Our Impact
          </ScrambledText>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center mobile-card rounded-lg p-3 sm:p-6 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <stat.icon className="w-4 h-4 sm:w-6 sm:h-6 text-red-500" />
                </div>
                <ScrambledText
                  as="div"
                  radius={50}
                  duration={0.6}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2"
                >
                  {stat.value}
                </ScrambledText>
                <ScrambledText
                  as="div"
                  radius={50}
                  duration={0.6}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-red-500 font-semibold mb-1 sm:mb-2 text-xs sm:text-base"
                >
                  {stat.label}
                </ScrambledText>
                <ScrambledText
                  as="p"
                  radius={40}
                  duration={0.6}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-400 text-xs sm:text-sm"
                >
                  {stat.description}
                </ScrambledText>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className={`mb-8 sm:mb-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`mobile-card rounded-lg p-4 sm:p-6 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-red-500/5 text-center bg-black/40 backdrop-blur-sm ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                </div>
                <ScrambledText
                  as="span"
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4 mobile-heading"
                >
                  {value.title}
                </ScrambledText>
                <ScrambledText
                  as="p"
                  radius={50}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 leading-relaxed text-sm sm:text-base"
                >
                  {value.description}
                </ScrambledText>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className={`mb-8 sm:mb-16 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mobile-card rounded-lg p-4 sm:p-8">
            <ScrambledText
              as="span"
              radius={80}
              duration={1.0}
              speed={0.4}
              scrambleChars=".:"
              className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 text-center mobile-heading"
            >
              What We Do
            </ScrambledText>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              <div>
                <ScrambledText
                  radius={60}
                  duration={0.8}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-lg sm:text-xl font-semibold text-red-500 mb-3 sm:mb-4"
                >
                  Creativity
                </ScrambledText>
                <ul className="space-y-2 sm:space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-sm sm:text-base"
                    >
                      Professional music production and mastering services
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-sm sm:text-base"
                    >
                      Global distribution across all major streaming platforms
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-sm sm:text-base"
                    >
                      Marketing and promotional support
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-sm sm:text-base"
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
                  className="text-lg sm:text-xl font-semibold text-red-500 mb-3 sm:mb-4"
                >
                  Web Technology
                </ScrambledText>
                <ul className="space-y-2 sm:space-y-3 text-gray-300">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-sm sm:text-base"
                    >
                      Complete infrastructure and backend support
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-sm sm:text-base"
                    >
                      Technology solutions and digital platforms
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-sm sm:text-base"
                    >
                      Business development and partnership opportunities
                    </ScrambledText>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <ScrambledText
                      as="span"
                      radius={40}
                      duration={0.6}
                      speed={0.4}
                      scrambleChars=".:"
                      className="text-sm sm:text-base"
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
        <div className={`text-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ScrambledText
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 mobile-heading"
          >
            Ready to Join Our Community?
          </ScrambledText>
          <ScrambledText
            as="p"
            radius={60}
            duration={0.8}
            speed={0.4}
            scrambleChars=".:"
            className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-2"
          >
            Whether you're an artist looking to take your career to the next level or a label
            seeking innovative infrastructure solutions, we're here to help you succeed.
          </ScrambledText>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <button
              onClick={() => setCurrentPage('demo-submissions')}
              className="mobile-button text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-sm sm:text-base"
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
              className="border-2 border-white hover:border-red-500 text-white hover:text-red-500 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
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
