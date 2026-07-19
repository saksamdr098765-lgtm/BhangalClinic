"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiClock,
  FiTag,
} from "react-icons/fi";
import { blogs } from "@/app/data/blogs";
import BlogCard from "@/app/blogs/components/BlogCard";


export default function RelatedBlogs({ location }) {
  const relatedBlogs = blogs
    .filter((blog) => location.blogs.includes(blog.slug))
    .slice(0, 3);

  if (!relatedBlogs.length) return null;

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
            Health Education
          </span>

          <h2 className="mt-5 text-3xl font-black text-slate-900 sm:text-4xl">
            Read Our Health & Wellness Articles
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Learn more about common health conditions, preventive healthcare,
            blood tests, nutrition, and diagnostic services through our
            informative health blogs written to help patients make informed
            healthcare decisions.
          </p>
        </div>

        {/* Blog Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {relatedBlogs.map((blog) => (
          <BlogCard blog={blog} key={blog.slug}></BlogCard>
          ))}
        </div>

        {/* Bottom Section */}

        <div className="mt-16 rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:flex lg:items-center lg:justify-between lg:p-10">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Stay Updated With Reliable Health Information
            </h3>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              Our health blog covers preventive healthcare, diagnostic tests,
              nutrition, lifestyle tips, and common medical conditions to help
              you better understand your health. Regular reading empowers you to
              make informed healthcare decisions and recognize when professional
              medical advice is needed.
            </p>
          </div>

          <Link
            href="/blogs"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-7 py-4 font-semibold text-white transition hover:bg-sky-700 lg:mt-0"
          >
            View All Blogs

            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}