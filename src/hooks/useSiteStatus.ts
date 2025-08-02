// src/hooks/useSiteStatus.ts
export function useSiteStatus() {
    const hostname = window.location.hostname;
    const isLocalhost =
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        hostname === '::1';

    const isLive = false; // Set to true when the site is ready to go live

    return {
        isLive: isLive || isLocalhost, // Allow full access on localhost
        isLocalhost,
    };
}
