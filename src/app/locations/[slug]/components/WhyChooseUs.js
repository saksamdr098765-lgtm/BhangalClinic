import TrackingLink from "@/app/components/TrackingLink";
import {
  FiShield,
  FiClock,
  FiCheckCircle,
  FiActivity,
  FiUsers,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

const iconMap = {
  shield: FiShield,
  clock: FiClock,
  check: FiCheckCircle,
  activity: FiActivity,
  users: FiUsers,
  award: FiAward,
};

export default function WhyChooseUs({ location }) {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Why Patients in {location.city} Trust DK Bhangal Laboratory
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Dependable pathology services through modern technology, experienced professionals, and patient care.
          </p>
        </div>

        {/* Feature Cards Grid (Compact 2-column on mobile) */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
          {location.whyChoose.features.map((feature) => {
            const Icon = iconMap[feature.icon] || FiCheckCircle;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Icon className="text-xl sm:text-2xl" />
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-5 text-white shadow-lg sm:rounded-3xl sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_260px]">
            <div>
              <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                Accurate Diagnostics. Trusted Healthcare.
              </h3>

              <p className="mt-2 text-xs leading-5 text-sky-100 sm:text-base sm:leading-7">
                Whether you need a routine blood test, preventive health screening, or ECG, our experienced team is dedicated to providing reliable results for patients in {location.city}.
              </p>

              <div className="mt-4">
                <TrackingLink
                  href="/contact"
                  tracking={`location-why-choose-book-${location.city}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-sky-700 transition hover:bg-slate-100 sm:text-sm"
                >
                  Schedule Appointment
                  <FiArrowRight />
                </TrackingLink>
              </div>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-2 gap-2 text-center sm:gap-3">
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                <p className="text-xl font-black text-white sm:text-2xl">100+</p>
                <p className="text-[10px] text-sky-100 sm:text-xs">Lab Tests</p>
              </div>

              <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                <p className="text-xl font-black text-white sm:text-2xl">15+</p>
                <p className="text-[10px] text-sky-100 sm:text-xs">Years Experience</p>
              </div>

              <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                <p className="text-xl font-black text-white sm:text-2xl">Fast</p>
                <p className="text-[10px] text-sky-100 sm:text-xs">Report Delivery</p>
              </div>

              <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                <p className="text-xl font-black text-white sm:text-2xl">100%</p>
                <p className="text-[10px] text-sky-100 sm:text-xs">Patient Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}