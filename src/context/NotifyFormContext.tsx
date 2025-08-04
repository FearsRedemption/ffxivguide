// context/NotifyFormContext.tsx
import { createContext, useContext, useState } from 'react';

interface NotifyFormData {
    email: string;
}

interface NotifyFormContextType {
    data: NotifyFormData;
    setData: React.Dispatch<React.SetStateAction<NotifyFormData>>;
    status: 'idle' | 'sending' | 'success' | 'error';
    setStatus: React.Dispatch<React.SetStateAction<'idle' | 'sending' | 'success' | 'error'>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const NotifyFormContext = createContext<NotifyFormContextType | undefined>(undefined);

export function NotifyFormProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<NotifyFormData>({ email: '' });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState<string>('');

    return (
        <NotifyFormContext.Provider value={{ data, setData, status, setStatus, message, setMessage }}>
            {children}
        </NotifyFormContext.Provider>
    );
}

export const useNotifyFormContext = () => {
    const context = useContext(NotifyFormContext);
    if (!context) throw new Error('useNotifyFormContext must be used within NotifyFormProvider');
    return context;
};
