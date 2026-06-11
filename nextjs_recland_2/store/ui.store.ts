"use client";

import { create } from "zustand";

type UIStore = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isScroll: boolean;
  setIsScroll: (value: boolean) => void;
  toggleMenu: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  isMenuOpen: false,
  isScroll: false,

  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  setIsScroll: (isScroll) => set({ isScroll }),

  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));
