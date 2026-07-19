import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl"
    >
      {/* Cover Image */}

      <div className="relative overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={700}
          height={450}
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Category */}

        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 backdrop-blur">
          {blog.category}
        </span>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">
        {/* Meta */}

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

        {/* Title */}

        <h3 className="line-clamp-2 text-2xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-sky-600">
          {blog.title}
        </h3>

        {/* Excerpt */}

        <p className="mt-4 line-clamp-3 flex-1 leading-7 text-slate-600">
          {blog.excerpt}
        </p>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              By
            </p>

            <p className="font-semibold text-slate-900">
              {blog.author.name}
            </p>
          </div>

          <span className="inline-flex items-center gap-2 font-semibold text-sky-600">
            Read More

            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}