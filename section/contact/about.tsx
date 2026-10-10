"use client";

import { Phone } from "lucide-react";

interface ContactCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  phone: string;
}

function ContactCard({ title, description, phone }: ContactCardProps) {
  return (
    <div className="flex min-h-42.25 w-full flex-col items-center justify-center rounded-xl bg-[#781817] px-6 py-7 text-center md:min-h-95 md:w-130 md:px-12 md:py-14">
      <h2 className="font-poppins max-w-55 bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] bg-clip-text text-[18px] leading-[1.45] font-bold text-transparent md:max-w-100 md:text-[30px]">
        {title}
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-58.75 text-[13px] leading-[1.7] text-white md:mt-6 md:max-w-107.5 md:text-[16px]">
        {description}
      </p>

      {/* Phone */}
      <div className="mt-5 flex items-center gap-2 md:mt-8 md:gap-3">
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white md:h-8.5 md:w-8.5">
          <Phone
            size={11}
            strokeWidth={3}
            className="fill-[#781817] text-[#781817] md:h-4.25 md:w-4.25"
          />
        </div>

        <span className="font-poppins max-w-55 bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] bg-clip-text text-[15px] leading-[1.45] font-bold text-transparent md:max-w-100 md:text-[20px]">
          {phone}
        </span>
      </div>
    </div>
  );
}

export default function ContactAbout() {
  return (
    <section className="w-full bg-white px-6 py-8 md:px-8 md:py-14 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-155 md:max-w-212.5 lg:max-w-275">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
          <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

          <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
            ABOUT US
          </span>

          <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
        </div>

        <h1 className="text-center font-serif text-[30px] leading-[1.15] font-normal text-[#781817] md:text-[42px] lg:text-[48px]">
          A New Chapter in Planned Living
        </h1>

        <div className="mt-8 flex flex-col items-center justify-center gap-5 md:mt-14 md:flex-row md:gap-8">
          <ContactCard
            title={
              <>
                Contact our
                <br />
                Customer Success Team
              </>
            }
            description={
              <>
                Have question or need help with your account?
                <br />
                We&apos;re here for you!
              </>
            }
            phone="+91 123 456 7891"
          />

          <ContactCard
            title="Contact our Sales Team"
            description={
              <>
                Interested in signing up for Builder trend?
                <br />
                Chat or call with our sales team.
              </>
            }
            phone="+91 123 456 7891"
          />
        </div>
      </div>
    </section>
  );
}
