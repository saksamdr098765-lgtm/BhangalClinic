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
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Simple & Convenient
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            How Our Diagnostic Process Works
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            At DK Bhangal Laboratory, we make diagnostic testing simple,
            efficient, and stress-free. From booking your appointment to
            receiving your reports, every step is designed to provide a smooth
            healthcare experience for patients in {location.city}.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative mt-10 sm:mt-14 lg:mt-16">
          <div className="absolute left-0 right-0 top-8 hidden h-1 rounded-full bg-sky-100 lg:block" />

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
             <div
  className="
    group
    flex
    h-full
    min-h-[320px]
    flex-col
    rounded-2xl
    border
    border-slate-200
    bg-white
    p-5
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-sky-200
    hover:shadow-lg
    sm:min-h-[340px]
    sm:rounded-3xl
    sm:p-6
  "
  key={index}
>
  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
    <Icon className="h-7 w-7" />
  </div>

  <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">
    {step.title}
  </h3>

  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
    {step.description}
  </p>

  <div className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-600">
    Step {index + 1}

    <FiArrowRight className="transition group-hover:translate-x-1" />
  </div>
</div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-6 text-white shadow-xl sm:mt-16 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_220px]">
            <div>
              <h3 className="text-2xl font-black sm:text-3xl">
                Healthcare Made Simple
              </h3>

              <p className="mt-4 text-sm leading-7 text-sky-100 sm:text-base sm:leading-8">
                Whether you visit our laboratory or choose home sample
                collection, our experienced team ensures a smooth process,
                accurate diagnostics, and timely report delivery. We are
                committed to providing reliable healthcare services for
                patients across {location.city} and nearby areas.
              </p>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}