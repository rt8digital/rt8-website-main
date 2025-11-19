import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faSpotify,
    faFacebook,
    faYoutube,
    faTiktok,
    faDiscord
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logoSvg from '../assets/Group 4.svg';

interface GlassHeaderProps {
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const GlassHeader: React.FC<GlassHeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const socialLinks = [
        { icon: faInstagram, href: 'https://instagram.com/rt8_music', label: 'Instagram', color: 'hover:text-neon-pink' },
        { icon: faSpotify, href: 'https://open.spotify.com/playlist/7uMdU7HvGCIy7IBEk8ZX4U', label: 'Spotify', color: 'hover:text-green-400' },
        { icon: faFacebook, href: 'https://facebook.com/rt8.co.za', label: 'Facebook', color: 'hover:text-blue-500' },
        { icon: faDiscord, href: 'https://discord.gg/CJGGDMVjNP', label: 'Discord', color: 'hover:text-indigo-400' },
        { icon: faYoutube, href: 'https://youtube.com/@rt8mg', label: 'YouTube', color: 'hover:text-red-500' },
        { icon: faTiktok, href: 'https://tiktok.com/@rt8.co.za', label: 'TikTok', color: 'hover:text-white' },
        { icon: faEnvelope, href: 'mailto:info@rt8.co.za', label: 'Email', color: 'hover:text-gray-300' },
    ];

    const navItems = [
        { label: 'HOME', href: '#/' },
        { label: 'MUSIC', href: '#/demo-submissions' }, // Simplified for now, can add dropdowns
        { label: 'ABOUT', href: '#/about' },
        { label: 'TEAM', href: '#/meet-the-team' },
        { label: 'SHOP', href: 'https://more.rt8.co.za', external: true },
    ];

    const handleNavigation = (href: string, external?: boolean) => {
        if (external) {
            window.open(href, '_blank');
        } else {
            const page = href.replace('#/', '') || 'home';
            setCurrentPage(page);
        }
        setMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'
                }`}
        >
            <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500`}>
                <div className={`glass-panel rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-opacity-80 backdrop-blur-xl' : 'bg-opacity-40 backdrop-blur-md'
                    }`}>

                    {/* Logo / Brand */}
                    <img
                        src={logoSvg}
                        alt="RT8 Logo"
                        className="h-8 w-auto cursor-pointer hover:brightness-110 transition-all duration-300"
                        onClick={() => handleNavigation('#/')}
                    />

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => handleNavigation(item.href, item.external)}
                                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-neon-red relative group ${currentPage === item.href.replace('#/', '') || (item.href === '#/' && currentPage === 'home')
                                    ? 'text-white'
                                    : 'text-gray-400'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-neon-red transform origin-left transition-transform duration-300 ${currentPage === item.href.replace('#/', '') || (item.href === '#/' && currentPage === 'home')
                                    ? 'scale-x-100'
                                    : 'scale-x-0 group-hover:scale-x-100'
                                    }`} />
                            </button>
                        ))}
                    </nav>

                    {/* Social Icons */}
                    <div className="hidden md:flex items-center space-x-4 border-l border-white/10 pl-6">
                        {socialLinks.slice(0, 4).map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                                aria-label={social.label}
                            >
                                <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-deep-space/95 backdrop-blur-xl transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {/* Close Button - Top Right */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center glass-panel rounded-full text-white hover:bg-neon-red/20 hover:border-neon-red/50 transition-all duration-300 group"
                    aria-label="Close menu"
                >
                    <FontAwesomeIcon icon={faTimes} className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Menu Content */}
                <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
                    {/* Logo at top */}
                    <img
                        src={logoSvg}
                        alt="RT8 Logo"
                        className="h-16 w-auto mb-4 opacity-80"
                    />

                    {/* Navigation Items */}
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => handleNavigation(item.href, item.external)}
                            className="text-2xl font-display font-bold text-white hover:text-neon-red transition-colors duration-300 relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </button>
                    ))}

                    {/* Social Links */}
                    <div className="flex space-x-6 mt-8 pt-8 border-t border-white/10">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-gray-400 text-xl transition-all duration-300 hover:scale-110 ${social.color}`}
                                aria-label={social.label}
                            >
                                <FontAwesomeIcon icon={social.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default GlassHeader;
