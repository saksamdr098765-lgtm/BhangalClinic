"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiClock,
  FiHome,
  FiStar,
} from "react-icons/fi";

export default function PackageImage({ pkg }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 sm:py-20 lg:py-24">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Package Overview
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {pkg.name}
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Everything included in your health package at a glance.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
        >
          {/* Image */}

        <div className="flex justify-center bg-gradient-to-b from-slate-50 to-white p-6 sm:p-10">
  <div className="relative h-[650px] w-full max-w-3xl">
    <Image
      src={pkg.posterImage || pkg.image}
      alt={pkg.name}
      fill
      priority
      className="object-contain"
    />
  </div>
</div>

          {/* Bottom Stats */}

          <div className="grid divide-y divide-slate-200 border-t border-slate-200 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <Stat
              icon={<FiCheckCircle className="text-emerald-500" />}
              label="Tests Included"
              value={`${pkg.testsCount}+`}
            />

            <Stat
              icon={<FiHome className="text-blue-600" />}
              label="Collection"
              value="Home Available"
            />

            <Stat
              icon={<FiClock className="text-violet-600" />}
              label="Report Time"
              value={pkg.reportTime}
            />

            <Stat
              icon={<FiStar className="text-amber-500" />}
              label="Customer Rating"
              value={`${pkg.rating} ★`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">{label}</p>
        <p className="mt-1 font-bold text-slate-900">{value}</p>
      </div>
    </div>
  );
}