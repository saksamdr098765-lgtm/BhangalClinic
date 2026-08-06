import Image from "next/image";
import TrackedLink from "./TrackedLink";
import {
  FiHome,
  FiClock,
  FiShield,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";

const features = [
  {
    icon: FiHome,
    title: "Home Sample Collection",
    description:
      "Book online and our trained phlebotomist visits your home at your preferred time.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: FiClock,
    title: "Same Day Reports",
    description:
      "Most routine pathology reports are delivered digitally within the same day.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: FiShield,
    title: "Reliable Diagnostics",
    description:
      "Modern laboratory equipment with strict quality control for dependable results.",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: FiFileText,
    title: "Easy Online Booking",
    description:
      "Book tests, make payments and download reports anytime from any device.",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white -z-20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_bottom_right,#cffafe,transparent_35%)] opacity-80" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/doctor.png"
                alt="Professional Clinical Laboratory Doctor and Diagnostics"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="hidden lg:block absolute -left-8 top-10 rounded-3xl border border-white/40 bg-white/90 backdrop-blur-xl p-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
                  <FiHome className="text-2xl text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Trusted Service</p>
                  <p className="font-bold text-slate-900">Home Collection</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="hidden lg:block absolute -right-8 bottom-12 rounded-3xl border border-white/40 bg-white/90 backdrop-blur-xl p-5 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
                  <FiClock className="text-2xl text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Fast Reports</p>
                  <p className="font-bold text-slate-900">Same Day Delivery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Healthcare that
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Comes to You
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Experience reliable diagnostic services designed around your
              convenience. From home sample collection to secure online reports,
              every step is simple, fast and trusted by thousands of patients.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl"
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                    >
                      <Icon className={`text-xl ${feature.iconColor}`} />
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-center">
                <span className="block text-2xl font-black text-blue-600 sm:text-3xl">
                  15K+
                </span>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Patients
                </p>
              </div>

              <div className="text-center">
                <span className="block text-2xl font-black text-emerald-600 sm:text-3xl">
                  250+
                </span>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Tests
                </p>
              </div>

              <div className="text-center">
                <span className="block text-2xl font-black text-violet-600 sm:text-3xl">
                  99%
                </span>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Accuracy
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <TrackedLink
                href="/contact"
                tracking="home-whyChooseus-bookyourtest"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Book Your Test
                <FiArrowRight />
              </TrackedLink>

              <p className="text-sm text-slate-500">
                Online booking • Home collection • Digital reports
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}