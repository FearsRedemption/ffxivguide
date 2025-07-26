// src/hooks/useAccess.ts
import { useAccessContext } from '../context/AccessContext';

export function useAccess() {
    const { state, actions } = useAccessContext();
    return {
        code: state.code,
        status: state.status,
        message: state.message,
        setCode: actions.setCode,
        verify: actions.verify,
    };
}
