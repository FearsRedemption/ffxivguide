import type { QuickGuide } from "../types/guides";

export const trialsData: QuickGuide[] = [
    {
        id: "the-bowl-of-embers",
        title: "The Bowl of Embers (Ifrit)",
        tag: "TRIAL",
        expansion: "A Realm Reborn",
        difficulty: "EASY",
        updated: "Aug 2025",
        image: "/images/guides/trials/ifrit.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/trials/the-bowl-of-embers",
        overview: ["Intro primal fight against Ifrit."],
        mechanics: [{ boss: "Ifrit", steps: ["Avoid Eruption", "Destroy Nails before Hellfire"] }],
        rewards: { loot: ["Ifrit weapon"], tomestones: "Poetics" }
    },
    {
        id: "the-navel",
        title: "The Navel (Titan)",
        tag: "TRIAL",
        expansion: "A Realm Reborn",
        difficulty: "EASY",
        updated: "Aug 2025",
        image: "/images/guides/trials/titan.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/trials/the-navel",
        overview: ["Titan introduces knockback and falling hazards."],
        mechanics: [{ boss: "Titan", steps: ["Avoid Landslide", "Watch for Weight of the Land"] }],
        rewards: { loot: ["Titan weapon"], tomestones: "Poetics" }
    },
    {
        id: "the-howling-eye",
        title: "The Howling Eye (Garuda)",
        tag: "TRIAL",
        expansion: "A Realm Reborn",
        difficulty: "EASY",
        updated: "Aug 2025",
        image: "/images/guides/trials/garuda.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/trials/the-howling-eye",
        overview: ["Garuda fight with environmental hazards."],
        mechanics: [{ boss: "Garuda", steps: ["Avoid Slipstream", "Destroy stone pillars strategically"] }],
        rewards: { loot: ["Garuda weapon"], tomestones: "Poetics" }
    },
    {
        id: "thornmarch",
        title: "Thornmarch (Good King Moggle Mog XII)",
        tag: "TRIAL",
        expansion: "A Realm Reborn",
        difficulty: "MEDIUM",
        updated: "Aug 2025",
        image: "/images/guides/trials/moggle-mog.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/trials/thornmarch",
        overview: ["Fun but chaotic multi-add primal fight."],
        mechanics: [{ boss: "Good King Moggle Mog XII", steps: ["Focus kill order", "Avoid Pom Flare"] }],
        rewards: { loot: ["Mog weapon"], tomestones: "Poetics" }
    },
    {
        id: "the-striking-tree",
        title: "The Striking Tree (Ramuh)",
        tag: "TRIAL",
        expansion: "A Realm Reborn",
        difficulty: "MEDIUM",
        updated: "Aug 2025",
        image: "/images/guides/trials/ramuh.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/trials/the-striking-tree",
        overview: ["Ramuh with lightning and tether mechanics."],
        mechanics: [{ boss: "Ramuh", steps: ["Soak orbs to remove debuff", "Avoid Thunderstorm"] }],
        rewards: { loot: ["Ramuh weapon"], tomestones: "Poetics" }
    },
    {
        id: "the-akers-arena",
        title: "Akh Afah Amphitheatre (Shiva)",
        tag: "TRIAL",
        expansion: "A Realm Reborn",
        difficulty: "MEDIUM",
        updated: "Aug 2025",
        image: "/images/guides/trials/shiva.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/trials/akh-afah-amphitheatre",
        overview: ["Shiva fight with sword and bow stances."],
        mechanics: [{ boss: "Shiva", steps: ["Avoid Ice brand AoE", "Dodge bow ice circles"] }],
        rewards: { loot: ["Shiva weapon"], tomestones: "Poetics" }
    }
];
