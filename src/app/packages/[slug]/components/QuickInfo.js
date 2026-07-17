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

export default function QuickInfo({ pkg }) {
  const items = [
    {
      icon: FiActivity,
      title: "Tests",
      value: `${pkg?.includedTests?.length || 0}+ Parameters`,
      color: "sky",
    },
    {
      icon: FiHome,
      title: "Collection",
      value: "Home Available",
      color: "emerald",
    },
    {
      icon: FiClock,
      title: "Reports",
      value: "24–48 Hours",
      color: "violet",
    },
    {
      icon: FiDroplet,
      title: "Sample",
      value: "Blood & Urine",
      color: "rose",
    },
    {
      icon: FiCalendar,
      title: "Preparation",
      value: pkg?.fasting
        ? "8–10 hrs Fast"
        : "No Fasting",
      color: "amber",
    },
    {
      icon: FiShield,
      title: "Quality",
      value: "Standard Practice",
      color: "cyan",
    },
  ];

  const colors = {
    sky: {
      bg: "bg-sky-50",
      icon: "text-sky-600",
      ring: "group-hover:ring-sky-100",
    },

    emerald: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      ring: "group-hover:ring-emerald-100",
    },

    violet: {
      bg: "bg-violet-50",
      icon: "text-violet-600",
      ring: "group-hover:ring-violet-100",
    },

    rose: {
      bg: "bg-rose-50",
      icon: "text-rose-600",
      ring: "group-hover:ring-rose-100",
    },

    amber: {
      bg: "bg-amber-50",
      icon: "text-amber-600",
      ring: "group-hover:ring-amber-100",
    },

    cyan: {
      bg: "bg-cyan-50",
      icon: "text-cyan-600",
      ring: "group-hover:ring-cyan-100",
    },
  };

  return (
    <section className="bg-slate-50 py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-700 sm:text-sm">
            Package Information
          </span>

          <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl">
            Everything Before
            <span className="block text-blue-600">
              You Book
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Essential information about your package,
            preparation, reporting time and home collection.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            grid
            grid-cols-2
            gap-3

            sm:grid-cols-3
            sm:gap-5

            xl:grid-cols-6
          "
        >
          {items.map((item, index) => {
            const Icon = item.icon;
            const color = colors[item.color];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.06,
                }}
                viewport={{ once: true }}
                className={`
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-4
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-lg

                  sm:rounded-3xl
                  sm:p-6
                `}
              >
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl

                    ring-8
                    ring-transparent

                    transition-all

                    ${color.bg}
                    ${color.ring}

                    sm:h-14
                    sm:w-14
                  `}
                >
                  <Icon
                    className={color.icon}
                    size={22}
                  />
                </div>

                <p
                  className="
                    mt-4
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-slate-500

                    sm:text-xs
                  "
                >
                  {item.title}
                </p>

                <h3
                  className="
                    mt-2
                    text-sm
                    font-bold
                    leading-6
                    text-slate-900

                    sm:text-lg
                  "
                >
                  {item.value}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}