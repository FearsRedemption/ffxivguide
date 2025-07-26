import React, { useState } from 'react';
import '../styles/index.css';

export default function ComingSoon() {
    const [email, setEmail] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [accessCode, setAccessCode] = useState('');
    const [accessMessage, setAccessMessage] = useState('');

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (email.length > 500) {
            setFormMessage('Email is too long. Please keep it under 500 characters.');
            return;
        }
        try {
            console.log(`Mock form submission: ${email}`);
            setFormMessage('Thank you for subscribing!');
            setEmail('');
        } catch {
            setFormMessage('Something went wrong. Please try again later.');
        }
    };

    const handleAccessCodeSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!accessCode) {
            setAccessMessage('Please enter an access code');
            return;
        }
        setAccessMessage('Verifying access code...');
        if (accessCode === '0792') {
            setAccessMessage('Access granted! Redirecting...');
            setTimeout(() => {
                window.location.href = '/home';
            }, 1000);
        } else {
            setAccessMessage('Invalid access code. Please try again.');
        }
    };

    return (
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

                    <div className="max-w-md mx-auto bg-slate-800/80 backdrop-blur-md p-6 rounded-lg border border-slate-700">
                        <h3 className="text-xl font-semibold mb-4">Get Notified When We Launch</h3>
                        <form onSubmit={handleEmailSubmit} className="flex flex-col space-y-4">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <i className="ri-mail-line text-slate-400"></i>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-900 border-none rounded-button text-white placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Your email address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary text-white py-3 px-6 rounded-button whitespace-nowrap hover:bg-opacity-90 transition-colors font-medium"
                            >
                                Notify Me
                            </button>
                            {formMessage && (
                                <div className="text-center py-2 px-4 rounded-button bg-green-500/10 text-green-500">
                                    {formMessage}
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="max-w-md mx-auto bg-slate-800/80 backdrop-blur-md p-6 rounded-lg border border-slate-700 mt-12">
                        <h3 className="text-xl font-semibold mb-4 text-center">Early Access Code</h3>
                        <form onSubmit={handleAccessCodeSubmit} className="space-y-4" autoComplete="off">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <i className="ri-key-2-line text-slate-400"></i>
                                </div>
                                <input
                                    type="text"
                                    name="accessCode"
                                    className="w-full pl-10 pr-4 py-3 bg-slate-900 border-none rounded-button text-white placeholder-slate-500 focus:ring-2 focus:ring-primary outline-none"
                                    placeholder="Enter your access code"
                                    value={accessCode}
                                    onChange={(e) => setAccessCode(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-slate-700 hover:bg-opacity-90 text-white py-3 rounded-button whitespace-nowrap transition-colors font-medium"
                            >
                                Verify Access
                            </button>
                            {accessMessage && (
                                <div className={`text-center py-2 px-4 rounded-button ${
                                    accessMessage.includes('granted')
                                        ? 'bg-green-500/10 text-green-500'
                                        : accessMessage.includes('Verifying')
                                            ? 'bg-blue-500/10 text-blue-500'
                                            : 'bg-red-500/10 text-red-500'
                                }`}>
                                    {accessMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
