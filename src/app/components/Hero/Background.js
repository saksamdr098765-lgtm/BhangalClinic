"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Base */}

      <div className="absolute inset-0 bg-white" />

      {/* Top Blue Glow */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-200/40 blur-[120px]"
      />

      {/* Bottom Cyan Glow */}

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-200/35 blur-[130px]"
      />

      {/* Center Light */}

      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-100 blur-[100px]" />

      {/* Fine Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#64748b 1px,transparent 1px),linear-gradient(to bottom,#64748b 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Noise Overlay */}

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "radial-gradient(#000 0.6px, transparent 0.6px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Bottom Fade */}

      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-white" />

    </div>
  );
}