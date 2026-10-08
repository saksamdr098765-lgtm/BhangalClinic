import Link from "next/link";
import { FiTag, FiInfo, FiCheckCircle } from "react-icons/fi";

const formatPrice = (value) =>
  `₹${Number(value).toLocaleString("en-IN")}`;

export default function PriceList({ data }) {
  if (!data?.rows?.length) return null;

  return (
    <section className="py-16 lg:py-24 bg-slate-50/50 border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-semibold text-sky-700">
            <FiTag size={14} className="text-sky-600" />
            Price Comparison & Related Tests
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {data.title}
          </h2>

          {data.description && (
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {data.description}
            </p>
          )}
        </div>

        {/* Mobile View (Cards - Mobile First) */}
        <div className="mt-8 space-y-4 sm:hidden">
          {data.rows.map((row, idx) => (
            <div
              key={row.test || idx}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="font-semibold text-slate-900 text-base">
                  {row.href ? (
                    <Link
                      href={row.href}
                      className="text-sky-700 hover:text-sky-900 hover:underline"
                    >
                      {row.test}
                    </Link>
                  ) : (
                    row.test
                  )}
                </div>
                <span className="inline-flex shrink-0 items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-extrabold text-emerald-700 border border-emerald-200">
                  {formatPrice(row.price)}
                </span>
              </div>

              {row.note && (
                <div className="pt-2 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-500">
                  <FiCheckCircle className="mt-0.5 text-sky-600 shrink-0" size={14} />
                  <span>{row.note}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop / Tablet View (Modern Table Card) */}
        <div className="mt-8 hidden sm:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-700 border-collapse">
              <caption className="sr-only">{data.title}</caption>
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <th scope="col" className="px-6 py-4 w-5/12">
                    Test Name
                  </th>
                  <th scope="col" className="px-6 py-4 w-2/12">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4 w-5/12">
                    Good to Know / Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.rows.map((row, idx) => (
                  <tr
                    key={row.test || idx}
                    className="hover:bg-sky-50/40 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {row.href ? (
                        <Link
                          href={row.href}
                          className="text-sky-600 hover:text-sky-800 hover:underline transition-colors"
                        >
                          {row.test}
                        </Link>
                      ) : (
                        row.test
                      )}
                    </td>
                    <td className="px-6 py-4 font-bold text-emerald-600 text-base whitespace-nowrap">
                      {formatPrice(row.price)}
                    </td>
                    <td className="px-6 py-4 text-sm leading-relaxed text-slate-600">
                      {row.note || "Standard laboratory analysis"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Informational Callout Note */}
        <div className="mt-8 rounded-2xl border border-sky-200/80 bg-sky-50/60 p-5 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <FiInfo size={20} />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">
                Home Sample Collection & Direct Slot Booking
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Doorstep home sample collection is available across Garhshankar and surrounding areas. Rates are all-inclusive with digital reports sent straight to your WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}