import Link from "next/link";
import { FiFileText } from "react-icons/fi";

export default function Overview({ data }) {
  if (!data || !data.paragraphs || data.paragraphs.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-sky-50/50 to-white border-t border-slate-100">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3.5 py-1.5 text-xs font-semibold text-sky-700">
            <FiFileText size={14} className="text-sky-600" />
            Test Details & Information
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {data.title}
          </h2>
        </div>

        {/* Content Box */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-sm space-y-5 text-base sm:text-lg leading-relaxed sm:leading-8 text-slate-700">
          {data.paragraphs.map((text, i) => {
            const hasLink = data.linkText && text.includes(data.linkText);

            if (!hasLink) {
              return (
                <p key={i} className="text-slate-700">
                  {text}
                </p>
              );
            }

            const [before, after] = text.split(data.linkText);
            return (
              <p key={i} className="text-slate-700">
                {before}
                <Link
                  href={data.linkHref}
                  className="font-semibold text-sky-600 underline underline-offset-4 decoration-sky-300 hover:text-sky-700 hover:decoration-sky-600 transition-colors"
                >
                  {data.linkText}
                </Link>
                {after}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}