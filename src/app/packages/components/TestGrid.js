import { tests } from "@/app/data/tests";
import TestCard from "@/app/components/TestCard";
import TrackingLink from "@/app/components/TrackingLink";

const DEFAULT_LIMIT = 10;

export default function TestGrid({ searchParams = {} }) {
  const selectedCategory = searchParams.category || "All";
  const testLimit = parseInt(searchParams.testLimit || DEFAULT_LIMIT.toString(), 10);

  const categories = ["All", ...Array.from(new Set(tests.map((t) => t.category))).sort()];

  const filteredTests = selectedCategory === "All"
    ? tests
    : tests.filter((t) => t.category === selectedCategory);

  const visibleTests = filteredTests.slice(0, testLimit);
  const hasMore = testLimit < filteredTests.length;

  const buildCategoryUrl = (cat) => {
    const params = new URLSearchParams();
    if (searchParams.search) params.set("search", searchParams.search);
    if (searchParams.tag) params.set("tag", searchParams.tag);
    if (searchParams.limit) params.set("limit", searchParams.limit);
    if (cat !== "All") params.set("category", cat);
    return `/packages?${params.toString()}#test-grid`;
  };

  const buildLoadMoreUrl = () => {
    const params = new URLSearchParams();
    if (searchParams.search) params.set("search", searchParams.search);
    if (searchParams.tag) params.set("tag", searchParams.tag);
    if (searchParams.limit) params.set("limit", searchParams.limit);
    if (selectedCategory !== "All") params.set("category", selectedCategory);
    params.set("testLimit", (testLimit + 10).toString());
    return `/packages?${params.toString()}#test-grid`;
  };

  return (
    <section
      id="test-grid"
      className="bg-slate-50 py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600">
            Laboratory Tests
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
            {filteredTests.length}+ Tests Available
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Browse laboratory tests by category. Home sample collection
            and digital reports are available for most tests.
          </p>
        </div>

        {/* Category Chips */}
        <div className="mb-8 -mx-4 overflow-x-auto px-4 scrollbar-hide">
          <div className="flex w-max gap-3">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <TrackingLink
                  key={category}
                  href={buildCategoryUrl(category)}
                  tracking={`test-grid-category-${category}`}
                  scroll={false}
                  className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                    active
                      ? "border-blue-600 bg-blue-600 text-white shadow-md"
                      : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {category}
                </TrackingLink>
              );
            })}
          </div>
        </div>

        {/* Showing */}
        <div className="mb-6 text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-900">
            {visibleTests.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-900">
            {filteredTests.length}
          </span>{" "}
          tests
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleTests.map((test) => (
            <TestCard
              key={test.slug}
              test={test}
            />
          ))}
        </div>

        {/* Load More */}
        {hasMore && (
          <div className="mt-10 flex justify-center">
            <TrackingLink
              href={buildLoadMoreUrl()}
              tracking="test-grid-load-more"
              scroll={false}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 sm:w-auto sm:min-w-[220px]"
            >
              Load More Tests
            </TrackingLink>
          </div>
        )}
      </div>
    </section>
  );
}