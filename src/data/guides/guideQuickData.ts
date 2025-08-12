import type { QuickGuide } from "../../types/guides";

export const dungeonQuickGuides: QuickGuide[] = [
    {
        id: "sastasha",
        title: "Sastasha",
        tag: "DUNGEON",
        expansion: "A Realm Reborn",
        difficulty: "EASY",
        updated: "Jun 28, 2025",
        views: "20",
        image: "https://i.ytimg.com/vi/rJKxM1f2IhU/hqdefault.jpg",
        author: {
            name: "Harmony Faye",
            avatar: "https://yt3.ggpht.com/GzwpkOhWyR7E1FBgxO1xG3ITO4mCQ7PSRJiWDV4vgbdNsmIMCkWGxjrfQwM-vJgKpBEcPL02hA=s48-c-k-c0x00ffffff-no-rj"
        },
        to: "/guides/dungeons/sastasha",
        subtitle: "Level 15 dungeon in Western La Noscea",
        overview: [
            "A beginner-friendly dungeon that introduces basic mechanics.",
            "Keep an eye out for colored coral to progress."
        ],
        mechanics: [
            { boss: "Chopper", steps: ["Avoid frontal cleave", "Tank face away from group"] },
            { boss: "Captain Madison", steps: ["Kill adds quickly", "Interrupt pistol shot"] },
            { boss: "Denn the Orcatoothed", steps: ["Dodge whirlpools", "Burn boss quickly"] }
        ],
        rewards: {
            tomestones: "Poetics (level capped)",
            loot: ["i15 gear"],
            misc: ["Unlocks leveling roulette"]
        },
        unlock: {
            quest: "It's Probably Pirates",
            level: 15,
            location: "Limsa Lominsa Upper Decks",
            prerequisites: ["Main Scenario (ARR)"]
        },
        videoUrl: "https://www.youtube.com/watch?v=rJKxM1f2IhU"
    },
    {
        id: "tam-tara-deepcroft",
        title: "The Tam-Tara Deepcroft",
        tag: "DUNGEON",
        expansion: "A Realm Reborn",
        difficulty: "EASY",
        updated: "Aug 28, 2013",
        views: "127,562",
        image: "https://i.ytimg.com/vi/_8xWuLi7iVM/hqdefault.jpg",
        author: {
            name: "MQTcapture",
            avatar: "https://yt3.ggpht.com/ytc/AIdro_l2ristuoB935jrvQndem02t77RV0Knn0bTkRUHg-zdzw=s48-c-k-c0x00ffffff-no-rj"
        },
        to: "/guides/dungeons/tam-tara-deepcroft",
        subtitle: "Level 16 dungeon in Central Shroud",
        overview: [
            "Players must destroy cult orbs to weaken the final boss.",
            "Lots of AoE trash pulls."
        ],
        mechanics: [
            { boss: "Galvanth the Dominator", steps: ["Destroy orbs to weaken boss", "Dodge AoEs"] }
        ],
        rewards: {
            tomestones: "Poetics (level capped)",
            loot: ["i17 gear"]
        },
        unlock: {
            quest: "Fire in the Gloom",
            level: 16,
            location: "New Gridania",
            prerequisites: ["Main Scenario (ARR)"]
        },
        videoUrl: "https://www.youtube.com/watch?v=_8xWuLi7iVM"
    },
    {
        id: "copperbell-mines",
        title: "Copperbell Mines",
        tag: "DUNGEON",
        expansion: "A Realm Reborn",
        difficulty: "EASY",
        updated: "Jun 28, 2025",
        views: "84",
        image: "https://i.ytimg.com/vi/ZVlrgtzxjlo/hqdefault.jpg",
        author: {
            name: "Harmony Faye",
            avatar: "https://yt3.ggpht.com/GzwpkOhWyR7E1FBgxO1xG3ITO4mCQ7PSRJiWDV4vgbdNsmIMCkWGxjrfQwM-vJgKpBEcPL02hA=s48-c-k-c0x00ffffff-no-rj"
        },
        to: "/guides/dungeons/copperbell-mines",
        subtitle: "Level 17 dungeon in Western Thanalan",
        overview: [
            "Free the way by detonating blasting devices.",
            "Bosses have simple mechanics."
        ],
        mechanics: [
            { boss: "Kottos", steps: ["Use blasting device", "Avoid frontal attacks"] },
            { boss: "Ichorous Ire", steps: ["Kill adds before they reach boss"] }
        ],
        rewards: {
            tomestones: "Poetics (level capped)",
            loot: ["i17 gear"]
        },
        unlock: {
            quest: "Into the Copperbell Mines",
            level: 17,
            location: "Ul'dah - Steps of Thal",
            prerequisites: ["Main Scenario (ARR)"]
        },
        videoUrl: "https://www.youtube.com/watch?v=ZVlrgtzxjlo"
    },
];

export const raidQuickGuides: QuickGuide[] = [
    {
        id: "arcadion-m4s",
        title: "Arcadion M4S Savage Guide",
        tag: "RAID",
        expansion: "Dawntrail",
        difficulty: "HARD",
        updated: "Aug 2, 2024",
        views: "180,677",
        image: "https://i.ytimg.com/vi/1lrk5FbNIPc/hqdefault.jpg",
        author: {
            name: "Rinon",
            avatar: "https://yt3.ggpht.com/5lSFqddosheHJ_H8R6vhVhSFZQbvu1dqAQsobMxs6pJhOdN4n6E82WGHNTwYX84w1VpCnzCv=s48-c-k-c0x00ffffff-no-rj",
        },
        to: "https://www.youtube.com/watch?v=1lrk5FbNIPc",
    },
    {
        id: "e12s-eternity-p1",
        title: "Eden’s Promise: Eternity (Savage) Guide",
        tag: "RAID",
        expansion: "Shadowbringers",
        difficulty: "HARD",
        updated: "Dec 25, 2020",
        views: "268,080",
        image: "https://i.ytimg.com/vi/8mdBH3WER_M/hqdefault.jpg",
        author: {
            name: "MTQcapture",
            avatar: "https://yt3.ggpht.com/ytc/AIdro_l2ristuoB935jrvQndem02t77RV0Knn0bTkRUHg-zdzw=s48-c-k-c0x00ffffff-no-rj",
        },
        to: "https://www.youtube.com/watch?v=8mdBH3WER_M",
    },
    {
        id: "aglaia",
        title: "Aglaia Alliance Raid Guide",
        tag: "ALLIANCE RAID",
        expansion: "Endwalker",
        difficulty: "MEDIUM",
        updated: "Apr 22, 2022",
        views: "157,016",
        image: "https://i.ytimg.com/vi/4ABUQGFIFwk/hqdefault.jpg",
        author: {
            name: "MTQcapture",
            avatar: "https://yt3.ggpht.com/ytc/AIdro_l2ristuoB935jrvQndem02t77RV0Knn0bTkRUHg-zdzw=s48-c-k-c0x00ffffff-no-rj",
        },
        to: "https://www.youtube.com/watch?v=4ABUQGFIFwk",
    },
];

export const trialQuickGuides: QuickGuide[] = [
    {
        id: "hydaelyn-ex",
        title: "Hydaelyn’s Call (Extreme) Trial Guide",
        tag: "TRIAL",
        expansion: "Endwalker",
        difficulty: "EXTREME",
        updated: "Dec 17, 2021",
        views: "212,207",
        image: "https://i.ytimg.com/vi/lOAZU9kbrQ4/hqdefault.jpg",
        author: {
            name: "Mrhappy1227",
            avatar: "https://yt3.ggpht.com/ytc/AIdro_nlQHwqgpmG07z2mErVOwV6Tg97EeCk7Gj-TufAJHEUPA=s48-c-k-c0x00ffffff-no-rj",
        },
        to: "https://www.youtube.com/watch?v=lOAZU9kbrQ4",
    },
    {
        id: "titania-ex",
        title: "Titania Extreme Trial Guide",
        tag: "TRIAL",
        expansion: "Shadowbringers",
        difficulty: "EXTREME",
        updated: "Jul 13, 2019",
        views: "512,561",
        image: "https://i.ytimg.com/vi/uED77BQwI5c/hqdefault.jpg",
        author: {
            name: "MTQcapture",
            avatar: "https://yt3.ggpht.com/ytc/AIdro_l2ristuoB935jrvQndem02t77RV0Knn0bTkRUHg-zdzw=s48-c-k-c0x00ffffff-no-rj",
        },
        to: "https://www.youtube.com/watch?v=uED77BQwI5c",
    },
    {
        id: "cloud-deck",
        title: "Cloud Deck Trial Guide",
        tag: "TRIAL",
        expansion: "Shadowbringers",
        difficulty: "MEDIUM",
        updated: "Apr 17, 2021",
        views: "129,683",
        image: "https://i.ytimg.com/vi/XlMEzOaO_eQ/hqdefault.jpg",
        author: {
            name: "MTQcapture",
            avatar: "https://yt3.ggpht.com/ytc/AIdro_l2ristuoB935jrvQndem02t77RV0Knn0bTkRUHg-zdzw=s48-c-k-c0x00ffffff-no-rj",
        },
        to: "https://www.youtube.com/watch?v=XlMEzOaO_eQ",
    },
];
