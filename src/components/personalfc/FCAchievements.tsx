import fcAchievementsData from '../../data/fcAchievementsData';

export default function FCAchievements() {
    return (
        <section id="achievements" className="py-16 bg-white dark:bg-[#2a2a2a]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">FC Achievements</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Celebrating our collective accomplishments and milestones
                    </p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {fcAchievementsData.map((ach, idx) => (
                            <div
                                key={idx}
                                className="achievement-card bg-white dark:bg-[#1a1a1a] rounded-lg shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 transition duration-300"
                            >
                                <div className="relative h-48">
                                    <img
                                        src={ach.image}
                                        alt={ach.subtitle}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <div className="flex items-center">
                                            <div
                                                className={`w-10 h-10 rounded-full ${ach.iconColor} flex items-center justify-center mr-3`}
                                            >
                                                <i className={`${ach.icon} text-white`}></i>
                                            </div>
                                            <div>
                                                <p className="text-white font-bold">{ach.title}</p>
                                                <p className="text-gray-200 text-sm">{ach.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{ach.subtitle}</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{ach.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {ach.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded text-xs"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
