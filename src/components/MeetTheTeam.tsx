import React, { useEffect, useState, useRef } from 'react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

import { motion, useMotionValue, useSpring } from 'framer-motion';

interface MeetTheTeamProps {
  setCurrentPage: (page: string) => void;
}

const MeetTheTeam: React.FC<MeetTheTeamProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Tilt effect configuration
  const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
  };

  const rotateAmplitude = 10; // Reduced from 12
  const scaleOnHover = 1.03; // Reduced from 1.05

  // Component for individual team member card with tilt effect
  const TeamMemberCard = ({ member, index }: { member: any, index: number }) => {
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
      setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
      scale.set(1);
      rotateX.set(0);
      rotateY.set(0);
      setHoveredIndex(null);
    };

    return (
      <motion.div
        ref={cardRef}
        className={`relative flex flex-col rounded-[16px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer group ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          transitionDelay: `${300 + index * 80}ms`, // Reduced delay
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
        {/* Member Image with Glitch Effects */}
        <div className="relative h-56 overflow-hidden" style={{ transform: 'translateZ(0)' }}> {/* Reduced height from h-64 */}
          <img
            src={hoveredIndex === index ? member.imageHover : member.imageStandard}
            alt={member.name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 glitch-image rounded-[12px]" /* Reduced border radius */
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Glitch overlay effects */}
          <div className="glitch-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="glitch-layer-1 absolute inset-0 bg-red-500/20 mix-blend-multiply"></div>
            <div className="glitch-layer-2 absolute inset-0 bg-cyan-500/20 mix-blend-screen"></div>
            <div className="glitch-layer-3 absolute inset-0 bg-yellow-500/10 mix-blend-overlay"></div>
          </div>

          {/* Scanlines effect */}
          <div className="scanlines absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

          <div className="absolute bottom-3 left-3 right-3 z-10"> {/* Reduced padding */}
            <h3 className="text-lg font-bold text-white mb-1 glitch-text">{member.name}</h3> {/* Reduced text size */}
            <p className="text-red-500 font-medium text-sm">{member.role}</p> {/* Reduced text size */}
          </div>
        </div>

        {/* Member Info */}
        <div className="p-4" style={{ transform: 'translateZ(30px)' }}> {/* Reduced padding from p-6 */}
          <div className="mb-3"> {/* Reduced margin */}
            <span className="inline-block bg-red-500/20 text-red-500 px-2.5 py-0.5 rounded-full text-xs font-medium"> {/* Reduced padding */}
              {member.department}
            </span>
          </div>

          <p className="text-gray-300 text-xs leading-relaxed mb-3"> {/* Reduced text size and margin */}
            {member.bio}
          </p>

          {/* Skills */}
          <div className="mb-3"> {/* Reduced margin */}
            <h4 className="text-white font-semibold mb-1.5 text-xs">Expertise:</h4> {/* Reduced text size and margin */}
            <div className="flex flex-wrap gap-1.5"> {/* Reduced gap */}
              {member.skills.map((skill: string) => (
                <span
                  key={skill}
                  className="bg-black/60 text-gray-300 px-1.5 py-0.5 rounded text-xs hover:bg-red-500/20 hover:text-red-500 transition-colors duration-300" /* Reduced padding */
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-2"> {/* Reduced spacing */}
            {member.social.email && (
              <a
                href={`mailto:${member.social.email}`}
                className="w-7 h-7 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all duration-300 hover:scale-110" /* Reduced size */
                title="Email"
              >
                <Mail className="w-3.5 h-3.5" /> {/* Reduced icon size */}
              </a>
            )}
            {member.social.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all duration-300 hover:scale-110" /* Reduced size */
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" /> {/* Reduced icon size */}
              </a>
            )}
            {member.social.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all duration-300 hover:scale-110" /* Reduced size */
                title="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" /> {/* Reduced icon size */}
              </a>
            )}
            {member.social.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all duration-300 hover:scale-110" /* Reduced size */
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" /> {/* Reduced icon size */}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  // Team data based on typical music label structure
  const teamMembers = [
    {
      name: 'Ilyas Shamoon',
      role: 'Founder',
      department: 'Music & Digital',
      bio: 'No need to pay this bro much attention, he just enjoys creating stuff out of nothing, like music or these websites you see.',
      imageStandard: 'https://lh3.googleusercontent.com/MNoTybJTjs--lcDuXcjKA0Mms5LXOrRrvsNw6C9oW_aQYbkSW-kb6zmjp7i1HkZbDTMWy6i7JARNx8o_cg=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/P-Y_mTizhfzlL-MljvpLY83C5Rh0xarR1auLWpMLZFtTUnRM6pPcaTE7l00h4PcvI-FIZRz2hdr_qi_Kcw=s265-w265-h265', // Pexels image for hover
      skills: ['Operations', 'Web Dev', 'Product Management & Administration, Producer / DJ'],
      social: {
        email: 'ilyas@rt8.co.za',
        linkedin: 'https://www.linkedin.com/in/ilyas-shamoon-48698a134/',
        instagram: 'https://instagram.com/aytrium.wav'
      }
    },
    {
      name: 'Dovydas Venslovas',
      role: 'Director | Music Division',
      department: 'Music',
      bio: 'One of the OG founders of SonicBass Records, the Label that started the 10 year journey leading to the establishment of RT8, there has been speculation that Dovydas is behind "Fictional Dovy" but we can vouch for the fact that we have neither seen Dovydas or Fictional Dovy in the same room together...',
      imageStandard: 'https://lh3.googleusercontent.com/FnKdNIzeXL0vUxlfW6PcA4GlL--MxVFM5XR-ayzDzzGsj5qa-EK0UmxlW2Di7YMSWPfYJ9gg3E2VJdgjsQ=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/07sPzuJoEIWCAkBfYHy8F5p9GpctVR3j2I89FSexXJzrk3BT1U504btwB5Vw1iLdAQYwP0y6L_MmmzSBWw=s265-w265-h265', // Pexels image for hover
      skills: ['Radio Persona', 'Operations', 'DJ / Producer / Lover'],
      social: {
        email: 'dovydas@rt8.co.za',
        instagram: 'https://www.instagram.com/fictionaldovy/',
        
      }
    },
    {
      name: 'Katon',
      role: 'CEO | Rotate Group',
      department: 'Music & Digital',
      bio: 'Katon is the Swiss Army Knife of the RT8 team. A multi-instrumentalist, Music Producer, Festival and Club DJ, living near the ocean gives him *special capabilities*... Or maybe its the coffee, we cant really tell!',
      imageStandard: 'https://lh3.googleusercontent.com/p/AF1QipPx1cj2GFN8L-n1M1-Qilfaq8a5C-d4C-a-K-yF=w223-h279-n-k-no-nu',
      imageHover: 'https://lh3.googleusercontent.com/jyZmqbgGfxHrcGH59wN-UQFH5NY87GYYvpRK81-mhSKXhULG_NcVoeiJ1CkU03_Ksrt_druh41103WnpUw=s265-w265-h265', 
      skills: ['Caffeine Consumption', 'Operations', 'DJ / Producer'],
      social: {
        email: 'testdriver@rt8.co.za',
        instagram: 'https://www.instagram.com/testdrivermusic/',
        
      }
    },
    {
      name: 'Jonathan Moore',
      role: 'Event Manager & Graphic Designer',
      department: 'Music & Digital',
      bio: 'JoMo is one of the coolest gents on our team, mad photoshop skills and the ability to throw the craziest parties, makes him a valued teammate, We also really hope his singing career takes off!!!',
      imageStandard: 'https://lh3.googleusercontent.com/6ES2CmNVASNTZoPK03UO0unSHGgUu3IbyKjvloowrM0MN_3UMH4k2HeDXtN-XQuEcGwz_p355el1BFAAzw=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/G_-orBLpal-9GtqLukk0BPN5pOek9IZ4AW6s3iKoSz1UN9VV-McxLecgEuW_1FTE0m9yRXP1Czn02Z5ucA=s265-w265-h265', // Pexels image for hover
      skills: ['Audio Production', 'Operations', 'Graphic Design'],
      social: {
        email: 'jomo@rt8.co.za',
        instagram: 'https://www.instagram.com/jomo.luna/',
        
      }
    },
    {
      name: 'Rhyan Hendricks',
      role: 'Manager | Founder: Aurorafields, Sanctimony, 5select',
      department: 'Music',
      bio: 'Rhyan, also known as Pando G, the moodiest homie on the rotate crew, but also a mad creative genius making biig moves in the deep house scene!',
      imageStandard: 'https://lh3.googleusercontent.com/ku9slUbAfGIulTxy-KSj6Cufvcy9MByFhQQKWOJ36yFiiBLKihqqOcj9Do-C6T8zT1J8MMUboQaAyTgWTw=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/uWHZv-w_ANTBRRm7IB0rIsX2aKG1jMedMvrXfiI61Zxl5bMDXY8Ayq9wdF8BHVFeB5O2TR68ropTOIyWdw=s265-w265-h265', // Pexels image for hover
      skills: ['Audio Production', 'Operations', 'Acquisitions'],
      social: {
        email: 'rhyan@rt8.co.za',
        instagram: 'https://www.instagram.com/pando.g_official/',
        
      }
    },
    {
      name: 'Ywonne Teixeira',
      role: 'Marketing Administrator',
      department: 'Music',
      bio: 'Ywonne is our friendly neighbourhood aunty with the biggest heart, she has been with Rotate since its inception, she enjoys sipping Piña Coladas and getting caught in the rain. She also enjoys music and watching artists establish their dreams...',
      imageStandard: 'https://lh3.googleusercontent.com/7kOf_oA3i2tVg-TT78HOYdiPduwcLJePiER_rcZ7bxU6SDMtzAuso5L6S5GMaG0O5mx1LJMdnIBmr9hT2A=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/CkPt3ZWFZTQbHVtfkzNgeLhL9-b5s2_OznVEhDhvGD2f_Um48XcUULU8D85vU9lP657FoZFFFYLsl6Ny7w=s265-w265-h265', // Pexels image for hover
      skills: ['Digital Marketing', 'Operations', 'Administration'],
      social: {
        email: 'ywonne@rt8.co.za',
        instagram: 'https://www.instagram.com/ywonne.teixeira/',
        
      }
    },
    {
      name: 'Drew Swango',
      role: 'Director - US',
      department: 'Music & Digital',
      bio: 'Drew (the Djinn) Swango, Founder of TAG is a well presenced music wizz and acquirer of talents...',
      imageStandard: 'https://lh3.googleusercontent.com/p/AF1QipMCGK1HUU9PdAxRRlzjoggM-_K1D2hD2bbtagzi=s680-w680-h510-rw',
      imageHover: 'https://lh3.googleusercontent.com/FlU3x41nZ0LrU4yUu_xTiDP_puTPts0Fm-eRCjV5i5alQLMdaikzwx40XTyaWkc_a0zW3Zg9miINzUpBKA=s265-w265-h265', // Pexels image for hover
      skills: ['Music Production', 'Talent Acquisition', 'Operations'],
      social: {
        email: 'drew@rt8.co.za',
        instagram: 'https://www.instagram.com/drewatlswango/',
        linkedin: 'https://www.linkedin.com/in/drew-swango-625152230/',
      }
    },
    {
      name: 'Alfaid Maqsood',
      role: 'Director - Asia / Mena',
      department: 'Music',
      bio: 'Zaphixx is our local Pakistani homie from Karachi and founder of BeNaam Records, he likes chai, playing dying light with the homies and dislikes efficient time management, Zaphixx is a talented musician and DJ - who also happens to be balding',
      imageStandard: 'https://lh3.googleusercontent.com/p/AF1QipN7s1TL_j-YwK4AbpP5xZG4wFR9F5STKYSxsykv=s680-w680-h510-rw',
      imageHover: 'https://lh3.googleusercontent.com/0F1rIgAc_sjNjM8PBDWnthzbC4-MzbOkEIT64HbhqGJokYNwTs49sAvIKlFdb6m0guLGlD0w-oyQv8phXw=s265-w265-h265', // Pexels image for hover
      skills: ['Operations', 'Talent Acquisition', 'Music Producer / DJ'],
      social: {
        email: 'alfaid@rt8.co.za',
        linkedin: 'https://www.linkedin.com/in/muhammad-alfaid-maqsood-ba1398333/',
        instagram: 'https://www.instagram.com/zaphixxofficial/',
      }
			},
		{
      name: 'Vijay Singh',
      role: 'A&R',
      department: 'Music',
      bio: 'Vijay’s been a Hard Dance heavyweight since the early 2000s, spinning UK Hard House and Trance across KZN’s biggest stages. As J303, he’s charted globally, heads up A&R at two labels, and co-founded more collectives than your average rave has lasers.',
      imageStandard: 'https://lh3.googleusercontent.com/34rCEkWy2f2dT-obr8400qWik_kb_Ori0vzIxxV3xMkqrhHlFhHJyd6Z0C5WmwOQBjrwkUaosErXgFh_5w=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/1gmFlYgZCc8TpBz8bvvrYWM2zfUQKEL_5pvSdHW1jcOd_Er-S_t3f8Ej_SNiAtqpBtT18uOQijWppNobiw=s265-w265-h265', // Pexels image for hover
      skills: ['Operations', 'Talent Acquisition', 'Music Producer / DJ'],
      social: {
        email: 'vijay@rt8.co.za',
        linkedin: 'https://www.linkedin.com/in/muhammad-alfaid-maqsood-ba1398333/',
        instagram: 'https://www.instagram.com/zaphixxofficial/',
      }
			},
      {
      name: 'John Quinton Bruce',
      role: 'Lead Operator',
      department: 'Music & Digital',
      bio: 'John aka Hardmasters is a seasoned music producer and first time vibe coder assisting us with day to day operations and the usual bullsh*t.',
      imageStandard: 'https://lh3.googleusercontent.com/0cN5Ftg0Y7YaagI4b-eOnQLSq_bYVYrzNk9T90ywCMaYMStWjfxEPoUc4MuKEV04S2mDBdqTro6VF9A0IA=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/epPyOv-a5xPQu0PNqWodD8d37qAVmlAtpfKSDnnpEQQI1fNQLU1buxCgIL_J2IGdD05LX76JiUJebmzKZg=s265-w265-h265', // Pexels image for hover
      skills: ['Operations', 'Vibe Coding', 'Music Producer / DJ'],
      social: {
        email: 'john@rt8.co.za',
        instagram: 'https://www.instagram.com/hardmasterz/',
      }
			},
		{
      name: 'Alexandre Marrier Dunienville',
      role: 'Digital Administrator',
      department: 'Music',
      bio: 'The latest addition to the Music Administration Team, Alex is here to ensure smooth operations and efficient talent acquisition within the department.',
      imageStandard: 'https://lh3.googleusercontent.com/SF2TFWgUU11-00lgfz4g-Tbek0uUc5LNwGcW9SUrGojTUMnGQR9PiB7SLOZwNAcxpedDveNmh9S3ke0lJg=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/qeeNPubFXLnriOjK5He7YTysLQNOwH4LLjGBZYObT5SyS5anIt9sO9-LmhDao5l9s0r8ZgLrDn4EnZWX5w=s265-w265-h265', // Pexels image for hover
      skills: ['Operations', 'Talent Acquisition'],
      social: {
        email: 'alex@rt8.co.za',
        instagram: 'https://www.instagram.com/teh_dee/',
      }
    },
  ];



  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">MEET</span>
            <span className="text-red-500 ml-4">THE TEAM</span>
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The creative minds and industry experts behind RT8 Rotate Group's success. 
            Our diverse team brings together decades of experience in music, technology, and innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-6">Want to Join Our Team?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for music and innovation. 
            Check out our current opportunities and become part of the RT8 family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('work-at-rt8')}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              KICKSTART YOUR JOURNEY
            </button>
            <button 
              onClick={() => setCurrentPage('home')}
              className="border-2 border-white hover:border-red-500 text-white hover:text-red-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              BACK TO HOME
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .glitch-image {
            position: relative;
          }

          .glitch-image:hover {
            animation: glitch 0.3s infinite;
          }

          .glitch-layer-1 {
            animation: glitch-1 0.6s infinite;
          }

          .glitch-layer-2 {
            animation: glitch-2 0.8s infinite;
          }

          .glitch-layer-3 {
            animation: glitch-3 1s infinite;
          }

          .scanlines {
            background: repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            );
            animation: scanlines 0.1s linear infinite;
          }

          .glitch-text:hover {
            animation: text-glitch 0.5s infinite;
          }

          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }

          @keyframes glitch-1 {
            0% { 
              clip-path: inset(40% 0 61% 0);
              transform: translate(-2px, -2px);
            }
            20% { 
              clip-path: inset(92% 0 1% 0);
              transform: translate(2px, 2px);
            }
            40% { 
              clip-path: inset(43% 0 1% 0);
              transform: translate(-2px, 2px);
            }
            60% { 
              clip-path: inset(25% 0 58% 0);
              transform: translate(2px, -2px);
            }
            80% { 
              clip-path: inset(54% 0 7% 0);
              transform: translate(-2px, -2px);
            }
            100% { 
              clip-path: inset(58% 0 43% 0);
              transform: translate(0);
            }
          }

          @keyframes glitch-2 {
            0% { 
              clip-path: inset(25% 0 58% 0);
              transform: translate(2px, 1px);
            }
            20% { 
              clip-path: inset(54% 0 7% 0);
              transform: translate(-1px, -2px);
            }
            40% { 
              clip-path: inset(58% 0 43% 0);
              transform: translate(1px, 2px);
            }
            60% { 
              clip-path: inset(40% 0 61% 0);
              transform: translate(-2px, 1px);
            }
            80% { 
              clip-path: inset(92% 0 1% 0);
              transform: translate(2px, -1px);
            }
            100% { 
              clip-path: inset(43% 0 1% 0);
              transform: translate(0);
            }
          }

          @keyframes glitch-3 {
            0% { 
              clip-path: inset(58% 0 43% 0);
              transform: translate(1px, -1px);
            }
            25% { 
              clip-path: inset(25% 0 58% 0);
              transform: translate(-1px, 1px);
            }
            50% { 
              clip-path: inset(92% 0 1% 0);
              transform: translate(1px, 1px);
            }
            75% { 
              clip-path: inset(40% 0 61% 0);
              transform: translate(-1px, -1px);
            }
            100% { 
              clip-path: inset(54% 0 7% 0);
              transform: translate(0);
            }
          }

          @keyframes scanlines {
            0% { transform: translateY(0); }
            100% { transform: translateY(4px); }
          }

          @keyframes text-glitch {
            0% { 
              text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                          0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            }
            15% { 
              text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                          0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            }
            16% { 
              text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
            }
            49% { 
              text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
            }
            50% { 
              text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                          0.05em 0 0 rgba(0, 255, 0, 0.75),
                          0 -0.05em 0 rgba(0, 0, 255, 0.75);
            }
            99% { 
              text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                          0.05em 0 0 rgba(0, 255, 0, 0.75),
                          0 -0.05em 0 rgba(0, 0, 255, 0.75);
            }
            100% { 
              text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                          -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                          -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
            }
          }
        `
      }} />
    </section>
  );
};

export default MeetTheTeam;
