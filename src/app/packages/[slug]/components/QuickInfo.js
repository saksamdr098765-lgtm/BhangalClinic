"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiHome,
  FiClock,
  FiShield,
  FiDroplet,
  FiCalendar,
} from "react-icons/fi";

const items = (pkg) => [
  {
    icon: FiActivity,
    title: "Tests Included",
    value: `${pkg.tests}+ Tests`,
  },
  {
    icon: FiHome,
    title: "Collection",
    value: "Home Available",
  },
  {
    icon: FiClock,
    title: "Reports",
    value: "Within 24 Hours",
  },
  {
    icon: FiDroplet,
    title: "Sample",
    value: "Blood & Urine",
  },
  {
    icon: FiCalendar,
    title: "Fasting",
    value: pkg.fasting ? "8-12 Hours" : "Not Required",
  },
  {
    icon: FiShield,
    title: "Quality",
    value: "NABL Certified",
  },
];

export default function QuickInfo({ pkg }) {
  return (
    <section
      className="
        relative
        bg-white
        py-20
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
        "
      >
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
            duration: .5,
          }}
          viewport={{
            once: true,
          }}
          className="
            grid
            gap-5

            sm:grid-cols-2

            lg:grid-cols-3

            xl:grid-cols-6
          "
        >
          {items(pkg).map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-[24px]
                  border
                  border-slate-200
                  bg-white
                  p-6
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
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-blue-50
                    transition
                    group-hover:bg-blue-100
                  "
                >
                  <Icon
                    className="
                      text-xl
                      text-blue-600
                    "
                  />
                </div>

                <p
                  className="
                    mt-5
                    text-sm
                    text-slate-500
                  "
                >
                  {item.title}
                </p>

                <h3
                  className="
                    mt-1
                    text-lg
                    font-semibold
                    text-slate-900
                  "
                >
                  {item.value}
                </h3>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}