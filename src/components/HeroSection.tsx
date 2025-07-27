import { useServerStatus } from '../hooks/useServerStatus';

export default function HeroSection() {
    const serverStatus = useServerStatus(); // Will return a status string

    return (
        <section className="hero-bg-home relative text-white">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent"></div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        Your Ultimate FFXIV Resource Hub
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 drop-shadow-sm">
                        Comprehensive guides, strategies, and resources to enhance your adventures in Eorzea and beyond.
                    </p>

                    <div className="flex items-center mt-8 bg-black/30 backdrop-blur-sm rounded-lg p-3 w-fit">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <a
                            href="https://na.finalfantasyxiv.com/lodestone/worldstatus/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-sm hover:text-primary transition"
                            data-readdy="true"
                        >
                            {serverStatus}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
