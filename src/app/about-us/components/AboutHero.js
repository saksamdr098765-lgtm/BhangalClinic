"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const stats = [
  {
    number: "1000+",
    label: "Patients Served",
  },
  {
    number: "50+",
    label: "Diagnostic Tests",
  },
  {
    number: "10+",
    label: "Years Experience",
  },
  {
    number: "99%",
    label: "Report Accuracy",
  },
];

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        pt-32
        pb-20

        sm:pt-36

        lg:pt-44
        lg:pb-28
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
          -left-32
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-blue-100/60
          blur-3xl
        "
      />

      <div
        className="
          absolute
          -right-32
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-sky-100/60
          blur-3xl
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
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            grid
            items-center
            gap-16

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
                bg-white
                px-5
                py-2
                text-sm
                font-semibold
                text-blue-700
                shadow-sm
              "
            >
              About Our Laboratory
            </span>

            <h1
              className="
                mt-8
                text-5xl
                font-black
                leading-[0.95]
                tracking-tight
                text-slate-900

                sm:text-6xl

                lg:text-7xl
              "
            >
              Trusted
              <br />

              Diagnostics
              <br />

              For Every

              <span className="block text-blue-600">
                Family.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-slate-600
              "
            >
              Bhangal Clinical Laboratory combines experienced
              healthcare professionals with advanced diagnostic
              technology to deliver accurate pathology testing,
              timely reports, and compassionate care for every
              family.
            </p>

            {/* Buttons */}

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
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Book a Test

                <FiArrowRight />
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
                Contact Us
              </Link>
            </div>

            {/* Features */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-3
              "
            >
              {[
                "NABL Certified",
                "Home Collection",
                "Fast Reports",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-slate-200
                    bg-white/80
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    backdrop-blur
                  "
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="relative">
            <div
              className="
                overflow-hidden
                rounded-[32px]
                border
                border-slate-200
                bg-white
                shadow-xl
              "
            >
              <Image
                src="/images/about/lab.jpg"
                alt="Bhangal Clinical Laboratory"
                width={700}
                height={850}
                className="
                  h-[650px]
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                -bottom-6
                -left-6
                rounded-3xl
                border
                border-slate-200
                bg-white/90
                px-6
                py-5
                shadow-xl
                backdrop-blur-xl
              "
            >
              <p className="text-3xl font-black text-blue-600">
                1000+
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Happy Patients
              </p>
            </div>
          </div>
        </motion.div>
                {/* Stats */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-20
            rounded-[32px]
            border
            border-slate-200
            bg-white/80
            p-8
            shadow-sm
            backdrop-blur-xl

            md:p-10
          "
        >
          <div
            className="
              grid
              grid-cols-2
              gap-8

              lg:grid-cols-4
            "
          >
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 25,
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
                className="relative text-center"
              >
                {/* Divider */}

                {index !== stats.length - 1 && (
                  <div
                    className="
                      absolute
                      right-0
                      top-1/2
                      hidden
                      h-12
                      w-px
                      -translate-y-1/2
                      bg-slate-200

                      lg:block
                    "
                  />
                )}

                <h2
                  className="
                    text-4xl
                    font-black
                    tracking-tight
                    text-slate-900

                    sm:text-5xl
                  "
                >
                  {item.number}
                </h2>

                <p
                  className="
                    mt-3
                    text-sm
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-slate-500
                  "
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}