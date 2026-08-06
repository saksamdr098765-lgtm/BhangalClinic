import PackageCard from "@/app/components/PackageCard";
import { packages } from "@/app/data/packages";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function RelatedPackages({ service }) {
  const relatedPackages = packages.filter((pkg) =>
    service.relatedPackages.includes(pkg.slug)
  );

  if (!relatedPackages.length) return null;

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Recommended Packages
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Health Packages Related to This Service
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Make the most of your diagnostic visit by choosing a preventive
            health package that combines multiple laboratory investigations in
            one affordable screening plan. These packages are carefully selected
            based on the service you're viewing.
          </p>
        </div>

        {/* Package Cards */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-8">
          {relatedPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* CTA */}

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 lg:mt-16">
          {/* Background Glow */}

          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Looking for a Complete Health Checkup?
              </h3>

              <p className="mt-4 text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
                Explore our preventive health packages designed for men, women,
                senior citizens, families, and routine wellness screening.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/packages"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-sky-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl sm:w-auto"
              >
                Explore All Packages
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}