export default function ContactInfo() {
    return (
        <div className="flex flex-col gap-8">
            {/* What to Expect */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-start">
                        <i className="ri-time-line text-primary text-2xl mr-4"></i>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Response Time</h3>
                            <p>We aim to respond within 24–48 hours on business days. Complex issues may take longer.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <i className="ri-question-line text-primary text-2xl mr-4"></i>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">What We Can Help With</h3>
                            <ul className="space-y-2 list-disc ml-5">
                                <li>Bug reports and technical issues</li>
                                <li>Content suggestions and guide requests</li>
                                <li>Partnership and collaboration opportunities</li>
                                <li>Account-related questions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Ways to Reach Us */}
            <div className="bg-white dark:bg-[#2d2d2d] rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
                <div className="text-gray-600 dark:text-gray-400">
                    <div className="flex items-start">
                        <i className="ri-mail-line text-primary text-2xl mr-4"></i>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                            <p>
                                General inquiries:{' '}
                                <a href="mailto:finalfxivguides@gmail.com" className="text-primary hover:underline">
                                    finalfxivguides@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
