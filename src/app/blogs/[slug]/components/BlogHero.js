import Image from "next/image";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";

export default function BlogHero({ blog }) {
  return (
    <section className="space-y-10">
      {/* Category */}

      <div>
        <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-sm font-semibold text-sky-700">
          {blog.category}
        </span>
      </div>

      {/* Title */}

      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
          {blog.title}
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          {blog.excerpt}
        </p>
      </div>

      {/* Author */}

      <div className="flex flex-wrap items-center gap-6 border-y border-slate-200 py-6">
        <div className="flex items-center gap-3">
          {blog.author.image ? (
            <Image
              src={blog.author.image}
              alt={blog.author.name}
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-sky-100"
            />
          ) : (
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              <FiUser size={22} />
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

        <div className="hidden h-10 w-px bg-slate-200 md:block" />

        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500">
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

      <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={1600}
          height={900}
          priority
          className="aspect-[16/9] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}