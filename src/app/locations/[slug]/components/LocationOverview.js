import TrackingLink from "@/app/components/TrackingLink";
import {
  FiCheckCircle,
  FiMapPin,
  FiActivity,
  FiArrowRight,
} from "react-icons/fi";

export default function LocationOverview({ location }) {
  const servicesList = [
    "Blood Tests",
    "Preventive Health Packages",
    "ECG Services",
    "Home Sample Collection",
    "Quick Report Delivery",
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_400px] lg:gap-10">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
              <FiMapPin className="h-3.5 w-3.5" />
              Healthcare in {location.city}
            </span>

            <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Diagnostic Laboratory Serving {location.city}, {location.state}
            </h2>

            {location.overview.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7"
              >
                {paragraph}
              </p>
            ))}

            {/* Highlights (2-column compact grid) */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3">
              {location.overview.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2.5 shadow-2xs sm:p-3"
                >
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-sky-600" />
                  <span className="text-xs font-medium text-slate-800 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
              <FiActivity className="h-6 w-6" />
            </div>

            <h3 className="mt-3 text-lg font-bold text-slate-900 sm:text-xl">
              Comprehensive Care
            </h3>

            <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm">
              We provide reliable laboratory testing using modern equipment, experienced staff, and strict quality control standards.
            </p>

            {/* Services */}
            <div className="mt-4 space-y-2">
              {servicesList.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl bg-white p-2.5 shadow-2xs"
                >
                  <FiCheckCircle className="h-4 w-4 shrink-0 text-sky-600" />
                  <span className="text-xs font-semibold text-slate-800 sm:text-sm">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <TrackingLink
              href="/packages"
              tracking={`location-overview-packages-${location.city}`}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-sky-700 sm:text-sm"
            >
              Explore Diagnostics
              <FiArrowRight />
            </TrackingLink>
          </div>
        </div>
      </div>
    </section>
  );
}