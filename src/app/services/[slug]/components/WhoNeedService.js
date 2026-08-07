import { FiCheckCircle, FiUsers } from "react-icons/fi";

export default function WhoNeedsService({ service }) {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:gap-12 lg:px-8">
        {/* Left */}
        <div>
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Recommended For
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {service.idealFor.heading}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {service.idealFor.description}
          </p>

          {/* Compact 2-column list for fast scanning */}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
            {service.idealFor.people.map((person) => (
              <div
                key={person}
                className="group flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-2.5 sm:p-3.5 transition hover:border-sky-200 hover:bg-white hover:shadow-xs"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600">
                  <FiCheckCircle className="text-xs text-green-600 group-hover:text-white" />
                </div>

                <span className="text-xs font-medium text-slate-700 sm:text-sm">
                  {person}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-5 text-white shadow-lg sm:rounded-3xl sm:p-7">
          {/* Background Glow */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur sm:h-14 sm:w-14 sm:rounded-2xl">
              <FiUsers className="text-2xl" />
            </div>

            <h3 className="mt-4 text-xl font-bold sm:text-2xl">
              Personalized Diagnostic Care
            </h3>

            <p className="mt-2 text-xs leading-5 text-sky-100 sm:text-sm sm:leading-6">
              Every individual has different healthcare needs. Our diagnostic services provide accurate, convenient, and reliable testing for all age groups.
            </p>

            <div className="mt-4 rounded-xl border border-white/15 bg-white/10 p-3 backdrop-blur">
              <p className="flex items-start gap-2 text-xs font-medium leading-5 text-white">
                <FiCheckCircle className="mt-0.5 shrink-0 text-green-300 text-sm" />
                <span>
                  Suitable for individuals, families, senior citizens, children, and pregnant women.
                </span>
              </p>
            </div>

            {/* Mini Stats */}
            <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/15 pt-4 text-center">
              <div>
                <h4 className="text-xl font-black sm:text-2xl">All Ages</h4>
                <p className="text-[10px] text-sky-100">Patients</p>
              </div>

              <div>
                <h4 className="text-xl font-black sm:text-2xl">100+</h4>
                <p className="text-[10px] text-sky-100">Tests</p>
              </div>

              <div>
                <h4 className="text-xl font-black sm:text-2xl">100%</h4>
                <p className="text-[10px] text-sky-100">Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}