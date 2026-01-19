import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
import { LangContext } from "../contexts/LangContext.jsx";

export default function Header({ t }) {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { isTR, toggleLang } = useContext(LangContext);

  
  const mutedText = isDark
    ? "font-['Inter'] font-bold text-[14px] tracking-[0.10em] text-[#D9D9D9]"
    : "font-['Inter'] font-bold text-[14px] tracking-[0.10em] text-[#777777]";

  
  const langText = isDark
    ? "font-['Inter'] text-[14px] font-bold tracking-[0.10em] text-[#777777]"
    : "font-['Inter'] text-[14px] font-bold tracking-[0.10em] text-[#4731D3]";

  return (
    <header className="mx-auto w-full max-w-[1100px] px-6 pt-6">
      
      <div className="flex justify-end">
        <div className="flex items-center gap-3">
          
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={[
              "relative h-[20px] w-[44px] rounded-full",
              isDark ? "bg-[#3F3F46]" : "bg-[#4731D3]",
            ].join(" ")}
          >
            
            <span
              className={[
                "absolute top-1/2 -translate-y-1/2 grid place-items-center",
                "h-[14px] w-[14px] rounded-full",
                isDark ? "left-[4px] bg-transparent" : "left-[26px] bg-[#FFE86E]",
                "transition-all duration-200",
              ].join(" ")}
            >
              {isDark && (
              <span className="relative block h-[16px] w-[16px]">
  
           <span className="absolute inset-0 rounded-full bg-[#FFE86E]" />
           <span className="absolute left-[5px] top-[0px] h-[16px] w-[16px] rounded-full bg-[#3F3F46]" />
           </span>
      )}
            </span>
          </button>

          <span className={mutedText}>
          {isDark ? t.toggles.light : t.toggles.dark}
          </span>

          <span className={mutedText}>|</span>

          <button type="button" onClick={toggleLang} aria-label="Toggle language">
  <span className={langText}>
    {isTR ? t.toggles.toEN : t.toggles.toTR}
  </span>
          </button>
          </div>
          </div>

     
      <div className="mt-6 flex items-center">
        
        <div
          className={[
            "grid h-[62px] w-[62px] place-items-center rounded-full",
            isDark ? "bg-[#4731D3]" : "bg-[#EEEBFF]",
          ].join(" ")}
        >
          <span
            className={[
              "text-[24px] font-semibold",
              isDark ? "text-[#8F88FF]" : "text-[#7B61FF]",
            ].join(" ")}
            style={{ transform: "rotate(29deg)" }}
          >
            S
          </span>
        </div>

       
        <nav
          className={[
            "ml-auto grid grid-cols-[auto_auto_auto] items-center gap-x-[72px] text-sm",
            isDark ? "text-[#6B7280]" : "text-[#6B7280]",
          ].join(" ")}
        >
          <a href="#skills" className="hover:text-[#3730A3]">
            {t.nav.skills}
          </a>

          <a href="#projects" className="hover:text-[#3730A3]">
            {t.nav.projects}
          </a>

          
          <a
            href={`mailto:${t.footer.email}`}
            className={[
              "rounded-lg border px-6 py-2 font-semibold transition-colors",
              isDark
                ? "border-[#3730A3] bg-white text-[#3730A3] hover:bg-[#3730A3] hover:text-white"
                : "border-[#3730A3] bg-transparent text-[#3730A3] hover:bg-[#3730A3] hover:text-white",
            ].join(" ")}
          >
            {t.nav.hire}
          </a>
        </nav>
      </div>
    </header>
  );
}
