// src/pages/ComingSoon.tsx
import {useEffect} from 'react';
import {useSubscription} from '../hooks/useSubscription';
import {useAccess} from '../hooks/useAccess';
import '../styles/index.css';

import CrystalBackground from '../assets/images/crystal-background.jpg';
import Logo from '../assets/images/final fxiv purple.png';

export default function ComingSoon() {
    const {
        email,
        setEmail,
        status: formStatus,
        message: formMessage,
        subscribe,
    } = useSubscription();

    const {
        code: accessCode,
        setCode: setAccessCode,
        status: accessStatus,
        message: accessMessage,
        verify,
    } = useAccess();

    // Smooth‑scroll for anchor links
    useEffect(() => {
        const anchors = Array.from(
            document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        );
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
                            The ultimate resource for Final Fantasy XIV players. Comprehensive guides, strategies, and tools to master every aspect of Eorzea. Maybe even enjoy a new FC?
                        </p>

                        {/* Email Subscription Form */}
                        <div
                            id="subscribe"
                            className="max-w-md mx-auto bg-slate-800/80 backdrop-blur-md p-6 rounded-lg border border-slate-700"
                        >
                            <h3 className="text-white text-xl font-semibold mb-4">Get Notified When We Launch</h3>
                            <form
                                onSubmit={(e) => { e.preventDefault(); subscribe(); }}
                                className="flex flex-col space-y-4"
                                id="subscribeForm"
                            >
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className="ri-mail-line text-slate-400"></i>
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-900 border-none !rounded-button text-white placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="Your email address"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-primary text-white py-3 px-6 !rounded-button whitespace-nowrap hover:bg-opacity-90 transition-colors font-medium"
                                >
                                    Notify Me
                                </button>
                                <div
                                    id="formMessage"
                                    className={`${
                                        formStatus === 'idle' ? 'hidden' : ''
                                    } text-center py-2 px-4 rounded-button ${
                                        formStatus === 'success'
                                            ? 'bg-green-500/10 text-green-500'
                                            : 'bg-red-500/10 text-red-500'
                                    }`}
                                >
                                    {formMessage}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Preview Section */}
            <section id="features" className="py-16 bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
                        <p className="text-white max-w-2xl mx-auto">
                            Explore our upcoming comprehensive guides designed to help you master every aspect of Final Fantasy XIV.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card Example */}
                        <div className="feature-card p-6 rounded-lg border border-slate-700">
                            <div className="flex items-center mb-4 space-x-3">
                                <div className="w-12 h-12 flex items-center justify-center bg-red-300 rounded-full">
                                    <i className="ri-sword-line text-red-700 ri-lg"></i>
                                </div>
                                <h3 className="text-xl font-semibold">Combat Guides</h3>
                            </div>
                            <p>
                                Master every job with our detailed rotation guides, openers, and optimization tips for both casual and savage content.
                            </p>
                        </div>

                        <div className="feature-card p-6 rounded-lg border border-slate-700">
                            <div className="flex items-center mb-4 space-x-3">
                                <div className="w-12 h-12 flex items-center justify-center bg-orange-300 rounded-full">
                                    <i className="ri-building-4-line text-orange-700 ri-lg"></i>
                                </div>
                                <h3 className="text-xl font-semibold">Raid Strategies</h3>
                            </div>
                            <p>
                                Step-by-step walkthroughs for all raids, trials, and dungeons with visual guides and mechanic breakdowns.
                            </p>
                        </div>

                        <div className="feature-card p-6 rounded-lg border border-slate-700">
                            <div className="flex items-center mb-4 space-x-3">
                                <div className="w-12 h-12 flex items-center justify-center bg-yellow-300 rounded-full">
                                    <i className="ri-map-2-line text-yellow-700 ri-lg"></i>
                                </div>
                                <h3 className="text-xl font-semibold">Interactive Maps</h3>
                            </div>
                            <p>
                                Detailed maps for gathering nodes, aether currents, treasure hunts, and other collectibles throughout Eorzea.
                            </p>
                        </div>

                        <div className="feature-card p-6 rounded-lg border border-slate-700">
                            <div className="flex items-center mb-4 space-x-3">
                                <div className="w-12 h-12 flex items-center justify-center bg-green-300 rounded-full">
                                    <i className="ri-coins-line text-green-700 ri-lg"></i>
                                </div>
                                <h3 className="text-xl font-semibold">Gil Making Guides</h3>
                            </div>
                            <p>
                                Effective strategies for making gil through crafting, gathering, market board flipping, and other lucrative activities.
                            </p>
                        </div>

                        <div className="feature-card p-6 rounded-lg border border-slate-700">
                            <div className="flex items-center mb-4 space-x-3">
                                <div className="w-12 h-12 flex items-center justify-center bg-blue-300 rounded-full">
                                    <i className="ri-hammer-line text-blue-700 ri-lg"></i>
                                </div>
                                <h3 className="text-xl font-semibold">Crafting & Gathering</h3>
                            </div>
                            <p>
                                Leveling guides, rotation tips, and best practices for Disciples of the Hand and Land from beginner to expert.
                            </p>
                        </div>

                        <div className="feature-card p-6 rounded-lg border border-slate-700">
                            <div className="flex items-center mb-4 space-x-3">
                                <div className="w-12 h-12 flex items-center justify-center bg-purple-300 rounded-full">
                                    <i className="ri-community-line text-purple-700 ri-lg"></i>
                                </div>
                                <h3 className="text-xl font-semibold">Community Tools</h3>
                            </div>
                            <p>
                                Party finder integration, DPS calculators, gear planners, and other tools to enhance your FFXIV experience.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Donation & Early Access Section */}
            <section id="donate" className="py-16 bg-slate-800 relative">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `url(${CrystalBackground})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Support Our Development</h2>
                        <p className="text-white text-shadow max-w-2xl mx-auto">
                            Your donations directly impact our ability to launch sooner and develop more features. Help us create the ultimate FFXIV resource!
                        </p>
                        <p className="text-white text-shadow font-bold max-w-2xl mx-auto mt-1">
                            An Early (Immediate) Access Code will be provided for those that Donate $5 or more! (The site is not finished so some info will be incomplete or generic until full release)
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-md p-8 rounded-lg border border-slate-700">
                        <a
                            href="https://www.paypal.com/donate/?hosted_button_id=P9V4NDZSTNGZ8"
                            target="_blank"
                            rel="noopener"
                            className="w-full block bg-primary hover:bg-opacity-90 text-white py-4 !rounded-button whitespace-nowrap transition-colors text-lg font-medium mb-6 text-center"
                        >
                            <i className="ri-paypal-fill text-xl mr-2"></i>
                            Support via PayPal
                            <i className="ri-heart-fill text-xl ml-2"></i>
                        </a>
                        <div className="mt-8 pt-8 border-t border-slate-700">
                            <h3 className="text-white text-xl font-semibold mb-4 text-center">Early Access Code</h3>
                            <form onSubmit={(e) => { e.preventDefault(); verify(); }} className="space-y-4" autoComplete="off" id="earlyAccessForm">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <i className="ri-key-2-line text-slate-400"></i>
                                    </div>
                                    <input
                                        type="text"
                                        id="accessCode"
                                        name="accessCode"
                                        className="w-full pl-10 pr-4 py-3 bg-slate-900 border-none !rounded-button text-white placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none"
                                        placeholder="Enter your access code"
                                        value={accessCode}
                                        onChange={(e) => setAccessCode(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-slate-700 hover:bg-opacity-90 text-white py-3 !rounded-button whitespace-nowrap transition-colors font-medium"
                                >
                                    Verify Access
                                </button>
                                <div
                                    id="accessMessage"
                                    className={`${
                                        accessStatus === 'idle' ? 'hidden' : ''
                                    } text-center py-2 px-4 rounded-button ${
                                        accessStatus === 'success'
                                            ? 'bg-green-500/10 text-green-500'
                                            : accessStatus === 'info'
                                                ? 'bg-blue-500/10 text-blue-500'
                                                : 'bg-red-500/10 text-red-500'
                                    }`}
                                >
                                    {accessMessage}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 mb-8">
                        <div>
                            <a href="/" className="flex items-center space-x-2 mb-4">
                                <img
                                    src={Logo}
                                    alt="FinalFXIV Logo"
                                    className="h-10 w-auto"
                                />
                                <span className="text-xl font-['Pacifico'] text-white">Guides</span>
                            </a>
                            <p className="text-slate-400 text-sm">
                                The ultimate resource for Final Fantasy XIV players, coming soon to enhance your adventures in Eorzea.
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center">
                        <p className="text-slate-500 text-sm">
                            FINAL FANTASY XIV © 2010 - 2025 SQUARE ENIX CO., LTD. All Rights Reserved.<br />
                            FinalFXIV Guides is not affiliated with SQUARE ENIX CO., LTD.
                        </p>
                        <p className="text-slate-500 text-sm mt-2">© 2025 FinalFXIV Guides. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
