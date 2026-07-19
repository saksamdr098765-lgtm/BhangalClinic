import Link from "next/link";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiShield,
} from "react-icons/fi";

export default function HealthPackagesCTA() {
  const benefits = [
    "Accurate & Reliable Reports",
    "Experienced Laboratory Team",
    "Affordable Health Packages",
    "Fast Report Delivery",
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 px-5 py-8 text-white shadow-2xl sm:px-8 sm:py-12 lg:rounded-[32px] lg:px-16 lg:py-14">
        {/* Background */}

        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center xl:grid-cols-[minmax(0,1fr)_430px]">
          {/* Left */}

          <div>
            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur sm:text-sm">
              Trusted Diagnostic Services
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Ready to Take Charge of Your Health?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
              Reading about your health is the first step. Regular laboratory
              testing helps detect health concerns early, monitor ongoing
              conditions, and support informed medical decisions. Explore our
              preventive health packages designed for every stage of life.
            </p>

            {/* Benefits */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
                >
                  <FiCheckCircle className="h-5 w-5 shrink-0 text-green-300" />

                  <span className="text-sm font-medium sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/packages"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-sky-700 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-100 sm:w-auto"
              >
                Explore Health Packages

                <FiArrowRight />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15 sm:h-20 sm:w-20">
              <FiActivity className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>

            <h3 className="text-2xl font-bold sm:text-3xl">
              Why Choose DK Bhangal Lab?
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <FiShield className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Reliable Diagnostics
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-sky-100">
                    Advanced laboratory testing with dependable results you can
                    trust.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <FiClock className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Timely Reports
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-sky-100">
                    Quick turnaround time so you receive your reports without
                    unnecessary delays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3">
                  <FiCheckCircle className="h-5 w-5" />
                </div>

                <div>
                  <h4 className="font-semibold">
                    Preventive Healthcare
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-sky-100">
                    Comprehensive health packages designed to detect health
                    concerns early and help you stay on top of your wellness.
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