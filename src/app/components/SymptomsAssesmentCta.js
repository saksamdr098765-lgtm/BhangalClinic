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
    description: "Our recommendation engine analyzes your symptoms.",
  },
  {
    number: "04",
    title: "Recommended Tests",
    description: "Get personalized blood test recommendations instantly.",
  },
  {
    number: "05",
    title: "Book Online",
    description: "Schedule home collection or visit the lab.",
  },
];

export default function SymptomAssessmentSection() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/50 to-white" />

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-200/20 blur-[150px]" />

      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            <FiActivity />
            AI Health Assessment
          </span>

          <h2 className="mt-8 text-5xl font-black leading-[0.95] tracking-tight text-slate-900 lg:text-7xl">
            Find the
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-600 bg-clip-text text-transparent">
              Right  Test
            </span>
            <br />
            Without Guesswork.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
            Stop searching online and guessing which  test you need.
            Answer a few simple questions and receive personalized laboratory
            test recommendations based on your symptoms.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link
              href="/health-assesment"
              className="group inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              Start Free Assessment

              <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center gap-2 text-slate-500">
              <FiCheckCircle className="text-emerald-500" />

              <span>Takes less than 2 minutes</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-blue-500 via-blue-200 to-transparent" />

          <div className="space-y-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                whileHover={{ x: 8 }}
                className="relative flex gap-6"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 font-bold text-white shadow-lg">
                  <FiSearch size={16} />
                </div>

                <div>
                  <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
                    {step.number}
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
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