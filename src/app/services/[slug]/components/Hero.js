"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiShield,
} from "react-icons/fi";

export default function ServiceHero({ service }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-100/70 blur-3xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:grid lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        {/* Left */}
        <div className="order-2 mt-10 lg:order-1 lg:mt-0">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Diagnostic Services
          </span>

          <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-6xl">
            {service.title}
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {service.description}
          </p>

          {/* Highlights */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: FiCheckCircle,
                color: "text-green-600",
                text: "Accurate & Reliable Results",
              },
              {
                icon: FiShield,
                color: "text-sky-600",
                text: "Safe & Hygienic Process",
              },
              {
                icon: FiClock,
                color: "text-orange-500",
                text: "Fast Report Delivery",
              },
              {
                icon: FiCheckCircle,
                color: "text-sky-600",
                text: "Experienced Professionals",
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-sm"
              >
                <item.icon className={`text-xl ${item.color}`} />
                <span className="text-sm font-medium text-slate-700 sm:text-base">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/packages"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 font-semibold text-white transition hover:bg-sky-700 hover:shadow-lg sm:w-auto"
            >
              Book Health Checkup
              <FiArrowRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 sm:w-auto"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 sm:gap-6 sm:pt-8">
            {[
              {
                number: "15+",
                label: "Years Experience",
              },
              {
                number: "500+",
                label: "Tests Available",
              },
              {
                number: "100%",
                label: "Patient Focused",
              },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-2xl font-black text-sky-600 sm:text-3xl">
                  {stat.number}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl sm:p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] sm:rounded-3xl">
                <Image
                  src={service.coverImage}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating Card */}

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl backdrop-blur sm:-bottom-6 sm:left-6 sm:right-auto sm:max-w-xs sm:p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-sky-100 p-3">
                  <FiShield className="text-xl text-sky-600" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 sm:text-sm">
                    Trusted Diagnostic Care
                  </p>

                  <p className="text-sm font-bold text-slate-900 sm:text-base">
                    Accurate. Reliable. Convenient.
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