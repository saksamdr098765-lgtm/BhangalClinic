import TrackingLink from "@/app/components/TrackingLink";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiShield,
} from "react-icons/fi";

const benefits = [
  "Accurate & Reliable Reports",
  "Experienced Laboratory Team",
  "Affordable Health Packages",
  "Fast Report Delivery",
];

const reasons = [
  {
    icon: FiShield,
    title: "Reliable Diagnostics",
    text: "Advanced laboratory testing with dependable, high-quality reports.",
  },
  {
    icon: FiClock,
    title: "Fast Report Delivery",
    text: "Receive your reports quickly with minimal waiting time.",
  },
  {
    icon: FiCheckCircle,
    title: "Preventive Healthcare",
    text: "Comprehensive health packages designed for early disease detection.",
  },
];

export default function HealthPackagesCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-5 text-white shadow-2xl sm:p-8 lg:rounded-[32px] lg:p-14">
        {/* Background */}
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-12">
          {/* Left */}
          <div>
            <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
              Trusted Diagnostic Services
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Ready to Take Charge of Your Health?
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-sky-100 sm:text-base sm:leading-8 lg:text-lg">
              Reading about your health is only the beginning. Regular laboratory
              testing helps detect health concerns early, monitor ongoing
              conditions, and supports better medical decisions through timely
              diagnosis.
            </p>

            {/* Benefits */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
                >
                  <FiCheckCircle className="h-5 w-5 shrink-0 text-green-300" />
                  <span className="text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackingLink
                href="/packages"
                tracking="blog-cta-packages"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-sky-700 transition hover:scale-[1.02] hover:bg-slate-100 sm:w-auto"
              >
                Explore Packages
                <FiArrowRight />
              </TrackingLink>

              <TrackingLink
                href="/contact"
                tracking="blog-cta-contact"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Contact Us
              </TrackingLink>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl sm:p-7 lg:p-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 sm:h-16 sm:w-16">
              <FiActivity className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>

            <h3 className="text-2xl font-bold sm:text-3xl">
              Why Choose DK Bhangal Lab?
            </h3>

            <div className="mt-8 space-y-6">
              {reasons.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-sky-100">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}