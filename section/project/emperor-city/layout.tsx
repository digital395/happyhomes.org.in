"use client";

import Image from "next/image";
import { useState } from "react";
import { layouts } from "@/data/layout";

export default function Layout() {
  const [activeTab, setActiveTab] = useState(1);

  const activeLayout = layouts.find((layout) => layout.id === activeTab)!;

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-8 md:py-14 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-337.5">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
          <span className="h-px w-10 bg-linear-to-l from-[#781817] to-transparent sm:w-16 md:w-24 lg:w-28" />
          <span className="shrink-0 font-serif text-[10px] tracking-[1px] text-[#781817] uppercase sm:text-[11px] md:text-[14px] lg:text-[15px]">
            Layout Plan Section
          </span>
          <span className="h-px w-10 bg-linear-to-r from-[#781817] to-transparent sm:w-16 md:w-24 lg:w-28" />
        </div>
        <h2 className="mx-auto max-w-full text-center font-serif text-[25px] leading-[1.2] font-normal text-[#781817] sm:text-[28px] md:text-[40px]">
          A Masterplan Designed for Every Possibility
        </h2>
        <div
          className="mt-7 flex items-center justify-center gap-3 sm:mt-9 sm:gap-5"
          role="tablist"
          aria-label="Choose layout plan"
        >
          {layouts.map((layout) => (
            <button
              key={layout.id}
              id={`layout-tab-${layout.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === layout.id}
              aria-controls="layout-panel"
              onClick={() => setActiveTab(layout.id)}
              className={`font-poppins relative min-w-27.5 px-5 py-3 text-[12px] font-semibold transition-all duration-300 sm:min-w-35 sm:px-8 sm:py-3.5 sm:text-[14px] ${
                activeTab === layout.id
                  ? "bg-[#781817] text-white shadow-[0_5px_15px_rgba(120,24,23,0.2)]"
                  : "border border-[#781817]/30 bg-white text-[#781817] hover:border-[#781817] hover:bg-[#781817]/5"
              }`}
            >
              {layout.label}

              {activeTab === layout.id && (
                <span className="absolute right-0 bottom-0 left-0 h-0.75 bg-[#EEA222]" />
              )}
            </button>
          ))}
        </div>
        <div
          id="layout-panel"
          role="tabpanel"
          aria-labelledby={`layout-tab-${activeTab}`}
          className="mt-6 overflow-hidden rounded-lg border border-[#781817]/10 bg-[#faf8f5] p-2 shadow-[0_8px_30px_rgba(43,9,11,0.08)] sm:mt-8 sm:p-4 md:p-5"
        >
          <div className="relative min-h-55 w-full sm:min-h-80 md:min-h-105 lg:min-h-125">
            <Image
              key={activeLayout.image}
              src={activeLayout.image}
              alt={activeLayout.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1300px"
              className="object-contain object-center transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
