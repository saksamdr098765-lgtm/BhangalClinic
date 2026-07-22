"use client";

import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function ServiceIncludes({ service }) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            What's Included
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {service.includes.heading}
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {service.includes.description}
          </p>
        </div>

        {/* Include Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-8">
          {service.includes.items.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 transition-colors duration-300 group-hover:bg-sky-600">
                <FiCheckCircle className="text-2xl text-sky-600 transition-colors duration-300 group-hover:text-white" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="relative mt-12 overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-blue-50 lg:mt-16">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-100/60 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Looking for a Complete Health Checkup?
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Explore our preventive health packages that combine multiple
                laboratory tests into affordable screening plans for
                individuals, families, and routine wellness monitoring.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/packages"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl sm:w-auto"
              >
                View Health Packages
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}