import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function ServiceOverview({ service }) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:gap-16 lg:px-8">
        {/* Left */}

        <div>
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Service Overview
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {service.overview.heading}
          </h2>

          <div className="mt-6 space-y-5 sm:mt-8">
            {service.overview.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href="/packages"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl sm:mt-10 sm:w-auto"
          >
            Explore Health Packages
            <FiArrowRight />
          </Link>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Key Benefits
          </h3>

          <div className="mt-8 space-y-5">
            {service.overview.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                  <FiCheckCircle className="text-green-600" />
                </div>

                <p className="text-sm leading-7 text-slate-600 sm:text-base">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Help Card */}

          <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 p-6 text-white">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">
                Need Assistance?
              </p>

              <h4 className="mt-3 text-2xl font-bold">
                We're Here to Help
              </h4>

              <p className="mt-3 text-sm leading-7 text-sky-100 sm:text-base">
                Our team is ready to answer your questions and help you choose
                the right diagnostic service for your healthcare needs.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-lg sm:w-auto"
              >
                Contact Us
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}