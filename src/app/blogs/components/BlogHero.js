"use client";

import { FiBookOpen, FiSearch, FiTrendingUp } from "react-icons/fi";

export default function BlogHero({
  totalBlogs,
  search,
  setSearch,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Background */}

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-5 py-2 shadow-sm">
            <FiBookOpen className="text-sky-600" />

            <span className="font-medium text-sky-700">
              DK Bhangal Health Blog
            </span>
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl">
            Expert Health Articles,
            <span className="block text-sky-600">
              Wellness Tips & Guides
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Explore medically reviewed articles on blood tests,
            preventive healthcare, nutrition, lifestyle diseases,
            and wellness. Learn how laboratory diagnostics help
            you stay healthy and make informed healthcare decisions.
          </p>

          {/* Stats */}

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <div className="rounded-2xl bg-white px-8 py-5 shadow-sm">
              <p className="text-3xl font-bold text-sky-600">
                {totalBlogs}+
              </p>

              <p className="mt-1 text-slate-600">
                Health Articles
              </p>
            </div>

            <div className="rounded-2xl bg-white px-8 py-5 shadow-sm">
              <p className="text-3xl font-bold text-sky-600">
                100%
              </p>

              <p className="mt-1 text-slate-600">
                Evidence Based
              </p>
            </div>

            <div className="rounded-2xl bg-white px-8 py-5 shadow-sm">
              <p className="text-3xl font-bold text-sky-600">
                Weekly
              </p>

              <p className="mt-1 text-slate-600">
                New Articles
              </p>
            </div>

          </div>

        

        </div>

      </div>
    </section>
  );
}