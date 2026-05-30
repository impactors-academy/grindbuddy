import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import en from './dictionary/en.json';
import fr from './dictionary/fr.json';
import ch from './dictionary/ch.json';

type Lang = 'en' | 'fr' | 'ch';

const DICTS: Record<Lang, any> = {
  en,
  fr,
  ch,
};

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const stored = (typeof window !== 'undefined' && localStorage.getItem('gb_lang')) as Lang | null;
  const [lang, setLangState] = useState<Lang>(stored || 'en');

  const setLang = (l: Lang) => {
    try {
      localStorage.setItem('gb_lang', l);
    } catch {}
    setLangState(l);
  };

  const t = (key: string, fallback?: string) => {
    const dict = DICTS[lang] || DICTS['en'];
    const parts = key.split('.');
    let cur: any = dict;
    for (const p of parts) {
      if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
        cur = cur[p];
      } else {
        cur = undefined;
        break;
      }
    }
    if (cur === undefined || cur === null) {
      // Strict mode: do not fallback to English.
      // Return explicit fallback if provided, otherwise return the key so missing translations are visible.
      return fallback ?? key;
    }
    if (typeof cur === 'string') return cur;
    return JSON.stringify(cur);
  };

  const value = useMemo(() => ({ lang, setLang, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useTranslation must be used within I18nProvider');
  return ctx;
}

export default I18nProvider;
