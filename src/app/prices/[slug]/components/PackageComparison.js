import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import TrackingLink from "@/app/components/TrackingLink";
import { packagesData } from "@/app/data/packages";
import { FiCheckCircle, FiXCircle, FiPercent, FiArrowRight, FiTable } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function PackageComparison({ testTitle, offerPrice = 399, slug, priceData }) {
  const comparisonData = priceData?.packageComparison;

  // 1. Render Table View if headers & rows are provided
  if (comparisonData?.type === "table" || (comparisonData?.headers && comparisonData?.rows)) {
    const title = comparisonData.title || "Compare Our Full Body Checkup Packages";
    const subtitle =
      comparisonData.subtitle ||
      "Compare health checkup packages to choose the right panel for your health needs.";
    const headers = comparisonData.headers;
    const rows = comparisonData.rows;

    return (
      <section className="bg-slate-900 py-8 text-white sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300 border border-cyan-400/30">
              <FiTable />
              Package Comparison
            </span>

            <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>

            <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-base sm:leading-7">
              {subtitle}
            </p>
          </div>

          {/* Table Container */}
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-800/80 shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-slate-700 bg-slate-800 text-cyan-400 uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  {headers.map((header, idx) => (
                    <th key={idx} className="px-4 py-3.5 sm:px-6">
                      {header}
                    </th>
                  ))}
                  <th className="px-4 py-3.5 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60">
                {rows.map((row, rIdx) => {
                  const packageName = row[0];
                  const price = row[1];
                  const testsCount = row[2];
                  const fasting = row[3];
                  const whatsappMsg = `Hi, I want to inquire/book the package "${packageName}" (${price}).`;

                  return (
                    <tr
                      key={rIdx}
                      className="transition hover:bg-slate-700/40"
                    >
                      <td className="px-4 py-3.5 sm:px-6 font-bold text-white">
                        {packageName}
                      </td>
                      <td className="px-4 py-3.5 sm:px-6 font-black text-emerald-400 text-base">
                        {price}
                      </td>
                      <td className="px-4 py-3.5 sm:px-6 text-slate-300">
                        <span className="inline-flex items-center rounded-md bg-sky-400/10 px-2 py-0.5 text-xs font-semibold text-sky-300 border border-sky-400/20">
                          {testsCount} Tests
                        </span>
                      </td>
                      <td className="px-4 py-3.5 sm:px-6 text-slate-300">
                        {fasting}
                      </td>
                      <td className="px-4 py-3.5 sm:px-6 text-right">
                        <TrackedWhatsappLink
                          text={whatsappMsg}
                          location={`package-table-row-${rIdx}-${slug}`}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-500"
                        >
                          <FaWhatsapp />
                          Book
                        </TrackedWhatsappLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }

  // 2. Card View (Single Test vs Recommended Package)
  const featuredSlug = comparisonData?.featuredPackageSlug || "bhangal-basic-profile-plus";
  const featuredPackage = packagesData.find((p) => p.slug === featuredSlug) || packagesData[0] || {
    name: "Bhangal Basic Profile Plus",
    price: 1499,
    originalPrice: 1900,
    slug: "bhangal-basic-profile-plus",
    testsCount: 55,
  };

  const currentOfferPrice = offerPrice || priceData?.priceCard?.offerPrice || 300;
  const title = comparisonData?.title || "Single Test vs. Full Body Package";
  const subtitle =
    comparisonData?.subtitle ||
    `Should you book just the ${testTitle} or upgrade to a complete health checkup package?`;

  const optionA = {
    title: comparisonData?.optionA?.title || `Just ${testTitle}`,
    price: currentOfferPrice,
    highlights: comparisonData?.optionA?.highlights || [
      `Targeted screening for ${testTitle}`,
      ...(priceData?.homeCollection || priceData?.priceCard?.homeCollection
        ? ["Doorstep Home Sample Collection"]
        : []),
      "Does not cover other organ systems (Liver, Kidney, Thyroid)",
    ],
  };

  const optionB = {
    badge: comparisonData?.optionB?.badge || "BEST VALUE OVERALL",
    subtitle: comparisonData?.optionB?.subtitle || "RECOMMENDED OPTION B",
    name: comparisonData?.optionB?.title || featuredPackage.name,
    price: featuredPackage.price || 1499,
    originalPrice: featuredPackage.originalPrice,
    slug: featuredPackage.slug,
    highlights: comparisonData?.optionB?.highlights || [
      `Includes ${testTitle} + ${featuredPackage.testsCount || 50}+ total diagnostic parameters covering Diabetes, Thyroid, Liver, Kidney, Lipid & Blood Count!`,
      "Full Body Vital & Organ Screening",
      ...(priceData?.homeCollection || priceData?.priceCard?.homeCollection
        ? ["Free Doorstep Home Sample Collection"]
        : []),
      "Save over 50% compared to booking individually",
    ],
  };

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
            {title}
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-base sm:leading-7">
            {subtitle}
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
                    {optionA.title}
                  </h3>
                </div>
                <span className="text-xl font-black text-sky-400">
                  ₹{optionA.price}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-slate-300 sm:text-sm">
                {optionA.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {highlight.toLowerCase().includes("does not") ? (
                      <FiXCircle className="text-red-400 shrink-0 text-xs" />
                    ) : (
                      <FiCheckCircle className="text-sky-400 shrink-0 text-xs" />
                    )}
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border-t border-slate-700 pt-3">
              <TrackedWhatsappLink
                text={`Hi, I want to book just the "${testTitle}" at ₹${optionA.price}.`}
                location={`package-comp-book-single-whatsapp-${slug}`}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-700"
              >
                <FaWhatsapp className="text-green-400 text-sm" />
                Book Single Test (₹{optionA.price})
              </TrackedWhatsappLink>
            </div>
          </div>

          {/* Option B: Complete Package (Recommended) */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-500 bg-gradient-to-br from-slate-800 via-slate-850 to-emerald-950 p-4 shadow-xl sm:p-6 flex flex-col justify-between">
            <div className="absolute right-0 top-0 rounded-bl-xl bg-emerald-500 px-3 py-1 text-[10px] font-black uppercase text-slate-950">
              {optionB.badge}
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                    {optionB.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {optionB.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-emerald-400">
                    ₹{optionB.price}
                  </span>
                  {optionB.originalPrice && (
                    <span className="block text-[10px] text-slate-400 line-through">
                      ₹{optionB.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-white sm:text-sm">
                {optionB.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FiCheckCircle className="text-emerald-400 shrink-0 text-xs" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-emerald-500/30">
              <TrackingLink
                href={`/packages/${optionB.slug}`}
                tracking={`package-comp-view-${optionB.slug}-${slug}`}
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-emerald-400"
              >
                View Package Details
                <FiArrowRight />
              </TrackingLink>

              <TrackedWhatsappLink
                text={`Hi, I want to upgrade & book the "${optionB.name}" (₹${optionB.price}).`}
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

