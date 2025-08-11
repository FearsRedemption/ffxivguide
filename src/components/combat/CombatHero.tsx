import { Link } from "react-router-dom";

type CombatHeroProps = {
    bgImage?: string; // optional override if you want a different banner later
};

export default function CombatHero({ bgImage }: CombatHeroProps) {
    return (
        <section
            className={`relative overflow-hidden rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 mb-8 hero-bg-combat`}
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
            aria-label="Combat Guides Hero"
        >
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 dark:from-black/60 dark:via-black/40 dark:to-black/70" />

            <div className="relative px-6 py-10 md:px-10 md:py-14">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow">
                        Combat Guides
                    </h1>
                    <p className="mt-3 text-base md:text-lg text-gray-100/90">
                        Three quick picks for each category—perfect for jumping in fast.
                        Want everything? Explore the full directories below.
                    </p>

                    {/* CTA Row */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <Link to="/guides/dungeons" className="group">
                            <button
                                className="w-full inline-flex items-center justify-between gap-3 rounded-xl px-4 py-3
                           bg-white/90 hover:bg-white text-gray-900
                           dark:bg-white/10 dark:hover:bg-white/15 dark:text-gray-100
                           ring-1 ring-white/40 dark:ring-white/10 shadow-sm backdrop-blur
                           transition"
                                aria-label="View all dungeon guides"
                            >
                <span className="inline-flex items-center gap-2 font-semibold">
                  <i className="ri-sword-line text-xl" />
                  Dungeons
                </span>
                                <i className="ri-arrow-right-line opacity-60 group-hover:translate-x-0.5 transition" />
                            </button>
                        </Link>

                        <Link to="/guides/raids" className="group">
                            <button
                                className="w-full inline-flex items-center justify-between gap-3 rounded-xl px-4 py-3
                           bg-white/90 hover:bg-white text-gray-900
                           dark:bg-white/10 dark:hover:bg-white/15 dark:text-gray-100
                           ring-1 ring-white/40 dark:ring-white/10 shadow-sm backdrop-blur
                           transition"
                                aria-label="View all raid guides"
                            >
                <span className="inline-flex items-center gap-2 font-semibold">
                  <i className="ri-shield-flash-line text-xl" />
                  Raids
                </span>
                                <i className="ri-arrow-right-line opacity-60 group-hover:translate-x-0.5 transition" />
                            </button>
                        </Link>

                        <Link to="/guides/trials" className="group">
                            <button
                                className="w-full inline-flex items-center justify-between gap-3 rounded-xl px-4 py-3
                           bg-white/90 hover:bg-white text-gray-900
                           dark:bg-white/10 dark:hover:bg-white/15 dark:text-gray-100
                           ring-1 ring-white/40 dark:ring-white/10 shadow-sm backdrop-blur
                           transition"
                                aria-label="View all trial guides"
                            >
                <span className="inline-flex items-center gap-2 font-semibold">
                  <i className="ri-flashlight-line text-xl" />
                  Trials
                </span>
                                <i className="ri-arrow-right-line opacity-60 group-hover:translate-x-0.5 transition" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
