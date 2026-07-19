"use client";

import {
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

export default function ServiceIncludes({ service }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            What's Included
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {service.includes.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {service.includes.description}
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {service.includes.items.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100">
                <FiCheckCircle className="text-2xl text-sky-600" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-16 rounded-[32px] border border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50 p-8 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Looking for a Complete Health Checkup?
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Explore our preventive health packages that combine multiple
              laboratory tests into affordable screening plans for individuals
              and families.
            </p>
          </div>

          <Link
            href="/packages"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white transition hover:bg-sky-700 lg:mt-0"
          >
            View Health Packages

            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}