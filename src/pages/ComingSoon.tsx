// src/pages/ComingSoon.tsx
import { useEffect } from 'react';
import { useSubscription } from '../hooks/useSubscription';
import { useAccessContext } from '../context/AccessContext';
import '../styles/index.css';

export default function ComingSoon() {
    const {
        email,
        setEmail,
        status: formStatus,
        message: formMessage,
        subscribe,
    } = useSubscription();

    const {
        state: { code: accessCode, status: accessStatus, message: accessMessage },
        actions: { setCode: setAccessCode, verify },
    } = useAccessContext();

    // Smooth-scroll for anchor links
    useEffect(() => {
        const anchors = Array.from(
            document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        );
        const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            const anchor = e.currentTarget as HTMLAnchorElement;
            const href = anchor.getAttribute('href')!;
            const targetId = href.slice(1);
            if (!targetId) return;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                window.scrollTo({ top: targetEl.offsetTop - 80, behavior: 'smooth' });
            }
        };
        anchors.forEach((a) => a.addEventListener('click', handleClick));
        return () => {
            anchors.forEach((a) => a.removeEventListener('click', handleClick));
        };
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
                            The ultimate resource for Final Fantasy XIV players. Comprehensive
                            guides, strategies, and tools to master every aspect of Eorzea.
                            Maybe even enjoy a new FC?
                        </p>

                        {/* Email Subscription Form */}
                        <div
                            id="subscribe"
                            className="max-w-md mx-auto bg-slate-800/80 backdrop-blur-md p-6 rounded-lg border border-slate-700"
                        >
                            <h3 className="text-xl font-semibold mb-4">
                                Get Notified When We Launch
                            </h3>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    subscribe();
                                }}
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
                                    disabled={formStatus === 'loading'}
                                    className={`py-3 px-6 text-white !rounded-button transition-colors font-medium ${
                                        formStatus === 'loading'
                                            ? 'bg-primary/60'
                                            : 'bg-primary hover:bg-opacity-90'
                                    }`}
                                >
                                    {formStatus === 'loading' ? 'Submitting…' : 'Notify Me'}
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What to Expect
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Explore our upcoming comprehensive guides designed to help you
                            master every aspect of Final Fantasy XIV.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* … your feature cards … */}
                    </div>
                </div>
            </section>

            {/* Donation & Early Access Section */}
            <section id="donate" className="py-16 bg-slate-800 relative">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "url('https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20magical%20crystals…')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Support Our Development
                        </h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            Your donations directly impact our ability to launch sooner and
                            develop more features. Help us create the ultimate FFXIV resource!{' '}
                            <span className="font-bold text-primary">
                An Early (Immediate) Access Code will be provided for those that
                Donate $5 or more!
              </span>
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-md p-8 rounded-lg border border-slate-700">
                        <a
                            href="https://www.paypal.com/donate/?hosted_button_id=P9V4NDZSTNGZ8"
                            target="_blank"
                            rel="noopener"
                            className="w-full block bg-primary hover:bg-opacity-90 text-white py-4 !rounded-button transition-colors text-lg font-medium mb-6 text-center"
                        >
                            Support Our Development
                        </a>
                        <div className="mt-8 pt-8 border-t border-slate-700">
                            <h3 className="text-xl font-semibold mb-4 text-center">
                                Early Access Code
                            </h3>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    verify();
                                }}
                                className="space-y-4"
                                autoComplete="off"
                                id="earlyAccessForm"
                            >
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
                                    disabled={accessStatus === 'loading'}
                                    className={`w-full py-3 text-white !rounded-button transition-colors font-medium ${
                                        accessStatus === 'loading'
                                            ? 'bg-slate-700/60'
                                            : 'bg-slate-700 hover:bg-opacity-90'
                                    }`}
                                >
                                    {accessStatus === 'loading' ? 'Verifying…' : 'Verify Access'}
                                </button>
                                <div
                                    id="accessMessage"
                                    className={`${
                                        accessStatus === 'idle' ? 'hidden' : ''
                                    } text-center py-2 px-4 rounded-button ${
                                        accessStatus === 'success'
                                            ? 'bg-green-500/10 text-green-500'
                                            : accessStatus === 'error'
                                                ? 'bg-red-500/10 text-red-500'
                                                : ''
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
                {/* … */}
            </footer>
        </>
    );
}
