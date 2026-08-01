"use client";

import {
  FiShield,
  FiClock,
  FiHome,
  FiUsers,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const icons = {
  shield: FiShield,
  clock: FiClock,
  home: FiHome,
  users: FiUsers,
  award: FiAward,
  check: FiCheckCircle,
};

export default function WhyChooseUs({ trust }) {
  return (
    <section className="bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            {trust.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {trust.description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trust.features.map((feature) => {
            const Icon = icons[feature.icon];

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 rounded-3xl bg-sky-600 p-8 text-center text-white md:grid-cols-4">
          {trust.stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-4xl font-bold">
                {stat.value}
              </h3>

              <p className="mt-2 text-sky-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}