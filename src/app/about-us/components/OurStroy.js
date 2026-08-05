
import {
  FiHeart,
  FiHome,
  FiAward,
} from "react-icons/fi";
import { GiMicroscope } from "react-icons/gi";

const milestones = [
  {
    year: "2006",
    title: "Our Beginning",
    description:
      "Bhangal Clinical Laboratory was established with a vision of making reliable diagnostics accessible to every family.",
    icon: FiAward,
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    year: "2010",
    title: "Advanced Technology",
    description:
      "Modern laboratory analyzers were introduced to improve testing accuracy and faster reporting.",
    icon: GiMicroscope,
    color: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    year: "2015",
    title: "Home Collection",
    description:
      "Doorstep sample collection made diagnostics safer and more convenient.",
    icon: FiHome,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    year: "Today",
    title: "Trusted Healthcare",
    description:
      "Thousands of patients continue to trust our laboratory every day.",
    icon: FiHeart,
    color: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

const stats = [
  {
    value: "15K+",
    label: "Patients Served",
  },
  {
    value: "50+",
    label: "Diagnostic Tests",
  },
  {
    value: "10+",
    label: "Years Experience",
  },
  {
    value: "99%",
    label: "Reliable Results",
  },
];

export default function OurStory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-100/40 blur-[110px] sm:h-[420px] sm:w-[420px]" />

      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cyan-100/40 blur-[110px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 sm:text-sm">
            Our Story
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

            Every Diagnosis

            <span className="block text-blue-600">
              Begins With Trust.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">

            Since our founding, Bhangal Clinical Laboratory has remained
            committed to delivering accurate diagnostics, compassionate care
            and dependable healthcare services for every family.

          </p>

        </div>
                {/* Story */}

        <div
   
          className="mx-auto mt-12 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:mt-16 sm:p-8 lg:p-10"
        >
          <p className="text-lg font-light leading-8 text-slate-700 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
            "Healthcare begins with trust. Every accurate diagnosis has the
            power to change a life. For over a decade, we've combined
            experienced professionals, advanced laboratory technology and
            compassionate patient care to serve our community."
          </p>

          <div className="mt-8 h-px w-16 bg-blue-600" />

          <h4 className="mt-5 text-lg font-bold text-slate-900">
            Bhangal Clinical Laboratory
          </h4>

          <p className="mt-1 text-slate-500">
            Trusted Diagnostic Partner
          </p>
        </div>

        {/* Journey */}

        <div

          className="mt-16 sm:mt-20"
        >
          <div className="text-center">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
              Our Journey
            </p>

            <h3 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Milestones That Shaped Us
            </h3>

          </div>

          <div className="relative mt-10">

            {/* Timeline Line */}

            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-8">

              {milestones.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.year}
                 
                    className="relative flex gap-5 md:grid md:grid-cols-[1fr_80px_1fr] md:gap-8"
                  >

                    {/* Left */}

                    <div
                      className={`${
                        index % 2 === 0
                          ? "md:text-right"
                          : "md:order-3 md:text-left"
                      }`}
                    >

                      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

                        <span className="text-sm font-bold uppercase tracking-wide text-blue-600">
                          {item.year}
                        </span>

                        <h4 className="mt-2 text-xl font-bold text-slate-900">
                          {item.title}
                        </h4>

                        <p className="mt-3 leading-7 text-slate-600">
                          {item.description}
                        </p>

                      </div>

                    </div>

                    {/* Center */}

                    <div className="relative flex justify-center md:order-2">

                      <div
                        className={`z-10 flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}
                      >
                        <Icon
                          className={item.iconColor}
                          size={22}
                        />
                      </div>

                    </div>

                    {/* Empty Desktop Side */}

                    <div
                      className={`hidden md:block ${
                        index % 2 === 0 ? "" : "md:order-1"
                      }`}
                    />

                  </div>

                );

              })}

            </div>

          </div>

        </div>
        
                {/* ================= Statistics ================= */}

        <div

          className="mt-16 sm:mt-20 lg:mt-24"
        >

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.label}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                <p className="text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                  {item.value}
                </p>

                <div className="mt-4 h-1 w-10 rounded-full bg-blue-600" />

                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-sm">
                  {item.label}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ================= Vision ================= */}

      
              </div>

    </section>
  );
}