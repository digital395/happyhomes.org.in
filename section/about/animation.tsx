"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Animation() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const pearlRef = useRef(null);
  const pearlOutlineRef = useRef(null);
  const pearlFillRef = useRef(null);
  const buildingRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.set(buildingRef.current, {
        scale: 1,
        opacity: 1,
        transformOrigin: "center center",
      });

      gsap.set(pearlRef.current, {
        opacity: 0,
      });

      gsap.set(pearlOutlineRef.current, {
        opacity: 1,
      });

      gsap.set(pearlFillRef.current, {
        opacity: 0,
        backgroundPosition: "center top",
      });

      tl.add("sceneStart");

      tl.to(
        buildingRef.current,
        {
          scale: 1.35,
          duration: 1.1,
          ease: "power2.inOut",
        },
        "sceneStart",
      );

      tl.to(
        buildingRef.current,
        {
          opacity: 0,
          scale: 1.45,
          duration: 0.3,
          ease: "power2.in",
        },
        "sceneStart+=0.7",
      );

      tl.to(
        pearlRef.current,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power1.inOut",
        },
        "sceneStart+=1.05",
      );

      tl.to(
        pearlFillRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "sceneStart+=1.4",
      );

      tl.to(
        pearlFillRef.current,
        {
          backgroundPosition: "center 100%",
          duration: 3,
          ease: "none",
        },
        "sceneStart+=1.8",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[320vh] w-full">
      <div ref={stageRef} className="relative h-screen w-full overflow-hidden">
        <div
          ref={buildingRef}
          className="absolute inset-x-0 top-20.5 bottom-0 z-10 will-change-transform"
        >
          <Image
            src="/image/about/animation.webp"
            alt="Modern luxury property"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        <div
          ref={pearlRef}
          className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-6"
        >
          <div className="relative w-full text-center">
            <div
              ref={pearlOutlineRef}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center"
            >
              <div className="md:mt-7.5 font-poppins text-[90px] leading-none font-black tracking-[-0.04em] text-transparent uppercase [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">
                More Than a Plot.
              </div>

              <div className="mt-7.5 font-poppins text-[90px] leading-none font-black tracking-[-0.04em] text-transparent uppercase [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white]">
                A Place for Your Future.{" "}
              </div>
            </div>

            <div
              ref={pearlFillRef}
              className="relative z-10 flex flex-col items-center justify-center bg-[url('/image/about/animation.webp')] bg-cover bg-clip-text bg-center bg-no-repeat text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
            >
              <div className="mt-7.5 font-poppins text-[90px] leading-none font-black tracking-[-0.04em] uppercase">
                More Than a Plot.
              </div>

              <div className="mt-7.5 font-poppins text-[90px] leading-none font-black tracking-[-0.04em] uppercase">
                A Place for Your Future.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
