import React, { useState } from 'react';
import { Menu, X, Music, Info, ShoppingBag, Upload, Headphones, Users, Briefcase, Building2, Heart, Settings } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faFacebook,
  faYoutube,
  faTiktok,
  faWhatsapp,
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
  page: string;
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

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
      href: 'https://instagram.com/rt8.co.za',
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
      icon: faWhatsapp,
      href: 'https://wa.me/27847990432',
      label: 'WhatsApp',
      color: 'hover:text-green-400'
    },
    {
      icon: faDiscord,
      href: 'https://discord.com/invite/8tQcxGQu?utm_source=Discord%20Widget&utm_medium=Connect',
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
    setIsMenuOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-red-500/20">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Enhanced Glowing Effect */}
          <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer group"
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
              <span className="text-red-500 transition-all duration-700 group-hover:text-red-300 group-hover:drop-shadow-lg"
                    style={{
                      textShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
                      transition: 'all 0.7s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.textShadow = '0 0 15px rgba(239, 68, 68, 0.8), 0 0 25px rgba(239, 68, 68, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.textShadow = '0 0 10px rgba(239, 68, 68, 0.5)';
                    }}>
                RT8
              </span>
              <span className="text-white ml-1 sm:ml-2 transition-colors duration-700 group-hover:text-gray-200 text-xs sm:text-base">ROTATE GROUP</span>
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
                            <span className="font-medium text-sm tracking-wide">{subItem.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-red-500 transition-all duration-300 transform hover:scale-110"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-300">
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 pb-4 border-b border-red-500/20 overflow-x-auto">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-white/70 transition-all duration-300 ${social.color} hover:scale-110 transform flex-shrink-0`}
                  aria-label={social.label}
                  title={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Items with Text */}
            <nav className="flex flex-col space-y-2 max-h-80 overflow-y-auto">
              {menuItems.map((item, index) => (
                <div key={item.label}>
                  <button
                    onClick={() => !item.subItems && handleMenuClick(item)}
                    className={`w-full flex items-center space-x-3 transition-all duration-300 py-3 px-4 text-left rounded-lg group ${
                      currentPage === item.page
                        ? 'text-red-500 bg-red-500/10'
                        : 'text-white hover:text-red-500 hover:bg-red-500/5'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
                    <span className="font-medium tracking-wide text-sm sm:text-base">{item.label}</span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                  </button>

                  {/* Mobile Submenu Items */}
                  {item.subItems && (
                    <div className="ml-6 sm:ml-8 mt-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.label}
                          onClick={() => handleMenuClick(subItem)}
                          className={`w-full flex items-center space-x-3 py-2 px-3 text-left rounded-md transition-all duration-300 ${
                            currentPage === subItem.page
                              ? 'text-red-500 bg-red-500/10'
                              : 'text-gray-300 hover:text-red-500 hover:bg-red-500/5'
                          }`}
                        >
                          <subItem.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span className="font-medium text-xs sm:text-sm">{subItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
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
