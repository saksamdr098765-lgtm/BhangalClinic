import { FiCheck } from "react-icons/fi";

export default function IncludedTests({ pkg }) {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
            Tests Included
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What's Included in
            <br />
            <span className="text-blue-700">{pkg.name}</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            This package includes comprehensive diagnostic
            investigations covering major organs and body systems
            to evaluate your overall health.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {pkg.testCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:p-7"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                    {category.title}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {category.tests.length} Tests
                  </p>
                </div>
              </div>

              {/* Tests */}
              <div className="mt-6 space-y-3">
                {category.tests.map((test) => (
                  <div key={test} className="flex items-start gap-3">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                      <FiCheck className="text-[10px] text-blue-600" />
                    </div>

                    <span className="text-sm leading-6 text-slate-700 sm:text-base">
                      {test}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-blue-100 bg-blue-50/60 p-5 text-center sm:mt-16 sm:p-8">
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Looking for a specific test?
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:mt-4 sm:text-base sm:leading-8">
            The investigations shown above represent the primary tests
            included in this package. Additional biomarkers and
            specialized parameters may also be included depending on
            the package type.
          </p>
        </div>
      </div>
    </section>
  );
}