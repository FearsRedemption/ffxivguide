import { Link } from "react-router-dom";
import GuideCard from "./GuideCard";
import type { QuickGuide } from "../../types/guides";

export default function GuideSection({
                                         title,
                                         items,
                                         viewAllTo,
                                         viewAllText,
                                     }: {
    title: string;
    items: QuickGuide[];
    viewAllTo: string;
    viewAllText: string;
}) {
    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((g) => (
                    <GuideCard key={g.id} guide={g} />
                ))}
            </div>
            <div className="text-center mt-6">
                <Link to={viewAllTo}>
                    <button className="bg-white dark:bg-transparent border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-button font-medium whitespace-nowrap">
                        {viewAllText}
                    </button>
                </Link>
            </div>
        </section>
    );
}