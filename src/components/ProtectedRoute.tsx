import { Navigate } from 'react-router-dom';
import { useSiteStatus } from '../hooks/useSiteStatus';
import { useAccess } from '../hooks/useAccess';
import type { JSX } from 'react';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isLive } = useSiteStatus();
    const { isVerified } = useAccess();

    return isLive || isVerified ? children : <Navigate to="/" replace />;
}
