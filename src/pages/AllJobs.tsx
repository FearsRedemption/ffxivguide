// src/pages/AllJobs.tsx
import {useEffect, useRef, useState} from 'react';
import '../styles/index.css';
import {allJobsData} from '../data/allJobsData';
import JobCategorySection from '../components/battleguide/JobCategorySection';
import PageHeader from "../components/PageHeader.tsx";

// Role icons
import Tank from '../assets/images/classes/Tank.png';
import Healer from '../assets/images/classes/Healer.png';
import MeleeDPS from '../assets/images/classes/Melee DPS.png';
import PhysicalRanged from '../assets/images/classes/Physical Ranged DPS.png';
import MagicalRanged from '../assets/images/classes/Magical Ranged DPS.png';
import Filtered from '../assets/images/classes/Filtered.png';

export default function AllJobs() {
    const [selectedRole, setSelectedRole] = useState('All');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [selectedExpansion, setSelectedExpansion] = useState('All');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const [showRoleDropdown, setShowRoleDropdown] = useState(false);
    const [showExpansionDropdown, setShowExpansionDropdown] = useState(false);
    const [showDifficultyDropdown, setShowDifficultyDropdown] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setShowRoleDropdown(false);
                setShowExpansionDropdown(false);
                setShowDifficultyDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const roles = [
        { name: 'Tank', icon: Tank },
        { name: 'Healer', icon: Healer },
        { name: 'Melee DPS', icon: MeleeDPS },
        { name: 'Physical Ranged DPS', icon: PhysicalRanged },
        { name: 'Magical Ranged DPS', icon: MagicalRanged }
    ];

    const expansions = [
        'A Realm Reborn',
        'Heavensward',
        'Stormblood',
        'Shadowbringers',
        'Endwalker',
        'Stormblood (Patch 4.5)'
    ];

    const filteredJobs = allJobsData.filter(job => {
        const roleMatch = selectedRole === 'All' || job.jobRole === selectedRole;
        const difficultyMatch = selectedDifficulty === 'All' || job.difficulty === parseInt(selectedDifficulty);
        const expansionMatch = selectedExpansion === 'All' || job.unlockedIn.includes(selectedExpansion);
        return roleMatch && difficultyMatch && expansionMatch;
    }).sort((a, b) => {
        const nameA = a.jobName.toLowerCase();
        const nameB = b.jobName.toLowerCase();
        return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    const toggleDropdown = (dropdown: 'role' | 'expansion' | 'difficulty') => {
        setShowRoleDropdown(dropdown === 'role');
        setShowExpansionDropdown(dropdown === 'expansion');
        setShowDifficultyDropdown(dropdown === 'difficulty');
    };

    return (
        <div className="bg-[#f6f6f6] dark:bg-[#121212] text-gray-900 dark:text-white min-h-screen">
            <PageHeader
                breadcrumbs={[
                    { label: 'Home', href: '/home' },
                    { label: 'All Jobs', href: '/all-jobs' },
                ]}
            />

            <main className="max-w-[90rem] mx-auto px-6 pb-16">
                <section className="rounded-xl overflow-hidden shadow-md mb-6 bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700">
                    <div className="px-6 py-8">
                        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">All Jobs & Class Guides</h1>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                            Comprehensive guides for all jobs in Final Fantasy XIV, from rotations and openers to BiS gear and stat priorities.
                        </p>
                    </div>
                </section>

                <section className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 mb-6 relative z-10" ref={dropdownRef}>
                        <div className="flex flex-wrap gap-4">
                            {/* Role Dropdown */}
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={() => toggleDropdown('role')}
                                    className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                                >
                                    <i className="ri-filter-3-line" />
                                    <span>Role</span>
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                {showRoleDropdown && (
                                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800">
                                        {['All', ...roles.map(r => r.name)].map(role => (
                                            <button
                                                key={role}
                                                onClick={() => { setSelectedRole(role); setShowRoleDropdown(false); }}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                                            >
                                                {role}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Expansion Dropdown */}
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={() => toggleDropdown('expansion')}
                                    className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                                >
                                    <i className="ri-stack-line" />
                                    <span>Expansion</span>
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                {showExpansionDropdown && (
                                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800">
                                        {['All', ...expansions].map(exp => (
                                            <button
                                                key={exp}
                                                onClick={() => { setSelectedExpansion(exp); setShowExpansionDropdown(false); }}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                                            >
                                                {exp}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Difficulty Dropdown */}
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={() => toggleDropdown('difficulty')}
                                    className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                                >
                                    <i className="ri-bar-chart-line" />
                                    <span>Difficulty</span>
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                {showDifficultyDropdown && (
                                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800">
                                        <button onClick={() => { setSelectedDifficulty('All'); setShowDifficultyDropdown(false); }} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700">All</button>
                                        {[1, 2, 3, 4, 5].map(level => (
                                            <button
                                                key={level}
                                                onClick={() => { setSelectedDifficulty(level.toString()); setShowDifficultyDropdown(false); }}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                                            >
                                                {`${'★'.repeat(level)}${'☆'.repeat(5 - level)}`}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 justify-end">
                            {/* Sort Button */}
                            <button
                                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                                className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                            >
                                <i className={`ri-sort-${sortOrder === 'asc' ? 'asc' : 'desc'}`} />
                                <span>Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
                            </button>

                            {/* Clear Filters */}
                            <button
                                onClick={() => {
                                    setSelectedRole('All');
                                    setSelectedDifficulty('All');
                                    setSelectedExpansion('All');
                                    setSortOrder('asc');
                                }}
                                className="cursor-pointer text-primary hover:text-indigo-600 text-sm flex items-center space-x-1"
                            >
                                <i className="ri-refresh-line"></i>
                                <span>Clear Filters</span>
                            </button>
                        </div>
                    </div>

                    {/* Filtered Results */}
                    {selectedRole === 'All' && selectedDifficulty === 'All' && selectedExpansion === 'All' ? (
                        roles.map((role) => {
                            const jobs = allJobsData.filter(job => job.jobRole === role.name);
                            return (
                                <JobCategorySection
                                    key={role.name}
                                    icon={role.icon}
                                    title={role.name}
                                    jobs={jobs}
                                />
                            );
                        })
                    ) : (
                        <JobCategorySection
                            icon={roles.find(r => r.name === selectedRole)?.icon || Filtered}
                            title="Filtered Jobs"
                            jobs={filteredJobs}
                        />
                    )}
                </section>
            </main>
        </div>
    );
}
