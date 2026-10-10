"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const highlights = [
  "70 Acres",
  "Premium Plots",
  "Grand Clubhouse",
  "Future Connectivity",
];

export default function Project() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormError("");
    setFormSuccess("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!name) {
      setFormError("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      setFormError("Name can contain letters and spaces only.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setFormError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email: email || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setFormSuccess("Thank you! We will get back to you shortly.");

      form.reset();

      setTimeout(() => {
        setIsOpen(false);
        setFormSuccess("");
      }, 1800);
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Unable to submit your enquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
        <div className="relative z-20 mx-auto w-full max-w-300 px-5 pt-12 text-center sm:px-8 sm:pt-14 md:pt-16 lg:pt-12">
          <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
            <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

            <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
              Brand Introduction
            </span>

            <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
          </div>

          <h2 className="mx-auto max-w-full font-serif text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
            A New Chapter in Planned Living
          </h2>

          <p className="mx-auto mt-7 max-w-250 text-[13px] leading-[2.2] font-normal tracking-[0.5px] text-[#000] md:text-[18px]">
            A home begins with a place. At Happy Homes, we believe that choosing
            the right place is the first step towards building a happy and
            secure future. We identify locations with strong growth potential,
            connectivity and developing infrastructure, and transform them into
            thoughtfully planned communities where families can build their
            dream homes and investors can look towards long-term appreciation.
            As a sister concern of VIP City, Happy Homes carries forward a
            legacy of real estate experience while establishing its own identity
            with a fresh approach to plotted development. With plans to expand
            across 8 more districts in Tamil Nadu, we are working towards
            creating a growing network of well-planned communities across the
            state.
          </p>
        </div>

        <div className="relative isolate z-10 -mt-150 min-h-300 overflow-hidden lg:-mt-200 lg:min-h-500">
          <Image
            src="/image/home/project/emperor-city.webp"
            alt="Emperor City entrance"
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-center md:block"
          />

          {/* Mobile image: 750 × 1100 */}
          <Image
            src="/image/home/project/phone2.png"
            alt="Emperor City entrance"
            fill
            priority
            sizes="100vw"
            className="object-fit object-center md:hidden"
          />

          <div className="pointer-events-none absolute inset-x-0 top-0 z-1 h-[35%] bg-linear-to-b from-white via-white/70 to-transparent" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-[55%] bg-linear-to-t from-[#541215] via-[#541215]/75 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 z-10 px-4 pt-28 pb-8 text-center sm:px-6 sm:pb-12 md:pb-14 lg:pb-16">
            <div className="mx-auto max-w-5xl">
              <div className="mb-3 flex items-center justify-center gap-3 sm:mb-4">
                <span className="h-px w-10 bg-linear-to-l from-white/90 to-transparent sm:w-20" />
                <span className="font-poppins shrink-0 text-[10px] font-medium tracking-[1.5px] text-white sm:text-[12px]">
                  EMPEROR CITY
                </span>
                <span className="h-px w-10 bg-linear-to-r from-white/90 to-transparent sm:w-20" />
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-marcellus text-[16px] leading-tight font-normal text-white drop-shadow-md sm:text-[32px] md:text-[38px] lg:text-[44px]"
              >
                Tirunelveli&apos;s Biggest Integrated Township
              </motion.h3>

              <div className="mx-auto mt-5 flex max-w-212.5 flex-wrap justify-center gap-2 sm:mt-6 sm:gap-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="flex min-h-9 items-center justify-center rounded-sm border border-white/70 bg-white/95 px-1 py-2 text-[8px] font-medium text-[#541215] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fdef63] sm:min-h-10 sm:px-5 sm:text-[12px] md:text-[13px]"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="mt-5 inline-flex min-h-9 items-center justify-center rounded-full bg-linear-to-r from-[#fdef63] via-[#f9db52] to-[#eea222] px-6 text-[9px] font-semibold tracking-wide text-[#541215] uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 sm:mt-7 sm:min-h-11 sm:px-8 sm:text-[12px]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-999 flex items-center justify-center bg-[#160908]/75 px-4 py-6 backdrop-blur-[6px]"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-140 animate-[popupIn_0.35s_ease-out] overflow-hidden rounded-[14px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden bg-[#541215] px-6 py-7 md:px-9 md:py-8">
              <div className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-[#f2b900]/10 blur-3xl" />

              <div className="relative flex items-start justify-between gap-5">
                <div>
                  <h2 className="font-marcellus text-[25px] leading-[1.2] text-white md:text-[32px]">
                    Let&apos;s Start Your
                    <br />
                    <span className="text-[#f2b900]">Property Journey</span>
                  </h2>

                  <p className="mt-3 max-w-100 text-[12px] leading-relaxed text-white/55 md:text-[14px]">
                    Tell us a little about yourself and our property experts
                    will get back to you shortly.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close contact form"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 hover:border-[#f2b900] hover:bg-[#f2b900] hover:text-[#7A1A15]"
                >
                  <X size={17} strokeWidth={1.5} />
                </button>
              </div>

              <div className="mt-6 h-px w-12 bg-[#f2b900]" />
            </div>

            <form onSubmit={handleSubmit} className="px-6 py-7 md:px-9 md:py-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="group flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[12px] font-semibold tracking-[1.5px] text-[#7A1A15] uppercase md:text-[13px]"
                  >
                    Name <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^A-Za-z ]/g, "");
                      setName(value);
                    }}
                    className="h-11 w-full border-b border-[#d9d9d9] bg-transparent px-1 text-[13px] text-[#333] transition-colors duration-300 outline-none placeholder:text-[#aaa] focus:border-[#7A1A15]"
                  />
                </div>

                <div className="group flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-[12px] font-semibold tracking-[1.5px] text-[#7A1A15] uppercase md:text-[13px]"
                  >
                    Phone <span className="text-red-600">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    placeholder="Your Phone"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                      setPhone(value);
                    }}
                    className="h-11 w-full border-b border-[#d9d9d9] bg-transparent px-1 text-[13px] text-[#333] transition-colors duration-300 outline-none placeholder:text-[#aaa] focus:border-[#7A1A15]"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[12px] font-semibold tracking-[1.5px] text-[#7A1A15] uppercase md:text-[13px]"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email (Optional)"
                  autoComplete="email"
                  className="h-11 w-full border-b border-[#d9d9d9] bg-transparent px-1 text-[13px] text-[#333] transition-colors duration-300 outline-none placeholder:text-[#aaa] focus:border-[#7A1A15]"
                />
              </div>
              {formError && (
                <p className="mt-6 text-center text-[11px] font-medium text-[#b42318] md:text-[12px]">
                  {formError}
                </p>
              )}

              {formSuccess && (
                <p className="mt-6 text-center text-[11px] font-medium text-[#16803c] md:text-[12px]">
                  {formSuccess}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting || !name.trim() || phone.length !== 10}
                className="mx-auto mt-8 flex h-11 w-fit min-w-36.25 items-center justify-center bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] px-7 text-[13px] font-semibold tracking-[1.2px] text-[#541215] uppercase shadow-[0_8px_20px_rgba(238,162,34,0.18)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_10px_25px_rgba(238,162,34,0.28)] hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              <p className="mt-4 text-center text-[11px] tracking-[0.2px] text-[#999] md:text-[14px]">
                Your information is safe with us. We&apos;ll never share your
                details.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
