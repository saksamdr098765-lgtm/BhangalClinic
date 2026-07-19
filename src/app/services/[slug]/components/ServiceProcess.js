"use client";

import {
  FiCalendar,
  FiHome,
  FiActivity,
  FiFileText,
} from "react-icons/fi";

const icons = {
  calendar: FiCalendar,
  home: FiHome,
  lab: FiActivity,
  report: FiFileText,
};

export default function ServiceProcess({ service }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Simple Process
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {service.process.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {service.process.description}
          </p>
        </div>

        {/* Steps */}

        <div className="relative mt-20">
          {/* Desktop line */}

          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-slate-200 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {service.process.steps.map((step, index) => {
              const Icon = icons[step.icon];

              return (
                <div
                  key={step.title}
                  className="relative text-center"
                >
                  {/* Circle */}

                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-600 text-white shadow-xl">
                    <Icon size={34} />
                  </div>

                  {/* Number */}

                  <div className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
                    {index + 1}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Card */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-sky-600 to-blue-700 p-10 text-white">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_300px]">
            <div>
              <h3 className="text-3xl font-bold">
                Fast, Reliable & Hassle-Free
              </h3>

              <p className="mt-5 text-lg leading-8 text-sky-100">
                Every sample collected at DK Bhangal Laboratory follows
                standardized quality protocols from collection to report
                generation. Our streamlined workflow ensures timely testing,
                accurate analysis, and dependable reports that support informed
                healthcare decisions.
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
              <div className="space-y-5">
                <div>
                  <h4 className="text-4xl font-black">4</h4>
                  <p className="text-sky-100">
                    Simple Steps
                  </p>
                </div>

                <div>
                  <h4 className="text-4xl font-black">100%</h4>
                  <p className="text-sky-100">
                    Quality Focused
                  </p>
                </div>

                <div>
                  <h4 className="text-4xl font-black">24×7</h4>
                  <p className="text-sky-100">
                    Online Report Access
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