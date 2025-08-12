import { useParams } from 'react-router-dom';
import { jobGuideData } from '../data/guides/jobs/jobGuideData';
import type {Opener, SkillBlock} from '../types/JobGuideContent';
import { slugifyJobName } from '../utils/slugify';
import PageHeader from '../components/PageHeader';
import JobGuideSectionNav from '../components/jobguide/JobGuideSectionNav';

function getJobIconPath(jobName: string) {
    return new URL(`../assets/images/job-icon/${jobName}.png`, import.meta.url).href;
}

function getHeroBackgroundPath(jobName: string) {
    return new URL(`../assets/images/job-hero/${jobName}.png`, import.meta.url).href;
}

function getSkillIconPath(jobName: string, skillPath: string) {
    const alteredName = jobName.toLowerCase().replace(/\s+/g, '');
    return new URL(`../assets/images/skills/${alteredName}/${skillPath}.png`, import.meta.url).href;
}

export function JobGuidePage() {
    const { jobName } = useParams();
    const slug = slugifyJobName(jobName ?? '');
    const jobData = jobGuideData?.[slug];

    if (!jobData) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
                <PageHeader breadcrumbs={[
                    { label: 'Home', href: '/home' },
                    { label: 'All Jobs', href: '/all-jobs' },
                    { label: 'Unknown Job', href: '' },
                ]} />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        We couldn't find the guide for this job. Please check the job name in the URL.
                    </p>
                    <a href="/all-jobs" className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition mr-2">Go Back to All Jobs</a>
                    <a href="/home" className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition ml-2">Go Back to Home Page</a>
                </div>
            </div>
        );
    }

    const {
        jobName: fullJobName,
        subtitle,
        role,
        difficulty,
        unlockLevel,
        preJob,
        bgImage,
        intro,
        roleSummary,
    } = jobData;

    const openers = jobData.openers ?? [];
    const tips = jobData.tips ?? [];
    const rotationNotes = jobData.rotationNotes ?? {};

    const rotations = {
        singleTarget: jobData.rotations?.singleTarget ?? [],
        aoe: jobData.rotations?.aoe ?? [],
        mitigationRotation: jobData.rotations?.mitigationRotation ?? [],
        healingRotation: jobData.rotations?.healingRotation ?? [],
    };

    const renderTimeline = (jobName: string, skills: SkillBlock[]) => (
        <div className="overflow-x-auto mt-2">
            <div className="flex min-w-[800px] bg-gray-100 dark:bg-[#2a2a2a] p-4 rounded-lg shadow-inner">
                {skills.map((skill, index) => (
                    <div key={index} className="timeline-item flex flex-col items-center mx-3 text-center">
                        <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center overflow-hidden shadow-sm mb-2">
                            <img src={getSkillIconPath(jobName, skill.icon)} alt={`${skill.name} icon`} className="w-full h-full object-contain" />
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{skill.name}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{skill.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="bg-gray-100 text-gray-900 dark:text-white dark:bg-[#2a2a2a] min-h-screen">
            <PageHeader breadcrumbs={[
                { label: 'Home', href: '/home' },
                { label: 'All Jobs', href: '/all-jobs' },
                { label: `${fullJobName} Guide`, href: `/all-jobs/${slug}` },
            ]} />

            <JobGuideSectionNav
                hasOpeners={openers.length > 0}
                hasMitigation={rotations.mitigationRotation.length > 0}
                hasHealing={rotations.healingRotation.length > 0}
                hasTips={tips.length > 0}
            />

            <main className="max-w-7xl mx-auto px-4 pb-16">
                {/* Hero Banner */}
                <section className="relative rounded-xl overflow-hidden shadow-md mb-6 min-h-[500px] bg-cover bg-center text-white"
                         style={{ backgroundImage: `url(${getHeroBackgroundPath(bgImage)})` }}>
                    <div className="absolute bottom-0 left-0 w-full bg-black/50 dark:bg-black/60 backdrop-blur-sm px-4 py-6 md:px-8 md:py-10">
                        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                            <img src={getJobIconPath(fullJobName)} alt={`${fullJobName} icon`} className="h-20 w-20 mb-4 drop-shadow-lg" />
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{fullJobName}</h1>
                            <p className="text-sm md:text-lg mt-2 text-gray-200 italic">{subtitle}</p>
                            <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-200">
                                <div><strong>Role:</strong> {role}</div>
                                <div><strong>Difficulty:</strong> {difficulty}/5</div>
                                <div><strong>Unlock Level:</strong> {unlockLevel}</div>
                                {preJob && <div><strong>Pre-Job:</strong> {preJob}</div>}
                            </div>
                            <div className="mt-2 text-xs text-gray-300 italic">Updated for Patch 7.2+</div>
                        </div>
                    </div>
                </section>

                {/* Summary */}
                <section id="summary" className="scroll-mt-32 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                    <p className="text-lg leading-relaxed mb-6">{intro}</p>
                    <h2 className="text-2xl font-bold mb-2 text-primary-600 dark:text-primary-400">Role Summary</h2>
                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">{roleSummary}</p>
                </section>

                {/* Openers */}
                {openers.length > 0 && (
                    <section id="openers" className="scroll-mt-32 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Openers</h2>
                        {(openers ?? []).map((opener: Opener, index: number) => (
                            <div key={index} className="mb-8">
                                <h3 className="text-xl font-semibold mb-2">{opener.title}</h3>
                                {renderTimeline(fullJobName, opener.skills)}
                                {rotationNotes.opener && (
                                    <div className="mt-4 text-base text-gray-700 dark:text-gray-300">{rotationNotes.opener}</div>
                                )}
                            </div>
                        ))}
                    </section>
                )}

                {/* Single Target */}
                <section id="single" className="scroll-mt-32 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Single Target Rotation</h2>
                    {renderTimeline(fullJobName, rotations.singleTarget)}
                    {rotationNotes.singleTarget && (
                        <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">{rotationNotes.singleTarget}</p>
                    )}
                </section>

                {/* AoE */}
                <section id="aoe" className="scroll-mt-32 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                    <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">AoE Rotation</h2>
                    {renderTimeline(fullJobName, rotations.aoe)}
                    {rotationNotes.aoe && (
                        <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">{rotationNotes.aoe}</p>
                    )}
                </section>

                {/* Mitigation */}
                {rotations.mitigationRotation.length > 0 && (
                    <section id="mitigation" className="scroll-mt-32 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Mitigation Rotation</h2>
                        {renderTimeline(fullJobName, rotations.mitigationRotation)}
                        {rotationNotes.mitigation && (
                            <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">{rotationNotes.mitigation}</p>
                        )}
                    </section>
                )}

                {/* Healing */}
                {rotations.healingRotation.length > 0 && (
                    <section id="healing" className="scroll-mt-32 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Healing Rotation</h2>
                        {renderTimeline(fullJobName, rotations.healingRotation)}
                        {rotationNotes.healing && (
                            <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">{rotationNotes.healing}</p>
                        )}
                    </section>
                )}

                {/* Tips */}
                {tips.length > 0 && (
                    <section id="tips" className="scroll-mt-32 bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm p-6 mb-6">
                        <h2 className="text-2xl font-bold mb-4 text-primary-600 dark:text-primary-400">Tips</h2>
                        <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                            {(tips ?? []).map((tip: string, index: number) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
        </div>
    );
}
