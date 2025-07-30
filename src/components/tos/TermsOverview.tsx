// src/components/TermsOverview.tsx
import type {JSX} from "react";

export default function TermsOverview() {
    return (
        <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">

                {/* Website Usage Terms */}
                <Card
                    icon="ri-file-list-3-line"
                    title="Website Usage Terms"
                    blocks={[
                        {
                            heading: "Acceptable Use",
                            text: "Use our site only for lawful purposes. Avoid harassing others, sharing offensive content, or disrupting the site."
                        },
                        {
                            heading: "Account Requirements",
                            text: "You must provide accurate and current information when creating an account. Violations may lead to account termination."
                        },
                        {
                            heading: "Service Modifications",
                            text: "We may change or remove features of the site without notice. We are not liable for unavailability at any time."
                        },
                    ]}
                />

                {/* User Responsibilities */}
                <Card
                    icon="ri-user-settings-line"
                    title="User Responsibilities"
                    blocks={[
                        {
                            heading: "Account Security",
                            text: "Keep your password secure. Use strong passwords to protect your account."
                        },
                        {
                            heading: "Content Posting Guidelines",
                            text: "Posted content must be legal, accurate, and respectful. Opinions should be genuine and not harmful."
                        },
                        {
                            heading: "Prohibited Activities",
                            text: (
                                <>
                                    The following are prohibited:
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                        <li>Illegal activity</li>
                                        <li>Spamming or unauthorized advertising</li>
                                        <li>Hacking or disrupting the site</li>
                                        <li>Bypassing security measures</li>
                                        <li>Uploading harmful code</li>
                                    </ul>
                                </>
                            )
                        },
                    ]}
                />

                {/* Intellectual Property */}
                <Card
                    icon="ri-copyright-line"
                    title="Intellectual Property Rights"
                    blocks={[
                        {
                            heading: "Copyright Information",
                            text: "Content and features belong to FinalFXIV and are protected by intellectual property laws."
                        },
                        {
                            heading: "Trademark Usage",
                            text: "Do not use or modify our branding without permission."
                        },
                        {
                            heading: "User-Generated Content Rights",
                            text: "You grant us rights to display and modify your posted content, but you retain ownership."
                        },
                    ]}
                />

                {/* Limitation of Liability */}
                <Card
                    icon="ri-shield-flash-line"
                    title="Limitation of Liability"
                    blocks={[
                        {
                            heading: "Disclaimer of Warranties",
                            text: "We provide the site 'as is' with no guarantees of functionality or safety."
                        },
                        {
                            heading: "Limitation of Damages",
                            text: "We are not liable for damages arising from your use of the site."
                        },
                        {
                            heading: "Service Interruptions",
                            text: "We cannot guarantee uptime and may experience technical issues."
                        },
                    ]}
                />

                {/* Dispute Resolution */}
                <Card
                    icon="ri-scales-3-line"
                    title="Dispute Resolution"
                    blocks={[
                        {
                            heading: "Governing Law",
                            text: "These Terms follow U.S. law. Not enforcing a right doesn’t waive it."
                        },
                        {
                            heading: "Arbitration Procedures",
                            text: "Disputes will be handled by arbitration under JAMS in English within the United States."
                        },
                        {
                            heading: "Jurisdiction",
                            text: "Any legal actions must take place in U.S. federal or state courts."
                        },
                    ]}
                />

                {/* Termination Policies */}
                <Card
                    icon="ri-logout-box-line"
                    title="Termination Policies"
                    blocks={[
                        {
                            heading: "Account Termination Conditions",
                            text: "Accounts may be suspended immediately if you breach these Terms."
                        },
                        {
                            heading: "Effect of Termination",
                            text: "Provisions like ownership and liability limits continue even after termination."
                        },
                        {
                            heading: "Data Retention After Termination",
                            text: "We may retain user data as required by law or business necessity, even post-termination."
                        },
                    ]}
                />
            </div>

            {/* Additional Sections */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
                <Card
                    icon="ri-edit-2-line"
                    title="Changes to Terms"
                    blocks={[
                        {
                            heading: "Modification of Terms",
                            text: "We may update these Terms at any time. We'll notify users of major changes."
                        },
                        {
                            heading: "Continued Use",
                            text: "Continued use of the site after updates means you accept the revised Terms."
                        },
                    ]}
                />
                <Card
                    icon="ri-information-line"
                    title="Additional Legal Information"
                    blocks={[
                        {
                            heading: "Entire Agreement",
                            text: "These Terms override any previous agreements related to the site."
                        },
                        {
                            heading: "Assignment",
                            text: "You cannot transfer these Terms without our consent. We can transfer them freely."
                        },
                        {
                            heading: "Third-Party Links",
                            text: "We are not responsible for third-party content linked from this site."
                        },
                        {
                            heading: "Contact Information",
                            text: (
                                <>
                                    Questions? Email us at:
                                    <div className="mt-2 text-primary font-medium">finalfxivguides@gmail.com</div>
                                </>
                            )
                        },
                    ]}
                />
            </div>
        </section>
    );
}

// Helper component
function Card({ icon, title, blocks }: {
    icon: string;
    title: string;
    blocks: { heading: string; text: string | JSX.Element }[];
}) {
    return (
        <div className="bg-white text-black dark:bg-[#252547] dark:text-white border border-black/10 dark:border-[#3f3f67] rounded-xl p-6 shadow-md">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-[#303060] rounded-full mb-4">
                <i className={`${icon} ri-lg text-primary`} />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="space-y-4">
                {blocks.map((block, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-[#1A1A2E] p-4 rounded-lg">
                        <h3 className="font-medium mb-2">{block.heading}</h3>
                        <p className="text-sm text-gray-800 dark:text-gray-300">{block.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
