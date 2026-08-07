import TrackedWhatsappLink from "@/app/components/TrackedWhatsappLink";
import {
  FiCalendar,
  FiUserCheck,
  FiActivity,
  FiFileText,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const steps = [
  {
    icon: FiCalendar,
    title: "Book Your Test",
    description:
      "Schedule online, by phone, or WhatsApp for in-lab or home sample collection.",
  },
  {
    icon: FiUserCheck,
    title: "Sample Collection",
    description:
      "Experienced staff collect your sample using sterile single-use equipment.",
  },
  {
    icon: FiActivity,
    title: "Lab Analysis",
    description:
      "Samples processed using automated technology and strict quality control.",
  },
  {
    icon: FiFileText,
    title: "Receive Reports",
    description:
      "Reports delivered fast digitally or in print for timely healthcare decisions.",
  },
];

export default function Process({ location }) {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
            Simple & Convenient
          </span>

          <h2 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
            How Our Diagnostic Process Works
          </h2>

          <p className="mt-3 text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            A simple, stress-free 4-step diagnostic journey for patients in {location.city}.
          </p>
        </div>

        {/* Steps Grid (2-column compact grid on mobile) */}
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-3.5 sm:p-5 shadow-2xs transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                      <Icon className="text-lg sm:text-xl" />
                    </div>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-50 text-xs font-bold text-sky-700">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-slate-900 sm:text-base">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    {step.description}
                  </p>
                </div>

                <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-600">
                  Step {index + 1}
                  <FiArrowRight className="text-[10px] transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 p-5 text-white shadow-lg sm:rounded-3xl sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-bold sm:text-2xl">
                Healthcare Made Simple in {location.city}
              </h3>

              <p className="mt-1 text-xs text-sky-100 sm:text-sm">
                Smooth diagnostic workflow, accurate testing, and timely reports delivered directly to you.
              </p>
            </div>

            <div className="shrink-0">
              <TrackedWhatsappLink
                text={`Hi, I want to book a diagnostic test in ${location.city}.`}
                location={`location-process-book-whatsapp-${location.city}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-sky-700 transition hover:bg-slate-100 sm:text-sm"
              >
                <FaWhatsapp className="text-base text-green-600" />
                Book via WhatsApp
              </TrackedWhatsappLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}