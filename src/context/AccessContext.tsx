import { createContext, useContext, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AccessState {
    email: string;
    code: string;
    isVerified: boolean;
    status: 'idle' | 'info' | 'success' | 'error';
    message: string;
}

export interface AccessActions {
    setEmail: (email: string) => void;
    setCode: (code: string) => void;
    verify: () => void;
}

const defaultAccess: AccessState = {
    email: '',
    code: '',
    isVerified: false,
    status: 'idle',
    message: '',
};

const AccessContext = createContext<{
    state: AccessState;
    actions: AccessActions;
}>({
    state: defaultAccess,
    actions: {
        setEmail: () => {},
        setCode: () => {},
        verify: () => {},
    },
});

export const AccessProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<AccessState>(defaultAccess);
    const navigate = useNavigate();

    const setEmail = (email: string) =>
        setState((s) => ({ ...s, email }));

    const setCode = (code: string) =>
        setState((s) => ({ ...s, code }));

    const verify = () => {
        setState((s) => ({
            ...s,
            status: 'info',
            message: 'Verifying access credentials...',
        }));

        // Simulated verification (replace with Supabase later)
        if (
            state.email.trim().toLowerCase() === 'test@ffxiv.com' &&
            state.code.trim() === '0792'
        ) {
            setState((s) => ({
                ...s,
                isVerified: true,
                status: 'success',
                message: 'Access granted! Redirecting...',
            }));
            setTimeout(() => navigate('/home'), 1000);
        } else {
            setState((s) => ({
                ...s,
                isVerified: false,
                status: 'error',
                message: 'Invalid email or access code. Please try again.',
            }));
        }
    };

    return (
        <AccessContext.Provider
            value={{
                state,
                actions: {
                    setEmail,
                    setCode,
                    verify,
                },
            }}
        >
            {children}
        </AccessContext.Provider>
    );
};

export const useAccessContext = () => useContext(AccessContext);
