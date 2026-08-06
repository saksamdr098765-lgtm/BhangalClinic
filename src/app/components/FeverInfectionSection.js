import TrackedLink from "./TrackedLink";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const cards = [
  {
    title: "Fever Profile",
    description:
      "Essential tests to identify the cause of fever with quick and accurate diagnosis.",
    image: "/icons/fever.svg",
    slug: "fever",
    badge: "Most Popular",
    featured: true,
    color: "orange",
  },
  {
    title: "Dengue",
    description: "NS1 Antigen, IgM & IgG antibody testing.",
    image: "/icons/dengue.svg",
    slug: "dengue",
    color: "red",
  },
  {
    title: "Malaria",
    description: "Rapid malaria screening and confirmation.",
    image: "/icons/malaria.svg",
    slug: "malaria",
    color: "emerald",
  },
  {
    title: "Typhoid",
    description: "Reliable typhoid diagnosis and monitoring.",
    image: "/icons/typhoid.svg",
    slug: "typhoid",
    color: "amber",
  },
  {
    title: "Infection",
    description: "CBC, CRP & infection marker packages.",
    image: "/icons/infection.svg",
    slug: "infection",
    color: "indigo",
  },
  {
    title: "Inflammation",
    description: "ESR & CRP based inflammation screening.",
    image: "/icons/inflammation.svg",
    slug: "inflammation",
    color: "rose",
  },
];

const colors = {
  orange: {
    bg: "from-orange-50 to-white",
    icon: "bg-orange-100",
    ring: "group-hover:border-orange-200",
  },
  red: {
    bg: "from-red-50 to-white",
    icon: "bg-red-100",
    ring: "group-hover:border-red-200",
  },
  emerald: {
    bg: "from-emerald-50 to-white",
    icon: "bg-emerald-100",
    ring: "group-hover:border-emerald-200",
  },
  amber: {
    bg: "from-amber-50 to-white",
    icon: "bg-amber-100",
    ring: "group-hover:border-amber-200",
  },
  indigo: {
    bg: "from-indigo-50 to-white",
    icon: "bg-indigo-100",
    ring: "group-hover:border-indigo-200",
  },
  rose: {
    bg: "from-rose-50 to-white",
    icon: "bg-rose-100",
    ring: "group-hover:border-rose-200",
  },
};

export default function FeverInfectionSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      {/* Background */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-red-50 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-red-100 px-4 py-1 text-sm font-semibold text-red-600">
            Seasonal Care
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 lg:text-5xl">
            Fever & Infection Packages
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Specialized diagnostic packages for fever, mosquito-borne illnesses,
            bacterial infections and inflammation with quick digital reports.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {/* Featured Card */}
          <div className="lg:col-span-2 lg:row-span-2">
            <TrackedLink
              href="/packages?category=fever"
              tracking="fever-feverprofile"
              className="group relative flex h-full overflow-hidden rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-red-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Decorative Background */}
              <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full bg-orange-100/60 blur-2xl" />

              <div className="relative z-10 flex h-full flex-col">
                <span className="inline-flex w-fit rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-orange-700">
                  Most Popular
                </span>

                <h3 className="mt-5 text-3xl font-black text-slate-900">
                  Fever Profile
                </h3>

                <p className="mt-4 max-w-md text-base leading-7 text-slate-600">
                  Essential investigations to identify the cause of fever, monitor
                  infection, and support early treatment decisions with reliable
                  laboratory testing.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                    <p className="text-2xl font-bold text-slate-900">24 hrs</p>
                    <p className="mt-1 text-sm text-slate-500">Report Time</p>
                  </div>

                  <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                    <p className="text-2xl font-bold text-slate-900">Home</p>
                    <p className="mt-1 text-sm text-slate-500">Collection</p>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-2 pt-10 font-semibold text-orange-600">
                  Explore Packages
                  <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </div>
              </div>

              <div className="relative z-10 ml-auto hidden items-end lg:flex">
                <Image
                  src="/icons/fever.svg"
                  alt="Fever Profile Diagnostic Package"
                  width={230}
                  height={230}
                  sizes="230px"
                  loading="lazy"
                  className="transition duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>
            </TrackedLink>
          </div>

          {/* Remaining Bento Cards */}
          {cards
            .filter((card) => !card.featured)
            .map((card) => {
              const theme = colors[card.color];

              return (
                <div key={card.slug}>
                  <TrackedLink
                    href={`/packages?category=${card.slug}`}
                    tracking={`fever-${card.slug}`}
                    className={`group relative flex h-full overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br ${theme.bg} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${theme.ring}`}
                  >
                    {/* Decorative Circle */}
                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/60 blur-xl" />

                    <div className="relative flex h-full flex-col">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl ${theme.icon}`}
                      >
                        <Image
                          src={card.image}
                          alt={`${card.title} Package`}
                          width={38}
                          height={38}
                          sizes="38px"
                          loading="lazy"
                          className="transition duration-300 group-hover:scale-110"
                        />
                      </div>

                      <h3 className="mt-5 text-xl font-bold text-slate-900">
                        {card.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {card.description}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-6">
                        <span className="text-sm font-semibold text-blue-600">
                          View Packages
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow transition duration-300 group-hover:bg-blue-600">
                          <FiArrowRight className="text-slate-600 transition duration-300 group-hover:translate-x-1 group-hover:text-white" />
                        </div>
                      </div>
                    </div>
                  </TrackedLink>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}