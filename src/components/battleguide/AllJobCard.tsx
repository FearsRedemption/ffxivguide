// src/components/battleguide/AllJobCard.tsx
import { Link } from 'react-router-dom';
import type { JobCardData } from '../../data/guides/jobs/allJobsData';

interface AllJobCardProps {
    job: JobCardData;
}

const roleColorMap: Record<string, string> = {
    'Tank': 'border-blue-500',
    'Healer': 'border-green-500',
    'Melee DPS': 'border-red-500',
    'Physical Ranged DPS': 'border-yellow-400',
    'Magical Ranged DPS': 'border-purple-500',
};

export default function AllJobCard({ job }: AllJobCardProps) {
    const borderColor = roleColorMap[job.jobRole] || 'border-gray-300';
    const jobSlug = job.jobName.toLowerCase().replace(/\s+/g, '-'); // e.g., "Dark Knight" → "dark-knight"

    return (
        <Link to={`/job/${jobSlug}`}>
            <div className={`cursor-pointer bg-white dark:bg-[#2d2d2d] rounded-lg shadow-lg overflow-hidden transition-transform duration-200 hover:scale-[1.02] border-t-4 ${borderColor}`}>
                <div className="flex items-center p-4 space-x-4">
                    <div className="w-16 h-16 flex-shrink-0">
                        <img
                            src={job.icon}
                            alt={`${job.jobName} icon`}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.jobName}</h3>
                        <p className="text-md text-gray-600 dark:text-gray-300">{job.jobRole}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            Unlocked in {job.unlockedIn}
                        </p>
                    </div>
                </div>
                <div className="px-4 pb-4">
                    <div className="flex items-center space-x-1 text-yellow-500 dark:text-yellow-400 text-xl">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>
                                {i < job.difficulty ? '★' : '☆'}
                            </span>
                        ))}
                        <span className="ml-2 text-xl text-gray-500 dark:text-gray-400">
                            Difficulty
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
