"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "@/data/sociallink";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  {
    label: "Project",
    subLinks: [{ label: "Emperor City", href: "/project/emperor-city" }],
  },
  { label: "Contact", href: "/contact" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const footerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const footerItem = {
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

const footerNavItem = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease,
    },
  },
};

const socialItem = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    y: 10,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease,
    },
  },
};

export default function Footer() {
  const [projectOpen, setProjectOpen] = useState(false);
  const pathname = usePathname();

  return (
    <footer className="w-full overflow-hidden bg-[#7A1A15] text-white">
      <motion.div
        variants={footerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto w-full max-w-325 px-6 py-6 md:px-2 md:py-8"
      >
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-[150px_minmax(0,1fr)_210px] md:items-center md:gap-10 lg:grid-cols-[170px_minmax(0,1fr)_230px] lg:gap-12">
          <motion.div
            variants={footerItem}
            className="order-2 flex w-full flex-col items-center border-b border-white/10 pb-7 text-center md:order-1 md:w-auto md:items-start md:border-b-0 md:pb-0 md:text-left"
          >
            <nav className="flex flex-col items-center gap-3 md:items-start md:gap-4">
              {navLinks.map((link, index) => {
                const isProject = link.label === "Project";

                const isActive = isProject
                  ? pathname.startsWith("/project")
                  : pathname === link.href;

                return (
                  <motion.div
                    key={link.label}
                    variants={footerNavItem}
                    custom={index}
                    className="flex flex-col items-center md:items-start"
                  >
                    {isProject ? (
                      <>
                        <motion.button
                          type="button"
                          onClick={() => setProjectOpen((prev) => !prev)}
                          aria-expanded={projectOpen}
                          whileHover={{ x: 3 }}
                          whileTap={{ scale: 0.97 }}
                          className={`group flex w-fit items-center gap-2 text-[13px] font-normal transition-colors duration-300 md:text-[13px] lg:text-[14px] ${
                            isActive
                              ? "text-[#f2b900]"
                              : "text-white/65 hover:text-white"
                          }`}
                        >
                          <span className="relative">
                            Project
                            <motion.span
                              className="absolute -bottom-1 left-0 h-px bg-[#f2b900]"
                              initial={{ width: isActive ? "100%" : "0%" }}
                              animate={{
                                width: isActive || projectOpen ? "100%" : "0%",
                              }}
                              transition={{
                                duration: 0.35,
                                ease,
                              }}
                            />
                          </span>

                          <motion.svg
                            animate={{
                              rotate: projectOpen ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.4,
                              ease,
                            }}
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="m5 7.5 5 5 5-5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </motion.svg>
                        </motion.button>

                        <AnimatePresence initial={false}>
                          {projectOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                                y: -5,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                y: -5,
                              }}
                              transition={{
                                duration: 0.4,
                                ease,
                              }}
                              className="overflow-hidden"
                            >
                              <motion.div
                                initial="hidden"
                                animate="visible"
                                className="mt-3 flex flex-col items-center gap-3 border-l border-[#f2b900]/50 pl-3 md:ml-2 md:items-start"
                              >
                                {link.subLinks?.map((subLink) => {
                                  const isSubActive = pathname === subLink.href;

                                  return (
                                    <motion.a
                                      key={subLink.href}
                                      href={subLink.href}
                                      variants={{
                                        hidden: {
                                          opacity: 0,
                                          x: -8,
                                        },
                                        visible: {
                                          opacity: 1,
                                          x: 0,
                                          transition: {
                                            duration: 0.4,
                                            ease,
                                          },
                                        },
                                      }}
                                      whileHover={{ x: 4 }}
                                      className={`group relative w-fit text-[12px] transition-colors duration-300 md:text-[12px] lg:text-[13px] ${
                                        isSubActive
                                          ? "text-[#f2b900]"
                                          : "text-white/55 hover:text-white"
                                      }`}
                                    >
                                      {subLink.label}

                                      <motion.span
                                        className="absolute -bottom-1 left-0 h-px bg-[#f2b900]"
                                        initial={{
                                          width: isSubActive ? "100%" : "0%",
                                        }}
                                        whileHover={{
                                          width: "100%",
                                        }}
                                        transition={{
                                          duration: 0.3,
                                          ease,
                                        }}
                                      />
                                    </motion.a>
                                  );
                                })}
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <motion.a
                        href={link.href}
                        whileHover={{
                          x: 4,
                        }}
                        whileTap={{
                          scale: 0.97,
                        }}
                        className={`group relative w-fit text-[13px] font-normal transition-colors duration-300 md:text-[13px] lg:text-[14px] ${
                          isActive
                            ? "text-[#f2b900]"
                            : "text-white/65 hover:text-white"
                        }`}
                      >
                        {link.label}

                        <motion.span
                          className="absolute -bottom-1 left-0 h-px bg-[#f2b900]"
                          initial={{
                            width: isActive ? "100%" : "0%",
                          }}
                          whileHover={{
                            width: "100%",
                          }}
                          transition={{
                            duration: 0.35,
                            ease,
                          }}
                        />
                      </motion.a>
                    )}
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>

          <motion.div
            variants={footerItem}
            className="relative order-1 flex flex-col items-center border-b border-white/10 py-8 text-center md:order-2 md:border-x-0 md:border-b-0 md:px-8 md:py-2 lg:px-12"
          >
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease,
              }}
              className="mb-5 flex items-center gap-2"
            >
              <span className="h-px w-7 bg-[#f2b900]/70" />
              <motion.span
                animate={{ rotate: [45, 225, 405] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-1 w-1 bg-[#f2b900]"
              />
              <span className="h-px w-7 bg-[#f2b900]/70" />
            </motion.div>

            <motion.a
              href="/"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.35,
                ease,
              }}
              className="mb-5 md:mb-5"
            >
              <Image
                src="/image/logo/hh-white.png"
                alt="Happy Homes"
                width={115}
                height={90}
                className="h-auto w-25 object-contain md:w-26.25 lg:w-27.5"
              />
            </motion.a>

            <motion.p
              variants={footerItem}
              className="max-w-130 text-[12px] leading-[1.8] text-white/70 md:text-[14px] lg:leading-6"
            >
              Building Trust. Shaping Futures.
            </motion.p>

            <motion.div
              variants={footerContainer}
              className="mt-5 flex w-full flex-col items-center justify-center gap-3 text-[12px] text-white/55 sm:flex-row sm:gap-3 md:mt-4 md:text-[13px]"
            >
              <motion.a
                variants={footerItem}
                href="mailto:info@happyhomes.org.in"
                whileHover={{
                  y: -2,
                }}
                className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <motion.span
                  whileHover={{
                    rotate: -8,
                    scale: 1.08,
                  }}
                  className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[3px] bg-[#f2b900] text-[#851c17]"
                >
                  <FaEnvelope size={10} />
                </motion.span>

                <span>INFO@HAPPYHOMES.ORG.IN</span>
              </motion.a>

              <span className="hidden text-white/25 sm:block">|</span>

              <motion.a
                variants={footerItem}
                href="tel:+7823988988"
                whileHover={{
                  y: -2,
                }}
                className="flex items-center gap-2 transition-colors duration-300 hover:text-white"
              >
                <motion.span
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-[3px] bg-[#f2b900] text-[#851c17]"
                >
                  <FaPhone size={10} />
                </motion.span>

                <span>+91 7823988988</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={footerItem}
            className="order-3 flex flex-col items-center md:items-end"
          >
            <motion.p
              variants={footerItem}
              className="mb-4 text-[13px] font-medium text-[#f2b900] md:text-right md:text-[16px]"
            >
              Follow us
            </motion.p>

            <motion.div
              variants={footerContainer}
              className="flex items-center justify-center gap-2 sm:gap-3 md:justify-end"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  variants={socialItem}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.92,
                  }}
                  transition={{
                    duration: 0.3,
                    ease,
                  }}
                  className="flex h-7.75 w-7.75 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-[#f2b900] hover:bg-[#f2b900] hover:text-[#851c17]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={footerItem}
          className="mt-8 border-t border-white/10 pt-4 md:mt-7 md:pt-4"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "35px", opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease,
              }}
              className="h-px bg-[#f2b900]/60"
            />

            <p className="text-center text-[10px] tracking-[0.5px] text-white/35 md:text-[12px]">
              © {new Date().getFullYear()} Happy Homes. All rights reserved.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
