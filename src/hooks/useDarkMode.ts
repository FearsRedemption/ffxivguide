import { useEffect, useState } from 'react';

export function useDarkMode(): [boolean, (value: boolean) => void] {
    const [enabled, setEnabled] = useState(false);

    // Load from localStorage on first render
    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        const isEnabled = saved === 'enabled';

        setEnabled(isEnabled);
        document.body.classList.toggle('dark-mode', isEnabled);
    }, []);

    // Toggle function
    const toggleDarkMode = (value: boolean) => {
        setEnabled(value);
        document.body.classList.toggle('dark-mode', value);
        localStorage.setItem('darkMode', value ? 'enabled' : 'disabled');
    };

    return [enabled, toggleDarkMode];
}
