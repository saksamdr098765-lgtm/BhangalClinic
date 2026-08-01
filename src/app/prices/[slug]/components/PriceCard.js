"use client";

import Link from "next/link";
import {
  FiCheckCircle,
  FiClock,
  FiDroplet,
  FiHome,
  FiPercent,
  FiArrowRight,
} from "react-icons/fi";

export default function PriceCard({ priceCard }) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Transparent Pricing
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            {priceCard.title}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Affordable pricing with no hidden charges. Book online in minutes.
          </p>
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          <div className="grid lg:grid-cols-2">

            {/* Left */}
            <div className="border-b border-slate-200 p-8 lg:border-b-0 lg:border-r">

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                {priceCard.offerText}
              </span>

              <div className="mt-6 flex items-end gap-3">
                <span className="text-5xl font-extrabold text-sky-600">
                  ₹{priceCard.offerPrice}
                </span>

                {priceCard.actualPrice && (
                  <span className="pb-2 text-xl text-slate-400 line-through">
                    ₹{priceCard.actualPrice}
                  </span>
                )}
              </div>

              <p className="mt-3 text-slate-600">
                Inclusive of all charges.
              </p>

              <Link
                href={priceCard.bookingUrl}
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-sky-700"
              >
                Book Test
                <FiArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Right */}

            <div className="p-8">

              <h3 className="text-xl font-bold text-slate-900">
                Test Information
              </h3>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                <Info
                  icon={<FiClock />}
                  label="Report Time"
                  value={priceCard.reportTime}
                />

                <Info
                  icon={<FiDroplet />}
                  label="Sample Type"
                  value={priceCard.sampleType}
                />

                <Info
                  icon={<FiCheckCircle />}
                  label="Fasting"
                  value={priceCard.fasting}
                />

                <Info
                  icon={<FiHome />}
                  label="Collection"
                  value={
                    priceCard.homeCollection
                      ? "Home & Lab"
                      : "Lab Visit"
                  }
                />
              </div>

              {/* Included */}

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-slate-900">
                  What's Included
                </h4>

                <ul className="mt-5 space-y-3">
                  {priceCard.includes.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <FiCheckCircle className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5">

      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
        {icon}
      </div>

      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-semibold text-slate-900">
        {value}
      </p>

    </div>
  );
}