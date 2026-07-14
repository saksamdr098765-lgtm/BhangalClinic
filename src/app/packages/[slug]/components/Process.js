"use client";

import { motion } from "framer-motion";
import {
  FiCalendar,
  FiPhoneCall,
  FiDroplet,
  FiFileText,
} from "react-icons/fi";

const steps = [
  {
    icon: FiCalendar,
    title: "Book Your Package",
    description:
      "Choose your preferred package and schedule a convenient date and time for sample collection.",
  },
  {
    icon: FiPhoneCall,
    title: "Confirmation Call",
    description:
      "Our team confirms your appointment, shares preparation instructions, and answers your questions.",
  },
  {
    icon: FiDroplet,
    title: "Sample Collection",
    description:
      "A trained phlebotomist visits your location and safely collects the required samples using sterile equipment.",
  },
  {
    icon: FiFileText,
    title: "Digital Reports",
    description:
      "Your samples are processed in our laboratory and reports are securely delivered online within the promised time.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

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
              bg-blue-50
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
            "
          >
            Home Sample Collection
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
            How It Works
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            From booking your package to receiving your report,
            we've made every step simple, safe, and convenient.
          </p>

        </motion.div>

        {/* Steps */}

        <div
          className="
            relative
            mt-20
            grid
            gap-10

            lg:grid-cols-4
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .08,
                }}
                viewport={{
                  once: true,
                }}
                className="relative"
              >
                {/* Connector */}

                {index !== steps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[52px]
                      top-7
                      hidden
                      h-px
                      w-full
                      bg-slate-200

                      lg:block
                    "
                  />
                )}

                <div
                  className="
                    relative
                    z-10
                    rounded-[30px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-blue-50
                    "
                  >
                    <Icon className="text-2xl text-blue-600" />
                  </div>

                  <span
                    className="
                      mt-6
                      inline-flex
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1
                      text-xs
                      font-semibold
                      tracking-wide
                      text-slate-500
                    "
                  >
                    STEP {index + 1}
                  </span>

                  <h3
                    className="
                      mt-4
                      text-xl
                      font-bold
                      text-slate-900
                    "
                  >
                    {step.title}
                  </h3>

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
    </section>
  );
}