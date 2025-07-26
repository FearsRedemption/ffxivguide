import React, { useState } from 'react';

const ComingSoon = () => {
    const [accessCode, setAccessCode] = useState('');
    const [email, setEmail] = useState('');
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleAccessSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (accessCode === '0792') {
            window.location.href = '/home';
        } else {
            alert('Invalid access code');
        }
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        if (!isValidEmail) {
            alert('Please enter a valid email address.');
            return;
        }
        console.log(`Submitted email: ${email}`);
        setEmail('');
        setEmailSubmitted(true);
    };

    return (
        <div className="coming-soon-container">
            <div className="coming-soon-overlay">
                <header className="coming-soon-header">
                    <h1>Final FFXIV</h1>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Dungeons</a></li>
                            <li><a href="#">Donate</a></li>
                        </ul>
                    </nav>
                </header>

                <main className="coming-soon-hero">
                    <h2>A New Realm of FFXIV Guidance</h2>
                    <p>FinalFFXIV is a modern guide experience tailored for players seeking clear, concise, and beautifully organized information across all jobs and dungeons.</p>
                    <div className="coming-soon-buttons">
                        <a href="#" className="btn-primary">Explore Jobs</a>
                        <a href="#" className="btn-secondary">Learn More</a>
                    </div>
                </main>

                <section className="coming-soon-notify">
                    <form onSubmit={handleEmailSubmit} className="notify-form">
                        <label htmlFor="email">Join the launch list:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="username@domainname.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Notify Me</button>
                        {emailSubmitted && <p className="notify-confirm">You’re on the list!</p>}
                    </form>
                </section>

                <section className="coming-soon-features">
                    <h3>Why FinalFFXIV?</h3>
                    <div className="feature-grid">
                        <div className="feature-card">
                            <i className="ri-sword-line"></i>
                            <h4>Job Mastery</h4>
                            <p>Every class explained with rotations, priorities, and visual aids — no clutter, no confusion.</p>
                        </div>
                        <div className="feature-card">
                            <i className="ri-map-pin-line"></i>
                            <h4>Dungeon Deep Dives</h4>
                            <p>Visual boss guides, map callouts, and mechanic breakdowns. Always up to date.</p>
                        </div>
                        <div className="feature-card">
                            <i className="ri-star-smile-line"></i>
                            <h4>Clean & Fast</h4>
                            <p>Instant loading. Clear layout. No ads. Just the knowledge you need.</p>
                        </div>
                    </div>
                </section>

                <section className="coming-soon-donate">
                    <h3>Support the Journey</h3>
                    <p>We’re just getting started. Help us grow by spreading the word or buying us a coffee. More guides, features, and tools await.</p>
                    <a href="#" className="btn-donate">Donate Now</a>
                </section>

                <section className="coming-soon-access">
                    <form onSubmit={handleAccessSubmit}>
                        <label htmlFor="access-code">Access Code:</label>
                        <input
                            id="access-code"
                            type="text"
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)}
                        />
                        <button type="submit">Enter</button>
                    </form>
                </section>

                <footer className="coming-soon-footer">
                    &copy; {new Date().getFullYear()} FinalFFXIV. All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default ComingSoon;
