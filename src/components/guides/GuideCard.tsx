import { Link } from "react-router-dom";
import type { QuickGuide } from "../../types/guides";

const difficultyChip = (d: QuickGuide["difficulty"]) => {
    const base =
        "absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium select-none";
    switch (d) {
        case "EASY":
            return `${base} text-easy text-shadow-light dark:text-shadow-dark`;
        case "MEDIUM":
            return `${base} text-medium text-shadow-light dark:text-shadow-dark`;
        case "HARD":
            return `${base} text-hard text-shadow-light dark:text-shadow-dark`;
        case "EXTREME":
            return `${base} text-extreme text-shadow-light dark:text-shadow-dark`;
    }
};

const tagChip = () =>
    `absolute top-3 right-3 bg-black/70 text-white text-[11px] font-medium px-2 py-1 rounded`;

export default function GuideCard({ guide }: { guide: QuickGuide }) {
    return (
        <article className="guide-card bg-white dark:bg-[#1f1f1f] rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800">
            <Link to={guide.to} className="block group">
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                    <div className={difficultyChip(guide.difficulty)}>{guide.difficulty}</div>
                    <div className={tagChip()}>{guide.tag}</div>
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">
              {guide.expansion}
            </span>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <i className="ri-eye-line mr-1" />
                            {guide.views ?? "—"}
                        </div>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                        {guide.title}
                    </h3>
                    {guide.subtitle && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{guide.subtitle}</p>
                    )}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-700 dark:text-gray-200">
                            {guide.author.avatar ? (
                                <img
                                    src={guide.author.avatar}
                                    alt={guide.author.name}
                                    className="w-8 h-8 rounded-full mr-2"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-8 h-8 rounded-full mr-2 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                    <i className="ri-user-3-line text-gray-500 dark:text-gray-300 text-base" />
                                </div>
                            )}
                            <span>{guide.author.name}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">Updated {guide.updated}</span>
                    </div>
                </div>
            </Link>
        </article>
    );
}