// src/data/guides/handland/handLandGuideData.ts
import type { JobGuideContent } from '../../../types/JobGuideContent';
import { slugifyJobName } from '../../../utils/slugify';

export const handLandGuideData: Record<string, JobGuideContent> = {
    // ======== Disciples of the Hand (Crafters) ========
    [slugifyJobName('Carpenter')]: {
        jobName: 'Carpenter',
        subtitle: 'Woodworking specialist for bows, staves, tools, and furnishings',
        role: 'Crafter',
        difficulty: 2,
        unlockLevel: 1,
        bgImage: 'Carpenter',
        intro:
            'Carpenters shape timber into weapons, tools, and housing furnishings. With efficient CP management and durability control, they deliver reliable crafts for leveling and market board staples.',
        roleSummary:
            'Focus on early CP setup, durability control, and a Byregot-style finisher. Good at mass-producing leveling gear and furniture recipes, with plenty of vendor and timed-node mats.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Universal Crafting Macro (Normal-Quality Mats)',
                skills: [
                    { icon: 'Muscle_Memory', name: 'Muscle Memory', time: '0s' },
                    { icon: 'Veneration', name: 'Veneration', time: '3s' },
                    { icon: 'Waste_Not_II', name: 'Waste Not II', time: '6s' },
                    { icon: 'Manipulation', name: 'Manipulation', time: '9s' },
                    { icon: 'Innovation', name: 'Innovation', time: '12s' },
                    { icon: 'Prudent_Touch', name: 'Prudent Touch ×4', time: '15–27s' },
                    { icon: 'Great_Strand', name: 'Great Strides', time: '30s' },
                    { icon: 'Byregots_Blessing', name: 'Byregot’s Blessing', time: '33s' },
                    { icon: 'Groundwork', name: 'Groundwork/Basic Synthesis to finish', time: '36s+' },
                ],
            },
        ],
        tips: [
            'Use Muscle Memory on the first step for efficient progress.',
            'Manipulation + Waste Not II stabilizes durability while you build quality.',
            'Great Strides + Innovation + Byregot’s Blessing remains a dependable finisher.',
            'Timber from timed nodes + GC turn-ins = easy gil and XP.',
        ],
    },

    [slugifyJobName('Blacksmith')]: {
        jobName: 'Blacksmith',
        subtitle: 'Metalworking: melee weapons, tools, components',
        role: 'Crafter',
        difficulty: 3,
        unlockLevel: 1,
        bgImage: 'Blacksmith',
        intro:
            'Blacksmiths forge blades, tools, and subcomponents used across multiple crafts. Highly profitable at patch launches for weapon and tool sets.',
        roleSummary:
            'Lean on progress buffs to clear high-difficulty recipes, then push quality with safe touches. Excellent synergy with Miner for ore and sand supplies.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Reliable Progress → Quality Route',
                skills: [
                    { icon: 'Muscle_Memory', name: 'Muscle Memory', time: '0s' },
                    { icon: 'Veneration', name: 'Veneration', time: '3s' },
                    { icon: 'Groundwork', name: 'Groundwork ×2', time: '6–12s' },
                    { icon: 'Manipulation', name: 'Manipulation', time: '15s' },
                    { icon: 'Innovation', name: 'Innovation', time: '18s' },
                    { icon: 'Prudent_Touch', name: 'Prudent/Preparatory Touch spam', time: '21s+' },
                    { icon: 'Great_Strand', name: 'Great Strides', time: 'late' },
                    { icon: 'Byregots_Blessing', name: 'Byregot’s Blessing', time: 'finish' },
                ],
            },
        ],
        tips: [
            'Pair with Miner to control ore costs.',
            'Groundwork during Veneration for efficient progress on 70/80/90 durability recipes.',
            'Keep Manipulation up to stretch durability during quality building.',
        ],
    },

    [slugifyJobName('Armorer')]: {
        jobName: 'Armorer',
        subtitle: 'Heavy armor, shields, and metal plate components',
        role: 'Crafter',
        difficulty: 3,
        unlockLevel: 1,
        bgImage: 'Armorer',
        intro:
            'Armorers craft plate armor, shields, and metal fittings. Their items spike in demand with raid tiers and new leveling bands.',
        roleSummary:
            'Plays similarly to Blacksmith but focuses on high-durability control to finish bulky progress bars while preserving CP for a Byregot finisher.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Durability-First Line',
                skills: [
                    { icon: 'Muscle_Memory', name: 'Muscle Memory', time: '0s' },
                    { icon: 'Waste_Not_II', name: 'Waste Not II', time: '3s' },
                    { icon: 'Veneration', name: 'Veneration', time: '6s' },
                    { icon: 'Groundwork', name: 'Groundwork ×2', time: '9–15s' },
                    { icon: 'Manipulation', name: 'Manipulation', time: '18s' },
                    { icon: 'Innovation', name: 'Innovation', time: '21s' },
                    { icon: 'Prudent_Touch', name: 'Prudent Touch ×3–4', time: '24–33s' },
                    { icon: 'Great_Strand', name: 'Great Strides + Byregot', time: 'finish' },
                ],
            },
        ],
        tips: [
            'High-durability recipes reward Waste Not II value.',
            'Shields/plates surge at tier launch—stockpile early mats.',
            'Collectables and GC turn-ins are strong XP paths while leveling.',
        ],
    },

    [slugifyJobName('Goldsmith')]: {
        jobName: 'Goldsmith',
        subtitle: 'Accessories, caster weapons, and precious components',
        role: 'Crafter',
        difficulty: 4,
        unlockLevel: 1,
        bgImage: 'Goldsmith',
        intro:
            'Goldsmiths create accessories and caster/ranged tools. Demand is constant thanks to meld slots and BiS changes.',
        roleSummary:
            'Accessory HQ quality matters—budget CP for consistent high-quality finisher windows. Great pairing with Miner for ores and aethersands.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Quality-Weighted Sequence',
                skills: [
                    { icon: 'Reflect', name: 'Reflect (pre-pull)', time: '-3s' },
                    { icon: 'Muscle_Memory', name: 'Muscle Memory', time: '0s' },
                    { icon: 'Manipulation', name: 'Manipulation', time: '3s' },
                    { icon: 'Innovation', name: 'Innovation', time: '6s' },
                    { icon: 'Advanced_Touch', name: 'Advanced/Standard Touch chain', time: '9s+' },
                    { icon: 'Great_Strand', name: 'Great Strides + Innovation', time: 'late' },
                    { icon: 'Byregots_Blessing', name: 'Byregot’s Blessing', time: 'finish' },
                    { icon: 'Careful_Synthesis', name: 'Careful/Basic Synthesis', time: 'cleanup' },
                ],
            },
        ],
        tips: [
            'Reflect can front-load early quality if you open with Inner Quiet.',
            'Prioritize HQ gems and aethersands for consistent HQ crafts.',
            'Accessories sell well at every gear reset—prepare ahead.',
        ],
    },

    [slugifyJobName('Leatherworker')]: {
        jobName: 'Leatherworker',
        subtitle: 'Leather gear and components for scouting/aiming/striking sets',
        role: 'Crafter',
        difficulty: 3,
        unlockLevel: 1,
        bgImage: 'Leatherworker',
        intro:
            'Leatherworkers produce armor for multiple DPS roles and valuable intermediary mats. Skins and hides from hunts power its economy.',
        roleSummary:
            'Durability stabilization → quality stacking → Byregot finisher. Excellent gil with timed hides and hunt drops.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Safe Touch Loop',
                skills: [
                    { icon: 'Muscle_Memory', name: 'Muscle Memory', time: '0s' },
                    { icon: 'Manipulation', name: 'Manipulation', time: '3s' },
                    { icon: 'Waste_Not_II', name: 'Waste Not II', time: '6s' },
                    { icon: 'Innovation', name: 'Innovation', time: '9s' },
                    { icon: 'Prudent_Touch', name: 'Prudent Touch ×4', time: '12–24s' },
                    { icon: 'Great_Strand', name: 'Great Strides', time: '27s' },
                    { icon: 'Byregots_Blessing', name: 'Byregot’s Blessing', time: '30s' },
                    { icon: 'Groundwork', name: 'Groundwork to complete', time: '33s+' },
                ],
            },
        ],
        tips: [
            'Farm hides early; demand spikes with new crafted sets.',
            'Use Prudent Touch under Innovation for CP-efficient quality.',
            'Materia melding service pairs nicely for extra gil.',
        ],
    },

    [slugifyJobName('Weaver')]: {
        jobName: 'Weaver',
        subtitle: 'Cloth armor sets and glamour powerhouse',
        role: 'Crafter',
        difficulty: 3,
        unlockLevel: 1,
        bgImage: 'Weaver',
        intro:
            'Weavers produce caster/healer apparel and coveted glamours. Consistent seller thanks to leveling gear and fashion items.',
        roleSummary:
            'Weaver favors long quality windows with Manipulation uptime and an Innovation-boosted Byregot finisher.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Fashionably HQ Path',
                skills: [
                    { icon: 'Reflect', name: 'Reflect (optional)', time: '-3s' },
                    { icon: 'Muscle_Memory', name: 'Muscle Memory', time: '0s' },
                    { icon: 'Manipulation', name: 'Manipulation', time: '3s' },
                    { icon: 'Innovation', name: 'Innovation', time: '6s' },
                    { icon: 'Preparatory_Touch', name: 'Preparatory/Standard Touch chain', time: '9s+' },
                    { icon: 'Great_Strand', name: 'Great Strides', time: 'late' },
                    { icon: 'Byregots_Blessing', name: 'Byregot’s Blessing', time: 'finish' },
                    { icon: 'Careful_Synthesis', name: 'Careful Synthesis', time: 'cleanup' },
                ],
            },
        ],
        tips: [
            'Glamours sell year-round—track market board trends.',
            'Combine Innovation + Great Strides before Byregot for peak quality.',
            'Weaver pairs well with Botanist for cloth mats and dyes.',
        ],
    },

    [slugifyJobName('Alchemist')]: {
        jobName: 'Alchemist',
        subtitle: 'Potions, tinctures, and caster arms/components',
        role: 'Crafter',
        difficulty: 3,
        unlockLevel: 1,
        bgImage: 'Alchemist',
        intro:
            'Alchemists craft raid-tier consumables and key subcomponents. Demand spikes with progression and new savage tiers.',
        roleSummary:
            'Consumables reward rapid batch crafting. Maintain stable durability, stack quality, and finish quickly for volume.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Batch Craft Loop (Consumables)',
                skills: [
                    { icon: 'Muscle_Memory', name: 'Muscle Memory', time: '0s' },
                    { icon: 'Manipulation', name: 'Manipulation', time: '3s' },
                    { icon: 'Innovation', name: 'Innovation', time: '6s' },
                    { icon: 'Delicate_Synthesis', name: 'Delicate Synthesis (prog + qual)', time: '9s' },
                    { icon: 'Great_Strand', name: 'Great Strides', time: 'late' },
                    { icon: 'Byregots_Blessing', name: 'Byregot’s Blessing', time: 'finish' },
                    { icon: 'Careful_Synthesis', name: 'Careful Synthesis', time: 'cleanup' },
                ],
            },
        ],
        tips: [
            'Raid weeks = best tincture profits. Pre-craft before reset.',
            'Delicate Synthesis is great when you need both progress and quality.',
            'Gatherer alts (Botanist/Fisher) reduce herb/oil costs dramatically.',
        ],
    },

    [slugifyJobName('Culinarian')]: {
        jobName: 'Culinarian',
        subtitle: 'Food buffs and raid-ready banquets',
        role: 'Crafter',
        difficulty: 2,
        unlockLevel: 1,
        bgImage: 'Culinarian',
        intro:
            'Culinarians cook food for raid buffs and leveling content. A dependable moneymaker with steady demand and simple supply chains.',
        roleSummary:
            'Focus on repeatable, low-failure sequences to mass-produce HQ meals. Fish, meats, and produce from gatherers keep costs low.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Quick-Serve Macro (Food)',
                skills: [
                    { icon: 'Muscle_Memory', name: 'Muscle Memory', time: '0s' },
                    { icon: 'Veneration', name: 'Veneration', time: '3s' },
                    { icon: 'Manipulation', name: 'Manipulation', time: '6s' },
                    { icon: 'Innovation', name: 'Innovation', time: '9s' },
                    { icon: 'Prudent_Touch', name: 'Prudent Touch ×3–4', time: '12–24s' },
                    { icon: 'Great_Strand', name: 'Great Strides + Byregot', time: 'finish' },
                    { icon: 'Basic_Synthesis', name: 'Basic/Focused Synthesis', time: 'cleanup' },
                ],
            },
        ],
        tips: [
            'Cook in bulk and list in varied stack sizes (1/3/10).',
            'Track stat breakpoints; certain foods spike with meta changes.',
            'Pair with Fisher/Botanist for key ingredients.',
        ],
    },

    // ======== Disciples of the Land (Gatherers) ========
    [slugifyJobName('Miner')]: {
        jobName: 'Miner',
        subtitle: 'Ores, stones, and aethersands from the earth',
        role: 'Gatherer',
        difficulty: 2,
        unlockLevel: 1,
        bgImage: 'Miner',
        intro:
            'Miners harvest ores and stones used by blacksmiths, armorers, and goldsmiths. Timed nodes and collectibles provide strong gil and scrips.',
        roleSummary:
            'Rotate GP buffs to secure 100% gather and large yields. Prioritize collectibles for scrips and aethersands for endgame crafts.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Collectible Route (Timed Node)',
                skills: [
                    { icon: 'Collectors_Glove', name: 'Collector’s Glove', time: '0s' },
                    { icon: 'Scrutiny', name: 'Scrutiny', time: '2s' },
                    { icon: 'Meticulous_Prospector', name: 'Meticulous Prospector', time: '4s' },
                    { icon: 'Ageless_Words', name: 'Ageless Words / Bountiful Yield', time: '6s' },
                    { icon: 'Methodical_Prospector', name: 'Methodical Prospector ×2–3', time: '8s+' },
                ],
            },
        ],
        tips: [
            'Use cordial on cooldown to sustain GP.',
            'Timed legendary nodes are peak profit—learn their windows.',
            'Cap scrips weekly via collectibles for gear and materia.',
        ],
    },

    [slugifyJobName('Botanist')]: {
        jobName: 'Botanist',
        subtitle: 'Logs, fibers, herbs, and aethersands from the wilds',
        role: 'Gatherer',
        difficulty: 2,
        unlockLevel: 1,
        bgImage: 'Botanist',
        intro:
            'Botanists gather lumber, fibers, and herbs for weavers, carpenters, and culinarians. Excellent for steady market board sales.',
        roleSummary:
            'Similar flow to Miner: maintain GP, use scrutiny chains for collectibles, and target high-demand timed items.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Collectible Route (Timed Node)',
                skills: [
                    { icon: 'Collectors_Glove', name: 'Collector’s Glove', time: '0s' },
                    { icon: 'Scrutiny', name: 'Scrutiny', time: '2s' },
                    { icon: 'Meticulous_Botanist', name: 'Meticulous Botanist', time: '4s' },
                    { icon: 'Bountiful_Harvest', name: 'Bountiful Harvest / Ageless Words', time: '6s' },
                    { icon: 'Methodical_Botanist', name: 'Methodical Botanist ×2–3', time: '8s+' },
                ],
            },
        ],
        tips: [
            'Track herb/log demand from culinarian and weaver recipes.',
            'Gather aethersand windows for peak profits.',
            'Custom deliveries and turn-ins are easy scrip sources.',
        ],
    },

    [slugifyJobName('Fisher')]: {
        jobName: 'Fisher',
        subtitle: 'Open water, river, sky, and ocean fishing master',
        role: 'Gatherer',
        difficulty: 3,
        unlockLevel: 1,
        bgImage: 'Fisher',
        intro:
            'Fishers supply ingredients for culinarians and rare collectibles. Ocean Fishing offers unique XP bursts and achievements.',
        roleSummary:
            'Swap bait/tackle for targets, manage Patience windows, and use Hook/Precision/Powerful Hookset correctly. Spearfishing adds fast, targeted collection.',
        rotations: { singleTarget: [], aoe: [], mitigationRotation: [], healingRotation: [] },
        openers: [
            {
                title: 'Patience Loop (Large Fish/Collectibles)',
                skills: [
                    { icon: 'Patience_II', name: 'Patience II', time: '0s' },
                    { icon: 'Powerful_Hookset', name: 'Powerful/Precision Hookset (as prompted)', time: 'on bite' },
                    { icon: 'Identical_Cast', name: 'Identical Cast (if valuable)', time: 'proc' },
                    { icon: 'Surface_Slap', name: 'Surface Slap (skip undesired fish)', time: 'as needed' },
                    { icon: 'Chum', name: 'Chum / Prize Catch utilities', time: 'weave' },
                ],
            },
        ],
        tips: [
            'Use the Fish Guide to track bait and weather/time windows.',
            'Ocean Fishing = massive XP; bring GP food and cordials.',
            'Patience II + correct Hookset maintains high collectability.',
        ],
    },
};
