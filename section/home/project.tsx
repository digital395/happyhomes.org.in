"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/project";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Project() {
  const [activeProject, setActiveProject] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const project = projects[activeProject];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const previousProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const transition = {
    duration: shouldReduceMotion ? 0.01 : 0.75,
    ease,
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-384 px-4 py-12 sm:px-6 md:px-8 md:py-16 lg:px-10">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : 35,
                scale: shouldReduceMotion ? 1 : 0.985,
              }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : -25,
                scale: shouldReduceMotion ? 1 : 0.99,
              }}
              transition={transition}
              className="group relative isolate h-120 w-full overflow-hidden rounded-3xl bg-[#541215] sm:h-145 md:h-155 lg:h-162.5"
            >
              <Image
                src={project.desktopImage}
                alt={project.title}
                fill
                priority={activeProject === 0}
                sizes="100vw"
                className="hidden object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-[1.02] md:block"
              />

              <Image
                src={project.mobileImage}
                alt={project.title}
                fill
                priority={activeProject === 0}
                sizes="100vw"
                className="object-contain object-center transition-transform duration-700 ease-in-out group-hover:scale-[1.02] md:hidden"
              />

              <motion.div
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  ...transition,
                  delay: shouldReduceMotion ? 0 : 0.25,
                }}
                className="absolute top-5 right-5 z-20 md:hidden"
              >
                <Link
                  href={project.href}
                  className="group/button inline-flex items-center"
                >
                  <span className="inline-flex h-9 items-center gap-2 border border-[#EEA222] bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] px-3 text-[9px] font-semibold tracking-[0.5px] text-[#541215] transition-all duration-300 ease-in-out hover:shadow-lg">
                    <span>View Project</span>
                    <ArrowUpRight size={12} strokeWidth={1.7} />
                  </span>
                </Link>
              </motion.div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[50%] bg-linear-to-t from-[#541215] via-[#541215]/75 to-transparent md:h-[30%]" />

              <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-7 sm:px-8 sm:pb-9 md:px-12 md:pb-12 lg:px-14 lg:pb-14">
                <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-400">
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 15,
                      }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ...transition,
                        delay: shouldReduceMotion ? 0 : 0.1,
                      }}
                      className="mb-3 hidden items-center gap-3 sm:mb-4 md:flex"
                    >
                      <div className="relative h-30 w-50">
                        <Image
                          src={project.logo}
                          alt={project.name}
                          fill
                          sizes="200px"
                          className="object-contain object-left"
                        />
                      </div>
                    </motion.div>

                    <motion.h3
                      initial={{
                        opacity: 0,
                        y: shouldReduceMotion ? 0 : 25,
                      }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ...transition,
                        delay: shouldReduceMotion ? 0 : 0.15,
                      }}
                      className="font-marcellus text-[20px] leading-tight font-normal text-white drop-shadow-md sm:text-[30px] md:text-[38px] lg:text-[46px]"
                    >
                      {project.title}
                    </motion.h3>

                    <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-2.5">
                      {project.highlights.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            y: shouldReduceMotion ? 0 : 15,
                          }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            ...transition,
                            duration: shouldReduceMotion ? 0.01 : 0.5,
                            delay: shouldReduceMotion ? 0 : 0.25 + index * 0.08,
                          }}
                          className="flex min-h-8 items-center justify-center rounded-sm border border-white/60 bg-white/90 px-3 py-1.5 text-[9px] font-medium text-[#541215] shadow-md transition-shadow duration-300 hover:shadow-lg sm:min-h-9 sm:px-4 sm:text-[11px]"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: shouldReduceMotion ? 0 : 20,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      ...transition,
                      delay: shouldReduceMotion ? 0 : 0.35,
                    }}
                    className="hidden shrink-0 pb-1 md:block"
                  >
                    <Link
                      href={project.href}
                      className="group/button inline-flex items-center"
                    >
                      <span className="inline-flex h-9 items-center gap-2 border border-[#EEA222] bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] px-3 text-[9px] font-semibold tracking-[0.5px] text-[#541215] transition-all duration-300 ease-in-out hover:shadow-lg">
                        <span>View Project</span>
                        <ArrowUpRight size={12} strokeWidth={1.7} />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>

              <motion.button
                type="button"
                onClick={previousProject}
                aria-label="Previous project"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
                transition={{ duration: 0.25, ease }}
                className="absolute top-1/2 left-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#541215] sm:left-6 sm:h-12 sm:w-12"
              >
                <ChevronLeft
                  size={20}
                  strokeWidth={1.5}
                  className="sm:h-6 sm:w-6"
                />
              </motion.button>

              <motion.button
                type="button"
                onClick={nextProject}
                aria-label="Next project"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.92 }}
                transition={{ duration: 0.25, ease }}
                className="absolute top-1/2 right-4 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-md transition-colors duration-300 ease-in-out hover:bg-white hover:text-[#541215] sm:right-6 sm:h-12 sm:w-12"
              >
                <ChevronRight
                  size={20}
                  strokeWidth={1.5}
                  className="sm:h-6 sm:w-6"
                />
              </motion.button>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex items-center justify-center gap-2">
            {projects.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                aria-label={`Go to ${item.name}`}
                aria-current={activeProject === index ? "true" : undefined}
                onClick={() => setActiveProject(index)}
                animate={{
                  width: activeProject === index ? 40 : 12,
                  opacity: activeProject === index ? 1 : 0.35,
                }}
                whileHover={shouldReduceMotion ? undefined : { opacity: 0.8 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
                transition={{ duration: 0.35, ease }}
                className="h-0.75 rounded-full bg-[#781817]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
