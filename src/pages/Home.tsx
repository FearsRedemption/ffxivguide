// src/pages/Home.tsx
import { useEffect } from 'react';
import '../styles/index.css';
import { useDarkMode } from '../hooks/useDarkMode';
import { useServerStatus } from '../hooks/useServerStatus';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import QuickAccess from '../components/QuickAccess';
import FeaturedGuides from '../components/FeaturedGuides';
import JobGuides from '../components/JobGuides';
import GilMaking from '../components/GilMaking';
import Community from '../components/Community';
import Footer from '../components/Footer';

export default function Home() {
    useDarkMode();
    const serverStatus = useServerStatus();

    useEffect(() => {
        const menuButton = document.querySelector('.md\\:hidden');
        if (menuButton) {
            menuButton.addEventListener('click', () => {
                alert('Mobile menu clicked - would expand in a real implementation');
            });
        }
    }, []);

    return (
        <div className="bg-gray-50 dark:bg-[#1a1a1a] min-h-screen text-gray-900 dark:text-gray-100 transition-all">
            <Header serverStatus={serverStatus} />
            <HeroSection />
            <QuickAccess />
            <FeaturedGuides />
            <JobGuides />
            <GilMaking />
            <Community />
            <Footer />
        </div>
    );
}
