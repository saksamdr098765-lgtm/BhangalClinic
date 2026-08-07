import SITE_CONFIG from "@/app/SITE_CONFIG";
import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiNavigation,
  FiArrowRight,
} from "react-icons/fi";

export default function MapSection({ location }) {
  const contactInfo = [
    {
      icon: FiMapPin,
      label: "Address",
      value:`${SITE_CONFIG.address.line1}
${SITE_CONFIG.address.street}
${SITE_CONFIG.address.state}`,
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: location.phone,
      href: `tel:${SITE_CONFIG.phone}`,
      isPhone: true,
    },
    {
      icon: FiMail,
      label: "Email",
      value: location.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: FiClock,
      label: "Working Hours",
      value: location.hours,
    },
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            <FiMapPin className="h-4 w-4" />
            Visit Our Laboratory
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            Find DK Bhangal Laboratory in {location.city}
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            Visit our diagnostic laboratory for accurate pathology services,
            preventive health checkups, ECG, and professional healthcare
            support. We are conveniently located for patients across{" "}
            {location.city} and nearby areas.
          </p>
        </div>

        {/* Content */}

        <div className="mt-10 grid gap-6 lg:mt-16 lg:grid-cols-[380px_1fr] lg:gap-8">
          {/* Contact Card */}

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:rounded-3xl sm:p-8">
            <h3 className="text-2xl font-black text-slate-900">
              Contact Information
            </h3>

            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="rounded-xl bg-sky-100 p-3 text-sky-600 sm:rounded-2xl sm:p-4">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm">
                        {item.label}
                      </p>

                      {item.isPhone ? (
                        <TrackedPhoneLink
                          location={`location-map-phone-${location.city}`}
                          className="mt-2 block text-sm font-semibold text-slate-700 transition hover:text-sky-600 sm:text-base"
                        >
                          {item.value}
                        </TrackedPhoneLink>
                      ) : item.href ? (
                        <TrackingLink
                          href={item.href}
                          tracking={`location-map-contact-${item.label}`}
                          className="mt-2 block text-sm font-semibold text-slate-700 transition hover:text-sky-600 sm:text-base"
                        >
                          {item.value}
                        </TrackingLink>
                      ) : (
                        <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:gap-4">
              <TrackingLink
                href={SITE_CONFIG.googleMaps.direction}
                tracking="location-map-get-directions"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 sm:rounded-2xl sm:px-6 sm:py-4"
              >
                Get Directions

                <FiNavigation />
              </TrackingLink>

              <TrackingLink
                href="/contact"
                tracking="location-map-contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-600 sm:rounded-2xl sm:px-6 sm:py-4"
              >
                Contact Us

                <FiArrowRight />
              </TrackingLink>
            </div>
          </div>

          {/* Map */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:rounded-3xl">
            <iframe
              src={SITE_CONFIG.googleMaps.iframe}
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 sm:h-[600px] lg:h-[650px]"
            />

            <div className="border-t border-slate-200 p-5 sm:p-8">
              <h3 className="text-2xl font-bold text-slate-900">
                Serving {location.city} & Nearby Areas
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                Patients from surrounding towns and villages trust DK Bhangal
                Laboratory for accurate blood tests, preventive health
                screenings, ECG services, pathology investigations, and home
                sample collection. We are committed to making quality
                diagnostic healthcare accessible, convenient, and affordable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}