import {
  FiArrowRight,
  FiCheck,
  FiUser,
  FiUsers,
  FiHeart,
  FiSmile,
} from "react-icons/fi";

const options = [
  {
    value: "myself",
    title: "Myself",
    description: "I'm checking symptoms for myself.",
    icon: FiUser,
    badge: "Most Common",
  },
  {
    value: "child",
    title: "My Child",
    description: "Assessment for an infant or child.",
    icon: FiSmile,
    badge: "Pediatric",
  },
  {
    value: "parent",
    title: "My Parent",
    description: "Health assessment for a parent.",
    icon: FiHeart,
    badge: "Senior Care",
  },
  {
    value: "other",
    title: "Someone Else",
    description: "For another family member.",
    icon: FiUsers,
    badge: "Family",
  },
];

export default function Step1Concern({
  value,
  onChange,
  nextStep,
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
      {/* Heading */}
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700">
          Step 1 of 5
        </span>

        <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Who is this health
          <span className="block text-blue-600">
            assessment for?
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          Select who you're completing this assessment for.
          We'll personalize the recommendations based on
          your answers.
        </p>
      </div>

      {/* Options */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {options.map((item) => {
          const Icon = item.icon;
          const active = value === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                active
                  ? "border-blue-600 bg-blue-50 shadow-lg"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
              }`}
            >
              {/* Badge */}
              <span className="absolute left-6 top-6 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                {item.badge}
              </span>

              {/* Selected */}
              {active && (
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-transform duration-200">
                  <FiCheck />
                </div>
              )}

              {/* Icon */}
              <div
                className={`mt-10 flex h-16 w-16 items-center justify-center rounded-2xl transition-all ${
                  active
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                }`}
              >
                <Icon className="text-3xl" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-800">
            Personalized recommendations
          </p>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            This assessment helps identify suitable laboratory tests
            based on your responses. It is not a medical diagnosis.
          </p>
        </div>

        <button
          type="button"
          disabled={!value}
          onClick={nextStep}
          className="group inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          Continue
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}