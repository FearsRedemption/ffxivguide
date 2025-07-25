import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            <h1 className="text-3xl font-bold mb-4">Welcome to Final FFXIV Guide</h1>
            <p className="mb-6 text-lg">Explore job guides and resources for mastering your role.</p>
            <Link to="/jobs" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                View All Job Guides
            </Link>
        </div>
    );
}