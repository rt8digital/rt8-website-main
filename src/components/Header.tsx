import React, { useState, useRef } from 'react';
import { Music, Info, ShoppingBag, Upload, Headphones, Users, Briefcase, Building2, Heart } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrambledText from './textfx/ScrambledText/ScrambledText';
import {
  faInstagram,
  faSpotify,
  faFacebook,
  faYoutube,
  faTiktok,
  faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

interface SubMenuItem {
  label: string;
  icon: React.ComponentType<any>;
  page?: string;
  href?: string;
  external?: boolean;
}

interface MenuItem {
  label: string;
  icon: React.ComponentType<any>;
  page?: string;
  href?: string;
  external?: boolean;
  subItems?: SubMenuItem[];
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const menuItems: MenuItem[] = [
    {
      label: 'MUSIC',
      icon: Music,
      subItems: [
        {
          label: 'DEMO SUBMISSIONS',
          icon: Upload,
          page: 'demo-submissions'
        },
        {
          label: 'FRESH FREQUENCIES',
          icon: Headphones,
          href: 'https://music.rt8.co.za/',
          external: true
        }
      ]
    },
    {
      label: 'ABOUT US',
      icon: Info,
      subItems: [
        {
          label: 'ABOUT RT8',
          icon: Info,
          page: 'about'
        },
        {
          label: 'WHY CHOOSE ROTATE',
          icon: Heart,
          page: 'why-choose-rotate'
        },
        {
          label: 'MEET THE TEAM',
          icon: Users,
          page: 'meet-the-team'
        },
        {
          label: 'WORK @ RT8',
          icon: Briefcase,
          page: 'work-at-rt8'
        },
        {
          label: 'LABELS ON ROTATE',
          icon: Building2,
          page: 'labels-on-rotate'
        }
      ]
    },
    {
      label: 'SHOP',
      icon: ShoppingBag,
      href: 'https://more.rt8.co.za',
      external: true
    },
  ];

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

  const handleMenuClick = (item: MenuItem | SubMenuItem) => {
    if (item.external && item.href) {
      window.location.href = item.href;
    } else if (item.page) {
      setCurrentPage(item.page);
    } else {
      setCurrentPage('home');
    }
    setActiveSubmenu(null);
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
  };

  const handleMainMenuHover = (itemLabel: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    if (leaveTimeout) clearTimeout(leaveTimeout);

    setHoveredItem(itemLabel);

    const item = menuItems.find(i => i.label === itemLabel);
    if (item?.subItems) {
      const timeout = setTimeout(() => {
        setActiveSubmenu(itemLabel);
      }, 150);
      setHoverTimeout(timeout);
    } else {
      setActiveSubmenu(null);
    }
  };

  const handleMenuLeave = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);

    const timeout = setTimeout(() => {
      setHoveredItem(null);
      setActiveSubmenu(null);
    }, 500);
    setLeaveTimeout(timeout);
  };

  const handleSubmenuEnter = () => {
    if (leaveTimeout) clearTimeout(leaveTimeout);
  };

  const handleSubmenuLeave = () => {
    setHoveredItem(null);
    setActiveSubmenu(null);
  };

  return (
    <header ref={containerRef} className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-red-500/20">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between md:justify-between">
          {/* Mobile Pill Navigation - Icons only */}
          <div className="md:hidden flex items-center space-x-2">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => {
                    if (item.subItems) {
                      setActiveSubmenu(activeSubmenu === item.label ? null : item.label);
                    } else {
                      handleMenuClick(item);
                    }
                  }}
                  className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    currentPage === item.page ? 'text-red-500 bg-red-500/10' : 'text-white hover:text-red-500 hover:bg-red-500/5'
                  }`}
                  title={item.label}
                >
                  <item.icon className="w-5 h-5" />
                  {currentPage === item.page && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></div>
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.subItems && activeSubmenu === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-red-500/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleMenuClick(subItem)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-300 hover:bg-red-500/10 hover:text-red-500 ${
                            currentPage === subItem.page ? 'text-red-500 bg-red-500/5' : 'text-white'
                          }`}
                        >
                          <subItem.icon className="w-4 h-4 flex-shrink-0" />
                          <ScrambledText
                            as="span"
                            radius={60}
                            duration={0.8}
                            speed={0.4}
                            scrambleChars=".:"
                            className="font-medium text-sm tracking-wide"
                          >
                            {subItem.label}
                          </ScrambledText>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Logo - Centered on mobile, right side on desktop */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group md:ml-auto"
            onClick={handleLogoClick}
          >
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 overflow-hidden rounded-lg transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-[360deg]">
              <img
                src="https://lh3.googleusercontent.com/yFVeryzwIrbTwz-cXHACgA_yZp6DTB9Svq9Yw9LqJE6C8bgnZhudye1kaFpYSFIu8iprueGV0mylNlovBA=s265-w265-h265"
                alt="RT8 Logo"
                className="w-full h-full object-contain transition-all duration-700 group-hover:brightness-125 filter drop-shadow-lg"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 16px rgba(239, 68, 68, 0.4)) brightness(1.1)',
                  transition: 'all 0.7s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.8)) drop-shadow(0 0 24px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 36px rgba(239, 68, 68, 0.4)) brightness(1.3) saturate(1.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(239, 68, 68, 0.6)) drop-shadow(0 0 16px rgba(239, 68, 68, 0.4)) brightness(1.1)';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg"></div>
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                   style={{
                     background: 'conic-gradient(from 0deg, transparent, rgba(239, 68, 68, 0.3), transparent, rgba(239, 68, 68, 0.3), transparent)',
                     animation: 'spin 3s linear infinite'
                   }}>
              </div>
            </div>
            <div className="text-white font-bold text-sm sm:text-lg tracking-wider transition-all duration-700 group-hover:text-red-400">
              <ScrambledText
                as="span"
                radius={80}
                duration={1.0}
                speed={0.4}
                scrambleChars=".:"
                className="text-red-500 transition-all duration-700 group-hover:text-red-300 group-hover:drop-shadow-lg"
                style={{
                  textShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
                  transition: 'all 0.7s ease-in-out'
                }}
              >
                RT8
              </ScrambledText>
              <ScrambledText
                as="span"
                radius={80}
                duration={1.0}
                speed={0.4}
                scrambleChars=".:"
                className="text-white ml-1 sm:ml-2 transition-colors duration-700 group-hover:text-gray-200 text-xs sm:text-base"
              >
                ROTATE GROUP
              </ScrambledText>
            </div>
          </div>

          {/* Desktop Navigation Container */}
          <div className="hidden md:flex flex-col items-end space-y-2 sm:space-y-3">
            {/* Social Icons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
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
                  <FontAwesomeIcon icon={social.icon} className="w-3 h-3 sm:w-4 sm:h-4" />
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.label}
                  </div>
                </a>
              ))}
            </div>

            {/* Main Navigation with Icons Only */}
            <nav className="flex items-center space-x-1 sm:space-x-2 relative">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => handleMainMenuHover(item.label)}
                  onMouseLeave={handleMenuLeave}
                >
                  <button
                    onClick={() => !item.subItems && handleMenuClick(item)}
                    className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg transition-all duration-300 ease-out group ${
                      currentPage === item.page ? 'text-red-500 bg-red-500/10' : 'text-white hover:text-red-500'
                    }`}
                    title={item.label} // Tooltip for accessibility
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />

                    {/* Hover background effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-lg transition-opacity duration-300 ${
                      hoveredItem === item.label ? 'opacity-100' : 'opacity-0'
                    }`}></div>

                    {/* Active indicator */}
                    {currentPage === item.page && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"></div>
                    )}

                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      hoveredItem === item.label
                        ? 'shadow-lg shadow-red-500/25 ring-1 ring-red-500/20'
                        : ''
                    }`}></div>
                  </button>

                  {/* Submenu Dropdown with Text */}
                  {item.subItems && activeSubmenu === item.label && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-md border border-red-500/20 rounded-lg shadow-xl min-w-48 z-50"
                      onMouseEnter={handleSubmenuEnter}
                      onMouseLeave={handleSubmenuLeave}
                    >
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.label}
                            onClick={() => handleMenuClick(subItem)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-300 hover:bg-red-500/10 hover:text-red-500 ${
                              currentPage === subItem.page ? 'text-red-500 bg-red-500/5' : 'text-white'
                            }`}
                          >
                            <subItem.icon className="w-4 h-4 flex-shrink-0" />
                            <ScrambledText
                              as="span"
                              radius={60}
                              duration={0.8}
                              speed={0.4}
                              scrambleChars=".:"
                              className="font-medium text-sm tracking-wide"
                            >
                              {subItem.label}
                            </ScrambledText>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>


      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
