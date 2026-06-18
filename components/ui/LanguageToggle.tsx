'use client';

import { useLocaleStore } from '@/lib/stores/localeStore';
import type { Locale } from '@/types';

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const locale = useLocaleStore((state) => state.locale);
  const setLocale = useLocaleStore((state) => state.setLocale);

  const setLanguage = (next: Locale) => {
    if (next !== locale) setLocale(next);
  };

  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-black/40 p-0.5 backdrop-blur-sm ${className}`}
      role="group"
      aria-label={locale === 'fr' ? 'Changer la langue' : 'Switch language'}
    >
      {(['fr', 'en'] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
            locale === lang
              ? 'bg-nebula-cyan/20 text-nebula-cyan border border-nebula-cyan/40'
              : 'text-slate-400 hover:text-white'
          }`}
          aria-pressed={locale === lang}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
