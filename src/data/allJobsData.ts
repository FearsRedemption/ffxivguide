// src/data/allJobsData.ts
import Paladin from '../assets/images/Jobs/Paladin.png';
import Warrior from '../assets/images/Jobs/Warrior.png';
import DarkKnight from '../assets/images/Jobs/Dark Knight.png';
import Gunbreaker from '../assets/images/Jobs/Gunbreaker.png';

import WhiteMage from '../assets/images/Jobs/White Mage.png';
import Scholar from '../assets/images/Jobs/Scholar.png';
import Astrologian from '../assets/images/Jobs/Astrologian.png';
import Sage from '../assets/images/Jobs/Sage.png';

import Monk from '../assets/images/Jobs/Monk.png';
import Dragoon from '../assets/images/Jobs/Dragoon.png';
import Ninja from '../assets/images/Jobs/Ninja.png';
import Samurai from '../assets/images/Jobs/Samurai.png';
import Reaper from '../assets/images/Jobs/Reaper.png';

import Bard from '../assets/images/Jobs/Bard.png';
import Machinist from '../assets/images/Jobs/Machinist.png';
import Dancer from '../assets/images/Jobs/Dancer.png';

import BlackMage from '../assets/images/Jobs/Black Mage.png';
import Summoner from '../assets/images/Jobs/Summoner.png';
import RedMage from '../assets/images/Jobs/Red Mage.png';
import BlueMage from '../assets/images/Jobs/Blue Mage.png';

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
        icon: Reaper,
        jobRole: "Melee DPS",
        unlockedIn: "Dawntrail",
        difficulty: 3,
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
