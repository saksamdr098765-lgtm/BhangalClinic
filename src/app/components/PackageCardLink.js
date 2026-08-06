"use client";

import TrackedLink from "./TrackedLink";
import { trackPackageClick } from "../lib/tracking";

export default function PackageLink({
  href,
  tracking,
  children,
  className,
  ...props
}) {
  return (
    <TrackedLink
      href={href}
      tracking={tracking}
      className={className}
      onClick={() => trackPackageClick(tracking)}
      {...props}
    >
      {children}
    </TrackedLink>
  );
}