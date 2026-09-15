import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import TrackingLink from "@/app/components/TrackingLink";
import { tests as allTests, getTestPrice } from "@/app/data/tests";
import { prices as allPrices } from "@/app/data/prices";
import { FiActivity } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function TestComparison({ testTitle, relatedTests, priceData, slug }) {
  // Extract custom testComparison configuration if provided in priceData
  const compConfig = priceData?.testComparison;
  const rawList = compConfig?.items || relatedTests || priceData?.relatedTests || [];

  const badgeText = compConfig?.badge || "Related Tests";
  const sectionTitle = compConfig?.title || `Compare ${testTitle} With Other Related Tests`;
  const sectionSubtitle = compConfig?.subtitle || "Not sure which diagnostic test to choose? Explore and compare rates below.";

  // Normalize items whether they are strings (slugs) or objects
  let list = rawList
    .map((item) => {
      if (typeof item === "string") {
        // 1. Look up in tests.js first
        const foundTest = allTests.find(
          (t) =>
            t.slug === item ||
            t.slug === item.replace(/-test$/, "") ||
            t.slug === item.replace(/-price-.*$/, "") ||
            t.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-") === item
        );

        if (foundTest) {
          const resolvedPrice = foundTest.price || getTestPrice(foundTest.slug);
          return {
            name: foundTest.name,
            slug: foundTest.slug,
            description: foundTest.description || "Comprehensive pathology screening.",
            price: resolvedPrice || 300,
          };
        }

        // 2. Look up in prices.js
        const foundPrice = allPrices?.find(
          (p) => p.slug === item || p.slug === `${item}-price-garhshankar`
        );

        if (foundPrice) {
          return {
            name: foundPrice.hero?.title || foundPrice.seo?.title || item,
            slug: foundPrice.slug,
            description: foundPrice.hero?.subtitle || "Pathology diagnostic investigation.",
            price: foundPrice.priceCard?.offerPrice || 300,
          };
        }

        // 3. Fallback formatted item
        const nameFormatted = item
          .replace(/-/g, " ")
          .replace(/\b\w/g, (l) => l.toUpperCase());

        const fallbackPrice = getTestPrice(item);

        return {
          name: nameFormatted,
          slug: item,
          description: "Pathology diagnostic investigation.",
          price: fallbackPrice || 300,
        };
      }

      return item;
    })
    .filter(Boolean);

  if (!list || list.length === 0) {
    // Smart fallback: pick 3 popular tests from tests.js
    list = allTests
      .filter((t) => t.slug !== slug && t.status === "published")
      .slice(0, 3)
      .map((t) => ({
        name: t.name,
        slug: t.slug,
        description: t.description || "Comprehensive pathology screening.",
        price: t.price || getTestPrice(t.slug) || 300,
      }));
  }

  if (!list || list.length === 0) return null;

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            <FiActivity className="text-sky-600" />
            {badgeText}
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {sectionTitle}
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            {sectionSubtitle}
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4">
          {list.map((t, index) => {
            const testSlug = t.slug || t.name?.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            const whatsappText = `Hi, I want to book/inquire about the "${t.name}" test at ₹${t.price}.`;

            return (
              <div
                key={t.name || index}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700">
                      {t.name}
                    </h3>
                    <span className="text-base font-black text-sky-600">
                      ₹{t.price}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {t.description || "Comprehensive pathology investigation for targeted health evaluation."}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                  <TrackedWhatsappLink
                    text={whatsappText}
                    location={`test-comparison-whatsapp-${testSlug}-${slug}`}
                    className="inline-flex items-center justify-center gap-1 rounded-lg bg-green-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-green-700"
                  >
                    <FaWhatsapp className="text-xs" />
                    Book (₹{t.price})
                  </TrackedWhatsappLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

