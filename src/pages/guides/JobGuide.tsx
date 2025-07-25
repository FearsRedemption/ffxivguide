import { useParams } from 'react-router-dom';

const jobData: Record<string, {
    role: 'Tank' | 'Healer' | 'Melee DPS' | 'Ranged DPS' | 'Magic DPS';
    name: string;
    description: string;
    rotation: string[];
}> = {
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
    // Add more jobs...
};

export default function JobGuide() {
    const { jobName } = useParams<{ jobName: string }>();
    const job = jobName ? jobData[jobName.toLowerCase()] : null;

    if (!job) {
        return <div className="text-red-500 p-6">Unknown job: {jobName}</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{job.name} Guide</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{job.description}</p>

            <h2 className="mt-6 text-xl font-semibold">Basic Rotation</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                {job.rotation.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
