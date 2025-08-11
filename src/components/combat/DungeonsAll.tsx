// src/components/combat/DungeonsAll.tsx
import PageHeader from "../PageHeader";
import GuideDirectory from "../guides/GuideDirectory";
import { dungeonsData } from "../../data/dungeonsData";

export default function DungeonsAll() {
    return (
        <div className="bg-[#f6f6f6] dark:bg-[#121212] min-h-screen">
            <PageHeader breadcrumbs={
                [
                    {label:"Home", href:"/home"},
                    {label:"Combat Guides", href:"/combat"},
                    {label:"Dungeons", href:"/guides/dungeons"}
                ]}
            />
            <main className="max-w-[90rem] mx-auto px-6 pb-16">
                <GuideDirectory title="A Realm Reborn — Dungeons" items={dungeonsData} />
            </main>
        </div>
    );
}
