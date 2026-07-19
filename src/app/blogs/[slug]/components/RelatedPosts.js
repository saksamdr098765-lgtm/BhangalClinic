import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";

export default function RelatedPosts({ blogs = [] }) {
  if (!blogs.length) return null;

  return (
    <section>
      <div className="mb-12 text-center">
        <span className="inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
          Continue Reading
        </span>

        <h2 className="mt-4 text-4xl font-bold text-slate-900">
          Related Articles
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Explore more health articles and expert insights from DK Bhangal Lab.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}

            <div className="relative overflow-hidden">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={700}
                height={450}
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur">
                {blog.category}
              </span>
            </div>

            {/* Content */}

            <div className="p-6">
              <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <FiCalendar className="text-sky-600" />
                  {blog.publishedAt}
                </span>

                <span className="flex items-center gap-1">
                  <FiClock className="text-sky-600" />
                  {blog.readingTime}
                </span>
              </div>

              <h3 className="line-clamp-2 text-2xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600">
                {blog.title}
              </h3>

              <p className="mt-4 line-clamp-3 text-slate-600">
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