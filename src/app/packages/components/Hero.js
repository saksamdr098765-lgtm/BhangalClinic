import {
  FiSearch,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import {
  FaVial,
  FaHeartPulse,
  FaDna,
  FaHouseMedical,
} from "react-icons/fa6";
import TrackedLink from "@/app/components/TrackedLink";

export default function PackagesHero({ searchParams = {} }) {
  const search = searchParams?.search;
  const tag = searchParams?.tag;

  if (search || tag) return null;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Healthcare Background */}
      <div className="absolute -left-40 -top-40 h-[550px] w-[550px] rounded-full bg-blue-100/50 blur-[150px]" />
      <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-5 pt-24 pb-16 sm:px-6 lg:pt-32 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              <FaVial />
              Diagnostic Health Packages
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Complete Health
              <br />
              <span className="text-blue-600">Checkups</span>
              <br />
              Made Simple
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Choose preventive health packages for heart, diabetes,
              thyroid, vitamins and complete body wellness with trusted
              laboratory testing.
            </p>

            {/* Search Form */}
            <div className="mt-8">
              <form
                action="/packages"
                method="GET"
                className="flex items-center rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_25px_70px_rgba(15,23,42,.10)]"
              >
                <div className="flex flex-1 items-center gap-3 px-4">
                  <FiSearch className="text-xl text-blue-600" />
                  <input
                    name="search"
                    placeholder="Search health packages..."
                    className="w-full bg-transparent outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-12 items-center gap-2 rounded-2xl bg-blue-600 px-6 font-semibold text-white transition hover:bg-blue-700"
                >
                  Search
                  <FiArrowRight />
                </button>
              </form>
            </div>

            {/* Trust Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["15K+", "Patients"],
                ["100+", "Packages"],
                ["24-48h", "Reports"],
                ["Home", "Collection"],
              ].map(([val, label]) => (
                <div key={label}>
                  <p className="text-xl font-black text-slate-900">{val}</p>
                  <p className="text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT MEDICAL CARD */}
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-blue-100/40 blur-3xl" />

            <div className="relative rounded-[36px] border border-slate-200 bg-white p-6 shadow-[0_35px_90px_rgba(15,23,42,.12)] sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Popular Package</p>
                  <h3 className="mt-1 text-2xl font-black text-slate-900">
                    Full Body Checkup
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <FaHeartPulse className="text-2xl text-blue-600" />
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-blue-50 p-5">
                <div className="flex items-center gap-3">
                  <FaDna className="text-blue-600" />
                  <p className="font-semibold text-slate-800">
                    Complete Wellness Screening
                  </p>
                </div>

                <div className="mt-4 space-y-3">
                  {[
                    "CBC & Blood Profile",
                    "Diabetes Screening",
                    "Vitamin & Thyroid Tests",
                  ].map((test) => (
                    <div key={test} className="flex items-center gap-2 text-sm text-slate-600">
                      <FiCheck className="text-blue-600" />
                      {test}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Starting From</p>
                  <span className="block text-4xl font-black text-slate-900">
                    ₹800
                  </span>
                </div>

                <TrackedLink
                  href="/packages/bcl-med-health-pro-package"
                  tracking="packagesPage-bcl-med-health-pro-package"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
                >
                  <FiArrowRight />
                </TrackedLink>
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
                <FaHouseMedical className="text-xl text-blue-600" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Home Sample Collection Available
                  </p>
                  <p className="text-xs text-slate-500">
                    Safe & Convenient Testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}