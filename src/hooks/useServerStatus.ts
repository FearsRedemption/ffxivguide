// src/hooks/useServerStatus.ts
import { useEffect, useState } from 'react';

export function useServerStatus() {
    const [status, setStatus] = useState('Checking server status...');

    useEffect(() => {
        const updateStatus = () => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            });
            const formattedTime = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
            });
            setStatus(`All Servers Online | Last Updated: ${formattedDate} - ${formattedTime}`);
        };

        updateStatus();
        const interval = setInterval(updateStatus, 5 * 60 * 1000); // Refresh every 5 minutes

        return () => clearInterval(interval);
    }, []);

    return status;
}
