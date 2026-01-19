import { useContext, useMemo, useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

import en from "./data/en.json";
import tr from "./data/tr.json";

import { LangContext } from "./contexts/LangContext.jsx";
import { ThemeContext } from "./contexts/ThemeContext.jsx";
import { postWorkintech } from "./services/api.js";

export default function App() {
  const { isTR, langAction } = useContext(LangContext);
  const { isDark } = useContext(ThemeContext);

  const t = useMemo(() => (isTR ? tr : en), [isTR]);

  const [remoteData, setRemoteData] = useState(null);
  const [apiStatus, setApiStatus] = useState({ loading: false, error: "" });

  useEffect(() => {
    
    if (langAction === 0) return;

    setApiStatus({ loading: true, error: "" });

    const payload = {
      selectedLang: isTR ? "TR" : "EN",
      selectedTheme: isDark ? "dark" : "light",
      mockData: isTR ? tr : en,
      sentAt: new Date().toISOString(),
    };

    postWorkintech(payload)
      .then((res) => {
        setRemoteData(res.data);
        setApiStatus({ loading: false, error: "" });
        console.log("REQRES POST OK:", res.data);
      })
      .catch((err) => {
        const message =
          err?.response?.status
            ? `API Hatası: ${err.response.status}`
            : `API Hatası: ${err.message}`;
        setApiStatus({ loading: false, error: message });
        console.log("REQRES POST ERROR:", message);
      });
  }, [langAction]); 

  return (
    <>
      <div className={isDark ? "min-h-screen bg-[#252128]" : "min-h-screen bg-white"}>
        <Header t={t} />
        <main>
          <Hero t={t} />
          <Skills t={t} />
          <Profile t={t} />
          <Projects t={t} />
        </main>
      </div>
      <Footer t={t} />
    </>
  );
}
