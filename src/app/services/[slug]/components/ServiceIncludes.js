import TrackingLink from "@/app/components/TrackingLink";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function ServiceIncludes({ service }) {
  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            What's Included
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {service.includes.heading}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {service.includes.description}
          </p>
        </div>

        {/* Include Cards Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {service.includes.items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-100 transition-colors group-hover:bg-sky-600">
                <FiCheckCircle className="text-xl text-sky-600 transition-colors group-hover:text-white" />
              </div>

              <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                {item.title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-blue-50 p-5 shadow-xs sm:rounded-3xl sm:p-8">
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-slate-900 sm:text-2xl">
                Looking for a Complete Health Checkup?
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
                Explore our preventive health packages that combine multiple laboratory tests into affordable screening plans.
              </p>
            </div>

            <div className="shrink-0">
              <TrackingLink
                href="/packages"
                tracking={`service-includes-packages-${service.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-sky-700 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
              >
                View Health Packages
                <FiArrowRight />
              </TrackingLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}