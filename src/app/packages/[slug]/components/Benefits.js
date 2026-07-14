"use client";

import { motion } from "framer-motion";
import {
  FiHeart,
  FiActivity,
  FiShield,
  FiTrendingUp,
  FiClock,
  FiSmile,
} from "react-icons/fi";

const benefits = [
  {
    icon: FiActivity,
    title: "Early Health Screening",
    description:
      "Detect potential health concerns early and take preventive steps before symptoms become serious.",
  },
  {
    icon: FiHeart,
    title: "Monitor Vital Organs",
    description:
      "Get insights into your heart, liver, kidneys, thyroid, and blood health through reliable diagnostics.",
  },
  {
    icon: FiTrendingUp,
    title: "Track Health Progress",
    description:
      "Compare your reports over time and understand how lifestyle changes or treatments impact your health.",
  },
  {
    icon: FiShield,
    title: "Reliable & Accurate",
    description:
      "Samples are processed with advanced technology and strict quality standards for dependable results.",
  },
  {
    icon: FiClock,
    title: "Fast Digital Reports",
    description:
      "Receive secure online reports quickly and access your health information anytime.",
  },
  {
    icon: FiSmile,
    title: "Peace of Mind",
    description:
      "Stay informed about your health and make confident decisions with preventive checkups.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
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
              bg-white
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-blue-700

              sm:text-sm
            "
          >
            Why This Package Matters
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
            Benefits Beyond
            <br />
            Just Blood Tests
          </h2>


          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-slate-600

              sm:text-lg
              sm:leading-8
            "
          >
            Preventive healthcare helps you understand your body before
            problems become serious. Get reliable diagnostic insights
            that support better health decisions.
          </p>

        </motion.div>


        {/* Benefits Grid */}

        <div
          className="
            mt-10
            grid
            gap-5

            sm:mt-14
            sm:gap-6

            md:grid-cols-2

            xl:grid-cols-3
          "
        >

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}

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
                  duration: 0.4,
                }}

                viewport={{
                  once: true,
                }}

                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300

                  sm:p-7

                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-lg
                "
              >

                {/* Icon */}

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    transition

                    sm:h-14
                    sm:w-14

                    group-hover:bg-blue-100
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


                {/* Content */}

                <h3
                  className="
                    mt-5
                    text-lg
                    font-bold
                    text-slate-900

                    sm:mt-6
                    sm:text-xl
                  "
                >
                  {benefit.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600

                    sm:mt-4
                    sm:text-base
                    sm:leading-7
                  "
                >
                  {benefit.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}