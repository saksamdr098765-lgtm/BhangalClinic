"use client";

import { motion } from "framer-motion";
import {
  FiStar,
  FiCheckCircle,
  // FiQuote,
  FiShield,
  FiClock,
} from "react-icons/fi";

const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Mohali",
    text: "Excellent service. The home sample collection was on time and the reports were delivered the same day. Highly recommended.",
  },
  {
    name: "Priya Verma",
    location: "Chandigarh",
    text: "Very professional staff and quick report delivery. Booking online was simple and the entire experience was smooth.",
  },
  {
    name: "Aman Singh",
    location: "Zirakpur",
    text: "Clean laboratory, courteous staff and accurate reports. I always choose Bhangal Clinical Laboratory for my family's tests.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute left-0 top-0 -z-10 h-64 w-64 rounded-full bg-blue-200/30 blur-[110px]" />

      <div className="absolute right-0 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Patient Stories
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Trusted by
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Thousands of Families
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Every patient deserves fast, reliable and accurate diagnostics.
            Here's what our patients say about their experience with our
            laboratory.
          </p>
        </motion.div>

        {/* Trust Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <FiCheckCircle className="text-xl text-blue-600" />
            </div>

            <h3 className="mt-4 text-2xl font-black text-slate-900">
              15K+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Happy Patients
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100">
              <FiShield className="text-xl text-emerald-600" />
            </div>

            <h3 className="mt-4 text-2xl font-black text-slate-900">
              99%
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Accuracy
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
              <FiClock className="text-xl text-violet-600" />
            </div>

            <h3 className="mt-4 text-2xl font-black text-slate-900">
              Same Day
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Reports
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100">
              <FiStar className="text-xl text-cyan-600 fill-cyan-600" />
            </div>

            <h3 className="mt-4 text-2xl font-black text-slate-900">
              4.9★
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Patient Rating
            </p>
          </div>
        </motion.div>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-2xl ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Quote */}
              <div className="absolute right-6 top-6 opacity-5 transition-opacity group-hover:opacity-10">
                {/* <FiQuote className="text-[90px] text-blue-600" /> */}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative mt-6 text-base leading-8 text-slate-600">
                "{item.text}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 font-bold text-white shadow-lg">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50">
                  <FiCheckCircle className="text-xl text-emerald-600" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 p-8 text-white shadow-2xl sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-black sm:text-3xl">
                Your Health Deserves the Best Care
              </h3>

              <p className="mt-3 max-w-2xl text-blue-100">
                Join thousands of satisfied patients who trust us for fast,
                accurate and reliable diagnostic services with convenient home
                sample collection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="text-3xl font-black">15K+</div>
                <div className="mt-1 text-sm text-blue-100">
                  Happy Patients
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <div className="text-3xl font-black">4.9★</div>
                <div className="mt-1 text-sm text-blue-100">
                  Average Rating
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}