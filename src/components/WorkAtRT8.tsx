import React, { useEffect, useState } from 'react';
import { Briefcase, Users, Zap, Heart, Globe } from 'lucide-react';

interface WorkAtRT8Props {
  setCurrentPage: (page: string) => void;
}

const WorkAtRT8: React.FC<WorkAtRT8Props> = ({ setCurrentPage }) => {
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
    <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">WORK @</span>
            <span className="text-red-500 ml-4">RT8</span>
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to ignite your career? Join our vibrant, passionate collective of trailblazing creatives and brilliant minds, and together, let's boldly shape the future. We're not just building something extraordinary—we're crafting a legacy, and we want *you* to be an integral part of it.
          </p>
        </div>

        {/* Company Culture */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className={`bg-black/40 backdrop-blur-md border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-red-500/5 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-md border border-red-500/20 rounded-lg p-4">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSfpgUS0Ues8b0It12c9I8LvBp9oXA5CgI7zHo6Cbu0Aiv1hig/viewform?embedded=true" 
                width="100%" 
                height="3250" 
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
