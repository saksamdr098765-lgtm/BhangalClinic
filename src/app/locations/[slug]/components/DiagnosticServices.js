import { services } from "@/app/data/services";
import TrackingLink from "@/app/components/TrackingLink";
import {
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
} from "react-icons/fi";

export default function DiagnosticServices({ location }) {
  const availableServices = services.filter((service) =>
    location.services.includes(service.slug)
  );

  const features = [
    "Modern Lab Equipment",
    "Experienced Professionals",
    "Quality-Controlled Testing",
    "Fast & Accurate Reports",
    "Affordable Healthcare",
    "Patient-Focused Care",
  ];

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            Diagnostic Services
          </span>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Laboratory Services Available in {location.city}
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Comprehensive pathology & diagnostic services for preventive care, disease diagnosis, and routine wellness.
          </p>
        </div>

        {/* Services Grid (Compact 2-column on mobile) */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
          {availableServices.map((service) => (
            <TrackingLink
              key={service.slug}
              href={`/services/${service.slug}`}
              tracking={`location-diagnostic-service-${service.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
            >
              <div>
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <FiActivity className="text-lg sm:text-xl" />
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900 group-hover:text-sky-600 sm:text-base">
                  {service.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-sky-600 sm:text-sm">
                Learn More
                <FiArrowRight className="text-xs transition-transform group-hover:translate-x-0.5" />
              </div>
            </TrackingLink>
          ))}
        </div>

        {/* Bottom Banner with Tracked CTA */}
        <div className="mt-8 rounded-2xl bg-white p-4 shadow-xs ring-1 ring-slate-200 sm:p-7 lg:flex lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
              Why Choose Our Diagnostic Services?
            </h3>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiCheckCircle className="text-xs text-sky-600 shrink-0" />
                  <span className="text-xs text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 shrink-0 lg:mt-0">
            <TrackingLink
              href="/contact"
              tracking={`location-diagnostic-book-${location.city}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-sky-700 sm:w-auto sm:text-sm"
            >
              Book Test in {location.city}
              <FiArrowRight />
            </TrackingLink>
          </div>
        </div>
      </div>
    </section>
  );
}