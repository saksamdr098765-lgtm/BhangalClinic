import Image from "next/image";
import TrackingLink from "@/app/components/TrackingLink";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:py-14">
      {/* Heading */}
      <div className="mb-4">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700">
          Featured Article
        </span>

        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Editor's Pick
        </h2>
      </div>

      <TrackingLink
        href={`/blogs/${blog.slug}`}
        tracking={`featured-blog-${blog.slug}`}
        className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition hover:-translate-y-0.5 hover:shadow-md"
      >
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden lg:aspect-auto">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute left-3 top-3 sm:left-4 sm:top-4">
              <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-4 sm:p-6 lg:p-8">
            {/* Meta */}
            <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <FiCalendar className="text-sky-600" />
                {blog.publishedAt}
              </span>

              <span className="flex items-center gap-1">
                <FiClock className="text-sky-600" />
                {blog.readingTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-black leading-snug text-slate-900 transition-colors group-hover:text-sky-600 sm:text-2xl lg:text-3xl">
              {blog.title}
            </h3>

            {/* Excerpt */}
            <p className="mt-2 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
              {blog.excerpt}
            </p>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                  Written by
                </p>
                <p className="text-xs font-bold text-slate-900 sm:text-sm">
                  {blog.author.name}
                </p>
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-sky-700 sm:px-5 sm:py-2.5 sm:text-sm">
                Read Article
                <FiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </TrackingLink>
    </section>
  );
}