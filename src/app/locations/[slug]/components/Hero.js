import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import {
  FiMapPin,
  FiPhone,
  FiArrowRight,
  FiHome,
  FiActivity,
  FiShield,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";



export default function Hero({ location }) {
const features = [
  "Advanced Diagnostic Technology",
  "Fast & Accurate Reports",
  ...(location.homeCollection ? ["Home Sample Collection"] : []),
];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 py-6 sm:py-10 lg:py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl lg:h-80 lg:w-80" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-white/10 blur-2xl lg:h-80 lg:w-80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_400px] lg:gap-10">
          {/* Left */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur sm:text-sm">
              <FiMapPin className="h-3.5 w-3.5" />
              Trusted Lab in {location.city}
            </span>

            {/* Heading */}
            <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {location.title}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-xs leading-5 text-sky-100 sm:text-base sm:leading-7">
              {location.shortDescription}
            </p>

            {/* Buttons */}
            <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3">
              <TrackingLink
                href="/packages"
                tracking={`location-hero-packages-${location.city}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-sky-700 transition hover:bg-slate-100 sm:px-6 sm:py-3 sm:text-sm"
              >
                View Packages
                <FiArrowRight />
              </TrackingLink>

              <TrackedWhatsappLink
                text={`Hi, I want to book a blood test in ${location.city}.`}
                location={`location-hero-whatsapp-${location.city}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-green-700 sm:px-6 sm:py-3 sm:text-sm"
              >
                <FaWhatsapp className="text-sm" />
                Book via WhatsApp
              </TrackedWhatsappLink>

              <TrackedPhoneLink
                phone={location.phone}
                tracking={`location-hero-phone-${location.city}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
              >
                <FiPhone className="text-xs" />
                Call Lab
              </TrackedPhoneLink>
            </div>

            {/* Stats (2x2 Grid) */}
            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur sm:p-4">
                <FiActivity className="mx-auto h-5 w-5 text-cyan-300" />
                <p className="mt-1 text-lg font-black text-white sm:text-xl">100+</p>
                <p className="text-[10px] text-sky-100 sm:text-xs">Lab Tests</p>
              </div>

              <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur sm:p-4">
                <FiShield className="mx-auto h-5 w-5 text-cyan-300" />
                <p className="mt-1 text-lg font-black text-white sm:text-xl">100%</p>
                <p className="text-[10px] text-sky-100 sm:text-xs">Accurate</p>
              </div>

              <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur sm:p-4">
                <FiMapPin className="mx-auto h-5 w-5 text-cyan-300" />
                <p className="mt-1 truncate text-base font-black text-white sm:text-lg">
                  {location.city}
                </p>
                <p className="text-[10px] text-sky-100 sm:text-xs">Service Area</p>
              </div>

             {location.homeCollection && <div className="rounded-xl bg-white/10 p-3 text-center backdrop-blur sm:p-4">
                <FiHome className="mx-auto h-5 w-5 text-cyan-300" />
                <p className="mt-1 text-base font-black text-white sm:text-lg">Home</p>
                <p className="text-[10px] text-sky-100 sm:text-xs">Collection</p>
              </div>}
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-2xl bg-white p-4 text-slate-900 shadow-xl sm:p-6">
            <span className="inline-flex rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
              Why Choose Us
            </span>

            <h2 className="mt-2 text-lg font-bold sm:text-xl">
              Trusted Care in {location.city}
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
              Experienced professionals, modern diagnostic tech, and patient-first reporting.
            </p>

            {/* Features */}
            <div className="mt-4 space-y-2.5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-slate-100 p-2.5 transition hover:bg-sky-50/50 sm:p-3"
                >
                  <div className="rounded-lg bg-sky-100 p-2 text-sky-600">
                    <FiShield className="h-4 w-4" />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-900 sm:text-sm">{item}</h3>
                    <p className="text-[11px] text-slate-500 leading-4">
                      Quality diagnostics with patient-first care.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <TrackingLink
              href="/contact"
              tracking={`location-hero-book-${location.city}`}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3 text-xs font-bold text-white transition hover:bg-sky-700 sm:text-sm"
            >
              Book Your Test Now
              <FiArrowRight />
            </TrackingLink>
          </div>
        </div>
      </div>
    </section>
  );
}