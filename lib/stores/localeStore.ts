import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Locale, LocaleState } from '@/types';

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: 'fr',
      setLocale: (locale: Locale) => set({ locale }),
    }),
    {
      name: 'portfolio-locale',
    }
  )
);
