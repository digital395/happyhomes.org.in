"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/data/gallery-prime";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 25,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export default function Gallery() {
  const [imageOffset, setImageOffset] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setImageOffset((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getImage = (index: number) => {
    return images[(index + imageOffset) % images.length];
  };

  const handleImageClick = (index: number) => {
    setImageOffset((prev) => (prev + index) % images.length);
  };

  return (
    <section className="w-full bg-white px-4 py-3 pt-12 lg:px-10 lg:py-10">
      {" "}
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

            <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] uppercase md:text-[14px] lg:text-[15px]">
              GALLERY
            </span>

            <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
          </motion.div>

          <motion.h2
            className="mx-auto max-w-full text-center font-serif text-[25px] leading-[1.12] font-normal text-[#781817] md:text-[40px]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: "easeInOut",
            }}
          >
            Explore the Places Where Happier Futures Begin
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mt-10 flex snap-x snap-mandatory scrollbar-none gap-3 overflow-x-auto overscroll-x-contain px-1 pb-4 [-ms-overflow-style:none] sm:mt-14 sm:gap-4 lg:hidden [&::-webkit-scrollbar]:hidden"
        >
          {images.map((image, index) => (
            <motion.div
              key={`${image.src}-${index}`}
              variants={imageVariants}
              className="group relative h-75 w-[78vw] shrink-0 snap-center overflow-hidden rounded-[22px] border border-[#D4AF37]/30 bg-[#541215] shadow-[0_18px_45px_rgba(43,9,11,0.12)] sm:h-95 sm:w-75"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 640px) 78vw, 300px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#2B090B]/45 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-[#F1D77A]/30 bg-[#541215]/80 px-3 py-1.5 backdrop-blur-md">
                <span className="font-[Poppins] text-[9px] font-semibold tracking-[0.12em] text-[#F1D77A]">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(images.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="relative mx-auto mt-12 hidden h-117.5 w-full max-w-312.5 lg:block xl:mt-14 xl:h-135 xl:max-w-337.5"
        >
          <motion.div
            variants={imageVariants}
            whileHover={{ y: -5, transition: { duration: 0.3, ease } }}
            onClick={() => handleImageClick(0)}
            className="group absolute top-[17%] left-[2%] z-10 h-[60%] w-[29%] cursor-pointer overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            <Image
              src={getImage(0).src}
              alt={getImage(0).alt}
              fill
              sizes="390px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{
              scale: 1.015,
              transition: { duration: 0.3, ease },
            }}
            onClick={() => handleImageClick(1)}
            className="group absolute top-0 left-1/2 z-30 h-[88%] w-[46%] -translate-x-1/2 cursor-pointer overflow-hidden rounded-[30px] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.2)]"
          >
            <Image
              src={getImage(1).src}
              alt={getImage(1).alt}
              fill
              priority
              sizes="620px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={imageVariants}
            whileHover={{ y: -5, transition: { duration: 0.3, ease } }}
            onClick={() => handleImageClick(2)}
            className="group absolute top-[17%] right-[2%] z-10 h-[60%] w-[29%] cursor-pointer overflow-hidden rounded-3xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            <Image
              src={getImage(2).src}
              alt={getImage(2).alt}
              fill
              sizes="390px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          <button
            type="button"
            aria-label="Previous image"
            onClick={() => handleImageClick(0)}
            className="absolute top-[42%] left-0 z-40 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full bg-[#781817] text-2xl leading-none text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#5f1213]"
          >
            <ChevronLeft size={15} strokeWidth={1.8} color="#d9a62e" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={() => handleImageClick(2)}
            className="absolute top-[42%] right-0 z-40 flex h-9 w-9 translate-x-1/2 items-center justify-center rounded-full bg-[#781817] text-2xl leading-none text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#5f1213]"
          >
            <ChevronRight size={15} strokeWidth={1.8} color="#d9a62e" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
