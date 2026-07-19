import SITE_CONFIG from "@/app/SITE_CONFIG";
import Image from "next/image";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";

export default function BlogHero({ blog }) {
  return (
    <section className="space-y-6 sm:space-y-8 lg:space-y-10">
      {/* Category */}
      <div>
        <span className="inline-flex items-center rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold tracking-wide text-sky-700 sm:px-4 sm:py-1.5 sm:text-sm">
          {blog.category}
        </span>
      </div>

      {/* Title */}
      <div className="max-w-4xl">
        <h1 className="text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
          {blog.title}
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8 lg:text-xl">
          {blog.excerpt}
        </p>
      </div>

      {/* Author & Meta */}
      <div className="flex flex-col gap-5 border-y border-slate-200 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-6">
        {/* Author */}
        <div className="flex items-center gap-3">
          {blog.author.image ? (
            <Image
              src={SITE_CONFIG.logo}
              alt={blog.author.name}
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-sky-100 sm:h-14 sm:w-14"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600 sm:h-14 sm:w-14">
              <FiUser className="h-6 w-6" />
            </div>
          )}

          <div>
            <p className="font-semibold text-slate-900">
              {blog.author.name}
            </p>

            <p className="text-sm text-slate-500">
              Healthcare Expert
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-5 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <FiCalendar className="text-sky-600" />
            <span>{blog.publishedAt}</span>
          </div>

          <div className="flex items-center gap-2">
            <FiClock className="text-sky-600" />
            <span>{blog.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 sm:rounded-3xl">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={1600}
          height={900}
          priority
          className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}