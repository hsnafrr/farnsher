import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang } from '../i18n/translations';

type Theme = 'light' | 'dark';

interface AppContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: typeof translations['en'];
  activePage: string;
  setActivePage: (p: string) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [theme]);

  const t = translations[lang];

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t, activePage, setActivePage }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
