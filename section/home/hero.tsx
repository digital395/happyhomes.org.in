"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const duration = shouldReduceMotion ? 0.01 : 0.9;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-37.5 w-full sm:h-70 md:h-105 lg:h-120">
        <motion.div
          className="absolute inset-0"
          initial={{
            opacity: 0,
            scale: shouldReduceMotion ? 1 : 1.04,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: { duration: 0.7, ease },
            scale: { duration: shouldReduceMotion ? 0.01 : 1.5, ease },
          }}
        >
          <Image
            src="/image/home/hero.webp"
            alt="Premium plots in Tirunelveli"
            fill
            priority
            sizes="100vw"
            className="object-contain object-center md:object-cover md:object-center"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 hidden bg-linear-to-r from-white via-white/70 via-5% to-transparent md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration,
            delay: shouldReduceMotion ? 0 : 0.2,
            ease,
          }}
        />

        <div className="absolute inset-0 z-10 mx-auto hidden w-full max-w-380 items-center px-6 sm:px-8 md:flex md:px-[5.4%]">
          <div className="w-full max-w-142.5 text-left">
            <motion.p
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration,
                delay: shouldReduceMotion ? 0 : 0.25,
                ease,
              }}
              className="font-poppins mb-3 text-[12px] font-medium tracking-[0.38em] text-[#741b19]"
            >
              A BRIGHTER TOMORROW BEGINS HERE
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 35,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 1,
                delay: shouldReduceMotion ? 0 : 0.4,
                ease,
              }}
              className="font-marcellus text-[54px] leading-[1.02] font-normal tracking-[-0.035em] text-[#691715] lg:text-[64px]"
            >
              DREAM HOME
              <br />
              COME TO REAL
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 20,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration,
                delay: shouldReduceMotion ? 0 : 0.6,
                ease,
              }}
              className="font-poppins mt-2 max-w-120 text-[14px] leading-normal font-semibold text-[#6f3b35]"
            >
              PREMIUM PLOTS IN A WELL-PLANNED COMMUNITY, DESIGNED
              <br />
              FOR YOUR DREAM HOME AND A BETTER TOMORROW.
            </motion.p>

            <motion.a
              href="/project/emperor-city"
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 18,
                scale: shouldReduceMotion ? 1 : 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration,
                delay: shouldReduceMotion ? 0 : 0.8,
                ease,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -3,
                      scale: 1.03,
                      transition: { duration: 0.25, ease },
                    }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className="font-poppins mt-6 inline-flex min-h-10 items-center justify-center bg-[#741b19] px-6 text-[14px] font-medium text-[#e5c27b] transition-colors duration-300 hover:bg-[#53110f]"
            >
              EXPLORE PLOTS
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
