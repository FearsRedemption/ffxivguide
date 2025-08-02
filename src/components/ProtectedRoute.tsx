// src/components/ProtectedRoute.tsx
import { Navigate } from 'react-router-dom';
import { useSiteStatus } from '../hooks/useSiteStatus';
import type {JSX} from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const { isLive } = useSiteStatus();
    return isLive ? children : <Navigate to="/" replace />;
}
