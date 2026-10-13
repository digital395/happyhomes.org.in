"use client";

import Image from "next/image";
import { marquee } from "@/data/marquee";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Marquee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: shouldReduceMotion ? 0 : 12,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.8,
        ease,
      }}
      className="overflow-hidden bg-[#781817] py-3"
    >
      <motion.div
        className="marquee-track flex w-max items-center"
        animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
        transition={
          shouldReduceMotion
            ? undefined
            : {
                x: {
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }
        }
      >
        {[...marquee, ...marquee].map((item, index) => (
          <motion.div
            key={index}
            initial={shouldReduceMotion ? false : { opacity: 0.7, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.6,
              delay: shouldReduceMotion ? 0 : (index % marquee.length) * 0.04,
              ease,
            }}
            className="mx-4 flex items-center gap-2 whitespace-nowrap md:mx-8"
          >
            <Image
              src={item.icon}
              alt=""
              width={25}
              height={25}
              className="h-6 w-6 shrink-0 object-contain md:h-10 md:w-10"
            />

            <span className="font-poppins text-[15px] font-semibold text-white md:text-[22px]">
              {item.text}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
