"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { values } from "@/data/values";

export default function Values() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const card = container.children[index] as HTMLElement;

    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const cards = Array.from(container.children) as HTMLElement[];

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.offsetLeft - container.scrollLeft - container.offsetLeft,
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const next = () => {
    const nextIndex = Math.min(activeIndex + 1, values.length - 1);
    scrollToCard(nextIndex);
  };

  const previous = () => {
    const previousIndex = Math.max(activeIndex - 1, 0);
    scrollToCard(previousIndex);
  };

  return (
    <section className="w-full overflow-hidden bg-white px-5 py-16 md:px-2 lg:py-20">
      <div className="mx-auto max-w-337.5">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
          <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

          <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
            OUR VALUES
          </span>

          <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
        </div>

        <h2 className="mx-auto max-w-full text-center font-serif text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
          The principles behind every place we{" "}
          {/* <br className="hidden md:block" /> */}
          create
        </h2>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end">
          <div className="flex w-full shrink-0 flex-col justify-end md:w-[31%]">
            <div className="flex items-end gap-2">
              <span className="font-marcellus text-[50px] leading-[0.8] font-normal tracking-[-5px] text-[#781817] md:text-[68px]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>

              <span className="font-marcellus text-[30px] leading-[0.8] font-normal tracking-[-5px] text-[#781817] md:text-[50px]">
                /
              </span>

              <span className="font-marcellus text-[30px] leading-[0.8] font-normal tracking-[-5px] text-[#781817] md:text-[40px]">
                {String(values.length).padStart(2, "0")}
              </span>
            </div>

            <p className="mt-7 max-w-87.5 text-[10px] leading-[1.8] tracking-[0.2px] text-[#777] md:text-[14px]">
              At Happy Homes, our values shape how we work, how we build, and
              how we create lasting relationships with our customers and
              communities.
            </p>

            <div className="mt-7 flex items-center gap-2">
              <button
                type="button"
                onClick={previous}
                disabled={activeIndex === 0}
                aria-label="Previous value"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#781817]/20 text-[#781817] transition-all duration-300 hover:bg-[#781817] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronLeft size={17} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={next}
                disabled={activeIndex === values.length - 1}
                aria-label="Next value"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#781817]/20 text-[#781817] transition-all duration-300 hover:bg-[#781817] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ChevronRight size={17} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-[69%]">
            <div
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex w-full snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
            >
              {values.map((value, index) => (
                <div
                  key={`${value.title}-${index}`}
                  className="group relative h-73.75 w-full shrink-0 snap-start overflow-hidden rounded-[23px] sm:w-full md:w-[calc(50%-6px)]"
                >
                  <img
                    src={value.image}
                    alt={value.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-[#781817] via-[#781817]/70 to-transparent" />

                  <div className="absolute right-5 bottom-8 left-5">
                    <h3 className="font-serif text-[23px] font-normal text-[#e3ae20]">
                      {value.title}
                    </h3>

                    <p className="mt-2 text-[11px] text-white">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-center gap-2 md:hidden">
              {values.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollToCard(index)}
                  aria-label={`Go to value ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-6 bg-[#781817]"
                      : "w-1.5 bg-[#781817]/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
