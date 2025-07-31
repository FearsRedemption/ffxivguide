// src/components/FCApplication.tsx
import { useState } from 'react';

export default function FCApplication() {
    const [charCount, setCharCount] = useState(0);

    const handleCharCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(e.target.value.length);
    };

    return (
        <section id="apply" className="py-16 bg-gray-50 dark:bg-[#1a1a1a] dark:text-gray-600">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Apply to Join</h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Interested in becoming part of our community? Fill out the application below
                    </p>
                </div>
                <div className="max-w-3xl mx-auto bg-white dark:bg-[#2a2a2a] rounded-lg shadow-sm p-8 border border-gray-100 dark:border-gray-700">
                    <form action="/api/apply" method="POST" id="fc-application-form">
                        <div className="mb-6">
                            <label htmlFor="character-name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                                Character Name*
                            </label>
                            <input type="text" id="character-name" name="character_name" required placeholder="Your character's full name"
                                   className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:border-primary" />
                        </div>

                        <div className="grid grid-cols-1 gap-6 mb-6">
                            <div>
                                <label htmlFor="main-job" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Main Job/Class*</label>
                                <div className="relative">
                                    <select id="main-job" name="main_job" required
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded pr-8 focus:border-primary appearance-none">
                                        <option value="">Select your main job</option>
                                        {[
                                            "PLD", "WAR", "DRK", "GNB", "WHM", "SCH", "AST", "SGE",
                                            "MNK", "DRG", "NIN", "SAM", "RPR", "BRD", "MCH", "DNC",
                                            "BLM", "SMN", "RDM", "VPR", "PCT"
                                        ].map(job => (
                                            <option key={job} value={job}>{job}</option>
                                        ))}
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <i className="ri-arrow-down-s-line text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="level" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Current Level*</label>
                                <input type="text" id="level" name="level" required placeholder="Your job's current level"
                                       className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:border-primary" />
                            </div>
                            <div>
                                <label htmlFor="discord" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Discord Username*</label>
                                <input type="text" id="discord" name="discord" required placeholder="Your Discord username"
                                       className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:border-primary" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Preferred Content*</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {[
                                    "Casual Content", "Extreme Trials", "Savage Raids",
                                    "Ultimate Raids", "Crafting/Gathering", "Social/RP"
                                ].map(content => (
                                    <label className="flex items-center" key={content}>
                                        <input type="checkbox" name="preferred_content" value={content}
                                               className="w-4 h-4 text-primary border-gray-300 dark:border-gray-600 rounded focus:ring-primary" />
                                        <span className="ml-2 text-gray-700 dark:text-gray-200">{content}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="experience" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">FFXIV Experience*</label>
                            <div className="relative">
                                <select id="experience" name="experience" required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded pr-8 focus:border-primary appearance-none">
                                    <option value="">Select your experience level</option>
                                    <option value="new">New Player (Less than 6 months)</option>
                                    <option value="casual">Casual Player (6 months - 1 year)</option>
                                    <option value="experienced">Experienced Player (1-3 years)</option>
                                    <option value="veteran">Veteran Player (3+ years)</option>
                                    <option value="returning">Returning Player (Coming back after a break)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <i className="ri-arrow-down-s-line text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="why-join" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                                Why do you want to join our FC?*
                            </label>
                            <textarea
                                id="why-join"
                                name="why_join"
                                rows={4}
                                maxLength={500}
                                onChange={handleCharCount}
                                required
                                placeholder="Tell us a bit about yourself and why you'd like to join The Crystal Guardians... (Max 500 characters)"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:border-primary"
                            />
                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                {charCount}/500 characters
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="referral" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">
                                How did you hear about us?
                            </label>
                            <input type="text" id="referral" name="referral"
                                   placeholder="Friend, Party Finder, Community Discord, etc."
                                   className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded focus:border-primary" />
                        </div>

                        <div className="mb-6">
                            <label className="flex items-center">
                                <input type="checkbox" name="agree_rules" value="yes" required
                                       className="w-4 h-4 text-primary border-gray-300 dark:border-gray-600 rounded focus:ring-primary" />
                                <span className="ml-2 text-gray-700 dark:text-gray-200">I agree to follow the FC rules and be respectful to all members*</span>
                            </label>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit"
                                    className="bg-primary hover:bg-indigo-500 text-white px-8 py-3 rounded-button font-medium whitespace-nowrap">
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
