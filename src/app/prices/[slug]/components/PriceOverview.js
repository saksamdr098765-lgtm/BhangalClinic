import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import {
  FiCheckCircle,
  FiClock,
  FiDroplet,
  FiHome,
  FiInfo,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function PriceOverview({ priceCard, testTitle, slug }) {
  if (!priceCard) return null;

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            <FiInfo className="text-sky-600" />
            Test Overview & Pricing Breakdown
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {priceCard.title || `${testTitle} Overview`}
          </h2>

          <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Transparent pricing with no hidden charges. Book online or request doorstep sample collection.
          </p>
        </div>

        {/* Overview Box */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-2xs sm:p-6 lg:p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {/* Left: Price & CTA Box */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-2xs sm:p-6 flex flex-col justify-between">
              <div>
                {priceCard.offerText && (
                  <span className="inline-block rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-bold text-green-800">
                    {priceCard.offerText}
                  </span>
                )}

                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-4xl font-black text-sky-600 sm:text-5xl">
                    ₹{priceCard.offerPrice}
                  </span>
                  {priceCard.actualPrice && (
                    <span className="text-lg text-slate-400 line-through">
                      ₹{priceCard.actualPrice}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  All-inclusive transparent rate with zero hidden costs.
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <span className="block text-[10px] text-slate-400 font-medium">REPORT TIME</span>
                    <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                      <FiClock className="text-sky-600" />
                      {priceCard.reportTime || "24 Hours"}
                    </span>
                  </div>

                  <div className="rounded-lg bg-slate-50 p-2.5 border border-slate-200">
                    <span className="block text-[10px] text-slate-400 font-medium">FASTING</span>
                    <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                      <FiCheckCircle className="text-sky-600" />
                      {priceCard.fasting || "Not Required"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <TrackedWhatsappLink
                  text={`Hi, I want to book the "${testTitle}" test at ₹${priceCard.offerPrice}.`}
                  location={`price-overview-book-whatsapp-${slug}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-green-700 sm:text-sm"
                >
                  <FaWhatsapp className="text-base" />
                  Book Now via WhatsApp
                </TrackedWhatsappLink>
              </div>
            </div>

            {/* Right: What's Included */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  {priceCard.includes?.title || "What's Included in This Test"}
                </h3>

                <ul className="mt-3 space-y-2 text-xs text-slate-700 sm:text-sm">
                  {(priceCard.includes?.items || [
                    "Sterile Single-Use Collection Equipment",
                    "Doorstep Sample Collection Available",
                    "Automated Laboratory Analysis",
                    "Same-Day Digital Report Delivery",
                    "Doctor Consultation Support",
                  ]).map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-600 shrink-0 text-sm" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-xl bg-sky-50 border border-sky-200 p-3.5 text-xs text-sky-900">
                <p className="font-bold">✨ Fast & Reliable Results</p>
                <p className="mt-1 text-sky-700 leading-4">
                  Samples are processed using modern automated equipment under strict NABL diagnostic protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
