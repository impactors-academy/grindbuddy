import React from 'react';
import { useTranslation } from '../../i18n/I18nProvider';

export function LanguageSwitcher() {
  const { lang, setLang, t } = useTranslation();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="language-select" className="sr-only">{t('nav.language') ?? t('language.en')}</label>
      <select
        id="language-select"
        value={lang}
        onChange={(e) => setLang(e.target.value as any)}
        className="bg-transparent text-gray-300 border border-zinc-800 px-2 py-1 rounded"
      >
        <option value="en">{t('language.en')}</option>
        <option value="fr">{t('language.fr')}</option>
        <option value="ch">{t('language.ch')}</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
