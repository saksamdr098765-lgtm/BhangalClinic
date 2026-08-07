import TrackingLink from "@/app/components/TrackingLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import {
  FiArrowRight,
  FiPhone,
  FiActivity,
  FiCheckCircle,
  FiShield,
  FiClock,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const benefits = [
  "100+ Laboratory Tests",
  "Health Packages",
  "Home Sample Collection",
  "Fast & Accurate Reports",
];

const whyUsItems = [
  {
    icon: FiShield,
    title: "Reliable Diagnostics",
    text: "Modern lab equipment with strict quality control.",
  },
  {
    icon: FiClock,
    title: "Fast Report Delivery",
    text: "Quick turnaround time with secure digital reporting.",
  },
  {
    icon: FiCheckCircle,
    title: "Affordable Healthcare",
    text: "Quality pathology services at transparent pricing.",
  },
];

export default function CTA({ location }) {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-5 text-white shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
          {/* Background Glow */}
          <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative grid gap-6 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-10">
            {/* Left */}
            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                Trusted Diagnostic Laboratory
              </span>

              <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                Book Your Diagnostic Test in{" "}
                <span className="text-cyan-200">{location.city}</span>
              </h2>

              <p className="mt-3 text-xs leading-5 text-sky-100 sm:text-base sm:leading-7">
                Whether you need routine blood tests, health packages, ECG, or home sample collection, we deliver reliable diagnostics with patient-first care.
              </p>

              {/* Benefits (2-column compact grid) */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl bg-white/10 p-2.5 backdrop-blur"
                  >
                    <FiCheckCircle className="text-green-300 text-xs shrink-0" />
                    <span className="text-xs font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-5 flex flex-wrap gap-2.5">
                <TrackingLink
                  href="/packages"
                  tracking={`location-cta-packages-${location.city}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-sky-700 transition hover:bg-slate-100 sm:text-sm"
                >
                  View Packages
                  <FiArrowRight />
                </TrackingLink>

                <TrackedWhatsappLink
                  text={`Hi, I want to book a diagnostic test in ${location.city}.`}
                  location={`location-cta-whatsapp-${location.city}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-green-700 sm:text-sm"
                >
                  <FaWhatsapp className="text-base" />
                  WhatsApp
                </TrackedWhatsappLink>

                <TrackedPhoneLink
                  phone={location.phone}
                  tracking={`location-cta-call-${location.city}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-xs font-bold text-white backdrop-blur transition hover:bg-white/10 sm:text-sm"
                >
                  <FiPhone className="text-xs" />
                  Call Now
                </TrackedPhoneLink>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-xl bg-white/10 p-4 backdrop-blur-xl sm:rounded-2xl sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <FiActivity className="text-2xl" />
              </div>

              <h3 className="mt-3 text-lg font-bold">
                Why Patients Choose Us
              </h3>

              <div className="mt-4 space-y-3">
                {whyUsItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <Icon className="text-sm" />
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-white sm:text-sm">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-xs text-sky-100 leading-4">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="mt-4 grid grid-cols-2 gap-2 border-t border-white/15 pt-3 text-center">
                <div>
                  <span className="block text-xl font-black sm:text-2xl">
                    100+
                  </span>
                  <p className="text-[10px] text-sky-100">Lab Tests</p>
                </div>

                <div>
                  <span className="block text-xl font-black sm:text-2xl">
                    100%
                  </span>
                  <p className="text-[10px] text-sky-100">Patient Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}