"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Pattern */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(#cbd5e1_1px,transparent_1px)]
          [background-size:28px_28px]
          opacity-40
        "
      />

      {/* Soft Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-100/60
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mx-auto
            max-w-5xl
            rounded-[32px]
            border
            border-slate-200
            bg-white/80
            p-10
            text-center
            shadow-xl
            backdrop-blur-xl

            md:p-16
          "
        >
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
            Preventive Healthcare
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-slate-900

              md:text-5xl
            "
          >
            Stay Ahead of Health Problems
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Book trusted health checkups with convenient home sample
            collection and receive secure digital reports from
            NABL-certified laboratories.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4

              sm:flex-row
            "
          >
            <Link
              href="/about-us"
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
              "
            >
              Learn about

              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="
                rounded-full
                border
                border-slate-300
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
      </div>
    </section>
  );
}