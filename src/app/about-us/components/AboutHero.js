
import {
  FiAward,
} from "react-icons/fi";
import HeroButtons from "./HeroButtons";

const features = [
  {
    title: "Advanced Laboratory Equipment",
    color: "bg-blue-100",
    icon: "🔬",
  },
  {
    title: "Experienced Pathologists",
    color: "bg-emerald-100",
    icon: "👨‍⚕️",
  },
  {
    title: "Home Sample Collection",
    color: "bg-cyan-100",
    icon: "🏠",
  },
  {
    title: "Secure Digital Reports",
    color: "bg-violet-100",
    icon: "📄",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />

      <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-cyan-100/40 blur-[120px] sm:h-[420px] sm:w-[420px]" />

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-100/30 blur-[120px] sm:h-[520px] sm:w-[520px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1fr_470px] lg:gap-16">

          {/* LEFT */}

          <div
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-700 shadow-sm sm:text-sm">

              <FiAward />

              Trusted Since 2014

            </span>

            <h1 className="mt-6 text-4xl font-black leading-[0.95] tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">

              Building Trust

              <br />

              Through

              <span className="block text-blue-600">

                Accurate Diagnostics.

              </span>

            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

              At Bhangal Clinical Laboratory, we believe every diagnosis begins
              with trust. We provide accurate pathology testing, modern
              laboratory services and compassionate patient care for every
              family.

            </p>

      <HeroButtons></HeroButtons>

          </div>

          {/* RIGHT */}

          <div
          >

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

              <div className="border-b border-slate-100 p-6 sm:p-8">

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                  WHY BHANGAL LAB
                </span>

                <h3 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl">

                  Trusted by Thousands of Families

                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">

                  Combining experienced professionals, advanced laboratory
                  technology and patient-first care to deliver reliable
                  diagnostics every day.

                </p>

              </div>

              <div className="divide-y divide-slate-100">

                {features.map((item) => (

                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-5 sm:p-6"
                  >

                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-xl ${item.color} sm:h-14 sm:w-14 sm:text-2xl`}
                    >
                      {item.icon}
                    </div>

                    <div>

                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        Quality healthcare you can trust.
                      </p>

                    </div>

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