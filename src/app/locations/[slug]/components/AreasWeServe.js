"use client";

import {
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";

export default function AreasWeServe({ location }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            <FiMapPin />

            Areas We Serve
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Diagnostic Services Across {location.city} & Nearby Areas
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            DK Bhangal Laboratory proudly provides reliable diagnostic services,
            preventive health checkups, pathology testing, ECG services, and
            home sample collection throughout {location.city} and surrounding
            areas. Our goal is to make quality healthcare easily accessible for
            every family in the region.
          </p>
        </div>

        {/* Areas */}

        <div className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {location.areas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <FiCheckCircle className="shrink-0 text-sky-600" />

                <span className="font-medium text-slate-700">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Content */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-bold text-slate-900">
              Healthcare Close to You
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Whether you live in the heart of {location.city} or nearby towns
              and villages, our laboratory is committed to providing dependable
              diagnostic services with timely reporting and professional patient
              care. We continually expand our reach so more families can access
              quality pathology services without unnecessary travel.
            </p>
          </div>

          <div className="rounded-[30px] bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold">
              Home Sample Collection Available
            </h3>

            <p className="mt-5 leading-8 text-sky-100">
              Patients from these areas can also book our convenient home sample
              collection service. A trained phlebotomist visits your home,
              safely collects the required samples, and ensures secure
              transportation to our laboratory for accurate testing and timely
              report delivery.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
                <p className="text-3xl font-black">
                  {location.areas.length}+
                </p>

                <p className="mt-2 text-sm text-sky-100">
                  Areas Covered
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 text-center backdrop-blur">
                <p className="text-3xl font-black">
                  500+
                </p>

                <p className="mt-2 text-sm text-sky-100">
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