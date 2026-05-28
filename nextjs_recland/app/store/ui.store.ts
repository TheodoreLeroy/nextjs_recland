'use client';

import { create } from 'zustand';

type UIStore = {
    isMenuOpen: boolean;

    setIsMenuOpen: (
        value: boolean
    ) => void;


    toggleMenu: () => void;
};

export const useUIStore =
    create<UIStore>((set) => ({
        isMenuOpen: false,
        isScroll: false,

        setIsMenuOpen: (value) =>
            set({
                isMenuOpen: value,
            }),


        toggleMenu: () =>
            set((state) => ({
                isMenuOpen:
                    !state.isMenuOpen,
            })),
    }));