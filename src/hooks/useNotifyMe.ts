export const useNotifyMe = () => {
    const submitEmail = async (email: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const res = await fetch('/api/notifyme', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const text = await res.text(); // ← get raw text
            console.log('Raw response:', text);

            const result = JSON.parse(text); // now safely parse

            if (!res.ok) {
                return { success: false, error: result.error || 'Something went wrong.' };
            }

            return { success: true };
        } catch (err: any) {
            return { success: false, error: err.message || 'Network error.' };
        }
    };

    return { submitEmail };
};
