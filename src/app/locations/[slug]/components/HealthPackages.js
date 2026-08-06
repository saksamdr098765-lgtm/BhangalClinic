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

  const benefits = [
    "Early Disease Detection",
    "Monitor Existing Conditions",
    "Assess Overall Wellness",
    "Affordable Package Pricing",
    "Doctor Recommended Tests",
    "Routine Health Monitoring",
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Preventive Healthcare
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            Health Checkup Packages in {location.city}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            Preventive health checkups play an important role in detecting
            medical conditions before symptoms appear. Our carefully designed
            health packages include comprehensive laboratory investigations
            that help monitor your overall health, identify potential risks
            early, and support timely medical care.
          </p>
        </div>

        {/* Packages */}

        <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 xl:mt-16 xl:grid-cols-3 xl:gap-6">
          {availablePackages.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              pkg={pkg}
            />
          ))}
        </div>

        {/* Bottom */}

        <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:mt-14 sm:rounded-3xl sm:p-8 lg:mt-16 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Why Choose Preventive Health Checkups?
            </h3>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              {benefits.map((item) => (
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

          <Link
            href="/packages"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 sm:rounded-2xl sm:px-7 sm:py-4 lg:mt-0"
          >
            Explore All Packages

            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}