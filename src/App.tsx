import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseRotate from './components/WhyChooseRotate';
import DemoSubmissions from './components/DemoSubmissions';
import MeetTheTeam from './components/MeetTheTeam';
import WorkAtRT8 from './components/WorkAtRT8';
import LabelsOnRotate from './components/LabelsOnRotate';
import Background3D from './components/Background3D';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle URL routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(2); // Remove '#/' from hash
      if (hash) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    // Set initial page based on URL
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Update URL when page changes
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  // SEO configuration for each page
  const getSEOConfig = () => {
    const baseUrl = 'https://rt8.co.za/';
    const baseImage = 'https://lh3.googleusercontent.com/yFVeryzwIrbTwz-cXHACgA_yZp6DTB9Yw9LqJE6C8bgnZhudye1kaFpYSFIu8iprueGV0mylNlovBA=s265-w265-h265';
    
    switch (currentPage) {
      case 'about':
        return {
          title: 'About RT8 Rotate Group - Global Music & Digital Technology Collective',
          description: 'Learn about RT8 Rotate Group, a leading global music and digital technology collective. Discover our mission, vision, and impact on the creative and tech industries worldwide.',
          keywords: 'RT8 about, music label history, electronic music collective, artist development, music infrastructure, digital tech, web solutions, global innovation',
          url: `${baseUrl}#/about`
        };
      case 'why-choose-rotate':
        return {
          title: 'Why Choose RT8 Rotate Group - Music & Digital Tech Benefits',
          description: 'Discover why artists, labels, and businesses choose RT8 Rotate Group. Explore our innovative infrastructure, global network, and comprehensive music and digital tech services.',
          keywords: 'RT8 benefits, music label services, artist support, label infrastructure, music distribution, digital solutions, tech partnership',
          url: `${baseUrl}#/why-choose-rotate`
        };
      case 'demo-submissions':
        return {
          title: 'Submit Your Demo - RT8 Rotate Group Music Submissions',
          description: 'Submit your music demo to RT8 Rotate Group. Join our roster of talented artists and get your music heard by industry professionals.',
          keywords: 'demo submission, music submission, RT8 demos, electronic music demos, record label submission',
          url: `${baseUrl}#/demo-submissions`
        };
      case 'meet-the-team':
        return {
          title: 'Meet Our Team - RT8 Rotate Group Music & Digital Tech Professionals',
          description: 'Meet the passionate team behind RT8 Rotate Group. Discover the music and digital industry experts driving innovation in electronic music and technology.',
          keywords: 'RT8 team, music industry professionals, label executives, music producers, artist managers, tech innovators, web developers',
          url: `${baseUrl}#/meet-the-team`
        };
      case 'work-at-rt8':
        return {
          title: 'Careers at RT8 Rotate Group - Join Our Global Music & Tech Team',
          description: 'Explore career opportunities at RT8 Rotate Group. Join our innovative team and help shape the future of electronic music and digital technology.',
          keywords: 'RT8 careers, music industry jobs, record label careers, music production jobs, artist development careers, tech jobs, web development careers',
          url: `${baseUrl}#/work-at-rt8`
        };
      case 'labels-on-rotate':
        return {
          title: 'Labels & Partners on Rotate - Global Music & Digital Infrastructure',
          description: 'Discover the diverse ecosystem of music labels and digital partners benefiting from RT8 Rotate Group infrastructure. Explore our partner labels and services.',
          keywords: 'RT8 partner labels, music label network, SonicBass Records, Night Moon Records, label infrastructure, digital partners, tech ecosystem',
          url: `${baseUrl}#/labels-on-rotate`
        };
      default:
        return {
          title: 'RT8 ROTATE GROUP - Global Music & Digital Tech Innovators',
          description: 'RT8 Rotate Group is a leading global collective, fusing cutting-edge electronic music production with innovative digital technology solutions. We empower artists, labels, and businesses worldwide.',
          keywords: 'RT8, Rotate Group, electronic music, music label, record label, music production, artist development, digital tech, web development, global technology solutions, creative collective, innovation, South Africa music',
          url: baseUrl
        };
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUs setCurrentPage={handlePageChange} />;
      case 'why-choose-rotate':
        return <WhyChooseRotate setCurrentPage={handlePageChange} />;
      case 'demo-submissions':
        return <DemoSubmissions />;
      case 'meet-the-team':
        return <MeetTheTeam setCurrentPage={handlePageChange} />;
      case 'work-at-rt8':
        return <WorkAtRT8 setCurrentPage={handlePageChange} />;
      case 'labels-on-rotate':
        return <LabelsOnRotate setCurrentPage={handlePageChange} />;
      default:
        return <Hero />;
    }
  };

  const seoConfig = getSEOConfig();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden relative">
      <SEOHead {...seoConfig} />
      <Background3D />
      <div className="relative z-10">
        <Header currentPage={currentPage} setCurrentPage={handlePageChange} />
        <div className="px-2 sm:px-4">
          {renderPage()}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
