// src/components/personalfc/FCHero.tsx

export default function FCHero() {
    return (
        <section id="hero" className="scroll-mt-32 fc-hero-bg relative text-white">
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        The UwU Crew — Rank 30 Free Company
                    </h1>
                    <p className="text-xl text-gray-300 dark:text-gray-200 mb-8 drop-shadow-sm">
                        A welcoming community of adventurers dedicated to camaraderie, progression, and fun in the world of Eorzea.
                    </p>

                    <button
                        onClick={() =>
                            document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="bg-primary hover:bg-indigo-500 text-white px-6 py-3 rounded-button font-medium flex items-center whitespace-nowrap"
                    >
                        <div className="w-5 h-5 mr-2 flex items-center justify-center">
                            <i className="ri-user-add-line"></i>
                        </div>
                        Apply to Join
                    </button>

                    <div className="flex flex-wrap items-start gap-8 mt-10 bg-black/30 backdrop-blur-sm rounded-lg p-4 w-fit text-sm">
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                                <i className="ri-user-line text-white"></i>
                            </div>
                            <div>
                                <p className="text-white font-medium">Members</p>
                                <p className="text-white">132 / 150</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                                <i className="ri-home-4-line text-white"></i>
                            </div>
                            <div>
                                <p className="text-white font-medium">Estate</p>
                                <p className="text-white">Shirogane, Ward 13, Plot 30</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mr-3">
                                <i className="ri-global-line text-white"></i>
                            </div>
                            <div>
                                <p className="text-white font-medium">Server</p>
                                <p className="text-white">Midgardsormr (Aether)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
