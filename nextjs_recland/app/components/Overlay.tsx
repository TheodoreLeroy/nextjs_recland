'use client';

import { useUIStore } from '@/app/store/ui.store';

export default function Overlay() {
    const isMenuOpen = useUIStore(
        (state) => state.isMenuOpen
    );

    if (!isMenuOpen) return null;

    return <div className='bg-white'>Overlay</div>;
}