﻿import { useEffect, useState } from 'react';
import '../styles/index.css';
import { useAccess } from '../hooks/useAccess';

import CrystalBackground from '../assets/images/crystal-background.jpg';
import Logo from '../assets/images/final fxiv purple.png';

export default function ComingSoon() {
    // Notify Me Form (Mocked)
    const [notifyEmail, setNotifyEmail] = useState('');
    const [notifyMessage, setNotifyMessage] = useState('');
    const [notifyStatus, setNotifyStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleNotifySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!notifyEmail.includes('@')) {
            setNotifyStatus('error');
            setNotifyMessage('Please enter a valid email.');
        } else {
            setNotifyStatus('success');
            setNotifyMessage('Thank you! You’ll be notified when we launch.');
            // TODO: Replace with Supabase insert
            console.log('Saved notify email:', notifyEmail);
        }
    };

    // Access context for Early Access code form
    const {
        email,
        code,
        status: accessStatus,
        message: accessMessage,
        setEmail,
        setCode,
        verify,
    } = useAccess();

    const handleAccessSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        verify(); // Will handle localStorage, state, and redirect
    };

    // Smooth scroll anchors
    useEffect(() => {
        const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
        const handleClick = (e: Event) => {
            e.preventDefault();
            const anchor = e.currentTarget as HTMLAnchorElement;
            const targetId = anchor.getAttribute('href')!.slice(1);
            if (!targetId) return;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                window.scrollTo({ top: targetEl.offsetTop - 80, behavior: 'smooth' });
            }
        };
        anchors.forEach(a => a.addEventListener('click', handleClick));
        return () => anchors.forEach(a => a.removeEventListener('click', handleClick));
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="hero-bg min-h-screen flex items-center pt-20 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                                FinalFXIV Guides
                            </span>
                            <span className="block mt-2">Coming Soon</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            The ultimate resource for Final Fantasy XIV players. Comprehensive guides, strategies, and tools to master every aspect of Eorzea.
                        </p>

                        {/* Notify Me Form */}
                        <div id="subscribe" className="max-w-md mx-auto bg-slate-800/80 backdrop-blur-md p-6 rounded-lg border border-slate-700">
                            <h3 className="text-white text-xl font-semibold mb-4">Get Notified When We Launch</h3>
                            <form onSubmit={handleNotifySubmit} className="flex flex-col space-y-4">
                                <input
                                    type="email"
                                    value={notifyEmail}
                                    onChange={(e) => setNotifyEmail(e.target.value)}
                                    placeholder="Your email address"
                                    required
                                    className="w-full px-4 py-3 bg-slate-900 border-none !rounded-button text-white placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none"
                                />
                                <button type="submit" className="bg-primary text-white py-3 px-6 !rounded-button whitespace-nowrap hover:bg-opacity-90 transition-colors font-medium">
                                    Notify Me
                                </button>
                                {notifyStatus !== 'idle' && (
                                    <div className={`text-center py-2 px-4 rounded-button ${notifyStatus === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        {notifyMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-16 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
                        <p className="text-white max-w-2xl mx-auto">
                            Explore our upcoming comprehensive guides designed to help you master every aspect of Final Fantasy XIV.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            ['ri-sword-line', 'Combat Guides', 'Master every job with our detailed rotation guides, openers, and optimization tips for both casual and savage content.', 'bg-red-300', 'text-red-700'],
                            ['ri-building-4-line', 'Raid Strategies', 'Step-by-step walkthroughs for all raids, trials, and dungeons with visual guides and mechanic breakdowns.', 'bg-orange-300', 'text-orange-700'],
                            ['ri-map-2-line', 'Interactive Maps', 'Detailed maps for gathering nodes, aether currents, treasure hunts, and other collectibles throughout Eorzea.', 'bg-yellow-300', 'text-yellow-700'],
                            ['ri-coins-line', 'Gil Making Guides', 'Effective strategies for making gil through crafting, gathering, market board flipping, and other lucrative activities.', 'bg-green-300', 'text-green-700'],
                            ['ri-hammer-line', 'Crafting & Gathering', 'Leveling guides, rotation tips, and best practices for Disciples of the Hand and Land from beginner to expert.', 'bg-blue-300', 'text-blue-700'],
                            ['ri-community-line', 'Community Tools', 'Party finder integration, DPS calculators, gear planners, and other tools to enhance your FFXIV experience.', 'bg-purple-300', 'text-purple-700'],
                        ].map(([icon, title, desc, bg, color], i) => (
                            <div key={i} className="feature-card p-6 rounded-lg border border-slate-700">
                                <div className="flex items-center mb-4 space-x-3">
                                    <div className={`w-12 h-12 flex items-center justify-center ${bg} rounded-full`}>
                                        <i className={`${icon} ${color} ri-lg`}></i>
                                    </div>
                                    <h3 className="text-xl font-semibold">{title}</h3>
                                </div>
                                <p>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Donation & Early Access */}
            <section id="donate" className="py-16 bg-slate-800 relative">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `url(${CrystalBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Support Our Development</h2>
                        <p className="text-white max-w-2xl mx-auto">
                            Donations help us build features faster and get to launch sooner. Early access codes are granted for $5+ donations.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-md p-8 rounded-lg border border-slate-700">
                        <a
                            href="https://www.paypal.com/donate/?hosted_button_id=P9V4NDZSTNGZ8"
                            target="_blank"
                            rel="noopener"
                            className="w-full block bg-primary hover:bg-opacity-90 text-white py-4 !rounded-button text-lg font-medium text-center mb-6"
                        >
                            <i className="ri-paypal-fill text-xl mr-2"></i>
                            Support via PayPal
                        </a>

                        <div className="mt-8 pt-8 border-t border-slate-700">
                            <h3 className="text-white text-xl font-semibold mb-4 text-center">Early Access Code</h3>
                            <form onSubmit={handleAccessSubmit} className="space-y-4" autoComplete="off">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900 border-none !rounded-button text-white placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your access code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900 border-none !rounded-button text-white placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-slate-700 hover:bg-opacity-90 text-white py-3 !rounded-button whitespace-nowrap transition-colors font-medium"
                                >
                                    Verify Access
                                </button>
                                {accessStatus !== 'idle' && (
                                    <div className={`text-center py-2 px-4 rounded-button ${accessStatus === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        {accessMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 py-10 text-center">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center space-y-4 mb-6">
                        <a href="/" className="flex items-center space-x-2">
                            <img src={Logo} alt="FinalFXIV Logo" className="h-10 w-auto" />
                            <span className="text-xl font-['Pacifico'] text-white">FinalFXIV</span>
                        </a>
                        <p className="text-slate-400 text-sm max-w-xl">
                            Final Fantasy XIV guides, tools, and resources—coming soon to elevate your journey through Eorzea.
                        </p>
                    </div>
                    <div className="border-t border-slate-800 pt-6 text-slate-500 text-xs space-y-2">
                        <p>
                            FINAL FANTASY XIV © 2010 - 2025 SQUARE ENIX CO., LTD. All Rights Reserved.
                        </p>
                        <p>
                            FinalFXIV Guides is an independent fan project and is not affiliated with SQUARE ENIX CO., LTD.
                        </p>
                        <p>© 2025 FinalFXIV Guides. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
