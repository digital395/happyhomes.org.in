"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EnquiryPopup from "@/section/common/popup";

export default function CTA() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-107.5 w-full overflow-hidden md:min-h-140 lg:min-h-160">
        <motion.div
          className="absolute inset-0 bg-cover bg-position-[center_45%] md:bg-center"
          style={{
            backgroundImage: "url('/image/cta/cta.webp')",
          }}
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-linear-to-t from-[#7A1A15] via-[#7A1A15]/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-107.5 w-full max-w-350 items-center px-4 md:min-h-140 md:px-5 lg:min-h-160 lg:px-0">
          <motion.div
            className="max-w-100"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
          >
            <motion.p
              className="mb-4 text-[14px] font-medium text-white/60 uppercase md:text-[16px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              Contact
            </motion.p>

            <motion.h1
              className="font-marcellus max-w-100 text-[20px] leading-[1.2] font-black tracking-[-0.4px] text-white uppercase md:text-[30px]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              Let&apos;s Talk About Your
              <br />
              Next Chapter
            </motion.h1>

            <motion.button
              type="button"
              onClick={() => setEnquiryOpen(true)}
              className="mt-7 h-8.75 min-w-26.25 bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%),linear-gradient(90deg,#541215_0%,#7A1A15_100%)] px-5 text-[12px] font-medium text-[#541215] uppercase transition duration-300 hover:brightness-95 md:text-[14px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      <EnquiryPopup
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        downloadBrochure={false}
      />
    </>
  );
}
