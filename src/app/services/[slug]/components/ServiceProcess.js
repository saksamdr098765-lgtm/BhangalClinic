import {
  FiActivity,
  FiCalendar,
  FiFileText,
  FiHome,
} from "react-icons/fi";

const icons = {
  calendar: FiCalendar,
  home: FiHome,
  lab: FiActivity,
  report: FiFileText,
};

export default function ServiceProcess({ service }) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Simple Process
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {service.process.heading}
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {service.process.description}
          </p>
        </div>

        {/* Process */}

        <div className="relative mt-12 lg:mt-16">
          {/* Desktop Timeline */}

          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-slate-200 lg:block" />

          {/* Mobile Timeline */}

          <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-slate-200 lg:hidden" />

          <div className="grid gap-8 lg:grid-cols-4">
            {service.process.steps.map((step, index) => {
              const Icon = icons[step.icon];

              return (
                <div
                  key={step.title}
                  className="relative flex gap-5 lg:block lg:text-center"
                >
                  {/* Icon */}

                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:h-20 sm:w-20 lg:mx-auto">
                    <Icon size={30} />
                  </div>

                  {/* Content */}

                  <div className="pb-8 lg:pb-0">
                    <div className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700 lg:mt-5">
                      {index + 1}
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 lg:mt-20">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_300px] lg:items-center lg:gap-10 lg:p-10">
            <div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Fast, Reliable & Hassle-Free
              </h3>

              <p className="mt-4 text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
                Every sample collected at DK Bhangal Laboratory follows
                standardized quality protocols from collection to report
                generation. Our streamlined workflow ensures timely testing,
                accurate analysis, and dependable reports for better healthcare
                decisions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur sm:p-8">
              <div className="grid grid-cols-3 gap-4 text-center lg:grid-cols-1 lg:gap-6 lg:text-left">
                <div>
                  <h4 className="text-3xl font-black text-white sm:text-4xl">
                    4
                  </h4>

                  <p className="mt-1 text-sm text-sky-100">
                    Simple Steps
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-black text-white sm:text-4xl">
                    100%
                  </h4>

                  <p className="mt-1 text-sm text-sky-100">
                    Quality Focused
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-black text-white sm:text-4xl">
                    24×7
                  </h4>

                  <p className="mt-1 text-sm text-sky-100">
                    Report Access
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