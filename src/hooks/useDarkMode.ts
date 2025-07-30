import { useEffect, useState } from 'react';

export function useDarkMode(): [boolean, (value: boolean) => void] {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        const isEnabled = saved === 'enabled';

        setEnabled(isEnabled);
        document.documentElement.classList.toggle('dark', isEnabled); // ← FIXED
    }, []);

    const toggleDarkMode = (value: boolean) => {
        setEnabled(value);
        document.documentElement.classList.toggle('dark', value); // ← FIXED
        localStorage.setItem('darkMode', value ? 'enabled' : 'disabled');
    };

    return [enabled, toggleDarkMode];
}
