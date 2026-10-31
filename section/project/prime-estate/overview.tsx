"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { overview } from "@/data/overview-prime";

export default function Overview() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let animationFrame = 0;
    let previousTime = 0;

    const speed = 35;

    const animate = (time: number) => {
      if (previousTime && !paused) {
        const delta = Math.min(time - previousTime, 40);
        gallery.scrollLeft += (speed * delta) / 1000;

        const halfway = gallery.scrollWidth / 2;
        if (gallery.scrollLeft >= halfway) {
          gallery.scrollLeft -= halfway;
        }
      }

      previousTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  const scrollingItems = [...overview, ...overview];

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto mb-8 w-full max-w-375 px-4 text-center sm:mb-10 sm:px-6 md:px-8">
        <motion.div
          className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4"
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <span className="h-px w-10 bg-linear-to-l from-[#781817] to-transparent sm:w-16 md:w-24 lg:w-28" />

          <span className="shrink-0 font-serif text-[10px] tracking-[1px] text-[#781817] sm:text-xs md:text-sm">
            WHERE GRAND LIVING TAKES SHAPE

          </span>

          <span className="h-px w-10 bg-linear-to-r from-[#781817] to-transparent sm:w-16 md:w-24 lg:w-28" />
        </motion.div>

        <motion.h2
          className="font-marcellus mx-auto max-w-full text-[25px] leading-[1.12] font-normal text-[#781817] sm:text-3xl md:text-[40px]"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          A LANDMARK ADDRESS IN TRICHY
        </motion.h2>
      </div>

      <div
        ref={galleryRef}
        className="overflow-x-auto overflow-y-hidden overscroll-x-contain"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        tabIndex={0}
        aria-label="Township amenities gallery"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex w-max items-start gap-4 px-4 sm:gap-6 sm:px-6 lg:gap-7 lg:px-8">
          {scrollingItems.map((item, index) => {
            const isSquare = item.shape === "square";

            return (
              <motion.article
                key={`${item.title}-${index}`}
                className="w-70 shrink-0 self-start sm:w-[320px] md:w-90 lg:w-100"
                aria-hidden={index >= overview.length}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.6,
                  delay: (index % overview.length) * 0.08,
                }}
              >
                <div
                  className={`group relative w-full overflow-hidden rounded-t-xl rounded-b-xl bg-[#f4f0eb] sm:rounded-t-2xl sm:rounded-b-2xl ${
                    isSquare ? "aspect-square" : "aspect-[1.35/1]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 639px) 280px, (max-width: 767px) 320px, (max-width: 1023px) 360px, 400px"
                    className="rounded-[inherit] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <h3 className="font-poppins mt-3 text-sm font-normal text-[#424242] sm:mt-4 sm:text-base md:text-lg">
                  {item.title}
                </h3>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
