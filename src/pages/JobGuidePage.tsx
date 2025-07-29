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
    return new URL(`../assets/images/job-icon/${jobName}.png`, import.meta.url).href;
}
function getHeroBackgroundPath(jobName: string) {
    return new URL(`../assets/images/job-hero/${jobName}.png`, import.meta.url).href;
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
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        We couldn't find the guide for this job. Please check the job name in the URL.
                    </p>
                    <a
                        href="/all-jobs"
                        className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                    >
                        Go Back to All Jobs
                    </a>
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
            <main className="max-w-6xl mx-auto pb-16">
                {/* Hero Banner */}
                <section
                    className="relative rounded-xl overflow-hidden shadow-md mb-12 min-h-[500px] bg-cover bg-top text-white"
                    style={{ backgroundImage: `url(${getHeroBackgroundPath(jobData.jobName)})` }}
                >
                    {/* Content positioned in bottom overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-black/50 dark:bg-black/60 backdrop-blur-sm px-4 py-6 md:px-8 md:py-10">
                        <div className="flex flex-col items-center text-center text-white max-w-5xl mx-auto">
                            <img
                                src={getJobIconPath(jobData.jobName)}
                                alt={`${jobData.jobName} icon`}
                                className="h-20 w-20 mb-4 drop-shadow-lg"
                            />
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{jobData.jobName}</h1>
                            <p className="text-sm md:text-lg mt-2 text-gray-200 italic">{jobData.subtitle}</p>
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

                {/*Mitigation Rotation*/}
                {Array.isArray(jobData.rotations.mitigationRotation) && jobData.rotations.mitigationRotation.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Mitigation Rotation</h2>
                        {renderTimeline(jobData.rotations.mitigationRotation)}
                    </section>
                )}

                {/*Heal Rotation */}
                {Array.isArray(jobData.rotations.healingRotation) && jobData.rotations.healingRotation.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Healing Rotation</h2>
                        {renderTimeline(jobData.rotations.healingRotation)}
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
