"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative h-60 w-full overflow-hidden md:h-125">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          scale: {
            duration: 1.4,
            ease,
          },
          opacity: {
            duration: 0.9,
            ease: "easeInOut",
          },
        }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image/about/hero.jpg')",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="absolute inset-0 bg-black/30"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          delay: 0.35,
        }}
        className="absolute inset-x-0 bottom-0 h-[60%] bg-linear-to-t from-[#851c17]/90 via-[#851c17]/30 to-transparent"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-325 flex-col justify-center px-3 pb-7 md:px-2 md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.55,
            ease,
          }}
          className="font-poppins mb-3 flex items-center gap-1 text-[9px] tracking-[1.5px] text-white uppercase md:text-[19px]"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-[#f2b900]"
          >
            Home
          </Link>

          <span className="text-white">.</span>

          <span className="text-white">About Us</span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.7,
            ease,
          }}
          className="font-marcellus text-[20px] leading-[1.15] font-normal whitespace-nowrap text-white md:text-[46px]"
        >
          Let&apos;s Start Your{" "}
          <motion.span
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease,
            }}
            className="inline-block text-[#ffffff]"
          >
            Property Journey
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
}
