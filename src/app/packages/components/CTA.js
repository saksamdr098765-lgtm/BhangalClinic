"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">

      {/* Background Pattern */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]
          [background-size:24px_24px]
          opacity-30
          sm:[background-size:28px_28px]
        "
      />

      {/* Soft Glow */}

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
          blur-3xl

          sm:h-[500px]
          sm:w-[500px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">

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
            mx-auto
            max-w-5xl
            rounded-3xl
            border
            border-slate-200
            bg-white/90
            p-6
            text-center
            shadow-xl
            backdrop-blur-xl

            sm:rounded-[32px]
            sm:p-10

            lg:p-16
          "
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-3
              py-1.5
              text-xs
              font-semibold
              text-blue-700

              sm:px-4
              sm:py-2
              sm:text-sm
            "
          >
            Preventive Healthcare
          </span>


          {/* Heading */}

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
            Stay Ahead of
            <span className="block text-blue-600">
              Health Problems
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-600

              sm:mt-6
              sm:text-lg
              sm:leading-8
            "
          >
            Book trusted health checkups with convenient home sample
            collection and receive secure digital reports from
            NABL-certified laboratories.
          </p>


          {/* Buttons */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-3

              sm:mt-10
              sm:flex-row
              sm:items-center
              sm:justify-center
              sm:gap-4
            "
          >

            <Link
              href="/about-us"
              className="
                group
                flex
                h-12
                items-center
                justify-center
                gap-2
                rounded-full
                bg-blue-600
                px-7
                text-sm
                font-semibold
                text-white
                transition
                hover:-translate-y-1
                hover:bg-blue-700

                sm:h-14
                sm:px-8
                sm:text-base
              "
            >
              Learn About Us

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
                h-12
                items-center
                justify-center
                rounded-full
                border
                border-slate-300
                bg-white
                px-7
                text-sm
                font-semibold
                text-slate-700
                transition
                hover:border-blue-300
                hover:bg-blue-50

                sm:h-14
                sm:px-8
                sm:text-base
              "
            >
              Talk to an Expert
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}