import { useState, useEffect, Suspense, lazy, useRef } from 'react';
import PillHeader from './components/PillHeader';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import LoadingScreen from './components/LoadingScreen';
import SplashScreen from './components/SplashScreen';
import { performanceMonitor } from './utils/performance';
import Background from './components/Background'; // Import the Background component

// Lazy load components for code splitting
const Hero = lazy(() => import('./components/Hero'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const WhyChooseRotate = lazy(() => import('./components/WhyChooseRotate'));
const DemoSubmissions = lazy(() => import('./components/DemoSubmissions'));
const MeetTheTeam = lazy(() => import('./components/MeetTheTeam'));
const WorkAtRT8 = lazy(() => import('./components/WorkAtRT8'));
const LabelsOnRotate = lazy(() => import('./components/LabelsOnRotate'));

// Preload all components
const preloadComponents = () => {
  return Promise.all([
    import('./components/Hero'),
    import('./components/AboutUs'),
    import('./components/WhyChooseRotate'),
    import('./components/DemoSubmissions'),
    import('./components/MeetTheTeam'),
    import('./components/WorkAtRT8'),
    import('./components/LabelsOnRotate')
  ]);
};

// Loading component with skeleton
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <div className="text-white text-lg font-medium">Loading RT8...</div>
      <div className="text-textSecondary text-sm mt-2">Preparing the experience</div>
    </div>
  </div>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [showLoading, setShowLoading] = useState(false);
  const [appReady, setAppReady] = useState(false);
  const [componentsPreloaded, setComponentsPreloaded] = useState(false);
  const preloadAttemptedRef = useRef(false);

  // Detect mobile devices and reduced motion preference for performance optimization
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 ||
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(mobile);
    };
    
    const checkReducedMotion = () => {
      setPrefersReducedMotion(performanceMonitor.prefersReducedMotion());
    };

    checkMobile();
    checkReducedMotion();
    window.addEventListener('resize', checkMobile);
    window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', checkReducedMotion);

    // Performance monitoring
    performanceMonitor.logPerformance();
    console.log('Device capabilities:', performanceMonitor.getDeviceCapabilities());

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.matchMedia('(prefers-reduced-motion: reduce)').removeEventListener('change', checkReducedMotion);
    };
  }, []);

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

  // Preload all components during loading screen
  useEffect(() => {
    if (showLoading && !preloadAttemptedRef.current) {
      preloadAttemptedRef.current = true;
      preloadComponents()
        .then(() => {
          setComponentsPreloaded(true);
        })
        .catch((error) => {
          console.error('Failed to preload components:', error);
          // Still mark as preloaded to avoid blocking the app
          setComponentsPreloaded(true);
        });
    }
  }, [showLoading]);

  // Update URL when page changes
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  // Handle splash screen completion
  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowLoading(true);
  };

  // Handle loading completion
  const handleLoadingComplete = () => {
    // Only complete loading when components are preloaded
    if (componentsPreloaded) {
      setShowLoading(false);
      setAppReady(true);
    }
  };

  // SEO configuration for each page
  const getSEOConfig = () => {
    const baseUrl = 'https://rt8.co.za/';
    
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

  // Show splash screen first
  if (showSplash) {
    return (
      <div className="min-h-screen text-white overflow-x-hidden">
        <SplashScreen onSplashComplete={handleSplashComplete} />
      </div>
    );
  }

  // Show loading screen while app is initializing and preloading components
  if (showLoading) {
    return (
      <div className="min-h-screen text-white overflow-x-hidden">
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <SEOHead {...seoConfig} />
      <Background /> {/* Add the background component */}
      <PillHeader currentPage={currentPage} setCurrentPage={handlePageChange} />
      <div className="px-2 sm:px-4 pt-20 sm:pt-24 md:pt-28 relative z-10">
        <Suspense fallback={<LoadingFallback />}>
          {renderPage()}
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;