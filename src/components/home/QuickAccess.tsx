// src/components/home/QuickAccess.tsx

export default function QuickAccess() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Find What You Need
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Browse our collection of curated Final Fantasy XIV guides covering gameplay, progression, economy, and creativity.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {/* Combat Content */}
                    <a
                        href="/combat"
                        className="category-card bg-gradient-to-br from-blue-100 to-blue-300 dark:from-[#1f3b5c] dark:to-[#3b82f6] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-700 flex items-center justify-center mx-auto mb-4">
                            <i className="ri-sword-line text-2xl text-indigo-600 dark:text-indigo-300"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Combat Content</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Dungeons, Trials, and Raid Mechanics</p>
                    </a>

                    {/* Gil Making */}
                    <a
                        href="/gil-making"
                        className="category-card bg-gradient-to-br from-yellow-100 to-yellow-300 dark:from-[#665c00] dark:to-[#facc15] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-700 flex items-center justify-center mx-auto mb-4">
                            <i className="ri-coins-line text-2xl text-amber-600 dark:text-amber-300"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Gil Making</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Reliable Gold-Earning Methods and Marketboard Tips</p>
                    </a>

                    {/* Crafting & Gathering */}
                    <a
                        href="/crafter-gather"
                        className="category-card bg-gradient-to-br from-green-100 to-green-300 dark:from-[#14532d] dark:to-[#22c55e] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-700 flex items-center justify-center mx-auto mb-4">
                            <i className="ri-hammer-line text-2xl text-emerald-600 dark:text-emerald-300"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Crafting & Gathering</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Class Guides, Rotations, and Resource Locations</p>
                    </a>

                    {/* Housing & Glamour */}
                    <a
                        href="/style-design"
                        className="category-card bg-gradient-to-br from-rose-100 to-red-300 dark:from-[#7f1d1d] dark:to-[#f87171] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-700 flex items-center justify-center mx-auto mb-4">
                            <i className="ri-home-4-line text-2xl text-rose-600 dark:text-rose-300"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Housing & Glamour</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Home Décor and Character Fashion Inspiration</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
