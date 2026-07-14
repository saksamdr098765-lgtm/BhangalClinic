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
      "A trained phlebotomist visits your location and safely collects samples using sterile equipment.",
  },
  {
    icon: FiFileText,
    title: "Digital Reports",
    description:
      "Your samples are processed in our laboratory and reports are securely delivered online.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
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
              text-xs
              font-semibold
              text-blue-700

              sm:text-sm
            "
          >
            Home Sample Collection
          </span>


          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-tight
              text-slate-900

              sm:text-4xl

              lg:text-5xl
            "
          >
            How It Works
          </h2>


          <p
            className="
              mt-5
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8
            "
          >
            From booking your package to receiving your report,
            every step is designed to be simple, safe, and convenient.
          </p>

        </motion.div>



        {/* Steps */}

        <div
          className="
            relative
            mt-12
            grid
            gap-5

            sm:mt-16

            lg:grid-cols-4
            lg:gap-6
          "
        >

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                }}
                className="relative"
              >

                {/* Desktop Connector */}

                {index !== steps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[58px]
                      top-8
                      hidden
                      h-px
                      w-[calc(100%+24px)]
                      bg-slate-200

                      lg:block
                    "
                  />
                )}



                <div
                  className="
                    relative
                    z-10
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition-all

                    sm:p-7

                    hover:-translate-y-1
                    hover:border-blue-200
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

                      sm:h-14
                      sm:w-14
                    "
                  >
                    <Icon
                      className="
                        text-xl
                        text-blue-600

                        sm:text-2xl
                      "
                    />
                  </div>



                  <span
                    className="
                      mt-5
                      inline-flex
                      rounded-full
                      bg-slate-100
                      px-3
                      py-1
                      text-[11px]
                      font-bold
                      tracking-wide
                      text-slate-500
                    "
                  >
                    STEP {index + 1}
                  </span>



                  <h3
                    className="
                      mt-4
                      text-lg
                      font-bold
                      text-slate-900

                      sm:text-xl
                    "
                  >
                    {step.title}
                  </h3>



                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-slate-600

                      sm:text-base
                      sm:leading-7
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