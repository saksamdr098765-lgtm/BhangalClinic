"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const steps = [
  "Who",
  "Body Area",
  "Symptoms",
  "Details",
  "Results",
];

export default function ProgressBar({
  currentStep,
  totalSteps,
}) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <section className="-mt-10 relative z-20">

      <div className="rounded-[32px] border border-slate-200/70 bg-white/80 p-6 shadow-xl backdrop-blur-2xl">

        {/* Header */}

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-medium text-slate-500">
              Health Assessment
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Step {currentStep} of {totalSteps}
            </h2>
          </div>

          <div className="rounded-full bg-blue-50 px-4 py-2">
            <span className="font-semibold text-blue-700">
              {Math.round(progress)}%
            </span>
          </div>

        </div>

        {/* Progress Line */}

        <div className="relative mt-8 h-2 overflow-hidden rounded-full bg-slate-100">

          <motion.div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
            initial={{ width: 0 }}
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.5,
            }}
          />

        </div>

        {/* Steps */}

        <div className="mt-8 grid grid-cols-5 gap-2">

          {steps.map((label, index) => {
            const stepNumber = index + 1;

            const completed = stepNumber < currentStep;

            const active = stepNumber === currentStep;

            return (
              <div
                key={label}
                className="flex flex-col items-center"
              >
                <motion.div
                  animate={{
                    scale: active ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold transition-all

                  ${
                    completed
                      ? "border-blue-600 bg-blue-600 text-white"
                      : active
                      ? "border-blue-600 bg-white text-blue-600 shadow-lg"
                      : "border-slate-200 bg-slate-50 text-slate-400"
                  }`}
                >
                  {completed ? (
                    <FiCheck className="text-lg" />
                  ) : (
                    stepNumber
                  )}
                </motion.div>

                <span
                  className={`mt-3 text-center text-xs font-medium sm:text-sm

                  ${
                    active
                      ? "text-slate-900"
                      : completed
                      ? "text-slate-700"
                      : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}