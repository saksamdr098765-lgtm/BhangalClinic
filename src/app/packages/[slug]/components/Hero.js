"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiClock,
  FiHome,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero({ pkg }) {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        pt-32
        pb-20

        lg:pt-40
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
          [background-size:28px_28px]
        "
      />

      <div
        className="
          absolute
          -left-40
          top-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-blue-100/50
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-100/50
          blur-3xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
        "
      >
        <div
          className="
            grid
            items-center
            gap-16

            lg:grid-cols-2
          "
        >
          {/* Left */}

          <motion.div
            {...fadeUp}
            transition={{
              duration: .5,
            }}
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
                shadow-sm
              "
            >
              {pkg.tests} Diagnostic Tests
            </span>

            <h1
              className="
                mt-6
                text-5xl
                font-black
                leading-[1]
                tracking-tight
                text-slate-900

                lg:text-7xl
              "
            >
              {pkg.name}
            </h1>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              {pkg.description}
            </p>

            {/* Highlights */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {[
                {
                  icon: FiHome,
                  text: "Home Collection",
                },
                {
                  icon: FiClock,
                  text: "24h Reports",
                },
                {
                  icon: FiShield,
                  text: "NABL Certified",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.text}
                    className="
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-slate-200
                      bg-white/80
                      px-4
                      py-2
                      backdrop-blur
                    "
                  >
                    <Icon className="text-blue-600" />

                    <span
                      className="
                        text-sm
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

            {/* Price */}

            <div className="mt-10">

              <div className="flex items-end gap-4">

                <span
                  className="
                    text-5xl
                    font-black
                    tracking-tight
                    text-slate-900
                  "
                >
                  ₹{pkg.price}
                </span>

                <span
                  className="
                    pb-2
                    text-2xl
                    text-slate-400
                    line-through
                  "
                >
                  ₹{pkg.originalPrice}
                </span>

              </div>

              <p
                className="
                  mt-2
                  font-medium
                  text-emerald-600
                "
              >
                Save ₹{pkg.originalPrice - pkg.price}
              </p>

            </div>

            {/* CTA */}

            <div
              className="
                mt-10
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
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-blue-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-600/20
                  transition
                  hover:-translate-y-1
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
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-8
                  py-4
                  font-semibold
                  text-slate-700
                  transition
                  hover:border-blue-300
                  hover:bg-blue-50
                "
              >
                Talk to an Expert
              </Link>
            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            {...fadeUp}
            transition={{
              delay: .15,
            }}
            className="
              relative
            "
          >
            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white/80
                p-8
                shadow-xl
                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                "
              >
                Package Highlights
              </h3>

              <div className="mt-8 space-y-5">

                {[
                  `${pkg.tests} Health Tests`,
                  "Free Home Sample Collection",
                  "Digital Reports",
                  "NABL Certified Laboratory",
                  "Doctor Reviewed Reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                      "
                    >
                      <FiCheckCircle
                        className="text-blue-600"
                      />
                    </div>

                    <span
                      className="
                        font-medium
                        text-slate-700
                      "
                    >
                      {item}
                    </span>

                  </div>
                ))}

              </div>

              <div
                className="
                  mt-8
                  rounded-2xl
                  bg-blue-50
                  p-5
                "
              >
                <p
                  className="
                    text-sm
                    text-slate-600
                  "
                >
                  Recommended For
                </p>

                <p
                  className="
                    mt-2
                    font-semibold
                    text-slate-900
                  "
                >
                  Annual health checkups, working professionals,
                  adults above 30 years, and preventive healthcare.
                </p>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}