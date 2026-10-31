"use client";

import { motion } from "framer-motion";

import {
  TrainFront,
  GraduationCap,
  HeartPulse,
  ShoppingBasket,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Transport & Connectivity",
    icon: TrainFront,
    description:
      "Seamless access to major transport hubs for convenient everyday travel.",
    places: [
      ["Vellanththeru Bus Stop", "5 min"],
      ["Chatram Bus Stand", "10 min"],
      ["Mutharasanallur Railway Station", "7 min"],
      ["Tiruchirappalli Junction Railway Station", "15 min"],
      ["Tiruchirappalli International Airport", "20 min"],
    ],
  },
  {
    number: "02",
    title: "Educational Institutions",
    icon: GraduationCap,
    description:
      "Quality schools and colleges are conveniently located within easy reach.",
    places: [
      ["R. Thayanithi Memorial Vidyasala Matriculation School", "5 min"],
      ["Kamalam Viswanathan College of Physiotherapy", "6 min"],
      ["Government Higher Secondary School", "7 min"],
      ["Bishop Heber College", "10 min"],
      ["St. Joseph's College", "10 min"],
    ],
  },
  {
    number: "03",
    title: "Healthcare Facilities",
    icon: HeartPulse,
    description:
      "Reliable healthcare and medical services are close to your doorstep.",
    places: [
      ["Thirumurugan Clinic and Pharmacy", "6 min"],
      ["R.V. Dental Hospital", "6 min"],
      ["Atlas Hospital", "10 min"],
    ],
  },
  {
    number: "04",
    title: "Shopping & Daily Essentials",
    icon: ShoppingBasket,
    description:
      "Supermarkets, medicals and banking facilities for everyday convenience.",
    places: [
      ["Magizh Supermarket", "5 min"],
      ["Raja Supermarket", "6 min"],
      ["Abi Medicals", "6 min"],
      ["DBS Bank, Kambarasampettai Branch", "6 min"],
    ],
  },
];

export default function Map() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-350">
        {/* Section Heading */}
        <motion.div
          className="mb-10 text-center md:mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-linear-to-l from-[#781817] to-transparent sm:w-20" />

            <span className="font-[Poppins] text-[10px] font-medium tracking-[2px] text-[#781817] uppercase sm:text-[11px]">
              LOCATION HIGHLIGHTS
            </span>

            <span className="h-px w-12 bg-linear-to-r from-[#781817] to-transparent sm:w-20" />
          </div>

          <h2 className="font-[Marcellus] text-[27px] leading-[1.2] font-normal text-[#781817] sm:text-[32px] md:text-[42px]">
            Right Next to a Thriving Neighbourhood
          </h2>

          <p className="mx-auto mt-5 max-w-225 font-[Poppins] text-[13px] leading-[1.8] text-[#737373] sm:text-[14px] md:text-[15px]">
            Prime Estate is strategically located near Woraiyur, Trichy, with
            easy access to education, healthcare, transportation, shopping and
            essential everyday services.
          </p>
        </motion.div>

        {/* All Categories */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {highlights.map((highlight, index) => (
            <motion.article
              key={highlight.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative flex flex-col overflow-hidden rounded-[18px] border border-[#541215]/10 bg-[#FCFAF5] transition-all duration-500 hover:-translate-y-1 hover:border-[#B99750]/50 hover:shadow-[0_18px_45px_rgba(43,9,11,0.08)]"
            >
              {/* Top Accent */}
              <div className="h-1 w-full bg-linear-to-r from-[#781817] via-[#B99750] to-[#781817] opacity-80" />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Number */}
               <div className="flex items-start justify-between">
  <span className="font-[Marcellus] text-[38px] leading-none text-[#C7A35D]">
    {highlight.number}
  </span>

  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B99750]/30 bg-[#B99750]/8 text-[#781817] transition-all duration-500 group-hover:border-[#B99750] group-hover:bg-[#781817] group-hover:text-white">
    <highlight.icon
      size={21}
      strokeWidth={1.5}
    />
  </div>
</div>

                {/* Title */}
                <h3 className="mt-5 min-h-14.5 font-[Marcellus] text-[21px] leading-[1.2] text-[#541215] sm:text-[22px]">
                  {highlight.title}
                </h3>

                {/* Gold Line */}
                <span className="mt-4 block h-px w-10 bg-[#B99750] transition-all duration-500 group-hover:w-16" />

                {/* Description */}
                <p className="mt-4 min-h-17 font-[Poppins] text-[11px] leading-[1.7] text-[#777] sm:text-[12px]">
                  {highlight.description}
                </p>

                {/* Places */}
                <div className="mt-5 border-t border-[#541215]/10">
                  {highlight.places.map(([place, time], placeIndex) => (
                    <div
                      key={place}
                      className="flex items-start gap-2.5 border-b border-[#541215]/8 py-3 last:border-b-0"
                    >
                      {/* Small Number */}
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#B99750]/40 font-[Poppins] text-[8px] text-[#781817]">
                        {String(placeIndex + 1).padStart(2, "0")}
                      </span>

                      {/* Place Name */}
                      <span className="min-w-0 flex-1 font-[Poppins] text-[10.5px] leading-[1.45] text-[#555] sm:text-[11px]">
                        {place}
                      </span>

                      {/* Time */}
                      <span className="shrink-0 pt-0.5 font-[Marcellus] text-[12px] whitespace-nowrap text-[#781817]">
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          className="mt-9 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          <span className="h-px w-10 bg-[#B99750]" />

          <span className="font-[Poppins] text-[9px] tracking-[1.5px] text-[#999] uppercase sm:text-[10px]">
            Everything within easy reach
          </span>

          <span className="h-px w-10 bg-[#B99750]" />
        </motion.div>
      </div>
    </section>
  );
}