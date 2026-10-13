"use client";

import { highlights } from "@/data/highlight-emperor";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Highlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? highlights.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % highlights.length);
  };

  const item = highlights[activeIndex];

  return (
    <section className="w-full bg-white px-5 py-12 md:px-8 md:py-14 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-337.5">
        <motion.div
          className="mb-8 text-center sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 bg-linear-to-l from-[#781817] to-transparent sm:w-20 md:w-28" />

            <span className="font-poppins shrink-0 text-[10px] font-medium tracking-[2px] text-[#781817] uppercase sm:text-xs md:text-sm">
              OUR VALUES
            </span>

            <span className="h-px w-10 bg-linear-to-r from-[#781817] to-transparent sm:w-20 md:w-28" />
          </div>

          <motion.h2
            className="font-marcellus text-[25px] leading-tight font-normal text-[#781817] sm:text-3xl md:text-[40px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The principles behind every place we create
          </motion.h2>
        </motion.div>

        <div className="relative mx-auto mt-8 w-full max-w-350 sm:mt-10 lg:mt-12">
          <div className="overflow-hidden rounded-[14px] md:rounded-[18px]">
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <div
                className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-[14px] px-5 py-6 sm:min-h-80 sm:px-6 sm:py-7 md:min-h-125 md:rounded-[18px] md:px-12 md:py-10 lg:min-h-135"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[65%] bg-linear-to-t from-[#781817] via-[#781817]/70 to-transparent sm:h-[50%] md:h-[40%]" />

                <div className="relative z-10 w-full">
                  <h3
                    className="font-marcellus text-[21px] leading-tight font-semibold sm:text-[24px] md:text-[36px] lg:text-[40px]"
                    style={{
                      background:
                        "radial-gradient(36.25% 152.47% at 49.79% 50%, #FDEF63 0%, #FCEA5E 20%, #F9DB52 43%, #F4C33E 68%, #EEA222 94%, #EE9F20 97%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 max-w-[85%] text-[13px] leading-[1.45] font-normal text-white sm:max-w-125 sm:text-[15px] md:max-w-175 md:text-[18px] md:leading-[1.5]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous highlight"
            className="absolute top-1/2 left-[-15] z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#781817] shadow-md transition hover:bg-white sm:left-3 sm:size-10 md:left-5 md:size-14"
          >
            <ChevronLeft className="size-5 sm:size-5.5 md:size-7" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next highlight"
            className="absolute top-1/2 right-[-15] z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#781817] shadow-md transition hover:bg-white sm:right-3 sm:size-10 md:right-5 md:size-14"
          >
            <ChevronRight className="size-5 sm:size-5.5 md:size-7" />
          </button>

          <div className="mt-4 flex justify-center gap-1.5 sm:mt-5 sm:gap-2 md:mt-6">
            {highlights.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to highlight ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                  index === activeIndex
                    ? "w-6 bg-[#781817] sm:w-8"
                    : "w-1.5 bg-[#781817]/30 sm:w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
