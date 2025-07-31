// src/components/personalfc/FCMembers.tsx
import { useState } from 'react';
import fcMembers from '../../data/fcMembersData';

export default function FCMembers() {
    const [currentPage, setCurrentPage] = useState(1);
    const membersPerPage = 2;
    const totalPages = Math.ceil(fcMembers.length / membersPerPage);

    const startIndex = (currentPage - 1) * membersPerPage;
    const currentMembers = fcMembers.slice(startIndex, startIndex + membersPerPage);

    return (
        <section id="members" className="scroll-mt-24 py-16 bg-gray-100 dark:bg-[#2a2a2a]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        Current Members
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm max-w-2xl mx-auto">
                        Meet the adventurers who make up The UwU Crew
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {currentMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="relative rounded-lg overflow-hidden h-56 flex items-end p-6 border border-gray-300 dark:border-gray-700 shadow"
                            style={{
                                backgroundImage: `url(${member.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top 10%',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >

                            {/* Content on top */}
                            <div className="relative z-10 text-white drop-shadow-xl text-shadow">
                                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                                <p className="text-sm mb-1">{member.title}</p>
                                <p className="text-sm mb-1">{member.classes}</p>
                                <p className="text-sm text-gray-300">Member since: {member.since}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-3 py-1 rounded text-sm font-medium border border-gray-300 dark:border-gray-600 ${
                                currentPage === index + 1
                                    ? 'bg-primary text-white'
                                    : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300'
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
