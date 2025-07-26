// src/context/AccessContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AccessState {
    code: string;
    status: 'idle' | 'info' | 'success' | 'error';
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
    const [state, setState] = useState<AccessState>(defaultAccess);
    const navigate = useNavigate(); // Now safe to use

    const setCode = (code: string) =>
        setState((s) => ({ ...s, code }));

    const verify = () => {
        setState((s) => ({ ...s, status: 'info', message: 'Verifying access code...' }));
        if (state.code.trim() === '0792') {
            setState((s) => ({ ...s, status: 'success', message: 'Access granted! Redirecting...' }));
            setTimeout(() => navigate('/home'), 1000);
        } else {
            setState((s) => ({ ...s, status: 'error', message: 'Invalid access code. Please try again.' }));
        }
    };

    return (
        <AccessContext.Provider value={{ state, actions: { setCode, verify } }}>
            {children}
        </AccessContext.Provider>
    );
};

export const useAccessContext = () => useContext(AccessContext);
