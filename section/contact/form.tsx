"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0.01 : 0.75;

  const reveal = (direction: "left" | "right" | "up" | "down", delay = 0) => {
    const offset = shouldReduceMotion ? 0 : 35;

    const positions = {
      left: { x: -offset, y: 0 },
      right: { x: offset, y: 0 },
      up: { x: 0, y: offset },
      down: { x: 0, y: -offset },
    };

    return {
      initial: {
        opacity: 0,
        ...positions[direction],
      },
      animate: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      transition: {
        duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease,
      },
    };
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const nameValue = String(formData.get("name") || "").trim();
    const phoneValue = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!nameValue) {
      setError("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(nameValue)) {
      setError("Name can contain letters and spaces only.");
      return;
    }

    if (!/^\d{10}$/.test(phoneValue)) {
      setError("Phone number must contain exactly 10 digits.");
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          phone: phoneValue,
          email: email || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Something went wrong.");
      }

      setSuccess("Your request has been submitted successfully.");

      form.reset();
      setName("");
      setPhone("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit your request. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-start justify-center overflow-hidden bg-white px-6 pt-2 pb-12 md:min-h-screen md:items-center md:px-10 md:pt-1 md:pb-20">
      <section className="w-full max-w-167 md:max-w-275">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-5 md:gap-5">
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration, ease }}
            style={{ originX: 1 }}
            className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-28 lg:w-36"
          />

          <motion.span
            {...reveal("down", 0.1)}
            className="font-poppins shrink-0 text-[11px] tracking-[1px] text-[#781817] md:text-[15px] lg:text-[16px]"
          >
            CONTACT US
          </motion.span>

          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration,
              delay: shouldReduceMotion ? 0 : 0.15,
              ease,
            }}
            style={{ originX: 0 }}
            className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-28 lg:w-36"
          />
        </div>

        <motion.h1
          {...reveal("left", 0.2)}
          className="font-marcellus mb-14.5 text-center text-[30px] leading-[1.15] font-normal text-[#711515] md:mb-18.75 md:text-[48px] lg:mb-21.25 lg:text-[56px]"
        >
          A New Chapter in Planned Living
        </motion.h1>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mt-6 grid grid-cols-1 gap-x-9.25 gap-y-9.25 md:mt-20 md:grid-cols-2 md:gap-x-20 md:gap-y-16.25">
            <motion.div {...reveal("left", 0.3)} className="relative">
              <label
                htmlFor="name"
                className="mb-2 block text-[13px] text-[#333] md:text-[16px] lg:text-[17px]"
              >
                Name <span className="text-red-600">*</span>
              </label>

              <motion.input
                id="name"
                name="name"
                type="text"
                inputMode="text"
                autoComplete="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value.replace(/[^A-Za-z\s]/g, ""));
                }}
                whileFocus={{ borderColor: "#711515" }}
                transition={{ duration: 0.3, ease }}
                className="h-7.5 w-full border-0 border-b border-[#bdbdbd] bg-transparent text-sm outline-none placeholder:text-[#999] md:h-9.5 md:text-[15px] lg:h-10.5 lg:text-[16px]"
              />
            </motion.div>

            <motion.div {...reveal("right", 0.45)} className="relative">
              <label
                htmlFor="phone"
                className="mb-2 block text-[13px] text-[#333] md:text-[16px] lg:text-[17px]"
              >
                Phone <span className="text-red-600">*</span>
              </label>

              <motion.input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10));
                }}
                whileFocus={{ borderColor: "#711515" }}
                transition={{ duration: 0.3, ease }}
                className="h-7.5 w-full border-0 border-b border-[#bdbdbd] bg-transparent text-sm outline-none placeholder:text-[#999] md:h-9.5 md:text-[15px] lg:h-10.5 lg:text-[16px]"
              />
            </motion.div>

            <motion.div
              {...reveal("up", 0.6)}
              className="relative md:col-span-2"
            >
              <label
                htmlFor="email"
                className="mb-2 block text-[13px] text-[#333] md:text-[16px] lg:text-[17px]"
              >
                Email{" "}
                <span className="text-[11px] text-[#888] md:text-[13px]">
                  (Optional)
                </span>
              </label>

              <motion.input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                whileFocus={{ borderColor: "#711515" }}
                transition={{ duration: 0.3, ease }}
                className="h-7.5 w-full border-0 border-b border-[#bdbdbd] bg-transparent text-sm outline-none placeholder:text-[#999] md:h-9.5 md:text-[15px] lg:h-10.5 lg:text-[16px]"
              />
            </motion.div>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.p
                key="error"
                role="alert"
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                transition={{ duration: 0.3, ease }}
                className="mt-5 text-center text-[11px] text-red-600 md:text-[13px]"
              >
                {error}
              </motion.p>
            )}

            {success && (
              <motion.p
                key="success"
                role="status"
                initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                transition={{ duration: 0.35, ease }}
                className="mt-5 text-center text-[11px] text-green-600 md:text-[13px]"
              >
                {success}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 25,
              scale: shouldReduceMotion ? 1 : 0.94,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration,
              delay: shouldReduceMotion ? 0 : 0.75,
              ease,
            }}
            className="mt-10 flex justify-center md:mt-15 lg:mt-17.5"
          >
            <motion.button
              type="submit"
              disabled={loading || !name.trim() || phone.length !== 10}
              whileHover={
                shouldReduceMotion || loading
                  ? undefined
                  : { scale: 1.04, y: -2 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.25, ease }}
              className="h-10.25 w-30.75 bg-[#711515] text-[14px] font-medium text-[#d8b04b] uppercase transition-colors duration-300 hover:bg-[#5d1111] disabled:cursor-not-allowed disabled:bg-[#5d1111]/90 disabled:text-white disabled:opacity-70 md:h-10.5 md:w-36.25 md:text-[14px] lg:h-11.5 lg:w-38.75 lg:text-[16px]"
            >
              {loading ? "Sending..." : "Submit"}
            </motion.button>
          </motion.div>
        </form>
      </section>
    </main>
  );
}
