"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiArrowDown,
  FiShield,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const features = [
  {
    icon: FiActivity,
    title: "Smart Recommendations",
    text: "Personalized test suggestions",
  },
  {
    icon: FiClock,
    title: "2 Minute Assessment",
    text: "Quick & simple questionnaire",
  },
  {
    icon: FiShield,
    title: "Private & Secure",
    text: "Your information stays confidential",
  },
];

export default function Hero() {
  const scrollToAssessment = () => {
    document
      .getElementById("assessment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24">
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#dbeafe_0%,transparent_45%)] opacity-70" />

      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />

      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-4xl">
          {/* Badge */}

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700 shadow-sm sm:text-xs"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            AI Powered Health Assessment
          </motion.div>

          {/* Heading */}

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-7xl"
          >
            Not Sure Which

            <span className="mt-1 block bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Blood Test You Need?
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg"
          >
            Tell us about your symptoms in a few simple steps. Our smart
            assessment recommends the most relevant laboratory tests and
            health packages based on your responses.
          </motion.p>

          {/* CTA */}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <button
              onClick={scrollToAssessment}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Start Assessment

              <FiArrowDown className="transition group-hover:translate-y-1" />
            </button>

            <div className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-medium text-slate-600 shadow-sm">
              Takes less than <span className="ml-1 font-bold">2 minutes</span>
            </div>
          </motion.div>

          {/* Features */}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.6 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                    <Icon className="text-xl text-blue-600" />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
                    {/* Disclaimer */}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.75 }}
            className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:mt-10 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
                <FiCheckCircle className="text-lg text-amber-600" />
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Important Information
                </h4>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  This assessment provides educational recommendations for
                  laboratory tests based on your symptoms. It is not a
                  medical diagnosis and should not replace consultation
                  with a qualified healthcare professional.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Assessment Anchor */}

      <div id="assessment" />
    </section>
  );
}