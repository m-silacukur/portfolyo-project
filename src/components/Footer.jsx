import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

export default function Footer({ t }) {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer className={isDark ? "bg-[#141414]" : "bg-[#F9F9F9]"}>
      
      <div className="mx-auto w-full max-w-[1140px] px-6 py-[85px]">
        
        <div>
          <h2
            className="
              w-full max-w-[540px]
              font-['Inter']
              text-[42px]
              font-semibold
              leading-[125%]
              text-[#1F2937]
              dark:text-[#AEBCCF]
              whitespace-pre-line
            "
          >
            {t.footer.headline}
          </h2>
        </div>

      
        <div
          className="
            mt-[56px]
            flex flex-col gap-6
            md:flex-row md:items-center md:justify-between
          "
        >
         
          <a
            href={`mailto:${t.footer.email}`}
            className="
              inline-flex items-center gap-[2px]
              font-['Inter']
              text-[20px]
              font-medium
              leading-[100%]
              tracking-[0.05em]
              text-[#AF0C48]
              underline
              dark:text-[#BAB2E7]
            "
          >
            <span aria-hidden="true">👉</span>
            <span>{t.footer.email}</span>
          </a>

      
          <div className="flex items-center gap-[20px]">
            {t.footer.links.map((l) => {
            
              const colorByLabel = (label) => {
                const key = label.toLowerCase();
                if (key.includes("personal")) return isDark ? "#E1E1FF" : "#0A0A14";
                if (key.includes("github")) return isDark ? "#17D18B" : "#00AB6B";
                if (key.includes("linkedin")) return isDark ? "#0BA6F6" : "#0077B5";
                return isDark ? "#E1E1FF" : "#0A0A14";
              };

              return (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    font-['Inter']
                    text-[18px]
                    font-medium
                    leading-[150%]
                    tracking-[0.01em]
                    hover:underline
                  "
                  style={{ color: colorByLabel(l.label) }}
                >
                  {l.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
