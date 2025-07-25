import React from 'react';

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-800 px-4">
            <form className="bg-gray-100 dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Login</h2>
                <label className="block mb-4">
                    <span className="text-gray-700 dark:text-gray-300">Email</span>
                    <input type="email" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md" required />
                </label>
                <label className="block mb-6">
                    <span className="text-gray-700 dark:text-gray-300">Password</span>
                    <input type="password" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md" required />
                </label>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                    Login
                </button>
            </form>
        </div>
    );
}