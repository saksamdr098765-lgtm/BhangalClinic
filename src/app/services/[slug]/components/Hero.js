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

      <div className="absolute inset-0">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        {/* Left */}

        <div>
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Diagnostic Services
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {service.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            {service.description}
          </p>

          {/* Highlights */}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-xl text-green-600" />
              <span className="font-medium text-slate-700">
                Accurate & Reliable Results
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiShield className="text-xl text-sky-600" />
              <span className="font-medium text-slate-700">
                Safe & Hygienic Process
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiClock className="text-xl text-orange-500" />
              <span className="font-medium text-slate-700">
                Fast Report Delivery
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-xl text-sky-600" />
              <span className="font-medium text-slate-700">
                Experienced Professionals
              </span>
            </div>
          </div>

          {/* CTA */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/packages"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-sky-700 hover:shadow-xl"
            >
              Book Health Checkup

              <FiArrowRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-3 gap-5 border-t border-slate-200 pt-8">
            <div>
              <h3 className="text-3xl font-black text-sky-600">15+</h3>

              <p className="mt-1 text-sm text-slate-500">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-sky-600">500+</h3>

              <p className="mt-1 text-sm text-slate-500">
                Tests Available
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-sky-600">100%</h3>

              <p className="mt-1 text-sm text-slate-500">
                Patient Focused
              </p>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="relative">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
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

          <div className="absolute -bottom-6 left-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-100 p-3">
                <FiShield className="text-sky-600" />
              </div>

              <div>
                <p className="text-sm text-slate-500">
                  Trusted Diagnostic Care
                </p>

                <p className="font-bold text-slate-900">
                  Accurate. Reliable. Convenient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}