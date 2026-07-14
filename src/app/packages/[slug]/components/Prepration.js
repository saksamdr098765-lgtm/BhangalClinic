"use client";

import { motion } from "framer-motion";
import {
  FiCoffee,
  FiDroplet,
  FiMoon,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    icon: FiMoon,
    title: "Fast if Required",
    description:
      "Some health packages require 8–12 hours of fasting before sample collection. Drink plain water unless advised otherwise.",
  },
  {
    icon: FiCoffee,
    title: "Avoid Alcohol & Heavy Meals",
    description:
      "Avoid alcohol, smoking, and heavy meals for at least 24 hours before the test for more reliable results.",
  },
  {
    icon: FiDroplet,
    title: "Stay Hydrated",
    description:
      "Drink sufficient water before your appointment. Proper hydration helps make blood collection easier.",
  },
  {
    icon: FiFileText,
    title: "Keep Previous Reports",
    description:
      "If available, keep your previous laboratory reports and prescription ready for comparison and better medical interpretation.",
  },
  {
    icon: FiCheckCircle,
    title: "Relax During Collection",
    description:
      "Our trained phlebotomists follow safe and hygienic procedures to ensure a comfortable sample collection experience.",
  },
];

export default function Preparation() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
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
            Before Your Test
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
            How to Prepare
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Following these simple guidelines helps ensure accurate
            diagnostic results and a smooth sample collection
            experience.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mx-auto mt-20 max-w-4xl">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-6
              top-0
              bottom-0
              w-px
              bg-slate-200

              md:left-8
            "
          />

          <div className="space-y-12">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="relative flex gap-6"
                >
                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-blue-100
                      bg-white
                      shadow-sm
                    "
                  >
                    <Icon className="text-blue-600" />
                  </div>

                  {/* Content */}

                  <div
                    className="
                      flex-1
                      rounded-[28px]
                      border
                      border-slate-200
                      bg-white
                      p-7
                      shadow-sm
                    "
                  >
                    <div className="flex items-center gap-3">

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-600
                          text-sm
                          font-bold
                          text-white
                        "
                      >
                        {index + 1}
                      </span>

                      <h3
                        className="
                          text-xl
                          font-bold
                          text-slate-900
                        "
                      >
                        {step.title}
                      </h3>

                    </div>

                    <p
                      className="
                        mt-4
                        leading-7
                        text-slate-600
                      "
                    >
                      {step.description}
                    </p>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}