import { useState, useEffect } from 'react';

const useToast = () => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, duration = 3000) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message }]);

        setTimeout(() => {
            removeToast(id);
        }, duration);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    useEffect(() => {
        // Optional: Handle any side effects when toasts change
    }, [toasts]);

    return { toasts, addToast, removeToast };
};

export default useToast;