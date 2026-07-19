import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
            Featured Article
          </span>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Editor's Pick
          </h2>
        </div>
      </div>

      <Link
        href={`/blogs/${blog.slug}`}
        className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12">
            {/* Meta */}
            <div className="mb-5 flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:gap-6 sm:text-sm">
              <span className="flex items-center gap-2">
                <FiCalendar className="text-sky-600" />
                {blog.publishedAt}
              </span>

              <span className="flex items-center gap-2">
                <FiClock className="text-sky-600" />
                {blog.readingTime}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-black leading-tight text-slate-900 transition-colors duration-300 group-hover:text-sky-600 sm:text-3xl lg:text-4xl">
              {blog.title}
            </h2>

            {/* Excerpt */}
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 lg:text-lg">
              {blog.excerpt}
            </p>

            {/* Footer */}
            <div className="mt-8 flex flex-col gap-5 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Written by
                </p>

                <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
                  {blog.author.name}
                </p>
              </div>

              <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-sky-700 sm:w-auto sm:px-6 sm:py-4 sm:text-base">
                Read Article

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}