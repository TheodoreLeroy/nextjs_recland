'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/store/ui.store';

export function useScroll() {
    const setIsScroll =
        useUIStore(
            (state) =>
                state.setIsScroll
        );

    useEffect(() => {
        function handleScroll() {
            setIsScroll(
                window.scrollY > 50
            );
        }

        window.addEventListener(
            'scroll',
            handleScroll
        );

        return () => {
            window.removeEventListener(
                'scroll',
                handleScroll
            );
        };
    }, [setIsScroll]);
}