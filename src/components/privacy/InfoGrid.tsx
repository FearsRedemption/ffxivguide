export default function InfoGrid() {
    return (
        <section className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Information We Collect */}
                <div className="bg-white text-black dark:bg-[#252547] dark:text-white border border-black/10 dark:border-[#3f3f67] rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-[#303060] rounded-full mb-4">
                        <i className="ri-information-line ri-lg text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-[#1A1A2E] p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Personal Information</h3>
                            <p className="text-sm text-gray-800 dark:text-gray-300">
                                We may collect personal identification information from users in various ways, including, but not limited to,
                                when users visit our site, register on the site, subscribe to the newsletter, and in connection with other
                                activities, services, features, or resources we make available on our site. Users may be asked for, as appropriate,
                                name and email address.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-[#1A1A2E] p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Non-Personal Information</h3>
                            <p className="text-sm text-gray-800 dark:text-gray-300">
                                We may collect non-personal identification information about users whenever they interact with our site. This includes
                                browser name, type of computer, operating system, and internet provider info.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cookie Usage */}
                <div className="bg-white text-black dark:bg-[#252547] dark:text-white border border-black/10 dark:border-[#3f3f67] rounded-xl p-6 shadow-md">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 dark:bg-[#303060] rounded-full mb-4">
                        <i className="ri-cookie-line ri-lg text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-4">Cookie Usage</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 dark:bg-[#1A1A2E] p-4 rounded-lg">
                            <h3 className="font-medium mb-2">What Are Cookies</h3>
                            <p className="text-sm text-gray-800 dark:text-white">
                                Cookies are small text files stored on your device to enhance browsing. They help recognize your device and store
                                preferences or prior actions.
                            </p>
                        </div>
                        <div className="bg-gray-50 dark:bg-[#1A1A2E] p-4 rounded-lg">
                            <h3 className="font-medium mb-2">How We Use Cookies</h3>
                            <p className="text-sm text-gray-800 dark:text-gray-300">
                                We use cookies to:
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-800 dark:text-white mt-2 space-y-1">
                                <li>Remember user preferences</li>
                                <li>Track advertisements</li>
                                <li>Analyze site traffic and interactions</li>
                                <li>Improve site functionality and experience</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 dark:bg-[#1A1A2E] p-4 rounded-lg">
                            <h3 className="font-medium mb-2">Disabling Cookies</h3>
                            <p className="text-sm text-gray-800 dark:text-gray-300">
                                You can block or delete cookies via browser settings. Some parts of the site may stop working properly if disabled.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
