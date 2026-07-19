"use client";

import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiArrowRight,
  FiHome,
  FiActivity,
  FiShield,
} from "react-icons/fi";

export default function Hero({ location }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-28 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_500px]">
          {/* Left */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              <FiMapPin />

              Trusted Diagnostic Laboratory in {location.city}
            </div>

            <h1 className="mt-8 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {location.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-sky-100 sm:text-xl">
              {location.shortDescription}
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700 transition hover:scale-105"
              >
                View Health Packages

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

            {/* Stats */}

            <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiActivity className="text-3xl text-cyan-300" />

                <p className="mt-3 text-2xl font-black text-white">
                  500+
                </p>

                <p className="mt-1 text-sm text-sky-100">
                  Lab Tests
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiShield className="text-3xl text-cyan-300" />

                <p className="mt-3 text-2xl font-black text-white">
                  100%
                </p>

                <p className="mt-1 text-sm text-sky-100">
                  Accurate Reports
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiMapPin className="text-3xl text-cyan-300" />

                <p className="mt-3 text-2xl font-black text-white">
                  {location.city}
                </p>

                <p className="mt-1 text-sm text-sky-100">
                  Service Area
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <FiHome className="text-3xl text-cyan-300" />

                <p className="mt-3 text-2xl font-black text-white">
                  Home
                </p>

                <p className="mt-1 text-sm text-sky-100">
                  Sample Collection
                </p>
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="rounded-[32px] bg-white p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-slate-900">
              Why Choose DK Bhangal Lab?
            </h2>

            <div className="mt-8 space-y-6">
              {[
                "Advanced Diagnostic Technology",
                "Experienced Laboratory Professionals",
                "Affordable Health Packages",
                "Fast & Accurate Reports",
                "Home Sample Collection",
                "Patient-Centered Care",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 p-4"
                >
                  <div className="rounded-xl bg-sky-100 p-3 text-sky-600">
                    <FiShield />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Providing reliable healthcare services with a commitment
                      to quality, patient safety, and timely diagnostics.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-8 flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white transition hover:bg-sky-700"
            >
              Book Your Test

              <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}