import visenyaaImg from '../../assets/images/fc-members/visenyaa.png';
import junekoImg from '../../assets/images/fc-members/juneko.png';
import whisperImg from '../../assets/images/fc-members/whisper.png';

type Member = {
    name: string;
    title: string;
    classes: string;
    since: string;
    image: string; // Final resolved URL from Vite
};

const fcMembers: Member[] = [
    {
        name: 'Visenyaa Targaryen',
        title: 'FC PRESIDENT',
        classes: 'Sage (100) / All Classes (100) / Full Mentor',
        since: 'December 2022',
        image: visenyaaImg,
    },
    {
        name: 'Juneko Tsukino',
        title: 'VICE PRESIDENT / CREATOR',
        classes: 'Warrior (100) / Pictomancer (100)',
        since: 'April 2021',
        image: junekoImg,
    },
    {
        name: 'Whisper Sanguine',
        title: 'SITE CODER',
        classes: 'Reaper (100) / All Classes (100) / Full Mentor',
        since: 'August 2022',
        image: whisperImg,
    }
];

export default fcMembers;
