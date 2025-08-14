// src/pages/CrafterGather.tsx
import { useEffect, useRef, useState } from 'react';
import '../styles/index.css';
import PageHeader from '../components/PageHeader';
import JobCategorySection from '../components/battleguide/JobCategorySection';
import { allHandLandData } from '../data/guides/handland/allHandLandData';

// Role icons for section headers
import CrafterIcon from '../assets/images/classes/Crafter.png';
import GathererIcon from '../assets/images/classes/Gatherer.png';
import Filtered from '../assets/images/classes/Filtered.png';

type MenuKey = 'role' | 'expansion' | 'difficulty' | null;

export default function CrafterGather() {
    const [selectedRole, setSelectedRole] = useState('All');         // 'Crafter' | 'Gatherer' | 'All'
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
    const [selectedExpansion, setSelectedExpansion] = useState('All');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    const [openMenu, setOpenMenu] = useState<MenuKey>(null);
    const roleRef = useRef<HTMLDivElement>(null);
    const expansionRef = useRef<HTMLDivElement>(null);
    const difficultyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            const insideRole = roleRef.current?.contains(target);
            const insideExpansion = expansionRef.current?.contains(target);
            const insideDifficulty = difficultyRef.current?.contains(target);
            if (!insideRole && !insideExpansion && !insideDifficulty) {
                setOpenMenu(null);
            }
        }
        function handleEscape(event: KeyboardEvent) {
            if (event.key === 'Escape') setOpenMenu(null);
        }
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const roles = [
        { name: 'Crafter', icon: CrafterIcon },
        { name: 'Gatherer', icon: GathererIcon },
    ];

    const expansions = [
        'A Realm Reborn',
        'Heavensward',
        'Stormblood',
        'Shadowbringers',
        'Endwalker',
        'Dawntrail',
    ];

    const filteredJobs = allHandLandData
        .filter(job => {
            const roleMatch = selectedRole === 'All' || job.jobRole === selectedRole;
            const difficultyMatch =
                selectedDifficulty === 'All' || job.difficulty === parseInt(selectedDifficulty);
            const expansionMatch =
                selectedExpansion === 'All' || String(job.unlockedIn).includes(selectedExpansion);
            return roleMatch && difficultyMatch && expansionMatch;
        })
        .sort((a, b) => {
            const nameA = a.jobName.toLowerCase();
            const nameB = b.jobName.toLowerCase();
            return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });

    const toggleMenu = (key: Exclude<MenuKey, null>) => {
        setOpenMenu(prev => (prev === key ? null : key));
    };

    // Close menus on scroll/resize (same pattern as AllJobs)
    useEffect(() => {
        let ticking = false;
        const closeMenus = () => setOpenMenu(null);
        const onScrollOrResize = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(() => {
                    closeMenus();
                    ticking = false;
                });
            }
        };
        window.addEventListener('scroll', onScrollOrResize, { passive: true });
        window.addEventListener('resize', onScrollOrResize);
        return () => {
            window.removeEventListener('scroll', onScrollOrResize);
            window.removeEventListener('resize', onScrollOrResize);
        };
    }, []);

    return (
        <div className="bg-[#f6f6f6] dark:bg-[#121212] text-gray-900 dark:text-white min-h-screen">
            <PageHeader
                breadcrumbs={[
                    { label: 'Home', href: '/home' },
                    { label: 'Crafting & Gathering', href: '/crafter-gather' },
                ]}
            />

            <main className="max-w-[90rem] mx-auto px-6 pb-16">
                {/* Header */}
                <section className="rounded-xl overflow-hidden shadow-md mb-6 bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700">
                    <div className="px-6 py-8">
                        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">Crafting & Gathering Guides</h1>
                        <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
                            Browse Disciples of the Hand (crafters) and Disciples of the Land (gatherers). Filter by role, expansion, and difficulty.
                        </p>
                    </div>
                </section>

                {/* Controls */}
                <section className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                    <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 mb-6 relative z-10">
                        <div className="flex flex-wrap gap-4">
                            {/* Role */}
                            <div className="relative inline-block text-left" ref={roleRef}>
                                <button
                                    onClick={() => toggleMenu('role')}
                                    className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                                    aria-haspopup="menu"
                                    aria-expanded={openMenu === 'role'}
                                >
                                    <i className="ri-filter-3-line" />
                                    <span>Role</span>
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                {openMenu === 'role' && (
                                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800">
                                        {['All', ...roles.map(r => r.name)].map(role => (
                                            <button
                                                key={role}
                                                onClick={() => { setSelectedRole(role); setOpenMenu(null); }}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                                            >
                                                {role}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Expansion */}
                            <div className="relative inline-block text-left" ref={expansionRef}>
                                <button
                                    onClick={() => toggleMenu('expansion')}
                                    className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                                    aria-haspopup="menu"
                                    aria-expanded={openMenu === 'expansion'}
                                >
                                    <i className="ri-stack-line" />
                                    <span>Expansion</span>
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                {openMenu === 'expansion' && (
                                    <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800">
                                        {['All', ...expansions].map(exp => (
                                            <button
                                                key={exp}
                                                onClick={() => { setSelectedExpansion(exp); setOpenMenu(null); }}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                                            >
                                                {exp}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Difficulty */}
                            <div className="relative inline-block text-left" ref={difficultyRef}>
                                <button
                                    onClick={() => toggleMenu('difficulty')}
                                    className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                                    aria-haspopup="menu"
                                    aria-expanded={openMenu === 'difficulty'}
                                >
                                    <i className="ri-bar-chart-line" />
                                    <span>Difficulty</span>
                                    <i className="ri-arrow-down-s-line" />
                                </button>
                                {openMenu === 'difficulty' && (
                                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800">
                                        <button
                                            onClick={() => { setSelectedDifficulty('All'); setOpenMenu(null); }}
                                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                                        >
                                            All
                                        </button>
                                        {[1, 2, 3, 4, 5].map(level => (
                                            <button
                                                key={level}
                                                onClick={() => { setSelectedDifficulty(level.toString()); setOpenMenu(null); }}
                                                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                                            >
                                                {`${'★'.repeat(level)}${'☆'.repeat(5 - level)}`}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4 justify-end">
                            <button
                                onClick={() => { setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc')); setOpenMenu(null); }}
                                className="cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-md flex items-center space-x-2"
                            >
                                <i className={`ri-sort-${sortOrder === 'asc' ? 'asc' : 'desc'}`} />
                                <span>Sort {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}</span>
                            </button>

                            <button
                                onClick={() => {
                                    setSelectedRole('All');
                                    setSelectedDifficulty('All');
                                    setSelectedExpansion('All');
                                    setSortOrder('asc');
                                    setOpenMenu(null);
                                }}
                                className="cursor-pointer text-primary hover:text-indigo-600 text-sm flex items-center space-x-1"
                            >
                                <i className="ri-refresh-line"></i>
                                <span>Clear Filters</span>
                            </button>
                        </div>
                    </div>

                    {/* Results */}
                    {selectedRole === 'All' && selectedDifficulty === 'All' && selectedExpansion === 'All' ? (
                        roles.map(role => {
                            const jobs = allHandLandData.filter(job => job.jobRole === role.name);
                            return (
                                <JobCategorySection
                                    key={role.name}
                                    icon={role.icon}
                                    title={role.name}
                                    jobs={jobs}
                                    originPath="/crafter-gather"
                                    originLabel="Crafting & Gathering"
                                />
                            );
                        })
                    ) : (
                        <JobCategorySection
                            icon={roles.find(r => r.name === selectedRole)?.icon || Filtered}
                            title="Filtered Jobs"
                            jobs={filteredJobs}
                            originPath="/crafter-gather"
                            originLabel="Crafting & Gathering"
                        />
                    )}
                </section>
            </main>
        </div>
    );
}
