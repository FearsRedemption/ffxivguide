// src/pages/RaidsAll.tsx
import PageHeader from "../../components/PageHeader";
import GuideDirectory from "../guides/GuideDirectory";
import { raidsData } from "../../data/guides/raids/raidsData";

export default function RaidsAll() {
    return (
        <div className="bg-[#f6f6f6] dark:bg-[#121212] min-h-screen">
            <PageHeader breadcrumbs={[
                {label:"Home",href:"/home"},
                {label:"Combat Guides", href:"/combat"},
                {label:"Raids",href:"/guides/raids"}
            ]}
            />
            <main className="max-w-[90rem] mx-auto px-6 pb-16">
                <GuideDirectory title="A Realm Reborn — Raids" items={raidsData} />
            </main>
        </div>
    );
}
