"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiAward,
  FiCheckCircle,
  FiHeart,
} from "react-icons/fi";

const highlights = [
  "Patient-First Healthcare",
  "Advanced Diagnostic Standards",
  "Ethical Laboratory Practices",
  "Continuous Innovation",
];

const stats = [
  {
    number: "15K+",
    title: "Patients Served",
    description:
      "Thousands of families trust our laboratory for accurate diagnostics.",
    color: "text-blue-600",
  },
  {
    number: "10+",
    title: "Years of Excellence",
    description:
      "A decade of quality pathology services and patient-focused care.",
    color: "text-emerald-600",
  },
  {
    number: "99%",
    title: "Trusted Accuracy",
    description:
      "Reliable reports processed with advanced laboratory technology.",
    color: "text-cyan-600",
  },
];

export default function Founder() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28">
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-[120px] sm:h-[420px] sm:w-[420px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-blue-100/30 blur-[120px] sm:h-[500px] sm:w-[500px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[460px_1fr] lg:gap-16">
          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative order-1"
          >
            <div className="absolute inset-5 rounded-[36px] bg-blue-100/50 blur-3xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl sm:rounded-[36px]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/doctor.jpg"
                  fill
                  alt="Founder"
                  className="object-cover"
                />
              </div>
            </div>

          
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 sm:text-sm">
              <FiAward />
              Meet Our Founder
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Leading Healthcare
              <br />
              With Trust &
              <span className="block text-blue-600">
                Compassion.
              </span>
            </h2>

            <p className="mt-6 text-lg italic leading-8 text-slate-700 sm:text-xl sm:leading-9">
              “Every accurate diagnosis is an opportunity to improve someone's
              life. Our commitment has always been to deliver healthcare with
              honesty, precision and compassion.”
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Dharminder Kumar
              </h3>

              <p className="mt-1 font-medium text-blue-600">
                Founder
              </p>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Since establishing Bhangal Clinical Laboratory, Dharminder Kumar
              has remained committed to providing reliable diagnostics, ethical
              laboratory practices and patient-first healthcare through modern
              technology and experienced professionals.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                    <FiCheckCircle className="text-emerald-600" />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                  <FiHeart className="text-rose-500" size={22} />
                </div>

                <div>
                  <p className="leading-7 text-slate-700">
                    Our laboratory is built on one simple belief — every patient
                    deserves accurate reports, transparent pricing and
                    compassionate care.
                  </p>

                  <div className="mt-5">
                    <h4 className="font-bold text-slate-900">
                      Dharminder Kumar
                    </h4>

                    <p className="text-sm text-slate-500">
                      Founder
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white transition hover:bg-blue-600"
              >
                Book Your Test
                <FiArrowRight />
              </Link>

              <Link
                href="/packages"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* STATS */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className={`text-4xl font-black ${item.color}`}>
                  {item.number}
                </p>

                <h4 className="mt-3 text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}