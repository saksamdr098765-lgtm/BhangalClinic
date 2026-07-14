"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const steps = [
  "Who",
  "Body",
  "Symptoms",
  "Details",
  "Results",
];

export default function ProgressBar({
  currentStep,
  totalSteps,
}) {
  const progress =
    ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <section className="relative z-20 -mt-6 sm:-mt-8 lg:-mt-10">
      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white/90
          p-4
          shadow-lg
          backdrop-blur-xl

          sm:rounded-3xl
          sm:p-6
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
              Health Assessment
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900 sm:text-2xl">
              Step {currentStep} of {totalSteps}
            </h2>
          </div>

          <div
            className="
              rounded-full
              bg-blue-50
              px-3
              py-1.5
              text-sm
              font-semibold
              text-blue-700

              sm:px-4
              sm:py-2
            "
          >
            {Math.round(progress)}%
          </div>
        </div>

        {/* Progress */}

        <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-slate-100">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.45,
            }}
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"
          />
        </div>

        {/* Steps */}

        <div className="mt-6 grid grid-cols-5 gap-2 sm:mt-8 sm:gap-3">
          {steps.map((label, index) => {
            const step = index + 1;
            const completed = step < currentStep;
            const active = step === currentStep;

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
                  className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    text-xs
                    font-bold
                    transition-all

                    sm:h-11
                    sm:w-11
                    sm:text-sm

                    ${
                      completed
                        ? "border-blue-600 bg-blue-600 text-white"
                        : active
                        ? "border-blue-600 bg-white text-blue-600 shadow-md"
                        : "border-slate-200 bg-slate-50 text-slate-400"
                    }
                  `}
                >
                  {completed ? (
                    <FiCheck className="text-base" />
                  ) : (
                    step
                  )}
                </motion.div>

                <span
                  className={`
                    mt-2
                    text-center
                    text-[10px]
                    font-medium

                    sm:mt-3
                    sm:text-xs

                    ${
                      active
                        ? "text-slate-900"
                        : completed
                        ? "text-slate-700"
                        : "text-slate-400"
                    }
                  `}
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