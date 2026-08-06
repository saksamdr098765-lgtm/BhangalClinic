import TrackedWhatsappLink from "./TrackedWhatsappLink";
import { FaWhatsapp } from "react-icons/fa";
import { FiActivity, FiClock, FiShield } from "react-icons/fi";
import SITE_CONFIG from "../SITE_CONFIG";

const features = [
  {
    icon: FiClock,
    title: "5–10 Min Test",
  },
  {
    icon: FiActivity,
    title: "Digital ECG",
  },
  {
    icon: FiShield,
    title: "Accurate Results",
  },
];

export default function ECGMonitor() {
  return (
    <div className="relative py-5 mx-auto w-full max-w-7xl overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-8 -right-10 h-40 w-40 rounded-full bg-cyan-200/40 blur-3xl" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
        {/* Header */}
        <div className="border-b border-slate-100 px-5 py-5 sm:px-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            <FiActivity />
            ECG Test Available
          </div>

          <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl">
            Digital Electrocardiogram
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
            Fast and accurate cardiac rhythm assessment performed using
            modern ECG equipment by trained professionals.
          </p>
        </div>

        {/* Screen */}
        <div className="p-5 sm:p-7">
          <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-inner">
            {/* Screen */}
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
              {/* Grid */}
              <svg
                className="absolute inset-0 h-full w-full opacity-20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="smallGrid"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M24 0H0V24"
                      fill="none"
                      stroke="#60a5fa"
                      strokeWidth=".5"
                    />
                  </pattern>
                </defs>

                <rect width="100%" height="100%" fill="url(#smallGrid)" />
              </svg>

              {/* Glow */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-400/10 to-transparent" />

              {/* ECG Wave */}
              <svg
                viewBox="0 0 1200 300"
                className="absolute inset-0 h-full w-[200%] animate-[pan_4s_linear_infinite]"
              >
                <path
                  d="
                  M0 150 L60 150 L90 150 L120 150 L145 95 L170 230 L195 125 L220 150
                  L290 150 L330 150 L355 90 L380 230 L405 120 L430 150 L520 150
                  L545 150 L570 90 L595 230 L620 120 L645 150 L740 150 L765 150
                  L790 90 L815 230 L840 120 L865 150 L960 150 L985 150 L1010 90
                  L1035 230 L1060 120 L1085 150 L1200 150
                  "
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Duplicate Wave */}
                <path
                  transform="translate(1200 0)"
                  d="
                  M0 150 L60 150 L90 150 L120 150 L145 95 L170 230 L195 125 L220 150
                  L290 150 L330 150 L355 90 L380 230 L405 120 L430 150 L520 150
                  L545 150 L570 90 L595 230 L620 120 L645 150 L740 150 L765 150
                  L790 90 L815 230 L840 120 L865 150 L960 150 L985 150 L1010 90
                  L1035 230 L1060 120 L1085 150 L1200 150
                  "
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Heart */}
              <div className="absolute right-6 top-6 animate-pulse">
                <div className="rounded-2xl bg-slate-800/90 px-5 py-4 backdrop-blur">
                  <div className="text-center">
                    <div className="text-4xl">❤️</div>
                    <div className="mt-2 text-3xl font-bold text-white">72</div>
                    <div className="text-xs tracking-widest text-slate-400">
                      BPM
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Panel */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/80 p-4 backdrop-blur">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">
                        Status
                      </p>
                      <p className="mt-1 text-sm font-semibold text-emerald-400">
                        Active
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">
                        Rhythm
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Normal
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-400">
                        Signal
                      </p>
                      <p className="mt-1 text-sm font-semibold text-blue-400">
                        Stable
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {features.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={18} />
                </div>

                <span className="text-sm font-semibold text-slate-700">
                  {title}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 shadow-lg">
            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  ECG Available Today
                </span>

                <h4 className="mt-3 text-2xl font-bold text-white">
                  Book Your ECG in Just 5 Minutes
                </h4>

                <p className="mt-2 max-w-lg text-blue-100">
                  Get your heart checked using our modern digital ECG machine.
                  Walk in or book instantly through WhatsApp.
                </p>
              </div>

              <TrackedWhatsappLink
                phone={SITE_CONFIG.whatsapp}
                text="Hi, I want to book an ECG test."
                tracking="ecg-whatsapp"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <FaWhatsapp className="text-blue-500 h-6 w-6" />

                <div className="text-left">
                  <div className="text-xs uppercase tracking-wider text-slate-500">
                    Book Instantly
                  </div>
                  <div className="text-base font-bold">
                    Chat on WhatsApp
                  </div>
                </div>
              </TrackedWhatsappLink>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />
      </div>

      {/* Monitor Stand */}
      <div className="mx-auto h-10 w-6 rounded-b-xl bg-slate-300" />
      <div className="mx-auto h-3 w-40 rounded-full bg-slate-400/70 blur-[1px]" />
    </div>
  );
}