"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiCheckCircle,
  FiClock,
  FiShield,
  FiActivity,
} from "react-icons/fi";

export default function ServiceCTA() {
  const benefits = [
    "Accurate & Reliable Reports",
    "Affordable Pricing",
    "Experienced Laboratory Team",
    "Fast Report Delivery",
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-16 lg:py-16">
          {/* Background */}

          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_420px]">
            {/* Left */}

            <div>
              <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Book Your Diagnostic Test Today
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">
                Take the Next Step Towards Better Health
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100">
                Early diagnosis plays an important role in maintaining good
                health. Whether you need routine blood tests, preventive health
                screening, or specialized laboratory investigations, our team is
                committed to delivering accurate reports with exceptional
                patient care.
              </p>

              {/* Benefits */}

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
                  >
                    <FiCheckCircle className="text-green-300" />

                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700 transition hover:scale-105"
                >
                  Explore Health Packages

                  <FiArrowRight />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us

                  <FiPhone />
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-[30px] bg-white p-8 text-slate-900 shadow-2xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-100 text-sky-600">
                <FiActivity size={38} />
              </div>

              <h3 className="mt-8 text-3xl font-black">
                Why Patients Trust Us
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                    <FiShield />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Reliable Diagnostics
                    </h4>

                    <p className="mt-2 text-slate-600">
                      Advanced laboratory technology with strict quality control
                      for dependable results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                    <FiClock />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Timely Reports
                    </h4>

                    <p className="mt-2 text-slate-600">
                      Quick turnaround times help doctors and patients make
                      timely healthcare decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                    <FiCheckCircle />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Patient-Focused Care
                    </h4>

                    <p className="mt-2 text-slate-600">
                      Friendly staff, transparent pricing, and professional
                      support throughout your diagnostic journey.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini Stats */}

              <div className="mt-10 grid grid-cols-3 gap-4 border-t pt-8">
                <div>
                  <p className="text-3xl font-black text-sky-600">
                    500+
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Lab Tests
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-sky-600">
                    15+
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Years
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-black text-sky-600">
                    100%
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Care
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