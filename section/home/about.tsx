"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0.01 : 0.85;

  return (
    <section className="w-full overflow-hidden bg-white px-3 py-4 md:px-5 md:py-10">
      <div className="relative z-20 mx-auto w-full max-w-300 px-5 pt-6 text-center sm:px-8 sm:pt-14 md:pt-16 lg:pt-12">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
          <motion.span
            initial={{
              opacity: 0,
              scaleX: shouldReduceMotion ? 1 : 0,
            }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration, ease }}
            style={{ originX: 1 }}
            className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28"
          />

          <motion.span
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 12,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease,
            }}
            className="font-poppins shrink-0 text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]"
          >
            Brand Introduction
          </motion.span>

          <motion.span
            initial={{
              opacity: 0,
              scaleX: shouldReduceMotion ? 1 : 0,
            }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease,
            }}
            style={{ originX: 0 }}
            className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28"
          />
        </div>

        <motion.h2
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 28,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 1,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease,
          }}
          className="font-marcellus mx-auto text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]"
        >
          A New Chapter in Planned Living
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 24,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 1,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease,
          }}
          className="font-poppins mx-auto mt-7 max-w-250 text-[13px] leading-[2.2] tracking-[0.5px] text-black md:text-[18px]"
        >
          A home begins with a place. At Happy Homes, we believe that choosing
          the right place is the first step towards building a happy and secure
          future. We identify locations with strong growth potential,
          connectivity and developing infrastructure, and transform them into
          thoughtfully planned communities where families can build their dream
          homes and investors can look towards long-term appreciation.
        </motion.p>
      </div>
    </section>
  );
}
