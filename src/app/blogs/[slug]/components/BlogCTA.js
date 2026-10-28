import React from "react";
import TrackingLink from "@/app/components/TrackingLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import SITE_CONFIG from "@/app/SITE_CONFIG";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCalendarCheck,
} from "react-icons/fa";

export default function BlogCTA({ CTA }) {
  const isEcg =
    CTA?.serviceName?.toLowerCase().includes("ecg") ||
    CTA?.title?.toLowerCase().includes("ecg");

  const title =
    CTA?.title || "Need a Blood Test, ECG, or Health Checkup in Garhshankar?";

  const description =
    CTA?.description ||
    "Visit Bhangal Clinical Laboratories opposite Civil Hospital, Garhshankar or request convenient home blood sample collection with verified same-day digital reports.";

  const serviceName = CTA?.serviceName || "Test";
  const serviceLink = CTA?.serviceLink;
  const bookingLink =
    CTA?.bookingLink ||
    `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20test%20at%20Bhangal%20Clinical%20Laboratories%20Garhshankar.`;

  return (
    <section className="my-8 overflow-hidden rounded-3xl border border-blue-200/80 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 text-white shadow-xl sm:p-8">
      {/* Top Banner / Local Authority Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur">
          {isEcg
            ? "⚡ In-Lab 12-Lead ECG Testing • Opposite Civil Hospital"
            : "✓ Free Home Sample Collection in Garhshankar • Same-Day Reports"}
        </span>

        <span className="text-xs font-medium text-slate-300">
          📍 Trusted Diagnostic Lab in Garhshankar Since 2011
        </span>
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Heading, Description & Local Address */}
        <div className="lg:col-span-7">
          <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            {description}
          </p>

          {/* Local Garhshankar NAP & Hours */}
          <div className="mt-5 space-y-2.5 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300 backdrop-blur">
            <div className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="mt-0.5 shrink-0 text-red-400" />
              <span>
                <strong className="text-white">Location:</strong>{" "}
                {SITE_CONFIG.address.formatted}
              </span>
            </div>

            <div className="flex items-start gap-2.5">
              <FaClock className="mt-0.5 shrink-0 text-cyan-400" />
              <span>
                <strong className="text-white">Hours:</strong> Mon–Fri 7:30 AM–8:00 PM | Sat 8:30 AM–5:30 PM | Sun 9:00 AM–4:00 PM (Elderly: 9 AM–5 PM Daily)
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Direct High-Conversion Call & WhatsApp Actions */}
        <div className="flex flex-col gap-3 lg:col-span-5">
          {/* Call Lab */}
          <TrackedPhoneLink
            phone={SITE_CONFIG.phone}
            location={`blog-local-cta-call-${serviceName}`}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg transition hover:bg-blue-500 active:scale-98"
          >
            <FaPhoneAlt size={15} />
            <span>Call Lab: {SITE_CONFIG.phone}</span>
          </TrackedPhoneLink>

          {/* WhatsApp Booking */}
          <TrackedWhatsappLink
            location={`blog-local-cta-whatsapp-${serviceName}`}
            text={`Hi, I would like to book a ${serviceName} at Bhangal Clinical Laboratories Garhshankar.`}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-5 py-3.5 text-center text-sm font-bold text-white shadow-lg transition hover:bg-emerald-500 active:scale-98"
          >
            <FaWhatsapp size={18} className="text-white" />
            <span>Book on WhatsApp</span>
          </TrackedWhatsappLink>

          {/* View Details / Directions Row */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            {serviceLink ? (
              <TrackingLink
                href={serviceLink}
                tracking={`blog-local-cta-details-${serviceName}`}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/5 py-2.5 text-center font-medium text-slate-200 transition hover:bg-white/10"
              >
                <span>Test Details</span>
                <FaArrowRight size={10} />
              </TrackingLink>
            ) : (
              <TrackingLink
                href="/prices/blood-test-price-garhshankar"
                tracking="blog-local-cta-prices"
                className="flex items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/5 py-2.5 text-center font-medium text-slate-200 transition hover:bg-white/10"
              >
                <span>Price List</span>
                <FaArrowRight size={10} />
              </TrackingLink>
            )}

            <a
              href={SITE_CONFIG.googleMaps.direction}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg border border-white/20 bg-white/5 py-2.5 text-center font-medium text-slate-200 transition hover:bg-white/10"
            >
              <span>Get Directions</span>
              <FaMapMarkerAlt size={11} className="text-red-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
