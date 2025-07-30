export default function SecurityContactGrid() {
    return (
        <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Security Measures */}
                <div className="bg-white text-black dark:bg-[#252547] dark:text-white border border-black/10 dark:border-[#3f3f67] rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-[#303060] rounded-full mb-4">
                        <i className="ri-shield-check-line ri-lg text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Data Protection</h3>
                            <p className="text-sm">
                                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
                            </p>
                        </div>
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Secure Transactions</h3>
                            <p className="text-sm">
                                All sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology. We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.
                            </p>
                        </div>
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Data Breach</h3>
                            <p className="text-sm">
                                In the event of a data breach, we will notify affected users and relevant authorities as required by applicable laws and regulations. We will also take appropriate measures to mitigate any potential harm caused by the breach.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white text-black dark:bg-[#252547] dark:text-white border border-black/10 dark:border-[#3f3f67] rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-[#303060] rounded-full mb-4">
                        <i className="ri-mail-send-line ri-lg text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">How to Contact Us</h3>
                            <p className="text-sm">
                                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
                            </p>
                            <div className="mt-4 space-y-2">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 flex items-center justify-center mr-2">
                                        <i className="ri-mail-line text-primary" />
                                    </div>
                                    <p className="text-sm dark:text-white">finalfxivguides@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Data Protection Officer</h3>
                            <p className="text-sm">
                                For specific inquiries related to data protection, you can contact our Data Protection Officer at dpo@darkknight-guide.com.
                            </p>
                        </div>
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Response Time</h3>
                            <p className="text-sm">
                                We aim to respond to all inquiries within 48 hours during business days. For urgent matters, please indicate so in the subject line of your email.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
