import React, { useEffect, useState } from 'react';
import { Briefcase, Users, Zap, Heart, Globe } from 'lucide-react';
import ScrambledText from './textfx/ScrambledText/ScrambledText';

interface WorkAtRT8Props {
  setCurrentPage: (page: string) => void;
}

const WorkAtRT8: React.FC<WorkAtRT8Props> = ({ setCurrentPage: _ }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: 'Unity',
      description: 'Belong to a dynamic collective of fiercely like-minded individuals, united by a shared passion.'
    },
    {
      icon: Briefcase,
      title: 'Commission Based',
      description: 'Unleash complete control over your work-life balance and dictate your earning potential!'
    },
    {
      icon: Zap,
      title: 'Creative Freedom',
      description: 'Unleash your boundless creativity and boldest ideas within an empowering, supportive environment.'
    },
    {
      icon: Users,
      title: 'Learnership Opportunities',
      description: 'Whether your passion lies in music, captivating graphic design, meticulous administration, or cutting-edge web tech, discover your true calling and accelerate your growth.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Contribute to groundbreaking projects that resonate with universal impact, touching lives across the globe.'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Accelerate your professional development and unlock unparalleled networking opportunities.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 pb-24"> {/* Reduced padding */}
      <div className="max-w-6xl mx-auto px-4"> {/* Reduced max-width */}
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4"> {/* Reduced text sizes */}
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="text-white"
            >
              WORK @
            </ScrambledText>
            <ScrambledText
              as="span"
              radius={100}
              duration={1.2}
              speed={0.4}
              scrambleChars=".:"
              className="text-red-500 ml-3" // Reduced margin
            >
              RT8
            </ScrambledText>
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div> {/* Reduced width and margin */}
          <ScrambledText
            as="p"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed" // Reduced text size and max-width
          >
            Ready to ignite your career? Join our vibrant, passionate collective of trailblazing creatives and brilliant minds, and together, let's boldly shape the future. We're not just building something extraordinary—we're crafting a legacy, and we want *you* to be an integral part of it.
          </ScrambledText>
        </div>

        {/* Company Culture */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <ScrambledText
            as="h2"
            radius={80}
            duration={1.0}
            speed={0.4}
            scrambleChars=".:"
            className="text-2xl font-bold text-center text-white mb-8" // Reduced text size
          >
            Why Work With Us?
          </ScrambledText>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduced gap */}
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-black/40 backdrop-blur-md border border-red-500/20 rounded-lg p-4 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-red-500/5 ${ // Reduced padding
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 80}ms` }} // Reduced delay
              >
                <div className="flex items-center mb-3"> {/* Reduced margin */}
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-3"> {/* Reduced size and margin */}
                    <benefit.icon className="w-5 h-5 text-red-500" /> {/* Reduced icon size */}
                  </div>
                  <ScrambledText
                    as="h3"
                    radius={60}
                    duration={0.8}
                    speed={0.4}
                    scrambleChars=".:"
                    className="text-lg font-semibold text-white" // Reduced text size
                  >
                    {benefit.title}
                  </ScrambledText>
                </div>
                <ScrambledText
                  as="p"
                  radius={50}
                  duration={0.7}
                  speed={0.4}
                  scrambleChars=".:"
                  className="text-gray-300 text-sm leading-relaxed" // Reduced text size
                >
                  {benefit.description}
                </ScrambledText>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full max-w-3xl mx-auto"> {/* Reduced max-width */}
            <div className="bg-black/20 backdrop-blur-md border border-red-500/20 rounded-lg p-3"> {/* Reduced padding */}
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfpgUS0Ues8b0It12c9I8LvBp9oXA5CgI7zHo6Cbu0Aiv1hig/viewform?embedded=true" 
                width="100%" 
                height="2800" // Reduced height
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full rounded-lg"
                title="RT8 Job Application Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAtRT8;