export default function DataRightsGrid() {
    return (
        <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Data Sharing Practices */}
                <div className="bg-white text-black dark:bg-[#252547] dark:text-white border border-black/10 dark:border-[#3f3f67] rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-[#303060] rounded-full mb-4">
                        <i className="ri-share-line ri-lg text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Data Sharing Practices</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Third-Party Disclosure</h3>
                            <p className="text-sm">
                                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                            </p>
                        </div>
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Analytics</h3>
                            <p className="text-sm">
                                We may use third-party service providers to monitor and analyze the use of our website. These services may track details such as frequency of visits, pages visited, and time spent on a page. We use this information to improve our website and services.
                            </p>
                        </div>
                    </div>
                </div>

                {/* User Rights */}
                <div className="bg-white text-black dark:bg-[#252547] dark:text-white border border-black/10 dark:border-[#3f3f67] rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-[#303060] rounded-full mb-4">
                        <i className="ri-user-settings-line ri-lg text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">User Rights</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Access and Control</h3>
                            <p className="text-sm">You have the right to:</p>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                                <li>Access and receive a copy of your personal data</li>
                                <li>Rectify inaccurate personal data</li>
                                <li>Request the deletion of your personal data</li>
                                <li>Object to the processing of your personal data</li>
                                <li>Request restrictions on the processing of your personal data</li>
                                <li>Request the transfer of your personal data</li>
                                <li>Withdraw consent at any time where we relied on your consent to process your personal data</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">How to Exercise Your Rights</h3>
                            <p className="text-sm">
                                If you wish to exercise any of these rights, please contact us using the contact information provided at the end of this policy. We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data.
                            </p>
                        </div>

                        <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Response Time</h3>
                            <p className="text-sm">
                                We try to respond to all legitimate requests within one month. If your request is complex or you’ve made multiple requests, it may take longer—we’ll notify you if so.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
