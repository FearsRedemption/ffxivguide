import paladin from '../../../assets/images/job-icon/Paladin.png';
import warrior from '../../../assets/images/job-icon/Warrior.png';
import darkknight from '../../../assets/images/job-icon/Dark Knight.png';
import gunbreaker from '../../../assets/images/job-icon/Gunbreaker.png';

import whitemage from '../../../assets/images/job-icon/White Mage.png';
import scholar from '../../../assets/images/job-icon/Scholar.png';
import astrologian from '../../../assets/images/job-icon/Astrologian.png';
import sage from '../../../assets/images/job-icon/Sage.png';

import monk from '../../../assets/images/job-icon/Monk.png';
import dragoon from '../../../assets/images/job-icon/Dragoon.png';
import ninja from '../../../assets/images/job-icon/Ninja.png';
import samurai from '../../../assets/images/job-icon/Samurai.png';
import reaper from '../../../assets/images/job-icon/Reaper.png';
import viper from '../../../assets/images/job-icon/Viper.png';

import bard from '../../../assets/images/job-icon/Bard.png';
import machinist from '../../../assets/images/job-icon/Machinist.png';
import dancer from '../../../assets/images/job-icon/Dancer.png';

import blackmage from '../../../assets/images/job-icon/Black Mage.png';
import summoner from '../../../assets/images/job-icon/Summoner.png';
import redmage from '../../../assets/images/job-icon/Red Mage.png';
import pictomancer from '../../../assets/images/job-icon/Pictomancer.png';
import bluemage from '../../../assets/images/job-icon/Blue Mage.png';

export interface JobCardData {
    jobName: string;
    icon: string;
    jobRole: string;
    unlockedIn: string;
    difficulty: number;
    link: string;
}

export const allJobsData: JobCardData[] = [
    // Tanks
    {
        jobName: "Paladin",
        icon: paladin,
        jobRole: "Tank",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: "#"
    },
    {
        jobName: "Warrior",
        icon: warrior,
        jobRole: "Tank",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: "#"
    },
    {
        jobName: "Dark Knight",
        icon: darkknight,
        jobRole: "Tank",
        unlockedIn: "Heavensward",
        difficulty: 3,
        link: "#"
    },
    {
        jobName: "Gunbreaker",
        icon: gunbreaker,
        jobRole: "Tank",
        unlockedIn: "Shadowbringers",
        difficulty: 3,
        link: "#"
    },

    // Healers
    {
        jobName: "White Mage",
        icon: whitemage,
        jobRole: "Healer",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: "#"
    },
    {
        jobName: "Scholar",
        icon: scholar,
        jobRole: "Healer",
        unlockedIn: "A Realm Reborn",
        difficulty: 4,
        link: "#"
    },
    {
        jobName: "Astrologian",
        icon: astrologian,
        jobRole: "Healer",
        unlockedIn: "Heavensward",
        difficulty: 5,
        link: "#"
    },
    {
        jobName: "Sage",
        icon: sage,
        jobRole: "Healer",
        unlockedIn: "Endwalker",
        difficulty: 4,
        link: "#"
    },

    // Melee DPS
    {
        jobName: "Monk",
        icon: monk,
        jobRole: "Melee DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 4,
        link: "#"
    },
    {
        jobName: "Dragoon",
        icon: dragoon,
        jobRole: "Melee DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 3,
        link: "#"
    },
    {
        jobName: "Ninja",
        icon: ninja,
        jobRole: "Melee DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 5,
        link: "#"
    },
    {
        jobName: "Samurai",
        icon: samurai,
        jobRole: "Melee DPS",
        unlockedIn: "Stormblood",
        difficulty: 3,
        link: "#"
    },
    {
        jobName: "Reaper",
        icon: reaper,
        jobRole: "Melee DPS",
        unlockedIn: "Endwalker",
        difficulty: 3,
        link: "#"
    },
    {
        jobName: "Viper",
        icon: viper,
        jobRole: "Melee DPS",
        unlockedIn: "Dawntrail",
        difficulty: 4,
        link: "#"
    },

    // Physical Ranged DPS
    {
        jobName: "Bard",
        icon: bard,
        jobRole: "Physical Ranged DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: "#"
    },
    {
        jobName: "Machinist",
        icon: machinist,
        jobRole: "Physical Ranged DPS",
        unlockedIn: "Heavensward",
        difficulty: 3,
        link: "#"
    },
    {
        jobName: "Dancer",
        icon: dancer,
        jobRole: "Physical Ranged DPS",
        unlockedIn: "Shadowbringers",
        difficulty: 2,
        link: "#"
    },

    // Magical Ranged DPS
    {
        jobName: "Black Mage",
        icon: blackmage,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 5,
        link: "#"
    },
    {
        jobName: "Summoner",
        icon: summoner,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "A Realm Reborn",
        difficulty: 2,
        link: "#"
    },
    {
        jobName: "Red Mage",
        icon: redmage,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "Stormblood",
        difficulty: 3,
        link: "#"
    },
    {
        jobName: "Pictomancer",
        icon: pictomancer,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "Dawntrail",
        difficulty: 3,
        link: "#"
    },
    {
        jobName: "Blue Mage",
        icon: bluemage,
        jobRole: "Magical Ranged DPS",
        unlockedIn: "Stormblood",
        difficulty: 4,
        link: "#"
    }
];
