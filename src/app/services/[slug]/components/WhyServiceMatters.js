"use client";

import {
  FiShield,
  FiClock,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

const icons = {
  shield: FiShield,
  clock: FiClock,
  growth: FiTrendingUp,
  check: FiCheckCircle,
};

export default function WhyServiceMatters({ service }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Why It Matters
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {service.importance.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {service.importance.description}
          </p>
        </div>

        {/* Benefits */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {service.importance.cards.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-16 rounded-[28px] bg-gradient-to-r from-sky-600 to-blue-700 p-8 text-white lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              <h3 className="text-3xl font-bold">
                Early Testing Leads to Better Health Outcomes
              </h3>

              <p className="mt-5 text-lg leading-8 text-sky-100">
                Regular diagnostic testing helps identify potential health
                conditions before symptoms become severe. Early detection
                allows timely medical intervention, better treatment planning,
                and improved long-term health outcomes for individuals of all
                ages.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <h4 className="text-xl font-bold">
                Benefits at a Glance
              </h4>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 text-green-300" />
                  <span>Early disease detection</span>
                </li>

                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 text-green-300" />
                  <span>Reliable laboratory reports</span>
                </li>

                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 text-green-300" />
                  <span>Supports preventive healthcare</span>
                </li>

                <li className="flex items-start gap-3">
                  <FiCheckCircle className="mt-1 text-green-300" />
                  <span>Convenient patient experience</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}