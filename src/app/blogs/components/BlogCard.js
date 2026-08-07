import Image from "next/image";
import TrackingLink from "@/app/components/TrackingLink";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
} from "react-icons/fi";

export default function BlogCard({ blog }) {
  return (
    <TrackingLink
      href={`/blogs/${blog.slug}`}
      tracking={`blog-card-${blog.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-md"
    >
      {/* Cover Image */}
      <div className="relative overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={700}
          height={450}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-semibold text-sky-700 backdrop-blur">
          {blog.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Meta */}
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

        {/* Title */}
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 transition-colors group-hover:text-sky-600 sm:text-lg">
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 line-clamp-2 flex-1 text-xs leading-5 text-slate-600 sm:text-sm">
          {blog.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
          <div>
            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              By
            </p>

            <p className="font-semibold text-slate-900">
              {blog.author.name}
            </p>
          </div>

          <span className="inline-flex items-center gap-1 font-bold text-sky-600">
            Read More
            <FiArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </TrackingLink>
  );
}