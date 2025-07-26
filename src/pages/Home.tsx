import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
            <div className="max-w-2xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to <span className="text-primary">FinalFXIV</span> Guides
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-6">
                    Explore comprehensive job guides and resources to help you master every role in Eorzea.
                </p>
                <Link
                    to="/jobs"
                    className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-button text-lg font-medium transition-colors"
                >
                    View All Job Guides
                </Link>
            </div>
        </div>
    );
}
