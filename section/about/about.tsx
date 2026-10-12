"use client";

import Image from "next/image";
import { about } from "@/data/about";

export default function About() {
  return (
    <section className="w-full bg-white px-4 py-3 pt-12 lg:px-10 lg:py-10">
      <div className="mx-auto w-full max-w-350">
        <div className="mb-7 text-center sm:mb-8 md:mb-10">
          <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
            <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

            <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
              About Us
            </span>

            <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
          </div>

          <h2 className="mx-auto max-w-full text-center font-serif text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
            Creating Places Where Futures Begin
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[35%_65%] md:gap-0">
          <div className="relative mx-auto w-full max-w-112.5 overflow-hidden rounded-2xl md:mx-0">
            <div className="relative aspect-[1.08/1] w-full">
              <Image
                src="/image/about/about.jpg"
                alt="Happy family"
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1024px) 400px, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="flex h-full flex-col justify-center md:pl-4 lg:pl-3 xl:pl-4">
            <p className="font-poppins max-w-400 text-[20px] leading-[1.55] font-bold text-[#781818] uppercase md:text-[34px]">
              AT HAPPY HOMES, WE BELIEVE THAT EVERY DREAM OF OWNING A HOME
              BEGINS WITH FINDING THE RIGHT PLACE.
            </p>

            <p className="font-poppins mt-4 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:mt-5 md:text-[18px]">
              We are a new-generation real estate brand focused on creating
              thoughtfully planned plotted developments in promising locations
              across Tamil Nadu. Our aim is to bring together the right
              location, smart planning, essential infrastructure and a
              customer-first approach to create spaces that people can
              confidently build their future around.
            </p>

            <p className="font-poppins mt-2 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:text-[18px]">
              As a sister concern of VIP City, Happy Homes builds on an
              established real estate experience while bringing a fresh
              perspective to plotted development.
            </p>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 md:mt-5">
          <p className="font-poppins w-full text-[14px] leading-[1.85] font-normal text-[#6f6f73] xl:text-[18px]">
            We are committed to identifying locations with strong connectivity,
            developing infrastructure and future potential, and transforming
            them into communities designed for both living and long-term value.
            For us, a plot is more than a piece of land. It is where a family
            can build its dream home, where memories can take shape and where a
            new chapter can begin. With a vision to expand across 8 more
            districts in Tamil Nadu, Happy Homes is steadily building a wider
            network of well-planned communities and creating opportunities for
            families and investors across the state.
          </p>
        </div>
      </div>
    </section>
  );
}
