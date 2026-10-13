"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { values } from "@/data/values";

const ease = [0.22, 1, 0.36, 1] as const;
const AUTO_SCROLL_DELAY = 4000;

export default function Values() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const duration = shouldReduceMotion ? 0.01 : 0.85;

  const getVisibleCards = useCallback(() => {
    if (typeof window === "undefined") return 1;
    return window.innerWidth >= 768 ? 2 : 1;
  }, []);

  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(getVisibleCards());
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, [getVisibleCards]);

  const maxIndex = Math.max(0, values.length - visibleCards);

  const scrollToCard = useCallback(
    (index: number) => {
      const container = carouselRef.current;
      if (!container) return;

      const cards = Array.from(container.children) as HTMLElement[];
      const card = cards[index];

      if (!card) return;

      container.scrollTo({
        left: card.offsetLeft,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });

      setActiveIndex(index);
    },
    [shouldReduceMotion],
  );

  const next = useCallback(() => {
    setActiveIndex((current) => {
      const nextIndex = current >= maxIndex ? 0 : current + 1;

      const container = carouselRef.current;
      const card = container?.children[nextIndex] as HTMLElement | undefined;

      if (container && card) {
        container.scrollTo({
          left: card.offsetLeft,
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      }

      return nextIndex;
    });
  }, [maxIndex, shouldReduceMotion]);

  const previous = useCallback(() => {
    setActiveIndex((current) => {
      const previousIndex = current <= 0 ? maxIndex : current - 1;

      const container = carouselRef.current;
      const card = container?.children[previousIndex] as
        HTMLElement | undefined;

      if (container && card) {
        container.scrollTo({
          left: card.offsetLeft,
          behavior: shouldReduceMotion ? "auto" : "smooth",
        });
      }

      return previousIndex;
    });
  }, [maxIndex, shouldReduceMotion]);

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (shouldReduceMotion || values.length <= visibleCards) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = current >= maxIndex ? 0 : current + 1;

        const container = carouselRef.current;
        const card = container?.children[nextIndex] as HTMLElement | undefined;

        if (container && card) {
          container.scrollTo({
            left: card.offsetLeft,
            behavior: "smooth",
          });
        }

        return nextIndex;
      });
    }, AUTO_SCROLL_DELAY);

    return () => window.clearInterval(interval);
  }, [maxIndex, shouldReduceMotion, visibleCards]);

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards.length) return;

    const scrollLeft = container.scrollLeft;

    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - scrollLeft);

      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex(Math.min(nearestIndex, maxIndex));
  };

  if (!values.length) return null;

  return (
    <section className="w-full overflow-hidden bg-white px-5 py-16 md:px-2 md:py-16 lg:py-20">
      <div className="mx-auto max-w-337.5">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration, ease }}
          className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4"
        >
          <motion.span
            initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration, ease }}
            style={{ originX: 1 }}
            className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28"
          />

          <span className="font-poppins shrink-0 text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
            OUR VALUES
          </span>

          <motion.span
            initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration, ease }}
            style={{ originX: 0 }}
            className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 1,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease,
          }}
          className="font-marcellus mx-auto max-w-full text-center text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]"
        >
          The principles behind every place we create
        </motion.h2>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease,
            }}
            className="flex w-full shrink-0 flex-col justify-end md:w-[31%]"
          >
            <div className="flex items-end gap-2">
              <motion.span
                key={activeIndex}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 12,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration, ease }}
                className="font-marcellus text-[50px] leading-[0.8] font-normal tracking-[-5px] text-[#781817] md:text-[68px]"
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>

              <span className="font-marcellus text-[30px] leading-[0.8] font-normal tracking-[-5px] text-[#781817] md:text-[50px]">
                /
              </span>

              <span className="font-marcellus text-[30px] leading-[0.8] font-normal tracking-[-5px] text-[#781817] md:text-[40px]">
                {String(values.length).padStart(2, "0")}
              </span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration,
                delay: shouldReduceMotion ? 0 : 0.3,
                ease,
              }}
              className="font-poppins mt-7 max-w-87.5 text-[10px] leading-[1.8] tracking-[0.2px] text-[#777] md:text-[14px]"
            >
              At Happy Homes, our values shape how we work, how we build, and
              how we create lasting relationships with our customers and
              communities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration,
                delay: shouldReduceMotion ? 0 : 0.4,
                ease,
              }}
              className="mt-7 flex items-center gap-2"
            >
              <motion.button
                type="button"
                onClick={previous}
                aria-label="Previous value"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
                transition={{ duration: 0.25, ease }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#781817]/20 text-[#781817] transition-colors duration-300 ease-in-out hover:bg-[#781817] hover:text-white"
              >
                <ChevronLeft size={17} strokeWidth={1.5} />
              </motion.button>

              <motion.button
                type="button"
                onClick={next}
                aria-label="Next value"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
                transition={{ duration: 0.25, ease }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#781817]/20 text-[#781817] transition-colors duration-300 ease-in-out hover:bg-[#781817] hover:text-white"
              >
                <ChevronRight size={17} strokeWidth={1.5} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 1,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease,
            }}
            className="relative w-full min-w-0 md:w-[69%]"
          >
            <div className="w-full overflow-hidden">
              <motion.div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex w-full snap-x snap-mandatory [scrollbar-width:none] gap-3 overflow-x-auto overscroll-x-contain scroll-smooth [&::-webkit-scrollbar]:hidden"
                style={{
                  scrollBehavior: shouldReduceMotion ? "auto" : "smooth",
                }}
              >
                {values.map((value, index) => (
                  <motion.div
                    key={`${value.title}-${index}`}
                    initial={{
                      opacity: 0,
                      y: shouldReduceMotion ? 0 : 25,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.75,
                      delay: shouldReduceMotion
                        ? 0
                        : Math.min(index * 0.1, 0.4),
                      ease,
                    }}
                    className="group relative h-73.75 w-full shrink-0 snap-start overflow-hidden rounded-[23px] md:w-[calc(50%-6px)]"
                  >
                    <img
                      src={value.image}
                      alt={value.title}
                      loading="lazy"
                      draggable={false}
                      className="font-poppins absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10 transition-colors duration-500 ease-in-out group-hover:bg-black/20" />

                    <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-[#781817] via-[#781817]/70 to-transparent" />

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 18,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: shouldReduceMotion ? 0.01 : 0.7,
                        delay: shouldReduceMotion ? 0 : 0.2,
                        ease,
                      }}
                      className="absolute right-5 bottom-8 left-5"
                    >
                      <h3 className="font-marcellus text-[23px] font-normal text-[#e3ae20] transition-colors duration-300 ease-in-out">
                        {value.title}
                      </h3>

                      <p className="font-poppins mt-2 text-[11px] text-white">
                        {value.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {values.map((_, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => scrollToCard(Math.min(index, maxIndex))}
                  aria-label={`Go to value ${index + 1}`}
                  aria-current={activeIndex === index ? "step" : undefined}
                  animate={{
                    width: activeIndex === index ? 24 : 6,
                    opacity: activeIndex === index ? 1 : 0.35,
                  }}
                  transition={{ duration: 0.35, ease }}
                  className="h-1.5 rounded-full bg-[#781817]"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
