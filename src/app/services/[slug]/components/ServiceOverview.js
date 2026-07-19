"use client";

import {
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import Link from "next/link";

export default function ServiceOverview({ service }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_.8fr] lg:px-8">
        {/* Left */}

        <div>
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Service Overview
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {service.overview.heading}
          </h2>

          <div className="mt-8 space-y-6">
            {service.overview.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <Link
            href="/packages"
            className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white transition hover:bg-sky-700"
          >
            Explore Health Packages

            <FiArrowRight />
          </Link>
        </div>

        {/* Right */}

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            Key Benefits
          </h3>

          <div className="mt-8 space-y-5">
            {service.overview.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4"
              >
                <div className="mt-1 rounded-full bg-green-100 p-2">
                  <FiCheckCircle className="text-green-600" />
                </div>

                <p className="leading-7 text-slate-600">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-sky-600 p-6 text-white">
            <p className="text-sm uppercase tracking-wider text-sky-100">
              Need Assistance?
            </p>

            <h4 className="mt-2 text-2xl font-bold">
              We're Here to Help
            </h4>

            <p className="mt-3 leading-7 text-sky-100">
              Our team is ready to answer your questions and help you choose
              the right diagnostic service for your healthcare needs.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 transition hover:scale-105"
            >
              Contact Us

              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}