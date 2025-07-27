// src/hooks/useServerStatus.ts
import { useEffect, useState } from 'react';

export function useServerStatus() {
    const [status, setStatus] = useState('All Servers Online | Checking status...');

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
        const interval = setInterval(updateStatus, 86400000);
        return () => clearInterval(interval);
    }, []);

    return status;
}
