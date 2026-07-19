import Link from "next/link";
import { FiChevronRight, FiHome } from "react-icons/fi";

export default function Breadcrumb({ blog }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm"
    >
      <Link
        href="/"
        className="flex items-center gap-1 text-gray-500 transition-colors hover:text-sky-600"
      >
        <FiHome className="h-4 w-4" />
        Home
      </Link>

      <FiChevronRight className="h-4 w-4 text-gray-400" />

      <Link
        href="/blogs"
        className="text-gray-500 transition-colors hover:text-sky-600"
      >
        Blogs
      </Link>

      <FiChevronRight className="h-4 w-4 text-gray-400" />

      <span className="font-medium text-sky-600">
        {blog.title}
      </span>
    </nav>
  );
}