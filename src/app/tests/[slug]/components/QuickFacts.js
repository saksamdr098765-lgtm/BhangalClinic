import {
  FiDroplet,
  FiClock,
  FiActivity,
  FiHome,
  FiUser,
} from "react-icons/fi";

const icons = {
  sample: FiDroplet,
  reportTime: FiClock,
  fasting: FiActivity,
  homeCollection: FiHome,
  ageGroup: FiUser,
};

export default function QuickFacts({ quickFacts }) {
  const facts = [
    {
      key: "sample",
      title: "Sample Required",
      value: quickFacts.sample,
    },
    {
      key: "reportTime",
      title: "Report Time",
      value: quickFacts.reportTime,
    },
    {
      key: "fasting",
      title: "Fasting Required",
      value: quickFacts.fasting,
    },
    {
      key: "homeCollection",
      title: "Home Collection",
      value: quickFacts.homeCollection,
    },
    {
      key: "ageGroup",
      title: "Suitable For",
      value: quickFacts.ageGroup,
    },
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

          {facts.map((fact) => {
            const Icon = icons[fact.key];

            return (
              <div
                key={fact.key}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100">
                  <Icon
                    className="text-sky-600"
                    size={20}
                  />
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  {fact.title}
                </p>

                <p className="mt-1 font-semibold text-slate-900">
                  {fact.value}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}