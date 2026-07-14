"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
  FiSearch,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    title: "Choose Body Area",
    description: "Select where you're experiencing discomfort.",
  },
  {
    number: "02",
    title: "Select Symptoms",
    description: "Choose one or multiple symptoms you're experiencing.",
  },
  {
    number: "03",
    title: "Smart Analysis",
    description:
      "Our recommendation engine analyzes your symptoms.",
  },
  {
    number: "04",
    title: "Recommended Tests",
    description:
      "Get personalized blood test recommendations instantly.",
  },
  {
    number: "05",
    title: "Book Online",
    description:
      "Schedule home collection or visit the lab.",
  },
];

export default function SymptomAssessmentSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/50 to-white" />

      <div className="absolute left-0 top-16 h-48 w-48 rounded-full bg-blue-200/30 blur-[90px] sm:h-72 sm:w-72 sm:blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-60 w-60 rounded-full bg-violet-200/20 blur-[110px] sm:h-96 sm:w-96 sm:blur-[150px]" />

      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 sm:px-4 sm:text-sm">
            <FiActivity />
            AI Health Assessment
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:mt-8 sm:text-5xl lg:text-6xl xl:text-7xl xl:leading-[0.95]">
            Find the
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-600 bg-clip-text text-transparent">
              Right Test
            </span>
            <br />
            Without Guesswork.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
            Stop searching online and guessing which blood test you need.
            Answer a few simple questions and receive personalized laboratory
            test recommendations based on your symptoms.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Link
              href="/health-assesment"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:px-7"
            >
              Start Free Assessment
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500 sm:justify-start sm:text-base">
              <FiCheckCircle className="text-emerald-500" />
              <span>Takes less than 2 minutes</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-blue-500 via-blue-200 to-transparent" />

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                whileHover={{ x: 6 }}
                className="relative flex gap-4 sm:gap-6"
              >
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-lg sm:h-11 sm:w-11">
                  <FiSearch size={16} />
                </div>

                <div className="pb-1">
                  <p className="text-xs font-bold tracking-[0.22em] text-blue-600 sm:text-sm">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-slate-900 sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}