import Header from '../components/Header';
import Footer from '../components/Footer';
import { ContactFormProvider } from '../context/ContactFormContext';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import FAQSection from '../components/contact/FAQSection';
import PageHeader from '../components/PageHeader';
import {useServerStatus} from "../hooks/useServerStatus.ts";

export default function Contact() {
    const serverStatus = useServerStatus();
    return (
        <ContactFormProvider>
            <div className="bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-200 min-h-screen">
                <Header serverStatus={serverStatus} />
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
                <Footer />
            </div>
        </ContactFormProvider>
    );
}
