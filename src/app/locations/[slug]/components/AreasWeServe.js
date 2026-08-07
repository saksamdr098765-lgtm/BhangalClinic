import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function AreasWeServe({ location }) {
  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            <FiMapPin className="h-3.5 w-3.5" />
            Areas We Serve
          </span>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Diagnostic Services Across {location.city} & Nearby Areas
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Click any area below to instantly book home sample collection or inquire about service availability via WhatsApp.
          </p>
        </div>

        {/* Areas Grid - Interactive & Tracked via WhatsApp */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-3">
          {location.areas.map((area) => (
            <TrackedWhatsappLink
              key={area}
              text={`Hi, I want to book a blood test in ${area}, ${location.city}. Please share availability and details.`}
              location={`location-area-${area.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex items-center justify-between gap-1.5 rounded-xl border border-slate-200 bg-white p-3 shadow-2xs transition hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-50/50 hover:shadow-md"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <FiMapPin className="text-xs" />
                </span>

                <span className="truncate text-xs font-semibold text-slate-800 group-hover:text-green-800 sm:text-sm">
                  {area}
                </span>
              </div>

              <FaWhatsapp className="text-xs shrink-0 text-slate-300 group-hover:text-green-600 transition-colors" />
            </TrackedWhatsappLink>
          ))}
        </div>

        {/* Bottom Cards */}
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs sm:p-6">
            <h3 className="text-base font-bold text-slate-900 sm:text-lg">
              Healthcare Close to You in {location.city}
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
              Whether you live in central {location.city} or nearby towns and villages, our laboratory provides dependable diagnostic services with timely reporting and compassionate patient care.
            </p>

            <div className="mt-4">
              <TrackedWhatsappLink
                text={`Hi, I live in ${location.city} and want to inquire about blood testing services.`}
                location={`location-areas-inquire-${location.city}`}
                className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-sky-700 sm:text-sm"
              >
                Inquire for Your Area
                <FiArrowRight />
              </TrackedWhatsappLink>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 p-4 text-white shadow-lg sm:p-6">
            <h3 className="text-base font-bold sm:text-lg">
              Home Sample Collection Available
            </h3>

            <p className="mt-2 text-xs leading-5 text-emerald-100 sm:text-sm">
              Trained phlebotomists safely collect blood samples from your doorstep across {location.city} and surrounding areas.
            </p>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex gap-3 text-center">
                <div>
                  <p className="text-lg font-black">{location.areas.length}+</p>
                  <p className="text-[10px] text-emerald-100">Areas Covered</p>
                </div>
                <div>
                  <p className="text-lg font-black">100+</p>
                  <p className="text-[10px] text-emerald-100">Lab Tests</p>
                </div>
              </div>

              <TrackedWhatsappLink
                text={`Hi, I want to book Home Sample Collection in ${location.city}.`}
                location={`location-areas-home-collection-whatsapp-${location.city}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-green-800 transition hover:bg-emerald-50 sm:text-sm"
              >
                <FaWhatsapp className="text-green-600" />
                Book Home Collection
              </TrackedWhatsappLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}