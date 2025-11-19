import React, { useEffect, useState, useRef } from 'react';
import { Music, Globe, Users, BarChart, Radio, Zap, Disc, Mic2 } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface LabelsOnRotateProps {
  setCurrentPage: (page: string) => void;
}

const LabelsOnRotate: React.FC<LabelsOnRotateProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Tilt effect configuration
  const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
  };

  const rotateAmplitude = 10;
  const scaleOnHover = 1.02;

  const LabelCard = ({ label }: { label: any }) => {
    const cardRef = useRef<HTMLAnchorElement>(null);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;

      const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
      const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

      rotateX.set(rotationX);
      rotateY.set(rotationY);
    };

    const handleMouseEnter = () => {
      scale.set(scaleOnHover);
    };

    const handleMouseLeave = () => {
      scale.set(1);
      rotateX.set(0);
      rotateY.set(0);
    };

    return (
      <motion.a
        href={label.link}
        target="_blank"
        rel="noopener noreferrer"
        ref={cardRef}
        className="relative block h-full"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        } as any}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="glass-card p-6 rounded-3xl h-full border border-glass-border hover:border-neon-cyan/50 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden">
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.1), transparent 70%)',
            }}
          />

          <div className="w-32 h-32 mb-6 relative z-20 rounded-full overflow-hidden border-2 border-glass-border group-hover:border-neon-cyan transition-colors duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <img
              src={label.logo}
              alt={label.name}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors z-20">{label.name}</h3>
          <p className="text-neon-red text-sm font-bold mb-4 z-20 tracking-wider">{label.genre}</p>
          <p className="text-gray-400 text-sm leading-relaxed z-20 font-light">
            {label.description}
          </p>

          <div className="mt-auto pt-6 z-20">
            <span className="text-xs font-bold text-white border border-white/10 px-3 py-1 rounded-full group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/50 transition-all duration-300">
              VISIT LABEL
            </span>
          </div>
        </div>
      </motion.a>
    );
  };

  const labels = [
    {
      name: 'SonicBass Records',
      genre: 'PSYTRANCE / TECHNO',
      description: 'A powerhouse of psychedelic beats and driving techno rhythms, pushing the boundaries of the underground sound.',
      logo: 'https://lh3.googleusercontent.com/UXtc9gdr80-9lIqXm0VZ90--6Q23QvMhBIl6C3oK4zUGWvpxbIrkl1vZ9RPd914IBM_nzBiU9y82wvSAgQ=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/sonicbass/portal'
    },
    {
      name: 'Aurorafields',
      genre: 'DEEP HOUSE / MELODIC',
      description: 'Crafting ethereal soundscapes and emotive melodies that transport listeners to another dimension of deep house.',
      logo: 'https://lh3.googleusercontent.com/Lr4kwuVfBE9TR1u7nuOTpQxFH2isZvd_-9ZRoPkuxYSRTdH7MGlH9qH7h4EbhsIs7dBGKht0WFGd8oaTOA=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/aurorafields/portal'
    },
    {
      name: 'Round9',
      genre: 'BASS / DUBSTEP',
      description: 'Heavy-hitting bass lines and earth-shattering drops for the true bass heads and dubstep enthusiasts.',
      logo: 'https://lh3.googleusercontent.com/vvOEacD4zVg38TLfyUPco3366qZ-su51n_qeSNrzcGWR3wQmempQ0jPU0RSYOFo30kf3ivRaiKqmJiGpyA=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/round9/portal'
    },
    {
      name: 'LunaTunes',
      genre: 'LO-FI / CHILL',
      description: 'The perfect soundtrack for late nights and early mornings, featuring dusty beats and nostalgic vibes.',
      logo: 'https://lh3.googleusercontent.com/B0Pu7sVfZ4IgpQaaDg0kW2Hb8VnrzO_yFP3ueTSK0mpGiafkPHBKGhptBlVkZFsV_CuDDg6dhtd821c_zw=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/lunatunes/portal'
    },
    {
      name: 'Niyah Fiyah',
      genre: 'AFRO HOUSE / TRIBAL',
      description: 'Celebrating the rhythmic soul of Afro House with infectious grooves and tribal percussion.',
      logo: 'https://lh3.googleusercontent.com/9_BsaqR9XoF0t8nfXQ4RpdvjBt2Djo3q7rZUAU-lB82MUSjwJoZHcYBYYxutMAKefapF8ivhzEgVoLYgmQ=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/niyahfiyah/portal'
    },
    {
      name: 'Drum & Debauchery',
      genre: 'DRUM AND BASS',
      description: 'High-octane drum and bass that fuels the dancefloor with relentless energy and precision production.',
      logo: 'https://lh3.googleusercontent.com/jShwO7ahNi_6cQDF9uowMTUtYWu12qciCY27RLD36Klxtj2viSX3vZjgUriy1HT7d85LpoZZN8_KYZ9gew=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/drumanddebauchery/portal'
    },
    {
      name: '5Select',
      genre: 'HOUSE / TECH HOUSE',
      description: 'Curating the finest selection of house and tech house cuts for the discerning clubber.',
      logo: 'https://lh3.googleusercontent.com/Nj1NV_fWy9DCYyv9p3lK7oBm12qdfW4cUzyxgmG6x2gd2G9vMdQtBXqmRPcj1BLFDBd0w-yNGGBMUyJIEg=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/5select/portal'
    },
    {
      name: 'BrainFreez',
      genre: 'HARD DANCE / PSY',
      description: 'Mind-bending hard dance and psytrance that freezes your brain and melts your face.',
      logo: 'https://lh3.googleusercontent.com/mZ5dzkN4DMAl7EzMZkpsh4mNtPJt2WOeAMy8_qSyo_blPlB_3jXrlDzI4_wwvoCV2f_Bbvlf-T0usV1ftQ=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/brainfreez/portal'
    },
    {
      name: 'Taijitu',
      genre: 'PROGRESSIVE / MELODIC',
      description: 'Finding balance in the spectrum of sound, blending progressive elements with melodic storytelling.',
      logo: 'https://lh3.googleusercontent.com/5K-qStJ_WhQxUFOOhs0eT6vBUlurdfgoJifPwyH330DBf78nhhXMCdoyK_dsIrEOMonRsl6A5yG3YN321A=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/taijitu/portal'
    },
    {
      name: 'Night Moon',
      genre: 'AMBIENT / DOWNTEMPO',
      description: 'Exploring the darker, quieter side of electronic music with atmospheric textures and downtempo rhythms.',
      logo: 'https://lh3.googleusercontent.com/eLaVo1OaCfrvteZl5BTlyNsjcGk5gnzpcf9I5ZOcWUU_XjtSA1GtTQJ9GewVqHqVF5slz5LgdSqWfVPVOg=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/nightmoon/portal'
    },
    {
      name: 'BeNaam',
      genre: 'EXPERIMENTAL / IDM',
      description: 'Defying genres and expectations with experimental sounds and intelligent dance music.',
      logo: 'https://lh3.googleusercontent.com/VM9swFwNcL2fWy_3xpfUKhLQg2klUpz509oifNDdQCnMCVeTWdXlE9gX-T8YE5o8Idk_OCwlWA4yNzEIFg=s265-w265-h265',
      link: 'https://www.labelradar.com/labels/benaam/portal'
    }
  ];

  const stats = [
    { label: 'Active Labels', value: '11+', icon: Disc },
    { label: 'Artists Signed', value: '500+', icon: Users },
    { label: 'Global Reach', value: '150+', icon: Globe },
    { label: 'Releases', value: '1000+', icon: Music },
  ];

  const services = [
    {
      icon: BarChart,
      title: 'Distribution & Analytics',
      description: 'Comprehensive distribution to all major platforms with detailed analytics and reporting.'
    },
    {
      icon: Radio,
      title: 'Marketing & PR',
      description: 'Strategic marketing campaigns and PR support to get your music heard by the right audience.'
    },
    {
      icon: Zap,
      title: 'Sync & Licensing',
      description: 'Opportunities for placement in film, TV, games, and advertising.'
    },
    {
      icon: Mic2,
      title: 'Artist Development',
      description: 'Guidance and support to help artists refine their sound and build their brand.'
    }
  ];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            <span className="text-white">LABELS ON</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-red ml-4 glow-text-cyan">ROTATE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Discover the diverse ecosystem of labels powering the Rotate network.
            From underground techno to ethereal ambient, we cover the full spectrum of electronic music.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 rounded-2xl text-center group hover:bg-white/5 transition-colors duration-300">
              <div className="w-12 h-12 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-neon-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-1 glow-text-cyan">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Labels Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {labels.map((label) => (
            <LabelCard key={label.name} label={label} />
          ))}
        </div>

        {/* Services Section */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-display font-bold text-center text-white mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card p-6 rounded-2xl hover:border-neon-red/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-neon-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-neon-red group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-panel p-10 rounded-3xl inline-block max-w-4xl w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-red/10 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Start Your Label Journey
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Are you a label owner looking to take your brand to the next level?
                Partner with Rotate and access our global infrastructure and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = 'mailto:contact@rt8.co.za'}
                  className="btn-primary"
                >
                  CONTACT US
                </button>
                <button
                  onClick={() => setCurrentPage('demo-submissions')}
                  className="btn-glass"
                >
                  SUBMIT DEMO
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LabelsOnRotate;
