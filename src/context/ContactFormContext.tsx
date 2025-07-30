import { createContext, useContext, useState } from 'react';

type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    privacy: boolean;
};

type ContactFormStatus = 'idle' | 'sending' | 'success' | 'error';

type ContactFormContextType = {
    data: ContactFormData;
    setData: React.Dispatch<React.SetStateAction<ContactFormData>>;
    status: ContactFormStatus;
    message: string;
    setStatus: (s: ContactFormStatus) => void;
    setMessage: (m: string) => void;
};

const defaultData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    privacy: false,
};

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const ContactFormProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState(defaultData);
    const [status, setStatus] = useState<ContactFormStatus>('idle');
    const [message, setMessage] = useState('');

    return (
        <ContactFormContext.Provider value={{ data, setData, status, setStatus, message, setMessage }}>
            {children}
        </ContactFormContext.Provider>
    );
};

export const useContactFormContext = () => {
    const ctx = useContext(ContactFormContext);
    if (!ctx) throw new Error('useContactFormContext must be used within ContactFormProvider');
    return ctx;
};
