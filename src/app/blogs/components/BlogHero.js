
import { FiBookOpen } from "react-icons/fi";

export default function BlogHero({ totalBlogs }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-8 sm:py-12 lg:py-16">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 shadow-2xs">
            <FiBookOpen className="text-sky-600" />
            DK Bhangal Health Blog
          </div>

          {/* Heading */}
          <h1 className="mt-4 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Expert Health Articles,
            <span className="block text-sky-600">Wellness Tips & Guides</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-2xl text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
            Explore medically reviewed articles on blood tests, preventive healthcare, nutrition, and wellness diagnostics.
          </p>

          {/* Stats Row */}
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="rounded-xl border border-slate-100 bg-white px-4 py-2.5 shadow-2xs text-center">
              <p className="text-xl font-bold text-sky-600 sm:text-2xl">{totalBlogs}+</p>
              <p className="text-[11px] text-slate-500">Health Articles</p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white px-4 py-2.5 shadow-2xs text-center">
              <p className="text-xl font-bold text-sky-600 sm:text-2xl">100%</p>
              <p className="text-[11px] text-slate-500">Evidence Based</p>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white px-4 py-2.5 shadow-2xs text-center">
              <p className="text-xl font-bold text-sky-600 sm:text-2xl">Weekly</p>
              <p className="text-[11px] text-slate-500">New Articles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}