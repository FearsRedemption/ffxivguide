// src/components/personalfc/FCOverview.tsx

export default function FCOverview() {
    return (
        <section id="overview" className="py-16 bg-gray-50 dark:bg-[#1a1a1a]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row gap-10">
                    {/* Left Column: Text */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            About Our Free Company
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>The UwU Crew</strong> was founded on <strong>April 16, 2021</strong> by JunekoVT, with the goal of building a supportive, inclusive community in Final Fantasy XIV—starting with her Twitch followers.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Our mission is to provide a safe, fun, and engaging space for players of all experience levels—from sprouts to mentors. Whether you love raiding, crafting, or just vibing with friends, there’s a place for you here.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            We strive to grow together, learn together, and create lasting memories in Eorzea and beyond.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-700 flex items-center justify-center mr-3">
                                    <i className="ri-group-line text-primary dark:text-indigo-300 text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Focus</p>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        Social, Learning, & Endgame
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-700 flex items-center justify-center mr-3">
                                    <i className="ri-time-line text-primary dark:text-indigo-300 text-xl"></i>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Active Hours</p>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        Evenings & Weekends (CST)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Images */}
                    <div className="md:w-1/2">
                        <div className="rounded-lg overflow-hidden shadow-md">
                            <img
                                src="https://readdy.ai/api/search-image?query=A%20detailed%20interior%20of%20a%20Final%20Fantasy%20XIV%20Free%20Company%20house%20with%20elegant%20furniture%2C%20bookshelves%2C%20and%20decorative%20items.%20The%20room%20has%20a%20warm%2C%20inviting%20atmosphere%20with%20magical%20lighting%20elements%20and%20fantasy%20decorations.%20Several%20player%20characters%20are%20gathered%20in%20the%20common%20area%20socializing.%20The%20image%20has%20high%20detail%20and%20shows%20the%20cozy%20community%20space.&width=600&height=400&seq=ffxiv-fc-interior-1&orientation=landscape"
                                alt="FC House Interior"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-3 mt-3">
                            <div className="rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20Free%20Company%20members%20gathered%20for%20a%20group%20photo%20in%20front%20of%20their%20FC%20house%2C%20wearing%20matching%20glamours%20or%20uniforms.%20The%20characters%20represent%20diverse%20races%20and%20jobs%20from%20the%20game.%20The%20image%20has%20a%20celebratory%20feel%20with%20good%20lighting%20and%20composition.&width=200&height=150&seq=ffxiv-fc-group-1&orientation=landscape"
                                    alt="FC Group Photo"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20Free%20Company%20members%20engaged%20in%20a%20raid%20battle%20with%20impressive%20visual%20effects%20and%20combat%20animations.%20The%20scene%20shows%20teamwork%20in%20action%20with%20tanks%2C%20healers%2C%20and%20DPS%20working%20together.%20The%20image%20has%20dynamic%20lighting%20and%20action-oriented%20composition.&width=200&height=150&seq=ffxiv-fc-raid-1&orientation=landscape"
                                    alt="FC Raid"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-sm">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Final%20Fantasy%20XIV%20Free%20Company%20members%20participating%20in%20a%20crafting%20workshop%20or%20gathering%20expedition.%20Characters%20are%20using%20crafting%20stations%20or%20gathering%20from%20nodes%20with%20crafting%20animations%20visible.%20The%20image%20shows%20the%20collaborative%20nature%20of%20crafting%20and%20gathering%20in%20the%20game.&width=200&height=150&seq=ffxiv-fc-craft-1&orientation=landscape"
                                    alt="FC Crafting"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
