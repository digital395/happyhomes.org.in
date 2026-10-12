"use client";

import Image from "next/image";
import { highlights } from "@/data/highlights";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Highlights() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const slidesContainerRef = useRef<HTMLDivElement | null>(null);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);
const [mobileActive, setMobileActive] = useState(0);
const mobileSlidesRef = useRef<(HTMLElement | null)[]>([]);
  useLayoutEffect(() => {
    // GSAP is only needed for desktop
    if (window.innerWidth < 768) return;

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

        timeline
          .set(slide, {
            zIndex: index + 1,
          })
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
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
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
      root: null,
      threshold: 0.6,
    },
  );

  slides.forEach((slide) => observer.observe(slide));

  return () => observer.disconnect();
}, []);
  return (
    <section
      ref={sectionRef}
      className="w-full bg-white"
    >
      {/* ================= HEADING ================= */}
      <div className="mx-auto max-w-337.5 px-5 py-12 md:px-8 md:py-16 lg:px-10">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
          <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

          <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
            Why Happy Homes?
          </span>

          <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
        </div>

        <h2 className="mx-auto text-center font-serif text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
          More Than a Plot. A Place for Your Future
        </h2>

        <p className="mx-auto mt-5 max-w-200 text-center text-[13px] leading-[1.9] tracking-[0.3px] text-[#777] md:mt-7 md:text-[18px] md:leading-loose">
          Choosing a plot is an important decision. At Happy Homes, we focus
          on creating developments that make that decision more confident and
          meaningful.
        </p>
      </div>

      {/* ===================================================== */}
      {/* DESKTOP - GSAP PINNED SLIDES */}
      {/* ===================================================== */}
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
            className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#2b090b]"
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

            <div className="relative z-10 mx-auto w-full max-w-275 px-6 py-16 text-center sm:px-10 lg:px-16">
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-black/20 p-3 sm:mb-6 sm:h-14 sm:w-14">
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>

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

              <p className="mx-auto mt-4 max-w-180 text-sm leading-6 text-white sm:mt-5 sm:text-base sm:leading-7 md:text-lg lg:text-xl">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* ===================================================== */}
      {/* MOBILE - HORIZONTAL SCROLL */}
      {/* ===================================================== */}
      <div className="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-auto md:hidden">
{highlights.map((item, index) => (
           <article
  key={item.title}
  ref={(el) => {
    mobileSlidesRef.current[index] = el;
  }}
  className="relative h-[55svh] min-h-100 w-full min-w-full shrink-0 snap-start overflow-hidden"
>
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-black/20" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 text-center">
              {/* Icon */}
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-black/20 p-2.5">
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Title */}
              <h3
                className="font-marcellus text-2xl leading-tight"
                style={{
                  background:
                    "radial-gradient(36.25% 152.47% at 49.79% 50%, #FDEF63 0%, #FCEA5E 20%, #F9DB52 43%, #F4C33E 68%, #EEA222 94%, #EE9F20 97%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="mx-auto mt-3 max-w-85 text-sm leading-6 text-white/90">
                {item.description}
              </p>

              {/* Slide indicator */}
              <div className="mt-5 flex justify-center gap-1.5">
  {highlights.map((_, dotIndex) => (
    <span
      key={dotIndex}
      className={`h-0.5 transition-all duration-300 ${
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