// src/pages/TrialsAll.tsx
import PageHeader from "../PageHeader";
import GuideDirectory from "../guides/GuideDirectory";
import { trialsData } from "../../data/guides/trials/trialsData";

export default function TrialsAll() {
    return (
        <div className="bg-[#f6f6f6] dark:bg-[#121212] min-h-screen">
            <PageHeader breadcrumbs={[
                {label:"Home",href:"/home"},
                {label:"Combat Guides", href:"/combat"},
                {label:"Trials",href:"/guides/trials"}
            ]}
            />
            <main className="max-w-[90rem] mx-auto px-6 pb-16">
                <GuideDirectory title="A Realm Reborn — Trials" items={trialsData} />
            </main>
        </div>
    );
}
