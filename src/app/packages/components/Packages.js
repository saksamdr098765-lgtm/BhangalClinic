import { FiArrowRight } from "react-icons/fi";
import { packages } from "@/app/data/packages";
import PackageCard from "@/app/components/PackageCard";
import TrackingLink from "@/app/components/TrackingLink";

export default function PackagesPage({ searchParams = {} }) {
  const search = searchParams.search?.toLowerCase() || "";
  const tag = searchParams.tag?.toLowerCase() || "";
  const limit = parseInt(searchParams.limit || "6", 10);

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      !search ||
      pkg.name.toLowerCase().includes(search) ||
      pkg.shortDescription.toLowerCase().includes(search) ||
      pkg.description.toLowerCase().includes(search) ||
      pkg.includedTests.includes(search);

    const matchesTag =
      !tag ||
      pkg.tags?.some(
        (t) => t.toLowerCase() === tag
      );

    return matchesSearch && matchesTag;
  });

  const displayedPackages = filteredPackages.length > 0
    ? filteredPackages
    : packages.slice(0, 6);

  const visiblePackages = displayedPackages.slice(0, limit);
  const hasMore = limit < displayedPackages.length;

  const pageTitle =
    tag
      ? `${tag.charAt(0).toUpperCase() + tag.slice(1)} Packages`
      : search
      ? `${search.charAt(0).toUpperCase() + search.slice(1)} Packages`
      : "Health Packages";

  // Build query string for Load More link
  const buildLoadMoreUrl = () => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (tag) params.set("tag", tag);
    params.set("limit", (limit + 6).toString());
    if (searchParams.category) params.set("category", searchParams.category);
    return `/packages?${params.toString()}#packages-list`;
  };

  return (
    <section
      id="packages-list"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-5 pb-24"
    >
      {/* Background */}
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100/60 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-100/50 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-5 py-2 text-sm font-medium text-blue-700">
            Preventive Healthcare
          </span>

          <h1 className="mt-7 text-5xl font-black tracking-tight text-nowrap text-blue-500 lg:text-7xl">
            {pageTitle}
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            Discover comprehensive diagnostic packages designed for
            preventive healthcare, routine wellness, and early disease
            detection with convenient home sample collection.
          </p>
        </div>

        {/* Section Header */}
        <div className="mt-20 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Available Packages
            </p>

            <h2 className="mt-3 text-4xl font-black text-slate-900">
              Choose Your {pageTitle}
            </h2>
          </div>

          <p className="hidden text-slate-500 lg:block">
            {displayedPackages.length} Packages Available
          </p>
        </div>

        <div className="mt-10 grid gap-10 sm:gap-14 md:grid-cols-2 xl:grid-cols-3">
          {visiblePackages.map((pkg, index) => (
            <PackageCard
              key={pkg.id}
              location="packagesPage"
              pkg={pkg}
              featured={index < 2}
            />
          ))}
        </div>

        {hasMore && (
          <div className="mt-14 flex justify-center">
            <TrackingLink
              href={buildLoadMoreUrl()}
              tracking="packages-load-more"
              scroll={false}
              className="group inline-flex items-center gap-3 rounded-2xl border border-blue-200 bg-white px-7 py-3 text-sm font-semibold text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Load More
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </TrackingLink>
          </div>
        )}
      </div>
    </section>
  );
}