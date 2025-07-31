// src/data/fcAchievementsData.ts
export type FCAchievement = {
    title: string;
    subtitle: string;
    description: string;
    date: string;
    type: string;
    icon: string;
    iconColor: string;
    image: string;
    tags: string[];
};

const fcAchievementsData: FCAchievement[] = [
    {
        title: 'Raid Achievement',
        subtitle: 'Savage Clear',
        description:
            'Our raid team achieved an incredibly fast clear of the latest Savage tier, completing all four floors within the first week of release.',
        date: 'August 5, 2024',
        type: 'Raiding',
        icon: 'ri-sword-line',
        iconColor: 'bg-primary',
        image:
            'https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20raid%20scene%20showing%20a%20group%20of%20players%20defeating%20a%20massive%20boss%20with%20spectacular%20visual%20effects%20and%20celebration%20animations.%20The%20image%20captures%20the%20moment%20of%20victory%20with%20dramatic%20lighting%20and%20composition.&width=400&height=200&seq=ffxiv-achievement-1&orientation=landscape',
        tags: ['Raiding', 'Savage', 'Fast'],
    },
    {
        title: 'Housing Achievement',
        subtitle: 'Large Estate Acquisition',
        description:
            'After 2 years of hitting every single lottery we successfully purchased a large estate in Shirogane. Not just any large plot but the BEST plot, providing a beautiful home for all FC members.',
        date: 'August 9, 2025',
        type: 'Housing',
        icon: 'ri-home-4-line',
        iconColor: 'bg-emerald-500',
        image:
            'https://static.readdy.ai/image/ca38ae522d47c397614c1cfc96930687/9bda157e32a246c9a5d70138b9b28ca0.jfif',
        tags: ['Housing', 'Large Plot', 'Shirogane'],
    },
    {
        title: 'Crafting Achievement',
        subtitle: 'Master Crafters Guild',
        description:
            'Our FC now has Master Crafters in each crafting discipline, allowing us to craft any item in the game for our members.',
        date: 'April 5, 2025',
        type: 'Crafting',
        icon: 'ri-hammer-line',
        iconColor: 'bg-amber-500',
        image:
            'https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20crafting%20scene%20showing%20multiple%20players%20gathered%20around%20crafting%20stations%20with%20crafting%20animations%20and%20effects.%20The%20image%20shows%20a%20productive%20workshop%20environment%20with%20various%20crafting%20tools%20and%20materials%20visible.&width=400&height=200&seq=ffxiv-achievement-3&orientation=landscape',
        tags: ['Crafting', 'Specialists', 'Self-Sufficient'],
    },
    {
        title: 'Community Achievement',
        subtitle: 'Number 1 FC on Midgardsormr',
        description:
            'We were ranked #1 in Midgardsormr, and 61st in the world. (across all datacenters)',
        date: 'August, 2024',
        type: 'Community',
        icon: 'ri-group-line',
        iconColor: 'bg-rose-500',
        image:
            'https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20community%20event%20scene%20showing%20many%20players%20gathered%20for%20a%20celebration%20with%20fireworks%20and%20special%20effects.%20The%20image%20shows%20a%20festive%20atmosphere%20with%20characters%20in%20colorful%20outfits%20participating%20in%20the%20event.&width=400&height=200&seq=ffxiv-achievement-4&orientation=landscape',
        tags: ['Community', 'Milestone', 'Event'],
    },
    {
        title: 'Exploration Achievement',
        subtitle: 'Deep Sea Explorers',
        description:
            'Our FC submarines continue to deliver valuables each and every day. We use these valuables to fund events, giveaways, and decorations.',
        date: 'All Time',
        type: 'Exploration',
        icon: 'ri-ship-line',
        iconColor: 'bg-blue-500',
        image:
            'https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20submarine%20exploration%20scene%20showing%20a%20submarine%20or%20airship%20returning%20with%20rare%20items%20and%20treasures.%20The%20image%20shows%20the%20workshop%20area%20where%20these%20vessels%20dock%20with%20characters%20examining%20the%20findings.&width=400&height=200&seq=ffxiv-achievement-5&orientation=landscape',
        tags: ['Submarines', 'Exploration', 'Rare Finds'],
    },
    {
        title: 'Ultimate Achievement',
        subtitle: 'Ultimate Conquerors',
        description:
            'Our members have successfully cleared all Ultimate raids, including the most recent The Futures Rewritten (Ultimate).',
        date: 'June 18, 2025',
        type: 'Ultimate',
        icon: 'ri-sword-line',
        iconColor: 'bg-purple-500',
        image:
            'https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20ultimate%20raid%20scene%20showing%20a%20group%20of%20players%20facing%20an%20incredibly%20difficult%20boss%20with%20spectacular%20visual%20effects.%20The%20image%20shows%20the%20epic%20scale%20of%20ultimate%20encounters%20with%20dramatic%20lighting%20and%20intense%20action.&width=400&height=200&seq=ffxiv-achievement-6&orientation=landscape',
        tags: ['Ultimate', 'Raiding', 'Endgame'],
    },
];

export default fcAchievementsData;
