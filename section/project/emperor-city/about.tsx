"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Download, ArrowRight } from "lucide-react";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const downloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "Emperor-City-Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
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

      setFormSuccess("Thank you! Your brochure is downloading.");

      form.reset();
      setName("");
      setPhone("");

      downloadBrochure();

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
      <section className="w-full bg-white px-4 py-3 pt-12 lg:px-10 lg:py-10">
        <div className="mx-auto w-full max-w-350">
          <div className="mb-7 text-center sm:mb-8 md:mb-10">
            <div className="mb-3 flex items-center justify-center gap-3 md:mb-4 md:gap-4">
              <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-24 lg:w-28" />

              <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[14px] lg:text-[15px]">
                EMPEROR CITY
              </span>

              <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-24 lg:w-28" />
            </div>

            <h2 className="mx-auto max-w-full text-center font-serif text-[30px] leading-[1.12] font-normal text-[#781817] md:text-[40px]">
              TIRUNELVELI'S BIGGEST INTEGRATED TOWNSHIP
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[35%_65%] md:gap-0">
            <div className="relative mx-auto w-full max-w-112.5 overflow-hidden rounded-2xl md:mx-0">
              <div className="relative aspect-[1.08/1] w-full">
                <Image
                  src="/image/project/about.webp"
                  alt="Happy family"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 400px, 400px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex h-full flex-col justify-center md:pl-4 lg:pl-3 xl:pl-4">
              <p className="font-poppins max-w-400 text-[20px] leading-[1.55] font-bold text-[#781818] uppercase md:text-[34px]">
                Where Grand Living Meets a Greater Future
              </p>

              <p className="font-poppins mt-4 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:mt-5 md:text-[18px]">
                Welcome to Emperor City, a landmark plotted development by Happy
                Homes, envisioned as Tirunelveli's biggest integrated township
                with a grand clubhouse.
              </p>

              <p className="font-poppins mt-2 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:text-[18px]">
                Spread across 70 acres, Emperor City brings together premium
                residential plots, thoughtfully planned infrastructure, wide
                roads, lifestyle amenities and a vibrant community environment —
                creating a destination designed for living, investing and
                growing.
              </p>
              <p className="font-poppins mt-2 max-w-400 text-[14px] leading-[1.85] font-normal text-[#6f6f73] md:text-[18px]">
                More than a plotted development, Emperor City is envisioned as a
                complete township where families can build their dream homes and
                experience a community-focused lifestyle.
              </p>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="group mt-6 inline-flex w-fit items-center justify-center gap-2 self-center rounded-sm border border-[#EEA222] bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] px-4 py-3 text-[11px] font-semibold tracking-[0.5px] text-[#541215] shadow-[0_5px_18px_rgba(238,162,34,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_9px_25px_rgba(238,162,34,0.35)] active:translate-y-0 sm:px-5 sm:text-xs"
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
