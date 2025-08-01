// src/pages/TermsOfService.tsx
import PageHeader from "../components/PageHeader";
import TermsOverview from "../components/tos/TermsOverview";

export default function TermsOfService() {    
    return (
        <div className="dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100">
            <PageHeader
                breadcrumbs={[
                    { label: 'Home', href: '/home' },
                    { label: 'Terms of Service', href: '/tos' },
                ]}
            />

            <main className="max-w-6xl mx-auto px-4 py-8">
                {/* Intro Section */}
                <section className="mb-12">
                    <div className="p-6 mb-8 rounded-xl shadow-md border border-black/10 bg-white dark:bg-[#252547] text-gray-900 dark:text-white dark:border-[#3f3f67]">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-4">
                                <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <span>Last updated: June 29, 2025</span>
                            </div>
                        </div>
                        <p className="mb-4">
                            Welcome to FinalFXIV. By accessing or using our website, you agree to these Terms of Service.
                            If you do not agree with any part of the terms, please do not use our site.
                        </p>
                        <p>
                            These Terms explain the rules and responsibilities for using our website and any associated
                            features. Please review them carefully before proceeding.
                        </p>
                    </div>
                </section>

                {/* Section Grid Content */}
                <TermsOverview />
            </main>
        </div>
    );
}
