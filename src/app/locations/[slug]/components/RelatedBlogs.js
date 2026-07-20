"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { blogs } from "@/app/data/blogs";
import BlogCard from "@/app/blogs/components/BlogCard";

export default function RelatedBlogs({ location }) {
  const relatedBlogs = blogs
    .filter((blog) => location.blogs.includes(blog.slug))
    .slice(0, 3);

  if (!relatedBlogs.length) return null;

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-3 py-1.5 text-xs font-semibold text-sky-700 sm:px-4 sm:py-2 sm:text-sm">
            Health Education
          </span>

          <h2 className="mt-4 text-2xl font-black leading-tight text-slate-900 sm:mt-5 sm:text-3xl lg:text-4xl">
            Read Our Health & Wellness Articles
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base lg:text-lg lg:leading-8">
            Learn more about common health conditions, preventive healthcare,
            blood tests, nutrition, and diagnostic services through our
            informative health blogs written to help patients make informed
            healthcare decisions.
          </p>
        </div>

        {/* Blog Cards */}

        <div className="mt-10 grid gap-6 sm:mt-12 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {relatedBlogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:mt-16 sm:rounded-3xl sm:p-8 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Stay Updated With Reliable Health Information
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
              Our health blog covers preventive healthcare, diagnostic tests,
              nutrition, lifestyle tips, and common medical conditions to help
              you better understand your health. Regular reading empowers you
              to make informed healthcare decisions and recognize when
              professional medical advice is needed.
            </p>
          </div>

          <Link
            href="/blogs"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700 sm:mt-8 sm:rounded-2xl sm:px-7 sm:py-4 lg:mt-0"
          >
            View All Blogs

            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}