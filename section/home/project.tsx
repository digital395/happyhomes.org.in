"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "EMPEROR CITY",
    title: "Tirunelveli's Biggest Integrated Township",
    desktopImage: "/image/home/project/desktop.png",
    mobileImage: "/image/home/project/phone4.png",
    highlights: [
      "70 Acres",
      "Premium Plots",
      "Grand Clubhouse",
      "Future Connectivity",
    ],
  },
];

export default function Project() {
  const [activeProject, setActiveProject] = useState(0);

  const project = projects[activeProject];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* ================= PROJECT CAROUSEL ================= */}
      <div className="mx-auto w-full max-w-384 px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10">
        <div className="relative">
          {/* PROJECT CARD */}
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            className="group relative isolate h-120 w-full overflow-hidden rounded-3xl bg-[#541215] sm:h-145 md:h-155 lg:h-162.5"
          >
            {/* ================= DESKTOP IMAGE ================= */}
            <Image
              src={project.desktopImage}
              alt={project.title}
              fill
              priority={activeProject === 0}
              sizes="100vw"
              className="hidden object-cover object-center transition-transform duration-700 group-hover:scale-[1.02] md:block"
            />

            {/* ================= MOBILE IMAGE ================= */}
            <Image
              src={project.mobileImage}
              alt={project.title}
              fill
              priority={activeProject === 0}
              sizes="100vw"
              className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.02] md:hidden"
            />

            {/* Dark overlay */}

            {/* Top gradient */}

            {/* Bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-[#541215] via-[#541215]/75 to-transparent" />

            {/* ================= CONTENT ================= */}
            <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-7 sm:px-8 sm:pb-9 md:px-12 md:pb-12 lg:px-14 lg:pb-14">
              <div className="max-w-400">
                {/* Project name */}
                <div className="mb-3 flex items-center gap-3 sm:mb-4">
                  <span className="h-px w-8 bg-white/80 sm:w-14" />

                  <span className="font-poppins text-[9px] font-medium tracking-[1.5px] text-white sm:text-[11px]">
                    {project.name}
                  </span>

                  <span className="h-px w-8 bg-white/80 sm:w-14" />
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-marcellus text-[20px] leading-tight font-normal text-white drop-shadow-md sm:text-[30px] md:text-[38px] lg:text-[46px]"
                >
                  {project.title}
                </motion.h3>

                {/* Highlights */}
                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
                  {project.highlights.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: 0.15 + index * 0.06,
                      }}
                      className="flex min-h-8 items-center justify-center rounded-sm border border-white/60 bg-white/90 px-3 py-1.5 text-[9px] font-medium text-[#541215] shadow-md sm:min-h-9 sm:px-4 sm:text-[11px]"
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* ================= LEFT ARROW ================= */}
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#541215] sm:left-6 sm:h-12 sm:w-12"
            >
              <ChevronLeft
                size={20}
                strokeWidth={1.5}
                className="sm:h-6 sm:w-6"
              />
            </button>

            {/* ================= RIGHT ARROW ================= */}
            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="absolute top-1/2 right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#541215] sm:right-6 sm:h-12 sm:w-12"
            >
              <ChevronRight
                size={20}
                strokeWidth={1.5}
                className="sm:h-6 sm:w-6"
              />
            </button>
          </motion.div>

          {/* ================= INDICATOR ================= */}
          <div className="mt-5 flex items-center justify-center gap-2">
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to ${item.name}`}
                onClick={() => setActiveProject(index)}
                className={`h-0.75 rounded-full transition-all duration-300 ${
                  activeProject === index
                    ? "w-10 bg-[#781817]"
                    : "w-3 bg-[#781817]/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
