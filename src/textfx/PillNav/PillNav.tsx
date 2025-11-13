import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrambledText from '../../components/textfx/ScrambledText/ScrambledText';
import {
  Music,
  Upload,
  Headphones,
  Info,
  Heart,
  Users,
  Briefcase,
  Building2,
  ChevronDown
} from 'lucide-react';

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  subItems?: PillNavSubItem[];
};

export type PillNavSubItem = {
  label: string;
  href: string;
  icon: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
  onNavigate?: (href: string) => void;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Music,
  Upload,
  Headphones,
  Info,
  Heart,
  Users,
  Briefcase,
  Building2
};

const PillNav: React.FC<PillNavProps> = ({
  items,
  activeHref,
  className = "",
  ease = "power2.out",
  baseColor = "#ef4444",
  pillColor = "#171717",
  hoveredPillTextColor = "#171717",
  pillTextColor = "#ffffff",
  initialLoadAnimation = false,
  onNavigate
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (initialLoadAnimation && pillsRef.current) {
      gsap.fromTo(pillsRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.05, ease } // Speed up initial load animation
      );
    }
  }, [initialLoadAnimation, ease]);

  const handleMouseEnter = (itemLabel: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    const item = items.find(i => i.label === itemLabel);
    if (item?.subItems) {
      setActiveDropdown(itemLabel);
    }
  };

  const handleMouseLeave = (itemLabel: string) => {
    // Delay closing the dropdown to allow mouse to move to dropdown menu
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Reduced delay from 150ms to 100ms
  };

  const handleDropdownMouseEnter = () => {
    // Clear any pending close timeout when mouse enters dropdown
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    // Close dropdown when mouse leaves dropdown area
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Reduced delay from 150ms to 100ms
  };

  const handlePillClick = (item: PillNavItem) => {
    if (item.subItems) {
      // Toggle dropdown on mobile
      if (window.innerWidth < 768) {
        setActiveDropdown(activeDropdown === item.label ? null : item.label);
      }
    } else {
      onNavigate?.(item.href);
    }
  };

  const handleSubItemClick = (href: string) => {
    onNavigate?.(href);
    setActiveDropdown(null);
  };

  const isActive = (href: string) => activeHref === href;

  return (
    <nav ref={navRef} className={`relative ${className}`}>
      <div className="flex items-center justify-center">
        {/* Desktop Pills */}
        <div ref={pillsRef} className="hidden md:flex items-center space-x-2">
          {items.map((item) => (
            <div key={item.label} className="relative">
              <button
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={() => handleMouseLeave(item.label)}
                onClick={() => handlePillClick(item)}
                className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 flex items-center space-x-2 ${ // Reduced from 300ms to 200ms
                  isActive(item.href)
                    ? `bg-[${baseColor}] text-white`
                    : `bg-[${pillColor}] text-[${pillTextColor}] hover:bg-[${baseColor}] hover:text-[${hoveredPillTextColor}]`
                }`}
                style={{
                  backgroundColor: isActive(item.href) ? baseColor : pillColor,
                  color: isActive(item.href) ? '#ffffff' : pillTextColor,
                  border: `1px solid ${baseColor}20`
                }}
                onMouseOver={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.backgroundColor = baseColor;
                    e.currentTarget.style.color = hoveredPillTextColor;
                  }
                }}
                onMouseOut={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.backgroundColor = pillColor;
                    e.currentTarget.style.color = pillTextColor;
                  }
                }}
              >
                <ScrambledText
                  as="span"
                  radius={50}
                  duration={0.5} // Reduced from 0.8 to 0.5
                  speed={0.3}
                  scrambleChars=".:"
                  className="text-sm font-medium metallic-text-gold"
                >
                  {item.label}
                </ScrambledText>
                {item.subItems && (
                  <ChevronDown className={`w-3 h-3 transition-transform duration-150 ${ // Reduced from 200ms to 150ms
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                )}
              </button>

              {/* Desktop Dropdown */}
              {item.subItems && activeDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-red-500/20 rounded-lg shadow-xl z-50"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="py-2">
                    {item.subItems.map((subItem) => {
                      const IconComponent = iconMap[subItem.icon];
                      return (
                        <button
                          key={subItem.label}
                          onClick={() => handleSubItemClick(subItem.href)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-300 hover:bg-red-500/10 ${ // Reduced from 800ms to 300ms
                            isActive(subItem.href) ? 'text-red-500 bg-red-500/5' : 'text-white'
                          }`}
                        >
                          {IconComponent && <IconComponent className="w-4 h-4 flex-shrink-0" />}
                          <ScrambledText
                            as="span"
                            radius={40}
                            duration={0.4} // Reduced from 0.6 to 0.4
                            speed={0.4}
                            scrambleChars=".:"
                            className="font-medium text-sm"
                          >
                            {subItem.label}
                          </ScrambledText>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Pill Navigation - Icons only */}
        <div className="md:hidden flex items-center space-x-2">
          {items.map((item) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => {
                  if (item.subItems) {
                    setActiveDropdown(activeDropdown === item.label ? null : item.label);
                  } else {
                    onNavigate?.(item.href);
                  }
                }}
                className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isActive(item.href) ? 'text-red-500 bg-red-500/10' : 'text-white hover:text-red-500 hover:bg-red-500/5'
                }`}
                title={item.label}
              >
                {(() => {
                  const IconComponent = item.subItems?.length ? iconMap[item.subItems[0].icon] : iconMap[item.label] || Music;
                  return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
                })()}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></div>
                )}
              </button>

              {/* Mobile Dropdown */}
              {item.subItems && activeDropdown === item.label && (
                <div  className="absolute top-full left-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-red-500/20 rounded-lg shadow-xl z-50">
                  <div className="py-2">
                    {item.subItems.map((subItem) => {
                      const IconComponent = iconMap[subItem.icon];
                      return (
                        <button
                          key={subItem.label}
                          onClick={() => handleSubItemClick(subItem.href)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-300 hover:bg-red-500/10 hover:text-red-500 ${
                            isActive(subItem.href) ? 'text-red-500 bg-red-500/5' : 'text-white'
                          }`}
                        >
                          {IconComponent && <IconComponent className="w-4 h-4 flex-shrink-0" />}
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
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


    </nav>
  );
};

export default PillNav;
