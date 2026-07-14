"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiPhone,
  FiCheckCircle,
} from "react-icons/fi";
import SITE_CONFIG from "@/app/SITE_CONFIG";

const trust = [
  "NABL Standard Practices",
  "Experienced Professionals",
  "Fast Digital Reports",
  "Home Sample Collection",
];

export default function CTA() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-950
        py-20

        lg:py-28
      "
    >
      {/* Background */}

      <div
        className="
          absolute
          left-0
          top-0
          h-96
          w-96
          rounded-full
          bg-blue-600/20
          blur-[140px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4

          sm:px-6
        "
      >
        <motion.div
          initial={{
            opacity:0,
            y:40,
          }}
          whileInView={{
            opacity:1,
            y:0,
          }}
          viewport={{
            once:true,
          }}
          transition={{
            duration:.7,
          }}
          className="
            mx-auto
            max-w-5xl
            text-center
          "
        >
          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-5
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-300

              sm:text-sm
            "
          >
            Your Health Matters
          </span>

          <h2
            className="
              mt-8
              text-4xl
              font-black
              leading-[0.95]
              text-white

              sm:text-5xl

              lg:text-7xl
            "
          >
            Accurate Diagnosis.
            <br />

            Better Healthcare.
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-lg
              leading-9
              text-slate-300
            "
          >
            Experience trusted pathology services backed by modern
            laboratory technology, experienced professionals,
            and a commitment to delivering reliable results
            with complete transparency.
          </p>

          <div
            className="
              mt-12
              flex
              flex-col
              justify-center
              gap-4

              sm:flex-row
            "
          >
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-500
                hover:shadow-2xl
              "
            >
              Book a Test

              <FiArrowRight />
            </Link>

            <a
               href={`tel:${SITE_CONFIG.phone}`}
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-slate-700
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:border-blue-500
              "
            >
              <FiPhone />

              Call Now
            </a>
          </div>
                    {/* Trust Strip */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-20
            "
          >
            <div
              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                px-8
                py-8
              "
            >
              <div
                className="
                  grid
                  gap-6

                  sm:grid-cols-2

                  lg:grid-cols-4
                "
              >
                {trust.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-500/20
                      "
                    >
                      <FiCheckCircle
                        className="
                          text-xl
                          text-blue-300
                        "
                      />
                    </div>

                    <span
                      className="
                        text-sm
                        font-medium
                        text-slate-200

                        sm:text-base
                      "
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Text */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-10
            "
          >
            <p
              className="
                text-sm
                leading-7
                text-slate-400

                sm:text-base
              "
            >
              Trusted by thousands of patients for reliable diagnostics,
              timely reports, and compassionate healthcare services.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}