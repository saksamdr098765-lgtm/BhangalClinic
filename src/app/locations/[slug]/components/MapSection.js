"use client";

import Link from "next/link";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiNavigation,
  FiArrowRight,
} from "react-icons/fi";

export default function MapSection({ location }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            <FiMapPin />

            Visit Our Laboratory
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Find DK Bhangal Laboratory in {location.city}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Visit our diagnostic laboratory for accurate pathology services,
            preventive health checkups, ECG, and professional healthcare
            support. We are conveniently located for patients across{" "}
            {location.city} and nearby areas.
          </p>
        </div>

        {/* Content */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[420px_1fr]">
          {/* Information */}

          <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-black text-slate-900">
              Contact Information
            </h3>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-sky-100 p-4 text-sky-600">
                  <FiMapPin size={22} />
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Address
                  </p>

                  <p className="mt-2 leading-7 text-slate-700">
                    {location.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-sky-100 p-4 text-sky-600">
                  <FiPhone size={22} />
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Phone
                  </p>

                  <a
                    href={`tel:${location.phone}`}
                    className="mt-2 block font-semibold text-slate-700 hover:text-sky-600"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-sky-100 p-4 text-sky-600">
                  <FiMail size={22} />
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Email
                  </p>

                  <a
                    href={`mailto:${location.email}`}
                    className="mt-2 block font-semibold text-slate-700 hover:text-sky-600"
                  >
                    {location.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-sky-100 p-4 text-sky-600">
                  <FiClock size={22} />
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                    Working Hours
                  </p>

                  <p className="mt-2 leading-7 text-slate-700">
                    {location.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4">
              <Link
                href={location.mapLink}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white transition hover:bg-sky-700"
              >
                Get Directions

                <FiNavigation />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-600"
              >
                Contact Us

                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Google Map */}

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
            <iframe
              src={location.mapEmbed}
              width="100%"
              height="650"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />

            <div className="border-t border-slate-200 bg-white p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Serving {location.city} & Nearby Areas
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Patients from surrounding towns and villages trust DK Bhangal
                Laboratory for accurate blood tests, preventive health
                screenings, ECG services, pathology investigations, and home
                sample collection. We are committed to making quality diagnostic
                healthcare accessible, convenient, and affordable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}