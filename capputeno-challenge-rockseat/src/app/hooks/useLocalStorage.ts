'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string) {
    const [value, setValue] = useState<T>();

    useEffect(() => {
        if (!window) return;

        const item = window.localStorage.getItem(key);
        if (item) setValue(JSON.parse(item));
    }, [key]);

    const updateItem = (newValue: T) => {
        setValue(newValue);
        window?.localStorage.setItem(key, JSON.stringify(newValue));
    };

    return { value, updateItem };
}
