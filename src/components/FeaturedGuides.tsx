import GuideCard from './GuideCard';
import { featuredGuides } from '../data/featuredGuidesData';

export default function FeaturedGuides() {
    return (
        <section className="py-12 bg-white guide-card dark:bg-[#2d2d2d]">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold guide-title text-gray-900 dark:text-white">
                        Featured Video Guides
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {featuredGuides.map((guide, index) => (
                        <GuideCard key={index} {...guide} />
                    ))}
                </div>
            </div>
        </section>
    );
}
