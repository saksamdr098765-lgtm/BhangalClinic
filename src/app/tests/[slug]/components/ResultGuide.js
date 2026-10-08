import { FiFileText, FiInfo, FiCheckCircle } from "react-icons/fi";

export default function ResultGuide({ data }) {
  if (!data || !data.rows || data.rows.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-sky-50/50 to-white">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-semibold text-sky-700">
            <FiFileText size={14} className="text-sky-600" />
            Result Guide
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
              key={row.titre || row.title || idx}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-800 border border-sky-100">
                  {row.titre || row.title || row.label}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Titre Level
                </span>
              </div>

              <div className="pt-1 flex items-start gap-2.5">
                <FiCheckCircle className="mt-1 text-sky-600 shrink-0" size={16} />
                <p className="text-sm leading-relaxed text-slate-700">
                  {row.meaning || row.interpretation || row.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop / Tablet View (Modern Table Card) */}
        <div className="mt-8 hidden sm:block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-700 border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-800">
                  <th className="px-6 py-4 w-1/3">Titre Level</th>
                  <th className="px-6 py-4">Usual Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.rows.map((row, idx) => (
                  <tr
                    key={row.titre || row.title || idx}
                    className="hover:bg-sky-50/40 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 font-semibold text-slate-900 whitespace-nowrap">
                      <span className="inline-flex items-center gap-2 rounded-lg bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-800 border border-sky-100">
                        {row.titre || row.title || row.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm leading-relaxed text-slate-600">
                      {row.meaning || row.interpretation || row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Informational Note */}
        {data.note && (
          <div className="mt-8 rounded-2xl border border-sky-200/80 bg-sky-50/60 p-5 shadow-sm">
            <div className="flex items-start gap-3.5">
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <FiInfo size={20} />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">
                  Important Note
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  {data.note}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}