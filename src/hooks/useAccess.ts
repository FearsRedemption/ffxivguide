import { useAccessContext } from '../context/AccessContext';

export function useAccess() {
    const { state, actions } = useAccessContext();

    return {
        email: state.email,
        code: state.code,
        isVerified: state.isVerified,
        status: state.status,
        message: state.message,
        setEmail: actions.setEmail,
        setCode: actions.setCode,
        verify: actions.verify,
        resetAccess: actions.resetAccess,
    };
}
