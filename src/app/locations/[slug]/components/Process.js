"use client";

import {
  FiCalendar,
  FiUserCheck,
  FiActivity,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  {
    icon: FiCalendar,
    title: "Book Your Test",
    description:
      "Schedule your laboratory test online, by phone, or by visiting our diagnostic center. You can also request a convenient home sample collection appointment.",
  },
  {
    icon: FiUserCheck,
    title: "Sample Collection",
    description:
      "Our experienced professionals collect your sample using sterile equipment while following strict hygiene and quality control protocols.",
  },
  {
    icon: FiActivity,
    title: "Laboratory Analysis",
    description:
      "Samples are processed using advanced diagnostic technology and standardized laboratory procedures to ensure reliable and accurate results.",
  },
  {
    icon: FiFileText,
    title: "Receive Your Reports",
    description:
      "Reports are delivered quickly and can be accessed digitally or collected from our laboratory, helping you consult your healthcare provider without delay.",
  },
];

export default function Process({ location }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Simple & Convenient
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            How Our Diagnostic Process Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At DK Bhangal Laboratory, we make diagnostic testing simple,
            efficient, and stress-free. From booking your appointment to
            receiving your reports, every step is designed to provide a smooth
            healthcare experience for patients in {location.city}.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-20">
          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-sky-100 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative"
                >
                  {/* Number */}

                  <div className="absolute -top-4 left-12 z-10 hidden h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white lg:flex">
                    {index + 1}
                  </div>

                  <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                      <Icon size={30} />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-7 text-slate-600">
                      {step.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 font-semibold text-sky-600">
                      Step {index + 1}

                      <FiArrowRight />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-10 text-white">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_260px]">
            <div>
              <h3 className="text-3xl font-black">
                Healthcare Made Simple
              </h3>

              <p className="mt-5 text-lg leading-8 text-sky-100">
                Whether you visit our laboratory or choose home sample
                collection, our experienced team ensures a smooth process,
                accurate diagnostics, and timely report delivery. We are
                committed to providing reliable healthcare services for patients
                across {location.city} and nearby areas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
                <p className="text-4xl font-black">4</p>

                <p className="mt-2 text-sm text-sky-100">
                  Simple Steps
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
                <p className="text-4xl font-black">Fast</p>

                <p className="mt-2 text-sm text-sky-100">
                  Reports
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}