import {
  FiActivity,
  FiClock,
  FiDroplet,
  FiDollarSign,
  FiHome,
  FiFileText,
} from "react-icons/fi";

const icons = {
  testName: FiActivity,
  price: FiDollarSign,
  sample: FiDroplet,
  reportTime: FiClock,
  fasting: FiFileText,
  homeCollection: FiHome,
};

export default function BlogQuickInfo({ blog }) {
  const items = [
    {
      key: "testName",
      label: "Test Name",
      value: blog.quickInfo.testName,
    },
    {
      key: "price",
      label: "Price",
      value: blog.quickInfo.price,
    },
    {
      key: "sample",
      label: "Sample",
      value: blog.quickInfo.sample,
    },
    {
      key: "reportTime",
      label: "Report Time",
      value: blog.quickInfo.reportTime,
    },
    {
      key: "fasting",
      label: "Fasting",
      value: blog.quickInfo.fasting,
    },
    {
      key: "homeCollection",
      label: "Home Collection",
      value: blog.quickInfo.homeCollection,
    },
  ];

  return (
    <section className="mt-10 overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 shadow-xl">
      {/* Header */}
      <div className="bg-[#0075BA] px-6 py-6 text-white">
        <h2 className="text-2xl font-bold">
          Quick Information
        </h2>

        <p className="mt-2 max-w-2xl text-sm text-sky-100">
          Important information about this test before you book.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 p-5 lg:grid-cols-3">
        {items.map((item) => {
          const Icon = icons[item.key];

          return (
            <div
              key={item.key}
              className="group rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-sky-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0075BA] text-white shadow-lg">
                <Icon size={22} />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {item.label}
              </p>

              <p className="mt-2 text-base font-bold leading-6 text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}