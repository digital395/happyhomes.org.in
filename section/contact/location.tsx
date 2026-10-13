"use client";

import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactLocation() {
  const shouldReduceMotion = useReducedMotion();
  const duration = shouldReduceMotion ? 0.01 : 0.85;

  return (
    <section className="w-full overflow-hidden bg-white py-10 md:py-20 lg:py-24">
      <div className="mx-auto flex w-[90%] max-w-180 flex-col gap-8 rounded-[14px] bg-[#781817] p-6 md:max-w-275 md:flex-row md:gap-0 md:p-[55px_45px] lg:max-w-312.5 lg:p-[65px_55px]">
        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : -45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration,
            ease,
          }}
          className="w-full md:w-[52%]"
        >
          <motion.div
            initial={{
              scale: shouldReduceMotion ? 1 : 0.96,
            }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 1.1,
              delay: shouldReduceMotion ? 0 : 0.1,
              ease,
            }}
            className="h-78.75 w-full overflow-hidden bg-[#dcefe7] md:h-112.5 lg:h-125"
          >
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14995.301421389424!2d77.7748119!3d8.6944282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b040d88c3404ccf%3A0x6b61989cb91db911!2sEmperor%20City%20-%20Happy%20Homes!5e1!3m2!1sen!2sin!4v1791459185426!5m2!1sen!2sin"
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: shouldReduceMotion ? 0 : 45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease,
          }}
          className="flex w-full flex-col justify-center px-2 md:w-[48%] md:pl-13.75 lg:pl-18.75"
        >
          <motion.h2
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration,
              delay: shouldReduceMotion ? 0 : 0.25,
              ease,
            }}
            className="font-poppins max-w-55 bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] bg-clip-text text-[18px] leading-[1.35] font-bold text-transparent md:max-w-100 md:text-[32px]"
          >
            Where awesome happens
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease,
            }}
            className="mt-3 max-w-65 text-[10px] leading-[1.65] text-white md:mt-5 md:max-w-107.5 md:text-[16px]"
          >
            Have question or need help with your account?
            <br />
            We&apos;re here for you!
          </motion.p>

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.9,
              delay: shouldReduceMotion ? 0 : 0.4,
              ease,
            }}
            style={{ originX: 0 }}
            className="my-5 h-px w-full max-w-65 bg-[#bd6863] md:my-9 md:max-w-90 lg:my-10 lg:max-w-100"
          />

          <motion.h3
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration,
              delay: shouldReduceMotion ? 0 : 0.45,
              ease,
            }}
            className="font-poppins max-w-55 bg-[radial-gradient(36.25%_152.47%_at_49.79%_50%,#FDEF63_0%,#FCEA5E_20%,#F9DB52_43%,#F4C33E_68%,#EEA222_94%,#EE9F20_97%)] bg-clip-text text-[18px] leading-[1.35] font-bold text-transparent md:max-w-100 md:text-[32px]"
          >
            Corporate Office Address
          </motion.h3>

          <div className="mt-3 flex items-start gap-2.5 md:mt-6 md:gap-4">
            <motion.div
              initial={{
                opacity: 0,
                scale: shouldReduceMotion ? 1 : 0.5,
                rotate: shouldReduceMotion ? 0 : -25,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.65,
                delay: shouldReduceMotion ? 0 : 0.55,
                ease,
              }}
              className="-mt-0.5 shrink-0 text-[#e3ae20]"
            >
              <MapPin size={20} strokeWidth={1.5} className="md:h-8 md:w-8" />
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration,
                delay: shouldReduceMotion ? 0 : 0.6,
                ease,
              }}
              className="text-[10px] leading-[1.65] text-white md:text-[16px]"
            >
              11/1, 3rd Floor, 19th Ave, Sector 10, Sector 13,
              <br />
              Ashok Nagar, Chennai, Tamil Nadu 600083
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
