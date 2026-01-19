import { createContext, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

export const LangContext = createContext();

export default function LangProvider({ children }) {
  const [lang, setLang] = useLocalStorage("lang", "EN"); 
  const isTR = lang === "TR";

  
  const [langAction, setLangAction] = useState(0);

  const toggleLang = () => {
    setLang((l) => (l === "TR" ? "EN" : "TR"));
    setLangAction((n) => n + 1); 
  };

  const value = useMemo(
    () => ({
      lang,
      isTR,
      toggleLang,
      langAction,
    }),
    [lang, isTR, langAction]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
