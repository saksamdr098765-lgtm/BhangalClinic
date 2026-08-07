import Link from "next/link";
import { packages } from "@/app/data/packages";
import { FaArrowRight, FaBoxOpen } from "react-icons/fa";

export default function RelatedPackages({ relatedPackages = [] }) {
  const recommended = packages.filter((pkg) =>
    relatedPackages.includes(pkg.slug)
  );

  if (!recommended.length) return null;

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
          Recommended Tests
        </span>

        <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Related Health Packages
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          Based on this article, these preventive health packages may help
          you better understand your health. Always consult a qualified
          healthcare professional before choosing one.
        </p>
      </div>

      {/* Compact responsive grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {recommended.map((pkg) => (
          <Link
            key={pkg.slug ?? pkg.id}
            href={`/packages/${pkg.slug}`}
            className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 transition-colors hover:bg-sky-50 sm:px-5"
          >
            <div className="flex min-w-0 items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                <FaBoxOpen className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900 sm:text-base">
                  {pkg.name}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-slate-500 sm:text-sm">
                  {pkg.testCount && <span>{pkg.testCount} tests</span>}
                  {pkg.testCount && pkg.price && <span>•</span>}
                  {pkg.price && (
                    <span className="font-medium text-slate-700">
                      ₹{pkg.price}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-sky-600 sm:text-sm">
              View
              <FaArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}