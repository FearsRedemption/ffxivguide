// src/data/jobGuidesData.ts
import paladin from '../assets/images/job-icon/Paladin.png';
import darkknight from '../assets/images/job-icon/Dark Knight.png';
import gunbreaker from '../assets/images/job-icon/Gunbreaker.png';
import whitemage from '../assets/images/job-icon/White Mage.png';
import sage from '../assets/images/job-icon/Sage.png';
import samurai from '../assets/images/job-icon/Samurai.png';
import reaper from '../assets/images/job-icon/Reaper.png';
import bard from '../assets/images/job-icon/Bard.png';
import blackmage from '../assets/images/job-icon/Black Mage.png';
import summoner from '../assets/images/job-icon/Summoner.png';

export const jobGuides = [
    {
        name: 'Paladin',
        role: 'TANK',
        icon: paladin,
        link: '/job/paladin',
        roleColor: 'text-blue-600',
        roleBg: 'bg-blue-50'
    },
    {
        name: 'White Mage',
        role: 'HEALER',
        icon: whitemage,
        link: '/job/whitemage',
        roleColor: 'text-green-600',
        roleBg: 'bg-green-50'
    },
    {
        name: 'Samurai',
        role: 'MELEE DPS',
        icon: samurai,
        link: '/job/samurai',
        roleColor: 'text-red-600',
        roleBg: 'bg-red-50'
    },
    {
        name: 'Black Mage',
        role: 'MAGICAL DPS',
        icon: blackmage,
        link: '/job/blackmage',
        roleColor: 'text-purple-600',
        roleBg: 'bg-purple-50'
    },
    {
        name: 'Gunbreaker',
        role: 'TANK',
        icon: gunbreaker,
        link: '/job/gunbreaker',
        roleColor: 'text-blue-600',
        roleBg: 'bg-blue-50'
    },
    {
        name: 'Sage',
        role: 'HEALER',
        icon: sage,
        link: '/job/sage',
        roleColor: 'text-green-600',
        roleBg: 'bg-green-50'
    },
    {
        name: 'Bard',
        role: 'RANGED DPS',
        icon: bard,
        link: '/job/bard',
        roleColor: 'text-amber-600',
        roleBg: 'bg-amber-50'
    },
    {
        name: 'Summoner',
        role: 'MAGICAL DPS',
        icon: summoner,
        link: 'summoner',
        roleColor: 'text-purple-600',
        roleBg: 'bg-purple-50'
    },
    {
        name: 'Dark Knight',
        role: 'TANK',
        icon: darkknight,
        link: '/job/darkknight',
        roleColor: 'text-blue-600',
        roleBg: 'bg-blue-50'
    },
    {   
        name: 'Reaper',
        role: 'MELEE DPS',
        icon: reaper,
        link: '/job/reaper',
        roleColor: 'text-red-600',
        roleBg: 'bg-red-50'
    }
];
