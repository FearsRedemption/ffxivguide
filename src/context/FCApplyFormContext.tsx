// src/context/FCApplyFormContext.tsx
import { createContext, useContext, useState } from 'react';

type FCApplyFormData = {
    character_name: string;
    main_job: string;
    level: string;
    discord: string;
    preferred_content: string[];
    experience: string;
    why_join: string;
    referral: string;
    agree_rules: boolean;
};

type FCApplyFormStatus = 'idle' | 'sending' | 'success' | 'error';

type FCApplyFormContextType = {
    data: FCApplyFormData;
    setData: React.Dispatch<React.SetStateAction<FCApplyFormData>>;
    status: FCApplyFormStatus;
    setStatus: (status: FCApplyFormStatus) => void;
    message: string;
    setMessage: (msg: string) => void;
    charCount: number;
    setCharCount: React.Dispatch<React.SetStateAction<number>>;
};

const defaultData: FCApplyFormData = {
    character_name: '',
    main_job: '',
    level: '',
    discord: '',
    preferred_content: [],
    experience: '',
    why_join: '',
    referral: '',
    agree_rules: false,
};

const FCApplyFormContext = createContext<FCApplyFormContextType | undefined>(undefined);

export const FCApplyFormProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState(defaultData);
    const [status, setStatus] = useState<FCApplyFormStatus>('idle');
    const [message, setMessage] = useState('');
    const [charCount, setCharCount] = useState(0);

    return (
        <FCApplyFormContext.Provider value={{ data, setData, status, setStatus, message, setMessage, charCount, setCharCount }}>
            {children}
        </FCApplyFormContext.Provider>
    );
};

export const useFCApplyFormContext = () => {
    const ctx = useContext(FCApplyFormContext);
    if (!ctx) throw new Error('useFCApplyFormContext must be used within FCApplyFormProvider');
    return ctx;
};
