"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiPhone,
  FiActivity,
  FiCheckCircle,
  FiShield,
  FiClock,
} from "react-icons/fi";

export default function CTA({ location }) {
  const benefits = [
    "500+ Laboratory Tests",
    "Preventive Health Packages",
    "Home Sample Collection",
    "Fast & Accurate Reports",
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 px-6 py-14 text-white shadow-2xl sm:px-10 lg:px-16">
          {/* Background */}

          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_420px]">
            {/* Left */}

            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                Trusted Diagnostic Laboratory
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">
                Book Your Diagnostic Test in {location.city}
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-sky-100">
                Whether you need routine blood tests, preventive health
                checkups, ECG services, or home sample collection, DK Bhangal
                Laboratory is committed to providing reliable diagnostics,
                accurate reports, and compassionate patient care.
              </p>

              {/* Benefits */}

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 backdrop-blur"
                  >
                    <FiCheckCircle className="text-green-300" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-semibold text-sky-700 transition hover:scale-105"
                >
                  View Health Packages

                  <FiArrowRight />
                </Link>

                <a
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  <FiPhone />

                  Call Now
                </a>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-[30px] bg-white/10 p-8 backdrop-blur-xl">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15">
                <FiActivity size={40} />
              </div>

              <h3 className="text-3xl font-bold">
                Why Patients Choose Us
              </h3>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <FiShield size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Reliable Diagnostics
                    </h4>

                    <p className="mt-1 text-sky-100">
                      Modern laboratory equipment with strict quality control
                      for dependable results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <FiClock size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Fast Report Delivery
                    </h4>

                    <p className="mt-1 text-sky-100">
                      Timely processing and digital reports to support faster
                      healthcare decisions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <FiCheckCircle size={22} />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Affordable Healthcare
                    </h4>

                    <p className="mt-1 text-sky-100">
                      Comprehensive health packages and diagnostic tests at
                      transparent pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5 text-center">
                  <p className="text-4xl font-black">500+</p>

                  <p className="mt-2 text-sm text-sky-100">
                    Lab Tests
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 text-center">
                  <p className="text-4xl font-black">100%</p>

                  <p className="mt-2 text-sm text-sky-100">
                    Patient Care
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