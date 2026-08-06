import TrackedLink from "@/app/components/TrackedLink";
import TrackedPhoneLink from "@/app/components/TrackedPhoneLink";
import {
  FiArrowRight,
  FiPhone,
  FiActivity,
  FiCheckCircle,
  FiShield,
  FiClock,
} from "react-icons/fi";

const benefits = [
  "500+ Laboratory Tests",
  "Preventive Health Packages",
  "Home Sample Collection",
  "Fast & Accurate Reports",
];

const whyUsItems = [
  {
    icon: <FiShield />,
    title: "Reliable Diagnostics",
    text: "Modern laboratory equipment with strict quality control ensures highly accurate reports.",
  },
  {
    icon: <FiClock />,
    title: "Fast Report Delivery",
    text: "Quick turnaround time with secure digital reporting for faster medical decisions.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Affordable Healthcare",
    text: "Quality pathology services and health packages at transparent pricing.",
  },
];

export default function CTA({ location }) {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 p-6 text-white shadow-2xl md:p-10 lg:p-14">
          {/* Background */}
          <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_400px] lg:items-center">
            {/* Left */}
            <div>
              <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur md:text-sm">
                Trusted Diagnostic Laboratory
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                Book Your Diagnostic Test in{" "}
                <span className="text-cyan-200">{location.city}</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-sky-100 md:text-base md:leading-8">
                Whether you need routine blood tests, preventive health
                checkups, ECG services, or home sample collection, DK Bhangal
                Laboratory is committed to delivering reliable diagnostics,
                accurate reports, and compassionate patient care.
              </p>

              {/* Benefits */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
                  >
                    <FiCheckCircle className="text-green-300 text-lg shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <TrackedLink
                  href="/packages"
                  tracking={`location-cta-packages-${location.city}`}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-sky-700 transition-all hover:scale-[1.03]"
                >
                  View Health Packages
                  <FiArrowRight />
                </TrackedLink>

                <TrackedPhoneLink
                  phone={location.phone}
                  tracking={`location-cta-call-${location.city}`}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
                >
                  <FiPhone />
                  Call Now
                </TrackedPhoneLink>
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-xl md:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                <FiActivity className="text-3xl" />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Why Patients Choose Us
              </h3>

              <div className="mt-8 space-y-6">
                {whyUsItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 shrink-0">
                      {item.icon}
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

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5 text-center">
                  <span className="block text-3xl font-black md:text-4xl">
                    500+
                  </span>
                  <p className="mt-2 text-sm text-sky-100">Lab Tests</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 text-center">
                  <span className="block text-3xl font-black md:text-4xl">
                    100%
                  </span>
                  <p className="mt-2 text-sm text-sky-100">Patient Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}