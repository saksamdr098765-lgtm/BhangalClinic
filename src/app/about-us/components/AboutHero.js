"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

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
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <div className="absolute -right-32 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl sm:h-[420px] sm:w-[420px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >

            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              About Our Laboratory
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl lg:leading-[0.95]">
              Trusted
              <br />
              Diagnostics
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                For Every Family.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Bhangal Clinical Laboratory combines experienced healthcare
              professionals with advanced diagnostic technology to deliver
              accurate pathology testing, timely reports and compassionate care
              for every family.
            </p>

            {/* CTA */}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/book-test"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto"
              >
                Book a Test

                <FiArrowRight className="transition group-hover:translate-x-1" />

              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 sm:w-auto"
              >
                Contact Us
              </Link>

            </div>

            {/* Highlights */}

            <div className="mt-8 flex flex-wrap gap-3">

              {[
                "NABL Certified",
                "Home Collection",
                "Fast Reports",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  <FiCheck className="text-blue-600" />

                  {item}

                </div>
              ))}

            </div>

          </motion.div>

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >

            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl sm:rounded-[36px]">

              <Image
                src="/images/about/lab.jpg"
                fill
                alt="Bhangal Clinical Laboratory"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            </div>

            {/* Floating Badge */}

            <div className="absolute bottom-4 left-4 rounded-2xl border border-white/30 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-xl sm:bottom-6 sm:left-6 lg:-left-8 lg:bottom-8">

              <p className="text-3xl font-black text-blue-600">
                1000+
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Happy Patients
              </p>

            </div>

          </motion.div>

        </div>

        {/* Stats */}
                <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">

            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-blue-100
                  hover:shadow-xl

                  sm:p-8
                "
              >

                <h3
                  className="
                    text-3xl
                    font-black
                    tracking-tight
                    text-slate-900
                    transition-colors
                    duration-300

                    group-hover:text-blue-600

                    sm:text-5xl
                  "
                >
                  {item.number}
                </h3>

                <div
                  className="
                    my-4
                    h-1
                    w-12
                    rounded-full
                    bg-blue-600
                  "
                />

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.18em]
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