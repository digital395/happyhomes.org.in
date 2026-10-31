"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EnquiryPopup from "@/section/common/popup";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const letters = headingRef.current?.querySelectorAll(".hero-letter");

      const subtitle = introRef.current?.querySelector(".hero-subtitle");

      const button = introRef.current?.querySelector(".hero-button");

      if (letters && letters.length > 0) {
        gsap.set(letters, {
          opacity: 1,
          y: 0,
          rotation: 0,
        });
      }

      if (subtitle) {
        gsap.set(subtitle, {
          opacity: 1,
          y: 0,
        });
      }

      if (button) {
        gsap.set(button, {
          opacity: 1,
          y: 0,
        });
      }

      gsap.set(buildingRef.current, {
        opacity: 1,
        scale: 1.2,
        transformOrigin: "center center",
      });

      gsap.set(cloudRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        height: "550px",
      });

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.7,
        y: 20,
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: stageRef.current,
          anticipatePin: 1,
        },
      });

      tl.add("start");

      if (letters?.length) {
        tl.to(
          letters,
          {
            y: 140,
            opacity: 0,
            rotation: 8,
            duration: 0.7,
            stagger: 0.025,
            ease: "power2.in",
          },
          "start",
        );
      }

      tl.to(
        [subtitle, button].filter(Boolean),
        {
          autoAlpha: 0,
          y: 25,
          duration: 0.4,
          stagger: 0.08,
          ease: "power1.in",
        },
        "start+=0.15",
      );

      tl.to(
        buildingRef.current,
        {
          scale: 1.8,
          duration: 2,
          ease: "power2.inOut",
        },
        "start+=0.7",
      );

      tl.to(
        cloudRef.current,
        {
          height: "950px",
          duration: 1.5,
          ease: "power2.out",
        },
        "start+=3",
      );

      tl.to(
        buildingRef.current,
        {
          autoAlpha: 0,
          scale: 2.4,
          duration: 0.8,
          ease: "power2.in",
        },
        "start+=2.5",
      );

      tl.to(
        logoRef.current,
        {
          autoAlpha: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "start+=3.5",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-[350vh] w-full bg-[#8CBAE0]"
      >
        <div
          ref={stageRef}
          className="relative h-screen w-full overflow-hidden bg-[#8CBAE0]"
        >
          <div
            ref={buildingRef}
            className="absolute inset-x-0 top-[150] bottom-0 z-10 h-[75vh] will-change-transform sm:h-[68vh] md:top-[-200] md:h-[120vh]"
          >
            <Image
              src="/image/animation/emperor-build.webp"
              alt="Modern luxury property"
              fill
              priority
              sizes="100vw"
              className="hidden object-cover object-top md:block"
            />
            <Image
              src="/image/animation/emperor-build-phone.webp"
              alt="Modern luxury property"
              fill
              priority
              sizes="100vw"
              className="object-contain object-bottom md:hidden"
            />
          </div>
          <div
            ref={introRef}
            className="pt-10.5ext-center absolute inset-x-0 top-20 z-30 flex w-full flex-col items-center px-6"
          >
            <h1
              ref={headingRef}
              className="font-marcellus text-center text-[22px] leading-[1.05] font-normal tracking-[-1px] text-[#7A1A15] uppercase sm:text-left sm:text-[60px] sm:tracking-[-1.5px] md:text-[60px]"
            >
              {"Find a Place That Feels Right"
                .split("")
                .map((letter, index) => (
                  <span
                    key={index}
                    className="hero-letter font-marcellus inline-block will-change-transform"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
            </h1>

            <p className="hero-subtitle mt-3 text-center text-[14px] leading-relaxed font-light tracking-normal text-[#7A1A15] sm:mt-3.5 sm:text-left sm:text-[16px] sm:tracking-[-1px]">
              Explore our growing portfolio of thoughtfully planned plotted
              developments across Tamil Nadu.
            </p>

            <button
              type="button"
              onClick={() => setEnquiryOpen(true)}

              className="hero-button group relative mt-7 flex h-11.5 w-fit items-center justify-center overflow-hidden rounded-none border border-[#7A1A15] bg-[#7A1A15] px-5 text-[16px] font-bold tracking-[-0.5px] text-[#d9a62e] shadow-[0_7px_25px_rgba(122,26,21,0.18)] transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#6f1713] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-0" />
              <span className="absolute top-0 left-0 z-10 h-0.5 w-0 bg-[#d9a62e] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />
              <span className="absolute top-0 right-0 z-10 h-2 w-2 border-t border-r border-[#d9a62e]" />
              <span className="relative z-10 whitespace-nowrap">
                Enquire Now
              </span>
              <span className="relative z-10 ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1.25">
                →
              </span>
            </button>
          </div>
          <div
            ref={cloudRef}
            className="absolute bottom-0 left-0 z-20 h-100.5 w-full will-change-transform md:h-100.5"
          >
            <Image
              src="/image/animation/cloud.png"
              alt=""
              fill
              sizes="100vw"
              className="hidden object-fill md:block"
            />

            <Image
              src="/image/animation/cloud.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover md:hidden"
            />
          </div>
          <div
            ref={logoRef}
            className="pointer-events-none absolute inset-x-0 bottom-45 z-30 flex flex-col items-center justify-center sm:bottom-57.5"
          >
            <h2 className="font-serif text-[48px] leading-[0.95] font-black tracking-[-2.5px] text-[#7A1A15] uppercase sm:text-[60px] md:text-[60px]">
              {"Welcome to".split("").map((letter, index) => (
                <span
                  key={index}
                  className="hero-letter inline-block will-change-transform"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </h2>
            <div className="relative h-35 w-75 sm:h-45 sm:w-105">
              <Image
                src="/image/logo/emperor-city.png"
                alt="Brand logo"
                fill
                sizes="(max-width: 640px) 300px, 420px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <EnquiryPopup
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        downloadBrochure={false}
      />
    </>
  );
}
