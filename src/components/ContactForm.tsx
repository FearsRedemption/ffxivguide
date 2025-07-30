import { useContactForm } from '../hooks/useContactForm';

export default function ContactForm() {
    const { data, updateField, submitForm, status, message } = useContactForm();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        submitForm(import.meta.env.VITE_CONTACT_ENDPOINT);
    };

    return (
        <div className="bg-white dark:bg-[#2d2d2d] rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            {status !== 'idle' && (
                <div className={`mb-4 p-4 rounded ${status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-1">Name *</label>
                    <input
                        name="name"
                        value={data.name}
                        onChange={updateField}
                        required
                        placeholder="Your full name"
                        className="form-input w-full px-4 py-3 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={updateField}
                        required
                        placeholder="your.email@example.com"
                        className="form-input w-full px-4 py-3 border rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Subject *</label>
                    <select
                        name="subject"
                        value={data.subject}
                        onChange={updateField}
                        required
                        className="form-select w-full px-4 py-3 border rounded"
                    >
                        <option value="" disabled>Select a subject</option>
                        <option>Bug Report</option>
                        <option>Content Suggestion</option>
                        <option>Partnership Opportunity</option>
                        <option>General Inquiry</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Message *</label>
                    <textarea
                        name="message"
                        rows={5}
                        value={data.message}
                        onChange={updateField}
                        required
                        placeholder="Please describe your inquiry in detail..."
                        className="form-textarea w-full px-4 py-3 border rounded"
                    />
                </div>
                <div className="flex items-start">
                    <input
                        type="checkbox"
                        name="privacy"
                        checked={data.privacy}
                        onChange={updateField}
                        className="h-4 w-4 mt-1 mr-2"
                    />
                    <label className="text-sm">
                        I agree to the <a href="#" className="text-primary">Privacy Policy</a>
                    </label>
                </div>
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-primary hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-button transition"
                >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
