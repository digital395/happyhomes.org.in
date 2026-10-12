"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { amenities } from "@/data/amenities";

export default function Amenities() {
  const [activeIndex, setActiveIndex] = useState(2);

  const total = amenities.length;

  const previous = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto mb-8 w-full px-4 text-center sm:mb-12">
        <motion.div
          className="mb-3 flex items-center justify-center gap-3 md:mb-4"
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="h-px w-10 bg-linear-to-l from-[#781817] to-transparent sm:w-16 md:w-24" />

          <span className="shrink-0 font-serif text-xs tracking-widest text-[#781817] uppercase sm:text-sm">
            Amenities
          </span>

          <span className="h-px w-10 bg-linear-to-r from-[#781817] to-transparent sm:w-16 md:w-24" />
        </motion.div>

        <motion.h2
          className="font-marcellus text-[25px] leading-tight font-normal text-[#781817] sm:text-3xl md:text-[40px]"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          LIVE, WALK, RELAX & RECONNECT
        </motion.h2>
      </div>

      <div className="relative mx-auto flex h-85 w-full max-w-350 items-center justify-center overflow-hidden sm:h-97.5 md:h-120 lg:h-135">
        <button
          type="button"
          onClick={previous}
          aria-label="Previous amenity"
          className="absolute top-1/2 left-3 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#781817] text-white shadow-md transition hover:bg-[#5d1110] sm:left-5 md:left-2 lg:left-0"
        >
          &#8249;
        </button>
        {amenities.map((item, index) => {
          const offset = (index - activeIndex + total) % total;
          const position =
            offset > Math.floor(total / 2) ? offset - total : offset;

          const distance = Math.abs(position);
          const isActive = position === 0;
          const isVisible = distance <= 2;

          return (
            <motion.article
              key={`${item.title}-${index}`}
              initial={false}
              animate={{
                x:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? "0%"
                    : `${position * 78}%`,
                scale:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? 1
                    : isActive
                      ? 1
                      : distance === 1
                        ? 0.82
                        : 0.68,
                y:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? 0
                    : isActive
                      ? 0
                      : distance === 1
                        ? 18
                        : 10,
                opacity:
                  typeof window !== "undefined" && window.innerWidth < 640
                    ? isActive
                      ? 1
                      : 0
                    : isVisible
                      ? 1
                      : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 170,
                damping: 25,
              }}
              onClick={() => setActiveIndex(index)}
              style={{
                zIndex: total - distance,
                pointerEvents: isActive ? "auto" : "none",
              }}
              className="absolute h-70 w-55 cursor-pointer overflow-hidden rounded-[25px] shadow-sm sm:h-80 sm:w-67.5 md:h-95 md:w-95 lg:h-105 lg:w-105"
              aria-label={item.title}
              aria-current={isActive ? "true" : undefined}
            >
              <Image
                src={item.image}
                alt={item.alt ?? item.title}
                fill
                sizes="(max-width: 639px) 220px, (max-width: 767px) 270px, (max-width: 1023px) 380px, 420px"
                priority={isActive}
                className="object-cover"
              />
            </motion.article>
          );
        })}
        <button
          type="button"
          onClick={next}
          aria-label="Next amenity"
          className="absolute top-1/2 right-3 z-30 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#781817] text-white shadow-md transition hover:bg-[#5d1110] sm:right-5 md:right-2 lg:right-0"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
