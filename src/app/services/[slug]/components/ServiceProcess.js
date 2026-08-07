import {
  FiActivity,
  FiCalendar,
  FiFileText,
  FiHome,
  FiSearch,
} from "react-icons/fi";

const icons = {
  calendar: FiCalendar,
  home: FiHome,
  lab: FiActivity,
  report: FiFileText,
  search: FiSearch,
};

export default function ServiceProcess({ service }) {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Simple Process
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {service.process.heading}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {service.process.description}
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-6 sm:mt-10">
          {/* Desktop Line */}
          <div className="absolute left-0 right-0 top-6 hidden h-0.5 bg-slate-200 lg:block" />

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {service.process.steps.map((step, index) => {
              const Icon = icons[step.icon] || FiActivity;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center rounded-xl border border-slate-100 bg-slate-50 p-3.5 sm:p-5 shadow-2xs"
                >
                  {/* Step Badge */}
                  <div className="absolute -top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-700">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-sm">
                    <Icon className="text-lg sm:text-xl" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-2.5 text-sm font-bold text-slate-900 sm:text-base">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-5 text-white sm:rounded-3xl sm:p-8">
          <div className="relative grid gap-6 lg:grid-cols-[1fr_280px] lg:items-center lg:gap-8">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                Fast, Reliable & Hassle-Free
              </h3>

              <p className="mt-2 text-xs leading-5 text-sky-100 sm:text-base sm:leading-7">
                Every sample collected follows standardized quality protocols for timely, accurate results.
              </p>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur sm:rounded-2xl">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <h4 className="text-xl font-black sm:text-2xl">4</h4>
                  <p className="text-[10px] text-sky-100">Steps</p>
                </div>

                <div>
                  <h4 className="text-xl font-black sm:text-2xl">100%</h4>
                  <p className="text-[10px] text-sky-100">Quality</p>
                </div>

                <div>
                  <h4 className="text-xl font-black sm:text-2xl">24×7</h4>
                  <p className="text-[10px] text-sky-100">Reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}