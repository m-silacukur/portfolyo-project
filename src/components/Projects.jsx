import project1 from "../assets/projects-1.png";
import project2 from "../assets/projects-2.png";
import project3 from "../assets/projects-3.png";

export default function Projects({ t }) {
  const images = [project1, project2, project3];

  return (
    <section id="projects" className="mx-auto w-full max-w-[1140px] px-6 pt-16 pb-[140px]">

      <div className="h-[1px] w-full bg-[#BAB2E7]" />

      <h2
        className="
          mt-16
          font-['Inter']
          text-[48px]
          font-semibold
          leading-[48px]
          text-[#1F2937]
          dark:text-[#AEBCCF]
        "
      >
        {t.projects.title}
      </h2>

     <div
         className="
          mt-20
          grid
          grid-cols-1
          gap-y-20
         lg:grid-cols-3
         lg:gap-x-[120px]
         "
       >
        {t.projects.items.map((p, idx) => (
         <article key={p.title} className="flex w-full flex-col justify-between transition-shadow duration-300 hover:shadow-xl hover:scale-110 rounded-[12px] p-2">
         
            <div
              className="
                h-[180px]
                w-full
                overflow-hidden
                rounded-[12px]
                bg-[#F3F4F6]
                dark:bg-[#2B2B33]
              "
            >
              <img
                src={images[idx]}
                alt={p.title}
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>

            <h3
              className="
                mt-[18px]
                font-['Inter']
                text-[30px]
                font-medium
                leading-[28px]
                text-[#4338CA]
                dark:text-[#CFCBFF]
              "
            >
              {p.title}
            </h3>

           
            <p
              className="
                mt-[18px]
                min-h-[96px]
                font-['Inter']
                text-[14px]
                font-normal
                leading-[125%]
                text-[#6B7280]
                dark:text-white
              "
            >
              {p.desc}
            </p>

           <div className="mt-[18px] flex flex-wrap gap-[6px] h-[64px] content-start">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    inline-flex
                    items-center
                    rounded-[4px]
                    border
                    px-[18px]
                    py-[6px]
                    font-['Inter']
                    text-[13px]
                    font-medium
                    leading-[14px]
                    text-[#3730A3]
                    border-[#3730A3]
                    bg-white
                    dark:bg-[#383838]
                    dark:border-[#8F88FF]
                    dark:text-[#8F88FF]
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-[18px] flex w-full justify-between">
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  font-['Inter']
                  text-[16px]
                  font-medium
                  leading-[16px]
                  underline
                  text-[#3730A3]
                  dark:text-[#E1E1FF]
                "
              >
                {p.github}
              </a>

              <a
                href={p.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  font-['Inter']
                  text-[16px]
                  font-medium
                  leading-[16px]
                  underline
                  text-[#3730A3]
                  dark:text-[#E1E1FF]
                "
              >
                {p.site}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
