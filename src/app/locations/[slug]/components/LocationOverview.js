"use client";

import {
  FiCheckCircle,
  FiMapPin,
  FiActivity,
} from "react-icons/fi";

export default function LocationOverview({ location }) {
  const services = [
    "Blood Tests",
    "Preventive Health Packages",
    "ECG Services",
    "Home Sample Collection",
    "Quick Report Delivery",
  ];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_430px] lg:gap-12">
          {/* Left */}

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
              <FiMapPin className="h-4 w-4" />

              Healthcare Services in {location.city}
            </span>

            <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
              Trusted Diagnostic Laboratory Serving{" "}
              {location.city}, {location.state}
            </h2>

            {location.overview.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8"
              >
                {paragraph}
              </p>
            ))}

            {/* Highlights */}

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {location.overview.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-sky-200 hover:bg-sky-50 sm:rounded-2xl sm:p-4"
                >
                  <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />

                  <span className="text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:rounded-3xl sm:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 sm:h-20 sm:w-20 sm:rounded-3xl">
              <FiActivity className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>

            <h3 className="mt-6 text-2xl font-black text-slate-900 sm:mt-8 sm:text-3xl">
              Comprehensive Diagnostic Care
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              We provide reliable laboratory testing using advanced diagnostic
              equipment, experienced professionals, and strict quality control
              standards. Whether you require routine blood investigations,
              preventive health checkups, specialised pathology testing, or
              home sample collection, our team is committed to delivering
              accurate reports and exceptional patient care.
            </p>

            {/* Services */}

            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {services.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4"
                >
                  <FiCheckCircle className="h-5 w-5 shrink-0 text-sky-600" />

                  <span className="text-sm font-medium text-slate-700 sm:text-base">
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