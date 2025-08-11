// src/types/guides.ts

export type GuideTag = "DUNGEON" | "RAID" | "ALLIANCE RAID" | "TRIAL";
export type GuideDifficulty = "EASY" | "MEDIUM" | "HARD" | "EXTREME";

export interface GuideMechanic {
    boss: string;
    steps: string[];
    notes?: string;
}

export interface GuideRewards {
    tomestones?: string;
    loot?: string[];
    drops?: string[];   // optional separate list if you want
    misc?: string[];
}

export interface GuideUnlock {
    quest?: string;
    level?: number | string;
    location?: string;
    prerequisites?: string[];
}

export interface QuickGuide {
    id: string;
    title: string;
    subtitle?: string;
    tag: GuideTag;
    expansion: string;
    difficulty: GuideDifficulty;
    updated: string;           // human-readable for now
    views?: string;            // e.g., "15.2k"
    image: string;             // local/hosted path
    author: { name: string; avatar?: string };
    to: string;                // router link
    videoUrl?: string;

    // Optional structured content pulled by GuideDetail
    overview?: string[] | string;
    mechanics?: GuideMechanic[];
    rewards?: GuideRewards;
    unlock?: GuideUnlock;

    // Future-proofing: any extra grouped lists
    extras?: { title: string; items: string[] }[];
}

// Optional alias if you prefer a semantic name in pages:
export type DetailedGuide = QuickGuide;
