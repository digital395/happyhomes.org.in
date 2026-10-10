"use client";

import Image from "next/image";

export default function Overview() {
  return (
    <>
      <section className="w-full bg-white px-4 py-3 pt-12 lg:px-10 lg:py-10">
        <div className="mx-auto w-full max-w-350">
          <div className="mb-7 text-center sm:mb-8 md:mb-10">
            <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
              <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

              <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] uppercase md:text-[14px] lg:text-[15px]">
                70 Acres. One Grand Vision
              </span>

              <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
            </div>

            <h2 className="mx-auto max-w-full text-center font-serif text-[25px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
              A LANDMARK TOWNSHIP IN TIRUNELVELI
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[65%_35%] md:gap-0">
            <div className="order-2 flex h-full flex-col justify-center md:order-1 md:pl-4 lg:pl-3 xl:pl-4">
              {" "}
              <p className="font-poppins max-w-400 text-[20px] leading-[1.55] font-bold text-[#781818] uppercase md:text-[34px]">
                Where Grand Living Meets a Greater Future
              </p>
              <p className="font-poppins mt-4 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:mt-5 md:text-[18px]">
                Emperor City is designed to redefine plotted community living in
                Tirunelveli. With 70 acres of thoughtfully planned development,
                the township brings together residential plots and
                lifestyle-oriented amenities in one integrated destination. From
                spacious plots and wide roads to a Grand Clubhouse, Senior
                Citizen Park and future-ready connectivity, every element is
                planned to create a more complete living experience.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 md:mt-10 md:grid-cols-4 md:gap-x-1 md:gap-y-6">
                {[
                  "70 ACRES",
                  "INTEGRATED TOWNSHIP",
                  "PREMIUM PLOTS",
                  "DESIGNED FOR DREAM HOMES",
                  "GRAND CLUBHOUSE",
                  "LIFESTYLE & COMMUNITY",
                  "WIDE ROADS",
                  "BETTER ACCESSIBILITY",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-1">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#EEA222] text-[#EEA222]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-5 w-5"
                      >
                        <path
                          d="m5 12 4 4L20 5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="font-poppins text-[10px] leading-tight font-bold text-[#781817] md:text-[12px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 mx-auto w-full max-w-112.5 overflow-hidden rounded-2xl md:order-2 md:mx-0">
              <div className="relative aspect-[1.08/1] w-full">
                <Image
                  src="/image/project/overview.webp"
                  alt="Happy family"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 400px, 400px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
