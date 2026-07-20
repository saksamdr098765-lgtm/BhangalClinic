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
  const features = [
    "Advanced Diagnostic Technology",
    "Fast & Accurate Reports",
    "Home Sample Collection",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 py-10">
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl lg:h-80 lg:w-80" />

        <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl lg:h-80 lg:w-80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_430px] lg:gap-12">
          {/* Left */}

<div>
  {/* Badge */}

  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
    <FiMapPin className="h-4 w-4" />
    Trusted Diagnostic Laboratory in {location.city}
  </span>

  {/* Heading */}

  <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
    {location.title}
  </h1>

  {/* Description */}

  <p className="mt-4 max-w-2xl text-sm leading-7 text-sky-100 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
    {location.shortDescription}
  </p>

  {/* Buttons */}

  <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
    <Link
      href="/packages"
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-sky-700 transition hover:scale-[1.02] sm:rounded-2xl sm:px-7 sm:py-4"
    >
      View Health Packages

      <FiArrowRight />
    </Link>

    <Link
      href="/contact"
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white/10 sm:rounded-2xl sm:px-7 sm:py-4"
    >
      <FiPhone />

      Contact Us
    </Link>
  </div>

  {/* Stats */}

  <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
    <div className="rounded-xl bg-white/10 p-4 backdrop-blur sm:rounded-2xl sm:p-5">
      <FiActivity className="h-6 w-6 text-cyan-300 sm:h-7 sm:w-7" />

      <p className="mt-2 text-xl font-black text-white sm:text-2xl">
        500+
      </p>

      <p className="mt-1 text-xs text-sky-100 sm:text-sm">
        Lab Tests
      </p>
    </div>

    <div className="rounded-xl bg-white/10 p-4 backdrop-blur sm:rounded-2xl sm:p-5">
      <FiShield className="h-6 w-6 text-cyan-300 sm:h-7 sm:w-7" />

      <p className="mt-2 text-xl font-black text-white sm:text-2xl">
        100%
      </p>

      <p className="mt-1 text-xs text-sky-100 sm:text-sm">
        Accurate Reports
      </p>
    </div>

    <div className="rounded-xl bg-white/10 p-4 backdrop-blur sm:rounded-2xl sm:p-5">
      <FiMapPin className="h-6 w-6 text-cyan-300 sm:h-7 sm:w-7" />

      <p className="mt-2 truncate text-lg font-black text-white sm:text-xl">
        {location.city}
      </p>

      <p className="mt-1 text-xs text-sky-100 sm:text-sm">
        Service Area
      </p>
    </div>

    <div className="rounded-xl bg-white/10 p-4 backdrop-blur sm:rounded-2xl sm:p-5">
      <FiHome className="h-6 w-6 text-cyan-300 sm:h-7 sm:w-7" />

      <p className="mt-2 text-lg font-black text-white sm:text-xl">
        Home
      </p>

      <p className="mt-1 text-xs text-sky-100 sm:text-sm">
        Collection
      </p>
    </div>
  </div>
</div>
{/* Right */}

<div className="rounded-2xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-8">
  <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
    Why Choose Us
  </span>

  <h2 className="mt-4 text-2xl font-black text-slate-900 sm:text-3xl">
    Trusted Healthcare for Every Family
  </h2>

  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
    We combine experienced professionals, modern diagnostic technology,
    and patient-focused care to deliver reliable laboratory services
    with timely reporting.
  </p>

  {/* Features */}

  <div className="mt-6 space-y-4">
    {features.map((item) => (
      <div
        key={item}
        className="flex items-start gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-sky-200 hover:bg-sky-50/50 sm:rounded-2xl sm:p-4"
      >
        <div className="rounded-lg bg-sky-100 p-2.5 text-sky-600 sm:rounded-xl">
          <FiShield className="h-5 w-5" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            {item}
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Reliable diagnostic services delivered with quality,
            precision, and a commitment to patient care.
          </p>
        </div>
      </div>
    ))}
  </div>

  {/* CTA */}

  <Link
    href="/contact"
    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 sm:mt-8 sm:rounded-2xl sm:px-6 sm:py-4"
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