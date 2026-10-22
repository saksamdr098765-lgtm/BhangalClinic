import SITE_CONFIG from "@/app/SITE_CONFIG";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import { FiMapPin, FiPhone, FiClock, FiExternalLink, FiStar } from "react-icons/fi";
import { TbDeviceLandlinePhone } from "react-icons/tb";

export default function ContactMap() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20 border-t border-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Left Info */}
          <div>
            <span className="inline-flex rounded-full bg-blue-100 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Laboratory Location
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Visit Our Diagnostic Centre in Garhshankar
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              Conveniently located on Sri Anandpur Sahib Road directly opposite Civil Hospital, Garhshankar. Ample parking and clean, comfortable sample collection facilities.
            </p>

            <div className="mt-8 space-y-5 rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <div className="flex items-start gap-3.5">
                <FiMapPin className="mt-1 text-red-500 shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Address</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                    {SITE_CONFIG.address.line1}, {SITE_CONFIG.address.street},<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.district}, {SITE_CONFIG.address.state} - {SITE_CONFIG.address.postalCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <FiClock className="mt-1 text-blue-600 shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Working Hours</h4>
                  <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                    Mon – Fri: 7:30 AM – 8:00 PM<br />
                    Saturday: 8:30 AM – 5:30 PM<br />
                    Sunday: 9:00 AM – 4:00 PM<br />
                    <span className="font-semibold text-blue-700">Elderly Hours: 9:00 AM – 5:00 PM (Daily)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <FiPhone className="mt-1 text-emerald-600 shrink-0" size={18} />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Call Laboratory</h4>
                  <div className="mt-0.5 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
                    <TrackedPhoneLink
                      location="contact-map-phone"
                      className="font-semibold text-slate-900 hover:text-blue-600"
                    >
                      {SITE_CONFIG.phone}
                    </TrackedPhoneLink>
                    <span className="text-slate-300">|</span>
                    <TrackedPhoneLink
                      phone={SITE_CONFIG.landLine}
                      location="contact-map-landline"
                      className="font-semibold text-slate-900 hover:text-blue-600"
                    >
                      {SITE_CONFIG.landLine}
                    </TrackedPhoneLink>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE_CONFIG.googleMaps.direction}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-bold text-white transition hover:bg-blue-700 shadow-sm"
              >
                <span>Get Directions on Google Maps</span>
                <FiExternalLink />
              </a>
              <a
                href={SITE_CONFIG.googleMaps.review}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <FiStar className="text-amber-500" />
                <span>Rate Us on Google</span>
                <FiExternalLink />
              </a>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            <iframe
              src={SITE_CONFIG.googleMaps.iframe}
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              title="Bhangal Clinical Laboratories & ECG Garhshankar Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
