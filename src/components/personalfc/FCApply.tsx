// src/components/FCApply.tsx
import { useFCApplyForm } from '../../hooks/useFCApplyForm';
import React from "react";

export default function FCApply() {
    const { data, updateField, submitForm, status, message, charCount, handleCharCount } = useFCApplyForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitForm(import.meta.env.VITE_APPLY_ENDPOINT);
    };

    return (
        <div className="bg-white dark:bg-[#2d2d2d] dark:text-gray-400 rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Free Company Application</h2>
            {status !== 'idle' && (
                <div className={`mb-4 p-4 rounded ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">Character Name *</label>
                    <input
                        name="character_name"
                        value={data.character_name}
                        onChange={updateField}
                        required
                        placeholder="Your character's full name"
                        className="form-input w-full px-4 py-3 border rounded"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">Main Job/Class *</label>
                    <select
                        name="main_job"
                        value={data.main_job}
                        onChange={updateField}
                        required
                        className="form-select w-full px-4 py-3 border rounded"
                    >
                        <option value="">Select your main job</option>
                        {[
                            "PLD", "WAR", "DRK", "GNB", "WHM", "SCH", "AST", "SGE",
                            "MNK", "DRG", "NIN", "SAM", "RPR", "BRD", "MCH", "DNC",
                            "BLM", "SMN", "RDM", "VPR", "PCT"
                        ].map(job => (
                            <option key={job} value={job}>{job}</option>
                        ))}
                    </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-white">Current Level *</label>
                        <input
                            name="level"
                            value={data.level}
                            onChange={updateField}
                            required
                            placeholder="Your job's current level"
                            className="form-input w-full px-4 py-3 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 dark:text-white">Discord Username *</label>
                        <input
                            name="discord"
                            value={data.discord}
                            onChange={updateField}
                            required
                            placeholder="Your Discord tag"
                            className="form-input w-full px-4 py-3 border rounded"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">Preferred Content *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Casual Content", "Extreme Trials", "Savage Raids",
                            "Ultimate Raids", "Crafting/Gathering", "Social/RP"
                        ].map(content => (
                            <label key={content} className="flex items-center text-sm dark:text-white">
                                <input
                                    type="checkbox"
                                    name="preferred_content"
                                    value={content}
                                    checked={data.preferred_content.includes(content)}
                                    onChange={updateField}
                                    className="h-4 w-4 mr-2"
                                />
                                {content}
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">FFXIV Experience *</label>
                    <select
                        name="experience"
                        value={data.experience}
                        onChange={updateField}
                        required
                        className="form-select w-full px-4 py-3 border rounded"
                    >
                        <option value="">Select your experience level</option>
                        <option value="new">New Player (Less than 6 months)</option>
                        <option value="casual">Casual Player (6 months - 1 year)</option>
                        <option value="experienced">Experienced Player (1-3 years)</option>
                        <option value="veteran">Veteran Player (3+ years)</option>
                        <option value="returning">Returning Player (Coming back after a break)</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">Why do you want to join? *</label>
                    <textarea
                        name="why_join"
                        value={data.why_join}
                        onChange={e => {
                            handleCharCount(e);
                            updateField(e);
                        }}
                        maxLength={500}
                        required
                        rows={4}
                        placeholder="Tell us a bit about yourself and why you'd like to join The Crystal Guardians... (Max 500 characters)"
                        className="form-textarea w-full px-4 py-3 border rounded"
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{charCount}/500 characters</div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 dark:text-white">How did you hear about us?</label>
                    <input
                        name="referral"
                        value={data.referral}
                        onChange={updateField}
                        placeholder="Friend, Party Finder, Community Discord, etc."
                        className="form-input w-full px-4 py-3 border rounded"
                    />
                </div>

                <div className="flex items-start dark:text-white">
                    <input
                        type="checkbox"
                        name="agree_rules"
                        checked={data.agree_rules}
                        onChange={updateField}
                        className="h-4 w-4 mt-1 mr-2"
                    />
                    <label className="text-sm">
                        I agree to follow the FC rules and be respectful to all members *
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-primary hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-button transition"
                >
                    {status === 'sending' ? 'Submitting...' : 'Submit Application'}
                </button>
            </form>
        </div>
    );
}
