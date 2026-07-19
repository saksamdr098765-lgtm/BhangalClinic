"use client";

import {
  FiAward,
  FiClock,
  FiShield,
  FiUsers,
  FiCheckCircle,
  FiActivity,
} from "react-icons/fi";

const icons = {
  award: FiAward,
  clock: FiClock,
  shield: FiShield,
  users: FiUsers,
  activity: FiActivity,
  check: FiCheckCircle,
};

export default function WhyChooseLab({ service }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Why Choose DK Bhangal Lab
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Trusted Diagnostic Care Backed by Experience
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At DK Bhangal Laboratory & ECG, we combine experienced healthcare
            professionals, advanced diagnostic technology, and a patient-first
            approach to deliver accurate laboratory testing with exceptional
            service. Every test is performed with precision, ensuring reliable
            results that support informed healthcare decisions.
          </p>
        </div>

        {/* Features */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {service.whyChoose.features.map((feature) => {
            const Icon = icons[feature.icon];

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100">
                  <Icon className="text-3xl text-sky-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom */}

        <div className="mt-20 overflow-hidden rounded-[36px] bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800">
          <div className="grid items-center gap-12 px-8 py-12 lg:grid-cols-[1fr_420px] lg:px-16">
            {/* Left */}

            <div className="text-white">
              <h3 className="text-3xl font-black">
                Your Health Deserves Accuracy & Trust
              </h3>

              <p className="mt-6 text-lg leading-8 text-sky-100">
                Whether you are booking a routine blood test, preventive health
                screening, or specialized diagnostic investigation, our goal is
                to provide dependable laboratory services with complete
                transparency, quality assurance, and timely reporting.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Experienced Laboratory Team",
                  "Modern Diagnostic Equipment",
                  "Strict Quality Control",
                  "Affordable Pricing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur"
                  >
                    <FiCheckCircle className="text-green-300" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}

            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-slate-900">
                Our Commitment
              </h4>

              <div className="mt-8 space-y-6">
                <div>
                  <h5 className="font-semibold text-sky-600">
                    Accuracy
                  </h5>

                  <p className="mt-2 leading-7 text-slate-600">
                    Reliable diagnostic reports generated using advanced
                    laboratory technology.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-sky-600">
                    Compassion
                  </h5>

                  <p className="mt-2 leading-7 text-slate-600">
                    Friendly and supportive healthcare professionals committed
                    to patient comfort.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-sky-600">
                    Excellence
                  </h5>

                  <p className="mt-2 leading-7 text-slate-600">
                    Continuous focus on quality, innovation, and dependable
                    laboratory services.
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