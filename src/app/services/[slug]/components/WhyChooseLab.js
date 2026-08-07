import {
  FiActivity,
  FiAward,
  FiCheckCircle,
  FiClock,
  FiHome,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const icons = {
  award: FiAward,
  clock: FiClock,
  shield: FiShield,
  users: FiUsers,
  activity: FiActivity,
  check: FiCheckCircle,
  home: FiHome,
};

export default function WhyChooseLab({ service }) {
  return (
    <section className="bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
            Why Choose DK Bhangal Lab
          </span>

          <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Trusted Diagnostic Care Backed by Experience
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            At DK Bhangal Laboratory & ECG, we combine experienced professionals, advanced technology, and a patient-first approach.
          </p>
        </div>

        {/* Features (Compact 2-column on mobile) */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3">
          {service.whyChoose.features.map((feature) => {
            const Icon = icons[feature.icon] || FiShield;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
              >
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="text-xl sm:text-2xl" />
                </div>

                <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-5 text-white sm:rounded-3xl sm:p-8">
          <div className="relative grid gap-6 lg:grid-cols-[1fr_340px] lg:items-center lg:gap-8">
            {/* Left */}
            <div>
              <h3 className="text-xl font-bold sm:text-2xl lg:text-3xl">
                Your Health Deserves Accuracy & Trust
              </h3>

              <p className="mt-3 text-xs leading-5 text-sky-100 sm:text-base sm:leading-7">
                Whether you're booking a routine blood test or preventive screening, we deliver dependable laboratory services with complete transparency.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2">
                {[
                  "Experienced Team",
                  "Modern Equipment",
                  "Quality Control",
                  "Affordable Pricing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 p-2 backdrop-blur"
                  >
                    <FiCheckCircle className="text-xs text-green-300 shrink-0" />
                    <span className="text-xs font-medium text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="rounded-xl bg-white p-4 text-slate-900 shadow-md sm:rounded-2xl sm:p-6">
              <h4 className="text-base font-bold sm:text-lg">
                Our Commitment
              </h4>

              <div className="mt-3 space-y-3">
                {[
                  {
                    title: "Accuracy",
                    text: "Reliable diagnostic reports generated using advanced technology.",
                  },
                  {
                    title: "Compassion",
                    text: "Friendly healthcare professionals committed to patient comfort.",
                  },
                  {
                    title: "Excellence",
                    text: "Continuous focus on quality and dependable laboratory services.",
                  },
                ].map((item) => (
                  <div key={item.title} className="border-b border-slate-100 pb-2.5 last:border-0 last:pb-0">
                    <h5 className="text-xs font-bold text-sky-600 sm:text-sm">
                      {item.title}
                    </h5>
                    <p className="mt-0.5 text-xs text-slate-600 leading-4">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mini Stats */}
              <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-200 pt-3 text-center">
                <div>
                  <h5 className="text-lg font-black text-sky-600 sm:text-xl">15+</h5>
                  <p className="text-[10px] text-slate-500">Years</p>
                </div>
                <div>
                  <h5 className="text-lg font-black text-sky-600 sm:text-xl">100+</h5>
                  <p className="text-[10px] text-slate-500">Tests</p>
                </div>
                <div>
                  <h5 className="text-lg font-black text-sky-600 sm:text-xl">100%</h5>
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