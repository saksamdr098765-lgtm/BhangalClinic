"use client";

import Link from "next/link";
import { trackPageNavigation } from "@/app/lib/tracking";

export default function TrackedLink({
  href,
  tracking,
  children,
  className,
  onClick,
  ...props
}) {
  const handleClick = (e) => {
    if (tracking) {
      if (typeof tracking === "string") {
        trackPageNavigation(tracking);
      } else {
        trackEvent(tracking);
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      href={href}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}

export { TrackedLink as TrackingLink };
