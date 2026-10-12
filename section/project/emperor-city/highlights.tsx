"use client";

import { highlights } from "@/data/highlight-emperor";
import { motion } from "framer-motion";

export default function Highlights() {
  return (
    <section className="w-full bg-white px-5 py-12 md:px-8 md:py-14 lg:px-10 lg:py-12">
      <div className="mx-auto max-w-337.5">
        <motion.div
          className="mb-8 text-center sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 bg-linear-to-l from-[#781817] to-transparent sm:w-20 md:w-28" />

            <span className="font-poppins shrink-0 text-[10px] font-medium tracking-[2px] text-[#781817] uppercase sm:text-xs md:text-sm">
              OUR VALUES
            </span>

            <span className="h-px w-10 bg-linear-to-r from-[#781817] to-transparent sm:w-20 md:w-28" />
          </div>

          <motion.h2
            className="font-marcellus text-[25px] leading-tight font-normal text-[#781817] sm:text-3xl md:text-[40px]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            The principles behind every place we create
          </motion.h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-2.25 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title ?? index}
              className="min-h-43.5 rounded-[14px] bg-[#781817] px-6 py-5 transition-transform duration-300 hover:-translate-y-1 lg:min-h-57.5 lg:px-8 lg:py-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 h-8.75 w-8.75 lg:mb-5 lg:h-12 lg:w-12">
                <img
                  src={item.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-contain"
                />
              </div>

              <h3
                className="font-marcellus text-[20px] leading-tight font-semibold md:text-[25px]"
                style={{
                  background:
                    "radial-gradient(36.25% 152.47% at 49.79% 50%, #FDEF63 0%, #FCEA5E 20%, #F9DB52 43%, #F4C33E 68%, #EEA222 94%, #EE9F20 97%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h3>

              <p className="mt-3 max-w-67.5 text-[14px] leading-[1.55] font-normal text-white lg:mt-4 lg:max-w-82.5 lg:text-[16px] lg:leading-[1.6]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
