import { useContactFormContext } from '../context/ContactFormContext';

export function useContactForm() {
    const { data, setData, status, setStatus, message, setMessage } = useContactFormContext();

    const updateField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        const fieldValue = type === 'checkbox' && 'checked' in e.target
            ? (e.target as HTMLInputElement).checked
            : value;

        setData(prev => ({
            ...prev,
            [name]: fieldValue,
        }));
    };

    const submitForm = async (endpoint: string) => {
        if (!data.name || !data.email || !data.subject || !data.message || !data.privacy) {
            setStatus('error');
            setMessage('Please fill in all required fields.');
            return;
        }
        if (data.message.length > 500) {
            setStatus('error');
            setMessage('Message cannot exceed 500 characters.');
            return;
        }

        setStatus('sending');
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                }),
            });

            if (res.ok) {
                setStatus('success');
                setMessage('Your message has been sent successfully!');
                setData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    privacy: false,
                });
            } else {
                const errorResponse = await res.json();
                console.error('Backend error:', errorResponse);
                throw new Error();
            }
        } catch (err) {
            setStatus('error');
            setMessage('Failed to send message. Please try again later.');
        }
    };

    return { data, updateField, submitForm, status, message };
}
