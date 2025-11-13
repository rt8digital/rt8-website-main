import React, { useState, useRef, useEffect } from 'react';
import PillNav from '../textfx/PillNav/PillNav';
import VariableProximity from '../textfx/VariableProximity/VariableProximity';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faFacebook,
  faYoutube,
  faTiktok,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface PillHeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const PillHeader: React.FC<PillHeaderProps> = ({ currentPage, setCurrentPage }) => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const socialLinks = [
    {
      icon: faInstagram,
      href: 'https://instagram.com/rt8_music',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: faSpotify,
      href: 'https://open.spotify.com/playlist/7uMdU7HvGCIy7IBEk8ZX4U',
      label: 'Spotify',
      color: 'hover:text-green-500'
    },
    {
      icon: faFacebook,
      href: 'https://facebook.com/rt8.co.za',
      label: 'Facebook',
      color: 'hover:text-blue-500'
    },
    {
      icon: faDiscord,
      href: 'https://discord.gg/CJGGDMVjNP',
      label: 'Discord',
      color: 'hover:text-indigo-400'
    },
    {
      icon: faEnvelope,
      href: 'mailto:info@rt8.co.za',
      label: 'Email',
      color: 'hover:text-gray-400'
    },
    {
      icon: faYoutube,
      href: 'https://youtube.com/@rt8mg',
      label: 'YouTube',
      color: 'hover:text-red-600'
    },
    {
      icon: faTiktok,
      href: 'https://tiktok.com/@rt8.co.za',
      label: 'TikTok',
      color: 'hover:text-white'
    },
  ];

  const navItems = [
    {
      label: 'HOME',
      href: '#/'
    },
    {
      label: 'MUSIC',
      href: '#/demo-submissions',
      subItems: [
        {
          label: 'SUBMIT A DEMO',
          href: '#/demo-submissions',
          icon: 'Upload'
        },
        {
          label: 'OUR CATALOGUE',
          href: 'https://music.rt8.co.za/',
          icon: 'Headphones'
        }
      ]
    },
    {
      label: 'ABOUT',
      href: '#/about',
      subItems: [
        {
          label: 'ABOUT RT8',
          href: '#/about',
          icon: 'Info'
        },
        {
          label: 'WHY CHOOSE ROTATE',
          href: '#/why-choose-rotate',
          icon: 'Heart'
        },
        {
          label: 'MEET THE TEAM',
          href: '#/meet-the-team',
          icon: 'Users'
        },
        {
          label: 'WORK @ RT8',
          href: '#/work-at-rt8',
          icon: 'Briefcase'
        },
        {
          label: 'LABELS ON ROTATE',
          href: '#/labels-on-rotate',
          icon: 'Building2'
        }
      ]
    },
   
    {
      label: 'SHOP',
      href: 'https://more.rt8.co.za',
      ariaLabel: 'Shop'
    }
  ];

  // Map current page to the active href
  const getActiveHref = () => {
    switch (currentPage) {
      case 'home':
        return '#/';
      case 'demo-submissions':
        return '#/demo-submissions';
      case 'about':
      case 'why-choose-rotate':
        return '#/about';
      case 'meet-the-team':
      case 'work-at-rt8':
      case 'labels-on-rotate':
        return '#/meet-the-team';
      default:
        return '#/';
    }
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('#/')) {
      const page = href.substring(2);
      setCurrentPage(page);
    } else if (href.startsWith('http')) {
      window.open(href, '_blank');
    }
  };

  return (
    <header ref={containerRef} className={`fixed top-0 left-0 right-0 z-50 bg-black/0 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/75' : ''}`}>
      <div className="container mx-auto px-2 py-1 sm:px-4 sm:py-2">
        {/* Mobile view - Centered layout */}
        <div className="sm:hidden flex flex-col items-center">
          {/* Social Icons - Centered */}
          <div className="flex justify-center space-x-1 mb-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`text-white/70 transition-all duration-300 ${social.color} hover:scale-110 transform relative group`}
                aria-label={social.label}
                title={social.label}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <FontAwesomeIcon icon={social.icon} className="w-3 h-3" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {social.label}
                </div>
              </a>
            ))}
          </div>

          {/* Pill Navigation - Centered (logo removed) */}
          <div className="flex justify-center">
            <PillNav
              logo="" // Empty logo prop to satisfy interface
              items={navItems}
              activeHref={getActiveHref()}
              baseColor="#ef4444" // Red color to match RT8 branding
              pillColor="#171717" // Dark background for pills
              pillTextColor="#ffffff" // White text
              hoveredPillTextColor="#171717" // Dark text on hover
              initialLoadAnimation={true}
              onNavigate={handleNavigation}
            />
          </div>
        </div>

        {/* Tablet and Desktop view - Justified layout */}
        <div className="hidden sm:flex items-center justify-between">
          {/* Left side spacer (logo removed) */}
          <div className="w-32"></div>

          {/* Center section with social icons and pill navigation */}
          <div className="flex flex-col items-center">
            {/* Social Icons */}
            <div className="flex justify-center space-x-2 md:space-x-4 mb-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-white/70 transition-all duration-300 ${social.color} hover:scale-110 transform relative group`}
                  aria-label={social.label}
                  title={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Pill Navigation (logo removed) */}
            <div className="flex justify-center">
              <PillNav
                logo="" // Empty logo prop to satisfy interface
                items={navItems}
                activeHref={getActiveHref()}
                baseColor="#ef4444" // Red color to match RT8 branding
                pillColor="#171717" // Dark background for pills
                pillTextColor="#ffffff" // White text
                hoveredPillTextColor="#171717" // Dark text on hover
                initialLoadAnimation={true}
                onNavigate={handleNavigation}
              />
            </div>
          </div>

          {/* Right side spacer */}
          <div className="w-32"></div>
        </div>
      </div>
    </header>
  );
};

export default PillHeader;