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

export default function Hero() {
  const scrollToAssessment = () => {
    document
      .getElementById("assessment")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-slate-50" />

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-200/30 blur-[120px]" />

      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-violet-200/30 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-24 lg:pb-28 lg:pt-32">

        <div className="max-w-5xl">

          {/* Badge */}

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-sm font-medium text-slate-700">
              AI Powered Health Assessment
            </span>
          </motion.div>

          {/* Heading */}

          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Not Sure Which
            <br />

            <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-600 bg-clip-text text-transparent">
              Blood Test You Need?
            </span>
          </motion.h1>

          {/* Description */}

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-slate-600"
          >
            Tell us about your symptoms in a few simple steps. Our smart
            assessment will recommend the most relevant laboratory tests
            and health packages based on your responses.
          </motion.p>

          {/* CTA */}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={scrollToAssessment}
              className="group flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              Start Assessment

              <FiArrowDown className="transition group-hover:translate-y-1" />
            </button>

            <div className="rounded-2xl border border-blue-100 bg-white/80 px-6 py-4 text-sm text-slate-600 shadow-sm backdrop-blur-xl">
              Takes less than <strong>2 minutes</strong>
            </div>
          </motion.div>

          {/* Features */}

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.6 }}
            className="mt-14 grid gap-4 sm:grid-cols-3"
          >
            {[
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
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-sm backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                    <Icon className="text-2xl text-blue-600" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900">
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
            className="mt-10 rounded-3xl border border-amber-200 bg-amber-50/80 p-6 backdrop-blur-xl"
          >
            <div className="flex items-start gap-4">
              <FiCheckCircle className="mt-1 text-xl text-amber-600" />

              <div>
                <h4 className="font-semibold text-slate-900">
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

      {/* Anchor */}

      <div id="assessment" />
    </section>
  );
}