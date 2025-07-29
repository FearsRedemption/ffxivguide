import type { JobGuideContent } from '../types/JobGuideContent';
import { slugifyJobName } from "../utils/slugify.ts";

export const jobGuideData: Record<string, JobGuideContent> = {
    [slugifyJobName('Paladin')]: {
        jobName: 'Paladin',
        subtitle: 'Frontline Tank with Balanced Defense and Magic Burst',
        role: 'Tank',
        difficulty: 2,
        unlockLevel: 30,
        preJob: 'Gladiator',
        bgImage: '/assets/images/job-hero/Paladin-Hero.jpg',
        intro:
            'Paladin is a defensive tank that blends weapon skills and magic to mitigate damage, heal allies, and unleash burst damage during specific windows. It excels at both solo and group mitigation while offering unique utility through Cover and Passage of Arms.',
        roleSummary:
            'Paladins operate on a dual-phase system—physical combos to build gauge, followed by a magical burst window. Their role is to maintain threat, apply mitigation through abilities like Sentinel and Holy Sheltron, and coordinate burst with Fight or Flight and Requiescat.',
        rotations: {
            singleTarget: [
                { icon: '/assets/images/skills/paladin/Fight_or_Flight.png', name: 'Fight or Flight', time: '0s' },
                { icon: '/assets/images/skills/paladin/Fast_Blade.png', name: 'Fast Blade', time: '2s' },
                { icon: '/assets/images/skills/paladin/Riot_Blade.png', name: 'Riot Blade', time: '4s' },
                { icon: '/assets/images/skills/paladin/Royal_Authority.png', name: 'Royal Authority', time: '6s' },
                { icon: '/assets/images/skills/paladin/Expiacion.png', name: 'Expiacion', time: '8s' },
                { icon: '/assets/images/skills/paladin/Requiescat.png', name: 'Requiescat', time: '10s' },
                { icon: '/assets/images/skills/paladin/Confiteor.png', name: 'Confiteor', time: '12s' },
                { icon: '/assets/images/skills/paladin/Blade_of_Faith.png', name: 'Blade of Faith', time: '14s' },
                { icon: '/assets/images/skills/paladin/Blade_of_Truth.png', name: 'Blade of Truth', time: '16s' },
                { icon: '/assets/images/skills/paladin/Blade_of_Valor.png', name: 'Blade of Valor', time: '18s' },
            ],
            aoe: [
                { icon: '/assets/images/skills/paladin/Fight_or_Flight.png', name: 'Fight or Flight', time: '0s' },
                { icon: '/assets/images/skills/paladin/Total_Eclipse.png', name: 'Total Eclipse', time: '2s' },
                { icon: '/assets/images/skills/paladin/Prominence.png', name: 'Prominence', time: '4s' },
                { icon: '/assets/images/skills/paladin/Expiacion.png', name: 'Expiacion', time: '6s' },
                { icon: '/assets/images/skills/paladin/Requiescat.png', name: 'Requiescat', time: '8s' },
                { icon: '/assets/images/skills/paladin/Holy_Circle.png', name: 'Holy Circle', time: '10s' },
                { icon: '/assets/images/skills/paladin/Confiteor.png', name: 'Confiteor', time: '12s' },
                { icon: '/assets/images/skills/paladin/Blade_of_Faith.png', name: 'Blade of Faith', time: '14s' },
                { icon: '/assets/images/skills/paladin/Blade_of_Truth.png', name: 'Blade of Truth', time: '16s' },
                { icon: '/assets/images/skills/paladin/Blade_of_Valor.png', name: 'Blade of Valor', time: '18s' },
            ],
        },
        openers: [
            {
                title: 'Standard Burst Opener',
                skills: [
                    { icon: '/assets/images/skills/paladin/Fight_or_Flight.png', name: 'Fight or Flight', time: '0s' },
                    { icon: '/assets/images/skills/paladin/Fast_Blade.png', name: 'Fast Blade', time: '2s' },
                    { icon: '/assets/images/skills/paladin/Riot_Blade.png', name: 'Riot Blade', time: '4s' },
                    { icon: '/assets/images/skills/paladin/Royal_Authority.png', name: 'Royal Authority', time: '6s' },
                    { icon: '/assets/images/skills/paladin/Expiacion.png', name: 'Expiacion', time: '7.5s' },
                    { icon: '/assets/images/skills/paladin/Requiescat.png', name: 'Requiescat', time: '9s' },
                    { icon: '/assets/images/skills/paladin/Confiteor.png', name: 'Confiteor', time: '10.5s' },
                    { icon: '/assets/images/skills/paladin/Blade_of_Faith.png', name: 'Blade of Faith', time: '12s' },
                    { icon: '/assets/images/skills/paladin/Blade_of_Truth.png', name: 'Blade of Truth', time: '13.5s' },
                    { icon: '/assets/images/skills/paladin/Blade_of_Valor.png', name: 'Blade of Valor', time: '15s' },
                ],
            },
        ],
        tips: [
            'Start Fight or Flight 1 GCD before your physical combo to maximize buff duration.',
            'Requiescat grants full magic potency when used at 100% MP—use it after Royal Authority and Expiacion.',
            'Always follow Confiteor with the Blade combo for maximum burst.',
            'Use Sentinel and Holy Sheltron proactively to reduce healer load.',
            'Passage of Arms should be coordinated with party-wide damage mechanics.',
            'Use Cover sparingly—reserve it for scripted damage or to protect critical roles in progression.',
        ],
    },
};
