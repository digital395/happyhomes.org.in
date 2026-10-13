"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { faqs } from "@/data/faq-emperor-city";

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-2 pb-15 md:px-8 md:py-2 md:pb-20">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={containerVariants}
          className="mb-8 text-center sm:mb-10 md:mb-12"
        >
          <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.8,
                ease,
              }}
              style={{ originX: 1 }}
              className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28"
            />

            <motion.span
              variants={itemVariants}
              className="font-poppins shrink-0 text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]"
            >
              FAQ
            </motion.span>

            <motion.span
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.8,
                delay: 0.1,
                ease,
              }}
              style={{ originX: 0 }}
              className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28"
            />
          </div>

          <motion.h2
            variants={itemVariants}
            className="font-marcellus mx-auto max-w-full text-center text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]"
          >
            The principles behind every place we create
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={containerVariants}
          className="mx-auto w-full max-w-296.25 space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                layout={!shouldReduceMotion}
                transition={{
                  layout: {
                    duration: shouldReduceMotion ? 0.01 : 0.45,
                    ease,
                  },
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -2,
                        transition: {
                          duration: 0.25,
                          ease,
                        },
                      }
                }
                className={`overflow-hidden rounded-[9px] border ${
                  isOpen
                    ? "border-[#e3e3e8] shadow-[0_8px_25px_rgba(0,0,0,0.07)]"
                    : "border-[#eeeeF2] shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
                }`}
              >
                <motion.button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.995 }}
                  className={`font-poppins group relative flex w-full items-center justify-between gap-4 overflow-hidden text-left ${
                    isOpen
                      ? "bg-[#fffaf5] px-4 pt-5 pb-3 sm:px-6 sm:pt-5 sm:pb-3 md:px-5"
                      : "bg-white px-4 py-5 hover:bg-[#fffaf5] sm:px-6 sm:py-5 md:px-5"
                  }`}
                >
                  <motion.span
                    className="absolute top-0 left-0 h-full w-0.75 origin-top bg-[#d9a62e]"
                    initial={false}
                    animate={{
                      scaleY: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.4,
                      ease,
                    }}
                  />

                  <span className="flex min-w-0 items-start gap-3 sm:gap-4">
                    <motion.span
                      animate={{
                        x: isOpen && !shouldReduceMotion ? 2 : 0,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0.01 : 0.35,
                        ease,
                      }}
                      className={`font-poppins text-[14px] leading-6 font-medium md:text-[17px] ${
                        isOpen
                          ? "text-[#751919]"
                          : "text-[#48464a] group-hover:text-[#751919]"
                      }`}
                    >
                      {faq.question}
                    </motion.span>
                  </span>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      scale: isOpen ? 1 : 1,
                    }}
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.08 }
                    }
                    transition={{
                      rotate: {
                        duration: shouldReduceMotion ? 0.01 : 0.45,
                        ease,
                      },
                      scale: {
                        duration: 0.25,
                        ease,
                      },
                    }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                      isOpen
                        ? "border-[#7a1818] bg-[#7a1818] text-white shadow-sm"
                        : "border-[#e9e2dc] bg-white text-[#7a1818] group-hover:border-[#d9a62e] group-hover:bg-[#fff8e8]"
                    }`}
                  >
                    <ChevronDown size={15} strokeWidth={1.8} />
                  </motion.span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      key="answer"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: shouldReduceMotion ? 0.01 : 0.45,
                          ease,
                        },
                        opacity: {
                          duration: shouldReduceMotion ? 0.01 : 0.3,
                          ease,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{
                          y: shouldReduceMotion ? 0 : -10,
                          opacity: 0,
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                        }}
                        exit={{
                          y: shouldReduceMotion ? 0 : -8,
                          opacity: 0,
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0.01 : 0.4,
                          delay: shouldReduceMotion ? 0 : 0.05,
                          ease,
                        }}
                        className="px-4 pt-1 pb-5 sm:px-5 sm:pb-5 md:px-3.75 md:pb-5.5"
                      >
                        <p className="font-poppins max-w-262.5 text-[13px] leading-[1.8] tracking-[0.02em] text-[#8b8b90] md:text-[16px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
