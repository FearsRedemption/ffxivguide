import { ContactFormProvider } from '../context/ContactFormContext';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import FAQSection from '../components/contact/FAQSection';
import PageHeader from '../components/PageHeader';

export default function Contact() {
    return (
        <ContactFormProvider>
            <div className="bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-200 min-h-screen">
                <PageHeader
                    breadcrumbs={[
                        { label: 'Home', href: '/home' },
                        { label: 'Contact Us', href: '/contact' },
                    ]}
                />

                <main className="container mx-auto px-4 py-12 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                    <FAQSection />
                </main>
            </div>
        </ContactFormProvider>
    );
}
