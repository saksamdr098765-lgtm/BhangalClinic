"use client";

import { FiCheckCircle, FiUsers } from "react-icons/fi";

export default function WhoNeedsService({ service }) {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:gap-16 lg:px-8">
        {/* Left */}

        <div>
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Recommended For
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {service.idealFor.heading}
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {service.idealFor.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.idealFor.people.map((person) => (
              <div
                key={person}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:shadow-md sm:p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 transition-colors duration-300 group-hover:bg-green-600">
                  <FiCheckCircle className="text-green-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                <span className="text-sm font-medium text-slate-700 sm:text-base">
                  {person}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-6 text-white shadow-2xl sm:p-8">
          {/* Background Glow */}

          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur sm:h-20 sm:w-20 sm:rounded-3xl">
              <FiUsers size={34} />
            </div>

            <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
              Personalized Diagnostic Care
            </h3>

            <p className="mt-4 text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
              Every individual has different healthcare needs. Our diagnostic
              services are designed to provide accurate, convenient, and
              reliable testing for patients of every age group, helping doctors
              make informed medical decisions.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <p className="flex items-start gap-3 text-sm font-medium leading-7 text-white sm:text-base">
                <FiCheckCircle className="mt-1 shrink-0 text-green-300" />

                <span>
                  Suitable for individuals, families, senior citizens,
                  children, pregnant women, and corporate employees.
                </span>
              </p>
            </div>

            {/* Mini Stats */}

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-center">
              <div>
                <h4 className="text-2xl font-black sm:text-3xl">All Ages</h4>
                <p className="mt-1 text-xs text-sky-100 sm:text-sm">
                  Patients
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-black sm:text-3xl">500+</h4>
                <p className="mt-1 text-xs text-sky-100 sm:text-sm">
                  Tests
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-black sm:text-3xl">100%</h4>
                <p className="mt-1 text-xs text-sky-100 sm:text-sm">
                  Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}