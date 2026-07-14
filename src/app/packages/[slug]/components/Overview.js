"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiCheckCircle,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

const points = [
  {
    icon: FiActivity,
    title: "Comprehensive Screening",
    description:
      "A carefully selected panel of diagnostic tests to assess your overall health.",
  },
  {
    icon: FiHeart,
    title: "Early Detection",
    description:
      "Identify potential health concerns before symptoms become noticeable.",
  },
  {
    icon: FiTrendingUp,
    title: "Preventive Healthcare",
    description:
      "Track important health markers and make informed lifestyle decisions.",
  },
  {
    icon: FiCheckCircle,
    title: "Reliable Results",
    description:
      "Every sample is processed using modern diagnostic equipment and quality standards.",
  },
];

export default function Overview({ pkg }) {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <span
              className="
                inline-flex
                rounded-full
                border
                border-blue-100
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-blue-700
              "
            >
              Package Overview
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                tracking-tight
                text-slate-900

                lg:text-5xl
              "
            >
              Why Choose the
              <br />

              {pkg.name}?
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                {pkg.name} is designed to provide a complete overview
                of your current health condition through a carefully
                selected combination of diagnostic tests. Regular
                preventive screening helps identify hidden health
                concerns before they develop into serious medical
                conditions, allowing timely treatment and better
                long-term outcomes.
              </p>

              <p>
                This package evaluates essential health markers related
                to blood health, diabetes, liver function, kidney
                function, cholesterol, thyroid health, vitamins, and
                other important body systems depending on the tests
                included. It is suitable for individuals who want a
                convenient and reliable way to monitor their overall
                health.
              </p>

              <p>
                Whether you are planning an annual health checkup,
                managing an existing medical condition, or simply
                adopting a preventive healthcare routine, this package
                provides clinically valuable insights backed by accurate
                laboratory testing and experienced healthcare
                professionals.
              </p>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="
              grid
              gap-5
              sm:grid-cols-2
            "
          >
            {points.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-[28px]
                    border
                    border-slate-200
                    bg-white
                    p-7
                    shadow-sm
                    transition
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                    "
                  >
                    <Icon className="text-xl text-blue-600" />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      leading-7
                      text-slate-600
                    "
                  >
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}