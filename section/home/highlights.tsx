"use client";

import Image from "next/image";
import { highlights } from "@/data/highlights";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

export default function Highlights() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const slidesContainerRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);
  const mobileSlidesRef = useRef<(HTMLElement | null)[]>([]);

  const [mobileActive, setMobileActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const duration = shouldReduceMotion ? 0.01 : 0.85;

  useLayoutEffect(() => {
    if (window.innerWidth < 768 || shouldReduceMotion) return;

    const ctx = gsap.context(() => {
      const slides = slidesRef.current.filter(
        (slide): slide is HTMLElement => slide !== null,
      );

      if (!slides.length || !slidesContainerRef.current) return;

      gsap.set(slides, {
        opacity: 0,
        scale: 1.04,
        zIndex: 0,
      });

      gsap.set(slides[0], {
        opacity: 1,
        scale: 1,
        zIndex: 1,
      });

      const firstTitle = slides[0].querySelector("h3");
      const firstDescription = slides[0].querySelector("p");

      if (firstTitle) {
        gsap.fromTo(
          firstTitle,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
        );
      }

      if (firstDescription) {
        gsap.fromTo(
          firstDescription,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.15,
            ease: "power2.out",
          },
        );
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: slidesContainerRef.current,
          start: "top top",
          end: `+=${(slides.length - 1) * 100}%`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      slides.forEach((slide, index) => {
        if (index === 0) return;

        const title = slide.querySelector("h3");
        const description = slide.querySelector("p");

        timeline
          .set(
            slide,
            {
              zIndex: index + 1,
            },
            index - 1,
          )
          .to(
            slides[index - 1],
            {
              opacity: 0,
              scale: 0.96,
              duration: 1,
              ease: "power2.inOut",
            },
            index - 1,
          )
          .fromTo(
            slide,
            {
              opacity: 0,
              scale: 1.06,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.inOut",
            },
            index - 1,
          );

        if (title) {
          timeline.fromTo(
            title,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
            },
            index - 0.25,
          );
        }

        if (description) {
          timeline.fromTo(
            description,
            {
              opacity: 0,
              y: 25,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
            },
            index - 0.1,
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  useLayoutEffect(() => {
    const slides = mobileSlidesRef.current.filter(
      (slide): slide is HTMLElement => slide !== null,
    );

    if (!slides.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slides.indexOf(entry.target as HTMLElement);

            if (index !== -1) {
              setMobileActive(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-337.5 px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 15,
          }}
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
            Why Happy Homes?
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
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 1,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease,
          }}
          className="font-marcellus mx-auto text-center text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]"
        >
          More Than a Plot. A Place for Your Future
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.95,
            delay: shouldReduceMotion ? 0 : 0.25,
            ease,
          }}
          className="font-poppins mx-auto mt-5 max-w-200 text-center text-[13px] leading-[1.9] tracking-[0.3px] text-[#777] md:mt-7 md:text-[18px] md:leading-loose"
        >
          Choosing a plot is an important decision. At Happy Homes, we focus on
          creating developments that make that decision more confident and
          meaningful.
        </motion.p>
      </div>

      <div
        ref={slidesContainerRef}
        className="relative hidden h-svh min-h-125 w-full overflow-hidden md:block"
      >
        {highlights.map((item, index) => (
          <article
            key={item.title}
            ref={(el) => {
              slidesRef.current[index] = el;
            }}
            className="absolute inset-0 flex items-end justify-center overflow-hidden bg-[#2b090b]"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-black/20" />

            <div className="relative z-10 mx-auto w-full max-w-275 px-6 pb-8 text-center sm:px-10 sm:pb-20 lg:px-16 lg:pb-10">
              <h3
                className="font-marcellus text-2xl leading-tight font-normal sm:text-3xl md:text-4xl lg:text-5xl"
                style={{
                  background:
                    "radial-gradient(36.25% 152.47% at 49.79% 50%, #FDEF63 0%, #FCEA5E 20%, #F9DB52 43%, #F4C33E 68%, #EEA222 94%, #EE9F20 97%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h3>

              <p className="font-poppins mx-auto mt-4 max-w-180 text-sm leading-6 text-white sm:mt-5 sm:text-base sm:leading-7 md:text-lg lg:text-xl">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-auto md:hidden">
        {highlights.map((item, index) => (
          <article
            key={item.title}
            ref={(el) => {
              mobileSlidesRef.current[index] = el;
            }}
            className="relative h-[55svh] min-h-100 w-full min-w-full shrink-0 snap-start overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-black/20" />

            <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 text-center">
              <motion.h3
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 25,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration, ease }}
                className="font-marcellus text-2xl leading-tight"
                style={{
                  background:
                    "radial-gradient(36.25% 152.47% at 49.79% 50%, #FDEF63 0%, #FCEA5E 20%, #F9DB52 43%, #F4C33E 68%, #EEA222 94%, #EE9F20 97%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </motion.h3>

              <motion.p
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 20,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration,
                  delay: shouldReduceMotion ? 0 : 0.12,
                  ease,
                }}
                className="font-poppins mx-auto mt-3 max-w-85 text-sm leading-6 text-white/90"
              >
                {item.description}
              </motion.p>

              <div className="mt-5 flex justify-center gap-1.5">
                {highlights.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-0.5 transition-all duration-500 ease-in-out ${
                      dotIndex === mobileActive
                        ? "w-8 bg-white"
                        : "w-3 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
