import TrackingLink from "@/app/components/TrackingLink";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function ServiceOverview({ service }) {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:gap-12 lg:px-8">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Service Overview
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {service.overview.heading}
          </h2>

          <div className="mt-4 space-y-3 sm:mt-5">
            {service.overview.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-xs leading-5 text-slate-600 sm:text-base sm:leading-7"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <TrackingLink
            href="/packages"
            tracking={`service-overview-packages-${service.slug}`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 sm:w-auto sm:px-6 sm:py-3.5"
          >
            Explore Health Packages
            <FiArrowRight />
          </TrackingLink>
        </div>

        {/* Right Card Container */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-xs sm:p-6">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
            Key Benefits
          </h3>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {service.overview.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-2xs"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <FiCheckCircle className="text-sm text-green-600" />
                </div>

                <p className="text-xs font-medium text-slate-700 sm:text-sm leading-5">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Help Box */}
          <div className="relative mt-5 overflow-hidden rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 p-4 text-white">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/10 blur-xl" />

            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-100">
                Need Assistance?
              </p>

              <h4 className="mt-1 text-lg font-bold">
                We're Here to Help
              </h4>

              <p className="mt-1.5 text-xs text-sky-100 leading-5">
                Our team is ready to help you choose the right diagnostic service.
              </p>

              <TrackingLink
                href="/contact"
                tracking={`service-overview-contact-${service.slug}`}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-semibold text-sky-700 transition hover:bg-slate-100 sm:w-auto"
              >
                Contact Us
                <FiArrowRight />
              </TrackingLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}