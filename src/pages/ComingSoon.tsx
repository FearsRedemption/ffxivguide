import React from 'react';

export default function ComingSoon() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4">
            <div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">Final FFXIV Guide</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Our site is coming soon! Sign up to be notified when we launch.
                </p>
                <a href="/register" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
                    Sign Up for Notification
                </a>
            </div>
        </div>
    );
}