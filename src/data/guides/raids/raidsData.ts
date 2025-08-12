import type { QuickGuide } from "../../../types/guides";

export const raidsData: QuickGuide[] = [
    {
        id: "the-binding-coil-of-bahamut-turn-1",
        title: "The Binding Coil of Bahamut - Turn 1",
        tag: "RAID",
        expansion: "A Realm Reborn",
        difficulty: "HARD",
        updated: "Aug 2025",
        views: "2.1k",
        image: "/images/guides/raids/binding-coil-t1.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/raids/the-binding-coil-of-bahamut-turn-1",
        overview: [
            "The first turn of the Binding Coil series, introducing ADS and early raid coordination mechanics."
        ],
        mechanics: [
            { boss: "ADS", steps: ["Manage High Voltage", "Handle Rot debuff passing", "Dodge Repelling Cannons"] }
        ],
        rewards: { loot: ["Allagan gear (i90)"], tomestones: "Poetics" },
        unlock: {
            quest: "Primal Awakening",
            level: 50,
            location: "The Waking Sands",
            prerequisites: ["Main Scenario Quest 'The Ultimate Weapon'"]
        }
    },
    {
        id: "the-binding-coil-of-bahamut-turn-2",
        title: "The Binding Coil of Bahamut - Turn 2",
        tag: "RAID",
        expansion: "A Realm Reborn",
        difficulty: "HARD",
        updated: "Aug 2025",
        image: "/images/guides/raids/binding-coil-t2.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/raids/the-binding-coil-of-bahamut-turn-2",
        overview: ["Infamous 'enrage strat' turn with multiple mini-boss nodes."],
        mechanics: [
            { boss: "Various Nodes", steps: ["Dodge landmines", "Interrupt abilities", "Defeat ADS Core"] }
        ],
        rewards: { loot: ["Allagan gear (i90)"], tomestones: "Poetics" },
        unlock: { quest: "The Binding Coil of Bahamut - Turn 2", level: 50 }
    },
    {
        id: "the-binding-coil-of-bahamut-turn-3",
        title: "The Binding Coil of Bahamut - Turn 3",
        tag: "RAID",
        expansion: "A Realm Reborn",
        difficulty: "HARD",
        updated: "Aug 2025",
        image: "/images/guides/raids/binding-coil-t3.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/raids/the-binding-coil-of-bahamut-turn-3",
        overview: ["Mostly a traversal floor with no boss fight."],
        mechanics: [{ boss: "None", steps: ["Navigate the coil pathways", "Avoid falling"] }],
        rewards: { misc: ["No loot, progression only"] }
    },
    {
        id: "the-binding-coil-of-bahamut-turn-4",
        title: "The Binding Coil of Bahamut - Turn 4",
        tag: "RAID",
        expansion: "A Realm Reborn",
        difficulty: "HARD",
        updated: "Aug 2025",
        image: "/images/guides/raids/binding-coil-t4.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/raids/the-binding-coil-of-bahamut-turn-4",
        overview: ["Multiple waves of adds with escalating difficulty."],
        mechanics: [{ boss: "Add Waves", steps: ["Tank positioning", "AoE burst phases", "Heal raidwide damage"] }],
        rewards: { loot: ["Allagan gear (i90)"], tomestones: "Poetics" }
    },
    {
        id: "the-binding-coil-of-bahamut-turn-5",
        title: "The Binding Coil of Bahamut - Turn 5",
        tag: "RAID",
        expansion: "A Realm Reborn",
        difficulty: "EXTREME",
        updated: "Aug 2025",
        image: "/images/guides/raids/binding-coil-t5.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/raids/the-binding-coil-of-bahamut-turn-5",
        overview: ["Twintania — one of the most infamous early raid bosses."],
        mechanics: [{ boss: "Twintania", steps: ["Dreadknight soak", "Divebomb positioning", "Neurolink handling"] }],
        rewards: { loot: ["Allagan gear (i90)"], tomestones: "Poetics" }
    },
    {
        id: "the-second-coil-of-bahamut-turn-1",
        title: "The Second Coil of Bahamut - Turn 1",
        tag: "RAID",
        expansion: "A Realm Reborn",
        difficulty: "EXTREME",
        updated: "Aug 2025",
        image: "/images/guides/raids/second-coil-t1.jpg",
        author: { name: "FFXIV Simplified" },
        to: "/guides/raids/the-second-coil-of-bahamut-turn-1",
        overview: ["Rafflesia — heavy positional mechanics and debuffs."],
        mechanics: [{ boss: "Rafflesia", steps: ["Avoid devour", "Handle vines", "Manage spores"] }],
        rewards: { loot: ["High Allagan gear"], tomestones: "Poetics" }
    }
];
