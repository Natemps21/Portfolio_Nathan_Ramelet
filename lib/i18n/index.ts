'use client';

import { useLocaleStore } from '@/lib/stores/localeStore';
import { ui, type UIStrings } from './ui';

export function useUI(): UIStrings {
  const locale = useLocaleStore((state) => state.locale);
  return ui[locale];
}

export function useLocale() {
  return useLocaleStore((state) => state.locale);
}
