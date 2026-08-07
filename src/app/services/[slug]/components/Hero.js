import Image from "next/image";
import TrackingLink from "@/app/components/TrackingLink";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiShield,
} from "react-icons/fi";
import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";

export default function ServiceHero({ service }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white py-6 sm:py-10 lg:py-16">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-sky-100/70 blur-3xl sm:h-72 sm:w-72 lg:h-96 lg:w-96" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl sm:h-72 sm:w-72" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left / Info */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
              Diagnostic Services
            </span>

            <h1 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7 lg:text-lg">
              {service.description}
            </p>

            {/* Highlights Grid (Compact 2-column on mobile) */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:gap-3">
              {[
                {
                  icon: FiCheckCircle,
                  color: "text-green-600",
                  text: "Accurate Results",
                },
                {
                  icon: FiShield,
                  color: "text-sky-600",
                  text: "Safe & Hygienic",
                },
                {
                  icon: FiClock,
                  color: "text-orange-500",
                  text: "Fast Reports",
                },
                {
                  icon: FiCheckCircle,
                  color: "text-sky-600",
                  text: "Expert Team",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 rounded-lg sm:rounded-xl border border-slate-100 bg-white p-2.5 shadow-xs"
                >
                  <item.icon className={`shrink-0 text-base sm:text-lg ${item.color}`} />
                  <span className="text-xs font-medium text-slate-700 sm:text-sm">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <TrackedWhatsappLink
                         location={`Service-Hero-${service?.title}`}
                           text={`I want to Book ${service.title} send me the avilibility`}
                                           className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 hover:shadow-md sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"

                       >
                        Book {service?.title}
                       </TrackedWhatsappLink>

              <TrackingLink
                href="/contact"
                tracking={`service-hero-contact-${service.slug}`}
                className="inline-flex w-full items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-600 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base"
              >
                Contact Us
              </TrackingLink>
            </div>

            {/* Stats Bar */}
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-200 pt-4 text-center sm:gap-4 sm:pt-6 sm:text-left">
              {[
                {
                  number: "15+",
                  label: "Years Exp.",
                },
                {
                  number: "100+",
                  label: "Tests Available",
                },
                {
                  number: "100%",
                  label: "Patient Care",
                },
              ].map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-xl font-black text-sky-600 sm:text-2xl lg:text-3xl">
                    {stat.number}
                  </h3>
                  <p className="text-[11px] text-slate-500 sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right / Cover Image & Floating Card */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lg sm:rounded-3xl">
                <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/5] overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src={service.coverImage}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 left-3 right-3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-md backdrop-blur sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-xs">
                <div className="flex items-center gap-2.5">
                  <div className="rounded-lg bg-sky-100 p-2 text-sky-600">
                    <FiShield className="text-lg" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Trusted Diagnostic Care
                    </p>
                    <p className="text-xs font-bold text-slate-900 sm:text-sm">
                      Accurate. Reliable. Fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}