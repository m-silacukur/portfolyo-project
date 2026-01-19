export default function Skills({ t }) {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-[1140px] px-6 pt-[120px]"
    >
      
      <h2
        className="
          font-['Inter']
          text-[48px]
          font-semibold
          leading-[48px]
          text-[#1F2937]
          dark:text-[#AEBCCF]
        "
      >
        {t.skills.title}
      </h2>

      
      <div className="mt-[48px] grid grid-cols-1 gap-[64px] md:grid-cols-3">
        {t.skills.items.map((item) => (
          <div key={item.name}>
            
            <h3
              className="
                font-['Inter']
                text-[24px]
                font-medium
                leading-[32px]
                text-[#4338CA]
                dark:text-[#B7AAFF]
              "
            >
              {item.name}
            </h3>

            <p
              className="
                mt-[16px]
                font-['Inter']
                text-[14px]
                leading-[24px]
                text-[#6B7280]
                dark:text-[#FFFFFF]
              "
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

