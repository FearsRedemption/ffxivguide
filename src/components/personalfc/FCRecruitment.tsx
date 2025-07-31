// src/components/personalfc/FCRecruitment.tsx

import RoleCard from './RoleCard';

export default function FCRecruitment() {
    return (
        <section id="recruitment" className="scroll-mt-24 py-16 bg-gray-100 dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Recruitment Information
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm max-w-2xl mx-auto">
                        We're currently looking for active players to join our community.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Requirements */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                            Requirements
                        </h3>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 bg-white dark:bg-[#2a2a2a]">
                            <ul className="list-disc list-inside space-y-5 text-sm text-gray-700 dark:text-gray-300">
                                <li>
                                    <strong>Level 30+ Character:</strong> We accept players who have at least one job at level 30 or higher.
                                </li>
                                <li>
                                    <strong>Active Playtime:</strong> Members must log in at least once every 30 days. After 60 days of inactivity, removal may occur.
                                </li>
                                <li>
                                    <strong>Discord Participation:</strong> All members must join our Discord server.
                                </li>
                                <li>
                                    <strong>Positive Attitude:</strong> We value respect, patience, and a willingness to help others.
                                </li>
                            </ul>

                            <div className="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 text-sm text-gray-800 dark:text-indigo-300 rounded">
                                <strong>Note for New Players:</strong> We welcome sprouts and returning players! Dedicated mentors are available to help you grow.
                            </div>
                        </div>
                    </div>

                    {/* Open Positions */}
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                            Open Positions
                        </h3>

                        <div className="space-y-4 text-sm">
                            <RoleCard title="Tanks" jobs="Paladins, Warriors, Dark Knights, Gunbreakers" need="High" />
                            <RoleCard title="Healers" jobs="White Mages, Scholars, Astrologians, Sages" need="Medium" />
                            <RoleCard title="Melee DPS" jobs="Monks, Dragoons, Ninjas, Samurai, Reapers" need="Medium" />
                            <RoleCard title="Physical Ranged DPS" jobs="Bards, Machinists, Dancers" need="Medium" />
                            <RoleCard title="Magical DPS" jobs="Black Mages, Summoners, Red Mages" need="Medium" />
                            <RoleCard title="Crafters & Gatherers" jobs="DoH and DoL specialists" need="Medium" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
