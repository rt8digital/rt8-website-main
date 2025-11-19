import React, { ReactNode } from 'react';
import GlassHeader from './GlassHeader';
import Footer from './Footer';

interface NewLayoutProps {
    children: ReactNode;
    currentPage: string;
    setCurrentPage: (page: string) => void;
}

const NewLayout: React.FC<NewLayoutProps> = ({ children, currentPage, setCurrentPage }) => {
    return (
        <div className="min-h-screen relative overflow-x-hidden text-white font-sans selection:bg-neon-red selection:text-white">
            {/* Animated Background Mesh */}
            <div className="fixed inset-0 z-[-1] bg-deep-space">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-neon-red/10 blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neon-cyan/10 blur-[120px] animate-pulse delay-1000" />
                <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] rounded-full bg-neon-pink/5 blur-[100px] animate-pulse delay-500" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <GlassHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />

            {/* Main content - minimal wrapper to allow full-width sections */}
            <main className="pt-20 relative z-10">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default NewLayout;
