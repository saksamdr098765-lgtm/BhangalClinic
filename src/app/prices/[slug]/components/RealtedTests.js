import TrackingLink from "@/app/components/TrackingLink";
import { tests } from "@/app/data/tests";
import { FiArrowRight } from "react-icons/fi";

export default function RelatedTests({ priceData }) {
  const relatedTests = tests
    .filter((test) => priceData.relatedTests.includes(test.slug))
console.log(relatedTests)
  if (!relatedTests.length) return null;
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Related Tests
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            You May Also Need
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Explore other commonly recommended blood tests.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {relatedTests.map((test) => (

            <TrackingLink
              key={test.slug}
              href={`/prices/${test.slug}`}
              tracking={`prices-related-test-${test.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
                {test.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {test.name}
              </h3>

              <p className="mt-3 text-slate-600">
                {test.description}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="text-2xl font-bold text-sky-600">
                  ₹{test.price}
                </span>

                <span className="flex items-center gap-2 font-medium text-sky-600">
                  View

                  <FiArrowRight className="transition group-hover:translate-x-1" />

                </span>

              </div>

            </TrackingLink>

          ))}

        </div>

      </div>
    </section>
  );
}