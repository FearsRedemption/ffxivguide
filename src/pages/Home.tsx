// src/pages/Home.tsx
import '../styles/index.css';

import HeroSection from '../components/home/HeroSection';
import QuickAccess from '../components/home/QuickAccess';
import FeaturedGuides from '../components/home/FeaturedGuides';
import JobGuides from '../components/home/JobGuides';
import GilMakingResources from '../components/home/GilMakingResources';
import Community from '../components/home/Community';

export default function Home() {
    return (
        <div className="bg-white text-black dark:bg-[#1a1a1a] dark:text-gray-100">
            <HeroSection />
            <QuickAccess />
            <FeaturedGuides />
            <JobGuides />
            <GilMakingResources />
            <Community />
        </div>
    );
}
