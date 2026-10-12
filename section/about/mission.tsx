"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sections = [
  {
    id: 1,
    title: "VISION",
    subtitle:
      "To create thriving communities in emerging regions by making quality homes, peaceful living, and a better future accessible to every family.",
    image: "/image/home/vision/1.webp",
  },
  {
    id: 2,
    title: "MISSION",
    subtitle:
      "To develop well-planned communities with quality infrastructure, affordable plots, and essential amenities that create lasting value for families and growing regions.",
    image: "/image/home/vision/2.webp",
  },
  {
    id: 3,
    title: "VALUES",
    subtitle:
      "Integrity, trust, quality, and sustainable development in every project, creating lasting value for families and communities.",
    image: "/image/home/vision/3.webp",
  },
  {
    id: 4,
    title: "PHILOSOPHY",
    subtitle:
      "Creating thoughtfully planned communities that blend nature, connectivity, and modern living to build a better future for every family.",
    image: "/image/home/vision/4.webp",
  },
];

export default function VisionSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[55vh] min-h-100 w-full overflow-hidden md:h-[55vh] md:min-h-0">
      {" "}
      {/* Background Image */}
      <Image
        src={sections[active].image}
        alt={sections[active].title}
        fill
        priority
        className="object-cover object-center transition-all duration-700"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      {/* DESKTOP - WHOLE IMAGE AREA IS CLICKABLE */}
      <div className="absolute inset-0 hidden md:grid md:grid-cols-4">
        {sections.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(index)}
            className={`group relative flex h-full flex-col justify-end border-l border-white/10 p-8 text-left transition-all duration-500 ${
              active === index ? "bg-black/20" : "hover:bg-black/20"
            }`}
          >
            {/* Bottom content */}
            <div className="w-full pb-2">
              {/* Number */}
              <span className="mb-3 block text-sm text-white/40">
                0{item.id}
              </span>

              {/* Title */}
              <h3
                className={`mb-3 text-xl font-semibold text-white transition-all duration-500 ${
                  active === index
                    ? "opacity-100"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              >
                {item.title}
              </h3>

              {/* Full subtitle */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="max-w-95 text-sm leading-6 text-white/80">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
      {/* MOBILE - WHOLE IMAGE IS CLICKABLE */}
      {/* MOBILE - HORIZONTAL SCROLL */}
      <div className="scrollbar-hide flex w-full snap-x snap-mandatory overflow-x-auto md:hidden">
        {sections.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(index)}
            className="relative h-[55vh] min-h-100 w-full min-w-full shrink-0 snap-start overflow-hidden text-left"
          >
            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-black/90 via-black/50 to-transparent" />

            {/* Bottom content */}
            <div className="absolute inset-x-0 bottom-0 p-5 pb-7">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[2px] text-white/50">
                  0{item.id}
                </span>

                <span className="h-px w-6 shrink-0 bg-white/30" />

                <h3 className="text-sm font-medium tracking-[1.5px] text-white">
                  {item.title}
                </h3>
              </div>

              <p className="mt-2 max-w-85 text-[11px] leading-[1.6] text-white/75">
                {item.subtitle}
              </p>

              <div className="mt-4 flex gap-1.5">
                {sections.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`h-0.5 transition-all duration-500 ${
                      dotIndex === index ? "w-8 bg-white" : "w-3 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
