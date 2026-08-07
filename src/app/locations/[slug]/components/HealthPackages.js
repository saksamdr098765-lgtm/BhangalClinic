import TrackingLink from "@/app/components/TrackingLink";
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
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            Preventive Healthcare
          </span>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Health Checkup Packages in {location.city}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Comprehensive health packages helping monitor overall wellness and support early disease detection.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {availablePackages.map((pkg) => (
            <PackageCard
              key={pkg.slug}
              pkg={pkg}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-2xl bg-white p-4 shadow-xs ring-1 ring-slate-200 sm:p-7 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Why Choose Preventive Health Checkups?
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-sky-600 text-xs" />
                  <span className="text-xs text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 shrink-0 lg:mt-0">
            <TrackingLink
              href="/packages"
              tracking={`location-packages-explore-all-${location.city}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-sky-700 sm:w-auto sm:text-sm"
            >
              Explore All Packages
              <FiArrowRight />
            </TrackingLink>
          </div>
        </div>
      </div>
    </section>
  );
}