import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const redirect = params.get('redirect');
        if (redirect) {
            // Clean the URL before navigating
            window.history.replaceState(null, '', '/');
            navigate(redirect);
        }
    }, [navigate]);

    return null;
}
