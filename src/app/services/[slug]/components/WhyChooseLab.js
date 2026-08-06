import {
  FiActivity,
  FiAward,
  FiCheckCircle,
  FiClock,
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
};

export default function WhyChooseLab({ service }) {
  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Why Choose DK Bhangal Lab
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted Diagnostic Care Backed by Experience
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            At DK Bhangal Laboratory & ECG, we combine experienced healthcare
            professionals, advanced diagnostic technology, and a patient-first
            approach to deliver accurate laboratory testing with dependable
            results and exceptional care.
          </p>
        </div>

        {/* Features */}

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:mt-14 xl:grid-cols-3 xl:gap-8">
          {service.whyChoose.features.map((feature) => {
            const Icon = icons[feature.icon];

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl sm:p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 transition-colors duration-300 group-hover:bg-sky-600">
                  <Icon className="text-3xl text-sky-600 transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}

        <div className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 lg:mt-16">
          {/* Background Glow */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl" />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_380px] lg:items-center lg:gap-12 lg:p-10">
            {/* Left */}

            <div className="text-white">
              <h3 className="text-2xl font-bold sm:text-3xl">
                Your Health Deserves Accuracy & Trust
              </h3>

              <p className="mt-4 text-base leading-7 text-sky-100 sm:text-lg sm:leading-8">
                Whether you're booking a routine blood test, preventive health
                screening, or specialized diagnostic investigation, our focus
                is delivering dependable laboratory services with complete
                transparency, quality assurance, and timely reporting.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Experienced Laboratory Team",
                  "Modern Diagnostic Equipment",
                  "Strict Quality Control",
                  "Affordable Pricing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
                  >
                    <FiCheckCircle className="text-green-300" />

                    <span className="text-sm font-medium sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}

            <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
              <h4 className="text-2xl font-bold text-slate-900">
                Our Commitment
              </h4>

              <div className="mt-8 space-y-6">
                {[
                  {
                    title: "Accuracy",
                    text: "Reliable diagnostic reports generated using advanced laboratory technology.",
                  },
                  {
                    title: "Compassion",
                    text: "Friendly healthcare professionals committed to patient comfort and support.",
                  },
                  {
                    title: "Excellence",
                    text: "Continuous focus on quality, innovation, and dependable laboratory services.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-b border-slate-100 pb-5 last:border-0 last:pb-0"
                  >
                    <h5 className="font-semibold text-sky-600">
                      {item.title}
                    </h5>

                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Mini Stats */}

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-center">
                <div>
                  <h5 className="text-2xl font-black text-sky-600 sm:text-3xl">
                    15+
                  </h5>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Years
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-black text-sky-600 sm:text-3xl">
                    500+
                  </h5>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Tests
                  </p>
                </div>

                <div>
                  <h5 className="text-2xl font-black text-sky-600 sm:text-3xl">
                    100%
                  </h5>

                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                    Care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}