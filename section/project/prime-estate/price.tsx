"use client";

import { motion } from "framer-motion";
import { BadgeIndianRupee } from "lucide-react";
import Image from "next/image";

const pricingData = [
  {
    category: "PREMIUM BLOCK",
    sqftRate: "₹2390",
    centRate: "₹10,41,084",
    featured: true,
  },
  {
    category: "COMMERCIAL (2 PLOTS)",
    sqftRate: "₹2490",
    centRate: "₹10,84,644",
    featured: false,
  },
  {
    category: "A BLOCK",
    sqftRate: "₹2350",
    centRate: "₹10,23,660",
    featured: false,
  },
  {
    category: "B BLOCK",
    sqftRate: "₹2290",
    centRate: "₹9,97,524",
    featured: false,
  },
  {
    category: "C BLOCK",
    sqftRate: "₹2250",
    centRate: "₹9,80,100",
    featured: false,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

type PricingItem = {
  category: string;
  sqftRate: string;
  centRate: string;
  featured: boolean;
};

function PricingTable({
  title,
  data,
}: {
  title: string;
  data: PricingItem[];
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-white shadow-[0_20px_60px_rgba(84,18,21,0.08)]"
    >
      {/* Phase heading */}
      <div className="flex items-center justify-between bg-[#541215] px-6 py-4 sm:px-8">
        <h3 className="font-[Marcellus] text-[24px] text-white sm:text-[28px]">
          {title}
        </h3>

        <span className="text-[9px] font-semibold tracking-[0.2em] text-[#D4AF37] uppercase sm:text-[10px]">
          Rate Card
        </span>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block">
        {/* Table Header */}
        <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[#541215]/10 bg-[#FBFAF7]">
          <div className="px-8 py-5">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-[#541215]/60 uppercase">
              Category
            </span>
          </div>

          <div className="px-8 py-5 text-right">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-[#541215]/60 uppercase">
              Rate / Sq.Ft.
            </span>
          </div>

          <div className="px-8 py-5 text-right">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-[#541215]/60 uppercase">
              Rate / Cent*
            </span>
          </div>
        </div>

        {/* Table Rows */}
        {data.map((item) => (
          <motion.div
            key={item.category}
            variants={itemVariants}
            className={`grid grid-cols-[1.2fr_1fr_1fr] items-center border-b border-[#541215]/8 last:border-b-0 ${
              item.featured ? "bg-[#FBFAF7]" : "bg-white"
            }`}
          >
            {/* Category */}
            <div className="flex items-center gap-4 px-8 py-5">
              <div>
                <p className="font-[Marcellus] text-[21px] text-[#541215]">
                  {item.category}
                </p>

                {item.featured && (
                  <span className="text-[8px] font-semibold tracking-[0.15em] text-[#D4AF37] uppercase">
                    Premium Selection
                  </span>
                )}
              </div>
            </div>

            {/* Sq.Ft Rate */}
            <div className="px-8 py-5 text-right">
              <span className="text-[17px] font-semibold text-[#711717]">
                {item.sqftRate}
              </span>
            </div>

            {/* Cent Rate */}
            <div className="px-8 py-5 text-right">
              <span className="text-[17px] font-semibold text-[#541215]">
                {item.centRate}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="divide-y divide-[#541215]/10 md:hidden">
        {data.map((item) => (
          <motion.div
            key={item.category}
            variants={itemVariants}
            className={`p-5 ${
              item.featured ? "bg-[#FBFAF7]" : "bg-white"
            }`}
          >
            {/* Category */}
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  item.featured
                    ? "bg-[#D4AF37]/15 text-[#711717]"
                    : "bg-[#541215]/5 text-[#711717]"
                }`}
              >
                <BadgeIndianRupee size={18} strokeWidth={1.5} />
              </div>

              <div>
                <h4 className="font-[Marcellus] text-[20px] text-[#541215]">
                  {item.category}
                </h4>

                {item.featured && (
                  <span className="text-[8px] font-semibold tracking-[0.12em] text-[#D4AF37] uppercase">
                    Premium
                  </span>
                )}
              </div>
            </div>

            {/* Mobile pricing cards */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-[#541215]/8 bg-white px-4 py-3">
                <p className="text-[8px] font-semibold tracking-[0.15em] text-[#541215]/45 uppercase">
                  Sq. Ft. Rate
                </p>

                <p className="mt-1 text-[15px] font-semibold text-[#711717]">
                  {item.sqftRate}
                </p>
              </div>

              <div className="rounded-xl border border-[#541215]/8 bg-white px-4 py-3">
                <p className="text-[8px] font-semibold tracking-[0.15em] text-[#541215]/45 uppercase">
                  Cent Rate
                </p>

                <p className="mt-1 text-[15px] font-semibold text-[#541215]">
                  {item.centRate}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function PriceDetails() {
  const reraNumber = "TN RERA/16/LO/2743/2026";

  return (
    <section id="price-details" className="relative overflow-hidden py-5">
      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-12">

        {/* ================= TITLE ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
          className="mb-10 text-center sm:mb-14"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span className="text-[9px] font-semibold tracking-[0.3em] text-[#711717] uppercase sm:text-[10px]">
              Pricing Details
            </span>

            <span className="h-px w-10 bg-[#D4AF37]" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="font-[Marcellus] text-[40px] leading-[1.05] tracking-tight text-[#541215] sm:text-[50px] lg:text-[56px]"
          >
            Prime Estate{" "}
            <span className="text-[#711717]">Pricing</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-xl text-[13px] leading-6 text-[#541215]/60 sm:text-[14px]"
          >
            Attractive Price List
          </motion.p>
        </motion.div>

        {/* ================= PRICE TABLE ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-6"
        >
          <PricingTable
            title="Attractive Price List"
            data={pricingData}
          />
        </motion.div>

        {/* ================= RERA ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mt-6 px-5 py-5 sm:px-7 sm:py-6"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden border border-[#541215]/15 bg-white p-1 sm:h-18 sm:w-18">
              <Image
                src="/image/project/primeestate/QR.png"
                alt="RERA Registration QR Code"
                fill
                sizes="72px"
                className="object-contain"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] leading-6 text-[#541215] sm:text-[13px] sm:leading-7">
                <span className="font-semibold">RERA No:</span>{" "}
                <span className="break-all">{reraNumber}</span>
              </p>

              <p className="mt-1 text-[11px] leading-6 text-[#541215] sm:text-[13px] sm:leading-7">
                <span className="font-semibold">Website:</span>{" "}
                <a
                  href="https://rera.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#711717] transition-colors hover:text-[#541215] hover:underline"
                >
                  RERA.TN.GOV.IN
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= NOTE ================= */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-center text-[9px] leading-5 text-[#541215]/40 sm:text-[10px]"
        >
          * 1 CENT = 435.6 SQ.FT. Prices shown are indicative and subject to
          change. Please contact our sales team for the latest pricing and
          availability.
        </motion.p>
      </div>
    </section>
  );
}