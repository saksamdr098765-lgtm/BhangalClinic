import PackageCard from "@/app/components/PackageCard";
import { packages } from "@/app/data/packages";
import TrackingLink from "@/app/components/TrackingLink";
import { FiArrowRight } from "react-icons/fi";

export default function RelatedPackages({ service }) {
  const relatedPackages = packages.filter((pkg) =>
    service.relatedPackages.includes(pkg.slug)
  );

  if (!relatedPackages.length) return null;

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Recommended Packages
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Health Packages Related to This Service
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Preventive health packages combining multiple investigations in one affordable plan.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-5 text-white sm:rounded-3xl sm:p-8">
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-white sm:text-2xl">
                Looking for a Complete Health Checkup?
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-sky-100 sm:text-sm sm:leading-6">
                Explore our preventive health packages designed for routine wellness screening.
              </p>
            </div>

            <div className="shrink-0">
              <TrackingLink
                href="/packages"
                tracking={`service-related-packages-explore-all-${service.slug}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-sky-700 transition hover:bg-slate-100 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Explore All Packages
                <FiArrowRight />
              </TrackingLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}