import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import TrackingLink from "@/app/components/TrackingLink";
import { packagesData } from "@/app/data/packages";
import { FiCheckCircle, FiXCircle, FiPercent, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function PackageComparison({ testTitle, offerPrice = 399, slug }) {
  // Select featured health package from packagesData
  const featuredPackage = packagesData[0] || {
    name: "Bhangal Basic Profile Plus",
    price: 1499,
    originalPrice: 1900,
    slug: "bhangal-basic-profile-plus",
  };

  const packagePrice = featuredPackage.price || 1499;

  return (
    <section className="bg-slate-900 py-8 text-white sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 border border-cyan-400/30">
            <FiPercent />
            Value Comparison
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
            Single Test vs. Full Body Package
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-base sm:leading-7">
            Should you book just the {testTitle} or upgrade to a complete health checkup package?
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {/* Option A: Single Test */}
          <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-4 shadow-2xs sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    OPTION A
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    Just {testTitle}
                  </h3>
                </div>
                <span className="text-xl font-black text-sky-400">
                  ₹{offerPrice}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-slate-300 sm:text-sm">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-sky-400 shrink-0 text-xs" />
                  Targeted screening for {testTitle}
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-sky-400 shrink-0 text-xs" />
                  Doorstep Home Sample Collection
                </li>
                <li className="flex items-center gap-2">
                  <FiXCircle className="text-red-400 shrink-0 text-xs" />
                  Does not cover other organs (Liver, Kidney, Thyroid)
                </li>
              </ul>
            </div>

            <div className="mt-5 border-t border-slate-700 pt-3">
              <TrackedWhatsappLink
                text={`Hi, I want to book just the "${testTitle}" at ₹${offerPrice}.`}
                location={`package-comp-book-single-whatsapp-${slug}`}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-700"
              >
                <FaWhatsapp className="text-green-400 text-sm" />
                Book Single Test (₹{offerPrice})
              </TrackedWhatsappLink>
            </div>
          </div>

          {/* Option B: Complete Package (Recommended) */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-500 bg-gradient-to-br from-slate-800 via-slate-850 to-emerald-950 p-4 shadow-xl sm:p-6 flex flex-col justify-between">
            <div className="absolute right-0 top-0 rounded-bl-xl bg-emerald-500 px-3 py-1 text-[10px] font-black uppercase text-slate-950">
              BEST VALUE OVERALL
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    RECOMMENDED OPTION B
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {featuredPackage.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-400">
                    ₹{packagePrice}
                  </span>
                  {featuredPackage.originalPrice && (
                    <span className="block text-[10px] text-slate-400 line-through">
                      ₹{featuredPackage.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-3 text-xs leading-5 text-emerald-100 sm:text-sm">
                Includes {testTitle} + 50+ total diagnostic parameters covering Diabetes, Thyroid, Liver, Kidney, Lipid & Blood Count!
              </p>

              <ul className="mt-3 space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-400 shrink-0 text-xs" />
                  Full Body Vital & Organ Screening
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-400 shrink-0 text-xs" />
                  Free Doorstep Home Sample Collection
                </li>
                <li className="flex items-center gap-2">
                  <FiCheckCircle className="text-emerald-400 shrink-0 text-xs" />
                  Save over 50% compared to booking individually
                </li>
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-emerald-500/30">
              <TrackingLink
                href={`/packages/${featuredPackage.slug}`}
                tracking={`package-comp-view-${featuredPackage.slug}-${slug}`}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
              >
                View Package Details
                <FiArrowRight />
              </TrackingLink>

              <TrackedWhatsappLink
                text={`Hi, I want to upgrade & book the "${featuredPackage.name}" (₹${packagePrice}).`}
                location={`package-comp-book-pkg-whatsapp-${slug}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-green-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-green-700"
              >
                <FaWhatsapp className="text-sm" />
                Book Package
              </TrackedWhatsappLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
