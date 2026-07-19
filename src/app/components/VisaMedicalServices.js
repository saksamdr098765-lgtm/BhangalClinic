"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiShield,
  FiCheckCircle,
  FiFileText,
  FiGlobe,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import SITE_CONFIG from "../SITE_CONFIG";

const features = [
  "Employment Visa Medical",
  "Student Visa Medical",
  "Immigration Health Check",
  "Travel Medical Certificate",
];

const highlights = [
  {
    icon: FiClock,
    title: "Fast Processing",
    desc: "Quick appointments with timely reports.",
  },
  {
    icon: FiShield,
    title: "Trusted Laboratory",
    desc: "Professional medical examinations with quality standards.",
  },
  {
    icon: FiGlobe,
    title: "International Requirements",
    desc: "Medical screening for various countries and visa categories.",
  },
];

const includedTests = [
  "Blood Investigation",
  "Urine Examination",
  "Chest X-Ray",
  "Physical Examination",
  "Vision Check",
  "Medical Certificate",
];

export default function VisaMedicalSection() {
  return (
    <section className="relative overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20">

      {/* Background */}
      <div className="absolute -left-40 top-0 hidden h-72 w-72 rounded-full bg-blue-100/40 blur-3xl lg:block" />
      <div className="absolute -right-40 bottom-0 hidden h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 sm:text-sm">
              <FiFileText />
              Visa Medical Services
            </div>

            {/* Heading */}

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Complete Medical Examination
              <span className="mt-1 block text-blue-600">
                for Visa & Immigration
              </span>
            </h2>

            {/* Description */}

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Get comprehensive medical examinations required for employment,
              student, immigration and travel visas with modern diagnostics,
              experienced professionals and fast digital reports.
            </p>

            {/* Feature Cards */}

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {features.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FiCheckCircle />
                  </div>

                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {item}
                  </span>

                </motion.div>
              ))}

            </div>

            {/* Highlights */}

            <div className="mt-10 space-y-6">

              {highlights.map(({ icon: Icon, title, desc }) => (

                <div
                  key={title}
                  className="flex items-start gap-4"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={22} />
                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-900">
                      {title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 sm:text-base">
                      {desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">

              <Link
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi,%20I%20want%20to%20book%20a%20Visa%20Medical%20Examination.`}
                target="_blank"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-700 sm:w-auto"
              >
                Book Visa Medical

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition hover:bg-slate-100 sm:w-auto"
              >
                Contact Us
              </Link>

            </div>

          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 hidden lg:block relative mt-2 lg:order-2 lg:mt-0"
          >            {/* Decorative Glow */}
            <div className="absolute left-0 top-0 hidden h-44 w-44 -translate-x-1/2 rounded-full bg-blue-200/30 blur-3xl lg:block" />
            <div className="absolute bottom-0 right-0 hidden h-44 w-44 translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

              {/* Header */}

              <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-5 text-white sm:p-6">

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100">
                      Medical Package
                    </p>

                    <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                      Visa Medical Examination
                    </h3>

                    <p className="mt-2 text-sm text-blue-100 sm:text-base">
                      Everything required for your visa medical,
                      completed under one roof.
                    </p>

                  </div>

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                    <FiFileText size={32} />
                  </div>

                </div>

              </div>

              {/* Body */}

              <div className="p-5 sm:p-6">

                <h4 className="text-lg font-semibold text-slate-900">
                  What's Included
                </h4>

                <div className="mt-6 space-y-3">

                  {includedTests.map((item, index) => (

                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-blue-50 sm:flex-row sm:items-center sm:justify-between"
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                          <FiCheckCircle />
                        </div>

                        <span className="font-medium text-slate-700">
                          {item}
                        </span>

                      </div>

                      <span className="self-start rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 sm:self-auto">
                        Included
                      </span>

                    </motion.div>

                  ))}

                </div>


                {/* CTA */}

                <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-6 text-white">

                  <div className="flex flex-col gap-6">

                    <div>

                      <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                        Book Today
                      </span>

                      <h3 className="mt-3 text-2xl font-bold">
                        Ready for Your Visa Medical?
                      </h3>

                      <p className="mt-2 text-blue-100">
                        Schedule your appointment today and receive professional
                        medical examination with quick reporting.
                      </p>

                    </div>

                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi,%20I%20want%20to%20book%20a%20Visa%20Medical%20Examination.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-base font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                      Book on WhatsApp

                      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </a>

                  </div>

                </div>

              </div>

              {/* Bottom Accent */}

              <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}