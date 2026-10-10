const features = [
  { icon: "⌂", title: "Premium", subtitle: "Plots" },
  { icon: "▦", title: "Well Planned", subtitle: "Community" },
  { icon: "⌖", title: "Strategic", subtitle: "Location" },
  { icon: "♧", title: "Great", subtitle: "Investment" },
];

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f8f3eb]">
      {/* Main hero image */}
      <div
        className="absolute inset-0 bottom-[74px] bg-cover bg-[center_55%] md:bottom-[92px]"
        style={{
          backgroundImage: "url('/image/home/hero.webp')",
        }}
      />

      {/* White fade behind the headline */}
      <div className="absolute inset-0 bottom-[74px] bg-gradient-to-r from-white via-white/95 via-[23%] to-transparent md:bottom-[92px] md:via-white/80 md:via-[34%]" />

      {/* Soft lower fade */}
      <div className="absolute inset-x-0 bottom-[74px] h-20 bg-gradient-to-t from-white/30 to-transparent md:bottom-[92px]" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex h-[340px] w-full max-w-[1520px] items-center px-6 sm:h-[400px] md:h-[558px] md:px-[5.4%] lg:px-[5.4%]">
        <div className="w-full max-w-[570px] pt-1 text-left">
          <p className="mb-2 text-[9px] font-medium tracking-[0.28em] text-[#741b19] sm:text-[10px] md:mb-3 md:text-[11px] md:tracking-[0.38em]">
            A BRIGHTER TOMORROW BEGINS HERE
          </p>

          <h1 className="font-serif text-[36px] leading-[1.02] font-normal tracking-[-0.035em] text-[#691715] sm:text-[43px] md:text-[54px] lg:text-[64px]">
            DREAM HOME
            <br />
            COME TO REAL
          </h1>

          <p className="mt-2 max-w-[310px] text-[8px] leading-[1.5] text-[#6f3b35] sm:text-[9px] md:max-w-[340px] md:text-[10px]">
            PREMIUM PLOTS IN A WELL-PLANNED COMMUNITY, DESIGNED
            <br className="hidden sm:block" />
            FOR YOUR DREAM HOME AND A BETTER TOMORROW.
          </p>

          <a
            href="/project"
            className="mt-5 inline-flex min-h-9 items-center justify-center bg-[#741b19] px-5 text-[9px] font-medium text-[#e5c27b] transition-colors duration-300 ease-in-out hover:bg-[#53110f] md:mt-6 md:min-h-10 md:px-6 md:text-[10px]"
          >
            EXPLORE PLOTS
          </a>
        </div>
      </div>

      {/* Bottom feature strip */}
      <div className="relative z-20 min-h-[74px] border-t-2 border-dotted border-[#d6b16c] bg-[#791b18] md:min-h-[92px]">
        <div className="mx-auto grid min-h-[72px] w-full max-w-[1520px] grid-cols-2 items-center gap-y-2 px-5 py-3 sm:grid-cols-4 sm:px-8 md:min-h-[90px] md:px-[5.4%]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center justify-center gap-2.5 text-white sm:justify-start md:gap-3"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/90 font-serif text-lg text-white md:size-10">
                {feature.icon}
              </span>

              <p className="text-[12px] leading-[1.2] font-normal sm:text-[13px] md:text-[15px]">
                {feature.title}
                <br />
                {feature.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
