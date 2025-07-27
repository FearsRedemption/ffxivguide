import { useEffect, useState } from 'react';

export function useDarkMode(): [boolean, (value: boolean) => void] {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('darkMode');
        if (saved === 'enabled') {
            document.body.classList.add('dark-mode');
            setEnabled(true);
        } else {
            document.body.classList.remove('dark-mode');
            setEnabled(false);
        }
    }, []);

    const toggleDarkMode = (value: boolean) => {
        setEnabled(value);
        if (value) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'disabled');
        }
    };

    return [enabled, toggleDarkMode];
}
