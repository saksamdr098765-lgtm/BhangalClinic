import TrackingLink from "@/app/components/TrackingLink";
import { FiChevronRight, FiHome } from "react-icons/fi";

export default function Breadcrumb({ blog }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 overflow-x-auto"
    >
      <ol className="flex min-w-max items-center gap-2 text-xs sm:text-sm">
        <li>
          <TrackingLink
            href="/"
            tracking="breadcrumb-home"
            className="flex items-center gap-1 rounded-lg px-1 py-1 text-slate-500 transition-colors hover:text-sky-600"
          >
            <FiHome className="h-4 w-4 shrink-0" />
            <span>Home</span>
          </TrackingLink>
        </li>

        <li>
          <FiChevronRight className="h-4 w-4 text-slate-400" />
        </li>

        <li>
          <TrackingLink
            href="/blogs"
            tracking="breadcrumb-blogs"
            className="rounded-lg px-1 py-1 text-slate-500 transition-colors hover:text-sky-600"
          >
            Blogs
          </TrackingLink>
        </li>

        <li>
          <FiChevronRight className="h-4 w-4 text-slate-400" />
        </li>

        <li
          className="max-w-[180px] truncate font-medium text-sky-600 sm:max-w-xs lg:max-w-md"
          title={blog.title}
        >
          {blog.title}
        </li>
      </ol>
    </nav>
  );
}