import {
  FiCalendar,
  FiHome,
  FiActivity,
  FiFileText,
} from "react-icons/fi";

const icons = {
  calendar: FiCalendar,
  home: FiHome,
  test: FiActivity,
  report: FiFileText,
};

export default function BookingProcess({ booking }) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Simple Process
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
            {booking.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            {booking.description}
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {booking.steps.map((step, index) => {
            const Icon = icons[step.icon];

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-sky-600 text-sm font-bold text-white">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}