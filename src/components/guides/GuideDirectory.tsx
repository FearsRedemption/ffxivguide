// src/components/guides/GuideDirectory.tsx
import { useState, useMemo } from "react";
import type { QuickGuide } from "../../types/guides";
import GuideCard from "./GuideCard";

export default function GuideDirectory({
                                           title,
                                           items,
                                           initial = 6,
                                           step = 3,
                                       }: {
    title: string;
    items: QuickGuide[];
    initial?: number;
    step?: number;
}) {
    const [visible, setVisible] = useState(initial);
    const shown = useMemo(() => items.slice(0, visible), [items, visible]);
    const hasMore = visible < items.length;

    return (
        <section className="mt-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {shown.map((g) => <GuideCard key={g.id} guide={g} />)}
            </div>

            {hasMore && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setVisible(v => v + step)}
                        className="px-5 py-3 rounded-lg border border-gray-300 dark:border-gray-700
                       bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800
                       text-gray-800 dark:text-gray-200 text-sm font-medium"
                        aria-label="Load More Guides"
                    >
                        Load More Guides
                    </button>
                </div>
            )}
        </section>
    );
}
