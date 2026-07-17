"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCalendar,
  FiHome,
} from "react-icons/fi";
import SITE_CONFIG from "@/app/SITE_CONFIG";

const stats = [
  {
    value: "15K+",
    label: "Patients Served",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Diagnostic Tests",
  },
  {
    value: "99%",
    label: "Reliable Results",
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.22),transparent_60%)]" />

      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-white/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-4xl text-center"
        >

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">

            Book Your Health Checkup

          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

            Your Health

            <span className="block">
              Deserves The
            </span>

            <span className="block text-cyan-200">
              Best Care.
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-blue-50">

            Experience accurate pathology testing with modern laboratory
            technology, experienced professionals, convenient home sample
            collection, and fast digital reports—all designed around your
            health and peace of mind.

          </p>

        </motion.div>

        {/* Trust Numbers */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <div className="grid grid-cols-2 overflow-hidden rounded-[36px] border border-white/15 bg-white/10 backdrop-blur-xl lg:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.label}
                className="border-white/10 p-8 text-center odd:border-r even:border-l lg:border-r last:border-r-0"
              >

                <p className="text-5xl font-black text-white">
                  {item.value}
                </p>

                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>
                {/* ================= Action Area ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: .25 }}
          viewport={{ once: true }}
          className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto]"
        >

          {/* Home Collection Card */}

          <div className="rounded-[32px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">

            <div className="flex items-start gap-5">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">

                <FiHome
                  size={30}
                  className="text-white"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">

                  Home Sample Collection

                </h3>

                <p className="mt-3 max-w-xl leading-8 text-blue-100">

                  Skip the travel. Our trained professionals can collect your
                  sample safely from the comfort of your home, making diagnostic
                  testing simple, convenient, and stress-free.

                </p>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-col gap-4">

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Book Health Checkup

              <FiArrowRight className="transition group-hover:translate-x-1" />

            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <FiCalendar />

              Schedule Home Collection

            </a>

          </div>

        </motion.div>

        {/* Bottom Trust Statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .35 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >

          <div className="mx-auto mb-8 h-px w-24 bg-white/30" />

          <p className="text-lg leading-9 text-blue-100">

            Trusted by thousands of families for accurate diagnostics,
            transparent healthcare, experienced laboratory professionals,
            and compassionate patient care.

          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm font-semibold text-white/90">

            <span>✓ Accurate Reports</span>

            <span>✓ Experienced Team</span>

            <span>✓ Modern Laboratory</span>

            <span>✓ Patient First Care</span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}