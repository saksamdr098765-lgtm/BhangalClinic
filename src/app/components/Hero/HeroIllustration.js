"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiClock, FiCheckCircle } from "react-icons/fi";

export default function HeroIllustration() {
  return (
    <div className="relative flex h-[700px] w-full items-center justify-center">

      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-blue-200/60 via-cyan-100/40 to-violet-200/40 blur-[100px]" />

      {/* Main Illustration */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <Image
          src="/hero/lab-scene.webp"
          alt="Modern pathology lab"
          width={520}
          height={520}
          priority
          className="drop-shadow-[0_40px_60px_rgba(0,0,0,.15)]"
        />
      </motion.div>

      {/* Floating Booking Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute left-6 top-24 w-60 rounded-3xl border border-white/50 bg-white/70 p-5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-900">
            Home Collection
          </span>

          <FiCheckCircle className="text-emerald-500" />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          CBC + HbA1c
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm text-slate-700">
          <FiClock />
          Tomorrow • 9:30 AM
        </div>
      </motion.div>

      {/* Floating Report Card */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-16 right-0 w-64 rounded-3xl border border-white/50 bg-white/70 p-5 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-slate-900">
            Report Ready
          </span>

          <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-600">
            Completed
          </span>
        </div>

        <div className="mt-5 h-2 rounded-full bg-slate-200">
          <div className="h-full w-full rounded-full bg-blue-600" />
        </div>

        <p className="mt-5 text-sm text-slate-500">
          Download your report anytime.
        </p>
      </motion.div>
    </div>
  );
}