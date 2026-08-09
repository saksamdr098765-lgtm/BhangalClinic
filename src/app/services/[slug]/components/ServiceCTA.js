import TrackingLink from "@/app/components/TrackingLink";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiPhone,
  FiShield,
} from "react-icons/fi";
 const benefits = [
    "Accurate Reports",
    "Affordable Pricing",
    "Expert Lab Team",
    "Fast Delivery",
  ];
export default function ServiceCTA() {
 

  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 shadow-xl sm:rounded-3xl">
          {/* Background Glow */}
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

          <div className="relative grid gap-6 p-5 sm:p-8 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-10 lg:p-10">
            {/* Left */}
            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
                Book Your Diagnostic Test Today
              </span>

              <h2 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
                Take the Next Step Towards Better Health
              </h2>

              <p className="mt-3 text-xs leading-5 text-sky-100 sm:text-base sm:leading-7">
                Early diagnosis plays an important role in maintaining good health. Our team is committed to delivering accurate reports with exceptional patient care.
              </p>

              {/* Benefits (2-column grid on mobile) */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur"
                  >
                    <FiCheckCircle className="text-xs text-green-300 shrink-0" />
                    <span className="text-xs font-medium text-white">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                <TrackingLink
                  href="/packages"
                  tracking="service-cta-explore-packages"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-semibold text-sky-700 transition hover:bg-slate-100 sm:w-auto sm:text-sm"
                >
                  Explore Health Packages
                  <FiArrowRight />
                </TrackingLink>

                <TrackingLink
                  href="/contact"
                  tracking="service-cta-contact-us"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-5 py-3 text-xs font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto sm:text-sm"
                >
                  Contact Us
                  <FiPhone />
                </TrackingLink>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-xl bg-white p-4 text-slate-900 shadow-md sm:rounded-2xl sm:p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                <FiActivity size={26} />
              </div>

              <h3 className="mt-3 text-lg font-bold sm:text-xl">
                Why Patients Trust Us
              </h3>

              <div className="mt-4 space-y-3">
                {[
                  {
                    icon: FiShield,
                    title: "Reliable Diagnostics",
                    text: "Advanced lab technology with strict quality control.",
                  },
                  {
                    icon: FiClock,
                    title: "Timely Reports",
                    text: "Quick turnaround times for healthcare decisions.",
                  },
                  {
                    icon: FiCheckCircle,
                    title: "Patient-Focused Care",
                    text: "Friendly staff, transparent pricing, and support.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                      <item.icon className="text-sm" />
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-600 leading-4">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Stats */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-200 pt-3 text-center">
                <div>
                  <p className="text-lg font-black text-sky-600 sm:text-xl">100+</p>
                  <p className="text-[10px] text-slate-500">Tests</p>
                </div>

                <div>
                  <p className="text-lg font-black text-sky-600 sm:text-xl">15+</p>
                  <p className="text-[10px] text-slate-500">Years</p>
                </div>

                <div>
                  <p className="text-lg font-black text-sky-600 sm:text-xl">100%</p>
                  <p className="text-[10px] text-slate-500">Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}