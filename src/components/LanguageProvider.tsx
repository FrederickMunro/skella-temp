import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type LangCode = 0 | 1;

interface LanguageContextProps {
  langNum: LangCode;
  changeLangNum: () => void;
}

function detectBrowserLang(): LangCode {
  if (typeof navigator === "undefined") return 0;
  const locale = navigator.language || "fr";
  return locale.toLowerCase().startsWith("fr") ? 0 : 1;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [langNum, setLangNum] = useState<LangCode>(0);

  const changeLangNum = () => {
    if (langNum === 0) {
      setLangNum(1);
    } else {
      setLangNum(0);
    }
  }

  useEffect(() => {
    setLangNum(detectBrowserLang());
  }, []);

  return (
    <LanguageContext.Provider value={{ langNum, changeLangNum }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
