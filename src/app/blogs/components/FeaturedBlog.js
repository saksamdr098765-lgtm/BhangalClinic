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
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
            Featured Article
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Editor's Pick
          </h2>
        </div>
      </div>

      <Link
        href={`/blogs/${blog.slug}`}
        className="group block overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="grid lg:grid-cols-2">
          {/* Image */}

          <div className="relative overflow-hidden">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute left-6 top-6">
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-sky-700 backdrop-blur">
                {blog.category}
              </span>
            </div>
          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-10 lg:p-14">
            <div className="mb-6 flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <FiCalendar className="text-sky-600" />
                {blog.publishedAt}
              </span>

              <span className="flex items-center gap-2">
                <FiClock className="text-sky-600" />
                {blog.readingTime}
              </span>
            </div>

            <h2 className="text-4xl font-black leading-tight text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
              {blog.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {blog.excerpt}
            </p>

            <div className="mt-10 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Written by
                </p>

                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {blog.author.name}
                </p>
              </div>

              <span className="inline-flex items-center gap-3 rounded-2xl bg-sky-600 px-6 py-4 font-semibold text-white transition-all duration-300 group-hover:bg-sky-700">
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