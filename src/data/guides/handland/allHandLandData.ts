// src/data/guides/handland/allHandLandData.ts

import type { JobCardData } from '../jobs/allJobsData';

// Crafter icons
import carpenter from '../../../assets/images/job-icon/Carpenter.png';
import blacksmith from '../../../assets/images/job-icon/Blacksmith.png';
import armorer from '../../../assets/images/job-icon/Armorer.png';
import goldsmith from '../../../assets/images/job-icon/Goldsmith.png';
import leatherworker from '../../../assets/images/job-icon/Leatherworker.png';
import weaver from '../../../assets/images/job-icon/Weaver.png';
import alchemist from '../../../assets/images/job-icon/Alchemist.png';
import culinarian from '../../../assets/images/job-icon/Culinarian.png';

// Gatherer icons
import miner from '../../../assets/images/job-icon/Miner.png';
import botanist from '../../../assets/images/job-icon/Botanist.png';
import fisher from '../../../assets/images/job-icon/Fisher.png';

export const allHandLandData: JobCardData[] = [
    // Disciples of the Hand (Crafters)
    {
        jobName: 'Carpenter',
        icon: carpenter,
        jobRole: 'Crafter',
        unlockedIn: 'A Realm Reborn',
        difficulty: 2,
        link: '#',
    },
    {
        jobName: 'Blacksmith',
        icon: blacksmith,
        jobRole: 'Crafter',
        unlockedIn: 'A Realm Reborn',
        difficulty: 3,
        link: '#',
    },
    {
        jobName: 'Armorer',
        icon: armorer,
        jobRole: 'Crafter',
        unlockedIn: 'A Realm Reborn',
        difficulty: 3,
        link: '#',
    },
    {
        jobName: 'Goldsmith',
        icon: goldsmith,
        jobRole: 'Crafter',
        unlockedIn: 'A Realm Reborn',
        difficulty: 2,
        link: '#',
    },
    {
        jobName: 'Leatherworker',
        icon: leatherworker,
        jobRole: 'Crafter',
        unlockedIn: 'A Realm Reborn',
        difficulty: 3,
        link: '#',
    },
    {
        jobName: 'Weaver',
        icon: weaver,
        jobRole: 'Crafter',
        unlockedIn: 'A Realm Reborn',
        difficulty: 2,
        link: '#',
    },
    {
        jobName: 'Alchemist',
        icon: alchemist,
        jobRole: 'Crafter',
        unlockedIn: 'A Realm Reborn',
        difficulty: 4,
        link: '#',
    },
    {
        jobName: 'Culinarian',
        icon: culinarian,
        jobRole: 'Crafter',
        unlockedIn: 'A Realm Reborn',
        difficulty: 2,
        link: '#',
    },

    // Disciples of the Land (Gatherers)
    {
        jobName: 'Miner',
        icon: miner,
        jobRole: 'Gatherer',
        unlockedIn: 'A Realm Reborn',
        difficulty: 2,
        link: '#',
    },
    {
        jobName: 'Botanist',
        icon: botanist,
        jobRole: 'Gatherer',
        unlockedIn: 'A Realm Reborn',
        difficulty: 2,
        link: '#',
    },
    {
        jobName: 'Fisher',
        icon: fisher,
        jobRole: 'Gatherer',
        unlockedIn: 'A Realm Reborn',
        difficulty: 3,
        link: '#',
    },
];
