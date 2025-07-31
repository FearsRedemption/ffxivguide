// src/components/personalfc/FCBenefits.tsx
import BenefitCard from './BenefitCard';

export default function FCBenefits() {
    return (
        <section id="benefits" className="scroll-mt-24 py-16 bg-white dark:bg-[#2a2a2a]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Member Benefits
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Joining The Crystal Guardians provides numerous advantages to enhance your FFXIV experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Company Buffs */}
                    <BenefitCard
                        icon="ri-flask-line"
                        title="Company Buffs"
                        text="Enjoy perpetual FC buffs including The Heat of Battle (EXP boost), Reduced Rates (teleport discount), and In Control (gathering boost) on rotation."
                    />

                    {/* FC House Access */}
                    <BenefitCard
                        icon="ri-home-gear-line"
                        title="FC House Access"
                        text="Full access to our Large FC house in the best Shirogane location!"
                    />

                    {/* Hot Pot/Bar */}
                    <BenefitCard
                        icon="ri-ship-line"
                        title="Hot Pot / Bar"
                        text="Hang out at our Medium house in Ward 27, Plot 13 — enjoy the onsen, eat, chat, and unwind."
                    />

                    {/* Events & Activities */}
                    <BenefitCard
                        icon="ri-treasure-map-line"
                        title="Events & Activities"
                        text="Weekly map runs, mount farms, raid statics, and seasonal FC events. (Coming soon)"
                    />

                    {/* Discord */}
                    <BenefitCard
                        icon="ri-discord-line"
                        title="Active Discord"
                        text="Join our lively Discord with channels for everything — including voice chat, bots, and support."
                    />

                    {/* Mentorship */}
                    <BenefitCard
                        icon="ri-graduation-cap-line"
                        title="Mentorship Program"
                        text="New players get paired with mentors who help you level, learn your job, and enjoy the game."
                    />

                    {/* Crafting Support */}
                    <BenefitCard
                        icon="ri-hammer-line"
                        title="Crafting Support"
                        text="Have mats? We’ll craft for free. Don’t? We’ll still craft for cheap. Our master crafters have you covered."
                    />

                    {/* FC Chest Access */}
                    <BenefitCard
                        icon="ri-bank-card-line"
                        title="FC Chest Access"
                        text="Access the FC chest based on your rank — all members can use Box 1 for high-end gathering materials."
                    />
                </div>
            </div>
        </section>
    );
}
