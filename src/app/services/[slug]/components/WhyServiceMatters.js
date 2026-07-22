"use client";

import {
  FiCheckCircle,
  FiClock,
  FiShield,
  FiTrendingUp,
} from "react-icons/fi";

const icons = {
  shield: FiShield,
  clock: FiClock,
  growth: FiTrendingUp,
  check: FiCheckCircle,
};

export default function WhyServiceMatters({ service }) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Why It Matters
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {service.importance.heading}
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {service.importance.description}
          </p>
        </div>

        {/* Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-4 xl:gap-8">
          {service.importance.cards.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl sm:p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 transition-colors duration-300 group-hover:bg-sky-600">
                  <Icon className="text-3xl text-sky-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Section */}

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 lg:mt-16">
          {/* Background Glow */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-10 lg:p-10">
            {/* Left */}

            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Early Testing Leads to Better Health Outcomes
              </h3>

              <p className="mt-4 text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
                Regular diagnostic testing helps identify potential health
                conditions before symptoms become severe. Early detection
                supports timely medical intervention, better treatment planning,
                and improved long-term health outcomes.
              </p>
            </div>

            {/* Right */}

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur sm:p-8">
              <h4 className="text-xl font-bold text-white">
                Benefits at a Glance
              </h4>

              <ul className="mt-6 space-y-4">
                {[
                  "Early disease detection",
                  "Reliable laboratory reports",
                  "Supports preventive healthcare",
                  "Convenient patient experience",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-400/20">
                      <FiCheckCircle className="text-sm text-green-300" />
                    </div>

                    <span className="text-sm leading-7 text-white sm:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mini Stats */}

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-center">
                <div>
                  <h5 className="text-2xl font-black text-white sm:text-3xl">
                    500+
                  </h5>

                  <p className="mt-1 text-xs text-sky-100 sm:text-sm">
                    Tests
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-black text-white sm:text-3xl">
                    15+
                  </h5>

                  <p className="mt-1 text-xs text-sky-100 sm:text-sm">
                    Years
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-black text-white sm:text-3xl">
                    100%
                  </h5>

                  <p className="mt-1 text-xs text-sky-100 sm:text-sm">
                    Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}