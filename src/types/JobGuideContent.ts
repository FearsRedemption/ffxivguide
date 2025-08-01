// src/types/JobGuideContent.ts

export interface SkillBlock {
    icon: string;
    name: string;
    time: string;
}

export interface Opener {
    title: string;
    skills: SkillBlock[];
}

export interface JobGuideContent {
    jobName: string;
    subtitle: string;
    role: string;
    difficulty: number;
    unlockLevel: number;
    preJob?: string;
    bgImage: string;
    intro: string;
    roleSummary: string;
    rotations: {
        singleTarget: SkillBlock[];
        aoe: SkillBlock[];
        mitigationRotation?: SkillBlock[];
        healingRotation?: SkillBlock[];
    };
    openers?: Opener[];
    tips?: string[];
    rotationNotes?: {
        singleTarget?: string;
        aoe?: string;
        mitigation?: string;
        healing?: string;
        opener?: string;
    };
}
