// src/hooks/useFCApplyForm.ts
import { useFCApplyFormContext } from '../context/FCApplyFormContext';

export function useFCApplyForm() {
    const { data, setData, status, message, setStatus, setMessage, charCount, setCharCount } = useFCApplyFormContext();

    const updateField = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        const fieldValue =
            type === 'checkbox' && e.target instanceof HTMLInputElement
                ? e.target.checked
                : value;

        setData(prev => ({
            ...prev,
            [name]: fieldValue,
        }));
    };

    const handleCharCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCharCount(e.target.value.length);
    };

    const submitForm = async (endpoint: string) => {
        if (!data.character_name || !data.main_job || !data.level || !data.discord || !data.experience || !data.why_join || !data.agree_rules) {
            setStatus('error');
            setMessage('Please fill in all required fields.');
            return;
        }
        if (data.why_join.length > 500) {
            setStatus('error');
            setMessage('Your message exceeds the 500 character limit.');
            return;
        }

        setStatus('sending');
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                setMessage('Application submitted successfully!');
                setData({
                    character_name: '',
                    main_job: '',
                    level: '',
                    discord: '',
                    preferred_content: [],
                    experience: '',
                    why_join: '',
                    referral: '',
                    agree_rules: false,
                });
                setCharCount(0);
            } else {
                throw new Error();
            }
        } catch {
            setStatus('error');
            setMessage('Submission failed. Please try again later.');
        }
    };

    return { data, updateField, submitForm, status, message, charCount, handleCharCount };
}
