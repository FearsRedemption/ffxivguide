// src/data/fcMembersData.ts
type Member = {
    name: string;
    title: string;
    classes: string;
    since: string;
    image: string; // Already resolved path
};

const fcMembers: Member[] = [
    {
        name: 'Visenyaa Targaryen',
        title: 'FC PRESIDENT',
        classes: 'Sage (100) / All Classes (100) / Full Mentor',
        since: 'December 2022',
        image: new URL('../assets/images/fc-members/visenyaa.png', import.meta.url).href,
    },
    {
        name: 'Juneko Tsukino',
        title: 'VICE PRESIDENT / CREATOR',
        classes: 'Warrior (100) / Pictomancer (100)',
        since: 'April 2021',
        image: new URL('../assets/images/fc-members/juneko.png', import.meta.url).href,
    },
    {
        name: 'Whisper Sanguine',
        title: 'SITE CODER',
        classes: 'Reaper (100) / All Classes (100) / Full Mentor',
        since: 'August 2022',
        image: new URL('../assets/images/fc-members/whisper.png', import.meta.url).href,
    }
];
export default fcMembers;
