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
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
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
                text-xs
                font-semibold
                text-blue-700
                sm:text-sm
              "
            >
              Package Overview
            </span>


            <h2
              className="
                mt-5
                text-3xl
                font-black
                leading-tight
                tracking-tight
                text-slate-900

                sm:text-4xl

                lg:text-5xl
              "
            >
              Why Choose the
              <br className="hidden sm:block" />
              {pkg.name}?
            </h2>


            <div
              className="
                mt-6
                space-y-5
                text-base
                leading-7
                text-slate-600

                sm:text-lg
                sm:leading-8
              "
            >

              <p>
                {pkg.name} is designed to provide a complete overview of
                your current health condition through a carefully selected
                combination of diagnostic tests. Regular preventive
                screening helps identify hidden health concerns before
                they develop into serious medical conditions.
              </p>


              <p>
                This package evaluates essential health markers related to
                blood health, diabetes, liver function, kidney function,
                cholesterol, thyroid health, vitamins, and other important
                body systems depending on the included tests.
              </p>


              <p>
                Whether you are planning an annual health checkup,
                managing an existing condition, or following preventive
                healthcare, this package provides valuable insights backed
                by accurate laboratory testing.
              </p>

            </div>

          </motion.div>



          {/* Benefits Cards */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="
              grid
              gap-4

              sm:grid-cols-2
            "
          >

            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 20,
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
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    shadow-sm
                    transition-all

                    sm:p-6

                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
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
                      mt-5
                      text-lg
                      font-bold
                      text-slate-900

                      sm:text-xl
                    "
                  >
                    {item.title}
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
                    {item.description}
                  </p>


                </motion.div>
              );
            })}

          </motion.div>

        </div>

      </div>
    </section>
  );
}