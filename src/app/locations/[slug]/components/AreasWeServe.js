"use client";

import { FiMapPin, FiCheckCircle } from "react-icons/fi";

export default function AreasWeServe({ location }) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            <FiMapPin className="h-4 w-4" />
            Areas We Serve
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            Diagnostic Services Across {location.city} & Nearby Areas
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            DK Bhangal Laboratory proudly provides reliable diagnostic
            services, preventive health checkups, pathology testing, ECG
            services, and home sample collection throughout {location.city} and
            surrounding areas. Our goal is to make quality healthcare easily
            accessible for every family in the region.
          </p>
        </div>

        {/* Areas */}

        <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:mt-14 sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            {location.areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-3 transition hover:border-sky-200 hover:bg-sky-50 sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-4"
              >
                <FiCheckCircle className="h-4 w-4 shrink-0 text-sky-600" />

                <span className="text-sm font-medium text-slate-700 sm:text-base">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Cards */}

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:rounded-3xl sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
              Healthcare Close to You
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Whether you live in the heart of {location.city} or nearby towns
              and villages, our laboratory is committed to providing dependable
              diagnostic services with timely reporting and professional patient
              care. We continually expand our reach so more families can access
              quality pathology services without unnecessary travel.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 p-5 text-white shadow-xl sm:rounded-3xl sm:p-8">
            <h3 className="text-xl font-bold sm:text-2xl">
              Home Sample Collection Available
            </h3>

            <p className="mt-4 text-sm leading-7 text-sky-100 sm:mt-5 sm:text-base sm:leading-8">
              Patients from these areas can also book our convenient home sample
              collection service. A trained phlebotomist visits your home,
              safely collects the required samples, and ensures secure
              transportation to our laboratory for accurate testing and timely
              report delivery.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4">
              <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur sm:rounded-2xl sm:p-5">
                <p className="text-2xl font-black sm:text-3xl">
                  {location.areas.length}+
                </p>

                <p className="mt-1 text-xs text-sky-100 sm:mt-2 sm:text-sm">
                  Areas Covered
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 text-center backdrop-blur sm:rounded-2xl sm:p-5">
                <p className="text-2xl font-black sm:text-3xl">500+</p>

                <p className="mt-1 text-xs text-sky-100 sm:mt-2 sm:text-sm">
                  Lab Tests
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}