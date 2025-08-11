import "../styles/index.css";
import PageHeader from "../components/PageHeader";
import CombatHero from "../components/combat/CombatHero";
import GuideSection from "../components/guides/GuideSection";
import { dungeonQuickGuides, raidQuickGuides, trialQuickGuides } from "../data/guideQuickData";

export default function Combat() {
    return (
        <div className="bg-[#f6f6f6] dark:bg-[#121212] text-gray-900 dark:text-white min-h-screen">
            <PageHeader
                breadcrumbs={[
                    { label: "Home", href: "/home" },
                    { label: "Combat Guides", href: "/combat" },
                ]}
            />

            <main className="max-w-[90rem] mx-auto px-6 pb-16">
                <CombatHero />

                <GuideSection
                    title="Dungeon Guides"
                    items={dungeonQuickGuides}
                    viewAllTo="/guides/dungeons"
                    viewAllText="View All Dungeon Guides"
                />

                <GuideSection
                    title="Raid Guides"
                    items={raidQuickGuides}
                    viewAllTo="/guides/raids"
                    viewAllText="View All Raid Guides"
                />

                <GuideSection
                    title="Trial Guides"
                    items={trialQuickGuides}
                    viewAllTo="/guides/trials"
                    viewAllText="View All Trial Guides"
                />
            </main>
        </div>
    );
}
