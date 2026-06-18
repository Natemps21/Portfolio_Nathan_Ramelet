'use client';

import { useEffect } from 'react';
import { useLocaleStore } from '@/lib/stores/localeStore';

export default function LangAttribute() {
  const locale = useLocaleStore((state) => state.locale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
