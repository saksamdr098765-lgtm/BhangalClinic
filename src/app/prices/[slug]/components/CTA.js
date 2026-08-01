import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiCheckCircle,
} from "react-icons/fi";

export default function CTA({ cta }) {
  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 to-cyan-600 p-5 text-white shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

            {/* Content */}
            <div>
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold sm:text-sm">
                Ready to Book?
              </span>

              <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                {cta.title}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-sky-100 sm:text-base">
                {cta.description}
              </p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {cta.highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-white"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Card */}
            <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-lg sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-sky-600">
                Starting From
              </p>

              <div className="mt-2 flex items-baseline gap-2">
                {cta.actualPrice && (
                  <span className="text-lg text-slate-400 line-through">
                    ₹{cta.actualPrice}
                  </span>
                )}

                <span className="text-3xl font-extrabold text-sky-600 sm:text-4xl">
                  ₹{cta.offerPrice}
                </span>
              </div>

              <p className="mt-2 text-sm leading-5 text-slate-500">
                Home sample collection with fast digital reports.
              </p>

              {/* Buttons */}
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                <Link
                  href={cta.bookingUrl}
                  className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
                >
                  {cta.buttonText}
                  <FiArrowRight className="ml-2" />
                </Link>

                <Link
                  href={cta.phone}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600"
                >
                  <FiPhone className="mr-2" />
                  Call Now
                </Link>
              </div>

              {/* Resources */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <h3 className="text-sm font-bold text-slate-900">
                  Helpful Resources
                </h3>

                <div className="mt-3 space-y-2">
                  <Link
                    href={cta.blogUrl}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-sm transition hover:bg-sky-50"
                  >
                    <span>What is {cta.testName}?</span>
                    <FiArrowRight className="text-sky-600" />
                  </Link>

                  <Link
                    href={cta.serviceUrl}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-sm transition hover:bg-sky-50"
                  >
                    <span>{cta.testName} Details</span>
                    <FiArrowRight className="text-sky-600" />
                  </Link>

                  <Link
                    href={cta.packageUrl}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-sm transition hover:bg-sky-50"
                  >
                    <span>Health Packages</span>
                    <FiArrowRight className="text-sky-600" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}