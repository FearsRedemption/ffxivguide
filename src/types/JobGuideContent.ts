// src/types/JobGuideContent.ts

export interface SkillBlock {
    icon: string;    // Path or URL to skill icon
    name: string;    // Skill name
    time: string;    // Timestamp like "0s", "2s"
}

export interface OpenerBlock {
    title: string;         // e.g., "Standard Opener"
    skills: SkillBlock[];  // List of skills in timeline
}

export interface JobGuideContent {
    jobName: string;              // "Paladin"
    subtitle: string;            // "Defensive frontline tank with burst windows"
    intro: string;               // General job intro
    roleSummary: string;         // Description of job's role in the party
    rotations: {
        singleTarget: SkillBlock[];
        aoe: SkillBlock[];
    };
    openers: OpenerBlock[];
    tips?: string[];             // Optional list of tips or guidance
}
