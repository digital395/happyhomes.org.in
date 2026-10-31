"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import EnquiryPopup from "@/section/common/popup";
import { isLeadValid } from "@/utils/LeadVerification";

export default function About() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [leadValid, setLeadValid] = useState(false);

  useEffect(() => {
    setLeadValid(isLeadValid());
  }, []);

  const downloadBrochure = () => {
    if (isLeadValid()) {
      const link = document.createElement("a");
      link.href = "/brochure/prime-brochure.pdf";
      link.download = "Prime-Estate-Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      setLeadValid(true);
      return;
    }

    setEnquiryOpen(true);
  };

  return (
    <>
      <section className="w-full bg-white px-4 py-3 pt-12 lg:px-10 lg:py-10">
        <div className="mx-auto w-full max-w-350">
          <motion.div
            className="mb-7 text-center sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4"
              initial={{ opacity: 0, scaleX: 0.8 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

              <span className="font-poppins shrink-0 text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
                PRIME ESTATE
              </span>

              <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
            </motion.div>

            <motion.h2
              className="font-marcellus mx-auto max-w-full text-center text-[30px] leading-[1.12] font-normal text-[#781817] uppercase md:text-[40px]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: "easeInOut",
              }}
            >
              Premium Villa Plots in Trichy – Near Woraiyur
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[35%_65%] md:gap-0">
            <motion.div
              className="relative mx-auto w-full max-w-112.5 overflow-hidden rounded-2xl md:mx-0"
              initial={{ opacity: 0, x: -50, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <div className="relative aspect-[1.08/1] w-full">
                <Image
                  src="/image/project/primeestate/about.webp"
                  alt="Happy family"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 400px, 400px"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex h-full flex-col justify-center md:pl-4 lg:pl-3 xl:pl-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: "easeInOut",
              }}
            >
              <motion.p
                className="font-marcellus max-w-400 text-[20px] leading-[1.55] font-bold text-[#781818] uppercase md:text-[34px]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
              >
                Your Dream Plot. Your Future. Your Prime Address.
              </motion.p>

              <motion.p
                className="font-poppins mt-4 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:mt-5 md:text-[18px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeInOut",
                }}
              >
                Discover Prime Estate, a premium villa plot development near
                Woraiyur, Trichy. Designed for those who value a well-connected
                location and a comfortable living environment, Prime Estate
                offers residential plots with essential infrastructure,
                landscaped surroundings, and convenient access to everyday
                necessities.
              </motion.p>

              <motion.p
                className="font-poppins mt-2 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:text-[18px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: "easeInOut",
                }}
              >
                Whether you are planning to build your dream home or looking for
                a property investment opportunity, Prime Estate offers a
                location to consider for your future.
              </motion.p>

              <motion.p
                className="font-poppins mt-2 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:text-[18px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
              >
                More than a plotted development, Emperor City is envisioned as a
                complete township where families can build their dream homes and
                experience a community-focused lifestyle.
              </motion.p>

              <motion.button
                type="button"
                onClick={downloadBrochure}
                className="group mt-6 inline-flex w-fit items-center justify-center gap-2 self-center rounded-sm border border-[#EEA222] bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] px-4 py-3 text-[11px] font-semibold tracking-[0.5px] text-[#541215] shadow-[0_5px_18px_rgba(238,162,34,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_9px_25px_rgba(238,162,34,0.35)] active:translate-y-0 sm:px-5 sm:text-xs"
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                <Download
                  size={15}
                  strokeWidth={2}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
                />

                <span className="whitespace-nowrap">DOWNLOAD BROCHURE</span>

                <ArrowRight
                  size={14}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      <EnquiryPopup
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        downloadBrochure={true}
        prime={true}
      />
    </>
  );
}
