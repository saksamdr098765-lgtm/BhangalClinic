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
        py-16

        sm:py-20
        lg:py-24
      "
    >

      {/* Background */}

      <div className="absolute inset-0 bg-slate-50" />


      <div
        className="
          absolute
          inset-0
          opacity-30
          [background-image:radial-gradient(#cbd5e1_1px,transparent_1px)]
          [background-size:24px_24px]

          sm:[background-size:30px_30px]
        "
      />


      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-100/60
          blur-[100px]

          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[120px]
        "
      />


      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl
          px-4

          sm:px-6
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.5,
          }}

          className="
            rounded-3xl
            border
            border-slate-200
            bg-white/80
            p-6
            shadow-xl
            backdrop-blur-xl

            sm:rounded-[36px]
            sm:p-10

            lg:p-16
          "
        >

          <div
            className="
              grid
              gap-10

              lg:grid-cols-2
              lg:items-center
              lg:gap-12
            "
          >

            {/* Left Content */}

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
                  text-xs
                  font-semibold
                  text-blue-700

                  sm:text-sm
                "
              >
                Ready to Book?
              </span>


              <h2
                className="
                  mt-5
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-slate-900

                  sm:mt-6
                  sm:text-4xl

                  lg:text-5xl
                "
              >
                Take the First Step
                <br />

                Towards Better Health
              </h2>


              <p
                className="
                  mt-5
                  text-base
                  leading-7
                  text-slate-600

                  sm:mt-6
                  sm:text-lg
                  sm:leading-8
                "
              >
                Book the{" "}
                <strong className="font-bold text-slate-900">
                  {pkg.name}
                </strong>{" "}
                today and receive accurate laboratory testing,
                convenient home sample collection, and secure
                digital reports from Bhangal Clinical Laboratory.
              </p>

            </div>
                        {/* Right Content */}

            <div>

              {/* Trust Features */}

              <div
                className="
                  grid
                  gap-3

                  sm:gap-4
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
                        gap-3
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-4

                        sm:gap-4
                        sm:px-5
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
                          rounded-xl
                          bg-blue-50

                          sm:h-11
                          sm:w-11
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
                          text-sm
                          font-medium
                          text-slate-700

                          sm:text-base
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
                  mt-7
                  flex
                  flex-col
                  gap-3

                  sm:mt-8
                  sm:flex-row
                  sm:gap-4
                "
              >

                <Link
                  href="/book-test"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-blue-600
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition

                    sm:flex-1
                    sm:px-7
                    sm:py-4
                    sm:text-base

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
                    w-full
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-slate-200
                    bg-white
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-slate-700
                    transition

                    sm:flex-1
                    sm:px-7
                    sm:py-4
                    sm:text-base

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