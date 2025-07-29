// src/pages/JobGuidePage.tsx
import { useParams } from 'react-router-dom';
import { jobGuideData } from '../data/jobGuideData';
import type { SkillBlock } from '../types/JobGuideContent';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useServerStatus } from '../hooks/useServerStatus';
import { slugifyJobName } from '../utils/slugify';

// Dynamic image imports
function getJobIconPath(jobName: string) {
    return new URL(`../assets/images/Jobs/${jobName}.png`, import.meta.url).href;
}
function getHeroBackgroundPath(jobName: string) {
    return new URL(`../assets/images/Jobs/bg/${jobName}.webp`, import.meta.url).href;
}

export function JobGuidePage() {
    const { jobName } = useParams();
    const slug = slugifyJobName(jobName ?? '');
    const jobData = jobGuideData[slug];
    const serverStatus = useServerStatus();

    if (!jobData) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
                <Header serverStatus={serverStatus} />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        We couldn't find the guide for this job. Please check the job name in the URL.
                    </p>
                </div>
                <Footer />
            </div>
        );
    }

    const renderTimeline = (skills: SkillBlock[]) => (
        <div className="overflow-x-auto mt-2">
            <div className="flex min-w-[800px] bg-gray-50 dark:bg-[#1f1f1f] p-4 rounded-lg shadow-inner">
                {skills.map((skill, index) => (
                    <div key={index} className="timeline-item flex flex-col items-center mx-3">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden shadow-sm">
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                            <span className="absolute bottom-1 text-xs font-semibold text-gray-700 dark:text-white text-center w-full">
                                {skill.name}
                            </span>
                        </div>
                        <p className="text-xs mt-1 text-gray-600 dark:text-gray-300">{skill.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
            <Header serverStatus={serverStatus} />
            <main className="max-w-6xl mx-auto px-4 pb-16">
                {/* Hero Banner */}
                <section
                    className="relative rounded-xl overflow-hidden shadow-md mb-12"
                    style={{
                        backgroundImage: `url(${getHeroBackgroundPath(jobData.jobName)})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="bg-black/50 dark:bg-black/60 p-8 md:p-12 backdrop-blur-sm">
                        <div className="text-center text-white">
                            <img
                                src={getJobIconPath(jobData.jobName)}
                                alt={`${jobData.jobName} icon`}
                                className="mx-auto h-24 w-24 mb-4 drop-shadow-lg"
                            />
                            <h1 className="text-4xl font-bold tracking-tight">{jobData.jobName}</h1>
                            <p className="text-md mt-2 text-gray-200 italic">{jobData.subtitle}</p>

                            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-200">
                                <div><strong>Role:</strong> {jobData.role}</div>
                                <div><strong>Difficulty:</strong> {jobData.difficulty}/5</div>
                                <div><strong>Unlock Level:</strong> {jobData.unlockLevel}</div>
                                {jobData.preJob && (
                                    <div><strong>Pre-Job:</strong> {jobData.preJob}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Intro + Role Summary */}
                <section className="mb-12">
                    <p className="text-lg leading-relaxed mb-6">{jobData.intro}</p>
                    <h2 className="text-2xl font-bold mb-2 text-primary-600 dark:text-primary-400">Role Summary</h2>
                    <p className="text-base leading-relaxed">{jobData.roleSummary}</p>
                </section>

                {/* Single Target Rotation */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Single Target Rotation</h2>
                    {renderTimeline(jobData.rotations.singleTarget)}
                </section>

                {/* AoE Rotation */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">AoE Rotation</h2>
                    {renderTimeline(jobData.rotations.aoe)}
                </section>

                {/* Openers */}
                {Array.isArray(jobData.openers) && jobData.openers.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Openers</h2>
                        {jobData.openers.map((opener, index) => (
                            <div key={index} className="mb-6">
                                <h3 className="text-xl font-semibold mb-2">{opener.title}</h3>
                                {renderTimeline(opener.skills)}
                            </div>
                        ))}
                    </section>
                )}

                {/* Tips */}
                {Array.isArray(jobData.tips) && jobData.tips.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Tips</h2>
                        <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                            {jobData.tips.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
