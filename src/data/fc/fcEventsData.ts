export type FCEvent = {
    date: string; // Format: YYYY-MM-DD
    title: string;
    time: string;
    description: string;
    color: string;
    organizer?: string;
};

const fcEventsData: FCEvent[] = [
    {
        date: "08/01/2025",
        title: "Treasure Map Night",
        time: "7:00 PM - 9:00 PM",
        description: "Bring your Timeworn Kumbhiraskin Maps for a fun night of treasure hunting and portal adventures!",
        color: "bg-amber-500"
    },
    {
        date: "08/02/2025",
        title: "Mount Farm",
        time: "6:00 PM - 8:00 PM",
        description: "Farm mounts from older content together with the FC. All levels welcome!",
        color: "bg-rose-500"
    },
    {
        date: "08/03/2025",
        title: "Newbie Help Night",
        time: "3:00 PM - 5:00 PM",
        description: "New players welcome! Come get help with dungeons, rotations, and gear.",
        color: "bg-blue-500"
    },
    {
        date: "08/05/2025",
        title: "Weekly Reset Activities",
        time: "8:00 PM - 10:00 PM",
        description: "Join us for weekly reset activities including tomestone farming, alliance raids, and expert roulettes.",
        color: "bg-primary",
        organizer: "Juneko"
    },
    {
        date: "08/06/2025",
        title: "Savage Progression",
        time: "9:00 PM - 11:30 PM",
        description: "Our weekly static raid group continues progression through the latest Savage tier. New raiders welcome to observe!",
        color: "bg-green-500"
    },
    {
        date: "08/08/2025",
        title: "Treasure Map Night",
        time: "7:00 PM - 9:00 PM",
        description: "Bring your Timeworn Kumbhiraskin Maps for a fun night of treasure hunting and portal adventures!",
        color: "bg-amber-500"
    },
    {
        date: "08/09/2025",
        title: "Mount Farm",
        time: "6:00 PM - 8:00 PM",
        description: "Farm mounts from older content together with the FC. All levels welcome!",
        color: "bg-rose-500"
    },
    {
        date: "08/10/2025",
        title: "Newbie Help Night",
        time: "3:00 PM - 5:00 PM",
        description: "New players welcome! Come get help with dungeons, rotations, and gear.",
        color: "bg-blue-500"
    },
    {
        date: "08/17/2025",
        title: "Newbie Help Night",
        time: "3:00 PM - 5:00 PM",
        description: "New players welcome! Come get help with dungeons, rotations, and gear.",
        color: "bg-blue-500"
    }
];

export default fcEventsData;
