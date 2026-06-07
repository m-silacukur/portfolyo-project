import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext.jsx";

import heroImg from "../assets/hero.png";
import githubLight from "../assets/github-light.png";
import githubDark from "../assets/github-dark.png";
import linkedinLight from "../assets/LinkedIn-light.png";
import linkedinDark from "../assets/LinkedIn-dark.png";

export default function Hero({ t }) {
  const { isDark } = useContext(ThemeContext);

  const githubIcon = isDark ? githubDark : githubLight;
  const linkedinIcon = isDark ? linkedinDark : linkedinLight;

  const nameLineColor = isDark ? "border-[#B7AAFF]" : "border-[#3730A3]";
  const nameTextColor = isDark ? "text-[#B7AAFF]" : "text-[#4338CA]";

  const titleColor = isDark ? "text-[#AEBCCF]" : "text-[#1F2937]";
  const descColor = isDark ? "text-[#FFFFFF]" : "text-[#6B7280]";

  const hireBg = isDark ? "bg-[#E1E1FF]" : "bg-[#3730A3]";
  const hireText = isDark ? "text-[#000000]" : "text-white";

  const socialBg = isDark ? "bg-[#383838]" : "bg-white";
  const socialBorder = isDark ? "border-[#E1E1FF]" : "border-[#3730A3]";
  const socialText = isDark ? "text-[#E1E1FF]" : "text-[#3730A3]";

  return (
    <section className="mx-auto w-full max-w-[1140px] px-6 pt-[70px]">
      <div className="grid grid-cols-1 gap-[68px] lg:grid-cols-2">
       
        <div className="w-full lg:w-[596px]">
          <div className="flex items-center gap-[24px]">
            <div className={`w-[102px] border-t ${nameLineColor}`} />
            <span
              className={`font-['Inter'] text-[20px] font-medium leading-[28px] ${nameTextColor}`}
            >
              {t.hero.name}
            </span>
          </div>

          <h1
            className={`mt-[54px] font-['Inter'] text-[72px] font-bold leading-[72px] ${titleColor}`}
          >
            {t.hero.title1}
            <br />
            {t.hero.title2}
          </h1>

          <p
            className={`mt-[40px] max-w-[553px] font-['Inter'] text-[18px] leading-[28px] ${descColor}`}
          >
            {t.hero.desc}
          </p>

          <div className="mt-[40px] flex gap-[12px]">
          
            <a
              href={`mailto:${t.footer.email}`}
              className={`inline-flex h-[52px] items-center justify-center rounded-[6px] px-[32px] text-[18px] font-medium ${hireBg} ${hireText}`}
            >
              {t.hero.cta}
            </a>

           
            <a
              href="https://github.com/m-silacukur"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex h-[52px] items-center gap-[10px] rounded-[6px] border px-[20px] ${socialBorder} ${socialBg}`}
            >
              <img src={githubIcon} alt="github" className="h-[26px] w-[26px]" />
              <span className={`text-[18px] font-medium ${socialText}`}>
                {t.hero.github}
              </span>
            </a>

            
            <a
              href="https://www.linkedin.com/in/meryem-s%C4%B1la-%C3%A7ukur-73409227a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex h-[52px] items-center gap-[10px] rounded-[6px] border px-[20px] ${socialBorder} ${socialBg}`}
            >
              <img
                src={linkedinIcon}
                alt="linkedin"
                className="h-[25px] w-[24px]"
              />
              <span className={`text-[18px] font-medium ${socialText}`}>
                {t.hero.linkedin}
              </span>
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end mt-[35px]">
          <div
            className="h-[375px] w-[476px] overflow-hidden rounded-[18px]
            shadow-[0_18px_88px_-4px_rgba(24,39,75,0.14),0_8px_28px_-6px_rgba(24,39,75,0.12)]"
          >
            <img
              src={heroImg}
              alt="hero"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
