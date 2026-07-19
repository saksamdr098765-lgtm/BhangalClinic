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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Why Patients in {location.city} Trust DK Bhangal Laboratory
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choosing the right diagnostic laboratory is essential for accurate
            diagnosis and effective treatment. At DK Bhangal Laboratory, we are
            committed to delivering dependable pathology services through modern
            technology, experienced professionals, strict quality standards, and
            exceptional patient care.
          </p>
        </div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {location.whyChoose.features.map((feature) => {
            const Icon = iconMap[feature.icon] || FiCheckCircle;

            return (
              <div
                key={feature.title}
                className="group rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-sky-600 to-blue-700 p-10 text-white lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-3xl font-black">
              Accurate Diagnostics. Trusted Healthcare.
            </h3>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-sky-100">
              Whether you need a routine blood test, preventive health
              screening, ECG, or specialized laboratory investigations, our
              experienced team is dedicated to providing reliable results and
              personalized care for every patient in {location.city}.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-5 lg:mt-0">
            <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
              <p className="text-4xl font-black">500+</p>

              <p className="mt-2 text-sm text-sky-100">
                Laboratory Tests
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
              <p className="text-4xl font-black">15+</p>

              <p className="mt-2 text-sm text-sky-100">
                Years Experience
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
              <p className="text-4xl font-black">Fast</p>

              <p className="mt-2 text-sm text-sky-100">
                Report Delivery
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
              <p className="text-4xl font-black">100%</p>

              <p className="mt-2 text-sm text-sky-100">
                Patient Care
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}