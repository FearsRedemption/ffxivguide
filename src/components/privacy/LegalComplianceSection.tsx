export default function LegalComplianceSection() {
    return (
        <section className="mb-12">
            <div className="bg-white text-black dark:bg-[#252547] dark:text-white border border-black/10 dark:border-[#3f3f67] rounded-xl p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Legal Basis and Compliance</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Legal Basis for Processing</h3>
                        <p className="text-sm">
                            We process your personal data based on one or more of the following legal grounds:
                        </p>
                        <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                            <li>Your consent to the processing of your personal data</li>
                            <li>The necessity of processing for the performance of a contract with you</li>
                            <li>The necessity of processing for compliance with a legal obligation</li>
                            <li>The necessity of processing for the purposes of our legitimate interests</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">International Data Transfers</h3>
                        <p className="text-sm">
                            Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside the United States and choose to provide information to us, please note that we transfer the data to the United States and process it there.
                        </p>
                    </div>

                    <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Children's Privacy</h3>
                        <p className="text-sm">
                            Our website is not intended for children under the age of 13. We do not knowingly collect personal data from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us so that we can take necessary actions.
                        </p>
                    </div>

                    <div className="bg-gray-50 text-black dark:bg-[#1A1A2E] dark:text-gray-300 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">Regulatory Compliance</h3>
                        <p className="text-sm">
                            We are committed to complying with all applicable data protection laws and regulations, including but not limited to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other regional privacy laws as applicable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
