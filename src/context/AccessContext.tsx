// src/context/AccessContext.tsx
import {
    createContext,
    useContext,
    useState,
    useEffect,
    type ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';

// ===== MOCK / TEMPORARY MANUAL SETUP
const TEST_CODE = import.meta.env.VITE_TEST_CODE;

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
    resetAccess: () => void;
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
        resetAccess: () => {},
    },
});

export const AccessProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();

    const [state, setState] = useState<AccessState>(() => {
        const stored = localStorage.getItem('ffxiv_verified');
        return {
            ...defaultAccess,
            isVerified: stored === 'true',
        };
    });

    useEffect(() => {
        const stored = localStorage.getItem('ffxiv_verified');
        if (stored === 'true' && !state.isVerified) {
            setState((s) => ({ ...s, isVerified: true }));
        }
    }, []);

    const setEmail = (email: string) => setState((s) => ({ ...s, email }));
    const setCode = (code: string) => setState((s) => ({ ...s, code }));

    const verify = async () => {
        setState((s) => ({
            ...s,
            status: 'info',
            message: 'Verifying access credentials...',
        }));

        // ======= TEMPORARY MANUAL CHECK =======
        if (state.code.trim() === TEST_CODE) {
            localStorage.setItem('ffxiv_verified', 'true');
            setState((s) => ({
                ...s,
                isVerified: true,
                status: 'success',
                message: 'Access granted! Redirecting...',
            }));
            setTimeout(() => navigate('/home'), 1000);
            return;
        }

        // ======= FUTURE BACKEND INTEGRATION =======
        /*
        try {
            const res = await fetch(import.meta.env.VITE_ACCESS_VERIFY_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: state.email, code: state.code }),
            });

            const data = await res.json();
            if (res.ok && data.valid) {
                localStorage.setItem('ffxiv_verified', 'true');
                setState((s) => ({
                    ...s,
                    isVerified: true,
                    status: 'success',
                    message: 'Access granted! Redirecting...',
                }));
                setTimeout(() => navigate('/home'), 1000);
            } else {
                throw new Error(data.error || 'Invalid code.');
            }
        } catch (err: any) {
            localStorage.removeItem('ffxiv_verified');
            setState((s) => ({
                ...s,
                isVerified: false,
                status: 'error',
                message: err.message || 'Verification failed. Please try again.',
            }));
        }
        */
        // ======= END FUTURE BLOCK =======

        // Manual fallback error
        localStorage.removeItem('ffxiv_verified');
        setState((s) => ({
            ...s,
            isVerified: false,
            status: 'error',
            message: 'Invalid email or access code. Please try again.',
        }));
    };

    const resetAccess = () => {
        localStorage.removeItem('ffxiv_verified');
        setState((s) => ({ ...s, isVerified: false }));
    };

    return (
        <AccessContext.Provider
            value={{
                state,
                actions: {
                    setEmail,
                    setCode,
                    verify,
                    resetAccess,
                },
            }}
        >
            {children}
        </AccessContext.Provider>
    );
};

export const useAccessContext = () => useContext(AccessContext);
