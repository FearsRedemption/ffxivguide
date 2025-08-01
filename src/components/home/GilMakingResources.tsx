import ToolCard from './ToolCard';
import { gilTools } from '../../data/gilToolsData';

export default function GilMakingResources() {
    return (
        <section className="py-12 bg-gray-200 dark:bg-[#2a2a2a]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Gil Making & Market Resources
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Stay ahead of the market trends and maximize your profits.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    {gilTools.map((tool, index) => (
                        <ToolCard key={index} {...tool} />
                    ))}
                </div>
            </div>
        </section>
    );
}
