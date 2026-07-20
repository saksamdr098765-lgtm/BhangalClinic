"use client";

import { services } from "@/app/data/services";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
} from "react-icons/fi";

export default function DiagnosticServices({ location }) {
  const availableServices = services.filter((service) =>
    location.services.includes(service.slug)
  );

  const features = [
    "Modern Laboratory Equipment",
    "Experienced Professionals",
    "Quality-Controlled Testing",
    "Fast & Accurate Reports",
    "Affordable Healthcare",
    "Patient-Focused Care",
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Diagnostic Services
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            Laboratory Services Available in {location.city}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            We provide a comprehensive range of pathology and diagnostic
            services designed to support preventive healthcare, disease
            diagnosis, treatment monitoring, and routine wellness. Every test is
            performed using quality-controlled laboratory procedures to ensure
            dependable and timely results.
          </p>
        </div>

        {/* Services */}

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 xl:mt-16 xl:grid-cols-3 xl:gap-6">
          {availableServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg sm:rounded-3xl sm:p-6 lg:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-100 text-sky-600 sm:h-16 sm:w-16 sm:rounded-2xl">
                <FiActivity className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900 transition-colors group-hover:text-sky-600 sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base">
                {service.shortDescription}
              </p>

              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-600 sm:mt-6 sm:text-base">
                Learn More

                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:mt-14 sm:rounded-3xl sm:p-8 lg:mt-16 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Why Choose Our Diagnostic Services?
            </h3>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="h-5 w-5 shrink-0 text-sky-600" />

                  <span className="text-sm text-slate-700 sm:text-base">
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