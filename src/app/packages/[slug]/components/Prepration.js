import {
  FiCoffee,
  FiDroplet,
  FiMoon,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    icon: FiMoon,
    title: "Fast if Required",
    description:
      "Some health packages require 8–12 hours of fasting before sample collection. Drink plain water unless advised otherwise.",
  },
  {
    icon: FiCoffee,
    title: "Avoid Alcohol & Heavy Meals",
    description:
      "Avoid alcohol, smoking, and heavy meals before testing for more reliable results.",
  },
  {
    icon: FiDroplet,
    title: "Stay Hydrated",
    description:
      "Drink sufficient water before your appointment to make sample collection easier.",
  },
  {
    icon: FiFileText,
    title: "Keep Previous Reports",
    description:
      "Keep previous laboratory reports and prescriptions ready for better comparison.",
  },
  {
    icon: FiCheckCircle,
    title: "Relax During Collection",
    description:
      "Our trained phlebotomists follow safe and hygienic procedures for comfortable collection.",
  },
];

export default function Preparation() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-blue-700 sm:text-sm">
            Before Your Test
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            How to Prepare
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Follow these simple guidelines to ensure accurate
            diagnostic results and a smooth sample collection
            experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-12 max-w-4xl sm:mt-16">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 sm:left-8" />

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative flex gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm sm:h-14 sm:w-14">
                    <Icon className="text-blue-600 sm:text-lg" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                    <div className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white sm:h-8 sm:w-8 sm:text-sm">
                        {index + 1}
                      </span>

                      <h3 className="text-base font-bold leading-6 text-slate-900 sm:text-xl">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}