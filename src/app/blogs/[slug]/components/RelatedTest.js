import TestCard from "@/app/components/TestCard";
import { tests } from "@/app/data/tests";



export default function RelatedTests({
  relatedTests = [],
}) {
  const recommended = tests.filter((test) =>
    relatedTests.includes(test.slug)
  );

  if (!recommended.length) return null;

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      {/* Header */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
          Popular Blood Tests
        </span>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Related Diagnostic Tests
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
          These laboratory tests are closely related to this topic and can
          help diagnose, monitor, or assess various health conditions.
          Explore our most recommended blood tests and book with home sample
          collection for fast and accurate reports.
        </p>
      </div>

      {/* Tests */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {recommended.map((test,index) => (
          <TestCard
            key={index}
            test={test}
          />
        ))}
      </div>
    </section>
  );
}