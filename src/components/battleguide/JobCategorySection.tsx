// src/components/battleguide/JobCategorySection.tsx
import type { JobCardData } from '../../data/guides/jobs/allJobsData';
import AllJobCard from './AllJobCard';

interface JobCategorySectionProps {
    icon: string;
    title: string;
    jobs: JobCardData[];
    originPath?: string;
    originLabel?: string;
}

export default function JobCategorySection(
    {
       icon,
       title,
       jobs,
       originPath,
       originLabel,
    }: JobCategorySectionProps) {
    return (
        <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-700 pb-2 flex items-center gap-3">
                {icon && (
                    <img
                        src={icon}
                        alt={`${title} Icon`}
                        className="w-10 h-10 object-contain"
                    />
                )}
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {jobs.map((job) => (
                    <AllJobCard
                        key={job.jobName}
                        job={job}
                        originPath={originPath}
                        originLabel={originLabel}
                    />
                ))}
            </div>
        </section>
    );
}
