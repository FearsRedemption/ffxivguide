// src/pages/Home.tsx
import {useEffect} from 'react';
import '../styles/index.css';
import {useDarkMode} from '../hooks/useDarkMode';
import {useServerStatus} from '../hooks/useServerStatus';

import Header from '../components/Header';
import HeroSection from '../components/home/HeroSection';
import QuickAccess from '../components/home/QuickAccess';
import FeaturedGuides from '../components/home/FeaturedGuides';
import JobGuides from '../components/home/JobGuides';
import GilMaking from '../components/home/GilMaking';
import Community from '../components/home/Community';
import Footer from '../components/Footer';

export default function Home() {
    useDarkMode();
    const serverStatus = useServerStatus();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white text-black dark:bg-[#1a1a1a] dark:text-gray-100">
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
