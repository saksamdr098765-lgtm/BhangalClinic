"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiHome,
  FiShield,
} from "react-icons/fi";

export default function Hero({ hero, priceCard }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-60" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Left */}
        <div>
          {/* Badge */}
          {hero.badge && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm">
              <FiShield />
              {hero.badge}
            </div>
          )}

          {/* Heading */}
          <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {hero.subtitle}
          </p>

          {/* Highlights */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">
              <FiHome />
              Home Collection
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              <FiClock />
              Report in {priceCard.reportTime}
            </div>

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              <FiCheckCircle />
              NABL Standards
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.primaryButton.href}
              className="inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-sky-700"
            >
              {hero.primaryButton.text}
              <FiArrowRight className="ml-2" />
            </Link>

            <Link
              href={hero.secondaryButton.href}
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600"
            >
              {hero.secondaryButton.text}
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          {/* Image Card */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <Image
              src={hero.image}
              alt={hero.title}
              width={700}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          {/* Floating Price Card */}
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Starting From</p>

            <div className="mt-1 flex items-end gap-2">
              {priceCard.actualPrice && (
                <span className="text-lg text-slate-400 line-through">
                  ₹{priceCard.actualPrice}
                </span>
              )}

              <span className="text-4xl font-extrabold text-sky-600">
                ₹{priceCard.offerPrice}
              </span>
            </div>

            {priceCard.offerText && (
              <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                {priceCard.offerText}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}