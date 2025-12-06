import { create } from 'zustand';
import { MenuState } from '@/types';

export const useMenuStore = create<MenuState>((set) => ({
  isOpen: false,
  isExpanded: false,
  activeSection: null,
  
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setExpanded: (isExpanded) => set({ isExpanded }),
  setActiveSection: (activeSection) => set({ activeSection }),
  close: () => set({ isOpen: false, isExpanded: false }),
}));













