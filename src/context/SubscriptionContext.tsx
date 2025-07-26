// src/context/SubscriptionContext.tsx
import { createContext, useContext, useState, type ReactNode } from 'react';

export interface SubscriptionState {
    email: string;
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export interface SubscriptionActions {
    setEmail: (email: string) => void;
    subscribe: () => Promise<void>;
}

const defaultState: SubscriptionState = {
    email: '',
    status: 'idle',
    message: '',
};

const SubscriptionContext = createContext<{
    state: SubscriptionState;
    actions: SubscriptionActions;
}>({
    state: defaultState,
    actions: {
        setEmail: () => {},
        subscribe: async () => {},
    },
});

export const SubscriptionProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<SubscriptionState>(defaultState);

    const setEmail = (email: string) =>
        setState((s) => ({ ...s, email }));

    const subscribe = async () => {
        setState((s) => ({ ...s, status: 'loading', message: '' }));
        try {
            const res = await fetch(
                'https://readdy.ai/api/form/d1hclh9eus6kik1r0i50',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({ email: state.email }),
                }
            );
            if (!res.ok) throw new Error();
            setState((s) => ({
                ...s,
                status: 'success',
                message: 'Thank you for subscribing!',
                email: '',
            }));
        } catch {
            setState((s) => ({
                ...s,
                status: 'error',
                message: 'Something went wrong. Please try again later.',
            }));
        }
    };

    return (
        <SubscriptionContext.Provider value={{ state, actions: { setEmail, subscribe } }}>
            {children}
        </SubscriptionContext.Provider>
    );
};

export const useSubscriptionContext = () => useContext(SubscriptionContext);
