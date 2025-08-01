import PageHeader from "../components/PageHeader";
import {Link} from "react-router-dom";

export default function CrafterGather() {
    return (
        <div className="flex flex-col h-full bg-[#f6f6f6] dark:bg-[#121212] text-gray-900 dark:text-white">
            <PageHeader
                breadcrumbs={[
                    { label: "Home", href: "/home" },
                    { label: "Crafting And Gathering", href: "/crafter-gather" },
                ]}
            />

            <div className="w-full max-w-[90rem] mx-auto px-6 py-16 flex-1">
                <section className="flex items-center justify-center pt-20 pb-16">
                    <div className="text-center px-4">
                        <h1 className="text-6xl font-bold text-white mb-4">Crafting and Gathering Guides</h1>
                        <p className="text-xl text-slate-300 mb-8">
                            Sorry! This page is still under construction.
                        </p>
                        <Link
                            to="/home"
                            className="bg-primary text-white py-3 px-6 rounded-button hover:bg-opacity-90 transition-colors font-medium"
                        >
                            Back to Safety
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
