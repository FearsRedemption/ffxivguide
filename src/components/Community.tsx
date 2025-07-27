import FreeCompanyCard from './FreeCompanyCard';
import SupportCard from './SupportCard';

export default function Community() {
    return (
        <section className="py-12 bg-gray-50 dark:bg-[#1f1f1f]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Join Our Personal Free Company
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Connect with fellow Warriors of Light, share your experiences, and stay updated with the latest FFXIV news
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <FreeCompanyCard />
                </div>

                <div className="mt-12">
                    <SupportCard />
                </div>
            </div>
        </section>
    );
}
