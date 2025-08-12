// src/pages/GuideDetail.tsx
import { useParams, Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import type { QuickGuide } from "../types/guides";

import { dungeonsData } from "../data/guides/dungeons/dungeonsData";
import { raidsData } from "../data/guides/raids/raidsData";
import { trialsData } from "../data/guides/trials/trialsData";
import {useState} from "react";

// ---------- Optional extended shape the page can consume ----------
type MechanicsItem = {
    boss?: string;
    notes?: string;
    steps?: string[];        // bullet points for mechanics/rotation/safe-spots
};

type RewardsBlock = {
    loot?: string[];
    tomestones?: string;
    drops?: string[];
    misc?: string[];
};

type UnlockInfo = {
    quest?: string;
    level?: number | string;
    location?: string;
    prerequisites?: string[];
};

// Extend QuickGuide at runtime with optional fields.
// Your data files can add any of these keys per guide.
type DetailedGuide = QuickGuide & {
    subtitle?: string;
    overview?: string | string[];     // paragraph(s)
    mechanics?: MechanicsItem[];      // array of boss mechanic groups
    rewards?: RewardsBlock;
    unlock?: UnlockInfo;
    videoUrl?: string;                 // e.g., YouTube link
    extras?: { title: string; items: string[] }[]; // any extra grouped lists
};

// ---------- UI helpers ----------
const difficultyChip = (d: QuickGuide["difficulty"]) => {
    const base = "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold";
    switch (d) {
        case "EASY": return `${base} text-easy text-shadow-light dark:text-shadow-dark`;
        case "MEDIUM": return `${base} text-medium text-shadow-light dark:text-shadow-dark`;
        case "HARD": return `${base} text-hard text-shadow-light dark:text-shadow-dark`;
        case "EXTREME": return `${base} text-extreme text-shadow-light dark:text-shadow-dark`;
    }
};

// pick 2 before + 2 after; if near edges, fill from the other side to total=4
function getRelatedAround(
    list: QuickGuide[],
    currentId: string,
    total = 4,
    wantBefore = 2,
    wantAfter = 2
) {
    const idx = list.findIndex(g => g.id === currentId);
    if (idx === -1) return [];
    const beforeItems = list.slice(Math.max(0, idx - wantBefore), idx);
    const afterItems = list.slice(idx + 1, Math.min(list.length, idx + 1 + wantAfter));

    let result: QuickGuide[] = [...beforeItems, ...afterItems];

    if (result.length < total) {
        let need = total - result.length;

        // try more AFTER first (handles start-edge like idx=0 => 0 before, 4 after)
        const afterStart = idx + 1 + afterItems.length;
        const extraAfter = list.slice(afterStart, Math.min(list.length, afterStart + need));
        result = [...beforeItems, ...afterItems, ...extraAfter];
        need = total - result.length;

        // then fill from BEFORE if still short (end-edge)
        if (need > 0) {
            const beforeEnd = Math.max(0, idx - beforeItems.length);
            const extraBefore = list.slice(Math.max(0, beforeEnd - need), beforeEnd);
            result = [...extraBefore, ...beforeItems, ...afterItems, ...extraAfter];
        }
    }
    return result.slice(0, total);
}

export default function GuideDetail() {
    const { category, slug } = useParams<{ category: "dungeons" | "raids" | "trials"; slug: string }>();

    const byCategory: Record<string, QuickGuide[]> = {
        dungeons: dungeonsData,
        raids: raidsData,
        trials: trialsData,
    };

    const list = (category && byCategory[category]) || [];
    // Cast to DetailedGuide to allow optional fields; safe because we always guard accesses
    const guide = list.find(g => g.id === slug) as DetailedGuide | undefined;
    const [videoError, setVideoError] = useState(false);

    return (
        <div className="bg-[#f6f6f6] dark:bg-[#121212] min-h-screen text-gray-900 dark:text-white">
            <PageHeader
                breadcrumbs={[
                    { label: "Home", href: "/home" },
                    { label: "Combat Guides", href: "/combat" },
                    { label: `All ${category}`, href: `/guides/${category ?? ""}` },
                    { label: guide?.title ?? "Guide", href: `/guides/${category ?? ""}/${slug ?? ""}` },
                ]}
            />

            <main className="max-w-[90rem] mx-auto px-6 pb-16">
                {!guide ? (
                    <section className="rounded-xl overflow-hidden shadow-md bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 p-8">
                        <h1 className="text-2xl font-bold mb-2">Guide not found</h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            We couldn’t find <code className="text-sm">{slug}</code> under <code className="text-sm">{category}</code>.
                        </p>
                        <div className="mt-6">
                            <Link to={`/guides/${category ?? ""}`} className="text-primary hover:underline">
                                ← Back to {category}
                            </Link>
                        </div>
                    </section>
                ) : (
                    <>
                        {/* Header Card */}
                        <section className="rounded-xl overflow-hidden shadow-md mb-6 bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700">
                            <div className="grid md:grid-cols-3 gap-0">
                                {/* Media */}
                                <div className="md:col-span-1 flex">
                                    <div className="flex-1">
                                        {guide.videoUrl && !videoError ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${guide.videoUrl.split("v=")[1]}`}
                                                title={guide.title}
                                                className="w-full h-full object-cover md:h-full"
                                                allowFullScreen
                                                onError={() => setVideoError(true)}
                                            />
                                        ) : (
                                            <img
                                                src={guide.image || "/fallback-image.png"}
                                                alt={guide.title}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="md:col-span-2 p-6">
                                    <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded">
                      {guide.expansion}
                    </span>
                                        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">
                      {guide.tag}
                    </span>
                                        <span className={difficultyChip(guide.difficulty)}>{guide.difficulty}</span>
                                    </div>

                                    <h1 className="text-3xl font-bold leading-tight">{guide.title}</h1>
                                    {guide.subtitle && (
                                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">{guide.subtitle}</p>
                                    )}

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 dark:text-gray-300 mt-4">
                                        <div className="flex items-center gap-2">
                                            {guide.author?.avatar ? (
                                                <img src={guide.author.avatar} alt={guide.author.name} className="w-7 h-7 rounded-full" />
                                            ) : (
                                                <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                                    <i className="ri-user-3-line text-gray-500 dark:text-gray-300" />
                                                </div>
                                            )}
                                            <span className="font-medium">{guide.author?.name}</span>
                                        </div>
                                        <span className="opacity-70">Updated {guide.updated || "—"}</span>
                                        <span className="opacity-70 flex items-center gap-1">
                                            <i className="ri-eye-line" />
                                            {guide.views || "—"}
                                        </span>
                                    </div>
                                    <div className="mt-5">
                                        {guide.videoUrl && (
                                            <a
                                                href={guide.videoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 shrink-0
                                                   rounded-lg px-3 py-1.5 text-sm font-semibold
                                                   bg-red-600 text-white hover:bg-red-700
                                                   focus:outline-none focus:ring-2 focus:ring-red-500/50
                                                   transition"
                                                aria-label={`Watch ${guide.title} on YouTube`}
                                            >
                                                <i className="ri-youtube-fill text-base" />
                                                Watch on YouTube
                                            </a>
                                        )}
                                    </div>

                                    {/* Back link */}
                                    <div className="mt-5">
                                        <Link to={`/guides/${category}`} className="inline-flex items-center gap-1 text-primary hover:underline text-sm">
                                            <i className="ri-arrow-left-line" /> Back to {category}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Content + Sidebar */}
                        <section className="grid lg:grid-cols-3 gap-6">
                            {/* Main content */}
                            <article className="lg:col-span-2 rounded-xl shadow-sm bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 p-6">
                                <div className="prose dark:prose-invert max-w-none">
                                    {/* Overview */}
                                    {guide.overview && (
                                        <>
                                            <h2>Overview</h2>
                                            {Array.isArray(guide.overview) ? (
                                                guide.overview.map((p, i) => <p key={i}>{p}</p>)
                                            ) : (
                                                <p>{guide.overview}</p>
                                            )}
                                        </>
                                    )}

                                    {/* Boss Mechanics */}
                                    {Array.isArray(guide.mechanics) && guide.mechanics.length > 0 && (
                                        <>
                                            <h2>Boss Mechanics</h2>
                                            {guide.mechanics.map((m, i) => (
                                                <section key={i}>
                                                    {m.boss && <h3>{m.boss}</h3>}
                                                    {m.notes && <p>{m.notes}</p>}
                                                    {Array.isArray(m.steps) && m.steps.length > 0 && (
                                                        <ul>
                                                            {m.steps.map((s, j) => <li key={j}>{s}</li>)}
                                                        </ul>
                                                    )}
                                                </section>
                                            ))}
                                        </>
                                    )}

                                    {/* Rewards & Unlock */}
                                    {(guide.rewards || guide.unlock) && (
                                        <>
                                            <h2>Rewards & Unlock</h2>
                                            {guide.unlock && (
                                                <>
                                                    <h3>Unlock</h3>
                                                    <ul>
                                                        {guide.unlock.quest && <li><strong>Quest:</strong> {guide.unlock.quest}</li>}
                                                        {guide.unlock.level !== undefined && <li><strong>Level:</strong> {guide.unlock.level}</li>}
                                                        {guide.unlock.location && <li><strong>Location:</strong> {guide.unlock.location}</li>}
                                                        {guide.unlock.prerequisites?.length ? (
                                                            <li><strong>Prerequisites:</strong> {guide.unlock.prerequisites.join(", ")}</li>
                                                        ) : null}
                                                    </ul>
                                                </>
                                            )}
                                            {guide.rewards && (
                                                <>
                                                    <h3>Rewards</h3>
                                                    <ul>
                                                        {guide.rewards.tomestones && <li><strong>Tomestones:</strong> {guide.rewards.tomestones}</li>}
                                                        {guide.rewards.loot?.length ? (
                                                            <li><strong>Loot:</strong> {guide.rewards.loot.join(", ")}</li>
                                                        ) : null}
                                                        {guide.rewards.drops?.length ? (
                                                            <li><strong>Drops:</strong> {guide.rewards.drops.join(", ")}</li>
                                                        ) : null}
                                                        {guide.rewards.misc?.length ? (
                                                            <li><strong>Misc:</strong> {guide.rewards.misc.join(", ")}</li>
                                                        ) : null}
                                                    </ul>
                                                </>
                                            )}
                                        </>
                                    )}

                                    {/* Extras (any additional grouped lists) */}
                                    {Array.isArray(guide.extras) && guide.extras.length > 0 && (
                                        <>
                                            {guide.extras.map((grp, i) => (
                                                <section key={i}>
                                                    <h2>{grp.title}</h2>
                                                    <ul>
                                                        {grp.items.map((it, j) => <li key={j}>{it}</li>)}
                                                    </ul>
                                                </section>
                                            ))}
                                        </>
                                    )}
                                </div>
                            </article>

                            {/* Sidebar */}
                            <aside className="space-y-6">
                                <div className="rounded-xl shadow-sm bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 p-5">
                                    <h4 className="font-semibold mb-3">Guide Info</h4>
                                    <dl className="grid grid-cols-2 gap-y-2 text-sm">
                                        <dt className="opacity-70">Category</dt><dd>{guide.tag}</dd>
                                        <dt className="opacity-70">Expansion</dt><dd>{guide.expansion}</dd>
                                        <dt className="opacity-70">Difficulty</dt><dd>{guide.difficulty}</dd>
                                        <dt className="opacity-70">Updated</dt><dd>{guide.updated || "—"}</dd>
                                        <dt className="opacity-70">Views</dt><dd>{guide.views || "—"}</dd>
                                    </dl>
                                </div>

                                <div className="rounded-xl shadow-sm bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-700 p-5">
                                    <h4 className="font-semibold mb-3">Related Guides</h4>
                                    <ul className="space-y-2 text-sm">
                                        {getRelatedAround(list, guide.id, 4, 2, 2).map(r => (
                                            <li key={r.id}>
                                                <Link
                                                    to={`/guides/${category}/${r.id}`}
                                                    className="inline-flex items-center gap-2 text-primary hover:underline"
                                                >
                                                    <i className="ri-book-open-line" />
                                                    {r.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>
                        </section>
                    </>
                )}
            </main>
        </div>
    );
}
