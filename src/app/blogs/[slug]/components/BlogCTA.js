import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import { FaArrowRight, FaCalendarCheck, FaWhatsapp } from "react-icons/fa";

export default function BlogCTA({ CTA }) {
  if (!CTA) return null;

  const {
    title,
    description,
    serviceName,
    serviceLink,
    bookingLink,
    features = [],
  } = CTA;

  return (
    <section className="my-6 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-4 text-white shadow-md sm:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Content */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur">
            ✓ Home Sample Collection Available
          </span>

          <h2 className="mt-2 text-xl font-black leading-snug text-white sm:text-2xl lg:text-3xl">
            {title}
          </h2>

          <p className="mt-2 text-xs leading-5 text-sky-100 sm:text-sm sm:leading-6">
            {description}
          </p>

          {features.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 rounded-lg bg-white/10 p-2 text-xs font-medium text-white backdrop-blur"
                >
                  <span className="text-green-300 text-xs">✓</span>
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col gap-2 shrink-0 lg:w-64">
          <TrackingLink
            href={bookingLink}
            tracking={`blog-cta-book-${serviceName}`}
            className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-center text-xs font-bold text-sky-700 transition hover:bg-slate-100 sm:text-sm"
          >
            <FaCalendarCheck />
            Book {serviceName}
          </TrackingLink>

          {serviceLink && (
            <TrackingLink
              href={serviceLink}
              tracking={`blog-cta-view-${serviceName}`}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-white/30 px-4 py-2 text-center text-xs font-semibold text-white transition hover:bg-white/10"
            >
              View Test Details
              <FaArrowRight className="text-xs" />
            </TrackingLink>
          )}

          <TrackedWhatsappLink
            location={`blog-cta-chat-${serviceName}`}
            className="inline-flex items-center justify-center gap-1.5 text-center text-xs text-sky-100 hover:text-white"
          >
            <FaWhatsapp className="text-green-400" />
            <span>Chat with our team</span>
          </TrackedWhatsappLink>
        </div>
      </div>
    </section>
  );
}