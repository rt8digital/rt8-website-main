import React, { useEffect, useState } from 'react';
import { Briefcase, Heart, Zap, Globe, Clock, Coffee } from 'lucide-react';

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
      icon: Globe,
      title: 'Remote First',
      description: 'Work from anywhere in the world. We believe in output, not hours in a chair.'
    },
    {
      icon: Zap,
      title: 'Creative Freedom',
      description: 'We encourage experimentation and innovation. Your ideas matter here.'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'We prioritize mental health and work-life balance for all our team members.'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Set your own schedule. We respect your time and personal commitments.'
    },
    {
      icon: Coffee,
      title: 'Team Retreats',
      description: 'Regular virtual and in-person meetups to connect and recharge.'
    },
    {
      icon: Briefcase,
      title: 'Growth Opportunities',
      description: 'Continuous learning and development paths to help you advance your career.'
    }
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-red/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            <span className="text-white">WORK AT</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-red ml-4 glow-text-pink">RT8</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Join a team of visionaries, creators, and innovators. We're building the future of music and technology,
            and we're looking for passionate individuals to help us get there.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="glass-card p-6 rounded-2xl hover:border-neon-pink/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-neon-pink/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-6 h-6 text-neon-pink group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-panel p-2 rounded-2xl border border-glass-border shadow-[0_0_30px_rgba(244,63,94,0.15)] max-w-4xl mx-auto">
            <div className="bg-deep-space rounded-xl overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSd_wXGzEuO0r9XyXkFGeO_0pCqGqoxD0PqFzFzFzFzFzFzFz/viewform?embedded=true"
                className="w-full h-[800px] border-0"
                title="Job Application Form"
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
