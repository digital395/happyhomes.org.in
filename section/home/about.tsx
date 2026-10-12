export default function AboutSection() {
  return (
    <section className="w-full bg-white px-3 py-4 md:px-5 md:py-10">
      <div className="relative z-20 mx-auto w-full max-w-300 px-5 pt-6 text-center sm:px-8 sm:pt-14 md:pt-16 lg:pt-12">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
          <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

          <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
            Brand Introduction
          </span>

          <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
        </div>

        <h2 className="mx-auto font-serif text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
          A New Chapter in Planned Living
        </h2>

        <p className="mx-auto mt-7 max-w-250 text-[13px] leading-[2.2] tracking-[0.5px] text-black md:text-[18px]">
          A home begins with a place. At Happy Homes, we believe that choosing
          the right place is the first step towards building a happy and secure
          future. We identify locations with strong growth potential,
          connectivity and developing infrastructure, and transform them into
          thoughtfully planned communities where families can build their dream
          homes and investors can look towards long-term appreciation.
        </p>
      </div>
    </section>
  );
}
