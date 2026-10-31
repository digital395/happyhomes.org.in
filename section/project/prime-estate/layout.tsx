"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { layouts } from "@/data/layout-prime";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Layout() {
  const [activeTab, setActiveTab] = useState(1);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const activeLayout =
    layouts.find((layout) => layout.id === activeTab) ?? layouts[0];

  const openImage = () => {
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  const changeLayout = (direction: number) => {
    const currentIndex = layouts.findIndex((layout) => layout.id === activeTab);

    if (currentIndex === -1 || layouts.length < 2) return;

    const nextIndex =
      (currentIndex + direction + layouts.length) % layouts.length;

    setActiveTab(layouts[nextIndex].id);
  };

  useEffect(() => {
    if (!isImageOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
      if (event.key === "ArrowLeft") changeLayout(-1);
      if (event.key === "ArrowRight") changeLayout(1);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageOpen, activeTab]);

  if (!activeLayout) return null;

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-10">
      <div className="mx-auto w-full max-w-337.5">
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
              Master Plan
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
            A Masterplan Designed for Every Possibility
          </motion.h2>
        </motion.div>

       

        <motion.div
          id="layout-panel"
          role="tabpanel"
          aria-labelledby={`layout-tab-${activeTab}`}
          className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-[#781817]/10 bg-[#faf9f7] p-2 shadow-[0_12px_45px_rgba(43,9,11,0.07)] sm:rounded-2xl sm:p-4 md:p-5"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative flex aspect-4/3 w-full items-center justify-center overflow-hidden rounded-lg bg-white sm:aspect-16/10 lg:aspect-5/4">
            <AnimatePresence mode="wait">
              <motion.button
                key={activeLayout.image}
                type="button"
                aria-label={`Open ${activeLayout.alt} in full screen`}
                className="group absolute inset-0 block h-full w-full cursor-zoom-in"
                onClick={openImage}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.985 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <Image
                  src={activeLayout.image}
                  alt={activeLayout.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 90vw, 768px"
                  className="object-contain p-2 sm:p-3 md:p-4"
                />
              </motion.button>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Full-screen view: ${activeLayout.alt}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeImage}
          >
            <motion.div
              key={activeLayout.image}
              className="relative flex max-h-[95vh] max-w-[95vw] items-center justify-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeImage}
                className="absolute -top-3 -right-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#781817] shadow-lg transition-transform hover:scale-110 sm:-top-4 sm:-right-4"
                aria-label="Close image viewer"
              >
                <X size={22} />
              </button>

              <Image
                src={activeLayout.image}
                alt={activeLayout.alt}
                width={2000}
                height={1600}
                priority
                sizes="95vw"
                className="max-h-[90vh] w-auto max-w-[95vw] rounded-lg object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
