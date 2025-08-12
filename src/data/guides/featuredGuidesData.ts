// src/data/featuredGuidesData.ts
import UltimateRaidImage from '../../assets/images/ultimate-raid-guide.png';
import CrafterImage from '../../assets/images/crafter-guide.png';
import ZoneGuideImage from '../../assets/images/zone-guide.png';

export const featuredGuides = [
    {
        title: 'Futures Rewritten Ultimate',
        description: 'Master the mechanics of the latest Ultimate Raid.',
        tag: 'Ultimate Raid Guide',
        difficulty: 'DIFFICULT',
        views: '34,573 - 7/27/2025',
        imageUrl: UltimateRaidImage,
        authorName: 'Tessan Twintails',
        authorAvatar: 'https://yt3.googleusercontent.com/M_vBa6nPD1IIWGsi2P5bP1epnULnMiT9LtH5_D_LWxag2teLXBTnXczH4JqxeFR2NCIZJ_s_=s160-c-k-c0x00ffffff-no-rj',
        videoUrl: 'https://www.youtube.com/watch?v=Sgz3nNpirCE',
        tagColor: 'text-indigo-600',
        tagBg: 'bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-300',
        difficultyColor: 'bg-red-500'
    },
    {
        title: 'Ultimate Crafter Leveling Guide',
        description: 'The most efficient leveling paths for Crafters to maximize XP gain.',
        tag: 'Crafting Guide',
        difficulty: 'BEGINNER',
        views: '540,034 - 7/27/2025',
        imageUrl: CrafterImage,
        authorName: 'Jolsn',
        authorAvatar: 'https://yt3.googleusercontent.com/5nn6bRkZ5yMxwCxw9zDWbzSpD3X9NwfAPtKcUyTlALWu_LhletDwYE_FwD4kEVyczXJRMYJMMlo=s160-c-k-c0x00ffffff-no-rj',
        videoUrl: 'https://www.youtube.com/watch?v=JDtimUPWEWA',
        tagColor: 'text-emerald-600',
        tagBg: 'bg-emerald-50 dark:bg-emerald-900 dark:text-emerald-300',
        difficultyColor: 'bg-blue-500'
    },
    {
        title: 'Occult Crescent Zone Guide',
        description: 'Go into the Occult Crescent Zone prepared with these tips and tricks!',
        tag: 'Zone',
        difficulty: 'TRENDING',
        views: '42,013 - 7/27/2025',
        imageUrl: ZoneGuideImage,
        authorName: 'Cole Evyx',
        authorAvatar: 'https://yt3.googleusercontent.com/ytc/AIdro_n8vaAe066_7wdVBg1gueReaGGcdqmLi_o8g4Nm0fB7YA=s160-c-k-c0x00ffffff-no-rj',
        videoUrl: 'https://www.youtube.com/watch?v=deLXjU9hVV8',
        tagColor: 'text-rose-600',
        tagBg: 'bg-rose-50 dark:bg-rose-900 dark:text-rose-300',
        difficultyColor: 'bg-purple-500'
    }
];
