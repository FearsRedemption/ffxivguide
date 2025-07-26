// src/context/AccessContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AccessState {
    code: string;
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export interface AccessActions {
    setCode: (code: string) => void;
    verify: () => void;
}

const defaultAccess: AccessState = {
    code: '',
    status: 'idle',
    message: '',
};

const AccessContext = createContext<{
    state: AccessState;
    actions: AccessActions;
}>({
    state: defaultAccess,
    actions: {
        setCode: () => {},
        verify: () => {},
    },
});

export const AccessProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const [state, setState] = useState<AccessState>(defaultAccess);

    const setCode = (code: string) =>
        setState((s) => ({ ...s, code }));

    const verify = () => {
        setState((s) => ({
            ...s,
            status: 'loading',
            message: 'Verifying access code…',
        }));

        const codeToCheck = state.code.trim();

        setTimeout(() => {
            if (codeToCheck === '0792') {
                setState((s) => ({
                    ...s,
                    status: 'success',
                    message: 'Access granted! Redirecting…',
                }));
                navigate('/home');
            } else {
                setState((s) => ({
                    ...s,
                    status: 'error',
                    message: 'Invalid access code. Please try again.',
                }));
            }
        }, 1000);
    };

    return (
        <AccessContext.Provider value={{ state, actions: { setCode, verify } }}>
            {children}
        </AccessContext.Provider>
    );
};

export const useAccessContext = () => useContext(AccessContext);
