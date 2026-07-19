"use client";

import {
  FiCheckCircle,
  FiUsers,
} from "react-icons/fi";

export default function WhoNeedsService({ service }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        {/* Left */}

        <div>
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Recommended For
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            {service.idealFor.heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {service.idealFor.description}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.idealFor.people.map((person) => (
              <div
                key={person}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <div className="rounded-full bg-green-100 p-2">
                  <FiCheckCircle className="text-green-600" />
                </div>

                <span className="font-medium text-slate-700">
                  {person}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}

        <div className="rounded-[32px] bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-8 text-white shadow-2xl">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15">
            <FiUsers size={40} />
          </div>

          <h3 className="mt-8 text-3xl font-bold">
            Personalized Diagnostic Care
          </h3>

          <p className="mt-5 leading-8 text-sky-100">
            Every individual has different healthcare needs. Our diagnostic
            services are designed to provide accurate, convenient, and reliable
            testing for patients of every age group, helping doctors make
            informed medical decisions.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
            <p className="font-semibold">
              ✔ Suitable for individuals, families, senior citizens, children,
              pregnant women, and corporate employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}