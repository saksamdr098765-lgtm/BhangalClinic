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

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Diagnostic Services
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Laboratory Services Available in {location.city}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            We provide a comprehensive range of pathology and diagnostic
            services designed to support preventive healthcare, disease
            diagnosis, treatment monitoring, and routine wellness. Every test is
            performed using quality-controlled laboratory procedures to ensure
            dependable and timely results.
          </p>
        </div>

        {/* Services Grid */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {availableServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                <FiActivity size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 transition group-hover:text-sky-600">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {service.shortDescription}
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-sky-600">
                Learn More

                <FiArrowRight className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Section */}

        <div className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Why Choose Our Diagnostic Services?
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Modern Laboratory Equipment",
                "Experienced Diagnostic Professionals",
                "Quality-Controlled Testing",
                "Fast & Accurate Reports",
                "Affordable Healthcare Services",
                "Patient-Focused Care",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <FiCheckCircle className="text-sky-600" />

                  <span className="text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700 lg:mt-0"
          >
            View All Services

            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}