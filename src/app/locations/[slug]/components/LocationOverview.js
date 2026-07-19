"use client";

import {
  FiCheckCircle,
  FiMapPin,
  FiActivity,
} from "react-icons/fi";

export default function LocationOverview({ location }) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_420px]">
          {/* Left */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              <FiMapPin />

              Healthcare Services in {location.city}
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
              Trusted Diagnostic Laboratory Serving{" "}
              {location.city}, {location.state}
            </h2>

            {location.overview.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mt-6 text-lg leading-8 text-slate-600"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {location.overview.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4"
                >
                  <FiCheckCircle className="mt-1 shrink-0 text-xl text-sky-600" />

                  <span className="leading-7 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-sky-100 text-sky-600">
              <FiActivity size={38} />
            </div>

            <h3 className="mt-8 text-3xl font-black text-slate-900">
              Comprehensive Diagnostic Care
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              We provide reliable laboratory testing using advanced diagnostic
              equipment, experienced professionals, and strict quality control
              standards. Whether you require routine blood investigations,
              preventive health checkups, specialized pathology testing, or home
              sample collection, our team is committed to delivering accurate
              reports and exceptional patient care.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Blood Tests",
                "Preventive Health Packages",
                "ECG Services",
                "Home Sample Collection",
                "Quick Report Delivery",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-4"
                >
                  <FiCheckCircle className="text-sky-600" />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}