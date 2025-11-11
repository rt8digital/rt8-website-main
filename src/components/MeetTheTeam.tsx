import React, { useEffect, useState } from 'react';
import { Users, Mail, Linkedin, Twitter, Instagram, Music, Award, Globe } from 'lucide-react';

interface MeetTheTeamProps {
  setCurrentPage: (page: string) => void;
}

const MeetTheTeam: React.FC<MeetTheTeamProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Team data based on typical music label structure
  const teamMembers = [
    {
      name: 'Ilyas Shamoon',
      role: 'Founder',
      department: 'Music & Digital',
      bio: 'No need to pay this bro much attention, he just enjoys creating stuff out of nothing, like music or these websites you see.',
      imageStandard: 'https://lh3.googleusercontent.com/MNoTybJTjs--lcDuXcjKA0Mms5LXOrRrvsNw6C9oW_aQYbkSW-kb6zmjp7i1HkZbDTMWy6i7JARNx8o_cg=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/4jQlebdbQJ_roDr0fXlbgvIRIRFzdjyDfxBsNJR3hsAzfdmeu7ZWjcZLWemN3cCcojIpfUxkr7yAgIi7rw=s265-w265-h265', // Pexels image for hover
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
      imageHover: 'https://lh3.googleusercontent.com/UrGRZuTQdQFZpAhmGL9nRr05mEdE8--GBnEIXJii3nZQGCyE0OSuLxf4c3nnSvINRIQ5uwxTDNGTZhAC9Q=s265-w265-h265', // Pexels image for hover
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
      imageHover: 'https://lh3.googleusercontent.com/p/AF1QipPWG6egx_28S9cqZc3heQkf2a-addMM3KkYLoBh=s680-w680-h510-rw', // Pexels image for hover
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
      imageHover: 'https://lh3.googleusercontent.com/EBEUjJl7R1FZoH0lqCN1OA0FzUW_8UP1BeZGp4_zD1dnu0G6XEUHcMKOYezupfUX7mvcePgofCeGYU1C3g=s265-w265-h265', // Pexels image for hover
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
      imageHover: 'https://lh3.googleusercontent.com/_eHLPd8LG8po5enI6BwfUzzPNdjr8H7UUM73wWk22St_o4oT21HSTfU2sGYOvzwo-NjAgbdxiZz5-_eBhw=s265-w265-h265', // Pexels image for hover
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
      imageHover: 'https://lh3.googleusercontent.com/g_H8fEp6tgGV4FsxzghcH0tlMOvjQvvB2Jd7JTMQhp01yfWq6Bsx1anwOrBXo4D347Ysd7LgADhWnrCwtg=s265-w265-h265', // Pexels image for hover
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
      imageHover: 'https://lh3.googleusercontent.com/p/AF1QipPF3nvrAxkh6d4_gGva8aRPRJq6GeT_HvEEn-mi=s680-w680-h510-rw', // Pexels image for hover
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
      imageHover: 'https://lh3.googleusercontent.com/p/AF1QipNbN6JtRY4m6IUmsz9PH8AiKgTe-sxjF1JEb5Kf=s680-w680-h510-rw', // Pexels image for hover
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
      imageHover: 'https://lh3.googleusercontent.com/2WSa6HOoftzHcee9hHe7bUCt9dP9guE3A7_iKFuLgoV4iBXx25zU-Yt_s6fOTKKFTM08stcEfYd3GAy6uA=s265-w265-h265', // Pexels image for hover
      skills: ['Operations', 'Talent Acquisition', 'Music Producer / DJ'],
      social: {
        email: 'alfaid@rt8.co.za',
        linkedin: 'https://www.linkedin.com/in/muhammad-alfaid-maqsood-ba1398333/',
        instagram: 'https://www.instagram.com/zaphixxofficial/',
      }
			},
		{
      name: 'Alexandre Marrier Dunienville',
      role: 'Digital Administrator',
      department: 'Music',
      bio: '',
      imageStandard: 'https://lh3.googleusercontent.com/SF2TFWgUU11-00lgfz4g-Tbek0uUc5LNwGcW9SUrGojTUMnGQR9PiB7SLOZwNAcxpedDveNmh9S3ke0lJg=s265-w265-h265',
      imageHover: 'https://lh3.googleusercontent.com/M_TXt-1vl7GPR8p3EadxycahhTXF34w3GXbFiYZQG34bZOkZW11ajdWInWHVAidG58tmex1zeVDnJLiHtQ=s265-w265-h265', // Pexels image for hover
      skills: ['Operations', 'Talent Acquisition'],
      social: {
        email: 'alex@rt8.co.za',
        linkedin: 'https://www.linkedin.com/in/muhammad-alfaid-maqsood-ba1398333/',
        instagram: 'https://www.instagram.com/zaphixxofficial/',
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
            <div 
              key={member.name}
              className={`bg-black/40 backdrop-blur-md border border-red-500/20 rounded-lg overflow-hidden hover:border-red-500/40 transition-all duration-500 transform hover:scale-105 hover:bg-red-500/5 group ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Member Image with Glitch Effects */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hoveredIndex === index ? member.imageHover : member.imageStandard} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 glitch-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'; // Fallback image
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
                
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="text-xl font-bold text-white mb-1 glitch-text">{member.name}</h3>
                  <p className="text-red-500 font-medium">{member.role}</p>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-red-500/20 text-red-500 px-3 py-1 rounded-full text-sm font-medium">
                    {member.department}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2 text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-black/60 text-gray-300 px-2 py-1 rounded text-xs hover:bg-red-500/20 hover:text-red-500 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3">
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`}
                      className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all duration-300 hover:scale-110"
                      title="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all duration-300 hover:scale-110"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all duration-300 hover:scale-110"
                      title="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500/30 transition-all duration-300 hover:scale-110"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
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

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default MeetTheTeam;
