import { useParams } from 'react-router-dom';

const jobData: Record<
    string,
    {
        role: 'Tank' | 'Healer' | 'Melee DPS' | 'Ranged DPS' | 'Magic DPS';
        name: string;
        description: string;
        rotation: string[];
    }
> = {
    paladin: {
        role: 'Tank',
        name: 'Paladin',
        description: 'The sword and shield tank with healing magic.',
        rotation: ['Fast Blade', 'Riot Blade', 'Goring Blade'],
    },
    warrior: {
        role: 'Tank',
        name: 'Warrior',
        description: 'An axe-wielding berserker tank with lifesteal.',
        rotation: ['Heavy Swing', 'Maim', 'Storm’s Path'],
    },
    // Extend this object with other jobs as needed
};

export default function JobGuide() {
    const { jobName } = useParams<{ jobName: string }>();
    const job = jobName ? jobData[jobName.toLowerCase()] : null;

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-900 text-red-500 px-4">
                <div className="text-xl font-semibold">Unknown job: {jobName}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white px-4 py-10">
            <div className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-md p-8 rounded-lg border border-slate-700 shadow-md">
                <h1 className="text-4xl font-bold mb-4 text-primary">{job.name} Guide</h1>
                <p className="text-lg text-slate-300 mb-6">{job.description}</p>

                <h2 className="text-2xl font-semibold mb-3">Role: <span className="text-secondary">{job.role}</span></h2>

                <h3 className="text-xl font-semibold mt-8 mb-2">Basic Rotation</h3>
                <ul className="list-disc list-inside text-slate-200 space-y-1">
                    {job.rotation.map((skill, idx) => (
                        <li key={idx} className="ml-2">{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
