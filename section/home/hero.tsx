import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Image */}
      <div className="relative h-37.5 w-full sm:h-70 md:h-105 lg:h-120">
        <Image
          src="/image/home/hero.webp"
          alt="Premium plots in Tirunelveli"
          fill
          priority
          sizes="100vw"
          className="object-contain object-center md:object-cover md:object-center"
        />

        {/* White fade — desktop only */}
        <div className="absolute inset-0 hidden bg-linear-to-r from-white via-white/70 via-5% to-transparent md:block" />

        {/* Hero content — desktop/tablet only */}
        <div className="absolute inset-0 z-10 mx-auto hidden w-full max-w-380 items-center px-6 sm:px-8 md:flex md:px-[5.4%]">
          <div className="w-full max-w-142.5 text-left">
            <p className="mb-3 text-[11px] font-medium tracking-[0.38em] text-[#741b19]">
              A BRIGHTER TOMORROW BEGINS HERE
            </p>

            <h1 className="font-serif text-[54px] leading-[1.02] font-normal tracking-[-0.035em] text-[#691715] lg:text-[64px]">
              DREAM HOME
              <br />
              COME TO REAL
            </h1>

            <p className="mt-2 max-w-85 text-[10px] leading-normal text-[#6f3b35]">
              PREMIUM PLOTS IN A WELL-PLANNED COMMUNITY, DESIGNED
              <br />
              FOR YOUR DREAM HOME AND A BETTER TOMORROW.
            </p>

            <a
              href="/project"
              className="mt-6 inline-flex min-h-10 items-center justify-center bg-[#741b19] px-6 text-[10px] font-medium text-[#e5c27b] transition-colors duration-300 hover:bg-[#53110f]"
            >
              EXPLORE PLOTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
