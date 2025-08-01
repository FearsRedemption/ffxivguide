﻿// src/components/JobGuides.tsx
import JobCard from './JobCard';
import { jobGuides } from '../../data/quickAccessJobGuideData';

export default function JobGuides() {
    return (
        <section className="py-12 bg-gray-100 dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Job & Class Guides
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Master your role with our comprehensive job guides, from rotation optimization to gear recommendations.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {jobGuides.map((job, index) => (
                        <JobCard key={index} {...job} />
                    ))}
                </div>

                <div className="text-center mt-8">
                    <a href="/all-jobs">
                        <button className="cursor-pointer tool-button bg-white dark:bg-[#2d2d2d] border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-button font-medium whitespace-nowrap text-gray-700 dark:text-gray-200">
                            View All Jobs
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
