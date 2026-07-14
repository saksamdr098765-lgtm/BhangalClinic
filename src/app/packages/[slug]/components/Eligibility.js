"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiUsers,
  FiHeart,
  FiActivity,
  FiTrendingUp,
  FiUserCheck,
} from "react-icons/fi";

const people = [
  {
    icon: FiBriefcase,
    title: "Working Professionals",
    description:
      "Busy lifestyles, stress, and irregular eating habits make routine health screening important.",
  },
  {
    icon: FiUsers,
    title: "Adults Above 30",
    description:
      "Regular preventive checkups help detect lifestyle-related diseases at an early stage.",
  },
  {
    icon: FiHeart,
    title: "People with Family History",
    description:
      "Recommended for individuals with a family history of diabetes, hypertension, thyroid disorders, or heart disease.",
  },
  {
    icon: FiActivity,
    title: "Fitness Enthusiasts",
    description:
      "Monitor important health markers and evaluate the impact of your nutrition and exercise routine.",
  },
  {
    icon: FiTrendingUp,
    title: "Annual Health Checkups",
    description:
      "Ideal for yearly preventive health screening to monitor your overall well-being.",
  },
  {
    icon: FiUserCheck,
    title: "Senior Citizens",
    description:
      "Supports regular monitoring of age-related health changes and chronic conditions.",
  },
];

export default function Eligibility() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

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
            Who Should Take This Package?
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
            Designed for Every
            <br />
            Stage of Life
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-slate-600
            "
          >
            Whether you're maintaining a healthy lifestyle, managing an
            existing condition, or simply planning your annual health
            checkup, this package provides valuable insights into your
            overall health.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            mt-16
            grid
            gap-6

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {people.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
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
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-600
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}

        <div
          className="
            mt-16
            rounded-[32px]
            border
            border-blue-100
            bg-gradient-to-r
            from-blue-50
            to-cyan-50
            p-10
          "
        >
          <h3
            className="
              text-2xl
              font-bold
              text-slate-900
            "
          >
            Not sure if this package is right for you?
          </h3>

          <p
            className="
              mt-4
              max-w-3xl
              leading-8
              text-slate-600
            "
          >
            Our healthcare team can help you choose the most suitable
            diagnostic package based on your age, medical history,
            lifestyle, and current health concerns. If you need a more
            personalized recommendation, feel free to contact us before
            booking your test.
          </p>
        </div>

      </div>
    </section>
  );
}