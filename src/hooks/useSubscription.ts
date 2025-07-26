// src/hooks/useSubscription.ts
import { useSubscriptionContext } from '../context/SubscriptionContext';

export function useSubscription() {
    const { state, actions } = useSubscriptionContext();
    return {
        email: state.email,
        status: state.status,
        message: state.message,
        setEmail: actions.setEmail,
        subscribe: actions.subscribe,
    };
}