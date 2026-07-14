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
    <section className="relative overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-slate-950" />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300 sm:text-sm">
            Your Health Matters
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Accurate Diagnosis.

            <span className="mt-2 block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Better Healthcare.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Trusted pathology services with experienced professionals,
            advanced diagnostic technology, home sample collection and
            fast digital reports designed to make healthcare simpler,
            faster and more reliable.
          </p>

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl"
            >
              Book a Test
              <FiArrowRight />
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-white/5 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-white/10"
            >
              <FiPhone />
              Call Now
            </a>

          </div>

          {/* Trust Chips */}
                    {/* Trust Chips */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {trust.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  backdrop-blur
                  transition
                  hover:border-blue-500/40
                  hover:bg-white/10
                "
              >
                <FiCheckCircle className="text-blue-400" />

                <span className="text-sm font-medium text-slate-200">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Bottom Text */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
          >
            Trusted by thousands of patients for accurate diagnostics,
            timely reports, home sample collection, and compassionate
            healthcare services.
          </motion.p>

        </motion.div>

      </div>

    </section>
  );
}