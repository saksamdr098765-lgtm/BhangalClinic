import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { tests } from "@/app/data/tests";
import { FaArrowRight, FaFlask, FaWhatsapp } from "react-icons/fa";

export default function RelatedTests({ relatedTests = [] }) {
  let recommended = [];

  if (Array.isArray(relatedTests)) {
    if (typeof relatedTests[0] === "string") {
      recommended = tests.filter((test) => relatedTests.includes(test.slug));
    } else {
      recommended = relatedTests;
    }
  } else if (relatedTests && Array.isArray(relatedTests.items)) {
    recommended = relatedTests.items;
  }

  if (!recommended.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
          Popular Blood Tests
        </span>

        <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Related Diagnostic Tests
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          These lab tests are closely related to this test. Book with home
          sample collection for fast, accurate reports.
        </p>
      </div>

      {/* Compact responsive grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recommended.map((test, index) => {
          const isPublished = test.status === "published";
          const testSlug = test.slug || test.url?.replace("/tests/", "");
          const testName = test.name || test.title;

          const content = (
            <>
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                  <FaFlask className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-900">
                    {testName}
                  </p>
                  {test.price && (
                    <p className="text-xs text-slate-500">₹{test.price}</p>
                  )}
                </div>
              </div>

              <span
                className={`flex shrink-0 items-center gap-1 text-xs font-semibold ${
                  isPublished ? "text-sky-600" : "text-emerald-600"
                }`}
              >
                {isPublished ? (
                  <>
                    View
                    <FaArrowRight className="h-3 w-3" />
                  </>
                ) : (
                  <>
                    Book Now
                    <FaWhatsapp className="h-3.5 w-3.5" />
                  </>
                )}
              </span>
            </>
          );

          const baseClasses =
            "flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3 transition-colors";

          return isPublished ? (
            <TrackingLink
              key={testSlug ?? index}
              href={test.url || `/tests/${testSlug}`}
              tracking={`test-related-${testSlug}`}
              className={`${baseClasses} hover:bg-sky-50`}
            >
              {content}
            </TrackingLink>
          ) : (
            <TrackedWhatsappLink
              key={testSlug ?? index}
              text={`I want to Book ${testName} test. Please send me details.`}
              location={`test-related-${testSlug}`}
              className={`${baseClasses} hover:bg-emerald-50`}
            >
              {content}
            </TrackedWhatsappLink>
          );
        })}
      </div>
    </section>
  );
}