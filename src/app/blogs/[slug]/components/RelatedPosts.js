import Image from "next/image";
import TrackingLink from "@/app/components/TrackingLink";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function RelatedPosts({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section className="mt-6 sm:mt-8">
      {/* Header */}
      <div className="mb-4 text-center">
        <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700">
          Continue Reading
        </span>

        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Related Articles
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-600 sm:text-base sm:leading-7">
          Explore more health articles, wellness tips, and expert insights from DK Bhangal Lab.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <TrackingLink
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            tracking={`blog-related-post-${blog.slug}`}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={700}
                height={450}
                className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-sky-700 backdrop-blur">
                {blog.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col justify-between p-4">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="text-sky-600" />
                    {blog.publishedAt}
                  </span>

                  <span className="flex items-center gap-1">
                    <FiClock className="text-sky-600" />
                    {blog.readingTime}
                  </span>
                </div>

                <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600 sm:text-lg">
                  {blog.title}
                </h3>

                <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600 sm:text-sm">
                  {blog.excerpt}
                </p>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-3 inline-flex items-center gap-1 text-xs font-bold text-sky-600">
                Read Article
                <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </TrackingLink>
        ))}
      </div>
    </section>
  );
}