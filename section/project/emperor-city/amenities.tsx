"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { amenities } from "@/data/amenities";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Amenities() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const total = amenities.length;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const updateScreenSize = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  const previous = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  const next = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  useEffect(() => {
    if (total <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  const cardTransition = shouldReduceMotion
    ? { duration: 0 }
    : {
        type: "spring" as const,
        stiffness: 150,
        damping: 24,
        mass: 0.8,
      };

  return (
    <section className="w-full overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto mb-8 w-full px-4 text-center sm:mb-12">
        <motion.div
          className="mb-3 flex items-center justify-center gap-3 md:mb-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.7,
            ease,
          }}
        >
          <motion.span
            className="h-px w-10 origin-right bg-linear-to-l from-[#781817] to-transparent sm:w-16 md:w-24"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease,
              delay: shouldReduceMotion ? 0 : 0.15,
            }}
          />

          <span className="font-poppins shrink-0 text-xs tracking-widest text-[#781817] uppercase sm:text-sm">
            Amenities
          </span>

          <motion.span
            className="h-px w-10 origin-left bg-linear-to-r from-[#781817] to-transparent sm:w-16 md:w-24"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              ease,
              delay: shouldReduceMotion ? 0 : 0.15,
            }}
          />
        </motion.div>

        <motion.h2
          className="font-marcellus text-[25px] leading-tight font-normal text-[#781817] sm:text-3xl md:text-[40px]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
        >
          LIVE, WALK, RELAX &amp; RECONNECT
        </motion.h2>
      </div>

      <motion.div
        className="relative mx-auto flex h-85 w-full max-w-350 items-center justify-center overflow-hidden sm:h-97.5 md:h-120 lg:h-135"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.9,
          ease,
          delay: shouldReduceMotion ? 0 : 0.15,
        }}
      >
        <motion.button
          type="button"
          onClick={previous}
          aria-label="Previous amenity"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.12 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute top-1/2 left-3 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#781817] text-2xl text-white shadow-lg transition-colors duration-300 hover:bg-[#5d1110] sm:left-5 md:left-2 lg:left-0"
        >
          &#8249;
        </motion.button>

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
                x: isMobile ? "0%" : `${position * 78}%`,

                scale: isMobile
                  ? 1
                  : isActive
                    ? 1
                    : distance === 1
                      ? 0.82
                      : 0.68,

                y: isMobile ? 0 : isActive ? 0 : distance === 1 ? 18 : 10,

                opacity: isMobile ? (isActive ? 1 : 0) : isVisible ? 1 : 0,
              }}
              transition={cardTransition}
              onClick={() => setActiveIndex(index)}
              style={{
                zIndex: total - distance,
                pointerEvents: isActive ? "auto" : "none",
                willChange: "transform, opacity",
              }}
              className="absolute h-70 w-55 cursor-pointer overflow-hidden rounded-[25px] shadow-sm sm:h-80 sm:w-67.5 md:h-95 md:w-95 lg:h-105 lg:w-105"
              aria-label={item.title}
              aria-current={isActive ? "true" : undefined}
            >
              <motion.div
                className="absolute inset-0"
                initial={false}
                animate={{ scale: isActive ? 1 : 1.02 }}
                whileHover={
                  isActive && !shouldReduceMotion ? { scale: 1.045 } : undefined
                }
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.65,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt ?? item.title}
                  fill
                  sizes="(max-width: 639px) 220px, (max-width: 767px) 270px, (max-width: 1023px) 380px, 420px"
                  priority={isActive}
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"
                animate={{
                  opacity: isActive ? 0.35 : 0.7,
                }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.5,
                  ease: "easeInOut",
                }}
              />
            </motion.article>
          );
        })}

        <motion.button
          type="button"
          onClick={next}
          aria-label="Next amenity"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.12 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute top-1/2 right-3 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#781817] text-2xl text-white shadow-lg transition-colors duration-300 hover:bg-[#5d1110] sm:right-5 md:right-2 lg:right-0"
        >
          &#8250;
        </motion.button>
      </motion.div>
    </section>
  );
}
