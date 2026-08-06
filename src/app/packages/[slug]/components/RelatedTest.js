import TrackedLink from "@/app/components/TrackedLink";
import {
  FiArrowRight,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";

export default function RelatedPackages({
  packages = [],
  currentSlug,
}) {
  const related = packages
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              More Healthcare Options
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
              Related Health Packages
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Explore similar diagnostic packages designed for
              preventive healthcare, routine screening, and
              complete wellness monitoring.
            </p>
          </div>

          <TrackedLink
            href="/packages"
            tracking="related-packages-view-all"
            className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition"
          >
            View All Packages
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </TrackedLink>
        </div>

        {/* Packages */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((pkg) => (
            <div key={pkg.slug}>
              <TrackedLink
                href={`/packages/${pkg.slug}`}
                tracking={`related-package-${pkg.slug}`}
                className="group block h-full rounded-[32px] border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <FiActivity className="text-2xl text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {pkg.name}
                </h3>

                <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiCheckCircle className="text-blue-600" />
                    Comprehensive Health Tests
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <FiCheckCircle className="text-blue-600" />
                    Home Sample Collection
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Starting From
                    </p>
                    <p className="mt-1 text-3xl font-black text-slate-900">
                      ₹{pkg.price}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition group-hover:translate-x-1">
                    <FiArrowRight />
                  </div>
                </div>
              </TrackedLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}