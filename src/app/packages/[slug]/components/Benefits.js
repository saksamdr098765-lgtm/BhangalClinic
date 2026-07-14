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
      "Detect potential health concerns before symptoms appear, helping you take action at the right time.",
  },
  {
    icon: FiHeart,
    title: "Monitor Vital Organs",
    description:
      "Evaluate the health of your liver, kidneys, heart, thyroid, and blood through comprehensive diagnostics.",
  },
  {
    icon: FiTrendingUp,
    title: "Track Your Progress",
    description:
      "Compare results over time to understand how your lifestyle, diet, or treatment is affecting your health.",
  },
  {
    icon: FiShield,
    title: "Reliable & Accurate",
    description:
      "Every sample is processed using modern laboratory equipment following strict quality standards.",
  },
  {
    icon: FiClock,
    title: "Fast Digital Reports",
    description:
      "Receive secure digital reports quickly so you can consult your doctor without unnecessary delays.",
  },
  {
    icon: FiSmile,
    title: "Peace of Mind",
    description:
      "Regular preventive checkups help you stay informed, confident, and proactive about your health.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

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
            Why This Package Matters
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
            Benefits Beyond
            <br />
            Just Blood Tests
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Preventive healthcare is about understanding your body
            before problems become serious. This package helps you make
            informed health decisions through reliable diagnostic
            insights and comprehensive screening.
          </p>

        </div>

        {/* Benefits Grid */}

        <div
          className="
            mt-16
            grid
            gap-6

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
                  y: 30,
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
                  group
                  rounded-[28px]
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
                    transition
                    group-hover:bg-blue-100
                  "
                >
                  <Icon className="text-2xl text-blue-600" />
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-slate-900
                  "
                >
                  {benefit.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-600
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