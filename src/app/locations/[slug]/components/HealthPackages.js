"use client";

import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import { packages } from "@/app/data/packages";
import PackageCard from "@/app/components/PackageCard";

export default function HealthPackages({ location }) {
  const availablePackages = packages.filter((pkg) =>
    location.packages.includes(pkg.slug)
  );

  if (!availablePackages.length) return null;

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Preventive Healthcare
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Health Checkup Packages in {location.city}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Preventive health checkups play an important role in detecting
            medical conditions before symptoms appear. Our carefully designed
            health packages include comprehensive laboratory investigations that
            help monitor your overall health, identify potential risks early,
            and support timely medical care.
          </p>
        </div>

        {/* Packages */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {availablePackages.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              pkg={pkg}
            />
          ))}
        </div>

        {/* Bottom Section */}

        <div className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Why Choose Preventive Health Checkups?
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Early Disease Detection",
                "Monitor Existing Conditions",
                "Assess Overall Wellness",
                "Affordable Package Pricing",
                "Doctor Recommended Tests",
                "Routine Health Monitoring",
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
            href="/packages"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700 lg:mt-0"
          >
            Explore All Packages

            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}