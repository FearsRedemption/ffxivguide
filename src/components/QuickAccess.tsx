export default function QuickAccess() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Find What You Need
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Browse our extensive collection of guides and resources for all aspects of Final Fantasy XIV
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <a
                        href="https://readdy.ai/home/fd15a5a4-ace7-46c4-b191-110ce699c87e/0c61fec0-7349-448f-85b9-a088f194d1e8"
                        data-readdy="true"
                        className="category-card bg-gradient-to-br from-blue-100 to-blue-300 dark:from-blue-100 dark:to-blue-300 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-700 flex items-center justify-center mx-auto mb-4">
                            <i className="ri-sword-line text-2xl text-indigo-600 dark:text-indigo-400"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Combat Guides</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Dungeons, Raids & Trials</p>
                    </a>

                    <a
                        href="https://readdy.ai/home/fd15a5a4-ace7-46c4-b191-110ce699c87e/34123689-e76f-4e19-9868-1239301918d9"
                        data-readdy="true"
                        className="category-card bg-gradient-to-br from-amber-100 to-yellow-300 dark:from-[#665c00] dark:to-[#ffcc33] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-700 flex items-center justify-center mx-auto mb-4">
                            <i className="ri-coins-line text-2xl text-amber-600 dark:text-amber-400"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Gil Making</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Farming & Market Strategies</p>
                    </a>

                    <a
                        href="https://readdy.ai/home/fd15a5a4-ace7-46c4-b191-110ce699c87e/53ea7007-6963-40d9-97c4-da5413346452"
                        data-readdy="true"
                        className="category-card bg-gradient-to-br from-emerald-100 to-green-300 dark:from-[#176c2d] dark:to-[#48b448] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-700 flex items-center justify-center mx-auto mb-4">
                            <i className="ri-hammer-line text-2xl text-emerald-600 dark:text-emerald-400"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Crafting & Gathering</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Recipes, Rotations & Nodes</p>
                    </a>

                    <a
                        href="https://readdy.ai/home/fd15a5a4-ace7-46c4-b191-110ce699c87e/a06831e2-8fdc-441b-b051-d3c7504f82f6"
                        data-readdy="true"
                        className="category-card bg-gradient-to-br from-rose-100 to-red-300 dark:from-[#822a2a] dark:to-[#bb4444] p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300 text-center"
                    >
                        <div className="w-16 h-16 rounded-full bg-rose-100 dark:bg-rose-700 flex items-center justify-center mx-auto mb-4">
                            <i className="ri-home-4-line text-2xl text-rose-600 dark:text-rose-400"></i>
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Housing & Glamour</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Decoration & Fashion</p>
                    </a>
                </div>
            </div>
        </section>
    );
}
