import Link from "next/link";
import {
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiPhone,
  FiShield,
} from "react-icons/fi";

export default function ServiceCTA() {
  const benefits = [
    "Accurate & Reliable Reports",
    "Affordable Pricing",
    "Experienced Laboratory Team",
    "Fast Report Delivery",
  ];

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 shadow-2xl lg:rounded-[40px]">
          {/* Background */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-14 lg:p-14">
            {/* Left */}

            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                Book Your Diagnostic Test Today
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                Take the Next Step Towards Better Health
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
                Early diagnosis plays an important role in maintaining good
                health. Whether you need routine blood tests, preventive health
                screening, or specialized laboratory investigations, our team is
                committed to delivering accurate reports with exceptional
                patient care.
              </p>

              {/* Benefits */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
                  >
                    <FiCheckCircle className="text-lg text-green-300" />

                    <span className="text-sm font-medium text-white sm:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/packages"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-semibold text-sky-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-xl sm:w-auto"
                >
                  Explore Health Packages
                  <FiArrowRight />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
                >
                  Contact Us
                  <FiPhone />
                </Link>
              </div>
            </div>

            {/* Right Card */}

            <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 sm:h-20 sm:w-20 sm:rounded-3xl">
                <FiActivity size={34} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-900 sm:text-3xl">
                Why Patients Trust Us
              </h3>

              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: FiShield,
                    title: "Reliable Diagnostics",
                    text: "Advanced laboratory technology with strict quality control for dependable results.",
                  },
                  {
                    icon: FiClock,
                    title: "Timely Reports",
                    text: "Quick turnaround times help doctors and patients make timely healthcare decisions.",
                  },
                  {
                    icon: FiCheckCircle,
                    title: "Patient-Focused Care",
                    text: "Friendly staff, transparent pricing, and professional support throughout your healthcare journey.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                      <item.icon />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                {[
                  {
                    value: "500+",
                    label: "Lab Tests",
                  },
                  {
                    value: "15+",
                    label: "Years",
                  },
                  {
                    value: "100%",
                    label: "Care",
                  },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-black text-sky-600 sm:text-3xl">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}