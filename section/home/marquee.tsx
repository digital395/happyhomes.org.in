"use client";

import Image from "next/image";
import { marquee } from "@/data/marquee";

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-[#781817] py-3">
      {" "}
      <div className="marquee-track flex w-max items-center">
        {[...marquee, ...marquee].map((item, index) => (
          <div
            key={index}
            className="mx-4 flex items-center gap-2 whitespace-nowrap md:mx-8"
          >
            {" "}
            <Image
              src={item.icon}
              alt=""
              width={25}
              height={25}
              className="h-6 w-6 shrink-0 md:h-10 md:w-10"
            />
            <span className="text-[15px] font-bold text-white md:text-[22px]">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
