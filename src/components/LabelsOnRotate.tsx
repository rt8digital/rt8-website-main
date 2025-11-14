import React, { useEffect, useState, useRef } from 'react';
import { Building2, Music, Users, Globe, Award, TrendingUp, ExternalLink } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface LabelsOnRotateProps {
  setCurrentPage: (page: string) => void;
}

const LabelsOnRotate: React.FC<LabelsOnRotateProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Tilt effect configuration - optimized for performance
  const springValues = {
    damping: 25, // Reduced from 30
    stiffness: 80, // Reduced from 100
    mass: 1, // Reduced from 2
  };

  const rotateAmplitude = 6; // Reduced from 8
  const scaleOnHover = 1.01; // Reduced from 1.02

  // Component for individual label card with tilt effect
  const LabelCard = ({ label, index }: { label: any, index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const rotateX = useSpring(useMotionValue(0), springValues);
    const rotateY = useSpring(useMotionValue(0), springValues);
    const scale = useSpring(1, springValues);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      <motion.div
        ref={cardRef}
        className={`relative flex flex-col rounded-[16px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer group ${
          label.featured ? 'ring-2 ring-red-500/30' : ''
        } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{
          transitionDelay: `${600 + index * 80}ms`, // Reduced delay
          background: 'linear-gradient(145deg,#EF4444,#000)',
          '--spotlight-color': 'rgba(255,255,255,0.3)',
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d'
        } as any}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Spotlight effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)',
          }}
        />
        {label.featured && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2.5 py-0.5 rounded-full text-xs font-bold z-10"> {/* Reduced padding and position */}
            FEATURED
          </div>
        )}

        {/* Label Logo */}
        <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6" style={{ transform: 'translateZ(0)' }}> {/* Reduced height and padding */}
          <img
            src={label.logo}
            alt={label.name}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        {/* Label Info */}
        <div className="p-4" style={{ transform: 'translateZ(30px)' }}> {/* Reduced padding */}
          <div className="flex items-center justify-between mb-2"> {/* Reduced margin */}
            <h3 className="text-lg font-bold text-white">{label.name}</h3> {/* Reduced text size */}
            <span className="bg-red-500/20 text-red-500 px-2.5 py-0.5 rounded-full text-xs font-medium"> {/* Reduced padding */}
              {label.genre}
            </span>
          </div>

          <p className="text-gray-300 text-xs leading-relaxed mb-3"> {/* Reduced text size and margin */}
            {label.description}
          </p>

          {/* Label Stats */}
          <div className="text-center mb-3"> {/* Reduced margin */}
            <div className="text-white font-bold text-sm">{label.founded}</div> {/* Reduced text size */}
            <div className="text-gray-400 text-xs">Founded</div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center">
            <button
              onClick={() => window.location.href = label.instagram}
              className="w-full bg-red-500/20 text-red-500 hover:bg-red-500 hover:text-white px-3 py-1.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-1.5 text-sm" // Reduced padding and text size
            >
              <ExternalLink className="w-3.5 h-3.5" /> {/* Reduced icon size */}
              <span>Instagram</span>
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  const labels = [
    {
      name: 'Night Moon',
      logo: 'https://lh3.googleusercontent.com/eLaVo1OaCfrvteZl5BTlyNsjcGk5gnzpcf9I5ZOcWUU_XjtSA1GtTQJ9GewVqHqVF5slz5LgdSqWfVPVOg=s265-w265-h265',
      genre: 'Multi-Genred',
      founded: '2019',
      description: 'Established to orbit the planet and focus on stars.',
      instagram: 'https://instagram.com/nightmoonrec',
      featured: true
    },
    {
      name: 'SonicBass Records',
      logo: 'https://lh3.googleusercontent.com/UXtc9gdr80-9lIqXm0VZ90--6Q23QvMhBIl6C3oK4zUGWvpxbIrkl1vZ9RPd914IBM_nzBiU9y82wvSAgQ=s265-w265-h265',
      genre: 'Bass Focused Music',
      founded: '2014',
      description: 'The label that started it all... for us atleast.',
      instagram: 'https://instagram.com/sonicbassrec',
      featured: true
    },
    {
      name: 'Brainfreez Records',
      logo: 'https://lh3.googleusercontent.com/ojZoHS8yyS-DLAtbCDhuev12bsol7IgxE7uEVAWUX8FK3XrXdfvcj3WI0JJ8R0VXmyBb50RpSgwedfMNHQ=s265-w265-h265',
      genre: 'Pop / DnB',
      founded: '2025',
      description: 'The latest establishment coming from Canadian based DJ / Producer & Instrumentalist "FizzX"',
      instagram: 'https://www.instagram.com/fizzxmusic/',
      featured: true
    },
    {
      name: 'Aurorafields Records',
      logo: 'https://lh3.googleusercontent.com/wMBkT8-T2bVaiY4Cnb5qdfr1QCXqI0ZJLI5xcfdxzYJYv2BWRtrfdv-zhJF7l3d_ODeeBdazY38w9_IhLA=s265-w265-h265',
      genre: 'Deep House',
      founded: '2021',
      description: 'Focusing on the freshest deep, mellow grooves from around the globe.',
      instagram: 'https://www.instagram.com/aurora_fields_records/',
      featured: true
    },
    {
      name: '5Select Sounds',
      logo: 'https://lh3.googleusercontent.com/Nj1NV_fWy9DCYyv9p3lK7oBm12qdfW4cUzyxgmG6x2gd2G9vMdQtBXqmRPcj1BLFDBd0w-yNGGBMUyJIEg=s265-w265-h265',
      genre: 'Deep & Bass House',
      founded: '2024',
      description: 'Latest edition from Pando G, focusing on the dancefloor.',
      instagram: 'https://www.instagram.com/5selectsounds/',
      featured: true
    },
    
  

    {
      name: 'Drum & Debauchery',
      logo: 'https://lh3.googleusercontent.com/jShwO7ahNi_6cQDF9uowMTUtYWu12qciCY27RLD36Klxtj2viSX3vZjgUriy1HT7d85LpoZZN8_KYZ9gew=s265-w265-h265',
      genre: 'Drum & Bass',
      founded: '2025',
      description: 'Founded by the scottish wildlander Morgan Mcbain, DND in no bored game, it high impactful DRUMS with LOTS OF BASS!.',
      instagram: 'https://www.instagram.com/drum.and.debauchery/',
      featured: true
    },
    {
      name: 'Round9 Records',
      logo: 'https://lh3.googleusercontent.com/vvOEacD4zVg38TLfyUPco3366qZ-su51n_qeSNrzcGWR3wQmempQ0jPU0RSYOFo30kf3ivRaiKqmJiGpyA=s265-w265-h265',
      genre: 'Indie Rock / Pop',
      founded: '2025',
      description: 'Established by Ywonne Teixeira, empowered by her undying love for real world instruments',
      instagram: 'https://www.instagram.com/rt8.co.za/',
      featured: true
    },
    {
      name: 'BeNaam Music',
      logo: 'https://lh3.googleusercontent.com/VM9swFwNcL2fWy_3xpfUKhLQg2klUpz509oifNDdQCnMCVeTWdXlE9gX-T8YE5o8Idk_OCwlWA4yNzEIFg=s265-w265-h265',
      genre: 'Multi-Genred',
      founded: '2024',
      description: 'Founded by Zaphixx, Empowering the sounds of the orient!',
      instagram: 'https://www.instagram.com/rt8.co.za/',
      featured: true
    },
    {
      name: 'LunaTunes Records',
      logo: 'https://lh3.googleusercontent.com/b6vtY7vA7np4MaHqEpSzcLkAU7H9t1YGk7HrHn9d2w767V9uHD_Fwqii7i6mMqZ0JA60547IENJgnBzRGA=s265-w265-h265',
      genre: 'Multi-Genred',
      founded: '2023',
      description: 'Founded by JoMo Luna (previously: JoMo Beats) Luna Tunes provides the luni-est tunes straight outta Alberton',
      instagram: 'https://www.instagram.com/lunatunesrec/',
      featured: true
    },
    {
      name: 'Taijitu Audio Group',
      logo: 'https://lh3.googleusercontent.com/5K-qStJ_WhQxUFOOhs0eT6vBUlurdfgoJifPwyH330DBf78nhhXMCdoyK_dsIrEOMonRsl6A5yG3YN321A=s265-w265-h265',
      genre: 'Dubstep / Trap / Bass Music',
      founded: '2024',
      description: 'Founded by Drew Swango this Atlanta based label has begun making waves in the bass music scene. Drew comes from a proud heritage of pure creative thinking and has prior experience in the live events sector.',
      instagram: 'https://www.instagram.com/taijitu_records/',
      featured: true
    },
    {
      name: 'Niyah Fiyah Records',
      logo: 'https://lh3.googleusercontent.com/9_BsaqR9XoF0t8nfXQ4RpdvjBt2Djo3q7rZUAU-lB82MUSjwJoZHcYBYYxutMAKefapF8ivhzEgVoLYgmQ=s265-w265-h265',
      genre: 'Dancehall',
      founded: '2024',
      description: 'Dancehall expansion from German based Producer / Lyricist "Victory Nation".',
      instagram: 'https://www.instagram.com/rvbeatzofficial_3/',
      featured: true
    }
  ];

  const stats = [
    {
      icon: Building2,
      value: '15+',
      label: 'Partner Labels',
      description: 'Growing network of specialized music labels'
    },
    {
      icon: Users,
      value: '200+',
      label: 'Signed Artists',
      description: 'Talented musicians across all genres'
    },
    {
      icon: Music,
      value: '500+',
      label: 'Total Releases',
      description: 'High-quality music releases and counting'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Countries',
      description: 'Global reach and distribution network'
    }
  ];

  const services = [
    {
      icon: Music,
      title: 'Music Distribution',
      description: 'Global digital distribution across all major streaming platforms and stores.'
    },
    {
      icon: TrendingUp,
      title: 'Marketing Support',
      description: 'Comprehensive marketing campaigns and promotional strategies for maximum reach.'
    },
    {
      icon: Award,
      title: 'Artist Development',
      description: 'Professional guidance and resources to help artists grow their careers.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to our international network of industry professionals and partners.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 pb-24"> {/* Reduced padding */}
      <div className="max-w-6xl mx-auto px-4"> {/* Reduced max-width */}
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4"> {/* Reduced text sizes */}
            <span className="text-white">LABELS ON</span>
            <span className="text-red-500 ml-3">ROTATE</span> {/* Reduced margin */}
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div> {/* Reduced width and margin */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"> {/* Reduced text size and max-width */}
            Discover the diverse ecosystem of music labels that benefit from RT8's innovative infrastructure. 
            Each label brings unique sounds and artistic vision to our collective mission.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}> {/* Reduced gap and margin */}
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center bg-black/40 backdrop-blur-md border border-red-500/20 rounded-lg p-4 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 ${ // Reduced padding
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 80}ms` }} // Reduced delay
            >
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3"> {/* Reduced size and margin */}
                <stat.icon className="w-5 h-5 text-red-500" /> {/* Reduced icon size */}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div> {/* Reduced text size and margin */}
              <div className="text-red-500 font-semibold mb-1 text-sm">{stat.label}</div> {/* Reduced text size and margin */}
              <div className="text-gray-400 text-xs">{stat.description}</div> {/* Reduced text size */}
            </div>
          ))}
        </div>

        {/* Labels Grid */}
        <div className={`mb-12 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold text-center text-white mb-8">Our Partner Labels</h2> {/* Reduced text size and margin */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Reduced gap */}
            {labels.map((label, index) => (
              <LabelCard key={label.name} label={label} index={index} />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className={`mb-12 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold text-center text-white mb-8">What We Provide</h2> {/* Reduced text size and margin */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Reduced gap */}
            {services.map((service, index) => (
              <div 
                key={service.title}
                className={`bg-black/40 backdrop-blur-md border border-red-500/20 rounded-lg p-4 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-red-500/5 text-center ${ // Reduced padding
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1100 + index * 80}ms` }} // Reduced delay
              >
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3"> {/* Reduced size and margin */}
                  <service.icon className="w-5 h-5 text-red-500" /> {/* Reduced icon size */}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3> {/* Reduced text size and margin */}
                <p className="text-gray-300 text-xs leading-relaxed">{service.description}</p> {/* Reduced text size */}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold text-white mb-4">Want to Join Our Network?</h2> {/* Reduced text size and margin */}
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm"> {/* Reduced text size, margin and max-width */}
            If you're running a music label and want to benefit from our infrastructure and network, 
            we'd love to hear from you. Let's build the future of music together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"> {/* Reduced gap */}
            <button 
              onClick={() => window.location.href = 'mailto:info@rt8.co.za?subject=Label Partnership Inquiry'}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-sm" // Reduced padding and text size
            >
              PARTNER WITH US
            </button>
            <button 
              onClick={() => setCurrentPage('home')}
              className="border-2 border-white hover:border-red-500 text-white hover:text-red-500 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm" // Reduced padding and text size
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabelsOnRotate;