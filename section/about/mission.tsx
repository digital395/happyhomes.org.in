"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { mission } from "@/data/mission";

export default function VisionSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % mission.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative h-[55vh] min-h-100 w-full overflow-hidden md:h-[55vh] md:min-h-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={mission[active].image}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="absolute inset-0"
        >
          <Image
            src={mission[active].image}
            alt={mission[active].title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-black/60"
      />

      <div className="absolute inset-0 hidden md:grid md:grid-cols-4">
        {mission.map((item, index) => {
          const isActive = active === index;

          return (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease,
              }}
              className={`group relative flex h-full flex-col justify-end border-l border-white/10 p-8 text-left ${
                isActive ? "bg-black/20" : "hover:bg-black/20"
              }`}
            >
              <div className="w-full pb-2">
                {/* <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    y: isActive ? 0 : 3,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="mb-3 block text-sm text-white/40"
                >
                  0{item.id}
                </motion.span> */}

                <motion.h3
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                    y: isActive ? 0 : 4,
                  }}
                  transition={{
                    duration: 0.5,
                    ease,
                  }}
                  className="font-marcellus mb-3 text-xl font-semibold text-white"
                >
                  {item.title}
                </motion.h3>

                <AnimatePresence initial={false} mode="wait">
                  {isActive && (
                    <motion.div
                      key={`description-${item.id}`}
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
                        duration: 0.6,
                        ease,
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{
                          opacity: 0,
                          y: 15,
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
                          duration: 0.5,
                          delay: 0.1,
                          ease,
                        }}
                        className="font-poppins max-w-95 text-sm leading-6 text-white/80"
                      >
                        {item.subtitle}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="relative h-full w-full md:hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={mission[active].id}
            initial={{
              opacity: 0,
              scale: 1.06,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1.02,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="absolute inset-0"
          >
            <Image
              src={mission[active].image}
              alt={mission[active].title}
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-black/90 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${mission[active].id}`}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="absolute inset-x-0 bottom-0 p-5 pb-7"
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease,
              }}
              className="flex items-center gap-3"
            >
              {/* <span className="text-[10px] tracking-[2px] text-white/50">
                0{mission[active].id}
              </span> */}

              <span className="h-px w-6 shrink-0 bg-white/30" />

              <h3 className="font-marcellus text-sm font-medium tracking-[1.5px] text-white">
                {mission[active].title}
              </h3>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease,
              }}
              className="font-poppins mt-2 max-w-85 text-[11px] leading-[1.6] text-white/75"
            >
              {mission[active].subtitle}
            </motion.p>

            <div className="mt-4 flex gap-1.5">
              {mission.map((_, dotIndex) => (
                <motion.span
                  key={dotIndex}
                  animate={{
                    width: dotIndex === active ? 32 : 12,
                    opacity: dotIndex === active ? 1 : 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                    ease,
                  }}
                  className="h-0.5 bg-white"
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-y-0 left-0 w-1/4" />
        <div className="absolute inset-y-0 right-0 w-1/4" />
      </div>
    </section>
  );
}
