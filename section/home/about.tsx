export default function AboutSection() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-250 text-center">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
          <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

          <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
            ABOUT US
          </span>

          <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
        </div>

        <h2 className="font-serif text-[36px] leading-[1.15] font-normal text-[#781817] md:text-[45px]">
          A New Chapter in Planned Living
        </h2>

        <p className="mx-auto mt-7 max-w-800 text-[13px] leading-[2.2] font-normal tracking-[0.5px] text-[#777] md:text-[18px]">
          Happy Homes brings the experience and vision of the VIP City Group to
          Tamil Nadu. We focus on promising locations and thoughtfully planned
          developments and create communities that people can confidently call
          their own. With plans to expand across 8 more districts, Happy Homes
          is working towards a wider network of well-planned destinations for
          homebuyers and investors.
        </p>

        <div className="mt-12 flex justify-center">
          <img
            src="/image/logo/emperor-city.png"
            alt="Emperor City"
            className="h-auto w-40.25 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
