// src/pages/PrivacyPolicy.tsx
import "../styles/index.css";
import InfoGrid from "../components/privacy/InfoGrid";
import DataRightsGrid from "../components/privacy/DataRightsGrid";
import SecurityContactGrid from "../components/privacy/SecurityContactGrid";
import PolicyUpdatesSection from "../components/privacy/PolicyUpdatesSection";
import LegalComplianceSection from "../components/privacy/LegalComplianceSection";
import PageHeader from "../components/PageHeader";

export default function PrivacyPolicy() {
    return (
        <div className="dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100">
            <PageHeader
                breadcrumbs={[
                    { label: 'Home', href: '/home' },
                    { label: 'Privacy Policy', href: '/privacy' },
                ]}
            />

            <main className="max-w-6xl mx-auto px-4 py-8">
                {/* Intro Section */}
                <section className="mb-12">
                    <div className="p-6 mb-8 rounded-xl shadow-md border border-black/10 bg-white dark:bg-[#252547] text-gray-900 dark:text-white dark:border-[#3f3f67]">
                    <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-4">
                                <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                <span>Last updated: June 29, 2025</span>
                            </div>
                        </div>
                        <p className="mb-4">
                            At FinalFXIV, we respect your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you about how we look after your personal data when you
                            visit our website and tell you about your privacy rights and how the law protects you.
                        </p>
                        <p>
                            Please read this privacy policy carefully to understand how we collect, use, protect, and
                            handle your personal information in accordance with our website.
                        </p>
                    </div>
                </section>

                {/* Grid Sections */}
                <InfoGrid />
                <DataRightsGrid />
                <SecurityContactGrid />
                <PolicyUpdatesSection />
                <LegalComplianceSection />
            </main>
        </div>
    );
}
