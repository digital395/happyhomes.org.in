"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import EnquiryPopup from "@/section/common/popup";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
];

const projects = [
  {
    name: "Emperor City",
    href: "/project/emperor-city",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const menuContainer = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease,
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

const menuItem = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
    },
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (menuOpen || enquiryOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, enquiryOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    setProjectDropdownOpen(false);
  };

  const openEnquiry = () => {
    setMenuOpen(false);
    setProjectDropdownOpen(false);
    setEnquiryOpen(true);
  };

  const isActive = (link: { name: string; href: string }) => {
    if (link.name === "Home") {
      return pathname === "/";
    }

    if (link.name === "Project") {
      return pathname.startsWith("/project");
    }

    return pathname === link.href;
  };

  return (
    <>
      <header className="fixed top-0 left-0 z-100 w-full">
        <nav className="relative flex h-15 w-full items-center bg-white shadow-[0_2px_20px_rgba(0,0,0,0.07)] md:h-18">
          <Link
            href="/"
            onClick={closeMenu}
            className="group relative z-110 ml-5 flex h-22.5 w-18.75 shrink-0 items-center justify-center overflow-hidden bg-[#851c17] shadow-[0_6px_20px_rgba(133,28,23,0.18)] md:ml-16 md:h-31.25 md:w-25.5 lg:ml-20"
          >
            <motion.span
              className="absolute top-0 left-0 h-0.75 w-full bg-[#d9a62e]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                ease,
              }}
              style={{
                transformOrigin: "left",
              }}
            />

            <motion.div
              whileHover={{
                scale: 1.05,
                y: -1,
              }}
              transition={{
                duration: 0.45,
                ease,
              }}
              className="mt-2 md:mt-5"
            >
              <Image
                src="/image/logo/hh-white.png"
                alt="Happy Homes"
                width={105}
                height={80}
                priority
                className="h-auto w-16.25 object-contain md:w-19.5"
              />
            </motion.div>

            <motion.span
              className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 bg-[#d9a62e]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease,
              }}
            />
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                x: 35,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                  ease,
                  delay: 0.25,
                  staggerChildren: 0.08,
                },
              },
            }}
            className="hidden flex-1 items-center justify-end md:flex"
          >
            <div className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link, index) => {
                const active = isActive(link);

                return (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: -12,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.55,
                          ease,
                        },
                      },
                    }}
                    className="relative flex h-18 items-center"
                  >
                    {link.name === "Project" ? (
                      <button
                        type="button"
                        aria-expanded={projectDropdownOpen}
                        onClick={() => setProjectDropdownOpen((prev) => !prev)}
                        className={`group font-poppins relative flex h-18 items-center gap-1 text-[14px] font-semibold tracking-[0.35px] ${
                          active ? "text-[#851c17]" : "text-[#333]"
                        }`}
                      >
                        <motion.span
                          animate={{
                            y: projectDropdownOpen ? -1 : 0,
                          }}
                          whileHover={{
                            y: -2,
                          }}
                          transition={{
                            duration: 0.3,
                            ease,
                          }}
                        >
                          Project
                        </motion.span>

                        <motion.svg
                          animate={{
                            rotate: projectDropdownOpen ? 180 : 0,
                            y: projectDropdownOpen ? -1 : 0,
                          }}
                          whileHover={{
                            y: -1,
                          }}
                          transition={{
                            duration: 0.35,
                            ease,
                          }}
                          className="ml-0.5 h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="m5 7 5 5 5-5" />
                        </motion.svg>

                        <motion.span
                          className="absolute bottom-3.25 left-0 h-px bg-[#d9a62e]"
                          initial={{
                            width: active ? "100%" : "0%",
                          }}
                          animate={{
                            width:
                              active || projectDropdownOpen ? "100%" : "0%",
                          }}
                          whileHover={{
                            width: "100%",
                          }}
                          transition={{
                            duration: 0.4,
                            ease,
                          }}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={`group font-poppins relative flex h-18 items-center text-[14px] font-semibold tracking-[0.35px] ${
                          active ? "text-[#851c17]" : "text-[#333]"
                        }`}
                      >
                        <motion.span
                          whileHover={{
                            y: -2,
                          }}
                          transition={{
                            duration: 0.3,
                            ease,
                          }}
                        >
                          {link.name}
                        </motion.span>

                        <motion.span
                          className="absolute bottom-3.25 left-0 h-px bg-[#d9a62e]"
                          initial={{
                            width: active ? "100%" : "0%",
                          }}
                          whileHover={{
                            width: "100%",
                          }}
                          animate={{
                            width: active ? "100%" : "0%",
                          }}
                          transition={{
                            duration: 0.4,
                            ease,
                          }}
                        />
                      </Link>
                    )}

                    <AnimatePresence>
                      {link.name === "Project" && projectDropdownOpen && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: -12,
                            scale: 0.96,
                            filter: "blur(4px)",
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                            scale: 0.97,
                            filter: "blur(3px)",
                          }}
                          transition={{
                            duration: 0.4,
                            ease,
                          }}
                          className="absolute top-[calc(100%-1px)] left-1/2 z-50 w-64 origin-top -translate-x-1/2"
                        >
                          <div className="relative overflow-hidden rounded-xl border border-[#851c17]/[0.07] bg-white p-2 shadow-[0_25px_60px_rgba(42,9,7,0.16)]">
                            <motion.div
                              initial={{
                                scaleX: 0,
                              }}
                              animate={{
                                scaleX: 1,
                              }}
                              transition={{
                                duration: 0.5,
                                delay: 0.1,
                                ease,
                              }}
                              className="mx-3 mt-1 mb-2 h-0.5 w-8 origin-left bg-[#d9a62e]"
                            />

                            <div className="px-3 pb-1">
                              <span className="text-[9px] font-medium tracking-[1.8px] text-[#999] uppercase">
                                Our Projects
                              </span>
                            </div>

                            {projects.map((project, projectIndex) => (
                              <motion.div
                                key={project.name}
                                initial={{
                                  opacity: 0,
                                  x: -12,
                                }}
                                animate={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                transition={{
                                  duration: 0.4,
                                  delay: 0.12 + projectIndex * 0.07,
                                  ease,
                                }}
                              >
                                <Link
                                  href={project.href}
                                  onClick={() => setProjectDropdownOpen(false)}
                                  className={`group flex items-center justify-between rounded-lg px-4 py-3.5 text-[13px] font-medium transition-all duration-300 ${
                                    pathname === project.href
                                      ? "bg-[#851c17]/5 text-[#851c17]"
                                      : "text-[#333] hover:bg-[#851c17]/4 hover:text-[#851c17]"
                                  }`}
                                >
                                  <span className="flex items-center gap-3">
                                    <span
                                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                                        pathname === project.href
                                          ? "bg-[#d9a62e]"
                                          : "bg-[#ddd] group-hover:bg-[#d9a62e]"
                                      }`}
                                    />

                                    {project.name}
                                  </span>

                                  <motion.span
                                    initial={{
                                      x: -5,
                                      opacity: 0,
                                    }}
                                    whileHover={{
                                      x: 3,
                                      opacity: 1,
                                    }}
                                    className="text-[#d9a62e]"
                                  >
                                    →
                                  </motion.span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>

                          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-t border-l border-[#851c17]/[0.07] bg-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <div className="hidden items-center pr-8 pl-6 md:flex lg:pr-16 lg:pl-8">
            <motion.button
              type="button"
              onClick={openEnquiry}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
                ease,
              }}
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative flex h-11 w-37.5 items-center justify-center overflow-hidden bg-[#851c17] text-[11px] font-medium tracking-[1px] text-[#d9a62e] uppercase shadow-[0_7px_25px_rgba(133,28,23,0.12)]"
            >
              <motion.span
                className="absolute inset-0 bg-[#6f1713]"
                initial={{
                  x: "-101%",
                }}
                whileHover={{
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease,
                }}
              />

              <motion.span
                className="absolute top-0 left-0 h-0.5 bg-[#d9a62e]"
                initial={{
                  width: "0%",
                }}
                whileHover={{
                  width: "100%",
                }}
                transition={{
                  duration: 0.5,
                  ease,
                }}
              />

              <span className="absolute top-0 right-0 h-2 w-2 border-t border-r border-[#d9a62e]" />

              <span className="relative z-10">Enquire Now</span>

              <motion.span
                className="relative z-10 ml-2"
                animate={{
                  x: [0, 0],
                }}
                whileHover={{
                  x: 5,
                }}
                transition={{
                  duration: 0.3,
                  ease,
                }}
              >
                →
              </motion.span>
            </motion.button>
          </div>

          <div className="ml-auto flex items-center pr-5 md:hidden">
            <motion.button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              whileTap={{ scale: 0.92 }}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#851c17]/10 bg-white shadow-[0_4px_15px_rgba(42,9,7,0.05)]"
            >
              <div className="relative h-4 w-5">
                <motion.span
                  animate={
                    menuOpen
                      ? {
                          top: "50%",
                          rotate: 45,
                        }
                      : {
                          top: 0,
                          rotate: 0,
                        }
                  }
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="absolute left-0 h-[1.5px] w-full bg-[#851c17]"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? {
                          opacity: 0,
                          x: 8,
                        }
                      : {
                          opacity: 1,
                          x: 0,
                        }
                  }
                  transition={{
                    duration: 0.25,
                    ease,
                  }}
                  className="absolute top-2 left-0 h-[1.5px] w-3.5 bg-[#d9a62e]"
                />

                <motion.span
                  animate={
                    menuOpen
                      ? {
                          top: "50%",
                          rotate: -45,
                        }
                      : {
                          top: "100%",
                          rotate: 0,
                        }
                  }
                  transition={{
                    duration: 0.35,
                    ease,
                  }}
                  className="absolute left-0 h-[1.5px] w-full bg-[#851c17]"
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            onClick={closeMenu}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease,
            }}
            className="fixed inset-0 z-80 bg-[#2a0907]/45 backdrop-blur-xs md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-x-0 top-15 z-90 max-h-[calc(100dvh-3.75rem)] overflow-y-auto bg-white shadow-[0_25px_60px_rgba(42,9,7,0.18)] md:hidden"
          >
            <motion.div
              variants={menuItem}
              className="border-b border-[#eee8df] px-6 pt-7 pb-5"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{
                  duration: 0.5,
                  delay: 0.25,
                  ease,
                }}
                className="mb-3 h-0.5 bg-[#d9a62e]"
              />

              <p className="font-serif text-[11px] tracking-[2px] text-[#851c17] uppercase">
                Welcome to Happy Homes
              </p>

              <p className="mt-2 text-[11px] leading-5 text-[#777]">
                Building better destinations for tomorrow
              </p>
            </motion.div>

            <div className="px-6">
              {navLinks.map((link, index) => {
                const active = isActive(link);

                return (
                  <motion.div
                    key={link.name}
                    variants={menuItem}
                    className="border-b border-[#eee8df]"
                  >
                    {link.name === "Project" ? (
                      <div className="py-4">
                        <button
                          type="button"
                          aria-expanded={projectDropdownOpen}
                          onClick={() =>
                            setProjectDropdownOpen((prev) => !prev)
                          }
                          className="flex w-full items-center justify-between py-1 text-left"
                        >
                          <span className="flex items-center gap-4">
                            <span className="w-6 font-sans text-[11px] tracking-wider text-[#b28a32]">
                              0{index + 1}
                            </span>

                            <span
                              className={`font-serif text-[20px] ${
                                active ? "text-[#851c17]" : "text-[#333]"
                              }`}
                            >
                              Project
                            </span>
                          </span>

                          <motion.svg
                            animate={{
                              rotate: projectDropdownOpen ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.35,
                              ease,
                            }}
                            className="h-4 w-4 text-[#851c17]"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path d="m5 7 5 5 5-5" />
                          </motion.svg>
                        </button>

                        <AnimatePresence initial={false}>
                          {projectDropdownOpen && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.4,
                                ease,
                              }}
                              className="overflow-hidden"
                            >
                              <div className="mt-3 ml-10 border-l border-[#d9a62e]/60 pl-4">
                                {projects.map((project) => (
                                  <Link
                                    key={project.name}
                                    href={project.href}
                                    onClick={() => {
                                      closeMenu();
                                    }}
                                    className="group flex items-center justify-between py-3 text-[14px] text-[#555] transition-colors duration-300 hover:text-[#851c17]"
                                  >
                                    <span>{project.name}</span>

                                    <motion.span
                                      whileHover={{ x: 4 }}
                                      className="text-[#d9a62e]"
                                    >
                                      →
                                    </motion.span>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="group flex items-center justify-between py-5"
                      >
                        <span className="flex items-center gap-4">
                          <span className="w-6 font-sans text-[11px] tracking-wider text-[#b28a32]">
                            0{index + 1}
                          </span>

                          <span
                            className={`font-serif text-[20px] transition-colors duration-300 ${
                              active
                                ? "text-[#851c17]"
                                : "text-[#333] group-hover:text-[#851c17]"
                            }`}
                          >
                            {link.name}
                          </span>
                        </span>

                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{
                            duration: 0.3,
                            ease,
                          }}
                          className="text-[18px] text-[#b28a32]"
                        >
                          →
                        </motion.span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div variants={menuItem} className="px-6 pt-6 pb-7">
              <motion.button
                type="button"
                onClick={openEnquiry}
                whileTap={{
                  scale: 0.98,
                }}
                className="group relative flex min-h-12 w-full items-center justify-center gap-3 overflow-hidden bg-[#851c17] px-4 text-[11px] font-medium tracking-[1px] text-[#d9a62e] uppercase"
              >
                <motion.span
                  className="absolute inset-0 bg-[#6f1713]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                />

                <span className="relative z-10">
                  Start Your Property Journey
                </span>

                <motion.span
                  className="relative z-10 text-base"
                  whileHover={{ x: 5 }}
                  transition={{
                    duration: 0.3,
                    ease,
                  }}
                >
                  →
                </motion.span>
              </motion.button>

              <p className="mt-4 text-center text-[10px] tracking-[1.5px] text-[#888]">
                FIND YOUR PLACE WITH HAPPY HOMES
              </p>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease,
              }}
              className="h-0.75 w-full origin-left bg-[#d9a62e]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryPopup
        open={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        downloadBrochure={false}
      />
    </>
  );
}
