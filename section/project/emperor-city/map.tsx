"use client";

import Image from "next/image";
import { locationHighlights } from "@/data/location";

export default function Map() {
  return (
    <>
      <section className="w-full bg-white px-4 py-3 pt-12 lg:px-10 lg:py-10">
        <div className="mx-auto w-full max-w-350">
          <div className="mb-7 text-center sm:mb-8 md:mb-10">
            <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
              <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

              <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] uppercase md:text-[14px] lg:text-[15px]">
                LOCATION HIGHLIGHTS
              </span>

              <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
            </div>

            <h2 className="mx-auto max-w-full text-center font-serif text-[25px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
              Right Next to a Thriving Neighbourhood
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6">
            <div className="order-2 flex h-full flex-col justify-center md:order-1 md:pl-4 lg:pl-3 xl:pl-4">
             
              <p className="font-poppins mt-4 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:mt-5 md:text-[18px]">
                Emperor City is designed to redefine plotted community living in
                Tirunelveli. With 70 acres of thoughtfully planned development,
                the township brings together residential plots and
                lifestyle-oriented amenities in one integrated destination. From
                spacious plots and wide roads to a Grand Clubhouse, Senior
                Citizen Park and future-ready connectivity, every element is
                planned to create a more complete living experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 md:mt-14">
         

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {locationHighlights.map((location, index) => (
              <div
                key={`${location.title}-${index}`}
                className="group relative aspect-square w-full overflow-hidden rounded-[20px]"
              >
                <Image
                  src={location.image}
                  alt={location.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute right-0 bottom-0 left-0 p-4">
                  <h4
                    className="font-serif text-[18px]"
                    style={{
                      background:
                        "radial-gradient(36.25% 152.47% at 49.79% 50%, #FDEF63 0%, #FCEA5E 20%, #F9DB52 43%, #F4C33E 68%, #EEA222 94%, #EE9F20 97%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {location.title}
                  </h4>

                  <p className="mt-2 text-[14px] leading-[1.6] text-white">
                    {location.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
