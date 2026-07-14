"use client";

import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiUser,
  FiUsers,
  FiHeart,
  FiSmile,
} from "react-icons/fi";

const options = [
  {
    value: "myself",
    title: "Myself",
    description: "I'm looking for tests for my own health.",
    icon: FiUser,
  },
  {
    value: "child",
    title: "My Child",
    description: "Assessment for a child.",
    icon: FiSmile,
  },
  {
    value: "parent",
    title: "My Parent",
    description: "Health assessment for a parent.",
    icon: FiHeart,
  },
  {
    value: "other",
    title: "Someone Else",
    description: "For another family member.",
    icon: FiUsers,
  },
];

export default function Step1Concern({
  value,
  onChange,
  nextStep,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[36px] border border-slate-200/70 bg-white/80 p-8 shadow-xl backdrop-blur-2xl"
    >
      {/* Heading */}

      <div className="max-w-2xl">
        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
          Step 1
        </span>

        <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900">
          Who is this assessment for?
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          Choose who you're booking the health assessment for.
        </p>
      </div>

      {/* Cards */}

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {options.map((item) => {
          const Icon = item.icon;

          const active = value === item.value;

          return (
            <motion.button
              key={item.value}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onChange(item.value)}
              className={`group relative overflow-hidden rounded-[28px] border p-7 text-left transition-all

              ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-xl"
                  : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg"
              }`}
            >
              {/* Selected */}

              {active && (
                <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                  <FiCheck />
                </div>
              )}

              {/* Icon */}

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl transition

                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                }`}
              >
                <Icon className="text-3xl" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Footer */}

      <div className="mt-12 flex flex-col gap-4 border-t border-slate-100 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Your answers help us recommend suitable laboratory tests.
        </p>

        <button
          disabled={!value}
          onClick={nextStep}
          className="group flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue

          <FiArrowRight className="transition group-hover:translate-x-1" />
        </button>
      </div>
    </motion.section>
  );
}