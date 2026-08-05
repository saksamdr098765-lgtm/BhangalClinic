"use client";

import Link from "next/link";
import { trackPackageClick } from "../lib/tracking";

export default function PackageLink({
  href,
  tracking,
  children,
  className,
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackPackageClick(tracking)}
    >
      {children}
    </Link>
  );
}