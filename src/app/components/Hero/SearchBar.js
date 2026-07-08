"use client";

import { useState } from "react";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const popularTests = [
  "CBC",
  "HbA1c",
  "Vitamin D",
  "Thyroid",
  "LFT",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full">

      {/* Search Box */}

      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="
          group
          flex
          items-center
          rounded-[28px]
          border
          border-slate-200
          bg-white/80
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(15,23,42,.08)]
          transition
          duration-300
          focus-within:border-blue-500
          focus-within:shadow-[0_20px_80px_rgba(37,99,235,.18)]
        "
      >
        <div className="pl-6 text-slate-400">
          <FiSearch size={22} />
        </div>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pathology tests..."
          className="
            h-16
            flex-1
            bg-transparent
            px-4
            text-[16px]
            outline-none
            placeholder:text-slate-400
          "
        />

        <button
          className="
            mr-2
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-slate-900
            text-white
            transition
            hover:scale-105
            hover:bg-blue-600
          "
        >
          <FiArrowRight />
        </button>
      </motion.div>

      {/* Popular Tests */}

      <div className="mt-5 flex flex-wrap items-center gap-3">

        <span className="text-sm text-slate-500">
          Popular:
        </span>

        {popularTests.map((test) => (
          <button
            key={test}
            className="
              rounded-full
              border
              border-slate-200
              bg-white/70
              px-4
              py-2
              text-sm
              font-medium
              text-slate-700
              backdrop-blur-xl
              transition
              hover:-translate-y-1
              hover:border-blue-400
              hover:bg-white
              hover:shadow-lg
            "
          >
            {test}
          </button>
        ))}
      </div>

    </div>
  );
}