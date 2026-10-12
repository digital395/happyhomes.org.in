"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      setError("Name can contain letters and spaces only.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
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
          name,
          phone,
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
    <main className="flex items-start justify-center bg-white px-6 pt-2 pb-12 md:min-h-screen md:items-center md:px-10 md:pt-1 md:pb-20">
      <section className="w-full max-w-167 md:max-w-275">
        <div className="mb-3 flex items-center justify-center gap-3 md:mb-5 md:gap-5">
          <span className="h-px w-16 bg-linear-to-l from-[#781817] to-transparent md:w-28 lg:w-36" />

          <span className="shrink-0 font-serif text-[11px] tracking-[1px] text-[#781817] md:text-[15px] lg:text-[16px]">
            CONTACT US
          </span>

          <span className="h-px w-16 bg-linear-to-r from-[#781817] to-transparent md:w-28 lg:w-36" />
        </div>

        <h1 className="font-poppins mb-14.5 text-center text-[30px] leading-[1.15] font-normal text-[#711515] md:mb-18.75 md:text-[48px] lg:mb-21.25 lg:text-[56px]">
          A New Chapter in Planned Living
        </h1>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mt-6 grid grid-cols-1 gap-x-9.25 gap-y-9.25 md:mt-20 md:grid-cols-2 md:gap-x-20 md:gap-y-16.25">
            <div className="relative">
              <label
                htmlFor="name"
                className="mb-2 block text-[13px] text-[#333] md:text-[16px] lg:text-[17px]"
              >
                Name <span className="text-red-600">*</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                inputMode="text"
                autoComplete="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  setName(value);
                }}
                className="h-7.5 w-full border-0 border-b border-[#bdbdbd] bg-transparent text-sm transition-colors outline-none placeholder:text-[#999] focus:border-[#711515] md:h-9.5 md:text-[15px] lg:h-10.5 lg:text-[16px]"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="phone"
                className="mb-2 block text-[13px] text-[#333] md:text-[16px] lg:text-[17px]"
              >
                Phone <span className="text-red-600">*</span>
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={10}
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setPhone(value);
                }}
                className="h-7.5 w-full border-0 border-b border-[#bdbdbd] bg-transparent text-sm transition-colors outline-none placeholder:text-[#999] focus:border-[#711515] md:h-9.5 md:text-[15px] lg:h-10.5 lg:text-[16px]"
              />
            </div>

            <div className="relative md:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 block text-[13px] text-[#333] md:text-[16px] lg:text-[17px]"
              >
                Email{" "}
                <span className="text-[11px] text-[#888] md:text-[13px]">
                  (Optional)
                </span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="h-7.5 w-full border-0 border-b border-[#bdbdbd] bg-transparent text-sm transition-colors outline-none placeholder:text-[#999] focus:border-[#711515] md:h-9.5 md:text-[15px] lg:h-10.5 lg:text-[16px]"
              />
            </div>
          </div>

          {error && (
            <p className="mt-5 text-center text-[11px] text-red-600 md:text-[13px]">
              {error}
            </p>
          )}

          {success && (
            <p className="mt-5 text-center text-[11px] text-green-600 md:text-[13px]">
              {success}
            </p>
          )}

          <div className="mt-10 flex justify-center md:mt-15 lg:mt-17.5">
            <button
              type="submit"
              disabled={loading || !name.trim() || phone.length !== 10}
              className="h-10.25 w-30.75 bg-[#711515] text-[14px] font-medium text-[#d8b04b] uppercase transition-all duration-200 hover:bg-[#5d1111] disabled:cursor-not-allowed disabled:bg-[#5d1111]/90 disabled:text-white disabled:opacity-70 md:h-10.5 md:w-36.25 md:text-[14px] lg:h-11.5 lg:w-38.75 lg:text-[16px]"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
