"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiShield,
} from "react-icons/fi";

export default function CTA({ pkg }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-24
      "
    >
      {/* Background */}

      <div className="absolute inset-0 bg-slate-50" />

      <div
        className="
          absolute
          inset-0
          opacity-40
          [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)]
          [background-size:30px_30px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-100/60
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            rounded-[36px]
            border
            border-slate-200
            bg-white/80
            p-10
            shadow-xl
            backdrop-blur-xl

            lg:p-16
          "
        >
          <div
            className="
              grid
              items-center
              gap-12

              lg:grid-cols-2
            "
          >
            {/* Left */}

            <div>

              <span
                className="
                  inline-flex
                  rounded-full
                  border
                  border-blue-100
                  bg-blue-50
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-blue-700
                "
              >
                Ready to Book?
              </span>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-black
                  tracking-tight
                  text-slate-900

                  lg:text-5xl
                "
              >
                Take the First Step
                <br />
                Towards Better Health
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Book the{" "}
                <strong>{pkg.name}</strong> today and
                receive accurate laboratory testing,
                convenient home sample collection,
                and secure digital reports from
                Bhangal Clinical Laboratory.
              </p>

            </div>

            {/* Right */}

            <div>

              {/* Trust */}

              <div
                className="
                  grid
                  gap-4
                "
              >
                {[
                  {
                    icon: FiHome,
                    text: "Home Sample Collection",
                  },
                  {
                    icon: FiClock,
                    text: "Fast Digital Reports",
                  },
                  {
                    icon: FiShield,
                    text: "Trusted Laboratory",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="
                        flex
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-5
                        py-4
                      "
                    >
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-blue-50
                        "
                      >
                        <Icon
                          className="
                            text-blue-600
                          "
                        />
                      </div>

                      <span
                        className="
                          font-medium
                          text-slate-700
                        "
                      >
                        {item.text}
                      </span>

                    </div>
                  );
                })}

              </div>

              {/* Buttons */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-4

                  sm:flex-row
                "
              >
                <Link
                  href="/book-test"
                  className="
                    group
                    flex
                    flex-1
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-blue-600
                    px-7
                    py-4
                    font-semibold
                    text-white
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  Book This Package

                  <FiArrowRight
                    className="
                      transition
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  href="/contact"
                  className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-7
                    py-4
                    font-semibold
                    text-slate-700
                    transition
                    hover:border-blue-300
                    hover:bg-blue-50
                  "
                >
                  Contact Us
                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}