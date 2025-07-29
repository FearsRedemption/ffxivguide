// src/data/allJobsData.ts


export interface JobCardData {
    jobName: string;
    icon: string;
    jobRole: string;
    unlockedIn: string;
    difficulty: number; // 1 to 5 stars
    link: string;
}

export const allJobsData: JobCardData[] = [
    // Tanks
    {
        jobName: "Paladin",
        icon: Paladin,
        jobRole: "Tank",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: '#'
    },
    {
        jobName: "Warrior",
        icon: Warrior,
        jobRole: "Tank",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: '#'
    },
    {
        jobName: "Dark Knight",
        icon: DarkKnight,
        jobRole: "Tank",
        unlockedIn: "Heavensward",
        difficulty: 3,
        link: '#'
    },
    {
        jobName: "Gunbreaker",
        icon: Gunbreaker,
        jobRole: "Tank",
        unlockedIn: "Shadowbringers",
        difficulty: 3,
        link: '#'
    },

    // Healers
    {
        jobName: "White Mage",
        icon: WhiteMage,
        jobRole: "Healer",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: '#'
    },
    {
        jobName: "Scholar",
        icon: Scholar,
        jobRole: "Healer",
        unlockedIn: "A Realm Reborn",
        difficulty: 4,
        link: '#'
    },
    {
        jobName: "Astrologian",
        icon: Astrologian,
        jobRole: "Healer",
        unlockedIn: "Heavensward",
        difficulty: 5,
        link: '#'
    },
    {
        jobName: "Sage",
        icon: Sage,
        jobRole: "Healer",
        unlockedIn: "Endwalker",
        difficulty: 4,
        link: '#'
    },

    // Melee DPS
    {
        jobName: "Monk",
        icon: Monk,
        jobRole: "Melee DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 4,
        link: '#'
    },
    {
        jobName: "Dragoon",
        icon: Dragoon,
        jobRole: "Melee DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 3,
        link: '#'
    },
    {
        jobName: "Ninja",
        icon: Ninja,
        jobRole: "Melee DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 5,
        link: '#'
    },
    {
        jobName: "Samurai",
        icon: Samurai,
        jobRole: "Melee DPS",
        unlockedIn: "Stormblood",
        difficulty: 3,
        link: '#'
    },
    {
        jobName: "Reaper",
        icon: Reaper,
        jobRole: "Melee DPS",
        unlockedIn: "Endwalker",
        difficulty: 3,
        link: '#'
    },
    {
        jobName: "Viper",
        icon: Viper,
        jobRole: "Melee DPS",
        unlockedIn: "Dawntrail",
        difficulty: 4,
        link: '#'
    },        

    // Physical Ranged DPS
    {
        jobName: "Bard",
        icon: Bard,
        jobRole: "Physical Ranged DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: '#'
    },
    {
        jobName: "Machinist",
        icon: Machinist,
        jobRole: "Physical Ranged DPS",
        unlockedIn: "Heavensward",
        difficulty: 3,
        link: '#'
    },
    {
        jobName: "Dancer",
        icon: Dancer,
        jobRole: "Physical Ranged DPS",
        unlockedIn: "Shadowbringers",
        difficulty: 2,
        link: '#'
    },

    // Magical Ranged DPS
    {
        jobName: "Black Mage",
        icon: BlackMage,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 5,
        link: '#'
    },
    {
        jobName: "Summoner",
        icon: Summoner,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: '#'
    },
    {
        jobName: "Red Mage",
        icon: RedMage,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "Stormblood",
        difficulty: 3,
        link: '#'
    },
    {
        jobName: "Blue Mage",
        icon: BlueMage,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "Stormblood (Patch 4.5)",
        difficulty: 4,
        link: '#'
    },
];
