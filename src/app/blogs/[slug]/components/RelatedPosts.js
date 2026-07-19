import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function RelatedPosts({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      {/* Header */}
      <div className="mb-8 text-center sm:mb-10 lg:mb-12">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
          Continue Reading
        </span>

        <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Related Articles
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
          Explore more health articles, wellness tips, and expert insights
          from DK Bhangal Lab.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl sm:rounded-3xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={700}
                height={450}
                className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur">
                {blog.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 sm:text-sm">
                <span className="flex items-center gap-2">
                  <FiCalendar className="text-sky-600" />
                  {blog.publishedAt}
                </span>

                <span className="flex items-center gap-2">
                  <FiClock className="text-sky-600" />
                  {blog.readingTime}
                </span>
              </div>

              <h3 className="line-clamp-2 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-sky-600 sm:text-2xl">
                {blog.title}
              </h3>

              <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600 sm:text-base">
                {blog.excerpt}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-sky-600">
                Read Article

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}