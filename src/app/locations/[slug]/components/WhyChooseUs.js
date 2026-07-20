"use client";

import {
  FiShield,
  FiClock,
  FiCheckCircle,
  FiActivity,
  FiUsers,
  FiAward,
} from "react-icons/fi";

const iconMap = {
  shield: FiShield,
  clock: FiClock,
  check: FiCheckCircle,
  activity: FiActivity,
  users: FiUsers,
  award: FiAward,
};

export default function WhyChooseUs({ location }) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            Why Patients in {location.city} Trust DK Bhangal Laboratory
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            Choosing the right diagnostic laboratory is essential for accurate
            diagnosis and effective treatment. At DK Bhangal Laboratory, we are
            committed to delivering dependable pathology services through modern
            technology, experienced professionals, strict quality standards,
            and exceptional patient care.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 xl:mt-16 xl:grid-cols-3 xl:gap-8">
          {location.whyChoose.features.map((feature) => {
            const Icon = iconMap[feature.icon] || FiCheckCircle;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:rounded-3xl sm:p-6 lg:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition-all group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-700 p-6 text-white shadow-xl sm:mt-16 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_260px]">
            <div>
              <h3 className="text-2xl font-black sm:text-3xl">
                Accurate Diagnostics. Trusted Healthcare.
              </h3>

              <p className="mt-4 text-sm leading-7 text-sky-100 sm:text-base sm:leading-8">
                Whether you need a routine blood test, preventive health
                screening, ECG, or specialised laboratory investigations,
                our experienced team is dedicated to providing reliable
                results and personalised care for every patient in{" "}
                {location.city}.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur sm:rounded-2xl sm:p-5">
                <p className="text-3xl font-black sm:text-4xl">
                  500+
                </p>

                <p className="mt-2 text-xs text-sky-100 sm:text-sm">
                  Laboratory Tests
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur sm:rounded-2xl sm:p-5">
                <p className="text-3xl font-black sm:text-4xl">
                  15+
                </p>

                <p className="mt-2 text-xs text-sky-100 sm:text-sm">
                  Years Experience
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur sm:rounded-2xl sm:p-5">
                <p className="text-3xl font-black sm:text-4xl">
                  Fast
                </p>

                <p className="mt-2 text-xs text-sky-100 sm:text-sm">
                  Report Delivery
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur sm:rounded-2xl sm:p-5">
                <p className="text-3xl font-black sm:text-4xl">
                  100%
                </p>

                <p className="mt-2 text-xs text-sky-100 sm:text-sm">
                  Patient Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}