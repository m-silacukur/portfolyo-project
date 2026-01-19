export default function Profile({ t }) {
  return (
    <section id="profile" className="mx-auto w-full max-w-[1140px] px-6 pt-16">
      <div className="h-[1px] w-full bg-[#BAB2E7]" />

      <h2 className="mt-16 font-['Inter'] text-[48px] font-semibold leading-[48px] text-[#1F2937] dark:text-[#AEBCCF]">
        {t.profile.title}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-y-12 lg:grid-cols-[400px_520px] lg:gap-x-[120px]">
        
        <div>
          <h3 className="font-['Inter'] text-[30px] font-medium leading-[28px] text-[#4338CA] dark:text-[#B7AAFF]">
            {t.profile.leftTitle}
          </h3>

          <div className="mt-8 grid grid-cols-[190px_1fr] gap-y-4">
            {t.profile.fields.map((f) => (
              <div key={f.label} className="contents">
                <div className="font-['Inter'] text-[18px] font-semibold leading-[200%] tracking-[1%] text-black dark:text-white">
                  {f.label}
                </div>
                <div className="font-['Inter'] text-[18px] font-normal leading-[200%] tracking-[1%] text-black dark:text-white">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-['Inter'] text-[30px] font-medium leading-[28px] text-[#4338CA] dark:text-[#B7AAFF]">
            {t.profile.aboutTitle}
          </h3>

          <p className="mt-8 font-['Inter'] text-[18px] font-normal leading-[200%] tracking-[1%] text-[#6B7280] dark:text-white">
            {t.profile.about}
          </p>
        </div>
      </div>
    </section>
  );
}
