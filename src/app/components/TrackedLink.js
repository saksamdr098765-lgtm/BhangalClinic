"use client";

import Link from "next/link";
import { trackPageNavigation } from "@/app/lib/tracking";

export default function TrackedLink({
  href,
  tracking,
  children,
  className,
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackPageNavigation(tracking)}
    >
      {children}
    </Link>
  );
}