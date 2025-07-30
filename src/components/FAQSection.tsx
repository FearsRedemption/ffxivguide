export default function FAQSection() {
    const faqs = [
        {
            question: 'How quickly will I receive a response?',
            answer:
                'We aim to respond to all inquiries within 24-48 hours during business days. Complex issues may require additional time for investigation.',
        },
        {
            question: 'Can I submit a guide to be published?',
            answer:
                'Yes! We welcome community contributions. Please use the contact form with the subject "Content Suggestion" and include details about your proposed guide.',
        },
        {
            question: 'I found an error in a guide. How do I report it?',
            answer:
                'Please use the contact form with the subject "Bug Report" and include the specific guide URL and details about the error you found.',
        },
        {
            question: 'Do you offer advertising opportunities?',
            answer:
                'Yes, we offer various partnership and advertising options. Please contact us using the subject "Partnership Opportunity" for more information.',
        },
    ];

    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map(({ question, answer }, i) => (
                    <div key={i} className="bg-white dark:bg-[#2d2d2d] rounded-lg shadow-sm p-6">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-2">{question}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
