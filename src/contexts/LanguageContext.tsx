import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ar';

type LanguageContextValue = {
  language: Language;
  isArabic: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  tr: (english: string, arabic: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const getInitialLanguage = (): Language => {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang');
  if (queryLanguage === 'ar' || queryLanguage === 'en') return queryLanguage;
  return window.localStorage.getItem('portfolio-language') === 'ar' ? 'ar' : 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem('portfolio-language', nextLanguage);

    const url = new URL(window.location.href);
    if (nextLanguage === 'ar') url.searchParams.set('lang', 'ar');
    else url.searchParams.delete('lang');
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    isArabic: language === 'ar',
    setLanguage,
    toggleLanguage: () => setLanguage(language === 'ar' ? 'en' : 'ar'),
    tr: (english, arabic) => language === 'ar' ? arabic : english,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
};
