// src/pages/NotFound.tsx
import { Link } from 'react-router-dom';
import '../styles/index.css';

export default function NotFound() {
    return (
        <section className="hero-bg min-h-screen flex items-center justify-center pt-20 pb-16">
            <div className="text-center px-4">
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-slate-300 mb-8">
                    Oops! The page you’re looking for can’t be found.
                </p>
                <Link
                    to="/home"
                    className="bg-primary text-white py-3 px-6 rounded-button hover:bg-opacity-90 transition-colors font-medium"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
}
