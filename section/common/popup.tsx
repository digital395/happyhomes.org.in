"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { saveLeadVerification } from "@/utils/LeadVerification";
import { AnimatePresence, motion } from "framer-motion";

type EnquiryPopupProps = {
  open: boolean;
  onClose: () => void;
  downloadBrochure?: boolean;
    prime?: boolean;

};

const ease = [0.22, 1, 0.36, 1] as const;

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease,
    },
  },
};

const popupVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: {
      duration: 0.35,
      ease,
    },
  },
};

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

export default function EnquiryPopup({
  open,
  onClose,
  downloadBrochure = false,
  prime = false,
}: EnquiryPopupProps)  {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  if (!open) return null;

const downloadBrochureFile = () => {
  const link = document.createElement("a");

  if (prime) {
    link.href = "/brochure/prime-brochure.pdf";
    link.download = "Prime-Estate-Brochure.pdf";
  } else {
    link.href = "/brochure/emperor-brochure.pdf";
    link.download = "Emperor-City-Brochure.pdf";
  }

  document.body.appendChild(link);
  link.click();
  link.remove();
};

  const handleClose = () => {
    if (isSubmitting) return;

    setFormError("");
    setFormSuccess("");
    setShowThankYou(false);
    setName("");
    setPhone("");

    onClose();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormError("");
    setFormSuccess("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const submittedName = String(formData.get("name") || "").trim();
    const submittedPhone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();

    if (!submittedName) {
      setFormError("Please enter your name.");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(submittedName)) {
      setFormError("Name can contain letters and spaces only.");
      return;
    }

    if (!/^\d{10}$/.test(submittedPhone)) {
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
          name: submittedName,
          phone: submittedPhone,
          email: email || null,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(
          data?.message || "Unable to submit your enquiry. Please try again.",
        );
      }

      if (downloadBrochure) {
        saveLeadVerification();
        downloadBrochureFile();
      }

      form.reset();
      setName("");
      setPhone("");
      setFormError("");
      setFormSuccess("");
      setShowThankYou(true);
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
      <AnimatePresence>
        {!showThankYou ? (
          <motion.div
            key="enquiry"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-999 flex items-center justify-center bg-[#160908]/75 px-4 py-6 backdrop-blur-[6px]"
            onClick={handleClose}
          >
            <motion.div
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-140 overflow-hidden rounded-[14px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            >
              <div className="relative overflow-hidden bg-[#541215] px-6 py-7 md:px-9 md:py-8">
                <div className="pointer-events-none absolute -top-20 -right-16 h-48 w-48 rounded-full bg-[#f2b900]/10 blur-3xl" />

                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                      },
                    },
                  }}
                  className="relative flex items-start justify-between gap-5"
                >
                  <div>
                    <motion.h2
                      variants={fieldVariants}
                      className="font-marcellus text-[25px] leading-[1.2] text-white md:text-[32px]"
                    >
                      Let's Start Your
                      <br />
                      <span className="text-[#f2b900]">Property Journey</span>
                    </motion.h2>

                    <motion.p
                      variants={fieldVariants}
                      className="font-poppins mt-3 max-w-100 text-[12px] leading-relaxed text-white/55 md:text-[14px]"
                    >
                      Tell us a little about yourself and our property experts
                      will get back to you shortly.
                    </motion.p>
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close contact form"
                    whileHover={{
                      rotate: 90,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#f2b900] hover:bg-[#f2b900] hover:text-[#7A1A15]"
                  >
                    <X size={17} strokeWidth={1.5} />
                  </motion.button>
                </motion.div>

                <div className="mt-6 h-px w-12 bg-[#f2b900]" />
              </div>

              <motion.form
                onSubmit={handleSubmit}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      delayChildren: 0.15,
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="px-6 py-7 md:px-9 md:py-8"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    variants={fieldVariants}
                    className="group flex flex-col gap-2"
                  >
                    <label
                      htmlFor="enquiry-name"
                      className="font-poppins text-[12px] font-semibold tracking-[1.5px] text-[#7A1A15] uppercase md:text-[13px]"
                    >
                      Name <span className="text-red-600">*</span>
                    </label>

                    <motion.input
                      whileFocus={{
                        y: -1,
                      }}
                      transition={{
                        duration: 0.25,
                        ease,
                      }}
                      id="enquiry-name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^A-Za-z ]/g, "");
                        setName(value);
                      }}
                      className="font-poppins h-11 w-full border-b border-[#d9d9d9] bg-transparent px-1 text-[13px] text-[#333] transition-colors duration-300 outline-none placeholder:text-[#aaa] focus:border-[#7A1A15]"
                    />
                  </motion.div>

                  <motion.div
                    variants={fieldVariants}
                    className="group flex flex-col gap-2"
                  >
                    <label
                      htmlFor="enquiry-phone"
                      className="font-poppins text-[12px] font-semibold tracking-[1.5px] text-[#7A1A15] uppercase md:text-[13px]"
                    >
                      Phone <span className="text-red-600">*</span>
                    </label>

                    <motion.input
                      whileFocus={{
                        y: -1,
                      }}
                      transition={{
                        duration: 0.25,
                        ease,
                      }}
                      id="enquiry-phone"
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
                      className="font-poppins h-11 w-full border-b border-[#d9d9d9] bg-transparent px-1 text-[13px] text-[#333] transition-colors duration-300 outline-none placeholder:text-[#aaa] focus:border-[#7A1A15]"
                    />
                  </motion.div>
                </div>

                <motion.div
                  variants={fieldVariants}
                  className="mt-6 flex flex-col gap-2"
                >
                  <label
                    htmlFor="enquiry-email"
                    className="font-poppins text-[12px] font-semibold tracking-[1.5px] text-[#7A1A15] uppercase md:text-[13px]"
                  >
                    Email
                  </label>

                  <motion.input
                    whileFocus={{
                      y: -1,
                    }}
                    transition={{
                      duration: 0.25,
                      ease,
                    }}
                    id="enquiry-email"
                    name="email"
                    type="email"
                    placeholder="Your Email (Optional)"
                    autoComplete="email"
                    className="font-poppins h-11 w-full border-b border-[#d9d9d9] bg-transparent px-1 text-[13px] text-[#333] transition-colors duration-300 outline-none placeholder:text-[#aaa] focus:border-[#7A1A15]"
                  />
                </motion.div>

                <AnimatePresence mode="wait">
                  {formError && (
                    <motion.p
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="font-poppins mt-6 text-center text-[11px] font-medium text-[#b42318] md:text-[12px]"
                    >
                      {formError}
                    </motion.p>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {formSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: -8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -8, height: 0 }}
                      transition={{ duration: 0.35, ease }}
                      className="font-poppins mt-6 text-center text-[11px] font-medium text-[#16803c] md:text-[12px]"
                    >
                      {formSuccess}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || phone.length !== 10}
                  whileHover={
                    !isSubmitting && name.trim() && phone.length === 10
                      ? {
                          y: -2,
                          scale: 1.02,
                        }
                      : {}
                  }
                  whileTap={
                    !isSubmitting && name.trim() && phone.length === 10
                      ? {
                          scale: 0.97,
                        }
                      : {}
                  }
                  animate={{
                    opacity: !name.trim() || phone.length !== 10 ? 0.45 : 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="font-poppins mx-auto mt-8 flex h-11 min-w-44 items-center justify-center overflow-hidden bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] px-7 text-[13px] font-semibold tracking-[1.2px] text-[#541215] uppercase shadow-[0_8px_20px_rgba(238,162,34,0.18)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(238,162,34,0.28)] hover:brightness-95 disabled:cursor-not-allowed"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={
                        isSubmitting
                          ? "sending"
                          : !name.trim() || phone.length !== 10
                            ? "incomplete"
                            : "submit"
                      }
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.25,
                        ease,
                      }}
                    >
                      {isSubmitting
                        ? "Sending..."
                        : !name.trim() || phone.length !== 10
                          ? "Please fill name & phone"
                          : "Send Enquiry"}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>

                <p className="font-poppins mt-4 text-center text-[11px] tracking-[0.2px] text-[#999] md:text-[14px]">
                  Your information is safe with us. We'll never share your
                  details.
                </p>
              </motion.form>
            </motion.div>
          </motion.div>
        ) : (
          <div className="fixed inset-0 z-1000 flex items-center justify-center bg-[#160908]/75 px-4 py-6 backdrop-blur-[6px]">
            <motion.div
              key="thank-you"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-full max-w-md rounded-2xl bg-white px-7 py-10 text-center shadow-2xl sm:px-10"
            >
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f2b900]/15"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-8 w-8 text-[#7A1A15]"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12.5 9.5 17 19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                  ease,
                }}
                className="font-poppins mt-6 text-2xl text-[#541215] sm:text-3xl"
              >
                Thank You!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  ease,
                }}
                className="font-poppins mt-3 text-sm leading-6 text-[#666]"
              >
                Thank you for contacting Happy Homes. Your enquiry has been
                received successfully. Our property experts will get in touch
                with you shortly.
              </motion.p>
              <button
                type="button"
                onClick={handleClose}
                className="font-poppins mt-7 inline-flex h-11 items-center justify-center rounded-sm bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%),linear-gradient(90deg,#541215_0%,#7A1A15_100%)] px-8 text-sm font-semibold tracking-wide text-[#541215] uppercase transition hover:brightness-95"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
