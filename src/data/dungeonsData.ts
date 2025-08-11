// src/data/dungeonsARR.ts
import type { QuickGuide } from "../types/guides";

export const dungeonsData: QuickGuide[] = [
    {
        "id": "sastasha",
        "title": "Sastasha",
        "tag": "DUNGEON",
        "expansion": "A Realm Reborn",
        "difficulty": "EASY",
        "updated": "—",
        "views": "—",
        "image": "/images/dungeons/sastasha.jpg",
        "author": { "name": "FFXIV Guide Hub" },
        "to": "/guides/dungeons/sastasha",
        "subtitle": "Level 15 dungeon in Western La Noscea",
        "overview": [
            "A beginner-friendly dungeon that introduces basic mechanics.",
            "Keep an eye out for colored coral to progress."
        ],
        "mechanics": [
            { "boss": "Chopper", "steps": ["Avoid frontal cleave", "Tank face away from group"] },
            { "boss": "Captain Madison", "steps": ["Kill adds quickly", "Interrupt pistol shot"] },
            { "boss": "Denn the Orcatoothed", "steps": ["Dodge whirlpools", "Burn boss quickly"] }
        ],
        "rewards": {
            "tomestones": "Poetics (level capped)",
            "loot": ["i15 gear"],
            "misc": ["Unlocks leveling roulette"]
        },
        "unlock": {
            "quest": "It's Probably Pirates",
            "level": 15,
            "location": "Limsa Lominsa Upper Decks",
            "prerequisites": ["Main Scenario (ARR)"]
        },
        "videoUrl": "https://www.youtube.com/watch?v=sastasha"
    },
    {
        "id": "tam-tara-deepcroft",
        "title": "The Tam-Tara Deepcroft",
        "tag": "DUNGEON",
        "expansion": "A Realm Reborn",
        "difficulty": "EASY",
        "updated": "—",
        "views": "—",
        "image": "/images/dungeons/tam-tara.jpg",
        "author": { "name": "FFXIV Guide Hub" },
        "to": "/guides/dungeons/tam-tara-deepcroft",
        "subtitle": "Level 16 dungeon in Central Shroud",
        "overview": [
            "Players must destroy cult orbs to weaken the final boss.",
            "Lots of AoE trash pulls."
        ],
        "mechanics": [
            { "boss": "Galvanth the Dominator", "steps": ["Destroy orbs to weaken boss", "Dodge AoEs"] }
        ],
        "rewards": {
            "tomestones": "Poetics (level capped)",
            "loot": ["i17 gear"]
        },
        "unlock": {
            "quest": "Fire in the Gloom",
            "level": 16,
            "location": "New Gridania",
            "prerequisites": ["Main Scenario (ARR)"]
        },
        "videoUrl": "https://www.youtube.com/watch?v=tamtara"
    },
    {
        "id": "copperbell-mines",
        "title": "Copperbell Mines",
        "tag": "DUNGEON",
        "expansion": "A Realm Reborn",
        "difficulty": "EASY",
        "updated": "—",
        "views": "—",
        "image": "/images/dungeons/copperbell.jpg",
        "author": { "name": "FFXIV Guide Hub" },
        "to": "/guides/dungeons/copperbell-mines",
        "subtitle": "Level 17 dungeon in Western Thanalan",
        "overview": [
            "Free the way by detonating blasting devices.",
            "Bosses have simple mechanics."
        ],
        "mechanics": [
            { "boss": "Kottos", "steps": ["Use blasting device", "Avoid frontal attacks"] },
            { "boss": "Ichorous Ire", "steps": ["Kill adds before they reach boss"] }
        ],
        "rewards": {
            "tomestones": "Poetics (level capped)",
            "loot": ["i17 gear"]
        },
        "unlock": {
            "quest": "Into the Copperbell Mines",
            "level": 17,
            "location": "Ul'dah - Steps of Thal",
            "prerequisites": ["Main Scenario (ARR)"]
        },
        "videoUrl": "https://www.youtube.com/watch?v=copperbell"
    },
    {
        "id": "halatali",
        "title": "Halatali",
        "tag": "DUNGEON",
        "expansion": "A Realm Reborn",
        "difficulty": "EASY",
        "updated": "—",
        "views": "—",
        "image": "/images/dungeons/halatali.jpg",
        "author": { "name": "FFXIV Guide Hub" },
        "to": "/guides/dungeons/halatali",
        "subtitle": "Level 20 dungeon in Eastern Thanalan",
        "overview": [
            "Optional ARR dungeon with simple trial-style bosses."
        ],
        "mechanics": [
            { "boss": "Tangata", "steps": ["Avoid line AoEs", "Kill adds"] }
        ],
        "rewards": {
            "tomestones": "Poetics (level capped)",
            "loot": ["i20 gear"]
        },
        "unlock": {
            "quest": "Hallo Halatali",
            "level": 20,
            "location": "Ul'dah - Steps of Thal",
            "prerequisites": ["Main Scenario (ARR)"]
        },
        "videoUrl": "https://www.youtube.com/watch?v=halatali"
    },
    {
        "id": "thousand-maws-of-toto-rak",
        "title": "The Thousand Maws of Toto-Rak",
        "tag": "DUNGEON",
        "expansion": "A Realm Reborn",
        "difficulty": "MEDIUM",
        "updated": "—",
        "views": "—",
        "image": "/images/dungeons/totorak.jpg",
        "author": { "name": "FFXIV Guide Hub" },
        "to": "/guides/dungeons/thousand-maws-of-toto-rak",
        "subtitle": "Level 24 dungeon in South Shroud",
        "overview": [
            "Navigate a prison full of poisonous pools and key gates."
        ],
        "mechanics": [
            { "boss": "Graffias", "steps": ["Avoid webs", "Dodge AoEs", "Kill adds"] }
        ],
        "rewards": {
            "tomestones": "Poetics (level capped)",
            "loot": ["i24 gear"]
        },
        "unlock": {
            "quest": "Into the Beast's Maw",
            "level": 24,
            "location": "New Gridania",
            "prerequisites": ["Main Scenario (ARR)"]
        },
        "videoUrl": "https://www.youtube.com/watch?v=totorak"
    },
    {
        "id": "haukke-manor",
        "title": "Haukke Manor",
        "tag": "DUNGEON",
        "expansion": "A Realm Reborn",
        "difficulty": "MEDIUM",
        "updated": "—",
        "views": "—",
        "image": "/images/dungeons/haukke.jpg",
        "author": { "name": "FFXIV Guide Hub" },
        "to": "/guides/dungeons/haukke-manor",
        "subtitle": "Level 28 dungeon in Central Shroud",
        "overview": [
            "A haunted mansion with multiple keys and locked doors."
        ],
        "mechanics": [
            { "boss": "Lady Amandine", "steps": ["Interrupt dark mist", "Dodge AoEs", "Kill adds"] }
        ],
        "rewards": {
            "tomestones": "Poetics (level capped)",
            "loot": ["i28 gear"]
        },
        "unlock": {
            "quest": "Manor Mystery",
            "level": 28,
            "location": "New Gridania",
            "prerequisites": ["Main Scenario (ARR)"]
        },
        "videoUrl": "https://www.youtube.com/watch?v=haukke"
    }
]

