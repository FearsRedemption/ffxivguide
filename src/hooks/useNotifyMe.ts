export function useNotifyMe() {
    const submitEmail = async (email: string): Promise<{ success: boolean; error?: string }> => {
        try {
            const res = await fetch(import.meta.env.VITE_NOTIFY_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                const error = await res.json();
                return { success: false, error: error.message || 'Failed to subscribe' };
            }

            return { success: true };
        } catch (err) {
            return { success: false, error: 'Network error or invalid response' };
        }
    };

    return { submitEmail };
}
